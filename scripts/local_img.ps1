# 定义根目录路径
$rootDir = "docs"  # 替换为你的根目录路径

# 递归遍历所有 Markdown 文件
Get-ChildItem -Path $rootDir -Recurse -Filter *.md | ForEach-Object {
    $mdFilePath = $_.FullName
    $mdDir = $_.DirectoryName

    # 创建 img 目录（如果不存在）
    $imgDir = Join-Path $mdDir "img"
    if (-not (Test-Path $imgDir)) {
        New-Item -Path $imgDir -ItemType Directory
    }

    # 读取 Markdown 文件内容
    $mdContent = Get-Content -Path $mdFilePath -Raw

    # 正则表达式匹配图片链接
    $imagePattern = '!\[.*?\]\((.*?)\)'
    $matches = [regex]::Matches($mdContent, $imagePattern)

    # 遍历所有匹配的图片链接
    foreach ($match in $matches) {
        $imageUrl = $match.Groups[1].Value

        # 处理相对路径
        if (-not $imageUrl.StartsWith("http")) {
            $imageUrl = [System.IO.Path]::GetFullPath((Join-Path $mdDir $imageUrl))
        }

        # 清理文件名：替换特殊字符为下划线
        $imageFileName = [System.IO.Path]::GetFileName($imageUrl)
        if ($imageUrl -match '[\?@=&]') {
            Write-Host "跳过图片(包含图片参数): $imageUrl"
            continue
        }

        # 如果链接没有文件后缀，尝试从 URL 中提取
        if (-not [System.IO.Path]::HasExtension($imageFileName)) {
            $imageFileName = "$imageFileName.jpg"  # 默认使用 .jpg 后缀
        }

        # 下载图片
        $localImagePath = Join-Path $imgDir $imageFileName

        try {
            if ($imageUrl.StartsWith("http")) {
                # 下载网络图片
                Invoke-WebRequest -Uri $imageUrl -OutFile $localImagePath
            } else {
                continue
            }
            Write-Host "图片下载成功: $imageUrl -> $localImagePath"

            # 替换 Markdown 中的图片链接为本地相对路径
            $relativeImagePath = "img/$imageFileName"
            $mdContent = $mdContent.Replace($match.Groups[1].Value, $relativeImagePath)
        } catch {
            Write-Host "图片下载失败: $imageUrl"
        }
    }

    # 保存修改后的 Markdown 文件
    Set-Content -Path $mdFilePath -Value $mdContent
    Write-Host "文件图片已处理: $mdFilePath"
}

Write-Host "图片转本地完成!"