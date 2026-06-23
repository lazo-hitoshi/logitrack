import React, { useMemo, useEffect, useRef, useState } from 'react';
import {
  AlertTriangle,
  Anchor,
  Calendar,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Cpu,
  ExternalLink,
  FileText,
  Image as ImageIcon,
  Key,
  LayoutDashboard,
  Loader2,
  Sparkles,
  Trash2,
  Upload,
  X,
  ZoomIn,
  ZoomOut
} from 'lucide-react';

// --- Firebase Imports ---
import { initializeApp, getApp, getApps } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signInAnonymously,
  signInWithCustomToken,
  type User
} from 'firebase/auth';
import { collection, doc, getFirestore, onSnapshot, writeBatch } from 'firebase/firestore';

// --- Gemini API SDK ---
import { GoogleGenerativeAI } from '@google/generative-ai';

declare global {
  interface Window {
    firebaseConfig?: unknown;
    SCANNED_FULL_DATA?: unknown;
  }
}

type BerthSchedule = {
  id?: string;
  date: string; // YYYY-MM-DD
  berthName: string;
  shipName: string;
  eta: string; // HH:mm or "-"
  etd: string; // HH:mm or "-"
  cargo: string;
  status: '予定' | '作業中' | '完了' | '未定';
  trucksPlanned: number;
  trucksArrived: number;
  createdAt?: any;
};

// 予定の移動履歴（ドラッグ＆ドロップや編集での日付/バース変更を記録）
type MoveLog = {
  id: string;
  shipName: string;
  fromDate: string;
  toDate: string;
  fromBerth?: string;
  toBerth?: string;
  changedAt: string; // ISO
};

let app: any;
let auth: any;
let db: any;
let appId = 'soma-port-demo';

// Firebase Web設定（APIキーは秘匿情報ではないため、既定値として持ってOK）
// ただしプロジェクトを切り替えたい場合は soma-port/.env の VITE_FIREBASE_* を優先して使います。
const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyDDi3s1qJnNL_k8FtPPfAACCsCorj1XL1g",
  authDomain: "unkou-final.firebaseapp.com",
  projectId: "unkou-final",
  storageBucket: "unkou-final.firebasestorage.app",
  messagingSenderId: "841308334866",
  appId: "1:841308334866:web:dea92056a618686a5561cb"
};

function safeGetEnv(name: string): string {
  try {
    // main.tsx で window.importMeta = import.meta として注入（できない環境もあるのでtry/catch）
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w: any = window as any;
    const v = w?.importMeta?.env?.[name];
    return typeof v === 'string' ? v : '';
  } catch {
    // noop
  }
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w: any = window as any;
    const v = w?.process?.env?.[name];
    return typeof v === 'string' ? v : '';
  } catch {
    return '';
  }
}

function envFirebaseConfig() {
  const cfg = {
    apiKey: safeGetEnv('VITE_FIREBASE_API_KEY'),
    authDomain: safeGetEnv('VITE_FIREBASE_AUTH_DOMAIN'),
    projectId: safeGetEnv('VITE_FIREBASE_PROJECT_ID'),
    storageBucket: safeGetEnv('VITE_FIREBASE_STORAGE_BUCKET'),
    messagingSenderId: safeGetEnv('VITE_FIREBASE_MESSAGING_SENDER_ID'),
    appId: safeGetEnv('VITE_FIREBASE_APP_ID')
  };
  // 必須の最低限
  if (!cfg.apiKey || !cfg.projectId) return null;
  return cfg;
}

function isValidFirebaseConfig(cfg: any): boolean {
  return !!cfg && typeof cfg === 'object' && typeof cfg.apiKey === 'string' && cfg.apiKey.length > 10;
}

function initFirebaseOnce() {
  try {
    let config: any = null;
    // @ts-ignore (Canvasなどで注入される変数)
    if (typeof __firebase_config !== 'undefined' && __firebase_config) {
      // @ts-ignore
      config = JSON.parse(__firebase_config);
    }
    // @ts-ignore
    if (typeof __app_id !== 'undefined' && __app_id) appId = __app_id;

    if (!config && isValidFirebaseConfig((window as any).firebaseConfig)) {
      config = (window as any).firebaseConfig;
    }
    if (!config) {
      config = envFirebaseConfig();
    }

    if (!config) {
      // 既定（unkou-final）にフォールバック
      config = DEFAULT_FIREBASE_CONFIG;
    }

    app = getApps().length > 0 ? getApp() : initializeApp(config);
    auth = getAuth(app);
    db = getFirestore(app);
  } catch (e) {
    console.error('Firebase initialization failed:', e);
  }
}

initFirebaseOnce();

// --- モック（AI/OCR未導入時の代替） ---
const SCANNED_FULL_DATA: Omit<BerthSchedule, 'id'>[] = Array.isArray((window as any).SCANNED_FULL_DATA)
  ? ((window as any).SCANNED_FULL_DATA as any[]).filter(Boolean)
  : [];

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden ${className}`}>
    {children}
  </div>
);

const MonthlyCalendarView = ({
  schedules,
  onDateSelect,
  currentDate,
  onMoveEntry,
  onSelectShip
}: {
  schedules: BerthSchedule[],
  onDateSelect: (date: string) => void,
  currentDate: string,
  onMoveEntry?: (entryId: string, toDate: string) => void,
  onSelectShip?: (s: BerthSchedule) => void
}) => {
  const [dragOverDate, setDragOverDate] = useState<string | null>(null);
  // currentDateを基準に、その月の1日から末日までを表示
  const baseDate = new Date(currentDate);
  const year = baseDate.getFullYear();
  const month = baseDate.getMonth();
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0); // 月末日

  const calendarDays: Date[] = [];
  let d = new Date(startDate);
  while (d <= endDate) {
    calendarDays.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }

  const getSchedulesForDate = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0];
    return schedules.filter(s => s.date === dateStr);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-7 gap-1 mb-1">
        {['日', '月', '火', '水', '木', '金', '土'].map((day, i) => (
          <div key={i} className={`text-center text-xs font-bold py-2 ${i === 0 ? 'text-rose-500' : i === 6 ? 'text-blue-500' : 'text-slate-500'}`}>
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 auto-rows-fr">
        {calendarDays.map((day, i) => {
          const dateStr = day.toISOString().split('T')[0];
          const isSelected = dateStr === currentDate;
          const daySchedules = getSchedulesForDate(day);
          // 表示中の月かどうか（以前は1月固定のバグで全日が薄く表示されていた）
          const isCurrentMonth = day.getMonth() === month;

          return (
            <div
              key={i}
              role="button"
              onClick={() => onDateSelect(dateStr)}
              onDragOver={(e) => { if (onMoveEntry) { e.preventDefault(); setDragOverDate(dateStr); } }}
              onDragLeave={() => setDragOverDate((prev) => (prev === dateStr ? null : prev))}
              onDrop={(e) => {
                e.preventDefault();
                setDragOverDate(null);
                const id = e.dataTransfer.getData('text/plain');
                if (id && onMoveEntry) onMoveEntry(id, dateStr);
              }}
              className={`
                min-h-[120px] p-2 rounded-xl border text-left flex flex-col transition-all cursor-pointer
                ${dragOverDate === dateStr
                  ? 'ring-2 ring-emerald-400 bg-emerald-50 border-emerald-300'
                  : isSelected ? 'ring-2 ring-indigo-500 bg-indigo-50 border-indigo-200' : 'border-slate-100 bg-white hover:bg-slate-50'}
                ${!isCurrentMonth ? 'opacity-40' : ''}
              `}
            >
              <div className="flex justify-between items-start mb-1">
                <span className={`text-sm font-bold ${day.getDay() === 0 ? 'text-rose-500' : day.getDay() === 6 ? 'text-blue-500' : 'text-slate-700'}`}>
                  {day.getDate()}
                </span>
                {daySchedules.length > 0 && (
                  <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded-full text-slate-500 font-bold">
                    {daySchedules.length}
                  </span>
                )}
              </div>
              <div className="space-y-1 flex-1 w-full overflow-hidden">
                {daySchedules.slice(0, 4).map((s, idx) => (
                  <div
                    key={idx}
                    draggable={!!onMoveEntry && !!s.id}
                    onDragStart={(e) => { if (s.id) { e.dataTransfer.setData('text/plain', s.id); e.dataTransfer.effectAllowed = 'move'; } }}
                    onClick={(e) => { e.stopPropagation(); if (onSelectShip) onSelectShip(s); }}
                    title="ドラッグで別の日へ移動 / クリックで編集"
                    className="text-[11px] leading-tight truncate w-full flex items-center bg-slate-50 border border-slate-200 rounded px-1 py-0.5 text-slate-800 font-semibold cursor-grab active:cursor-grabbing hover:bg-indigo-50 hover:border-indigo-300"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full mr-1 shrink-0 ${s.status === '作業中' ? 'bg-indigo-500' : s.status === '完了' ? 'bg-slate-400' : 'bg-emerald-500'}`}></div>
                    {s.shipName}
                  </div>
                ))}
                {daySchedules.length > 4 && <div className="text-[10px] text-slate-600 pl-1 font-bold">+他{daySchedules.length - 4}件</div>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const DailyScheduleView = ({ schedules, onSelect, date }: { schedules: BerthSchedule[], onSelect: (schedule: BerthSchedule) => void, date: string }) => {
  const [showOnlyActive, setShowOnlyActive] = useState(false);
  const hours = [0, 4, 8, 12, 16, 20, 24];
  const berthGroups = [
    { name: '1号埠頭', berths: ['1-1', '1-2', '1-3A', '1-3B', '1-4', '1-5', '1-6', '1-7', '1-8'] },
    { name: '2号埠頭', berths: ['2-1', '2-2', '2-3', '2-4(西)', '2-4(東)'] },
    { name: '3号埠頭', berths: ['3-1(西)', '3-1(東)', '3-4'] },
    { name: '4号埠頭', berths: ['4-1', '4-2'] },
    { name: '5号埠頭', berths: ['5-1', '5-2', '5-3', '5-4'] }
  ];

  const getPosition = (timeStr: string) => {
    if (timeStr === '-' || !timeStr) return 0;
    const [h, m] = timeStr.split(':').map(Number);
    return ((h + (m || 0) / 60) * (100 / 24));
  };

  const getDuration = (start: string, end: string) => {
    if (start === '-' || !start) return 0;
    const posStart = getPosition(start);
    const posEnd = getPosition(end);
    let duration = posEnd - posStart;
    if (duration <= 0) duration = 100 - posStart;
    return duration;
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-bold text-slate-500">{date} の詳細計画</div>
        <button onClick={() => setShowOnlyActive(!showOnlyActive)} className={`flex items-center text-xs px-3 py-1.5 rounded-full border transition-colors ${showOnlyActive ? 'bg-indigo-50 border-indigo-200 text-indigo-700 font-medium' : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'}`}>
          {showOnlyActive ? '予定ありのみ表示' : '全バース表示'}
        </button>
      </div>

      <div className="w-full overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
        <div className="min-w-[800px] bg-white">
          <div className="flex border-b border-slate-200 bg-slate-50 sticky top-0 z-10 h-10">
            <div className="w-24 flex-shrink-0 text-[10px] font-bold text-slate-400 uppercase pl-4 flex items-center border-r border-slate-200">バース</div>
            <div className="flex-1 relative">
              {hours.map((h) => (
                <div key={h} className="absolute text-[9px] font-bold text-slate-400 transform -translate-x-1/2 top-3" style={{ left: `${(h / 24) * 100}%` }}>
                  {h}:00
                </div>
              ))}
            </div>
          </div>
          <div className="divide-y divide-slate-100">
            {berthGroups.map((group) => {
              const hasShip = group.berths.some(b => schedules.find(s => s.berthName === b));
              if (showOnlyActive && !hasShip) return null;
              return (
                <div key={group.name}>
                  <div className="bg-slate-50/80 px-4 py-1.5 text-[10px] font-bold text-slate-600 border-l-4 border-l-indigo-500">{group.name}</div>
                  {group.berths.map((berth, idx) => {
                    const ship = schedules.find(s => s.berthName === berth);
                    if (showOnlyActive && !ship) return null;
                    return (
                      <div key={berth} className={`flex items-center group relative h-12 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/20'}`}>
                        <div className="w-24 flex-shrink-0 border-r border-slate-200 h-full flex items-center pl-4 text-[10px] font-bold text-slate-500">{berth}</div>
                        <div className="flex-1 relative h-full">
                          {hours.map(h => <div key={h} className="absolute top-0 bottom-0 border-l border-slate-100" style={{ left: `${(h / 24) * 100}%` }}></div>)}
                          {ship && (
                            <button
                              onClick={() => onSelect(ship)}
                              title={`${ship.shipName} ${ship.eta}-${ship.etd} ${ship.cargo}`}
                              className={`absolute top-1.5 bottom-1.5 rounded-lg shadow-sm border text-left px-3 flex flex-col justify-center transition-all hover:scale-[1.02] z-10 overflow-hidden ${ship.status === '作業中' ? 'bg-indigo-600 text-white border-indigo-700' : ship.status === '完了' ? 'bg-slate-200 border-slate-300 text-slate-600' : 'bg-emerald-500 text-white border-emerald-600'}`}
                              style={{ left: `${getPosition(ship.eta)}%`, width: `${Math.max(10, getDuration(ship.eta, ship.etd))}%` }}
                            >
                              <div className="font-bold text-[10px] truncate leading-tight">{ship.shipName}</div>
                              <div className="text-[8px] opacity-80 font-mono mt-0.5">{ship.eta}-{ship.etd}</div>
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

function safeJsonParseArray(text: string): any[] | null {
  const trimmed = text.trim();
  const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  const body = fenced ? fenced[1] : trimmed;
  try {
    const v = JSON.parse(body);
    return Array.isArray(v) ? v : null;
  } catch {
    return null;
  }
}

function coerceScheduleRows(rows: any[]): Omit<BerthSchedule, 'id'>[] {
  const okStatus = new Set(['予定', '作業中', '完了', '未定']);
  const out: Omit<BerthSchedule, 'id'>[] = [];
  for (const r of rows) {
    if (!r || typeof r !== 'object') continue;
    const date = String((r as any).date || '').trim();
    const berthName = String((r as any).berthName || '').trim();
    let shipName = String((r as any).shipName || '').trim();
    // 船名がない場合は未定で補完して行を残す
    if (!shipName) shipName = '未定';
    // 日付がない場合は当日で補完（見出しに日付がある表もあるため）
    const finalDate = date || new Date().toISOString().split('T')[0];
    if (!finalDate || !berthName) continue;
    const eta = String((r as any).eta ?? '-').trim() || '-';
    const etd = String((r as any).etd ?? '-').trim() || '-';
    const cargo = String((r as any).cargo || '').trim();
    const status = okStatus.has(String((r as any).status)) ? (String((r as any).status) as any) : '未定';
    const trucksPlanned = Number.isFinite(Number((r as any).trucksPlanned)) ? Number((r as any).trucksPlanned) : 0;
    const trucksArrived = Number.isFinite(Number((r as any).trucksArrived)) ? Number((r as any).trucksArrived) : 0;
    out.push({ date: finalDate, berthName, shipName, eta, etd, cargo, status, trucksPlanned, trucksArrived });
  }
  return out;
}

function makeDeterministicId(d: Omit<BerthSchedule, 'id'>): string {
  const raw = `${d.date || ''}_${d.berthName || ''}_${d.shipName || ''}`;
  return raw
    .replace(/[\s\/\\,:()\[\]{}"'<>@#%\^\*\+\=\?\|]+/g, '_')
    .replace(/__+/g, '_')
    .slice(0, 180);
}

function mergeRows(existing: any[], incoming: Omit<BerthSchedule, 'id'>[], now: Date) {
  const map = new Map<string, any>();
  const keyOf = (r: any) => `${r.date}||${r.berthName}||${r.shipName}`;
  for (const e of existing) {
    try { map.set(keyOf(e), e); } catch { /* noop */ }
  }
  for (const inc of incoming) {
    const key = keyOf(inc);
    const id = makeDeterministicId(inc);
    map.set(key, { id, ...inc, createdAt: now });
  }
  return Array.from(map.values());
}

async function fileToBase64(file: File): Promise<string> {
  if (file.size > 15 * 1024 * 1024) {
    throw new Error('ファイルが大きすぎます（15MB以下にしてください）');
  }
  const buf = await file.arrayBuffer();
  let binary = '';
  const bytes = new Uint8Array(buf);
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

function dataUrlToBase64(dataUrl: string): { base64: string; mimeType: string } {
  const m = String(dataUrl || '').match(/^data:([^;]+);base64,(.+)$/);
  if (!m) return { base64: '', mimeType: 'application/octet-stream' };
  return { mimeType: m[1], base64: m[2] };
}

async function imageFileToCompressedJpegBase64(file: File, maxDim = 1600, quality = 0.72): Promise<string> {
  const url = await fileToDataUrl(file);
  const img = new Image();
  img.decoding = 'async';
  img.src = url;
  await new Promise<void>((resolve, reject) => {
    img.onload = () => resolve();
    img.onerror = () => reject(new Error('画像の読み込みに失敗しました'));
  });

  const w0 = img.naturalWidth || img.width;
  const h0 = img.naturalHeight || img.height;
  const scale = Math.min(1, maxDim / Math.max(w0, h0));
  const w = Math.max(1, Math.round(w0 * scale));
  const h = Math.max(1, Math.round(h0 * scale));

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('canvas context error');
  canvas.width = w;
  canvas.height = h;
  ctx.drawImage(img, 0, 0, w, h);
  const jpegUrl = canvas.toDataURL('image/jpeg', quality);
  return dataUrlToBase64(jpegUrl).base64;
}

async function fileToGeminiInlineData(file: File): Promise<{ data: string; mimeType: string }> {
  const isPdf =
    file.type === 'application/pdf' ||
    (typeof file.name === 'string' && file.name.toLowerCase().endsWith('.pdf'));

  if (isPdf) {
    // PDFは表が横に広いことがあるため、左右クロップを作って結合して送る
    // 精度向上のため pdfToJpegDataUrlsForOpenAi を利用（左右2枚を返す設計）
    const dataUrls = await pdfToJpegDataUrlsForOpenAi(file, 1);
    if (!dataUrls || dataUrls.length === 0) throw new Error('PDFの画像化に失敗しました');

    // 複数枚なら横に結合して1枚にする
    const imgs: HTMLImageElement[] = [];
    for (const url of dataUrls) {
      const img = new Image();
      img.src = url;
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject(new Error('画像の読み込みに失敗しました'));
      });
      imgs.push(img);
    }

    let totalW = 0;
    let maxH = 0;
    for (const im of imgs) {
      totalW += im.naturalWidth || im.width;
      maxH = Math.max(maxH, im.naturalHeight || im.height);
    }

    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.floor(totalW));
    canvas.height = Math.max(1, Math.floor(maxH));
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('canvas context error');
    let ox = 0;
    for (const im of imgs) {
      const w = im.naturalWidth || im.width;
      const h = im.naturalHeight || im.height;
      ctx.drawImage(im, 0, 0, w, h, ox, 0, w, h);
      ox += w;
    }

    const jpegUrl = canvas.toDataURL('image/jpeg', 0.78);
    const { base64 } = dataUrlToBase64(jpegUrl);
    if (!base64) throw new Error('PDFの画像化に失敗しました');
    console.debug('[debug] fileToGeminiInlineData: merged pdf -> jpeg size bytes', Math.floor((base64.length * 3) / 4), 'mime=image/jpeg');
    return { data: base64, mimeType: 'image/jpeg' };
  }

  // 画像は縮小してJPEG化
  const base64 = await imageFileToCompressedJpegBase64(file, 1200, 0.65);
  console.debug('[debug] fileToGeminiInlineData: image -> jpeg size bytes', Math.floor((base64.length * 3) / 4), 'mime=image/jpeg');
  if (!base64) throw new Error('画像の変換に失敗しました');
  return { data: base64, mimeType: 'image/jpeg' };
}

async function callGeminiScheduleApi(file: File, apiKey: string): Promise<Omit<BerthSchedule, 'id'>[]> {
  const inline = await fileToGeminiInlineData(file);

  const prompt = `
この港湾スケジュールの資料（PDF/JPG）からデータを抽出し、**JSON配列のみ**で返してください（説明文やコードフェンスは禁止）。

スキーマ（配列の各要素）:
{
  "date": "YYYY-MM-DD",
  "berthName": "1-3A など",
  "shipName": "船名（未定なら未定）",
  "eta": "HH:mm または '-'",
  "etd": "HH:mm または '-'",
  "cargo": "貨物内容（不明/未定も可）",
  "status": "予定|作業中|完了|未定",
  "trucksPlanned": number,
  "trucksArrived": number
}

注意:
- 日付が「1月17日」等の場合は、年（2026）を補完してください
- 時刻が「0800」等なら「08:00」に変換してください
- 時刻が不明なら '-' にしてください
- trucksPlanned/trucksArrived が読めない場合は 0
- 可能な限り表の全行を抽出してください
`.trim();

  const genAI = new GoogleGenerativeAI(apiKey);
  // モデル名は提供状況で変わるため、複数候補から自動でフォールバックする
  const candidateModels = [
    'gemini-1.5-flash',
    'gemini-1.5-pro',
    'gemini-2.0-flash',
    'gemini-2.0-flash-lite'
  ];

  const imagePart = {
    inlineData: {
      data: inline.data,
      mimeType: inline.mimeType
    }
  };

  let lastModelErr: any = null;
  let text = '';
  for (const modelName of candidateModels) {
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent([prompt, imagePart as any]);
      const response = result.response;
      text = response.text();
      lastModelErr = null;
      break;
    } catch (e: any) {
      lastModelErr = e;
      const msg = String(e?.message || e || '');
      // 404: model not found（モデル名/提供APIの不一致）→ 次候補へ
      if (msg.includes('404') || msg.toLowerCase().includes('not found')) {
        continue;
      }
      // 429: quota exceeded / resource exhausted → 次候補（別モデル）を試す
      if (
        msg.includes('429') ||
        msg.toLowerCase().includes('quota') ||
        msg.toLowerCase().includes('resource_exhausted')
      ) {
        continue;
      }
      // それ以外は即エラー（課金/権限/サイズ等）
      throw e;
    }
  }
  if (lastModelErr) {
    const msg = String(lastModelErr?.message || lastModelErr || '');
    if (msg.includes('429') || msg.toLowerCase().includes('quota')) {
      throw new Error(
        'Geminiの利用上限（429: Quota exceeded）に達しています。時間を置くか、別プロジェクト/別APIキーで実行してください（無料枠の場合は特に発生しやすいです）。'
      );
    }
    throw new Error(
      `Geminiモデルが見つかりませんでした（モデル名/提供APIの不一致の可能性）。APIキーの発行元（AI StudioのGemini API / Generative Language API）と利用可能モデルを確認してください。元エラー: ${msg}`
    );
  }

  const arr = safeJsonParseArray(text);
  if (!arr) throw new Error('Gemini response is not a JSON array');
  const rows = coerceScheduleRows(arr);
  if (rows.length === 0) throw new Error('No rows parsed from Gemini response');
  return rows;
}

async function fileToDataUrl(file: File): Promise<string> {
  const buf = await file.arrayBuffer();
  const bytes = new Uint8Array(buf);
  let binary = '';
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  const b64 = btoa(binary);
  const mime = file.type || 'application/octet-stream';
  return `data:${mime};base64,${b64}`;
}

async function pdfToJpegDataUrls(file: File, maxPages = 1): Promise<string[]> {
  // pdfjsは重いので動的import（必要なときだけ読み込む）
  const pdfjs: any = await import('pdfjs-dist');
  const workerMod: any = await import('pdfjs-dist/build/pdf.worker.mjs?url');
  pdfjs.GlobalWorkerOptions.workerSrc = workerMod.default;

  const data = new Uint8Array(await file.arrayBuffer());
  const doc = await pdfjs.getDocument({ data }).promise;
  const pageCount = Math.min(maxPages, doc.numPages || 1);
  const out: string[] = [];

  for (let p = 1; p <= pageCount; p++) {
    const page = await doc.getPage(p);
    // 密なガントチャートの文字をAIが読めるよう、解像度を上げる（精度優先）。
    // ただし巨大化しすぎないよう、レンダリング後の横幅が上限を超えたらスケールを自動調整。
    const baseViewport = page.getViewport({ scale: 1 });
    const MAX_WIDTH = 3200; // これ以上はAI側で縮小されるため頭打ち
    const targetScale = Math.min(2.2, MAX_WIDTH / Math.max(1, baseViewport.width));
    const viewport = page.getViewport({ scale: Math.max(1.6, targetScale) });
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('canvas context error');
    canvas.width = Math.floor(viewport.width);
    canvas.height = Math.floor(viewport.height);
    await page.render({ canvasContext: ctx, viewport }).promise;
    out.push(canvas.toDataURL('image/jpeg', 0.85));
  }

  return out;
}

async function pdfToJpegDataUrlsForOpenAi(file: File, maxPages = 1): Promise<string[]> {
  // OpenAIは精度優先だが、Functionsへのリクエストサイズ制限があるため
  // 「左右拡大の2枚」を基本に、解像度/品質を自動で落としてサイズ上限内に収める
  const pdfjs: any = await import('pdfjs-dist');
  const workerMod: any = await import('pdfjs-dist/build/pdf.worker.mjs?url');
  pdfjs.GlobalWorkerOptions.workerSrc = workerMod.default;

  const data = new Uint8Array(await file.arrayBuffer());
  const doc = await pdfjs.getDocument({ data }).promise;
  const pageCount = Math.min(maxPages, doc.numPages || 1);
  const out: string[] = [];

  const estimateBytes = (dataUrl: string) => {
    const idx = dataUrl.indexOf(',');
    const b64 = idx >= 0 ? dataUrl.slice(idx + 1) : dataUrl;
    return Math.floor((b64.length * 3) / 4);
  };

  // 縦に帯（バンド）分割する。各バンドは「全幅（=左端のバース名＋全日付）」を保つので、
  // どのバンドでもバース番号が必ず写り、行ずれ・取りこぼしが起きにくい。
  const BAND_COUNT = 3;
  const buildBands = async (page: any, scale: number, quality: number) => {
    const viewport = page.getViewport({ scale });
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('canvas context error');
    canvas.width = Math.floor(viewport.width);
    canvas.height = Math.floor(viewport.height);
    await page.render({ canvasContext: ctx, viewport }).promise;

    const marginY = Math.floor(canvas.height * 0.03);
    const usableH = Math.max(1, canvas.height - marginY * 2);
    const bandH = Math.floor(usableH / BAND_COUNT);
    const overlap = Math.floor(bandH * 0.14); // バンド境界の船を取りこぼさないよう重ねる

    const bands: string[] = [];
    for (let i = 0; i < BAND_COUNT; i++) {
      const sy = Math.max(0, marginY + i * bandH - (i > 0 ? overlap : 0));
      const sh = Math.min(canvas.height - sy, bandH + overlap * (i > 0 ? 2 : 1));
      const bandCanvas = document.createElement('canvas');
      const bandCtx = bandCanvas.getContext('2d');
      if (!bandCtx) throw new Error('canvas context error');
      bandCanvas.width = canvas.width;
      bandCanvas.height = sh;
      bandCtx.drawImage(canvas, 0, sy, canvas.width, sh, 0, 0, canvas.width, sh);
      bands.push(bandCanvas.toDataURL('image/jpeg', quality));
    }
    return bands;
  };

  for (let p = 1; p <= pageCount; p++) {
    const page = await doc.getPage(p);
    // リクエストサイズ上限を考慮（目安 18MB / 全バンド合計）
    const budget = 18 * 1024 * 1024;
    const candidates: Array<{ scale: number; quality: number }> = [
      { scale: 2.4, quality: 0.85 },
      { scale: 2.2, quality: 0.84 },
      { scale: 2.0, quality: 0.82 },
      { scale: 1.7, quality: 0.80 }
    ];

    let picked: string[] | null = null;
    for (const c of candidates) {
      const bands = await buildBands(page, c.scale, c.quality);
      const bytes = bands.reduce((s, b) => s + estimateBytes(b), 0);
      if (bytes <= budget) {
        picked = bands;
        break;
      }
    }
    if (!picked) {
      // 最後の手段：最低設定（情報が多少欠けても 502 を避ける）
      picked = await buildBands(page, 1.5, 0.75);
    }
    picked.forEach((b) => out.push(b));
  }

  return out.slice(0, BAND_COUNT);
}

async function fileToVisionImages(file: File): Promise<string[]> {
  const isPdf =
    file.type === 'application/pdf' ||
    (typeof file.name === 'string' && file.name.toLowerCase().endsWith('.pdf'));
  if (isPdf) return await pdfToJpegDataUrls(file, 1);
  return [await fileToDataUrl(file)];
}

async function fileToVisionImagesForOpenAi(file: File): Promise<string[]> {
  const isPdf =
    file.type === 'application/pdf' ||
    (typeof file.name === 'string' && file.name.toLowerCase().endsWith('.pdf'));
  if (isPdf) return await pdfToJpegDataUrlsForOpenAi(file, 1);
  // 画像は高めの品質で送る（2回/月の想定）
  const base64 = await imageFileToCompressedJpegBase64(file, 2000, 0.88);
  console.debug('[debug] fileToVisionImagesForOpenAi: image -> dataUrl size bytes', Math.floor((base64.length * 3) / 4));
  return [`data:image/jpeg;base64,${base64}`];
}

async function callOpenAiScheduleApiViaFunction(file: File): Promise<Omit<BerthSchedule, 'id'>[]> {
  const images = await fileToVisionImagesForOpenAi(file);
  try {
    const sizes = images.map(i => {
      const idx = i.indexOf(',');
      const b64 = idx >= 0 ? i.slice(idx + 1) : i;
      return Math.floor((b64.length * 3) / 4);
    });
    console.debug('[debug] callOpenAiScheduleApiViaFunction: prepared images count', images.length, 'sizesBytes', sizes);
  } catch (e) { console.debug('[debug] callOpenAiScheduleApiViaFunction: unable to measure image sizes', e); }
  const maxAttempts = 3;
  const baseDelay = 1000; // ms

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const controller = new AbortController();
    const timeoutMs = 60000; // 60s
    const timeout = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const resp = await fetch('/api/extract-schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ images }),
        signal: controller.signal
      });
      clearTimeout(timeout);

      if (resp.ok) {
        const json = await resp.json();
        const rows = coerceScheduleRows(Array.isArray((json as any)?.rows) ? (json as any).rows : []);
        if (rows.length === 0) throw new Error('OpenAI解析結果が0件でした');
        return rows;
      }

      const t = await resp.text().catch(() => '');
      // transient 502 -> retry
      if (resp.status === 502) {
        if (attempt < maxAttempts) {
          await new Promise((r) => setTimeout(r, baseDelay * Math.pow(2, attempt - 1)));
          continue;
        }
        if (t.includes('<title>502') || t.includes('google.com/images/branding/googlelogo')) {
          throw new Error('OpenAI解析APIエラー: 502（サーバ一時エラー）。30秒ほど待ってから再実行してください。');
        }
        throw new Error(`OpenAI解析APIエラー: 502 ${t}`);
      }

      if (resp.status === 404) {
        throw new Error(
          'OpenAI解析APIが見つかりません（/api/extract-schedule）。Firebase Functionsが未デプロイの可能性があります。' +
            ' ※Functionsのデプロイには Firebase のプランを Blaze（従量課金）へアップグレードし、OPENAI_API_KEY secret を設定する必要があります。'
        );
      }

      throw new Error(`OpenAI解析APIエラー: HTTP ${resp.status} ${t}`);
    } catch (err: any) {
      clearTimeout(timeout);
      const msg = String(err?.message || err || '');
      // Abort（タイムアウト）やネットワークエラーはリトライ対象
      if ((err && (err.name === 'AbortError' || msg.toLowerCase().includes('network')))) {
        if (attempt < maxAttempts) {
          await new Promise((r) => setTimeout(r, baseDelay * Math.pow(2, attempt - 1)));
          continue;
        }
        throw new Error('OpenAI解析APIタイムアウト。ネットワークまたはサーバの状態を確認してください。');
      }

      // それ以外は最後までリトライしてから投げる
      if (attempt < maxAttempts) {
        await new Promise((r) => setTimeout(r, baseDelay * Math.pow(2, attempt - 1)));
        continue;
      }
      throw err;
    }
  }

  throw new Error('OpenAI解析APIへの接続に失敗しました（リトライ上限到達）');
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<'schedule' | 'source'>('schedule');
  const [scheduleViewMode, setScheduleViewMode] = useState<'daily' | 'monthly'>('monthly');
  const [selectedShip, setSelectedShip] = useState<BerthSchedule | null>(null);
  const [editDraft, setEditDraft] = useState<BerthSchedule | null>(null);
  const [sourceUrl, setSourceUrl] = useState<string | null>(null);
  const [sourceFileType, setSourceFileType] = useState<string>('');
  const [sourceFile, setSourceFile] = useState<File | null>(null);
  const [currentDate, setCurrentDate] = useState<string>(() => {
    // 今日の日付を初期値にする
    return new Date().toISOString().split('T')[0];
  });
  const [scheduleData, setScheduleData] = useState<BerthSchedule[]>([]);
  const [localScheduleData, setLocalScheduleData] = useState<BerthSchedule[]>(() => {
    try {
      const raw = localStorage.getItem('soma_port_local_schedule');
      if (!raw) return [];
      const v = JSON.parse(raw);
      return Array.isArray(v) ? (v as BerthSchedule[]) : [];
    } catch {
      return [];
    }
  });
  const [moveLogs, setMoveLogs] = useState<MoveLog[]>(() => {
    try {
      const raw = localStorage.getItem('soma_port_move_logs');
      const v = raw ? JSON.parse(raw) : [];
      return Array.isArray(v) ? (v as MoveLog[]) : [];
    } catch {
      return [];
    }
  });
  const [showHistory, setShowHistory] = useState(false);
  const [isAnalysing, setIsAnalysing] = useState(false);
  const [isDataImported, setIsDataImported] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [geminiApiKey, setGeminiApiKey] = useState<string>(() => {
    const envKey = safeGetEnv('VITE_GEMINI_API_KEY');
    try { return localStorage.getItem('gemini_api_key') || envKey; } catch { return envKey; }
  });
  const [lastError, setLastError] = useState<string>('');
  const [mergeOnImport, setMergeOnImport] = useState<boolean>(false);
  const [authAttempted, setAuthAttempted] = useState(false);
  const [authReady, setAuthReady] = useState(false);
  const [analysisProvider, setAnalysisProvider] = useState<'gemini' | 'openai'>(() => {
    try {
      const v = localStorage.getItem('ai_provider');
      // 既定はOpenAI(gpt-4o)。明示的に gemini を選んだ場合のみ Gemini を使う。
      return v === 'gemini' ? 'gemini' : 'openai';
    } catch {
      return 'openai';
    }
  });
  const [showSettings, setShowSettings] = useState(false);
  const [showGeminiKey, setShowGeminiKey] = useState(false);
  const [manualImportText, setManualImportText] = useState<string>('');
  const [manualImportOpen, setManualImportOpen] = useState<boolean>(false);
  const [manualImportFilename, setManualImportFilename] = useState<string>('');
  const authInitDoneRef = useRef(false);

  useEffect(() => {
    if (!auth) return;
    const unsubscribeAuth = onAuthStateChanged(auth, (u) => {
      setUser(u);
      // 認証処理が完了した後に、ユーザー取得ができたことを確定させる
      if (authInitDoneRef.current) setAuthReady(!!u);
    });
    const init = async () => {
      try {
        // 既にログイン済み（本体アプリのメール/パスワード等）ならそれを使う。匿名化しない。
        if (auth.currentUser) {
          // noop
        // @ts-ignore
        } else if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
          // @ts-ignore
          await signInWithCustomToken(auth, __initial_auth_token);
        } else {
          await signInAnonymously(auth);
        }
      } catch (err) {
        console.error('Auth error:', err);
        // test channel ドメインが未登録だと匿名ログインが失敗しがちなので、具体的な対処を表示
        try {
          const host = window.location.hostname;
          setLastError(
            `Firebase Authでログインできませんでした。Firebase Console → Authentication → Sign-in method で「匿名」を有効化し、Authentication → Settings → Authorized domains に「${host}」を追加してください。`
          );
        } catch (_) {
          setLastError('Firebase Authでログインできませんでした（Anonymous有効化 / Authorized domains を確認してください）。');
        }
      } finally {
        authInitDoneRef.current = true;
        setAuthAttempted(true);
        try {
          setAuthReady(!!auth?.currentUser);
        } catch {
          setAuthReady(false);
        }
      }
    };
    init();
    return () => unsubscribeAuth();
  }, []);

  const hostname = (() => {
    try { return window.location.hostname; } catch { return ''; }
  })();

  useEffect(() => {
    // ログイン（匿名/トークン）が完了してユーザーが取得できてから購読開始
    if (!authAttempted || !authReady || !user || !db) return;
    const q = collection(db, 'artifacts', appId, 'public', 'data', 'schedules');
    return onSnapshot(q, (snapshot) => {
      const docs: BerthSchedule[] = [];
      snapshot.forEach((d) => docs.push({ id: d.id, ...d.data() } as BerthSchedule));
      setScheduleData(docs);
    }, (err: any) => {
      console.error('Firestore snapshot error:', err);
      const code = String(err?.code || '');
      if (code.includes('permission-denied')) {
        setLastError(`Firestore権限エラー（permission-denied）: Anonymousログインが必要です。上の案内どおり Authorized domains / 匿名ログイン設定を確認してください。`);
      } else {
        setLastError(`Firestore接続エラー: ${String(err?.message || err)}`);
      }
    });
  }, [authAttempted, authReady, user]);

  // 移動履歴の購読（ログイン時はFirestore、未ログイン時はlocalStorage）
  useEffect(() => {
    if (!authAttempted || !authReady || !user || !db) return;
    const q = collection(db, 'artifacts', appId, 'public', 'data', 'scheduleLogs');
    return onSnapshot(q, (snapshot) => {
      const docs: MoveLog[] = [];
      snapshot.forEach((d) => docs.push({ id: d.id, ...d.data() } as MoveLog));
      docs.sort((a, b) => (b.changedAt || '').localeCompare(a.changedAt || ''));
      setMoveLogs(docs.slice(0, 200));
    }, () => { /* 履歴の取得失敗は致命的でないので無視 */ });
  }, [authAttempted, authReady, user]);

  const effectiveScheduleData = useMemo(() => {
    return user && db ? scheduleData : localScheduleData;
  }, [user, scheduleData, localScheduleData]);

  useEffect(() => {
    try {
      localStorage.setItem('soma_port_local_schedule', JSON.stringify(localScheduleData));
    } catch {
      // noop
    }
  }, [localScheduleData]);

  useEffect(() => {
    // 未ログイン時のみローカルへ保存（ログイン時はFirestoreが正）
    if (user && db) return;
    try {
      localStorage.setItem('soma_port_move_logs', JSON.stringify(moveLogs.slice(0, 200)));
    } catch {
      // noop
    }
  }, [moveLogs, user]);

  // ドラッグ＆ドロップ等で予定を別の日付へ移動し、履歴を残す
  const handleMoveEntry = async (entryId: string, toDate: string) => {
    const entry = effectiveScheduleData.find((s) => s.id === entryId);
    if (!entry || !entry.id || !toDate || entry.date === toDate) return;
    const fromDate = entry.date;
    const updated: BerthSchedule = { ...entry, date: toDate };
    const now = new Date();
    const log: MoveLog = {
      id: `log-${now.getTime()}-${Math.floor(Math.random() * 1000)}`,
      shipName: entry.shipName,
      fromDate,
      toDate,
      fromBerth: entry.berthName,
      toBerth: entry.berthName,
      changedAt: now.toISOString()
    };
    // 即時反映
    setLocalScheduleData((prev) => {
      const exists = prev.some((p) => p.id === entryId);
      return exists ? prev.map((p) => (p.id === entryId ? updated : p)) : [...prev, updated];
    });
    setMoveLogs((prev) => [log, ...prev].slice(0, 200));
    // 永続化
    if (db && user) {
      const sref = collection(db, 'artifacts', appId, 'public', 'data', 'schedules');
      const lref = collection(db, 'artifacts', appId, 'public', 'data', 'scheduleLogs');
      const batch = writeBatch(db);
      batch.set(doc(sref, String(entry.id)), { ...updated });
      batch.set(doc(lref, log.id), { ...log });
      await batch.commit();
    }
    setCurrentDate(toDate);
  };

  const dailySchedule = useMemo(() => effectiveScheduleData.filter(s => s.date === currentDate), [currentDate, effectiveScheduleData]);

  // 船を選択したら編集フォームの下書きを初期化する
  useEffect(() => {
    setEditDraft(selectedShip ? { ...selectedShip } : null);
  }, [selectedShip]);

  const handleAnalyzeFile = async () => {
    if (!sourceFile) {
      setLastError('先にPDF/JPGを選択してください。');
      return;
    }

    setLastError('');
    setIsAnalysing(true);
    try {
      const dataToImport =
        analysisProvider === 'openai'
          ? await callOpenAiScheduleApiViaFunction(sourceFile)
          : await callGeminiScheduleApi(sourceFile, geminiApiKey.trim());
      // まずローカルに即反映（Auth未設定でも見える）
      const now = new Date();
      if (mergeOnImport) {
        // マージ: 既存ローカルデータと重複を取り除いて結合
        const existing = localScheduleData || [];
        const merged = mergeRows(existing, dataToImport, now);
        setLocalScheduleData(merged);
      } else {
        setLocalScheduleData(dataToImport.map((d, i) => ({ id: `local-${now.getTime()}-${i}`, ...d, createdAt: now })));
      }

      // Firestoreに接続できる場合は洗い替えで永続化
      if (db && user) {
        const batch = writeBatch(db);
        const ref = collection(db, 'artifacts', appId, 'public', 'data', 'schedules');
        if (mergeOnImport) {
          // マージ: 各行に対して deterministic id を作り、上書き保存（削除は行わない）
          dataToImport.forEach(d => {
            const id = makeDeterministicId(d);
            batch.set(doc(ref, id), { ...d, createdAt: now });
          });
        } else {
          // 既存を全消去してから新規登録（従来の挙動）
          scheduleData.forEach(item => { if (item.id) batch.delete(doc(ref, item.id)); });
          dataToImport.forEach(data => batch.set(doc(ref), { ...data, createdAt: now }));
        }
        await batch.commit();
      } else {
        setLastError('注意: まだSign-in requiredのため、今回はローカル反映のみです（Firestoreへ保存されません）。上の案内どおり認証設定後に再実行してください。');
      }

      // 取り込んだデータの最初の日付へカレンダーを移動し、月間表示ですぐ見えるようにする
      // （PDFの予定月が当月と違っても「反映されていない」ように見えないため）
      const importedDates = dataToImport.map((d) => d.date).filter(Boolean).sort();
      if (importedDates.length) setCurrentDate(importedDates[0]);

      setIsAnalysing(false);
      setIsDataImported(true);
      setScheduleViewMode('monthly');
      setTimeout(() => setActiveTab('schedule'), 300);
    } catch (e: any) {
      console.error(e);
      setLastError(String(e?.message || e || 'unknown error'));
      setIsAnalysing(false);
    }
  };

  const handleClearData = async () => {
    if (!confirm('全消去しますか？')) return;
    setLocalScheduleData([]);
    if (!db || !user) return;
    const batch = writeBatch(db);
    scheduleData.forEach(item => { if (item.id) batch.delete(doc(db, 'artifacts', appId, 'public', 'data', 'schedules', item.id)); });
    await batch.commit();
  };

  const handleFilePick = (f: File) => {
    setSourceFile(f);
    setSourceUrl(URL.createObjectURL(f));
    setSourceFileType(f.type || '');
    setIsDataImported(false);
    setZoomLevel(1);
  };

  // 1件の予定を追加/更新する（OCRのずれを手で直す用）。
  // 保存すると date/berthName が反映され、正しい日付・バースの位置に移動する。
  const upsertScheduleEntry = async (entry: BerthSchedule) => {
    const now = new Date();
    const id = entry.id && String(entry.id).trim() ? String(entry.id) : `local-${now.getTime()}`;
    const clean: BerthSchedule = {
      ...entry,
      id,
      date: String(entry.date || '').slice(0, 10),
      berthName: String(entry.berthName || '').trim(),
      shipName: String(entry.shipName || '').trim() || '未定',
      eta: String(entry.eta || '').trim() || '08:00',
      etd: String(entry.etd || '').trim() || '17:00',
      cargo: String(entry.cargo || '').trim() || '未定',
      status: ((String(entry.status || '予定').trim() || '予定') as BerthSchedule['status']),
      trucksPlanned: Number(entry.trucksPlanned) || 0,
      trucksArrived: Number(entry.trucksArrived) || 0
    };
    if (!clean.date || !clean.berthName) {
      setLastError('保存できません：日付とバースは必須です。');
      return;
    }
    setLastError('');
    // 日付/バースが変わった編集は履歴に残す
    const prevEntry = effectiveScheduleData.find(p => p.id === id);
    let moveLog: MoveLog | null = null;
    if (prevEntry && (prevEntry.date !== clean.date || prevEntry.berthName !== clean.berthName)) {
      moveLog = {
        id: `log-${now.getTime()}-${Math.floor(Math.random() * 1000)}`,
        shipName: clean.shipName,
        fromDate: prevEntry.date,
        toDate: clean.date,
        fromBerth: prevEntry.berthName,
        toBerth: clean.berthName,
        changedAt: now.toISOString()
      };
    }
    // ローカル即時反映
    setLocalScheduleData(prev => {
      const exists = prev.some(p => p.id === id);
      return exists ? prev.map(p => (p.id === id ? clean : p)) : [...prev, clean];
    });
    if (moveLog) setMoveLogs(prev => [moveLog as MoveLog, ...prev].slice(0, 200));
    // Firestore 永続化（ログイン時）
    if (db && user) {
      const ref = collection(db, 'artifacts', appId, 'public', 'data', 'schedules');
      const batch = writeBatch(db);
      batch.set(doc(ref, id), { ...clean });
      if (moveLog) {
        const lref = collection(db, 'artifacts', appId, 'public', 'data', 'scheduleLogs');
        batch.set(doc(lref, moveLog.id), { ...moveLog });
      }
      await batch.commit();
    }
    // 編集したデータの日付へ移動して、移動後の位置を確認できるようにする
    setCurrentDate(clean.date);
    setSelectedShip(null);
  };

  const deleteScheduleEntry = async (entry: BerthSchedule) => {
    if (!entry.id) { setSelectedShip(null); return; }
    if (!confirm(`「${entry.shipName}」(${entry.berthName}) を削除しますか？`)) return;
    setLocalScheduleData(prev => prev.filter(p => p.id !== entry.id));
    if (db && user) {
      const ref = collection(db, 'artifacts', appId, 'public', 'data', 'schedules');
      const batch = writeBatch(db);
      batch.delete(doc(ref, String(entry.id)));
      await batch.commit();
    }
    setSelectedShip(null);
  };

  const startNewEntry = () => {
    setSelectedShip({
      id: '', date: currentDate, berthName: '', shipName: '',
      eta: '08:00', etd: '17:00', cargo: '未定', status: '予定',
      trucksPlanned: 0, trucksArrived: 0
    } as BerthSchedule);
  };

  const saveGeminiKey = (v: string) => {
    setGeminiApiKey(v);
    try { localStorage.setItem('gemini_api_key', v); } catch { /* noop */ }
  };

  const saveProvider = (v: 'gemini' | 'openai') => {
    setAnalysisProvider(v);
    try { localStorage.setItem('ai_provider', v); } catch { /* noop */ }
  };

  function splitCsvLine(line: string, delim: string): string[] {
    const out: string[] = [];
    let cur = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        const next = line[i + 1];
        if (inQuotes && next === '"') {
          cur += '"';
          i++;
          continue;
        }
        inQuotes = !inQuotes;
        continue;
      }
      if (!inQuotes && ch === delim) {
        out.push(cur.trim());
        cur = '';
        continue;
      }
      cur += ch;
    }
    out.push(cur.trim());
    return out;
  }

  function parseCsvToRows(text: string): any[] {
    const rawLines = String(text || '')
      .replace(/\r\n/g, '\n')
      .replace(/\r/g, '\n')
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l.length > 0);

    if (rawLines.length === 0) return [];

    const delim = rawLines[0].includes('\t') ? '\t' : ',';
    const head = splitCsvLine(rawLines[0], delim).map((h) => h.replace(/^\uFEFF/, '').trim());
    const hasHeader = head.some((h) => /date|日付|バース|船|eta|etd|status|状況/i.test(h));

    const normalize = (h: string) => {
      const k = h.replace(/\s+/g, '').toLowerCase();
      if (k === 'date' || k.includes('日付')) return 'date';
      if (k === 'berthname' || k.includes('バース')) return 'berthName';
      if (k === 'shipname' || k.includes('船名')) return 'shipName';
      if (k === 'eta') return 'eta';
      if (k === 'etd') return 'etd';
      if (k === 'cargo' || k.includes('貨物') || k.includes('積荷')) return 'cargo';
      if (k === 'status' || k.includes('状況')) return 'status';
      if (k === 'trucksplanned' || k.includes('予定台数')) return 'trucksPlanned';
      if (k === 'trucksarrived' || k.includes('到着台数')) return 'trucksArrived';
      return '';
    };

    const keys = hasHeader
      ? head.map(normalize)
      : ['date', 'berthName', 'shipName', 'eta', 'etd', 'cargo', 'status', 'trucksPlanned', 'trucksArrived'];

    const startIdx = hasHeader ? 1 : 0;
    const rows: any[] = [];
    for (let i = startIdx; i < rawLines.length; i++) {
      const cols = splitCsvLine(rawLines[i], delim);
      const o: any = {};
      for (let j = 0; j < Math.min(keys.length, cols.length); j++) {
        const k = keys[j];
        if (!k) continue;
        o[k] = cols[j];
      }
      rows.push(o);
    }
    return rows;
  }

  async function importScheduleRows(rows: Omit<BerthSchedule, 'id'>[]) {
    const now = new Date();
    setLocalScheduleData(rows.map((d, i) => ({ id: `local-${now.getTime()}-${i}`, ...d, createdAt: now })));

    if (db && user) {
      const batch = writeBatch(db);
      const ref = collection(db, 'artifacts', appId, 'public', 'data', 'schedules');
      scheduleData.forEach((item) => { if (item.id) batch.delete(doc(ref, item.id)); });
      rows.forEach((r) => batch.set(doc(ref), { ...r, createdAt: now }));
      await batch.commit();
    } else {
      setLastError('注意: まだSign-in requiredのため、今回はローカル反映のみです（Firestoreへ保存されません）。');
    }

    setIsDataImported(true);
    setScheduleViewMode('daily');
    setTimeout(() => setActiveTab('schedule'), 200);
  }

  const handleManualImport = async () => {
    const raw = (manualImportText || '').trim();
    if (!raw) {
      setLastError('手動インポート: まずJSON/CSVを貼り付けるか、ファイルを選択してください。');
      return;
    }
    setLastError('');
    try {
      const arr = safeJsonParseArray(raw) || safeJsonParseArray(raw.replace(/^window\.SCANNED_FULL_DATA\s*=\s*/i, ''));
      const rows = arr ? coerceScheduleRows(arr) : coerceScheduleRows(parseCsvToRows(raw));
      if (rows.length === 0) throw new Error('手動インポート: 0件でした（形式を確認してください）');
      await importScheduleRows(rows.map((r) => ({ ...r })));
    } catch (e: any) {
      console.error(e);
      setLastError(String(e?.message || e || '手動インポートに失敗しました'));
    }
  };

  const handleManualFilePick = async (f: File) => {
    try {
      setManualImportFilename(f.name || '');
      const txt = await f.text();
      setManualImportText(txt);
      setManualImportOpen(true);
    } catch (e: any) {
      setLastError(String(e?.message || e || 'ファイルの読み込みに失敗しました'));
    }
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC] text-slate-900 font-sans overflow-hidden">
      <aside className="w-72 bg-[#0F172A] text-white flex flex-col flex-shrink-0 shadow-2xl z-20">
        <div className="w-full h-1 bg-indigo-500" />
        <div className="p-8 flex items-center space-x-4 border-b border-slate-800/50">
          <div className="bg-indigo-500 p-2.5 rounded-2xl shadow-lg shadow-indigo-500/20 flex items-center justify-center"><Anchor size={24} /></div>
          <div>
            <h1 className="text-sm font-black leading-tight tracking-tight">相馬港バース管理</h1>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mt-1">Berth Management System</p>
          </div>
        </div>
        <nav className="flex-1 p-6 space-y-3 overflow-y-auto">
          <button
            onClick={() => setActiveTab('schedule')}
            className={`w-full flex items-center space-x-4 px-5 py-4 rounded-2xl transition-all font-black text-sm ${activeTab === 'schedule' ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/20 translate-x-2' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'}`}
          >
            <Calendar size={18} />
            <span>バース計画</span>
          </button>
          <button
            onClick={() => setActiveTab('source')}
            className={`w-full flex items-center space-x-4 px-5 py-4 rounded-2xl transition-all font-black text-sm ${activeTab === 'source' ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/20 translate-x-2' : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'}`}
          >
            <ImageIcon size={18} />
            <span>資料・自動読取</span>
          </button>
        </nav>
        <div className="p-6">
          <div className="bg-slate-800/40 p-4 rounded-[1.5rem] border border-slate-800/50">
            <p className="text-[10px] text-slate-500 font-black uppercase mb-1 tracking-[0.2em]">Connected Account</p>
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${user ? 'bg-emerald-500 animate-pulse' : 'bg-amber-400'}`}></div>
              <span className="text-[11px] font-mono text-slate-300 truncate w-full">{user?.uid || 'Sign-in required'}</span>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-20 bg-white/90 backdrop-blur-xl border-b border-slate-200 flex items-center justify-between px-10 z-10">
          <div className="flex items-center space-x-2">
            <LayoutDashboard size={20} className="text-slate-300" />
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Dashboard</span>
            <span className="text-slate-200 text-xl">/</span>
            <span className="text-sm font-black text-slate-900">{activeTab === 'schedule' ? 'バース計画' : '資料読取'}</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/60 backdrop-blur-md">
              <button
                onClick={() => saveProvider('gemini')}
                className={`px-6 py-2.5 rounded-xl text-[10px] font-black transition-all ${analysisProvider === 'gemini' ? 'bg-white shadow-lg shadow-indigo-500/10 text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
                title="Gemini（無料）"
              >
                GEMINI (FREE)
              </button>
              <button
                onClick={() => saveProvider('openai')}
                className={`px-6 py-2.5 rounded-xl text-[10px] font-black transition-all ${analysisProvider === 'openai' ? 'bg-white shadow-lg shadow-emerald-500/10 text-emerald-600' : 'text-slate-500 hover:text-slate-700'}`}
                title="OpenAI（Functions経由 / Blazeが必要）"
              >
                OPENAI (BLAZE)
              </button>
            </div>
            <button
              onClick={() => setShowSettings((v) => !v)}
              className={`relative p-3 rounded-2xl transition-all ${showSettings ? 'bg-indigo-100 text-indigo-600' : 'text-slate-400 hover:bg-slate-100 hover:text-indigo-600'}`}
              title="設定（解析エンジン/キー）"
            >
              <Key size={20} />
              {!geminiApiKey && analysisProvider === 'gemini' && (
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white" />
              )}
            </button>
            <a
              href="https://unkou-final.web.app"
              className="flex items-center px-3 py-2 text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-black transition-colors"
              title="LogiTrack（トップ）へ戻る"
            >
              LogiTrackへ戻る
            </a>
            <button onClick={handleClearData} className="flex items-center px-3 py-2 text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-xl text-xs font-black transition-colors">
              <Trash2 className="w-4 h-4 mr-2" />
              データ全消去
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-10">
          {/* 設定パネル（鍵アイコン） */}
          {showSettings && (
            <div className="max-w-6xl mx-auto mb-6">
              <div className="p-6 bg-white rounded-3xl border-2 border-indigo-100 shadow-2xl flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-black text-indigo-600 uppercase tracking-widest flex items-center">
                    <Key size={14} className="mr-2" /> 設定（解析エンジン / APIキー）
                  </div>
                  <button onClick={() => setShowSettings(false)} className="text-slate-400 hover:text-rose-600">
                    <X size={18} />
                  </button>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-3 flex-wrap">
                  <div className="text-xs text-slate-500 font-black">解析エンジン</div>
                  <select
                    value={analysisProvider}
                    onChange={(e) => saveProvider(e.target.value === 'openai' ? 'openai' : 'gemini')}
                    className="border border-slate-200 rounded-2xl px-4 py-2 text-xs font-black"
                    title="Geminiが429（上限）の場合はOpenAIに切替できます（Functionsが必要）"
                  >
                    <option value="gemini">Gemini（フロント直）</option>
                    <option value="openai">ChatGPT(OpenAI)（Functions経由）</option>
                  </select>

                  {analysisProvider === 'gemini' ? (
                    <>
                      <div className="text-xs text-slate-500 font-black">Gemini API Key</div>
                      <div className="flex items-center gap-2">
                        <input
                          type={showGeminiKey ? 'text' : 'password'}
                          value={geminiApiKey}
                          onChange={(e) => saveGeminiKey(e.target.value)}
                          placeholder="AIzaSy..."
                          className="border border-slate-200 rounded-2xl px-4 py-2 text-xs font-mono w-80"
                        />
                        <button
                          onClick={() => setShowGeminiKey((v) => !v)}
                          className="px-3 py-2 rounded-2xl text-xs font-black bg-slate-100 hover:bg-slate-200 text-slate-700"
                        >
                          {showGeminiKey ? '隠す' : '表示'}
                        </button>
                      </div>
                      <div className="text-[11px] text-slate-500 font-bold leading-relaxed">
                        Geminiが <b>429（Quota exceeded）</b> の場合は、解析エンジンを <b>ChatGPT(OpenAI)</b> に切り替えてください。
                      </div>
                    </>
                  ) : (
                    <div className="text-[11px] text-slate-500 font-bold leading-relaxed">
                      OpenAIは <b>/api/extract-schedule</b>（Firebase Functions）経由です。Functionsが未デプロイの場合はエラーになります。
                      ※Functionsデプロイには Firebase のプランを <b>Blaze（従量課金）</b> へアップグレードし、
                      <b>OPENAI_API_KEY</b> secret を設定する必要があります。
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Auth / Firestore 接続ガイド */}
          {authAttempted && !user && (
            <div className="max-w-6xl mx-auto mb-4">
              <div className="text-sm text-amber-900 bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 mt-0.5" />
                <div>
                  <div className="font-bold">サインインできていません（Sign-in required）</div>
                  <div className="text-xs mt-1 leading-relaxed">
                    Firebase Console → Authentication → Sign-in method で <b>匿名（Anonymous）</b> を有効化し、
                    Authentication → Settings → Authorized domains に <b>{hostname || '（このドメイン）'}</b> を追加してください。
                    その後、ページを <b>Ctrl+F5</b> で更新してください。
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'schedule' && (
            <div className="space-y-6">
              <div className="flex justify-between items-end flex-wrap gap-3">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">バース入港スケジュール</h2>
                  <p className="text-slate-500 text-sm font-medium mt-1">リアルタイムに同期された港湾状況を確認できます</p>
                </div>
                <div className="flex space-x-3">
                  <div className="flex items-center bg-white rounded-xl border border-slate-200 p-1 shadow-sm">
                    <button onClick={() => { const d = new Date(currentDate); if (scheduleViewMode === 'monthly') d.setMonth(d.getMonth() - 1); else d.setDate(d.getDate() - 1); setCurrentDate(d.toISOString().split('T')[0]); }} title={scheduleViewMode === 'monthly' ? '前の月' : '前の日'} className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-all"><ChevronLeft size={20} /></button>
                    <input type="date" value={currentDate} onChange={(e) => { if (e.target.value) setCurrentDate(e.target.value); }} title="日付を直接選べます" className="text-sm font-mono font-black w-40 text-center text-slate-700 bg-transparent outline-none cursor-pointer" />
                    <button onClick={() => { const d = new Date(currentDate); if (scheduleViewMode === 'monthly') d.setMonth(d.getMonth() + 1); else d.setDate(d.getDate() + 1); setCurrentDate(d.toISOString().split('T')[0]); }} title={scheduleViewMode === 'monthly' ? '次の月' : '次の日'} className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-all"><ChevronRight size={20} /></button>
                  </div>
                  <div className="flex bg-white rounded-xl border border-slate-200 p-1 shadow-sm font-bold">
                    <button onClick={() => setScheduleViewMode('monthly')} className={`px-4 py-1.5 rounded-lg text-xs transition-all ${scheduleViewMode === 'monthly' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}>月間</button>
                    <button onClick={() => setScheduleViewMode('daily')} className={`px-4 py-1.5 rounded-lg text-xs transition-all ${scheduleViewMode === 'daily' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}>日次</button>
                  </div>
                  <button onClick={() => setShowHistory(true)} title="移動・変更の履歴" className="bg-white rounded-xl border border-slate-200 px-3 py-1.5 shadow-sm text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors">🕘 変更履歴{moveLogs.length ? `（${moveLogs.length}）` : ''}</button>
                </div>
              </div>

              {showHistory && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={() => setShowHistory(false)}>
                  <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                      <h3 className="font-black text-slate-800">🕘 変更・移動の履歴</h3>
                      <button onClick={() => setShowHistory(false)} className="text-slate-400 hover:text-slate-700 text-xl leading-none">×</button>
                    </div>
                    <div className="overflow-y-auto p-4 space-y-2">
                      {moveLogs.length === 0 ? (
                        <p className="text-center text-slate-400 text-sm py-8 font-bold">まだ移動の履歴はありません。<br />カレンダーで船を別の日へドラッグすると記録されます。</p>
                      ) : (
                        moveLogs.map((log) => (
                          <div key={log.id} className="flex items-center justify-between bg-slate-50 border border-slate-100 rounded-xl px-3 py-2 text-xs">
                            <div className="min-w-0">
                              <div className="font-black text-slate-800 truncate">{log.shipName || '（無名）'}</div>
                              <div className="text-slate-500 font-mono mt-0.5">{log.fromDate} <span className="text-indigo-500 font-bold">→</span> {log.toDate}</div>
                            </div>
                            <div className="text-[10px] text-slate-400 font-bold whitespace-nowrap ml-2">
                              {(() => { try { return new Date(log.changedAt).toLocaleString('ja-JP', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }); } catch { return ''; } })()}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 min-h-[600px]">
                <div className="xl:col-span-3">
                  <Card className="p-6 border-none shadow-xl bg-white/80 backdrop-blur-sm h-full">
                    {scheduleViewMode === 'daily' ? (
                      <DailyScheduleView schedules={dailySchedule} onSelect={setSelectedShip} date={currentDate} />
                    ) : (
                      <MonthlyCalendarView schedules={effectiveScheduleData} currentDate={currentDate} onDateSelect={(d) => { setCurrentDate(d); setScheduleViewMode('daily'); }} onMoveEntry={handleMoveEntry} onSelectShip={setSelectedShip} />
                    )}
                  </Card>
                </div>

                <div className="xl:col-span-1 flex flex-col space-y-6">
                  {editDraft ? (
                    <Card className="p-6 border-none shadow-2xl bg-slate-900 text-white">
                      <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-3">
                        <p className="text-[11px] text-indigo-400 font-black uppercase tracking-widest">{editDraft.id ? '予定を編集' : '新規追加'}</p>
                        <button onClick={() => setSelectedShip(null)} className="text-slate-400 hover:text-white text-xl leading-none">×</button>
                      </div>
                      <div className="space-y-3 text-sm">
                        <label className="block">
                          <span className="text-[10px] text-slate-400 font-bold">船名</span>
                          <input value={editDraft.shipName} onChange={e => setEditDraft({ ...editDraft, shipName: e.target.value })} placeholder="例：第18住若丸" className="w-full mt-1 bg-slate-800 rounded-lg px-3 py-2 text-white outline-none focus:ring-2 ring-indigo-500" />
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          <label className="block">
                            <span className="text-[10px] text-slate-400 font-bold">日付</span>
                            <input type="date" value={editDraft.date} onChange={e => setEditDraft({ ...editDraft, date: e.target.value })} className="w-full mt-1 bg-slate-800 rounded-lg px-3 py-2 text-white outline-none focus:ring-2 ring-indigo-500" />
                          </label>
                          <label className="block">
                            <span className="text-[10px] text-slate-400 font-bold">バース</span>
                            <select value={editDraft.berthName} onChange={e => setEditDraft({ ...editDraft, berthName: e.target.value })} className="w-full mt-1 bg-slate-800 rounded-lg px-3 py-2 text-white outline-none focus:ring-2 ring-indigo-500">
                              <option value="">選択</option>
                              {(() => {
                                const BERTHS = ['1-1', '1-2', '1-3A', '1-3B', '1-4', '1-5', '1-6', '1-7', '1-8', '2-1', '2-2', '2-3', '2-4(西)', '2-4(東)', '3-1(西)', '3-1(東)', '3-4', '4-1', '4-2', '5-1', '5-2', '5-3', '5-4'];
                                const opts = [...BERTHS];
                                if (editDraft.berthName && !BERTHS.includes(editDraft.berthName)) opts.push(editDraft.berthName);
                                return opts.map(b => <option key={b} value={b}>{b}</option>);
                              })()}
                            </select>
                          </label>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <label className="block">
                            <span className="text-[10px] text-slate-400 font-bold">入港(ETA)</span>
                            <input value={editDraft.eta} onChange={e => setEditDraft({ ...editDraft, eta: e.target.value })} placeholder="08:00" className="w-full mt-1 bg-slate-800 rounded-lg px-3 py-2 text-white font-mono outline-none focus:ring-2 ring-indigo-500" />
                          </label>
                          <label className="block">
                            <span className="text-[10px] text-slate-400 font-bold">出港(ETD)</span>
                            <input value={editDraft.etd} onChange={e => setEditDraft({ ...editDraft, etd: e.target.value })} placeholder="17:00" className="w-full mt-1 bg-slate-800 rounded-lg px-3 py-2 text-white font-mono outline-none focus:ring-2 ring-indigo-500" />
                          </label>
                        </div>
                        <label className="block">
                          <span className="text-[10px] text-slate-400 font-bold">貨物</span>
                          <input value={editDraft.cargo} onChange={e => setEditDraft({ ...editDraft, cargo: e.target.value })} placeholder="未定" className="w-full mt-1 bg-slate-800 rounded-lg px-3 py-2 text-white outline-none focus:ring-2 ring-indigo-500" />
                        </label>
                        <label className="block">
                          <span className="text-[10px] text-slate-400 font-bold">状況</span>
                          <select value={editDraft.status} onChange={e => setEditDraft({ ...editDraft, status: e.target.value as BerthSchedule['status'] })} className="w-full mt-1 bg-slate-800 rounded-lg px-3 py-2 text-white outline-none focus:ring-2 ring-indigo-500">
                            <option value="予定">予定</option>
                            <option value="作業中">作業中</option>
                            <option value="完了">完了</option>
                            <option value="未定">未定</option>
                          </select>
                        </label>
                      </div>
                      <div className="flex gap-2 mt-5">
                        <button onClick={() => upsertScheduleEntry(editDraft)} className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-black py-2.5 rounded-xl transition-colors">保存して反映</button>
                        {editDraft.id ? (
                          <button onClick={() => deleteScheduleEntry(editDraft)} className="px-4 bg-rose-600/80 hover:bg-rose-600 text-white font-bold py-2.5 rounded-xl transition-colors">削除</button>
                        ) : null}
                      </div>
                      <p className="text-[10px] text-slate-500 mt-3 leading-relaxed">※ 保存すると、日付・バースの正しい位置へ自動で移動します。</p>
                    </Card>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center p-12 text-center border-4 border-dashed border-slate-200 rounded-[2.5rem] text-slate-400">
                      <div className="bg-white p-6 rounded-full shadow-lg mb-6"><FileText size={40} className="text-slate-200" /></div>
                      <h4 className="font-black text-slate-400">日付/船を選択</h4>
                      <p className="text-xs mt-2 font-bold leading-relaxed">カレンダーやタイムラインから選ぶと編集できます。<br />新しい予定は下のボタンから追加できます。</p>
                      <button onClick={startNewEntry} className="mt-5 bg-indigo-600 hover:bg-indigo-500 text-white font-black px-5 py-2.5 rounded-xl transition-colors">＋ 新規追加</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'source' && (
            <div className="max-w-6xl mx-auto space-y-4">
              <Card className="p-5 border-none shadow-xl bg-white">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-black text-slate-900 flex items-center"><ImageIcon className="w-5 h-5 mr-2 text-indigo-600" />資料・自動読取</h2>
                    <p className="text-slate-500 text-sm font-medium mt-1">
                      PDF/JPG を選んで「AIで上書き反映」を押すと、Firestoreへ洗い替え保存します。
                    </p>
                  </div>
                  <div className="text-xs text-slate-500 font-bold">
                    解析エンジン: <b className="text-slate-700">{analysisProvider === 'openai' ? 'ChatGPT(OpenAI)' : 'Gemini'}</b>
                    <span className="text-slate-300 mx-2">/</span>
                    設定は右上の <b>鍵アイコン</b> から変更できます。
                  </div>
                </div>
                {lastError && (
                  <div className="mt-3 text-sm text-rose-700 bg-rose-50 border border-rose-100 rounded-xl p-3 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 mt-0.5" />
                    <div>{lastError}</div>
                  </div>
                )}
              </Card>

              <Card className="p-5 border-none shadow-xl bg-white">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-black text-slate-900">手動インポート（AIが429でも運用できます）</div>
                    <div className="text-xs text-slate-500 font-bold mt-1">
                      JSON配列（SCANNED_FULL_DATA形式）またはCSVを貼り付けて反映します。
                      {manualImportFilename ? <span className="text-slate-400">（選択中: {manualImportFilename}）</span> : null}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <label className="cursor-pointer px-4 py-2 rounded-2xl text-xs font-black bg-slate-100 hover:bg-slate-200 text-slate-700">
                      ファイル選択（.json/.csv/.txt）
                      <input
                        type="file"
                        className="hidden"
                        accept=".json,.csv,.txt,text/plain,application/json,text/csv"
                        onChange={(e) => {
                          const f = e.target.files?.[0];
                          if (f) handleManualFilePick(f);
                        }}
                      />
                    </label>
                    <button
                      onClick={() => setManualImportOpen((v) => !v)}
                      className="px-4 py-2 rounded-2xl text-xs font-black bg-indigo-50 hover:bg-indigo-100 text-indigo-700"
                    >
                      {manualImportOpen ? '閉じる' : '貼り付け/編集'}
                    </button>
                    <button
                      onClick={handleManualImport}
                      className="px-5 py-2 rounded-2xl text-xs font-black bg-indigo-600 hover:bg-indigo-500 text-white"
                      title="既存データは洗い替え（全削除→登録）です"
                    >
                      手動で反映（洗い替え）
                    </button>
                  </div>
                </div>

                {manualImportOpen && (
                  <div className="mt-4">
                    <textarea
                      value={manualImportText}
                      onChange={(e) => setManualImportText(e.target.value)}
                      placeholder={`例（JSON）:\n[\n  { \"date\": \"2026-01-19\", \"berthName\": \"1-3B\", \"shipName\": \"第18住若丸\", \"eta\": \"08:00\", \"etd\": \"17:00\", \"cargo\": \"未定\", \"status\": \"予定\", \"trucksPlanned\": 0, \"trucksArrived\": 0 }\n]\n\n例（CSV）:\ndate,berthName,shipName,eta,etd,cargo,status,trucksPlanned,trucksArrived\n2026-01-19,1-3B,第18住若丸,08:00,17:00,未定,予定,0,0`}
                      className="w-full min-h-[180px] border border-slate-200 rounded-2xl p-4 text-xs font-mono bg-slate-50"
                    />
                    <div className="mt-2 flex items-center justify-between flex-wrap gap-2">
                      <div className="text-[11px] text-slate-500 font-bold">
                        形式: JSON配列 / `window.SCANNED_FULL_DATA = [...]` / CSV（ヘッダあり/なし）に対応
                      </div>
                      <button
                        onClick={() => { setManualImportText(''); setManualImportFilename(''); }}
                        className="px-4 py-2 rounded-2xl text-xs font-black bg-slate-100 hover:bg-slate-200 text-slate-700"
                      >
                        クリア
                      </button>
                    </div>
                  </div>
                )}
              </Card>

              <Card className="p-0 border-none shadow-2xl bg-slate-900 min-h-[700px] flex flex-col rounded-[2.5rem] overflow-hidden relative">
                <div className="absolute top-0 right-0 p-10 pointer-events-none opacity-20">
                  <Cpu size={260} className="text-indigo-500" />
                </div>
                {!sourceUrl ? (
                  <div className="flex-1 flex flex-col items-center justify-center p-20 text-center">
                    <div className="bg-indigo-500/20 p-10 rounded-full text-indigo-400 mb-10 shadow-[0_0_50px_rgba(99,102,241,0.2)]"><Upload size={64} /></div>
                    <h3 className="text-2xl font-black text-white mb-4">入出港予定表をアップロード</h3>
                    <p className="text-slate-400 max-w-md mx-auto font-medium mb-10 leading-relaxed">
                      港湾サイトからダウンロードした最新の PDF / 画像を選択してください。
                    </p>
                    <label className="cursor-pointer group relative overflow-hidden bg-white text-slate-900 px-12 py-5 rounded-[2rem] font-black shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center">
                      <span className="relative z-10 flex items-center"><Upload size={20} className="mr-3" /> ファイルを選択</span>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*,application/pdf"
                        onChange={(e) => {
                          const f = e.target.files?.[0];
                          if (f) handleFilePick(f);
                        }}
                      />
                    </label>
                    <p className="mt-4 text-xs text-amber-300 flex items-center justify-center">
                      <AlertTriangle className="w-3 h-3 mr-1" /> 注意: 反映するとスケジュールは洗い替え（全削除→登録）です
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col h-[750px]">
                    <div className="bg-slate-900 border-b border-slate-800 p-6 flex items-center justify-between z-10">
                      <div className="flex items-center space-x-4">
                        {sourceFileType === 'application/pdf' ? (
                          <div className="flex items-center space-x-3">
                            <span className="bg-rose-500 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">PDF</span>
                            <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-300 text-xs font-bold flex items-center hover:text-white transition-colors bg-slate-800 px-4 py-2 rounded-xl">
                              <ExternalLink size={14} className="mr-2" /> 別タブで開く
                            </a>
                          </div>
                        ) : (
                          <div className="flex bg-slate-800 p-1.5 rounded-2xl items-center">
                            <button onClick={() => setZoomLevel(z => Math.max(0.5, z - 0.2))} className="p-2 text-slate-400 hover:text-white"><ZoomOut size={20} /></button>
                            <span className="text-xs font-black text-white w-16 text-center">{Math.round(zoomLevel * 100)}%</span>
                            <button onClick={() => setZoomLevel(z => Math.min(3, z + 0.2))} className="p-2 text-slate-400 hover:text-white"><ZoomIn size={20} /></button>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center space-x-3">
                        {isAnalysing ? (
                          <div className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-2xl font-black text-sm shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                            <Loader2 className="animate-spin mr-3" size={18} /> AI解析中...
                          </div>
                        ) : isDataImported ? (
                          <div className="flex items-center px-6 py-3 bg-emerald-500 text-white rounded-2xl font-black text-sm shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                            <CheckCircle className="mr-3" size={18} /> 反映完了
                          </div>
                        ) : (
                          <div className="flex items-center space-x-3">
                            <label className="text-xs text-slate-300 flex items-center space-x-2">
                              <input type="checkbox" className="form-checkbox" checked={mergeOnImport} onChange={(e) => setMergeOnImport(e.target.checked)} />
                              <span className="text-[11px]">既存データにマージして反映</span>
                            </label>
                            <button onClick={handleAnalyzeFile} className="bg-indigo-600 text-white px-6 py-3 rounded-2xl font-black shadow-xl hover:bg-indigo-500 hover:scale-105 active:scale-95 transition-all flex items-center border-b-4 border-indigo-800">
                              <Sparkles size={18} className="mr-3" /> AIで上書き反映
                            </button>
                          </div>
                        )}
                        <button onClick={() => { setSourceUrl(null); setSourceFile(null); setIsDataImported(false); }} className="text-slate-500 p-2 hover:text-white transition-colors bg-slate-800 rounded-full">×</button>
                      </div>
                    </div>

                    <div className="flex-1 bg-slate-800 relative overflow-hidden flex justify-center items-start">
                      {sourceFileType === 'application/pdf' ? (
                        <iframe src={sourceUrl} className="w-full h-full border-none" title="PDF Viewer" />
                      ) : (
                        <div className="w-full h-full overflow-auto p-10 flex justify-center items-start scrollbar-hide">
                          <div className="transition-transform duration-200 origin-top shadow-2xl" style={{ transform: `scale(${zoomLevel})` }}>
                            <img src={sourceUrl} className="max-w-4xl bg-white rounded-xl" />
                          </div>
                        </div>
                      )}
                      {isAnalysing && (
                        <div className="absolute inset-0 bg-indigo-900/30 pointer-events-none overflow-hidden z-20">
                          <div className="w-full h-1.5 bg-indigo-400 shadow-[0_0_30px_#818cf8,0_0_60px_#818cf8] absolute animate-[scan_2s_infinite]"></div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </Card>
            </div>
          )}
        </main>
      </div>
      <style>{`
        @keyframes scan { 0% { top: 0; } 50% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

