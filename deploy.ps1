# =====================================================================
# LogiTrack デプロイスクリプト
# ---------------------------------------------------------------------
# やること:
#   1. soma-port（港入港スケジュール）を本番用にビルド
#   2. ルートの最新ファイル(index.html / app.js / style.css / データ)を
#      Firebase公開フォルダ hosting_main に同期
#   3. ビルド済み soma-port を hosting_main/soma-port に配置
#   4. Firebase Hosting にデプロイ
#
# 使い方:  PowerShell で  ./deploy.ps1
#   （ビルド/同期だけしてデプロイしない場合）  ./deploy.ps1 -NoDeploy
# =====================================================================
param(
    [switch]$NoDeploy,
    [switch]$WithFunctions   # 指定すると Cloud Functions(extractSchedule) もビルドしてデプロイ
)

$ErrorActionPreference = "Stop"
$root = $PSScriptRoot
Set-Location $root

Write-Host "==== LogiTrack デプロイ開始 ====" -ForegroundColor Cyan

# --- 1. soma-port をビルド（サブパス /soma-port/ 用） ---
Write-Host "[1/4] soma-port をビルド中..." -ForegroundColor Yellow
Push-Location "$root/soma-port"
if (-not (Test-Path "node_modules")) {
    Write-Host "  node_modules が無いため npm install します..."
    npm install
}
npm run build   # vite.config: 既定(subpath)で ../hosting_public/soma-port に出力
Pop-Location

$somaBuilt = "$root/hosting_public/soma-port"
if (-not (Test-Path "$somaBuilt/index.html")) {
    throw "soma-port のビルド結果が見つかりません: $somaBuilt"
}

# --- 2. ルートの最新ファイルを hosting_main に同期 ---
Write-Host "[2/4] 公開ファイルを hosting_main へ同期中..." -ForegroundColor Yellow
$publicDir = "$root/hosting_main"
if (-not (Test-Path $publicDir)) { New-Item -ItemType Directory -Path $publicDir | Out-Null }

$files = @("index.html", "app.js", "style.css", "port_schedule_scanned_full_data.js")
foreach ($f in $files) {
    $src = Join-Path $root $f
    if (Test-Path $src) {
        Copy-Item $src (Join-Path $publicDir $f) -Force
        Write-Host "  同期: $f"
    } else {
        Write-Host "  (スキップ: $f が見つかりません)" -ForegroundColor DarkGray
    }
}

# --- 3. ビルド済み soma-port を hosting_main/soma-port に配置 ---
Write-Host "[3/4] soma-port を hosting_main へ配置中..." -ForegroundColor Yellow
$dest = "$publicDir/soma-port"
if (Test-Path $dest) { Remove-Item $dest -Recurse -Force }
Copy-Item $somaBuilt $dest -Recurse -Force
Write-Host "  配置完了: hosting_main/soma-port"

# --- 4. Firebase へデプロイ ---
if ($NoDeploy) {
    Write-Host "[4/4] -NoDeploy 指定のためデプロイはスキップしました。" -ForegroundColor DarkGray
    Write-Host "手動でデプロイする場合: firebase deploy --only hosting:unkou-final" -ForegroundColor Gray
} else {
    # PDF読み取り(extractSchedule関数)も一緒にデプロイする場合
    if ($WithFunctions) {
        Write-Host "[4/4] Cloud Functions をビルド中..." -ForegroundColor Yellow
        Push-Location "$root/functions"
        if (-not (Test-Path "node_modules")) { npm install }
        npm run build
        Pop-Location
        Write-Host "[4/4] Hosting + Functions をデプロイ中..." -ForegroundColor Yellow
        firebase deploy --project unkou-final --only "hosting:unkou-final,functions"
    } else {
        Write-Host "[4/4] Firebase Hosting へデプロイ中..." -ForegroundColor Yellow
        firebase deploy --project unkou-final --only hosting:unkou-final
    }
}

Write-Host "==== 完了 ====" -ForegroundColor Cyan
