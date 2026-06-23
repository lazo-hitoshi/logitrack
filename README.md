# LogiTrack（残土運搬運航監視システム）

船で積込港を出港 → 荷下ろし港に着岸 → ダンプで最終埋立地へ搬入、という残土運搬の一連の流れを、
**船ごとの残土が最終埋立地に届くまで**追跡・可視化する業務アプリ。

本番URL: https://unkou-final.web.app

## 主な機能
- **ダッシュボード** … 総積込量・船舶/ダンプ稼働数・最終埋立完了などのKPI、リアルタイム監視マップ、運搬ロット一覧、アラート
- **船舶位置 / ダンプ位置** … 船・ダンプの稼働状況（ダンプはカンバンで「待機 / 輸送中」）
- **運搬履歴** … 完了したロットの一覧・CSV出力・印刷
- **港入港スケジュール** … 相馬港バース管理（別アプリ soma-port を埋め込み）
  - 入出港予定表PDFを **AI（gpt-4o）で自動読み取り**してカレンダーに反映
  - 予定の **手編集 / ドラッグ＆ドロップ移動 / 変更履歴**
- **ライブカメラ** … HLS / 埋め込みURLの映像表示

## 技術構成
- フロント本体: **バニラJS**（`app.js` / `index.html` / `style.css`）
- データ: **Firebase Firestore**（compat SDK、プロジェクト `unkou-final`）
- ホスティング: **Firebase Hosting**（公開フォルダ `hosting_main`）
- OCR: **Cloud Functions**（`functions/`、`extractSchedule` が OpenAI gpt-4o で予定表を解析）
- 港スケジュール: **Vite + React**（`soma-port/`、ビルドして `/soma-port/` に同梱）

詳細は以下を参照:
- 使い方マニュアル … [`docs/01_使い方マニュアル.md`](docs/01_使い方マニュアル.md)
- 設計仕様書 … [`docs/02_設計仕様書.md`](docs/02_設計仕様書.md)
- バックアップ手順書 … [`docs/バックアップ手順書.md`](docs/バックアップ手順書.md)

## デプロイ（本番反映）
PowerShell で 1 コマンド。`soma-port` のビルド → `hosting_main` への同期 → Firebase へデプロイまで自動。

```powershell
cd D:\Antigravity_Source
./deploy.ps1                 # アプリ（Hosting）を本番反映
./deploy.ps1 -WithFunctions  # OCR関数(Functions)も一緒に反映
./deploy.ps1 -NoDeploy       # ビルド・同期だけ（アップロードしない）
```

> 事前に `firebase login` 済みであること。デプロイ先プロジェクトは `unkou-final`。

## 港PDFのOCRを使うための設定（初回のみ）
`extractSchedule` 関数が OpenAI のキーを使うため、Firebase の Secret に登録する。

```powershell
cd D:\Antigravity_Source\functions
firebase functions:secrets:set OPENAI_API_KEY --project unkou-final   # 値はプロンプトで貼り付け
cd D:\Antigravity_Source
./deploy.ps1 -WithFunctions
```

## ソース管理
- GitHub: `git@github.com:lazo-hitoshi/logitrack.git`（origin/master）
- 更新を反映: `git add -A && git commit -m "メッセージ" && git push`
- `.env`（OpenAIキー）・`node_modules`・`_archive/`（旧バックアップ）は Git 管理外

## 構成メモ
- **正本はリポジトリ直下**の `index.html` / `app.js` / `style.css` / `port_schedule_scanned_full_data.js`。
  `hosting_main` は配信用のコピーで、`deploy.ps1` が同期する（直接編集しない）。
- AppSheet 等からの移行ではなく、Firestore に直接読み書きする構成（本体はログイン不要 / soma-port は匿名ログイン）。
