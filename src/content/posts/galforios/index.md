---
title: ios游玩galgame
published: 2025-10-12
pinned: true
description: 教程
tags: [教程,galgame,ios,mobile]
category: 教程
licenseName: "MIT"

---

# 所用模拟器在 App Store 中大多需付费
可以付费下载、自签或巨魔、共享账号（淘宝等网站购买）



## 本教程的所有 IPA 文件
[总下载链接](https://www.123684.com/s/FrLAjv-mP2X)
- 各模拟器下含单独 GitHub 直链








---
# <font color="#FF0000">第0步 判断引擎</font>
| 包含文件      | 对应引擎      | 对应模拟器       |
|---------------|---------------|------------------|
| .xp3          | Kirikiri      | XP3Player        |
| .nsa          | ONScripter    | ONSPlayer        |
| 0.txt         | ONScripter    | ONSPlayer        |
| nscript.dat   | ONScripter    | ONSPlayer        |
| roof.pts      | Artemis       | Artroid+         |
| renpy文件夹   | Ren'Py        | Spark等          |
| www文件夹     | RPG Maker MV  | RPGViewer        |
| index.html    | RPG Maker MZ/H5  | RPGViewer        |
| .swf          | Flash         | RPGViewer     |
---

# krkr 引擎

### 工具 1：xp3player
[单独下载](https://github.com/sunxibing114514/Personal-website-file-storage/releases/download/galgame/XP3Player1.3.12.ipa)

#### 使用方法：
1. 解压你下载的资源
2. 确认你下载的资源内容，如果您在那里看到以 .xp3 为扩展名的文件，例如 data.xp3，则通常是 Kirikiri
3. 导入方法 1（手机端）：长按文件夹直到呼出菜单，选择共享，再选择 xp3player 应用程序。然后在 xp3player 中打开 inbox 文件夹（若没有则多导入几次），将文件夹通过剪贴或复制移出 inbox 文件夹
4. 导入方法 2（电脑端）：使用 iTunes，然后进入“同步”屏幕。在左侧窗格中单击“文件共享”。从应用程序中选择 XP3player，然后将游戏文件夹拖放到 Document 项中
5. 导入方法 3（已越狱）：使用 Filza 或其它文件管理器将文件夹移动至 xp3player 数据的 Document 文件夹
6. 点击 data.xp3 或 启动游戏.xp3 等启动游戏

#### [补丁网站](https://zeas2.github.io/Kirikiroid2_patch/patch/)
- 复制进文件夹即可

---

### 工具 2：xp3player

#### 使用方法：
1. 移动文件夹后点击 data.xp3 或 启动游戏.xp3 等启动游戏

#### 注意：
- 该软件目前有 ver1.0 测试版与 ver1.1、ver1.2、ver1.3、ver1.3.1 正式版
  - 五个版本的游戏功能与列表功能均正常
  - ver1.0 导入功能正常。ver1.1 设置、新建文件夹、导入闪退。ver1.2、ver1.3 所有功能正常
  - 1.3.1 修复了一些可能导致整个应用出错的问题。并且每次进入游戏清空原有配置文件并重新生成，保证每次进入都处于新安装状态，修复存档问题，增加游戏文件的识别，可识别文件为：开始游戏.xp3、启动游戏.xp3、运行游戏.xp3、data.xp3
- 进入软件后显示的文件并非储存在该软件的数据中。
  数据目录：/var/mobile/Containers/Data/Application/8A223672-D5E2-4184-81F1-27FD32D1BEB1
  实际显示的数据目录：/private/var/mobile/Containers/Data/PluginKitPlugin/85C784B7-CE23-4CEA-8DFC-F76A16953DF9/Documents

---

# ONScripter 引擎

### 工具：onsplayer
[单独下载](https://github.com/sunxibing114514/Personal-website-file-storage/releases/download/galgame/ONSPlayer.ipa)

该模拟器类似于安卓中的 ONScripter、MiNE 等

#### 注意：
1. 该模拟器已在 App Store 下架，需自签或巨魔安装
2. renpyreader 内置该引擎
3. 该模拟器还可运行 RPGMV 游戏

#### 使用方法：
1. 解压你下载的资源
2. 确认你下载的资源内容，该引擎游戏通常包含 .nsa、nscripter.dat 文件等
3. 注意游戏资源文件要在游戏文件夹的根目录中，不能文件夹嵌套
4. 在设置中下滑找到 onsplayer，将储存更改为“我的 iPhone”
5. 在系统自带“文件”软件中，长按游戏文件夹，点击“移动”，移动到 我的 iPhone/onsplayer
6. 打开模拟器，点击游戏启动

#### 手势：
- 单指点击：鼠标左键
- 双指点击：鼠标右键
- 三指点击：快进

---

# Artemis 引擎

### 工具 1：Artroid+ 模拟器

[单独下载](https://github.com/sunxibing114514/Personal-website-file-storage/releases/download/galgame/Artroid+_2.0.ipa)

可以运行使用 Artemis 引擎制作的 Galgame

#### 注意：
1. iOS 版 Artroid 仅更新至 ver2.0，而安卓版已更新至 ver3.0，故 iOS 版无法运行含 emote 的游戏

<a href="/posts/artemiszz/">直装教程</a>


2. 部分游戏需使用补丁

补丁格式

```
# system.ini
[IOS]
WIDTH = 横向分辨率
HEIGHT = 纵向分辨率
CHARSET = UTF-8
SIDECUT = 0
BOOT = system/first.iet
game.os = "windows"
```

例如
```
# system.ini
[IOS]
WIDTH = 1920
HEIGHT = 1080
SIDECUT = 0
BOOT = system/first.iet
game.os = "windows"
CHARSET = UTF-8
```

3. 在资源网站中带有 “tyranor”“ty”“Artemis” 标签的资源大部分可在 Artroid+ 中运行

#### 使用方法：
1. 解压游戏，游戏文件中包含名为 root.pfs 的资源文件的游戏即可使用 Artroid+ 模拟器运行
2. 文件夹名只能包含英文字母与数字，否则会报错
3. 进入模拟器并退出使其创建应用文件夹
4. 在系统自带“文件”软件中，长按游戏文件夹，点击“移动”，移动到 我的 iPhone/Artroid+/ARTEMIS
5. 打开 Artroid+，点击 “Select root.pfs”，选择游戏文件夹，点击 root.pfs 文件即可运行游戏

#### 按键操作：
1. 进入游戏后可直接使用手指点按操作游戏
2. 轻触屏幕一秒：自动模式
3. 双指触摸屏幕：隐藏对话框
4. 三指触摸屏幕：强制跳过
5. 向上滑动屏幕：查看历史
6. 向下滑动屏幕：打开菜单
7. 向左滑动屏幕：隐藏对话框
8. 向右滑动屏幕：普通跳过

#### 相关网站：
1. [Artroid+ 作者](https://myskrpatch.tistory.com/)
2. [Artroid+ 补丁网站](https://myskrpatch.tistory.com/)
3. [支持 Artroid 的游戏列表](https://vndb.org/r?f=01fwArtemis_0Engine-&o=d&p=1&s=released)

#### 补丁使用方式：
1. 打开上方网站
2. 从右边的菜单中选择标题
3. 选择标题后会出现一览页，直接打开文章
4. 文章下方有下载链接，从那里下载
5. 把下载的补丁内容全部放入游戏文件夹

---

### 工具 2：yurigame

[单独下载](https://github.com/sunxibing114514/Personal-website-file-storage/releases/download/galgame/YuriGame.ipa)

参照 krkr 引擎工具 2

---

# Ren'Py 引擎

该引擎模拟器较多，如 RenpyReader、RenpyViewer、[Spark](https://github.com/sunxibing114514/Personal-website-file-storage/releases/download/galgame/Spark.ipa)、[Ren'pyLinter](https://github.com/sunxibing114514/Personal-website-file-storage/releases/download/galgame/Ren_Py_Linter_Decrypted.1.ipa)、Ren'py(7)Pocket 等
- 我只使用 Spark 与 Linter
- Renpy 的游戏文件中包含 renpy 与 game 文件夹
- 在资源网站中带有 “Ren'Py”“renpy” 标签的资源大部分都可以运行

---

### 工具 1：Spark

#### 导入方式：
1. （电脑端）将解压完成的游戏文件夹拖入 Spark 的 /Documents/games 目录
2. （手机端）在系统自带“文件”软件中，长按游戏文件夹，点击“移动”，移动到 我的 iPhone/Spark
3. （手机端）在 Spark 主界面中点击“导入游戏”可直接导入 apk、zip、7z、rar 格式的文件（前提为它们为 Ren'Py 引擎）

#### 游玩：
1. 导入游戏后，点击游戏进入游戏选项，在这里可以选择运行游戏的 Ren'Py 版本（Engine ver…）
   - 详细信息中的 Ren'Py 版本导入后会自动设置，若没有需自己点击设置
2. 点击“启动游戏”游玩

---

### 其实各种工具导入与运行差不多，不一一讲解

---

# RPG 游戏

1. ONSplayer 可运行 RPGMV 游戏
2. H5 的 RPG 游戏含 HTML 文件，可在支持 HTML 的软件内直接打开

---

### 工具 2：RPGviewer

[单独下载](https://github.com/sunxibing114514/Personal-website-file-storage/releases/download/galgame/RPGViewer_1.17.ipa)

可以运行 RPGMV、RPGMZ/H5、FLASH 的游戏
- 可在应用内点击“添加”直接导入游戏文件夹
- 还可输入 URL 下载 swf 格式的 Flash 游戏并运行
- 进入游戏后有两个按钮：
  - 左上角 pad：呼出控制界面
  - 右上角 cheat：作弊

---

### 推荐工具

#### 解压工具：
- 解压专家

#### 文件管理工具：
- （越狱或巨魔）Filza
- （系统自带）文件
- （电脑）iTunes

#### 下载工具：
- [Gopeed](https://gopeed.com/zh-CN)
