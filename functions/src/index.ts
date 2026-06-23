import { onRequest } from 'firebase-functions/v2/https';
import { defineSecret } from 'firebase-functions/params';
import { initializeApp, getApps } from 'firebase-admin/app';
import OpenAI from 'openai';

if (getApps().length === 0) {
  initializeApp();
}

const openaiApiKey = defineSecret('OPENAI_API_KEY');

export const extractSchedule = onRequest(
  {
    cors: true,
    secrets: [openaiApiKey],
    timeoutSeconds: 120,
    memory: '1GiB',
    maxInstances: 5
  },
  async (req, res) => {
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }

    // Secret登録時に末尾の改行/空白が混入すると Authorization ヘッダが不正値になり
    // 「Connection error」になるため、必ず trim する。
    const key = (openaiApiKey.value() || '').trim();
    if (!key) {
      res.status(500).json({ error: 'OPENAI_API_KEY が設定されていません。Firebase Console で Secret を設定してください。' });
      return;
    }

    const { images } = req.body as { images?: string[] };
    if (!images || !Array.isArray(images) || images.length === 0) {
      res.status(400).json({ error: '画像データがありません（images配列が空）' });
      return;
    }

    const openai = new OpenAI({ apiKey: key });

    const prompt = `あなたは港湾のバース入港スケジュール表（ガントチャート形式）を解析するエキスパートです。

## 入力画像について
複数枚の画像は「相馬港入出港予定表」1枚の表を**上から下へ3分割した帯（バンド）**です。
帯どうしは少し重なっています。**全ての画像を統合**して読み取り、重複する行は1つにまとめてください。
各帯には**左端にバース番号**が必ず写っているので、船名は必ず左端のバース番号と対応付けてください。
- **縦軸（バース番号・左端）**: 1-1, 1-2, 1-3A, 1-3B, 1-4, 1-5, 1-6, 1-7, 1-8, 2-1, 2-2, 2-3, 2-4(西), 2-4(東), 3-1(西), 3-1(東), 3-4, 4-1, 4-2, 5-1, 5-2, 5-3, 5-4
- **各バースは「船名」行と「貨物」行の2段**になっている（上段=船名、下段=貨物）
- **横軸**: 日付（2月5日〜2月22日など）と時間帯
- **セル内**: 船名が色付きのバーで配置されている

## あなたのタスク
画像から、各船の入港情報を読み取り、JSON配列として出力してください。

## 出力形式（厳守）
**JSON配列のみ**を出力してください。説明文やコードフェンス(\`\`\`)は禁止です。

各要素のスキーマ:
{
  "date": "YYYY-MM-DD",      // 例: "2026-02-05"（年は2026年として補完）
  "berthName": "1-3A",       // バース番号（画像の左端に記載）
  "shipName": "船名",        // セル内の船名
  "eta": "HH:mm",            // 入港予定時刻（バーの開始位置から推測、不明なら "08:00"）
  "etd": "HH:mm",            // 出港予定時刻（バーの終了位置から推測、不明なら "17:00"）
  "cargo": "貨物",           // 貨物内容（記載があれば、なければ "未定"）
  "status": "予定",          // "予定" 固定
  "trucksPlanned": 0,        // 配車予定台数（記載があれば、なければ 0）
  "trucksArrived": 0         // 配車済台数（記載があれば、なければ 0）
}

## 重要な注意事項
1. **日付の読み取りが最重要**: 横軸の日付ヘッダー（2/5, 2/6, ...）を正確に読み取り、各船がどの日付にいるか特定してください
2. **同じ船が複数日にまたがる場合**: 各日付ごとに別のレコードとして出力してください
3. **バース番号**: 画像左端の番号を正確に読み取ってください（1-1, 1-2, 1-3A, 1-3B, 2-1, 3-1(西), 4-1, 5-1 など）
4. **年の補完**: 日付に年がない場合は「2026年」として補完してください
5. **時刻の推測**: バーの開始・終了位置から時刻を推測してください。不明な場合は eta="08:00", etd="17:00" としてください
6. **空のバース**: 船が配置されていないバースは出力不要です
7. **全バースを上から順に走査**: 1-1 から 5-4 まで**1行ずつ順番に確認**し、各バース行に船名があれば必ず出力してください。1-8 / 2-3 / 5-4 など見落としやすい行も飛ばさないこと。帯の境界付近（上下の重なり部分）の船も漏らさないでください。
8. **重複排除**: 帯の重なりで同じ船が複数の画像に写る場合は、同一（同じ日付・バース・船名）なら1件にまとめてください。

## 出力例
[
  {"date":"2026-02-05","berthName":"1-3A","shipName":"只見丸","eta":"08:00","etd":"17:00","cargo":"未定","status":"予定","trucksPlanned":0,"trucksArrived":0},
  {"date":"2026-02-05","berthName":"1-3B","shipName":"第18住若丸","eta":"09:00","etd":"18:00","cargo":"未定","status":"予定","trucksPlanned":0,"trucksArrived":0}
]`;

    try {
      const imageContents = images.slice(0, 3).map((img) => {
        const isDataUrl = img.startsWith('data:');
        if (isDataUrl) {
          return {
            type: 'image_url' as const,
            image_url: { url: img, detail: 'high' as const }
          };
        }
        return {
          type: 'image_url' as const,
          image_url: { url: `data:image/jpeg;base64,${img}`, detail: 'high' as const }
        };
      });

      const response = await openai.chat.completions.create({
        model: 'gpt-4o',
        max_tokens: 4096,
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: prompt },
              ...imageContents
            ]
          }
        ]
      });

      const text = response.choices?.[0]?.message?.content || '';
      
      // JSON配列を抽出
      let jsonText = text.trim();
      const fenced = jsonText.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
      if (fenced) {
        jsonText = fenced[1];
      }
      
      let rows: any[];
      try {
        rows = JSON.parse(jsonText);
        if (!Array.isArray(rows)) {
          throw new Error('JSON配列ではありません');
        }
      } catch (parseErr) {
        console.error('JSON parse error:', parseErr, 'text:', text.slice(0, 500));
        res.status(500).json({ 
          error: 'OpenAIの応答をJSONとして解析できませんでした',
          rawText: text.slice(0, 1000)
        });
        return;
      }

      // データの正規化
      const normalizedRows = rows.map((r: any) => ({
        date: String(r.date || '').trim(),
        berthName: String(r.berthName || '').trim(),
        shipName: String(r.shipName || '未定').trim(),
        eta: String(r.eta || '08:00').trim(),
        etd: String(r.etd || '17:00').trim(),
        cargo: String(r.cargo || '未定').trim(),
        status: '予定',
        trucksPlanned: Number(r.trucksPlanned) || 0,
        trucksArrived: Number(r.trucksArrived) || 0
      })).filter((r: any) => r.date && r.berthName && r.shipName);

      console.log(`[extractSchedule] 解析完了: ${normalizedRows.length}件`);
      
      res.status(200).json({ rows: normalizedRows });
    } catch (err: any) {
      console.error('OpenAI API error:', err);
      const msg = String(err?.message || err || '');
      
      if (msg.includes('401') || msg.toLowerCase().includes('invalid api key')) {
        res.status(500).json({ error: 'OpenAI APIキーが無効です。Firebase Secret を確認してください。' });
        return;
      }
      if (msg.includes('429') || msg.toLowerCase().includes('rate limit')) {
        res.status(500).json({ error: 'OpenAI APIのレート制限に達しました。しばらく待ってから再試行してください。' });
        return;
      }
      if (msg.includes('insufficient_quota')) {
        res.status(500).json({ error: 'OpenAI APIの利用枠が不足しています。課金設定を確認してください。' });
        return;
      }
      
      res.status(500).json({ error: `OpenAI API エラー: ${msg}` });
    }
  }
);
