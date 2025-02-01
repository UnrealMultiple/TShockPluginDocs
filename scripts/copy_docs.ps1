#!/usr/bin/env pwsh

function Join-Repo-Root {
    param (
        [Parameter(Mandatory, Position=0, ValueFromRemainingArguments)]
        [string[]] $Paths
    )
    return Join-Path $PSScriptRoot '..' @Paths
}

$jsonContent = Get-Content -Path $(Join-Repo-Root 'TShockPlugin/.config/submodule_build.json') -Raw  | ConvertFrom-Json
foreach($submodule in $jsonContent.submodules)
{   
    if (-not [string]::IsNullOrEmpty($submodule.readme)) {
      Copy-Item -Path $(Join-Repo-Root 'TShockPlugin' $submodule.readme) -Destination $(Join-Repo-Root 'docs' 'zh' 'guide' ($submodule.name + ".md"))
    }
}


foreach ($p in @(Get-ChildItem $(Join-Repo-Root TShockPlugin/src/**/*.csproj))) { 
    $defaultFile = Join-Path $p.Directory "README.md"

    Copy-Item -Path $defaultFile -Destination $(Join-Repo-Root 'docs' 'zh' 'guide' ($p.BaseName + '.md'))
    
    # if (Test-Path $enUsFile) {
    #     Copy-Item -Path $enUsFile -Destination $(Join-Repo-Root 'docs' 'en' 'guide' ($p.BaseName + '.md'))
    # } elseif (Test-Path $defaultFile) {
    #     Copy-Item -Path $defaultFile -Destination $(Join-Repo-Root 'docs' 'en' 'guide' ($p.BaseName + '.md'))
    # }
}

Copy-Item -Path $(Join-Repo-Root 'TShockPluginDevelopDocs' 'Document' '*') -Destination $(Join-Repo-Root 'docs' 'zh' 'plugin-dev') -Recurse -Force
