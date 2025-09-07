#!/usr/bin/env pwsh
# TShock Wiki 同步脚本 - 从子模块同步中文文档

param(
    [switch]$Init,
    [switch]$Update
)

# 确保脚本在正确的目录运行
$projectRoot = Split-Path -Parent $PSScriptRoot
Set-Location $projectRoot

# 子模块路径和目标路径
$submodulePath = "TShockWiki"
$targetPath = "docs/zh/tshock-wiki"

function Update-Submodule {
    Write-Host "更新 TShock Wiki 子模块..." -ForegroundColor Green
    
    # 更新子模块
    git submodule update --remote $submodulePath
    if ($LASTEXITCODE -ne 0) {
        Write-Error "子模块更新失败"
        exit 1
    }
    
    Write-Host "子模块更新完成" -ForegroundColor Green
}

function Clear-NonChineseFiles {
    param([string]$Path)
    
    Write-Host "清理非中文文件..." -ForegroundColor Yellow
    
    Get-ChildItem -Path $Path -File | Where-Object {
        $_.Name -notlike "*(中文)*" -and 
        $_.Name -ne "get-start.md" -and 
        $_.Name -ne "README-维护说明.md"
    } | Remove-Item -Force
    
    # 删除空的.md文件
    $emptyMd = Join-Path $Path ".md"
    if (Test-Path $emptyMd) {
        Remove-Item $emptyMd -Force -ErrorAction SilentlyContinue
    }
    
    Write-Host "非中文文件清理完成" -ForegroundColor Green
}

function Fix-ChineseTitles {
    param([string]$Path)
    
    Write-Host "修复中文标题..." -ForegroundColor Yellow
    
    Get-ChildItem -Path $Path -Filter "*(中文)*.md" | ForEach-Object {
        $content = Get-Content $_.FullName -Raw -Encoding UTF8
        
        # 提取文件名中的中文标题（去掉(中文)前缀）
        $title = $_.BaseName -replace '^\(中文\)\s*', ''
        
        # 检查是否已有标题
        if ($content -notmatch '^#\s+') {
            # 添加标题
            $newContent = "# $title`r`n`r`n$content"
            Set-Content -Path $_.FullName -Value $newContent -Encoding UTF8
            Write-Host "为 $($_.Name) 添加了标题: $title" -ForegroundColor Cyan
        }
    }
    
    Write-Host "中文标题修复完成" -ForegroundColor Green
}

function Ensure-GetStartFile {
    param([string]$Path)
    
    $getStartFile = Join-Path $Path "get-start.md"
    
    if (-not (Test-Path $getStartFile)) {
        Write-Host "⚠ get-start.md 文件不存在，需要手动创建" -ForegroundColor Yellow
    } else {
        Write-Host "✓ get-start.md 文件已存在" -ForegroundColor Green
    }
}

function Sync-WikiContent {
    Write-Host "同步 Wiki 内容..." -ForegroundColor Green
    
    # 创建目标目录
    if (-not (Test-Path $targetPath)) {
        New-Item -ItemType Directory -Path $targetPath -Force | Out-Null
    }
    
    # 复制所有文件
    Copy-Item -Path "$submodulePath\*" -Destination $targetPath -Recurse -Force
    
    # 删除.git目录（如果存在）
    $gitDir = Join-Path $targetPath ".git"
    if (Test-Path $gitDir) {
        Remove-Item -Path $gitDir -Recurse -Force
    }
    
    # 清理非中文文件
    Clear-NonChineseFiles -Path $targetPath
    
    # 修复中文标题
    Fix-ChineseTitles -Path $targetPath
    
    # 确保存在get-start.md
    Ensure-GetStartFile -Path $targetPath
    
    Write-Host "Wiki 内容同步完成" -ForegroundColor Green
}

# 主逻辑
if ($Init) {
    Write-Host "初始化 TShock Wiki..." -ForegroundColor Magenta
    
    # 初始化子模块
    git submodule update --init --recursive
    
    # 同步内容
    Sync-WikiContent
    
    Write-Host "TShock Wiki 初始化完成!" -ForegroundColor Magenta
}
elseif ($Update) {
    Write-Host "更新 TShock Wiki..." -ForegroundColor Magenta
    
    # 更新子模块
    Update-Submodule
    
    # 同步内容
    Sync-WikiContent
    
    Write-Host "TShock Wiki 更新完成!" -ForegroundColor Magenta
}
else {
    Write-Host "用法:" -ForegroundColor Yellow
    Write-Host "  .\scripts\sync_tshock_wiki.ps1 -Init    # 初始化 Wiki" -ForegroundColor Cyan
    Write-Host "  .\scripts\sync_tshock_wiki.ps1 -Update  # 更新 Wiki" -ForegroundColor Cyan
}
