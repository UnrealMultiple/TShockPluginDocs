# TShock插件の仓库

## 前言
- 这是一个致力于收集整合`TShock`插件的仓库。
- 我们将持续收集优质的`TShock`插件，进行及时的更新。并跟进`TShock`的最新版本。
- 如果你也想加入我们，请按照仓库WIKI中的`开发者注意事项`的规定对本仓库`提交PR`。
- 如果你想要参与翻译工作，欢迎访问我们的[Crowdin](https://zh.crowdin.com/project/tshock-chinese-plugin) 链接

## 使用注意事项
- `安装插件前`请查看对应插件的文档： [TShock中文插件库文档](http://docs.terraria.ink/zh/)
- 注意有些插件可能需要`安装依赖`，请查看下方列表安装依赖插件。
- 每个插件都有一个使用说明，在`下方列表`点击链接查看具体说明事项。

> [!IMPORTANT]
> 许多插件依赖于`LazyAPI`,而`LazyAPI`依赖于`linq2db`。使用本仓库插件前，推荐先安装`LazyAPI.dll`和`linq2db.dll`  
> 推荐使用`AutoPluginManager`安装本插件库插件，会自动补齐相应的依赖

## 下载 (推荐使用APM安装插件)

- APM镜像(国内推荐): [Plugins.zip](http://api.terraria.ink:11434/plugin/get_all_plugins)
- Github发布: [Plugins.zip](https://github.com/UnrealMultiple/TShockPlugin/releases/download/V1.0.0.0/Plugins.zip)

#### AutoPluginManager插件 (推荐)  
     /apm l 列出所有插件  
     /apm i <插件名> 一键安装插件  
     /apm u [插件名] 检查并且更新插件  

## 反馈

- [反馈BUG](https://github.com/UnrealMultiple/TShockPlugin/issues/new?template=report_bug.yaml)  

- [新功能建议](https://github.com/UnrealMultiple/TShockPlugin/issues/new?template=feature_request.yaml)

- [空白Issue](https://github.com/UnrealMultiple/TShockPlugin/issues/new)

> [!IMPORTANT]
> 反馈BUG时务必按照要求填写模板，提供详细的详细，必要时请安装`pdb`文件


### 已收集插件

> 点击`链接`可查看`插件文档`


| 名称 | 插件说明 | 依赖 |
| :-: | :-: | :-: |
| [AdditionalPylons](./AdditionalPylons.md) | 放置更多晶塔 | [LazyAPI](./LazyAPI.md) |
| [AIChatPlugin](./AIChatPlugin.md) | AI聊天插件 |  |
| [AnnouncementBoxPlus](./AnnouncementBoxPlus.md) | 广播盒功能强化 | [LazyAPI](./LazyAPI.md) |
| [AutoAirItem](./AutoAirItem.md) | 自动垃圾桶插件 | [LazyAPI](./LazyAPI.md) |
| [AutoBroadcast](./AutoBroadcast.md) | 自动广播 | [LazyAPI](./LazyAPI.md) |
| [AutoClear](./AutoClear.md) | 智能自动扫地 | [LazyAPI](./LazyAPI.md) |
| [AutoFish](./AutoFish.md) | 自动钓鱼重置版 | [LazyAPI](./LazyAPI.md) |
| [AutoPluginManager](./AutoPluginManager.md) | 一键自动更新插件 |  |
| [AutoReset](./AutoReset.md) | 完全自动重置 | [LazyAPI](./LazyAPI.md) |
| [AutoStoreItems](./AutoStoreItems.md) | 自动储存 | [LazyAPI](./LazyAPI.md) |
| [AutoTeam](./AutoTeam.md) | 自动队伍 | [LazyAPI](./LazyAPI.md) |
| [Back](./Back.md) | 死亡回溯 | [LazyAPI](./LazyAPI.md) |
| [BadApplePlayer](./BadApplePlayer.md) | BadApple播放器 |  |
| [BanNpc](./BanNpc.md) | 阻止怪物生成 | [LazyAPI](./LazyAPI.md) |
| [BedSet](./BedSet.md) | 设置并记录重生点 | [LazyAPI](./LazyAPI.md) |
| [BetterWhitelist](./BetterWhitelist.md) | 白名单插件 | [LazyAPI](./LazyAPI.md) |
| [BossLock](./BossLock.md) | 进度锁插件 |  |
| [BridgeBuilder](./BridgeBuilder.md) | 快速铺桥 | [LazyAPI](./LazyAPI.md) |
| [BuildMaster](./BuildMaster.md) | 豆沙小游戏·建筑大师模式 | [MiniGamesAPI](./MiniGamesAPI.md) |
| [CaiBotLite](./CaiBotLite.md) | CaiBotLite 官方机器人适配插件 | linq2db |
| [CaiCustomEmojiCommand](./CaiCustomEmojiCommand.md) | 自定义表情命令 | [LazyAPI](./LazyAPI.md) |
| [CaiPacketDebug](./CaiPacketDebug.md) | Cai数据包调试工具 | [LazyAPI](./LazyAPI.md) TrProtocol |
| [CaiRewardChest](./CaiRewardChest.md) | 将自然生成的箱子变为所有人都可以领一次的奖励箱 | linq2db [LazyAPI](./LazyAPI.md) |
| [CGive](./CGive.md) | 离线命令 |  |
| [Challenger](./Challenger.md) | 挑战者模式 |  |
| [Chameleon](./Chameleon.md) | 进服前登录 | [LazyAPI](./LazyAPI.md) |
| [ChattyBridge](./ChattyBridge.md) | 用于跨服聊天 | [LazyAPI](./LazyAPI.md) |
| [ChestRestore](./ChestRestore.md) | 资源服无限物品 |  |
| [Chireiden.TShock.Omni](https://github.com/sgkoishi/yaaiomni/blob/master/README.md) | 恋恋工具箱核心,用于修复各种TShock问题 (建议安装) |  |
| [Chireiden.TShock.Omni.Misc](https://github.com/sgkoishi/yaaiomni/blob/master/README.md) | 恋恋工具箱扩展 |  |
| [CNPCShop](./CNPCShop.md) | 自定义NPC商店 |  |
| [ConsoleSql](./ConsoleSql.md) | 允许你在控制台执行SQL语句 |  |
| [ConvertWorld](./ConvertWorld.md) | 击败怪物转换世界物品 |  |
| [CriticalHit](./CriticalHit.md) | 击打提示 |  |
| [Crossplay](https://github.com/UnrealMultiple/Crossplay/blob/main/README.md) | 跨版本游玩 |  |
| [DamageRuleLoot](./DamageRuleLoot.md) | 伤害规则掉落 |  |
| [DamageStatistic](./DamageStatistic.md) | 在每次 Boss 战后显示每个玩家造成的伤害 |  |
| [DataSync](./DataSync.md) | 进度同步 |  |
| [DeathDrop](./DeathDrop.md) | 怪物死亡随机和自定义掉落物品 |  |
| [DisableMonsLoot](./DisableMonsLoot.md) | 禁怪物掉落 |  |
| [DonotFuck](./DonotFuck.md) | 禁止脏话 | [LazyAPI](./LazyAPI.md) |
| [DTEntryBlock](./DTEntryBlock.md) | 阻止进入地牢或神庙 |  |
| [Dummy](./Dummy.md) | 服务器假人 | [LazyAPI](./LazyAPI.md) TrProtocol |
| [DumpTerrariaID](./DumpTerrariaID.md) | 输出 ID |  |
| [DwTP](./DwTP.md) | 定位传送 |  |
| [Economics.Core](./Economics.Core.md) | 经济插件前置 |  |
| [Economics.Deal](./Economics.Deal.md) | 交易插件 | [Economics.Core](./Economics.Core.md) |
| [Economics.NPC](./Economics.NPC.md) | 自定义怪物奖励 | [Economics.Core](./Economics.Core.md) |
| [Economics.Projectile](./Economics.Projectile.md) | 自定义弹幕 | [Economics.Core](./Economics.Core.md) [Economics.RPG](./Economics.RPG.md) |
| [Economics.Regain](./Economics.Regain.md) | 物品回收 | [Economics.Core](./Economics.Core.md) |
| [Economics.RPG](./Economics.RPG.md) | RPG | [Economics.Core](./Economics.Core.md) |
| [Economics.Shop](./Economics.Shop.md) | 商店插件 | [Economics.Core](./Economics.Core.md) [Economics.RPG](./Economics.RPG.md) |
| [Economics.Skill](./Economics.Skill.md) | 技能插件 | [Economics.Core](./Economics.Core.md) [Economics.RPG](./Economics.RPG.md) |
| [Economics.Task](./Economics.Task.md) | 任务插件 | [Economics.Core](./Economics.Core.md) [Economics.RPG](./Economics.RPG.md) |
| [Economics.WeaponPlus](./Economics.WeaponPlus.md) | 强化武器 | [Economics.Core](./Economics.Core.md) |
| [EndureBoost](./EndureBoost.md) | 拥有指定数量物品给指定buff |  |
| [EssentialsPlus](./EssentialsPlus.md) | 更多管理指令 | [LazyAPI](./LazyAPI.md) |
| [Ezperm](./Ezperm.md) | 批量改权限 |  |
| [FishShop](FishShop.md) | 鱼店 |  |
| [GenerateMap](./GenerateMap.md) | 生成地图 |  |
| [GhostView](./GhostView.md) | 死亡后能在鬼魂状态下观战，重连不刷新复活cd |  |
| [GolfRewards](./GolfRewards.md) | 高尔夫奖励 |  |
| [GoodNight](./GoodNight.md) | 宵禁 |  |
| [HardPlayerDrop](./HardPlayerDrop.md) | 硬核死亡掉生命水晶 |  |
| [HelpPlus](./HelpPlus.md) | 修复和增强 Help 命令 |  |
| [History](./History.md) | 历史图格记录 |  |
| [HouseRegion](./HouseRegion.md) | 圈地插件 | [LazyAPI](./LazyAPI.md) |
| [Invincibility](./Invincibility.md) | 限时无敌 |  |
| [ItemBox](./ItemBox.md) | 离线背包系统，物品盒子 |  |
| [ItemDecoration](./ItemDecoration.md) | 手持物品浮动消息显示 | [LazyAPI](./LazyAPI.md) |
| [ItemPreserver](./ItemPreserver.md) | 指定物品不消耗 |  |
| [JourneyUnlock](./JourneyUnlock.md) | 解锁旅途物品 |  |
| [Lagrange.XocMat.Adapter](./Lagrange.XocMat.Adapter.md) | Lagrange.XocMat的适配插件 | SixLabors.ImageSharp |
| [LazyAPI](./LazyAPI.md) | 插件基础库 | linq2db |
| [LifemaxExtra](./LifemaxExtra.md) | 吃更多生命果/水晶 | [LazyAPI](./LazyAPI.md) |
| [ListPlugins](./ListPlugins.md) | 查已装插件 |  |
| [MapTp](./MapTp.md) | 双击大地图传送 |  |
| [MazeGenerator](./MazeGenerator.md) | 迷宫生成器插件 | [LazyAPI](./LazyAPI.md) |
| [MiniGamesAPI](./MiniGamesAPI.md) | 豆沙小游戏 API |  |
| [ModifyWeapons](./ModifyWeapons.md) | 修改武器 | [LazyAPI](./LazyAPI.md) |
| [MonsterRegen](./MonsterRegen.md) | 怪物进度回血 |  |
| [MusicPlayer](./MusicPlayer.md) | 简易音乐播放器 |  |
| [Noagent](./Noagent.md) | 禁止代理 ip 进入 |  |
| [NormalDropsBags](./NormalDropsBags.md) | 普通难度宝藏袋 |  |
| [NoteWall](./NoteWall.md) | 留言墙 | [LazyAPI](./LazyAPI.md) linq2db |
| [OnlineGiftPackage](./OnlineGiftPackage.md) | 在线礼包 |  |
| [PacketsStop](./PacketsStop.md) | 数据包拦截 |  |
| [PermaBuff](./PermaBuff.md) | 永久 Buff |  |
| [PerPlayerLoot](./PerPlayerLoot.md) | 玩家战利品单独箱子 |  |
| [PersonalPermission](./PersonalPermission.md) | 为玩家单独设置权限 |  |
| [Platform](./Platform.md) | 判断玩家设备 |  |
| [PlayerManager](PlayerManager.md) | Hufang的玩家管理器 |  |
| [PlayerRandomSwapper](./PlayerRandomSwapper.md) | 玩家位置随机交换 | [LazyAPI](./LazyAPI.md) |
| [PlayerSpeed](./PlayerSpeed.md) | 玩家速度 | [LazyAPI](./LazyAPI.md) |
| [ProgressBag](./ProgressBag.md) | 进度礼包 | [LazyAPI](./LazyAPI.md) |
| [ProgressControls](./ProgressControls.md) | 计划书（自动化控制服务器） |  |
| [ProgressRestrict](./ProgressRestrict.md) | 超进度检测 | [DataSync](./DataSync.md) |
| [ProxyProtocolSocket](./ProxyProtocolSocket.md) | 接受 proxy protocol 协议 |  |
| [PvPer](./PvPer.md) | 决斗系统 |  |
| [QRCoder](./QRCoder.md) | 二维码生成器 |  |
| [RainbowChat](./RainbowChat.md) | 每次说话颜色不一样 |  |
| [RandomBroadcast](./RandomBroadcast.md) | 随机广播 |  |
| [RandRespawn](./RandRespawn.md) | 随机出生点 |  |
| [RealTime](./RealTime.md) | 使服务器内时间同步现实时间 |  |
| [RebirthCoin](./RebirthCoin.md) | 复活币 |  |
| [RecipesBrowser](./RecipesBrowser.md) | 合成表 |  |
| [ReFishTask](./ReFishTask.md) | 自动刷新渔夫任务 |  |
| [RegionView](./RegionView.md) | 显示区域边界 |  |
| [Respawn](./Respawn.md) | 原地复活 |  |
| [RestInventory](./RestInventory.md) | 提供 REST 查询背包接口 |  |
| [ReverseWorld](./ReverseWorld.md) | 世界反转和放置地雷 |  |
| [RolesModifying](./RolesModifying.md) | 修改玩家背包 |  |
| [Sandstorm](./Sandstorm.md) | 切换沙尘暴 |  |
| [ServerTools](./ServerTools.md) | 服务器管理工具 | [LazyAPI](./LazyAPI.md) linq2db |
| [SessionSentinel](./SessionSentinel.md) | 处理长时间不发送数据包的玩家 |  |
| [ShortCommand](./ShortCommand.md) | 简短指令 |  |
| [ShowArmors](./ShowArmors.md) | 展示装备栏 |  |
| [SignInSign](./SignInSign.md) | 告示牌登录插件 |  |
| [SmartRegions](./SmartRegions.md) | 智能区域 |  |
| [SpawnInfra](./SpawnInfra.md) | 生成基础建设 |  |
| [SpclPerm](./SpclPerm.md) | 服主特权 |  |
| [StatusTextManager](./StatusTextManager.md) | PC端模板文本管理插件 |  |
| [SurfaceBlock](./SurfaceBlock.md) | 禁地表弹幕插件 | [LazyAPI](./LazyAPI.md) |
| [SurvivalCrisis](./SurvivalCrisis.md) | 类among us小游戏 |  |
| [SwitchCommands](./SwitchCommands.md) | 区域执行指令 |  |
| [TeleportRequest](./TeleportRequest.md) | 传送请求 |  |
| [TimeRate](./TimeRate.md) | 时间加速插件 |  |
| [TimerKeeper](./TimerKeeper.md) | 保存计时器状态 |  |
| [TownNPCHomes](./TownNPCHomes.md) | NPC 快速回家 |  |
| [TransferPatch](./TransferPatch.md) | 翻译补丁 |  |
| [UnseenInventory](./UnseenInventory.md) | 允许服务器端生成“无法获取”的物品 |  |
| [VBY.Common](https://github.com/UnrealMultiple/MyPlugin/blob/master/docs/VBY.Common.md) | VBY插件的基础库 |  |
| [VBY.GameContentModify](https://github.com/UnrealMultiple/MyPlugin/blob/master/docs/VBY.GameContentModify.md) | 对一些游戏内容的可自定义修改 (超强) |  |
| [VBY.OtherCommand](https://github.com/UnrealMultiple/MyPlugin/blob/master/docs/VBY.OtherCommand.md) | 提供一些其他的辅助命令 |  |
| [VBY.PluginLoader](https://github.com/UnrealMultiple/MyPlugin/blob/master/docs/VBY.PluginLoader.md) | 一个允许热重载的插件加载器 |  |
| [VBY.PluginLoaderAutoReload](https://github.com/UnrealMultiple/MyPlugin/blob/master/docs/VBY.PluginLoaderAutoReload.md) | VBY.PluginLoader的扩展, 自动热重载插件 |  |
| [VeinMiner](./VeinMiner.md) | 连锁挖矿 |  |
| [VotePlus](./VotePlus.md) | 多功能投票 |  |
| [WeaponPlus](./WeaponPlus.md) | 武器强化钱币版 |  |
| [WikiLangPackLoader](./WikiLangPackLoader.md) | 为服务器加载 Wiki 语言包 |  |
| [WorldModify](WorldModify.md) | 世界编辑器,可以修改大部分的世界参数 |  |


## 友情链接

- [TShock 插件开发文档](https://github.com/ACaiCat/TShockPluginDocument)
- [Tshock 相关内容大全导航](https://github.com/UnrealMultiple/Tshock-nav)

