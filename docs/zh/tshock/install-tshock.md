# 1. 安装TShock

## 基本知识
### 网络环境
本教程用到的部分GitHub链接等可能需要科学的上网环境，如果下载文件缓慢可以使用[GitHub Proxy](https://github.akams.cn/)镜像下载。  
![PixPin_2025-08-01_14-16-08](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-01_14-16-08.gif)
### 截图
这里首推QQ自带的截图工具，点击聊天窗口的剪刀，或者默认快捷键`Ctrl+Alt+A`截图。当然如果你会使用[PixPin](https://pixpin.cn/)等更强大的截图工具也很好。  
![PixPin_2025-08-01_14-19-38](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-01_14-19-38.gif)
### 录屏
同样推荐QQ自带的录屏工具，将鼠标悬浮在剪刀上，然后点击录屏，或者使用快捷键`Ctrl+Alt+A`录屏。  
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
目前TShock主要两个版本TShock6和TShock5两个版本。

| 版本    | 优点                            | 缺点                              |
| ------- | ------------------------------- | --------------------------------- |
| TShock5 | 稳定，使用人多                  | 不支持新插件，未来迁移TShock6方便 |
| TShock6 | 支持新插件，未来无缝迁移TShock6 | 有一些奇怪Bug                     |

1. 选择对应的版本下载
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

### Windows (Windows Server 2022为例)
1. 在Windows中我们使用**远程桌面连接**来连接服务器，直接在**Windows搜索**即可找到，当然手机也有对应的APP，叫做[Windows APP](https://apkpure.net/cn/windows-app/com.microsoft.rdc.androidx/download)

2. 打开服务器面板，将连接信息粘贴到**远程桌面连接**中  
![PixPin_2025-08-01_16-34-34](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-01_16-34-34.gif)

3. 复制我们刚刚下载的TShock包，然后粘贴到服务器桌面上
![PixPin_2025-08-01_16-40-40](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-01_16-40-40.gif)

4. 新建文件夹，命名为TShock，然后将我们的TShock包解压到文件夹内
  ![PixPin_2025-08-01_16-43-54](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-01_16-43-54.gif)

5. 安装TShock运行环境
  TShock5需要下载.NET 6运行时，TShock6需要下载.NET 9运行时  
  - [TShock 5 .NET6](https://dotnet.microsoft.com/zh-cn/download/dotnet/6.0)
  - [TShock 6 .NET9](https://dotnet.microsoft.com/zh-cn/download/dotnet/9.0)
  
  ![PixPin_2025-08-01_16-48-54](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-01_16-48-54.gif)
  
> [!IMPORTANT]
> 应该下载X64(AMD64),而非ARM64

6. 把安装程序上传到服务器并安装，一路下一步 (当然如果你直接在服务器下载就可以直接运行安装程序了)
7. 检查文件扩展名打开，创建启动脚本，启动TShock
   ```
   TShock.Server.exe -lang 7
   pause
   ```
   ![PixPin_2025-08-01_17-25-45](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-01_17-25-45.gif)
   出现选择世界的界面则代表TShock安装成功

### Linux (Ubuntu-22.04)
1. 安装Tabby
   - 官网：https://tabby.sh/
   - GitHub：https://github.com/Eugeny/tabby/releases/tag/v1.0.223

2. 使用Tabby SSH连接服务器
   ![PixPin_2025-08-01_17-32-45](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-01_17-32-45.gif)

3. 上传TShock包，并解压 (注意zip名字可能会有变化，自行修改)
   ```shell
   apt install unzip
   unzip TShock-5.2.4-for-Terraria-1.4.4.9-linux-amd64-Release.zip
   tar -xvf TShock-Beta-linux-x64-Release.tar --one-top-level=tshock
   rm TShock-5.2.4-for-Terraria-1.4.4.9-linux-amd64-Release.zip TShock-Beta-linux-x64-Release.tar
   cd tshock
   ```
   ![PixPin_2025-08-01_17-46-23.gif](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-01_17-46-23.gif)

4. 安装.NET运行时环境
   1. 下载安装脚本
    ```shell
    wget https://dot.net/v1/dotnet-install.sh -O dotnet-install.sh
    chmod +x dotnet-install.sh
    ```
   2. 使用脚本安装.NET运行时 (有点慢，卡太久就上科学或者手动安装吧)
     - TShock 5 .NET6：
      ```shell
      ./dotnet-install.sh --runtime dotnet --channel 6.0
      ```
     - TShock 6 .NET9：
      ```shell
      ./dotnet-install.sh --runtime dotnet --channel 9.0
      ```
   3. 导入PATH
    ```shell
    echo 'export DOTNET_ROOT=$HOME/.dotnet' >> ~/.bashrc
    echo 'export PATH=$PATH:$HOME/.dotnet' >> ~/.bashrc
    source ~/.bashrc
    ```
   4. 验证安装
    ```shell
    dotnet --list-runtimes
    ```
   ![PixPin_2025-08-01_18-23-24](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-01_18-23-24.gif)

5. 创建启动脚本 (你喜欢Vim我也没意见)
   1. 安装nano并且创建启动脚本
   ```shell
   sudo apt install nano
   nano start.sh
   ```
   2. 将一下内容复制到脚本中
   ```bash
   ./TShock.Server -lang 7
   ```
   3. 保存启动脚本并退出  
   按Ctrl+S保存再按Ctrl+X退出
   4. 给启动脚本添加执行权限
   ```bash
   chmod 777 start.sh
   ```
   ![PixPin_2025-08-01_17-59-49](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-01_17-59-49.gif)

6. 安装tmux
   ```shell
   sudo apt install tmux
   ```
   ![PixPin_2025-08-01_18-25-52](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-01_18-25-52.gif)
  
7. 使用tmux启动服务器
   ```shell
   tmux
   ./start.sh
   ```
   ![PixPin_2025-08-01_18-26-57](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-01_18-26-57.gif)


#### **🔧 5个必备命令**  
1. **`tmux`** → 启动新会话  
2. **`tmux ls`** → 查看所有会话  
3. **`tmux attach -t 0`** → 进入第1个会话（0代表编号）  
4. **`tmux kill-session -t 0`** → 关闭第1个会话  
5. **`tmux new -s dev`** → 创建名为 `dev` 的会话  

#### **⚡ 5个核心快捷键**（先按 `Ctrl+b`，再按键）  
1. **`d`** → 退出当前会话（后台运行）  
2. **`c`** → 新建窗口  
3. **`%`** → 左右分屏（垂直分割）  
4. **`"`** → 上下分屏（水平分割）  
5. **`方向键`** → 切换分屏  


#### **🌰 举个栗子**  
1. 输入 `tmux` 进入会话  
2. 按 `Ctrl+b %` 分屏 → 左边写代码，右边跑程序  
3. 按 `Ctrl+b d` 退出，程序仍在后台运行  
4. 想回来时输入 `tmux attach`  

> 💡 记住：所有快捷键都要先按 **`Ctrl+b`** 再按后续键！
   

### 简幻欢面板 (非广告)
