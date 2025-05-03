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
        $destPath = $(Join-Repo-Root 'docs' 'zh' 'guide' ($submodule.name + ".md"))
        Copy-Item -Path $(Join-Repo-Root 'TShockPlugin' $submodule.readme) -Destination $destPath
        Update-Markdown-Links -FilePath $destPath
    }
}

foreach ($p in @(Get-ChildItem $(Join-Repo-Root TShockPlugin/src/**/*.csproj))) { 
    $defaultFile = Join-Path $p.Directory "README.md"
    $destPath = $(Join-Repo-Root 'docs' 'zh' 'guide' ($p.BaseName + '.md'))
    
    Copy-Item -Path $defaultFile -Destination $destPath
    Update-Markdown-Links -FilePath $destPath
    
    # if (Test-Path $enUsFile) {
    #     Copy-Item -Path $enUsFile -Destination $(Join-Repo-Root 'docs' 'en' 'guide' ($p.BaseName + '.md'))
    # } elseif (Test-Path $defaultFile) {
    #     Copy-Item -Path $defaultFile -Destination $(Join-Repo-Root 'docs' 'en' 'guide' ($p.BaseName + '.md'))
    # }
}

Copy-Item -Path $(Join-Repo-Root 'TShockPluginDevelopDocs' 'Document' '*') -Destination $(Join-Repo-Root 'docs' 'zh' 'plugin-dev') -Recurse -Force
