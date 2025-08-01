# 1. 安装TShock

## 基本知识
### 网络环境
本教程用到的部分GitHub链接等可能需要科学的上网环境，如果下载文件缓慢可以使用[GitHub Proxy](https://github.akams.cn/)镜像下载。  
![PixPin_2025-08-01_14-16-08](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-01_14-16-08.gif)
### 截图
这里首推QQ自带的截图工具，点击聊天窗口的剪刀，或者默认快捷键`Ctrl+Alt+A`截图。当然如果你会使用[PixPin](https://pixpin.cn/)等更强大的截图工具也很好。  
![PixPin_2025-08-01_14-19-38](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-01_14-19-38.gif)
### 录屏
同样推荐QQ自带的录屏工具，将鼠标悬浮在剪刀上，然后电击录屏，或者使用快捷键`Ctrl+Alt+A`录屏。  
![PixPin_2025-08-01_14-25-05](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-01_14-25-05.gif)

## 选择服务器 (小白推荐云服务，不推荐家里云)
TShock对服务器的性能要求并不高，注意以下几点即可:
1. CPU单核性能中等即可，详细可参考[TShock CPU天梯图](..\other\TShockCPUTest.md)
2. 2核心足够, 服务器的主逻辑都在主线程上，不是很吃多核性能，所以你买个16核服务器也没用
3. 内存方面建议4GB+
4. 网络建议3Mbps+，如果人多(超过10人)建议5Mbps+
5. 如果追求性价比就是买NAT服务器(端口转发)；如果追求默认7777端口就购买独立IP服务器
6. 小白推荐Windows Server服务器，老逼登想压缩成本可以用Linux
7. 硬盘没什么要求

> [!NOTE]
> 免得打广告嫌疑，Cai不在这推荐任何服务器厂商，请根据上面几点自行判断

## 开始安装TShock
1. 我们进入TShock的发布页(可能需要科学上网): https://github.com/Pryaxis/TShock/releases  
![20250801145530](https://raw.githubusercontent.com/ACaiCat/cai-image/main/20250801145530.png)
目前TShock主要两个版本TShock6和TShock5两个版本。

| 版本    | 优点                            | 缺点                              |
| ------- | ------------------------------- | --------------------------------- |
| TShock5 | 稳定，使用人多                  | 不支持新插件，未来迁移TShock6方便 |
| TShock6 | 支持新插件，未来无缝迁移TShock6 | 有一些奇怪Bug                     |

2. 选择对应的版本下载
![20250801150533](https://raw.githubusercontent.com/ACaiCat/cai-image/main/20250801150533.png)

| 版本        | 平台        |
| ----------- | ----------- |
| linux-amd64 | Linux X64   |
| linux-arm64 | Linux ARM64 |
| osx-amd64   | MacOS X64   |
| win-amd64   | Windows X64 |

> [!IMPORTANT]
> amd64和arm64千万不要弄混!!!

### 下载加速

右键复制下载链接，然后打开[GitHub Proxy](https://github.akams.cn/)镜像粘贴加速下载。
![PixPin](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-01_15-11-26.gif)

> [!CAUTION]
> 再次提醒请确保你下载的zip压缩包和你的服务器对应版本一致

### Windows

### Linux

### 简幻欢面板 (非广告)

### 家里云 FRP
