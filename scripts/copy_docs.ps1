#!/usr/bin/env pwsh

function Join-Repo-Root {
    param (
        [Parameter(Mandatory, Position=0, ValueFromRemainingArguments)]
        [string[]] $Paths
    )
    return Join-Path $PSScriptRoot '..' @Paths
}

function Update-Markdown-Links {
    param ([Parameter(Mandatory)][string] $FilePath)

    $content = [System.IO.File]::ReadAllText($FilePath)
    $updatedContent = $content -replace '\[([^\]]+)\]\(\/([^\/]+)\/README\.md\)', '[$1](/$2.md)' `
                               -replace '\[([^\]]+)\]\(\.\.\/([^\/]+)\/README\.md\)', '[$1]($2.md)' `
                               -replace '\[([^\]]+)\]\(\.\/README\.md\)', '[$1](/README.md)'

    if ($updatedContent -ne $content) {
        [System.IO.File]::WriteAllText($FilePath, $updatedContent)
    }
}

function Update-PluginList-Links {
    param (
        [Parameter(Mandatory)][string] $FilePath,
        [switch] $IsGetStart,
        [switch] $IsSubmoduleReadme,
        [string] $SubmoduleName,
        [string] $SubmoduleOrignReadme
    )

    if (-not (Test-Path $FilePath)) { return }
    $content = [System.IO.File]::ReadAllText($FilePath)
    if ([string]::IsNullOrWhiteSpace($content)) { return }

    if ($IsGetStart -and $content -match '(?s)^.*?(?=\s*##\s+前言)') {
        $content = $content -replace '(?s)^.*?(?=\s*##\s+前言)', '# TShock插件の仓库'
    }

    $content = $content -replace '\[([^\]]+)\]\(\./src/([^/]+)/README\.md\)', '[$1](./$2.md)' `
                        -replace '\[([^\]]+)\]\(\)', '$1'

    if ($IsSubmoduleReadme -and $SubmoduleName -and $SubmoduleOrignReadme) {
        $content = $content -replace [regex]::Escape($SubmoduleOrignReadme), "$SubmoduleName.md"
    }

    [System.IO.File]::WriteAllText($FilePath, $content, [System.Text.Encoding]::UTF8)
}

$mainRepoReadme = Join-Repo-Root 'TShockPlugin' 'README.md'
$getStartDest = Join-Repo-Root 'docs' 'zh' 'guide' 'get-start.md'

if (Test-Path $mainRepoReadme) {
    Copy-Item -Path $mainRepoReadme -Destination $getStartDest -Force
    Update-PluginList-Links -FilePath $getStartDest -IsGetStart
}

$jsonPath = Join-Repo-Root 'TShockPlugin/.config/submodule_build.json'
if (Test-Path $jsonPath) {
    $jsonContent = [System.IO.File]::ReadAllText($jsonPath) | ConvertFrom-Json

    foreach ($submodule in $jsonContent.submodules) {
        if ($submodule.readme) {
            $sourcePath = Join-Repo-Root 'TShockPlugin' $submodule.readme
            $destPath = Join-Repo-Root 'docs' 'zh' 'guide' "$($submodule.name).md"

            if (Test-Path $sourcePath) {
                Copy-Item -Path $sourcePath -Destination $destPath -ErrorAction SilentlyContinue

                $manifestPath = Join-Repo-Root 'TShockPlugin/.config/submodule-manifests' "$($submodule.name).json"
                if (Test-Path $manifestPath) {
                    $manifest = [System.IO.File]::ReadAllText($manifestPath) | ConvertFrom-Json
                    Update-PluginList-Links -FilePath $getStartDest -IsSubmoduleReadme -SubmoduleName $submodule.name -SubmoduleOrignReadme $manifest.README.READMEUrl
                }
            }
        }
    }
}

foreach ($p in Get-ChildItem (Join-Repo-Root 'TShockPlugin/src/**/*.csproj')) {
    $defaultFile = Join-Path $p.DirectoryName "README.md"
    $destPath = Join-Repo-Root 'docs' 'zh' 'guide' "$($p.BaseName).md"

    if (Test-Path $defaultFile) {
        Copy-Item -Path $defaultFile -Destination $destPath -ErrorAction SilentlyContinue
        if (Test-Path $destPath) {
            Update-Markdown-Links -FilePath $destPath
        }
    }
}

$sourceDocs = Join-Repo-Root 'TShockPluginDevelopDocs' 'Document' '*'
$destDocs = Join-Repo-Root 'docs' 'zh' 'plugin-dev'

if (Test-Path $sourceDocs) {
    Copy-Item -Path $sourceDocs -Destination $destDocs -Recurse -Force -ErrorAction SilentlyContinue
}
