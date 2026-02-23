import React, { useState, useMemo, useEffect } from 'react';
import { 
  Calendar, Truck, Clock, Ship, Plus, Users, X, CheckCircle, Image as ImageIcon, Upload,
  ZoomIn, ZoomOut, RotateCw, Sun, RefreshCw, Maximize2, ChevronLeft, ChevronRight, Eye, EyeOff,
  List, Grid, Sparkles, Loader2, Save, Trash2, Anchor, FileText, AlertTriangle, FileSpreadsheet, ExternalLink, LayoutDashboard, Key,
  Cpu, AlertCircle, Info, Database, ShieldCheck, ShieldAlert
} from 'lucide-react';

// --- Firebase Imports ---
import { initializeApp, getApp, getApps } from 'firebase/app';
import { 
  getAuth, 
  signInAnonymously, 
  signInWithCustomToken,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  doc, 
  onSnapshot, 
  writeBatch,
  query,
  limit
} from 'firebase/firestore';

// --- Gemini API SDK ---
import { GoogleGenerativeAI } from "@google/generative-ai";

// --- 環境変数アクセスの超安全化 ---
const getSafeEnv = (key: string): string => {
  try {
    const win = window as any;
    const metaKey = 'import' + 'Meta';
    const meta = win[metaKey] || {};
    if (meta.env && meta.env[key]) return meta.env[key];
    if (win.process?.env?.[key]) return win.process.env[key];
  } catch (e) {}
  return "";
};

// --- Firebase Initialization ---
const getFirebaseConfig = () => {
  try {
    // @ts-ignore
    if (typeof __firebase_config !== 'undefined' && __firebase_config) {
      // @ts-ignore
      return typeof __firebase_config === 'string' ? JSON.parse(__firebase_config) : __firebase_config;
    }
  } catch (e) {}
  return null;
};

// @ts-ignore
const envAppId = typeof __app_id !== 'undefined' ? __app_id : 'soma-port-demo';
// @ts-ignore
const initialToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

const firebaseConfig = getFirebaseConfig();
const app = firebaseConfig ? (getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)) : null;
const auth = app ? getAuth(app) : null;
const db = app ? getFirestore(app) : null;

// --- データ型定義 ---
type BerthSchedule = {
  id?: string;
  date: string;
  berthName: string;
  shipName: string;
  eta: string;
  etd: string;
  cargo: string;
  status: '予定' | '作業中' | '完了' | '未定';
  trucksPlanned: number;
  trucksArrived: number;
  createdAt?: any;
};

// --- サブコンポーネント ---
const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-[2.5rem] shadow-sm border border-slate-200/60 overflow-hidden ${className}`}>
    {children}
  </div>
);

// カレンダー表示
const MonthlyCalendarView = ({ schedules, onDateSelect, currentDate }: { schedules: BerthSchedule[], onDateSelect: (date: string) => void, currentDate: string }) => {
  const startDate = new Date('2026-01-11');
  const endDate = new Date('2026-02-07');
  const calendarDays = [];
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
    <div className="w-full h-full flex flex-col">
      <div className="grid grid-cols-7 gap-2 mb-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
        {['日', '月', '火', '水', '木', '金', '土'].map((day, i) => (
          <div key={i} className={`text-center py-2 ${i === 0 ? 'text-rose-500' : i === 6 ? 'text-blue-500' : ''}`}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2 flex-1 auto-rows-fr">
        {calendarDays.map((day, i) => {
          const dateStr = day.toISOString().split('T')[0];
          const isSelected = dateStr === currentDate;
          const daySchedules = getSchedulesForDate(day);
          const isCurrentMonth = day.getMonth() === 0;
          return (
            <button key={i} onClick={() => onDateSelect(dateStr)} className={`min-h-[110px] p-3 rounded-3xl border text-left flex flex-col transition-all group relative overflow-hidden ${isSelected ? 'ring-4 ring-indigo-500/20 bg-indigo-50 border-indigo-500 shadow-inner' : 'border-slate-100 bg-white hover:border-indigo-300 hover:shadow-lg'} ${!isCurrentMonth ? 'opacity-30' : ''}`}>
              <div className="flex justify-between items-start mb-2 relative z-10">
                <span className={`text-sm font-black ${day.getDay() === 0 ? 'text-rose-500' : day.getDay() === 6 ? 'text-blue-500' : 'text-slate-700'}`}>{day.getDate()}</span>
                {daySchedules.length > 0 && <span className="text-[10px] bg-indigo-600 text-white px-2 py-0.5 rounded-full font-black shadow-lg shadow-indigo-200">{daySchedules.length}</span>}
              </div>
              <div className="space-y-1.5 w-full overflow-hidden relative z-10">
                {daySchedules.slice(0, 2).map((s, idx) => (
                  <div key={idx} className="text-[9px] truncate w-full flex items-center bg-slate-50 border border-slate-100 rounded-xl px-2 py-1 text-slate-700 shadow-sm group-hover:bg-white transition-colors leading-tight font-bold">
                    <div className={`w-1.5 h-1.5 rounded-full mr-2 shrink-0 ${s.status === '作業中' ? 'bg-indigo-500 animate-pulse' : 'bg-emerald-500'}`}></div>
                    {s.shipName}
                  </div>
                ))}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// タイムライン表示
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
    if (start === '-' || !start) return 100;
    const posStart = getPosition(start);
    const posEnd = getPosition(end);
    let duration = posEnd - posStart;
    if (duration <= 0) duration = 100 - posStart; 
    return duration;
  };
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-8 px-2">
         <div className="text-sm font-black text-slate-400 uppercase tracking-widest flex items-center italic">
           <Clock size={16} className="mr-2 text-indigo-500" /> {date} Live Timeline
         </div>
         <button onClick={() => setShowOnlyActive(!showOnlyActive)} className={`flex items-center text-xs px-6 py-3 rounded-2xl border transition-all font-black shadow-sm ${showOnlyActive ? 'bg-indigo-600 text-white border-indigo-700 shadow-indigo-500/20' : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50 hover:border-slate-300'}`}>
           {showOnlyActive ? <Eye size={16} className="mr-2" /> : <EyeOff size={16} className="mr-2" />}
           {showOnlyActive ? '予定のみ表示中' : '全バース表示'}
         </button>
      </div>
      <div className="w-full overflow-x-auto border border-slate-200 rounded-[3rem] shadow-2xl shadow-indigo-100/30 bg-white">
        <div className="min-w-[1000px]">
          <div className="flex border-b border-slate-100 bg-slate-50/50 sticky top-0 z-10 h-14 italic uppercase">
            <div className="w-40 flex-shrink-0 text-[10px] font-black text-slate-400 pl-10 flex items-center border-r border-slate-100 bg-slate-50/80 backdrop-blur-sm tracking-widest">Berth Point</div>
            <div className="flex-1 relative">
              {hours.map((h) => (<div key={h} className="absolute text-[10px] font-black text-slate-400 transform -translate-x-1/2 top-5 font-mono" style={{ left: `${(h / 24) * 100}%` }}>{h}:00</div>))}
            </div>
          </div>
          <div className="divide-y divide-slate-50">
            {berthGroups.map((group) => {
              const hasShip = group.berths.some(b => schedules.find(s => s.date === date && s.berthName === b));
              if (showOnlyActive && !hasShip) return null;
              return (
                <div key={group.name} className="bg-white">
                  <div className="bg-slate-50/30 px-10 py-3 text-[11px] font-black text-indigo-400 uppercase tracking-widest border-l-4 border-indigo-500 italic">{group.name}</div>
                  {group.berths.map((berth, idx) => {
                    const ship = schedules.find(s => s.date === date && s.berthName === berth);
                    if (showOnlyActive && !ship) return null;
                    return (
                      <div key={berth} className={`flex items-center group relative h-16 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/20'}`}>
                        <div className="w-40 flex-shrink-0 border-r border-slate-50 h-full flex items-center pl-10 text-xs font-black text-slate-900 group-hover:bg-indigo-50 transition-colors uppercase italic">{berth}</div>
                        <div className="flex-1 relative h-full">
                          {hours.map(h => <div key={h} className="absolute top-0 bottom-0 border-l border-slate-100/50" style={{ left: `${(h / 24) * 100}%` }}></div>)}
                          {ship && (
                            <button onClick={() => onSelect(ship)} className={`absolute top-2 bottom-2 rounded-2xl shadow-xl shadow-indigo-500/20 border-b-4 text-left px-5 flex flex-col justify-center transition-all hover:scale-[1.03] z-10 overflow-hidden ${ship.status === '作業中' ? 'bg-indigo-600 text-white border-indigo-800' : ship.status === '完了' ? 'bg-slate-400 text-white border-slate-600' : 'bg-emerald-500 text-white border-emerald-700'}`} style={{ left: `${getPosition(ship.eta)}%`, width: `${Math.max(12, getDuration(ship.eta, ship.etd))}%` }}>
                              <div className="font-black text-xs truncate leading-tight uppercase tracking-tight italic">{ship.shipName}</div>
                              <div className="text-[10px] opacity-80 font-mono mt-1 flex items-center"><Clock size={12} className="mr-1.5"/>{ship.eta} - {ship.etd}</div>
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

// --- Main App Component ---
export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [authStatus, setAuthStatus] = useState<'initializing' | 'authenticating' | 'ready' | 'error'>('initializing');
  const [activeTab, setActiveTab] = useState<'schedule' | 'source'>('schedule');
  const [scheduleViewMode, setScheduleViewMode] = useState<'daily' | 'monthly'>('monthly');
  const [selectedShip, setSelectedShip] = useState<BerthSchedule | null>(null);
  const [sourceFile, setSourceFile] = useState<File | null>(null);
  const [sourcePreviewUrl, setSourcePreviewUrl] = useState<string | null>(null);
  const [sourceFileType, setSourceFileType] = useState<string>(''); 
  const [currentDate, setCurrentDate] = useState<string>('2026-01-19');
  const [scheduleData, setScheduleData] = useState<BerthSchedule[]>([]);
  const [isAnalysing, setIsAnalysing] = useState(false);
  const [isDataImported, setIsDataImported] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [aiEngine, setAiEngine] = useState<'openai' | 'gemini'>('gemini');
  const [geminiApiKey, setGeminiApiKey] = useState<string>(''); 
  const [showKeyInput, setShowKeyInput] = useState(false);

  // 1. 認証フロー
  useEffect(() => {
    if (!auth) return;
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (u) {
        setAuthStatus('ready');
        setErrorMessage(null);
      }
    });
    const runAuth = async () => {
      setAuthStatus('authenticating');
      try {
        if (initialToken) {
          await signInWithCustomToken(auth, initialToken);
        } else {
          await signInAnonymously(auth);
        }
      } catch (err: any) {
        if (initialToken) {
          try { await signInAnonymously(auth); } catch (e) { setAuthStatus('error'); }
        } else { setAuthStatus('error'); }
      }
    };
    runAuth();
    return () => unsubscribe();
  }, []);

  // 2. 購読開始
  useEffect(() => {
    if (authStatus !== 'ready' || !user || !db) return;
    const schedulesRef = collection(db, 'artifacts', envAppId, 'public', 'data', 'schedules');
    const unsubscribe = onSnapshot(schedulesRef, 
      (snapshot) => {
        const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as BerthSchedule));
        setScheduleData(docs);
        setErrorMessage(null);
      },
      (error) => {
        setErrorMessage(`データベース接続エラー (${error.code})`);
      }
    );
    return () => unsubscribe();
  }, [user, authStatus]);

  // AI解析実行
  const handleAnalyzeFile = async () => {
    if (!db || !user || !sourceFile) return;

    if (aiEngine === 'openai') {
      setErrorMessage("OpenAIモードは現在設定待ちです。Geminiモードをお使いください。");
      return;
    }

    const apiKey = geminiApiKey || getSafeEnv("VITE_GEMINI_API_KEY");
    if (!apiKey) { setShowKeyInput(true); return; }

    setIsAnalysing(true);
    setErrorMessage(null);
    
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      
      // モデルIDの候補リスト（404対策）
      const modelCandidates = ["gemini-1.5-flash", "gemini-1.5-flash-latest", "gemini-pro-vision"];
      let result = null;
      let lastErr = null;

      const fileData = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        // @ts-ignore
        reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
        reader.readAsDataURL(sourceFile);
      });

      const prompt = `港湾スケジュール表を解析し、JSON形式でのみ回答してください。形式: [{ "date": "YYYY-MM-DD", "berthName": "バース名", "shipName": "船名", "eta": "HH:mm", "etd": "HH:mm", "cargo": "内容", "status": "予定" }]`;

      // 利用可能なモデルを順に試行
      for (const modelId of modelCandidates) {
        try {
          console.log(`Trying Gemini model: ${modelId}...`);
          const model = genAI.getGenerativeModel({ model: modelId });
          result = await model.generateContent([prompt, { inlineData: { data: fileData, mimeType: sourceFile.type } }]);
          if (result) break; // 成功したら抜ける
        } catch (e: any) {
          lastErr = e;
          console.warn(`Model ${modelId} failed, trying next...`);
        }
      }

      if (!result) throw lastErr;

      const text = (await result.response).text();
      const cleanedJson = text.replace(/```json|```/g, "").trim();
      const parsedData: Omit<BerthSchedule, 'id'>[] = JSON.parse(cleanedJson);

      const batch = writeBatch(db);
      const ref = collection(db, 'artifacts', envAppId, 'public', 'data', 'schedules');
      scheduleData.forEach(item => { if (item.id) batch.delete(doc(ref, item.id)); });
      parsedData.forEach(data => batch.set(doc(ref), { ...data, createdAt: new Date() }));
      
      await batch.commit();
      setIsAnalysing(false);
      setIsDataImported(true);
      setScheduleViewMode('daily');
      setTimeout(() => setActiveTab('schedule'), 1000);
    } catch (err: any) {
      console.error(err);
      if (err.message?.includes("404") || err.message?.includes("not found")) {
        setErrorMessage("AIモデルが見つかりませんでした。Google AI Studio側で『Gemini 1.5 Flash』が有効になっているか、別のAPIキーを試してください。");
      } else {
        setErrorMessage(`AI解析失敗: ${err.message || 'APIキーまたはファイル内容を確認してください。'}`);
      }
      setIsAnalysing(false);
    }
  };

  const handleClearData = async () => {
    if (!db || !user || !confirm("全データを削除しますか？")) return;
    const batch = writeBatch(db);
    const ref = collection(db, 'artifacts', envAppId, 'public', 'data', 'schedules');
    scheduleData.forEach(item => { if (item.id) batch.delete(doc(ref, item.id)); });
    await batch.commit();
  };

  if (!app) {
    return <div className="flex h-screen items-center justify-center bg-slate-950 text-white font-black italic tracking-[0.5em] animate-pulse uppercase">Establishing Neural Link...</div>;
  }

  return (
    <div className="flex h-screen bg-[#F8FAFC] text-slate-900 font-sans overflow-hidden">
      {/* サイドバー */}
      <aside className="w-80 bg-[#0F172A] text-white flex flex-col flex-shrink-0 shadow-2xl z-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.5)]"></div>
        <div className="p-10 flex items-center space-x-5 border-b border-slate-800/40">
          <div className="bg-indigo-600 p-3 rounded-2xl shadow-xl shadow-indigo-600/30 flex items-center justify-center text-white ring-2 ring-indigo-500/20"><Anchor size={32}/></div>
          <div>
            <h1 className="text-base font-black leading-tight tracking-tight uppercase bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">相馬港バース管理</h1>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mt-1.5 opacity-80 italic">Dashboard System</p>
          </div>
        </div>
        <nav className="flex-1 p-8 space-y-4 overflow-y-auto italic">
          <button onClick={() => setActiveTab('schedule')} className={`w-full flex items-center space-x-4 px-6 py-5 rounded-[2rem] transition-all font-black text-sm relative group ${activeTab === 'schedule' ? 'bg-indigo-600 text-white shadow-2xl shadow-indigo-600/40 translate-x-1' : 'text-slate-500 hover:bg-slate-800/50 hover:text-white'}`}>
            <Calendar size={20}/><span>バース計画一覧</span>
            {activeTab === 'schedule' && <div className="absolute right-6 w-2 h-2 rounded-full bg-white animate-pulse"></div>}
          </button>
          <button onClick={() => setActiveTab('source')} className={`w-full flex items-center space-x-4 px-6 py-5 rounded-[2rem] transition-all font-black text-sm relative group ${activeTab === 'source' ? 'bg-indigo-600 text-white shadow-2xl shadow-indigo-600/40 translate-x-1' : 'text-slate-500 hover:bg-slate-800/50 hover:text-white'}`}>
            <ImageIcon size={20}/><span>資料・自動読取</span>
            {activeTab === 'source' && <div className="absolute right-6 w-2 h-2 rounded-full bg-white animate-pulse"></div>}
          </button>
        </nav>
        <div className="p-8">
           <div className="bg-slate-900/60 p-6 rounded-[2.5rem] border border-slate-800/40 text-[10px] font-mono text-slate-400 truncate tracking-tight shadow-inner">
              <div className="flex items-center space-x-3 mb-3 border-b border-slate-800/50 pb-3">
                {authStatus === 'ready' ? <ShieldCheck size={16} className="text-emerald-500" /> : <ShieldAlert size={16} className="text-rose-500 animate-pulse" />}
                <span className={`font-black uppercase tracking-widest ${authStatus === 'ready' ? 'text-emerald-500' : 'text-rose-500'}`}>
                  {authStatus === 'ready' ? 'System Secured' : 'Auth Locked'}
                </span>
              </div>
              <p className="opacity-70 mb-1 font-black uppercase tracking-tighter">PROJECT: {firebaseConfig?.projectId || 'Unknown'}</p>
              <p className="text-slate-300 truncate">UID: {user ? user.uid.substring(0, 8) + '...' : 'Waiting...'}</p>
           </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <header className="h-24 bg-white/90 backdrop-blur-xl border-b border-slate-200 flex items-center justify-between px-12 z-10 italic">
          <div className="flex items-center space-x-4">
            <LayoutDashboard size={24} className="text-slate-300"/><span className="text-xs font-black text-slate-400 uppercase tracking-widest">Console</span>
            <span className="text-slate-200 text-2xl">/</span><span className="text-sm font-black text-slate-900 tracking-tight uppercase">{activeTab === 'schedule' ? 'Plan Manager' : 'Neural Reader'}</span>
          </div>
          <div className="flex items-center space-x-6">
             <div className="flex bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200 shadow-inner">
                <button onClick={() => setAiEngine('gemini')} className={`px-6 py-2.5 rounded-xl text-[10px] font-black transition-all ${aiEngine === 'gemini' ? 'bg-white shadow-lg shadow-indigo-500/10 text-indigo-600' : 'text-slate-500'}`}>GEMINI AI</button>
                <button onClick={() => setAiEngine('openai')} className={`px-5 py-2.5 rounded-xl text-[10px] font-black transition-all ${aiEngine === 'openai' ? 'bg-white shadow-lg shadow-emerald-500/10 text-emerald-600' : 'text-slate-500'}`}>OPENAI</button>
             </div>
             <button onClick={() => setShowKeyInput(!showKeyInput)} className={`p-4 rounded-2xl transition-all relative ${showKeyInput ? 'bg-indigo-100 text-indigo-600 shadow-inner ring-2 ring-indigo-500/20' : 'text-slate-400 hover:bg-slate-100 hover:text-indigo-600'}`} title="API設定">
               <Key size={22}/>
               {!geminiApiKey && aiEngine === 'gemini' && <div className="absolute top-2 right-2 w-3 h-3 bg-rose-500 rounded-full border-2 border-white animate-bounce shadow-lg"></div>}
             </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-12 bg-[#F8FAFC]">
          {errorMessage && (
            <div className="mb-10 p-8 bg-rose-50 border-2 border-rose-200 text-rose-600 rounded-[3rem] flex items-start shadow-2xl animate-in slide-in-from-top-4">
              <AlertCircle size={32} className="mr-6 shrink-0 mt-1" />
              <div className="flex-1 space-y-4">
                <div>
                  <p className="text-lg font-black tracking-tight leading-none italic uppercase underline mb-2">Operation Error Detected</p>
                  <p className="text-sm font-bold opacity-90 leading-relaxed italic">{errorMessage}</p>
                </div>
              </div>
              <button onClick={() => setErrorMessage(null)} className="ml-6 text-rose-400 hover:text-rose-600 p-2 bg-white/40 rounded-full transition-all"><X size={24}/></button>
            </div>
          )}

          {showKeyInput && (
            <div className="mb-12 p-10 bg-white rounded-[3rem] border-2 border-indigo-100 shadow-2xl animate-in slide-in-from-top-6 flex flex-col space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-xs font-black text-indigo-600 uppercase tracking-[0.4em] flex items-center italic"><Key size={20} className="mr-4"/> AI Key Management</p>
                <button onClick={() => setShowKeyInput(false)} className="text-slate-400 hover:text-rose-500 bg-slate-50 p-2 rounded-full transition-all"><X size={20}/></button>
              </div>
              <p className="text-sm text-slate-500 font-bold leading-relaxed mb-2 italic uppercase tracking-tighter opacity-80">Please insert Gemini API Key. It will be stored in your browser session securely.</p>
              <div className="flex space-x-5">
                <input type="password" value={geminiApiKey} onChange={(e) => setGeminiApiKey(e.target.value)} placeholder="AIzaSy..." className="flex-1 bg-slate-50 border border-slate-200 rounded-[1.5rem] px-8 py-6 text-lg font-mono focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all shadow-inner"/>
                <button onClick={() => { setShowKeyInput(false); }} className="bg-indigo-600 text-white px-14 py-6 rounded-[1.5rem] text-sm font-black shadow-xl shadow-indigo-600/30 hover:bg-indigo-700 active:scale-95 transition-all uppercase tracking-widest italic">Apply Logic</button>
              </div>
            </div>
          )}

          {activeTab === 'schedule' && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-12 max-w-[1700px] mx-auto h-full pb-20 italic font-black">
              <div className="flex justify-between items-end px-4">
                <div>
                  <h2 className="text-7xl font-black text-slate-900 tracking-tighter uppercase leading-none">Berth <span className="text-indigo-600">Plan</span></h2>
                  <p className="text-slate-400 font-black mt-6 text-2xl tracking-tighter leading-relaxed uppercase">Soma Port Integrated Management v1.3.3</p>
                </div>
                <div className="flex space-x-6 items-center">
                  <div className="flex items-center bg-white rounded-[2.5rem] border border-slate-200/80 p-2.5 shadow-xl shadow-slate-200/40">
                    <button onClick={() => { const d = new Date(currentDate); d.setDate(d.getDate()-1); setCurrentDate(d.toISOString().split('T')[0]); }} className="p-4 text-slate-400 hover:text-indigo-600 rounded-3xl transition-all hover:bg-indigo-50"><ChevronLeft size={28}/></button>
                    <span className="text-lg font-black w-60 text-center text-slate-800 tracking-tight font-mono uppercase">{currentDate}</span>
                    <button onClick={() => { const d = new Date(currentDate); d.setDate(d.getDate()+1); setCurrentDate(d.toISOString().split('T')[0]); }} className="p-4 text-slate-400 hover:text-indigo-600 rounded-3xl transition-all hover:bg-indigo-50"><ChevronRight size={28}/></button>
                  </div>
                  <div className="flex bg-white rounded-[2.5rem] border border-slate-200/80 p-2.5 shadow-xl shadow-slate-200/40 font-black overflow-hidden italic">
                    <button onClick={() => setScheduleViewMode('monthly')} className={`px-12 py-4 rounded-[1.5rem] text-[12px] tracking-[0.2em] transition-all ${scheduleViewMode === 'monthly' ? 'bg-[#0F172A] text-white shadow-2xl' : 'text-slate-400 hover:bg-slate-50'}`}>MONTHLY</button>
                    <button onClick={() => setScheduleViewMode('daily')} className={`px-12 py-4 rounded-[1.5rem] text-[12px] tracking-[0.2em] transition-all ${scheduleViewMode === 'daily' ? 'bg-[#0F172A] text-white shadow-2xl' : 'text-slate-400 hover:bg-slate-50'}`}>DAILY</button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 h-full">
                <div className="xl:col-span-3">
                  <Card className="p-12 border-none shadow-[0_50px_120px_rgba(0,0,0,0.04)] bg-white h-full min-h-[900px]">
                    {scheduleViewMode === 'daily' ? <DailyScheduleView schedules={scheduleData} onSelect={setSelectedShip} date={currentDate}/> : <MonthlyCalendarView schedules={scheduleData} currentDate={currentDate} onDateSelect={(d) => { setCurrentDate(d); setScheduleViewMode('daily'); }}/>}
                  </Card>
                </div>
                <div className="xl:col-span-1 flex flex-col space-y-12">
                  {selectedShip ? (
                    <Card className="p-12 border-none shadow-2xl bg-[#0F172A] text-white animate-in slide-in-from-right-12 rounded-[4.5rem] relative group border border-white/5">
                       <div className="absolute -top-6 -left-6 bg-indigo-600 p-5 rounded-[2rem] shadow-2xl group-hover:scale-110 transition-transform"><Ship size={32} className="text-white"/></div>
                      <div className="flex justify-between items-start mb-14 border-b border-slate-800/60 pb-12 pt-4">
                        <div><p className="text-[11px] text-indigo-400 font-black uppercase mb-5 tracking-[0.5em] italic">Ship Identification</p><h3 className="font-black text-5xl tracking-tighter leading-tight italic uppercase">{selectedShip.shipName}</h3></div>
                        <button onClick={() => setSelectedShip(null)} className="text-slate-600 hover:text-white bg-slate-800/60 p-4 rounded-full transition-all hover:bg-rose-600 shadow-inner"><X size={24}/></button>
                      </div>
                      <div className="space-y-14">
                        <div className="flex justify-between border-b border-slate-800/40 pb-8 items-center italic"><span className="text-slate-500 font-black uppercase tracking-[0.3em] text-[10px]">Assigned Berth</span><span className="font-black text-indigo-400 text-2xl tracking-tighter uppercase">{selectedShip.berthName}</span></div>
                        <div className="flex justify-between border-b border-slate-800/40 pb-8 items-center italic"><span className="text-slate-500 font-black uppercase tracking-[0.3em] text-[10px]">Schedule Window</span><span className="font-mono font-black text-2xl text-emerald-400 tracking-tighter">{selectedShip.eta} - {selectedShip.etd}</span></div>
                        <div><p className="text-slate-500 font-black uppercase mb-6 tracking-[0.3em] text-[10px] italic">Cargo Description</p><p className="text-slate-300 bg-slate-800/40 p-10 rounded-[3rem] leading-relaxed text-xl border border-slate-800/80 shadow-inner italic font-medium">{selectedShip.cargo}</p></div>
                      </div>
                      <button className="w-full mt-20 bg-indigo-600 hover:bg-indigo-500 text-white font-black py-8 rounded-[3rem] transition-all shadow-[0_20px_60px_rgba(79,70,229,0.4)] hover:scale-[1.02] border-b-[10px] border-indigo-950 active:translate-y-2 active:border-b-0 text-xl uppercase tracking-widest italic group">
                        Manage Log <Plus className="inline ml-2 group-hover:rotate-90 transition-transform" />
                      </button>
                    </Card>
                  ) : (
                    <div className="h-full min-h-[550px] flex flex-col items-center justify-center p-20 text-center border-[8px] border-dashed border-slate-200/60 rounded-[6rem] text-slate-300 bg-white/40 backdrop-blur-md group">
                      <div className="bg-white p-16 rounded-full shadow-2xl shadow-slate-200 mb-14 border border-slate-100/50 flex items-center justify-center group-hover:rotate-12 transition-transform duration-700 hover:scale-110"><Ship size={100} className="text-slate-200 opacity-50"/></div>
                      <h4 className="font-black text-slate-400 text-3xl uppercase tracking-[0.4em] leading-tight italic">Scan Required</h4>
                      <p className="text-sm mt-8 font-black text-slate-400 leading-loose max-w-[250px] uppercase tracking-tighter">Please select a ship from the timeline to view operations.</p>
                    </div>
                  )}
                  <button onClick={handleClearData} className="w-full py-8 text-rose-500 text-[13px] font-black flex items-center justify-center hover:bg-rose-100/50 rounded-[3rem] transition-all border-2 border-rose-100 uppercase tracking-[0.5em] shadow-xl shadow-rose-500/5 active:scale-95 italic"><Trash2 size={24} className="mr-5"/> Flush All Records</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'source' && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 max-w-[1300px] mx-auto h-full pb-20">
              <Card className="p-0 border-none shadow-2xl shadow-indigo-500/10 bg-[#0F172A] min-h-[900px] flex flex-col rounded-[5rem] overflow-hidden relative border border-slate-800/20 group">
                <div className="absolute top-0 right-0 p-16 pointer-events-none opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-1000"><Cpu size={500} className="text-indigo-500"/></div>
                {!sourcePreviewUrl ? (
                  <div className="flex-1 flex flex-col items-center justify-center p-36 text-center relative z-10 italic font-black">
                    <div className="bg-indigo-600/10 p-20 rounded-[5rem] text-indigo-500 mb-20 shadow-[0_0_150px_rgba(99,102,241,0.2)] border border-indigo-500/20 ring-8 ring-indigo-500/5 animate-pulse"><Upload size={120}/></div>
                    <h3 className="text-7xl font-black text-white mb-12 tracking-tighter uppercase leading-tight text-center italic">Neural <span className="text-indigo-500 text-center">Scan</span> Core</h3>
                    <p className="text-slate-400 max-w-3xl mx-auto mb-24 leading-loose text-3xl tracking-tighter uppercase opacity-80">Upload Port PDF or JPEG Documents. AI will parse schedules and synchronize database clusters automatically.</p>
                    <label className="cursor-pointer group relative overflow-hidden bg-white text-slate-900 px-28 py-10 rounded-[4rem] font-black shadow-[0_40px_80px_rgba(255,255,255,0.1)] hover:scale-[1.1] active:scale-95 transition-all flex items-center group">
                      <span className="relative z-10 flex items-center text-4xl tracking-tighter uppercase italic"><FileText size={48} className="mr-8 text-indigo-600 group-hover:animate-bounce"/> Initiate Sync</span>
                      <input type="file" className="hidden" accept="image/*,application/pdf" onChange={(e) => {
                        const f = e.target.files?.[0];
                        if (f) { setSourceFile(f); setSourcePreviewUrl(URL.createObjectURL(f)); setSourceFileType(f.type); setIsDataImported(false); }
                      }} />
                    </label>
                  </div>
                ) : (
                  <div className="flex flex-col h-full flex-1 italic font-black">
                    <div className="bg-[#1E293B]/95 backdrop-blur-3xl border-b border-slate-800/50 p-14 flex items-center justify-between z-10">
                      <div className="flex items-center space-x-10">
                        <div className="flex items-center space-x-8 bg-slate-950/40 px-12 py-6 rounded-[2.5rem] border border-slate-700/50 shadow-2xl">
                          <span className="bg-rose-600 text-white px-6 py-2 rounded-[1.5rem] text-[14px] font-black uppercase tracking-[0.4em]">Unit:DOC</span>
                          <a href={sourcePreviewUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-400 text-base font-black flex items-center hover:text-white transition-all group tracking-tighter uppercase"><ExternalLink size={28} className="mr-5 group-hover:animate-bounce"/> View Original Source</a>
                        </div>
                      </div>
                      <div className="flex items-center space-x-12">
                        {isAnalysing ? (
                          <div className="flex items-center px-16 py-7 bg-indigo-600 text-white rounded-[3rem] font-black text-2xl shadow-[0_0_100px_rgba(99,102,241,0.6)] border border-indigo-400/30 animate-pulse"><Cpu className="animate-spin mr-8" size={40}/> {aiEngine.toUpperCase()} PROCESSING...</div>
                        ) : isDataImported ? (
                          <div className="flex items-center px-16 py-7 bg-emerald-50 text-white rounded-[3rem] font-black text-2xl shadow-2xl shadow-emerald-500/50 animate-bounce"><CheckCircle className="mr-8" size={40}/> CLOUD SYNCED</div>
                        ) : (
                          <button onClick={handleAnalyzeFile} className="bg-indigo-600 text-white px-24 py-8 rounded-[4rem] font-black shadow-[0_40px_80px_rgba(99,102,241,0.4)] hover:bg-indigo-500 hover:scale-105 active:scale-95 transition-all flex items-center border-b-[14px] border-indigo-950 text-3xl group italic tracking-tighter uppercase"><Sparkles size={48} className="mr-8 group-hover:rotate-45 transition-transform duration-500"/> Start Neural Analysis</button>
                        )}
                        <button onClick={() => { setSourcePreviewUrl(null); setSourceFile(null); }} className="text-slate-400 p-6 hover:text-white transition-all bg-slate-800/80 rounded-full hover:bg-rose-600 shadow-2xl active:scale-75"><X size={48}/></button>
                      </div>
                    </div>
                    <div className="flex-1 bg-[#0F172A] relative overflow-hidden flex justify-center items-start p-14 italic font-black">
                      <object data={sourcePreviewUrl} type={sourceFileType} className="w-full h-full border-none opacity-95 bg-white rounded-[5rem] shadow-[0_60px_120px_rgba(0,0,0,0.6)]">
                        <div className="p-48 text-center text-slate-400 font-bold bg-slate-950 h-full flex flex-col items-center justify-center space-y-16 border-[10px] border-dashed border-slate-800/40 rounded-[5rem]">
                          <AlertTriangle size={120} className="text-amber-500 animate-pulse"/><p className="text-5xl tracking-tighter italic uppercase font-black">Neural Link Blocked</p>
                          <p className="text-slate-500 text-2xl max-w-2xl font-black leading-relaxed uppercase italic opacity-70">右上の「View Original Source」から内容を確認し、解析を継続してください。</p>
                        </div>
                      </object>
                      {isAnalysing && (
                        <div className="absolute inset-0 bg-indigo-950/80 pointer-events-none overflow-hidden z-20 backdrop-blur-[15px]">
                          <div className="w-full h-4 bg-indigo-500 shadow-[0_0_80px_#818cf8,0_0_160px_#818cf8] absolute animate-[scan_3s_infinite]"></div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                             <div className="w-56 h-56 rounded-full border-[20px] border-indigo-500/10 border-t-indigo-500 animate-spin mb-20 shadow-[0_0_150px_rgba(99,102,241,0.5)]"></div>
                             <p className="text-indigo-400 font-black tracking-[1em] text-5xl animate-pulse uppercase italic text-center leading-none">NEURAL SYNCING<br/><span className="text-2xl mt-8 block opacity-50 tracking-[0.3em]">Processing Logic Clusters...</span></p>
                          </div>
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
        @keyframes scan { 0% { top: -15%; opacity: 0; } 50% { opacity: 1; } 100% { top: 115%; opacity: 0; } }
        ::-webkit-scrollbar { width: 14px; height: 14px; }
        ::-webkit-scrollbar-track { bg: transparent; }
        ::-webkit-scrollbar-thumb { bg: #CBD5E1; border-radius: 30px; border: 5px solid transparent; bg-clip: content-box; }
        ::-webkit-scrollbar-thumb:hover { bg: #94A3B8; border: 4px solid transparent; bg-clip: content-box; }
      `}</style>
    </div>
  );
}
