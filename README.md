# 📄UnrealMultiple文档仓库
## 关于
这个仓库用来存放、编译、部署[@UnrealMultiple](https://github.com/UnrealMultiple)仓库的文档
## 项目结构
```
💾 仓库
├── 📁 .github/  
│   └── 📁 workflows/           # GitHub工作流文件  
│  
├── 📁 TShockPlugin/            # TShock插件主仓库子模块 (用来同步插件仓库文档)  
│  
├── 📁 TShockPluginDevelopDocs/ # Cai的插件教程仓库子模块 (用来同步插件教程)  
│  
├── 📁 docs/zh/                 # 文档目录  
│   ├── 📁 guide/               # 插件文档  
│   ├── 📁 plugin-dev/          # Cai插件开发文档  
│   └── 📁 other/               # 其他文档  
│  
└── 📁 scripts/                 # 脚本目录,用来放一些构建文档的脚本
```
> [!NOTE]
> 只允许添加、修改`docs/zh/other/`中的文档, `guide`、`plugin-dev`中的文档为自动同步  
> 如果你没有写入权限,则需要Fork并使用PullRequest  
> 如果你是[@UnrealMultiple](https://github.com/UnrealMultiple)的成员,可以找管理员(少司命、Cai、熙恩等)获取这个仓库的写入权限

## 添加文档


1. 在网页端打开: https://github.com/UnrealMultiple/TShockPluginDocs/new/master/docs/zh/other    
   ![image](https://github.com/user-attachments/assets/9f6086d1-acaa-4318-9550-256e2b0233db)
2. 命名文档,名字不带中文,可以用大小写或连字符分隔单词,但是请不要两个混用,结尾必须是`.md`  
   ![image](https://github.com/user-attachments/assets/2d14c60a-36b0-4e40-ae09-ecb0233bc1bb)
3. 编辑文档,首行必须要有一级标题!!!  
   ![image](https://github.com/user-attachments/assets/ea7c97e0-ddaf-406f-b9f2-08e4386c4338)  
5. 提交更改,提交消息建议: `docs(文档名字): 添加XXX文档`  
   ![image](https://github.com/user-attachments/assets/484898dd-1509-4280-84b2-eb5472e06519)


## 修改文档

1. 在网页端打开: https://github.com/UnrealMultiple/TShockPluginDocs/tree/master/docs/zh/other  
   ![image](https://github.com/user-attachments/assets/9f6086d1-acaa-4318-9550-256e2b0233db)  
2. 选中你需要修改的文档, 并且点击编辑  
   ![image](https://github.com/user-attachments/assets/1edfd7be-a255-4a39-8fba-6bbc74ffc12f)
3. 编辑文档 (格式MarkDown)
4. 提交更改,提交消息建议: `docs(文档名字): 大概描述你修改了什么`
   ![image](https://github.com/user-attachments/assets/d50f9cf0-475f-473a-aa56-6cdceaef0fd1)

## 非文档文件

如果你需要添加一些非文档的文件,比如QQ官方机器人的检验文件,你可以把对应文件放入`docs/.vuepress/public`    
例如: 我放入`102256264.json`就可以在`https://docs.terraria.ink/102256264.json`访问这个文件  
![image](https://github.com/user-attachments/assets/30e8bddf-8162-4111-89cd-29c0d94bec2e)

