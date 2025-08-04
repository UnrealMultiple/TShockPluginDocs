# 3. 配置TShock
当你完成章节1和章节2后，恭喜你已经可以加入自己开的TShock服务器了，但是这还远远不够，默认配置下的TShock完全不能满足服主们的要求。


## JSON格式

JSON格式是TShock中最常见的配置文件格式，作用与MC中的yaml相当，但是比yaml更加清晰
```json
{
  "自动踢出Poooo": true,
  "坠落之星数量": 300,
  "角度": 3.14,
  "战败宣言": "哎呀，我没有史莱姆鞍啊!还是失误了...",
  "死亡掉落钱币": {
    "铂金": 591,
    "金": 60,
    "银": 15,
    "铜": 3,
  },
  "需要的物品": ["史莱姆鞍", "星星炮"]
}
```

### 键值对
顾名思义，键值对是键和值组成一对，即：
```json5
"键" : 值
```
有几点值得注意：
1. 键必须是英文双引号包括`"键"`(√)，中文双引号则会产生错误`“键”`(X)
2. 键具有唯一性，在同一个对象中(同一个`{}`)不可以出现一样的键
3. 值可以是对象和数组
4. 多个键值对用英文逗号`,`隔开

### bool值 (布尔值)
bool值只有`true`和`false`两个值
- true：一般表示启用或者指键的内容为真
- true：一般表示关闭或者指键的内容为假
```json5
"自动踢出Poooo": true // 启用自动踢出Poooo
或
"自动踢出Poooo": false // 关闭自动踢出Poooo
```
### 整数
整数可以是正整数或者负整数，但是具体范围请参考具体插件的配置教程
```json
"坠落之星数量": 300
```

### 小数
和整数类似但是有小数点
```json
"角度": 3.14
```
> [!CAUTION]
> 3.0 ≠ 3  
> 前者是小数，后者是整数，具体用哪种参考插件配置

### 字符串
字符串和键一样，需要使用英文双引号包裹`"字符串"`
```json
"战败宣言": "哎呀，我没有史莱姆鞍啊!还是失误了..."
```

### 数组
数组在中括号`[...]`中书写，表示一组数据，每项数据用英文逗号`,`隔开
```json
"需要的物品": ["史莱姆鞍", "星星炮"],
"10以内的偶数": [0, 2, 4, 6, 8, 10],
"初始背包": [
      {
        "netID": -15,
        "prefix": 0,
        "stack": 1
      },
      {
        "netID": -13,
        "prefix": 0,
        "stack": 1
      },
      {
        "netID": -16,
        "prefix": 0,
        "stack": 1
      }
    ]
```

### 对象
对象在大括号`{...}`中书写，包含多个键值对。在TShock中一般整个配置文件就是一个对象
```json5
{ //配置文件对象，包含多个键值对
  "自动踢出Poooo": true,
  "坠落之星数量": 300,
  "角度": 3.14,
  "战败宣言": "哎呀，我没有史莱姆鞍啊!还是失误了...",
  "死亡掉落钱币": { // 钱币对象
    "铂金": 591,
    "金": 60,
    "银": 15,
    "铜": 3,
  },
  "需要的物品": ["史莱姆鞍", "星星炮"]
}
```

## 安装VS Code (可选)

### Windows

1. 直接在服务器上下载VS Code，然后安装一路下一步
  https://code.visualstudio.com
2. 安装中文语言包
   ![PixPin_2025-08-04_10-08-00](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-04_10-08-00.gif)
3. 尝试打开配置文件进行编辑 (下面是演示，请不要真的修改配置)
  ![PixPin_2025-08-04_11-15-29](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-04_11-15-29.gif)
### Linux

1. 直接将VS Code安装在自己的电脑即可，步骤同Windows 1、2 
2. 在Tabby的SFTP中找到配置文件，并且`右键`选择`本地编辑`，从VS Code中打开 (下面是演示，请不要真的修改配置)
   ![PixPin_2025-08-04_11-18-52](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-04_11-18-52.gif)
> [!IMPORTANT]
> 编辑完成后需要按`Ctrl+S`或者选择`文件-保存`进行保存，才会自动上传到服务器


### 查看错误
点击下栏的错误与警告即可查看当前JSON文件是否有语法错误，双击对应的错误即可跳转到相关行 (不一定准确)
![Pin_2025-08-04_11-22-44](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-04_11-22-44.gif)

> [!IMPORTANT]
> 只有错误数归零配置文件才能正确加载，否则会直接报错  
> ![20250804112758](https://raw.githubusercontent.com/ACaiCat/cai-image/main/20250804112758.png)  
> 从报错中我们可以看到`JSON`的字样，还能找到对应的报错行号`line 6`

## 关于配置文件

- TShock及TShock插件的配置文件基本上都是JSON
- 键一般是英文的，请查阅相关参考文档。即使键是中文的，也建议参考相关文档
- 一般来说使用命令`/reload`即可重启服务器，但是部分配置需要重启服务器
- 通常，删除配置文件并重启即可将配置文件恢复到默认状态
- 有的插件还会有隐藏选项，例如：`yaaiomni`，需要你手动加上隐藏的键值对才能进行配置
- 请根据相关文档配置，不要无中生有

## 配置SSC
`SSC`的全称是`Server Side Characters`(服务端角色)，也就是平时所说的**强制开荒**，启用SSC功能服务器可以最大程度操控玩家，且玩家的人物数据(背包，猪猪储钱罐，血量，永久增益等)将会交给服务器储存管理，也不会把服务器的数据覆盖到本地人物上。  


### 配置文件

SSC配置文件位于`tshock/sscconfig.json`，使用VS Code打开它
```json5
{
  "Settings": {
    "Enabled": false, // 启用SSC
    "ServerSideCharacterSave": 5, // 每隔几分钟保存一次角色数据 (不影响退出保存)
    "LogonDiscardThreshold": 250, // 加入服务器后一段时间阻止玩家丢弃物品以防夹带 (单位: 毫秒)
    "StartingHealth": 100, // 初始生命值
    "StartingMana": 20, // 初始魔力值
    "StartingInventory": [ // 初始背包物品 (数组，可以自己添加新物品)
      {
        "netID": -15, // 物品ID
        "prefix": 0, // 物品修饰语ID
        "stack": 1 // 物品数量
      },
      {
        "netID": -13,
        "prefix": 0,
        "stack": 1
      },
      {
        "netID": -16,
        "prefix": 0,
        "stack": 1
      }
    ],
    "WarnPlayersAboutBypassPermission": true // 当玩家有权限绕过SSC时发出警告
  }
}
```

### 基本配置

#### `Enabled`
如果你要启用SSC，或者说你想开一个强制开荒服，就将选项设为`true`。如果你想让服务器玩家正常携带自己角色物品，打造一个像茑萝PVP的服务器，就将选项设为`false`

> [!CAUTION]
> 关闭SSC会导致许多插件失去作用


#### `StartingHealth`和`StartingMana`
分别是初始生命值和初始魔力值，自行按需设置

#### `StartingInventory`
玩家初始物品，默认情况下就是三件套，是一个物品对象数组  
物品对象大概长这样:  
```
{
  "netID": -16, // 物品ID
  "prefix": 0,  // 物品堆叠
  "stack": 1    // 物品数量
}
```
物品数组就是用英文逗号`,`把每个隔开写进`[]`中
```
[ // 数组起始位置
    {
      "netID": -15, 
      "prefix": 0,
      "stack": 1
    }, // 逗号隔开
    {
      "netID": -13,
      "prefix": 0,
      "stack": 1
    }, // 逗号隔开
    {
      "netID": -16,
      "prefix": 0,
      "stack": 1
    }
] // 数组终止位置
```
> [!NOTE]
> 物品ID和修饰语ID可以使用wiki、CaiBotLite、帕秋莉、ID查询器等工具查询  
> CaiBotLite、帕秋莉、云黑BOT请带回自己群里领养使用，请不要在TShock群使用

#### 其他配置
修改配置有两个原则：
- 看不懂的不要动
- 用不到的不要动

如有需要且理解含义，按需修改即可

> [!IMPORTANT]
> 配置完SSC需要重启服务器才会生效哦~


## 配置主配置

TShock的主配置文件可以配置基本配置、反作弊阈值、REST API等等

### 配置文件

TShock主配置文件位于`tshock/config.json`，使用VS Code打开它

```json5
/*
 * By Cai & 熙恩 & 以前的Config中文注解者
 * 文配置可以直接被TShock加载，且为推荐设置 (但是你还是得自己改点)
 * 如果出现注释报错，请以JSON with Comments模式打开此文件
 * 本文件允许以任何形式署名转载，必须保留署名，免费提供，禁止售卖
 * v2525.8.4 (TShock 5.9.9)
 */
{
  "Settings": {
    "ServerPassword": "", // 服务器密码
    "ServerPort": 7777, // 服务器端口
    "MaxSlots": 233, // 最大玩家数
    "ReservedSlots": 20, // 预留玩家位 (需要tshock.reservedslot权限)
    "ServerName": "", // 服务器名称
    "UseServerName": false, // 启用服务器名称
    "LogPath": "tshock/logs", // 日志路径
    "DebugLogs": false, // 启用Debug日志
    "DisableLoginBeforeJoin": false, // 关闭进服前登录
    "IgnoreChestStacksOnLoad": false, // 加载地图时忽略箱子物品最大堆叠检验
    "WorldTileProvider": "constileation", // 地图图格提供器 (default默认，constileation节省内存(推荐)，heaptile屎)
    "AutoSave": true, // 自动保存
    "AnnounceSave": false, // 保存时发送广播
    "ShowBackupAutosaveMessages": true, // 自动备份时发送广播
    "BackupInterval": 30, // 自动备份间隔 (单位：分钟)
    "BackupKeepFor": 10080, // 每个备份保留时间 (到期自动删除) (单位：分钟)
    "SaveWorldOnCrash": true, // 服务器崩溃时保存地图
    "SaveWorldOnLastPlayerExit": true, // 最后一个玩家离开时保存地图
    "InvasionMultiplier": 1, //  /worldevent invasion入侵规模系数 入侵规模 = 100 + 入侵规模系数 X 在线玩家数
    "DefaultMaximumSpawns": 5, // 默认单个玩家附近允许存在的最大活跃生物数量上限
    "DefaultSpawnRate": 600, // 默认生物生成的时间间隔(单位：帧，60帧=1秒)，值越小生成越快
    "InfiniteInvasion": false, // /worldevent invasion无限入侵
    "PvPMode": "normal", // PVP模式：normal(正常), always(强制PVP), pvpwithnoteam(强制无队伍PVP), disabled(禁用PVP)
    "SpawnProtection": false, // 出生点保护
    "SpawnProtectionRadius": 10, // 出生点保护半径 (单位：图格)
    "RangeChecks": true, // 范围检查
    "HardcoreOnly": false, // 仅允许硬核角色加入
    "MediumcoreOnly": false, // 仅允许中核角色加入
    "SoftcoreOnly": false, // 仅允许软核角色加入
    "DisableBuild": false, // 禁止建筑
    "DisableHardmode": false, // 禁止进入困难模式
    "DisableDungeonGuardian": false, // 禁止召唤骷髅王，已弃用
    "DisableClownBombs": false, // 关闭小丑炸弹
    "DisableSnowBalls": false, // 关闭雪球
    "DisableTombstones": false, // 关闭墓碑掉落
    "DisablePrimeBombs": false, // 关闭机械骷髅王炸弹
    "ForceTime": "normal", // 强制固定时间：normal(正常), day(永昼), night(永夜)
    "DisableInvisPvP": false, // 阻止玩家PVP时使用隐身Buff
    "MaxRangeForDisabled": 10, // 玩家被限制行动时可移动的最大距离
    "RegionProtectChests": false, // 保护区域内的箱子
    "RegionProtectGemLocks": true, // 保护区域内的宝石锁
    "IgnoreProjUpdate": false, // 忽略弹幕更新的检测，无效
    "IgnoreProjKill": false, // 忽略弹幕Kill检测
    "AllowCutTilesAndBreakables": false, // 允许玩家在无权建筑的地方打破易碎品 (eg. 罐子, 草)，失效
    "AllowIce": false, // 允许玩家在无权建筑的地方放置冰
    "AllowCrimsonCreep": true, // 允许猩红蔓延
    "AllowCorruptionCreep": true, // 允许腐化蔓延
    "AllowHallowCreep": true, // 允许神圣蔓延
    "StatueSpawn200": 3, // 200像素(12.5格)内最大雕像怪数量
    "StatueSpawn600": 6, // 600像素(37.5格)内最大雕像怪数量
    "StatueSpawnWorld": 10, // 世界中最大雕像怪数量
    "PreventBannedItemSpawn": false, // 阻止玩家被给予被封禁的物品
    "PreventDeadModification": true, // 阻止玩家在死亡状态下与游戏世界进行交互
    "PreventInvalidPlaceStyle": true, // 阻止玩家放置无效Style的图格
    "ForceXmas": false, // 强制圣诞节事件 (不是霜月!!)
    "ForceHalloween": false, // 强制万圣节事件 (不是南瓜月!!)
    "AllowAllowedGroupsToSpawnBannedItems": false, //"PreventBannedItemSpawn"为true时，允许给予“禁止物品允许列表中的组”被封禁的物品
    "RespawnSeconds": 0, // 非BOSS时玩家复活时间 (0为不设置)
    "RespawnBossSeconds": 0, // BOSS时玩家复活时间 (0为不设置)
    "AnonymousBossInvasions": true, // 广播Boss和入侵的召唤者
    "MaxHP": 600, // 允许玩家最大生命值 (tshock.ignore.hp跳过检查) (超过会被限制行动)
    "MaxMP": 400, // 允许玩家最大魔力值 (tshock.ignore.mp跳过检查) (超过会被限制行动)
    "BombExplosionRadius": 5, // 爆炸物能影响液体的最大距离 (液体反作弊) (单位：图格)
    "GiveItemsDirectly": false, // 直接将物品放入玩家背包 (需要启用SSC，否则无效) true则直接修改玩家背包放入物品(无捡物品声音)，false则以掉落物的显示给予玩家物品(捡物品声音)
    "DefaultRegistrationGroupName": "default", // 新注册用户默认的组名
    "DefaultGuestGroupName": "guest", // 未登录玩家默认的组名
    "RememberLeavePos": false, // 加入服务器后回到上次离开时的位置 (玩家名和IP一样才会执行)
    "MaximumLoginAttempts": 3, // 最大失败登录尝试次数 (超过后踢出玩家)
    "KickOnMediumcoreDeath": false, // 踢出死亡的中核玩家
    "MediumcoreKickReason": "因为死亡而被踢出", // 踢出死亡的中核玩家的理由
    "BanOnMediumcoreDeath": false, // 封禁死亡的中核玩家
    "MediumcoreBanReason": "因为死亡而被封禁", // 封禁死亡的中核玩家的理由
    "DisableDefaultIPBan": false, // 禁用Ban时默认封禁IP
    "EnableWhitelist": false, // 启用IP白名单
    "WhitelistKickReason": "你不在IP白名单中", // 踢出非白名单玩家理由
    "ServerFullReason": "服务器已满", // 服务器满人踢出理由
    "ServerFullNoReservedReason": "服务器已满（包括预留空间）", // 服务器满人且无预留踢出理由
    "KickOnHardcoreDeath": false, // 踢出死亡的硬核玩家
    "HardcoreKickReason": "因为死亡而被踢出", // 踢出死亡的硬核玩家的理由
    "BanOnHardcoreDeath": false, // 封禁死亡的硬核玩家
    "HardcoreBanReason": "因为死亡而被封禁", // 封禁死亡的硬核玩家的理由
    "KickProxyUsers": true, // 踢出使用代理的玩家 (检测能力取决于GeoIP.dat)
    "RequireLogin": true, // 强制要求玩家登录
    "AllowLoginAnyUsername": false, // 允许登录非玩家名账户 (/login <用户名> <密码>)
    "AllowRegisterAnyUsername": false, // 允许注册非玩家名账户 (/register <用户名> <密码>)
    "MinimumPasswordLength": 4, // 注册最短密码长度
    "BCryptWorkFactor": 7, // 用户密码加密BCrypt工作因子，值越高安全性越强但验证越慢。如果增加，所有密码将在验证时升级到新的工作因子 (范围：5-31)
    "DisableUUIDLogin": false, // 禁用UUID登录 (即关闭同设备免密登录)
    "KickEmptyUUID": true, // 踢出空UUID玩家
    "TilePaintThreshold": 200, // 油漆图格速度阈值 (tshock.ignore.paint跳过检查) (单位：图格/秒)
    "KickOnTilePaintThresholdBroken": false, // 踢出超过油漆图格速度阈值的玩家
    "MaxDamage": 20000, // 玩家单次造成伤害阈值 (tshock.ignore.damage跳过检查)
    "MaxProjDamage": 20000, // 玩家弹幕伤害阈值 (tshock.ignore.damage跳过检查)
    "KickOnDamageThresholdBroken": false, // 踢出超过玩家单次造成伤害阈值的玩家
    "TileKillThreshold": 200, // 玩家破坏图格阈值 (tshock.ignore.removetile跳过检查) (单位：图格/秒)
    "KickOnTileKillThresholdBroken": false, // 踢出超过玩家破坏图格阈值的玩家
    "TilePlaceThreshold": 200, // 玩家替换图格阈值 (tshock.ignore.placetile跳过检查) (单位：图格/秒) 
    "KickOnTilePlaceThresholdBroken": false, // 踢出超过玩家替换图格阈值的玩家
    "TileLiquidThreshold": 200, // 玩家放置流体阈值 (tshock.ignore.liquid跳过检查) (单位：图格/秒)
    "KickOnTileLiquidThresholdBroken": false, // 踢出超过玩家放置流体阈值的玩家
    "ProjIgnoreShrapnel": true, // 在玩家生成弹幕阈值计数中忽略水晶子弹的碎片
    "ProjectileThreshold": 200, // 玩家生成弹幕阈值 (tshock.ignore.projectile跳过检查)
    "KickOnProjectileThresholdBroken": false, // 踢出超过玩家生成弹幕阈值的玩家
    "HealOtherThreshold": 200, // 治疗其他玩家阈值 (tshock.ignore.damage跳过检查)
    "KickOnHealOtherThresholdBroken": false, // 踢出超过治疗其他玩家阈值的玩家
    "SuppressPermissionFailureNotices": false, // 关闭无建筑权限警告
    "DisableModifiedZenith": false, // 阻止非法天顶剑弹幕
    "DisableCustomDeathMessages": true, // 阻止自定义死亡讯息
    "CommandSpecifier": "/", // 命令起始符，长度大于1无法正常识别命令
    "CommandSilentSpecifier": ".", // 静默命令起始符，长度大于1无法正常识别静默命令
    "DisableSpewLogs": true, // 禁用向有日志权限(tshock.admin.viewlogs)的玩家发送日志
    "DisableSecondUpdateLogs": false, // 禁用玩家被限制行动时记录日志
    "SuperAdminChatRGB": [ // 超级管理员聊天颜色 (RGB)
      255, // R
      255, // G
      255  // B
    ],
    "SuperAdminChatPrefix": "[超级管理员]", // 超级管理员聊天前缀
    "SuperAdminChatSuffix": "", // 超级管理员聊天后缀
    "EnableGeoIP": true, // 启用GeoIP，玩家加入服务器显示玩家国家
    "DisplayIPToAdmins": true, // 玩家加入服务器时向管理员显示玩家IP
    "ChatFormat": "{1}{2}{3}: {4}", // 聊天格式 ({0}: 组名，{1}: 组前缀，{2}: 玩家名，{3}: 组后缀，{4}: 聊天消息)
    "ChatAboveHeadsFormat": "{2}", // 头顶聊天格式，同上
    "EnableChatAboveHeads": true, // 启用头顶聊天
    "BroadcastRGB": [ // 广播颜色
      127, // R
      255, // G
      212  // B
    ],
    "StorageType": "sqlite", // 数据库类型 mysql|sqlite|postgres
    "SqliteDBPath": "tshock.sqlite", // SQLite数据路径
    "MySqlHost": "localhost:3306", // MySQL数据库地址
    "MySqlDbName": "", // MySQL数据库名称
    "MySqlUsername": "", // MySQL用户名
    "MySqlPassword": "", // MySQL用户密码
    "PostgresHost": "", // Postgres数据库地址
    "PostgresDbName": "", // Postgres数据库名称
    "PostgresUsername": "", // Postgres用户名
    "PostgresPassword": "", // Postgres数据库名称
    "UseSqlLogs": false, // 使用数据库进行日志 (不推荐)
    "RevertToTextLogsOnSqlFailures": 10, // 数据库日志失败回文本日志阈值 (超过就会自动退回文本日志)
    "RestApiEnabled": false, // 启用REST API
    "RestApiPort": 7878, // REST API侦听端口
    "LogRest": false, // 记录REST API日志
    "EnableTokenEndpointAuthentication": false, // 启用公共REST API端点令牌认证 (/v2/server/status, /v3/server/motd, /v3/server/rules)
    "RESTMaximumRequestsPerInterval": 5, // 每个令牌在每个时间间隔内允许的最大REST API请求次数
    "RESTRequestBucketDecreaseIntervalMinutes": 1, // 每个令牌请求计数器的重置时间间隔 (单位：分钟)
    "ApplicationRestTokens": {}
    /*
    示例：
    "ApplicationRestTokens": {
      "...(一个又长又安全的令牌)": {
        "Username": "Cai",
        "UserGroupName": "superadmin"
      },
      "...(另一个又长又安全的令牌)": {
        "Username": "poooo",
        "UserGroupName": "guest"
      }
    }
    */
  }
}
```

> [!NOTE]
> 以上是正常开荒服的推荐配置，但是还是需要按需修改的



## 添加推荐插件

1. 下载插件 (按照自己的TShock版本)

- APM
  - [TS5](http://api.terraria.ink:11434/plugin/get_plugin_zip?assembly_name=AutoPluginManager)
  - [TS6](http://api.terraria.ink:11434/plugin/get_plugin_zip?assembly_name=AutoPluginManager&tshock_version=5.9.9)

- Omni
  - [APM](http://api.terraria.ink:11434/plugin/get_plugin_zip?assembly_name=Chireiden.TShock.Omni&tshock_version=5.9.9)
  - [GitHub](https://github.com/sgkoishi/yaaiomni/releases)

- HelpPlus
  - [TS5](http://api.terraria.ink:11434/plugin/get_plugin_zip?assembly_name=HelpPlus)
  - [TS6](http://api.terraria.ink:11434/plugin/get_plugin_zip?assembly_name=HelpPlus&tshock_version=5.9.9)

- Ezperm
  - [TS5](http://api.terraria.ink:11434/plugin/get_plugin_zip?assembly_name=Ezperm)
  - [TS6](http://api.terraria.ink:11434/plugin/get_plugin_zip?assembly_name=Ezperm&tshock_version=5.9.9)
  
- ForceChinese (面板服无中文装)
  - TShock群文件

1. 解压插件包，并且将`.dll`和`.pdb`文件放入`ServerPlugins`文件夹
  ![PixPin_2025-08-04_21-54-47](https://raw.githubusercontent.com/ACaiCat/cai-image/main/PixPin_2025-08-04_21-54-47.gif)

1. 重启服务器

## 添加原版权限

添加Ezperm插件后我们可以使用`/inperms`，即可添加原版默认权限  

## 结束
至此，你的原版TShock服务器已经可以正式开张，如果还需要插件等进阶内容请阅读接下来的章节

