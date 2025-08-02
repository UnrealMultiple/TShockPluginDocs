# 2. 初始化TShock

## 地图

### 导入地图

#### Windows
Windows下服务器地图会被储存在目录`%USERPROFILE%\Documents\My Games\Terraria\Worlds`中，打开目录直接将`.wld`后缀的世界文件粘贴入其中，然后按`Enter`键刷新地图列表即可看到我们导入的地图  
![PixPin_2025-08-02_12-22-51](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-02_12-22-51.gif)

#### Linux

Linux下服务器地图会被储存在目录`.local/share/Terraria/Worlds/`中，打开目录直接将`.wld`后缀的世界文件粘贴入其中，然后按`Enter`键刷新地图列表即可看到我们导入的地图  

> [!IMPORTANT]
> 注意root用户和普通用户的路径不太一样  
> root: `/root/.local/share/Terraria/Worlds/`
> 普通用户: `/home/<用户名>/.local/share/Terraria/Worlds/`  

![PixPin_2025-08-02_12-35-28](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-02_12-35-28.gif)

#### 简幻欢

先关闭服务器，然后选择文件选项卡找到`world`文件夹，删除原来的`SFE4.wld`，上传地图并且重命名为`SFE4.wld`，最后启动服务器  
![PixPin_2025-08-02_14-14-07](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-02_14-14-07.gif)

### 新建地图

#### Windows & Linux  

按下`n`再按`Enter`，用`数字键`选择对应的世界设置，按`Enter`确认，最后等待生成地图完成
![PixPin_2025-08-02_14-23-41](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-02_14-23-41.gif)

#### 简幻欢

- 推荐方法：
  在游戏中生成后导出到服务器

- 官方镜像：
  关闭服务器，在文件选项卡中的配置项修改，删除`world/SFE4.wld`并重启服务器
 ![20250802144707](https://raw.githubusercontent.com/ACaiCat/cai-image/main/20250802144707.png)
- 羽学TS6镜像：
  关闭服务器，在文件选项卡中编辑`简幻欢TShock 6自动化部署脚本/server.properties`,做出修改然后保存，再删除`world/SFE4.wld`重启服务器即可

### 删除地图

#### Windows & Linux

输入`删除 <世界序号>`，然后按`Enter`，并且输入`是`，再按`Enter`  
![PixPin_2025-08-02_14-38-37](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-02_14-38-37.gif)

#### 简幻欢

没有这方面的需求呢~

## 配置服务器

#### Windows & Linux

1. 先用`数字键`选择地图，按`Enter`确定
2. 再选择玩家上限，直接按`Enter`则使用默认值`16`
3. 再选择服务器端口，直接按`Enter`则使用默认值`7777`
> [!IMPORTANT]
> NAT机型：直接7777即可，然后根据服务器提供商的教程配置端口转发  
> 限制端口范围：请设置在端口范围内的端口，例如服务器提供商提供12000-12005，那么你只能使用这个区间内的端口  
> 独立IP：同样7777即可  
4. 配置端口转发没特殊需求直接按`Enter`默认`开`
5. 服务器密码没需求按`Enter`默认`不设置`

![PixPin_2025-08-02_15-00-45](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-02_15-00-45.gif)

#### 简幻欢

- 官方镜像：
  关闭服务器，在文件选项卡中的配置项修改并重启服务器
 ![20250802144707](https://raw.githubusercontent.com/ACaiCat/cai-image/main/20250802144707.png)
- 羽学TS6镜像：
  关闭服务器，在文件选项卡中编辑`简幻欢TShock 6自动化部署脚本/server.properties`，做出修改然后保存，最后重启服务器即可


## 配置防火墙

> [!NOTE]
> 以放行`7777`端口为例

### Windows

搜索高级防火墙设置，打开，并且添加出站规则和入站规则放行你所使用的端口

![PixPin_2025-08-02_15-05-18](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-02_15-05-18.gif)

### Linux
#### UFW 
```
sudo ufw allow 7777/tcp
```
#### iptables
```
sudo iptables -A INPUT -p tcp --dport 7777 -j ACCEPT
sudo netfilter-persistent save
```

### 云服务器安全组和防火墙设置

不同服务器厂商安全组和防火墙设置各不相同，但是基本都能在服务器控制台完成操作

## 加入服务器

### NAT
- IP: 服务器公网地址  
- 端口: NAT转发远程端口

### 独立IP & 限制端口

- IP: 服务器地址  
- 端口: 启动服务器时设置的端口


> [!IMPORTANT]
> 常见无法加入服务器的原因:  
> 1. 端口配置错误  
> 2. NAT配置错误  
> 3. 使用NAT的本地端口加入
> 3. 防火墙未放行端口  
> 4. 未放行服务器厂商的安全组和防火墙


## 初始化TShock
加入服务器后，使用`/register <密码>`注册，并用`/login`登录，然后用`/setup <认证码>`初始化服务器 (认证码会显示在服务器控制台上)  
![PixPin_2025-08-02_15-42-56](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-02_15-42-56.gif)

## 获得服主权限
在服务器控制台执行`/user group <你的名字> owner`即可得到服主权限   

![PixPin_2025-08-02_15-47-54](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-02_15-47-54.gif)
