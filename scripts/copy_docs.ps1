#!/usr/bin/env pwsh

function Join-Repo-Root {
    param (
        [Parameter(Mandatory, Position=0, ValueFromRemainingArguments)]
        [string[]] $Paths
    )
    return Join-Path $PSScriptRoot '..' @Paths
}

function Create-Symlink {
    param (
        [string]$Source,
        [string]$Destination
    )
    
    # 验证参数
    if ([string]::IsNullOrEmpty($Source) -or [string]::IsNullOrEmpty($Destination)) {
        Write-Host "❌ Source or Destination path is empty"
        return
    }

    # 确保源文件存在
    if (-not (Test-Path $Source)) {
        Write-Host "❌ Source file does not exist: $Source"
        return
    }

    # 确保目标目录存在
    $destDir = [System.IO.Path]::GetDirectoryName($Destination)
    if (-not (Test-Path $destDir)) {
        New-Item -ItemType Directory -Path $destDir -Force | Out-Null
    }
    
    # 删除已存在的目标（文件或目录）
    if (Test-Path $Destination) {
        try {
            # 对于目录，使用递归删除
            if ((Get-Item $Destination) -is [System.IO.DirectoryInfo]) {
                Remove-Item $Destination -Recurse -Force -ErrorAction Stop
            } else {
                Remove-Item $Destination -Force -ErrorAction Stop
            }
        } catch {
            Write-Host "❌ Failed to remove existing item at $Destination : $_"
            return
        }
    }
    
    # 创建符号链接
    try {
        $itemType = if (Test-Path $Source -PathType Container) { "Directory" } else { "File" }
        New-Item -ItemType SymbolicLink -Path $Destination -Target $Source -Force -ErrorAction Stop
        Write-Host "✅ Created $itemType symlink: $Destination -> $Source"
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

# 处理开发文档 - 改为文件级链接
$devDocsSource = $(Join-Repo-Root 'TShockPluginDevelopDocs' 'Document')
$devDocsDest = $(Join-Repo-Root 'docs' 'zh' 'plugin-dev')

if (Test-Path $devDocsSource) {
    # 为目录中的每个文件创建单独链接
    Get-ChildItem $devDocsSource -File | ForEach-Object {
        $destFile = Join-Path $devDocsDest $_.Name
        Create-Symlink -Source $_.FullName -Destination $destFile
    }
}
