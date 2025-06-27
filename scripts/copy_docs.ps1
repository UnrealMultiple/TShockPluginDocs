#!/usr/bin/env pwsh

function Join-Repo-Root {
    param (
        [Parameter(Mandatory, Position=0, ValueFromRemainingArguments)]
        [string[]] $Paths
    )
    return Join-Path $PSScriptRoot '..' @Paths
}

function Update-Markdown-Links {
    param (
        [Parameter(Mandatory)]
        [string] $FilePath
    )
    
    $content = Get-Content -Path $FilePath -Raw
    
    # 替换绝对路径格式 /PluginName/README.md 为 /PluginName.md（保留根路径）
    $updatedContent = $content -replace '\[([^\]]+)\]\(\/([^\/]+)\/README\.md\)', '[$1](/$2.md)'
    
    # 替换父级目录格式 ../SubmoduleName/README.md 为 SubmoduleName.md（改为相对路径）
    $updatedContent = $updatedContent -replace '\[([^\]]+)\]\(\.\.\/([^\/]+)\/README\.md\)', '[$1]($2.md)'  # <- 关键修改点
    
    # 替换当前目录 README.md 链接为根路径格式（保留根路径）
    $updatedContent = $updatedContent -replace '\[([^\]]+)\]\(\.\/README\.md\)', '[$1](/README.md)'
    
    if ($updatedContent -ne $content) {
        Set-Content -Path $FilePath -Value $updatedContent -NoNewline
    }
}

$jsonContent = Get-Content -Path $(Join-Repo-Root 'TShockPlugin/.config/submodule_build.json') -Raw | ConvertFrom-Json
foreach($submodule in $jsonContent.submodules)
{   
    if (-not [string]::IsNullOrEmpty($submodule.readme)) {
        $sourcePath = $(Join-Repo-Root 'TShockPlugin' $submodule.readme)
        $destPath = $(Join-Repo-Root 'docs' 'zh' 'guide' ($submodule.name + ".md"))
        if (Test-Path $sourcePath) {
            Copy-Item -Path $sourcePath -Destination $destPath -ErrorAction SilentlyContinue
            if (Test-Path $destPath) {
                Update-Markdown-Links -FilePath $destPath
            }
        }
    }
}

foreach ($p in @(Get-ChildItem $(Join-Repo-Root TShockPlugin/src/**/*.csproj))) { 
    $defaultFile = Join-Path $p.Directory "README.md"
    $destPath = $(Join-Repo-Root 'docs' 'zh' 'guide' ($p.BaseName + '.md'))
    
    if (Test-Path $defaultFile) {
        Copy-Item -Path $defaultFile -Destination $destPath -ErrorAction SilentlyContinue
        if (Test-Path $destPath) {
            Update-Markdown-Links -FilePath $destPath
        }
    }
}

$sourceDocs = $(Join-Repo-Root 'TShockPluginDevelopDocs' 'Document' '*')
$destDocs = $(Join-Repo-Root 'docs' 'zh' 'plugin-dev')
if (Test-Path $sourceDocs) {
    Copy-Item -Path $sourceDocs -Destination $destDocs -Recurse -Force -ErrorAction SilentlyContinue
}
