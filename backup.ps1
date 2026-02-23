# ========================================
# LogiTrack 自動バックアップスクリプト
# ========================================
# 使い方: 
#   1. PowerShellで実行: .\backup.ps1
#   2. USBドライブがある場合は自動でコピー
#   3. 30日以上前のバックアップは自動削除
# ========================================

param(
    [string]$SourcePath = "D:\Antigravity_Source",
    [string]$BackupPath = "D:\Antigravity_Backups",
    [string]$UsbDrive = "",  # 空の場合は自動検出
    [int]$KeepDays = 30      # 何日分のバックアップを保持するか
)

# 日時を取得
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$dateOnly = Get-Date -Format "yyyy-MM-dd"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host " LogiTrack バックアップ開始" -ForegroundColor Cyan
Write-Host " 日時: $(Get-Date)" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

# バックアップフォルダを作成
if (-not (Test-Path $BackupPath)) {
    New-Item -ItemType Directory -Path $BackupPath -Force | Out-Null
    Write-Host "[OK] バックアップフォルダを作成: $BackupPath" -ForegroundColor Green
}

# ZIPファイル名
$zipFileName = "LogiTrack_Backup_$timestamp.zip"
$zipFilePath = Join-Path $BackupPath $zipFileName

# 除外するフォルダ/ファイル
$excludeList = @(
    "node_modules",
    ".git",
    "*.zip",
    "*.bak",
    "browser_recordings",
    ".history",
    "search_initialized_all.txt"
)

Write-Host "`n[1/4] ソースフォルダを圧縮中..." -ForegroundColor Yellow

# 一時フォルダにコピーしてから圧縮（除外リストを適用）
$tempPath = Join-Path $env:TEMP "LogiTrack_Backup_Temp_$timestamp"
if (Test-Path $tempPath) {
    Remove-Item $tempPath -Recurse -Force
}

# robocopyで除外しながらコピー
$excludeDirs = $excludeList | Where-Object { -not $_.Contains("*") }
$excludeFiles = $excludeList | Where-Object { $_.Contains("*") }

$robocopyArgs = @(
    $SourcePath,
    $tempPath,
    "/E",  # サブディレクトリを含む
    "/XD", ($excludeDirs -join " /XD "),  # 除外ディレクトリ
    "/XF", ($excludeFiles -join " /XF "),  # 除外ファイル
    "/NFL", "/NDL", "/NJH", "/NJS"  # ログを抑制
)

# 簡易コピー（robocopyが複雑なので、Copy-Itemで代替）
Copy-Item -Path $SourcePath -Destination $tempPath -Recurse -Force -Exclude $excludeList

# node_modulesを除外
$nodeModulesPath = Join-Path $tempPath "node_modules"
if (Test-Path $nodeModulesPath) {
    Remove-Item $nodeModulesPath -Recurse -Force
}
$somaNodeModules = Join-Path $tempPath "soma-port\node_modules"
if (Test-Path $somaNodeModules) {
    Remove-Item $somaNodeModules -Recurse -Force
}

# .gitフォルダを除外
$gitPath = Join-Path $tempPath ".git"
if (Test-Path $gitPath) {
    Remove-Item $gitPath -Recurse -Force
}

# .historyフォルダを除外
$historyPath = Join-Path $tempPath ".history"
if (Test-Path $historyPath) {
    Remove-Item $historyPath -Recurse -Force
}

# browser_recordingsを除外
$browserRecPath = Join-Path $tempPath "browser_recordings"
if (Test-Path $browserRecPath) {
    Remove-Item $browserRecPath -Recurse -Force
}

# 大きなファイルを除外
Get-ChildItem -Path $tempPath -Recurse -File | Where-Object { $_.Length -gt 50MB } | ForEach-Object {
    Write-Host "  除外（大きすぎ）: $($_.Name) ($([math]::Round($_.Length / 1MB, 2)) MB)" -ForegroundColor Gray
    Remove-Item $_.FullName -Force
}

# 圧縮
try {
    Compress-Archive -Path "$tempPath\*" -DestinationPath $zipFilePath -Force
    $zipSize = [math]::Round((Get-Item $zipFilePath).Length / 1MB, 2)
    Write-Host "[OK] バックアップ作成完了: $zipFileName ($zipSize MB)" -ForegroundColor Green
} catch {
    Write-Host "[ERROR] 圧縮に失敗: $_" -ForegroundColor Red
    exit 1
} finally {
    # 一時フォルダを削除
    if (Test-Path $tempPath) {
        Remove-Item $tempPath -Recurse -Force
    }
}

# USBドライブの自動検出
Write-Host "`n[2/4] USBドライブを検索中..." -ForegroundColor Yellow

if (-not $UsbDrive) {
    $removableDrives = Get-WmiObject Win32_LogicalDisk | Where-Object { $_.DriveType -eq 2 }
    if ($removableDrives) {
        $UsbDrive = $removableDrives[0].DeviceID
        Write-Host "[OK] USBドライブを検出: $UsbDrive" -ForegroundColor Green
    } else {
        Write-Host "[INFO] USBドライブが見つかりません。ローカルバックアップのみ実行します。" -ForegroundColor Yellow
    }
}

# USBにコピー
if ($UsbDrive -and (Test-Path $UsbDrive)) {
    $usbBackupFolder = Join-Path $UsbDrive "LogiTrack_Backups"
    if (-not (Test-Path $usbBackupFolder)) {
        New-Item -ItemType Directory -Path $usbBackupFolder -Force | Out-Null
    }
    
    $usbZipPath = Join-Path $usbBackupFolder $zipFileName
    try {
        Copy-Item -Path $zipFilePath -Destination $usbZipPath -Force
        Write-Host "[OK] USBにコピー完了: $usbZipPath" -ForegroundColor Green
    } catch {
        Write-Host "[ERROR] USBへのコピーに失敗: $_" -ForegroundColor Red
    }
}

# 古いバックアップを削除
Write-Host "`n[3/4] 古いバックアップをクリーンアップ中..." -ForegroundColor Yellow

$cutoffDate = (Get-Date).AddDays(-$KeepDays)
$oldBackups = Get-ChildItem -Path $BackupPath -Filter "LogiTrack_Backup_*.zip" | Where-Object { $_.CreationTime -lt $cutoffDate }

if ($oldBackups.Count -gt 0) {
    foreach ($old in $oldBackups) {
        Remove-Item $old.FullName -Force
        Write-Host "  削除: $($old.Name)" -ForegroundColor Gray
    }
    Write-Host "[OK] $($oldBackups.Count) 件の古いバックアップを削除" -ForegroundColor Green
} else {
    Write-Host "[OK] 削除するバックアップはありません" -ForegroundColor Green
}

# USB上の古いバックアップも削除
if ($UsbDrive -and (Test-Path "$UsbDrive\LogiTrack_Backups")) {
    $oldUsbBackups = Get-ChildItem -Path "$UsbDrive\LogiTrack_Backups" -Filter "LogiTrack_Backup_*.zip" | Where-Object { $_.CreationTime -lt $cutoffDate }
    if ($oldUsbBackups.Count -gt 0) {
        foreach ($old in $oldUsbBackups) {
            Remove-Item $old.FullName -Force
        }
        Write-Host "[OK] USB上の $($oldUsbBackups.Count) 件の古いバックアップを削除" -ForegroundColor Green
    }
}

# Gitの状態を表示
Write-Host "`n[4/4] Gitの状態を確認中..." -ForegroundColor Yellow

Push-Location $SourcePath
try {
    $gitStatus = git status --porcelain 2>$null
    if ($gitStatus) {
        $changedFiles = ($gitStatus | Measure-Object).Count
        Write-Host "[WARNING] $changedFiles 件の未コミットの変更があります" -ForegroundColor Yellow
        Write-Host "  → git add . && git commit -m `"説明`" でコミットしてください" -ForegroundColor Yellow
    } else {
        Write-Host "[OK] すべての変更がコミットされています" -ForegroundColor Green
    }
} catch {
    Write-Host "[INFO] Git情報を取得できませんでした" -ForegroundColor Gray
}
Pop-Location

# 完了メッセージ
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host " バックアップ完了!" -ForegroundColor Green
Write-Host " ファイル: $zipFilePath" -ForegroundColor Cyan
if ($UsbDrive) {
    Write-Host " USB: $UsbDrive\LogiTrack_Backups\$zipFileName" -ForegroundColor Cyan
}
Write-Host "========================================" -ForegroundColor Cyan
