#!/usr/bin/env pwsh

function Join-Repo-Root {
    param (
        [Parameter(Mandatory, Position=0, ValueFromRemainingArguments)]
        [string[]] $Paths
    )
    return Join-Path $PSScriptRoot '..' @Paths
}

# 创建符号链接的函数
function Create-Symlink {
    param (
        [string]$Source,
        [string]$Destination
    )
    
    # 确保目标目录存在
    $destDir = [System.IO.Path]::GetDirectoryName($Destination)
    if (-not (Test-Path $destDir)) {
        New-Item -ItemType Directory -Path $destDir -Force | Out-Null
    }
    
    # 如果目标已存在则删除（可能是旧链接或文件）
    if (Test-Path $Destination) {
        Remove-Item $Destination -Force
    }
    
    # 创建符号链接
    try {
        New-Item -ItemType SymbolicLink -Path $Destination -Target $Source -Force
        Write-Host "✅ Created symlink: $Destination -> $Source"
    } catch {
        Write-Host "❌ Failed to create symlink for $Destination : $_"
    }
}

# 处理 submodule_build.json 中定义的文档
$jsonContent = Get-Content -Path $(Join-Repo-Root 'TShockPlugin/.config/submodule_build.json') -Raw | ConvertFrom-Json
foreach($submodule in $jsonContent.submodules) {   
    if (-not [string]::IsNullOrEmpty($submodule.readme)) {
        $source = $(Join-Repo-Root 'TShockPlugin' $submodule.readme)
        $dest = $(Join-Repo-Root 'docs' 'zh' 'guide' ($submodule.name + ".md"))
        Create-Symlink -Source $source -Destination $dest
    }
}

# 处理 csproj 项目中的 README.md
foreach ($p in @(Get-ChildItem $(Join-Repo-Root TShockPlugin/src/**/*.csproj))) { 
    $defaultFile = Join-Path $p.Directory "README.md"
    if (Test-Path $defaultFile) {
        $dest = $(Join-Repo-Root 'docs' 'zh' 'guide' ($p.BaseName + '.md'))
        Create-Symlink -Source $defaultFile -Destination $dest
    }
}

# 处理开发文档
$devDocsSource = $(Join-Repo-Root 'TShockPluginDevelopDocs' 'Document')
$devDocsDest = $(Join-Repo-Root 'docs' 'zh' 'plugin-dev')
if (Test-Path $devDocsSource) {
    # 对于目录，我们只能递归创建单个链接（Windows限制）
    # 或者可以选择为每个文件创建链接
    Create-Symlink -Source $devDocsSource -Destination $devDocsDest
}
