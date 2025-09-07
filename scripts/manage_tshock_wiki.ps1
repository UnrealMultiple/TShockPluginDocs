# TShock Wiki 管理脚本
# 功能：克隆/更新 TShock Wiki，清理非中文文档，修复标题

param(
    [switch]$Update,  # 是否执行更新操作
    [switch]$Init     # 是否执行初始化操作
)

# 切换到项目根目录（如果当前不在）
if (-not (Test-Path "docs\zh")) {
    Write-Host "错误：请在项目根目录下运行此脚本。" -ForegroundColor Red
    exit 1
}

$wikiPath = "docs\zh\tshock-wiki"
$wikiUrl = "https://github.com/Pryaxis/TShock.wiki.git"

# 清理非中文文档的函数
function Clear-NonChineseFiles {
    Write-Host "正在清理非中文文档..." -ForegroundColor Yellow
    $filesToKeep = @("*(中文)*", "get-start.md", "README-维护说明.md")
    
    Get-ChildItem -File | Where-Object {
        $keep = $false
        foreach ($pattern in $filesToKeep) {
            if ($_.Name -like $pattern) { $keep = $true; break }
        }
        return -not $keep
    } | Remove-Item -Force
    
    Write-Host "已清理非中文文档，只保留中文相关内容。" -ForegroundColor Green
}

# 修复中文文档标题的函数
function Fix-ChineseTitles {
    Write-Host "正在检查并修复中文文档的标题..." -ForegroundColor Yellow
    $chineseFiles = Get-ChildItem -Name "*(中文)*"
    $fixedCount = 0
    
    foreach ($file in $chineseFiles) {
        if (Test-Path $file) {
            $content = Get-Content $file -Raw -Encoding UTF8 -ErrorAction SilentlyContinue
            
            if ($content -and (-not $content.StartsWith("#") -or $content.StartsWith("##"))) {
                # 从文件名提取标题
                $title = $file -replace "\(中文\)", "" -replace "\.md$", ""
                
                # 添加一级标题
                $newContent = "# $title`n`n$content"
                Set-Content -Path $file -Value $newContent -Encoding UTF8
                
                $statusMsg = if ($content.StartsWith("##")) { "（原为二级标题开头）" } else { "" }
                Write-Host "  ✓ 已为 $file 添加标题: # $title $statusMsg" -ForegroundColor Green
                $fixedCount++
            }
        }
    }
    
    if ($fixedCount -eq 0) {
        Write-Host "所有中文文档标题都正确！" -ForegroundColor Green
    } else {
        Write-Host "已修复 $fixedCount 个文档的标题。" -ForegroundColor Green
    }
}

# 确保入口文件存在的函数
function Ensure-GetStartFile {
    if (-not (Test-Path "get-start.md")) {
        Write-Host "⚠ 入口文件 get-start.md 不存在！" -ForegroundColor Red
        Write-Host "请确保在 tshock-wiki 目录下有 get-start.md 文件，或重新运行初始化。" -ForegroundColor Yellow
    } else {
        Write-Host "✓ 入口文件 get-start.md 已存在" -ForegroundColor Green
    }
}

# 主要逻辑
if ($Init) {
    Write-Host "=== 初始化 TShock Wiki ===" -ForegroundColor Cyan
    
    # 删除现有目录
    if (Test-Path $wikiPath) {
        Write-Host "删除现有的 Wiki 目录..." -ForegroundColor Yellow
        Remove-Item -Recurse -Force $wikiPath
    }
    
    # 克隆 Wiki 仓库
    Write-Host "正在克隆 TShock Wiki..." -ForegroundColor Green
    git clone $wikiUrl $wikiPath
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Wiki 克隆成功！" -ForegroundColor Green
        
        # 进入 Wiki 目录
        Set-Location $wikiPath
        
        # 清理和修复
        Clear-NonChineseFiles
        Fix-ChineseTitles
        Ensure-GetStartFile
        
        # 返回项目根目录
        Set-Location "..\..\..\"
        
        Write-Host "=== 初始化完成！===" -ForegroundColor Cyan
    } else {
        Write-Host "克隆失败，请检查网络连接。" -ForegroundColor Red
        exit 1
    }
    
} elseif ($Update) {
    Write-Host "=== 更新 TShock Wiki ===" -ForegroundColor Cyan
    
    if (-not (Test-Path $wikiPath)) {
        Write-Host "错误：Wiki 目录不存在，请先运行初始化操作。" -ForegroundColor Red
        Write-Host "使用命令：.\scripts\manage_tshock_wiki.ps1 -Init" -ForegroundColor Yellow
        exit 1
    }
    
    # 进入 Wiki 目录
    Set-Location $wikiPath
    
    # 检查是否为 git 仓库
    if (Test-Path ".git") {
        Write-Host "正在拉取最新 Wiki 内容..." -ForegroundColor Green
        git pull origin master
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "Wiki 内容更新成功！" -ForegroundColor Green
            
            # 清理和修复
            Clear-NonChineseFiles
            Fix-ChineseTitles
            Ensure-GetStartFile
            
            # 返回项目根目录
            Set-Location "..\..\..\"
            
            Write-Host "=== 更新完成！===" -ForegroundColor Cyan
        } else {
            Write-Host "更新失败，请检查网络连接或仓库状态。" -ForegroundColor Red
            Set-Location "..\..\..\"
            exit 1
        }
    } else {
        Write-Host "错误：Wiki 目录不是有效的 Git 仓库。" -ForegroundColor Red
        Set-Location "..\..\..\"
        exit 1
    }
    
} else {
    # 显示帮助信息
    Write-Host "TShock Wiki 管理脚本" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "用法：" -ForegroundColor Yellow
    Write-Host "  .\scripts\manage_tshock_wiki.ps1 -Init     # 初始化：克隆 Wiki 并处理" -ForegroundColor White
    Write-Host "  .\scripts\manage_tshock_wiki.ps1 -Update   # 更新：拉取最新内容并处理" -ForegroundColor White
    Write-Host ""
    Write-Host "功能：" -ForegroundColor Yellow
    Write-Host "  • 克隆/更新 TShock 官方 Wiki" -ForegroundColor White
    Write-Host "  • 清理非中文文档" -ForegroundColor White
    Write-Host "  • 自动修复中文文档标题" -ForegroundColor White
    Write-Host "  • 创建/更新入口文件" -ForegroundColor White
}

Write-Host ""
Write-Host "如需查看效果，请访问：http://localhost:8082/zh/tshock-wiki/" -ForegroundColor Cyan
