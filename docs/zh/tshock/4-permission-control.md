# 4. 权限控制

## 权限(Permission)
TShock中使用权限来控制玩家的行为，不同的权限拥有不同的作用。

### 格式

权限一般由`插件名.一级节点.二级节点`组成，有的插件功能较为简单可能会使用`插件名.一级节点`或`插件名`作为权限。

> [!NOTE]
> 按照插件规范，权限应该是全小写的，而且应该是全英文的，当然这是插件开发者应该考虑的事情

### 泛权限

如果我们需要为玩家组添加一个一级节点中包含的所有权限，或者此插件的全部权限，我们就可以用到泛权限。使用泛权限，只要在所需权限节点后加上`.*`，例如：`tshock.admin.*`表示TShock中admin节点下所有的权限，`tshock.*`则表示Tshock的所有权限

> [!NOTE]
> `*`权限代表所有插件的所有权限，superadmin组就具有`*`权限，此权限十分危险，请谨慎使用。

### 反权限

使用泛权限可能会引出一个问题，那就是如果需要为玩家组添加一个节点下所有权限又不想包含其中一个权限，此时我们就需要使用反权限。顾名思义，反权限将会排除这个权限，格式为`!权限`，例如：`!tshock.ignore.ssc`将会排除跳过SSC的权限，也就是说具有此权限的玩家，即使拥有`tshock.ignore.*`权限也会受到SSC控制 (即不忽略SSC)。


## 组(Group)

TShock中权限管理以组为单位，一个组中有多个权限，在同一个组的玩家通常具有相同的权限。

### 基本常识

- 未登录及未注册的玩家默认在`guest`组
- 注册并且登录后玩家默认在`default`组，所以修改权限主要以`default`组为主

### 基本命令

| 命令 | 作用 |
|----|----|
| /group list | 列出所有组 |
| /user group <玩家> <组>| 将玩家移动到指定组 |
| /group listperm <组名> | 列出组的所有权限 |
| /group addperm <组> <权限> | 为组添加一个新权限 |
| /group addperm <组> <权限> | 移除组的一个权限 |
| /group parent <组> [父组] | 管理组的父组 |

### 权限继承
如果每个组都要手动分配权限那么会非常糟糕，`admin(管理员)`组和`owner(服主)`组应该都要拥有和`default(默认玩家)`组的权限，权限继承可以很好的解决这个问题。

#### 基本概念
一个组继承另一个组的权限叫**权限继承**，继承权限的组称为子组，被继承权限的组称为父组，子组拥有父组所有的权限。

#### 举个例子

|   组  |      设置的权限       | 父组  |     可用的权限       |
| ----- | -------------------- | ---- | -------------------- |
| guest | tshock.account.login | 无   | tshock.account.login|
| default | tshock.world.*      | guest | tshock.account.login、tshock.world.* |
| vip | tshock.npc.rename      | default | tshock.account.login、tshock.world.*、tshock.npc.rename |
| admin | tshock.admin.*       | default | tshock.account.login、tshock.world.*、tshock.admin.* |
| owner | tshock.su            | admin | tshock.account.login、tshock.world.*、tshock.admin.*、tshock.su |

从例子中可以看到，admin组既有父组default组的权限，也有default的父组guest组的权限，这就是典型的权限继承，

#### 命令
| 命令 | 作用 |
|----|----|
| /group parent <组>| 查看一个组的父组 |
| /group parent <组> <父组> | 修改一个组的父组 |
| /group parent <组> "" | 移除一个组的父组 |

> [!CAUTION]
> 请不要设置循环父组，即让继承链变成环形，这样会导致TShock启动失败

### TShock自带组

| 组             | 父组        | 作用                                                                 |
|----------------|-------------|----------------------------------------------------------------------|
| guest          | 无          | 默认访客组，拥有最基本的聊天、登录权限。                           |
| default        | guest       | 默认玩家组，拥有基础游戏功能权限，如使用传送药水、聊天、编辑图格等。           |
| vip            | default     | VIP玩家组，继承默认组权限，并可能拥有额外特权（如保留位、重命名NPC等）。 |
| insecure-guest | 无          | 不安全访客组， 拥有基本权限，但是作为访客组不安全，不推荐。     |
| newadmin       | vip         | 新管理员组，拥有部分管理权限（如踢人、禁言等），但权限较初级。   |
| admin          | newadmin    | 管理员组，继承新管理员权限，并拥有更多高级权限（如封禁、广播、生成物品等）。 |
| trustedadmin   | admin       | 受信任管理员组，继承管理员权限，并拥有关键操作权限（如重载配置、清除等）。   |
| owner          | trustedadmin| 所有者组，继承受信任管理员权限，并拥有服务器核心控制权。 |
| superadmin     | 无       | 超级管理员组，拥有所有权限。  |

```
基本继承关系：guest → default → vip → newadmin → admin → trustedadmin → owner
```

> [!NOTE]
> superadmin是TShock系统控制的组，无法使用group命令修改，不继承任何组，但是拥有`*`的泛权限，即所有权限

### 权限查询

#### Omni

1. 安装Omni (如果前面已经安装过了可以忽略)
  - [APM](http://api.terraria.ink:11434/plugin/get_plugin_zip?assembly_name=Chireiden.TShock.Omni&tshock_version=5.9.9)
  - [GitHub](https://github.com/sgkoishi/yaaiomni/releases)

2. 添加whynot权限，控制台执行`/group addperm default chireiden.omni.whynot`
3. 执行没有权限的操作 (例如: 召唤BOSS、使用命令等)
4. 使用`/whynot`查看权限检查历史  (红色是玩家缺少的权限，越底部越新)  
   ![](https://github.com/user-attachments/assets/c2670ac1-2183-42a3-84a3-5e70c14f1882)
5. 找到对应的权限，这里看见是`tshock.world.time.set`，即`/time night`的权限

> [!IMPORTANT]
> 请谨慎其他权限的干扰。很多命令等包含多个权限检查，可能会干扰权限判断，例如上图的`tshock.su`。



#### TShock权限： [TShock-Wiki镜像权限篇](../tshock-wiki/(中文)权限说明.html)

#### 插件权限： [TShock-Wiki镜像权限篇](../guide/get-start.html)

#### HelpPlus (仅命令权限)
1. 安装HelpPlus (如果前面已经安装过了可以忽略)
  - [TS5](http://api.terraria.ink:11434/plugin/get_plugin_zip?assembly_name=HelpPlus)
  - [TS6](http://api.terraria.ink:11434/plugin/get_plugin_zip?assembly_name=HelpPlus&tshock_version=5.9.9)

2. 使用命令`/help <命令>`即可查询到对应命令所需的权限
   ![](https://github.com/user-attachments/assets/50076bbd-cd82-4104-ba94-fb1982d12a8d)

> [!IMPORTANT]
> HelpPlus只能查询到命令的基本权限，详细的权限请查看插件文档和TShock文档



