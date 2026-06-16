# 蒸汽电波 VaporTech

一个聚焦 AI 创作的内容厂牌介绍站，**以抖音为主阵地**。视觉走经典蒸汽波（vaporwave）霓虹日落，骨架借鉴 [nooc.me](https://nooc.me) 的极简、排版优先思路。纯静态，零构建，部署在 GitHub Pages。

- 线上：https://emanon4.github.io/VaporTech/
- 主阵地：[抖音 @蒸汽电波](https://v.douyin.com/57qH8FmbsdQ/)（114.3 万粉丝 / 975.6 万赞）；同步更新 [小红书](https://www.xiaohongshu.com/user/profile/5e8eed850000000001004dd6) · [Bilibili](https://space.bilibili.com/416968601)
- 三语切换：中文 / English / 日本語（右上角 中·EN·日）

## 目录结构

```
.
├── index.html        # 页面结构（所有可翻译文案带 data-i18n）
├── assets/
│   ├── style.css     # 全部样式（背景、霓虹、栅格、响应式都在这）
│   ├── main.js       # 三语 i18n、滚动入场、汉堡菜单、微信号复制
│   └── avatar.jpg    # 频道头像（hero 主视觉）
├── .nojekyll         # 让 GitHub Pages 跳过 Jekyll，直接发布静态文件
└── README.md
```

## 本地预览

任意静态服务器即可，例如：

```bash
cd steam-radio-wave
python3 -m http.server 8000
# 打开 http://localhost:8000
```

## 怎么换成真实内容

1. **作品精选**：`index.html` 里 5 个 `<a class="work" …>` 卡片，每张是一条真实抖音视频。
   - `href` = 抖音分享短链（App「分享 → 复制链接」，形如 `v.douyin.com/xxxx`）；
   - 封面在 `assets/works/1.jpg`～`5.jpg`，替换同名文件即可（竖版 3:4 最佳）；
   - 标题改 `assets/main.js` 中 `work.1`～`work.5`，播放量改 `work.1v`～`work.5v`（三语都要改）。
   - 想加第 6 条：复制一段 `<a class="work">`，加一张 `assets/works/6.jpg`，并在词典补 `work.6`/`work.6v`。
2. **数据**：抖音粉丝/获赞/作品数在 `main.js` 的 `stat.fansN` / `stat.likesN` / `stat.worksN`（三语）。
3. **栏目介绍**：`content.c1t/c1d`… 在 `main.js` 词典改三语文案。
4. **关注/联系**：`#follow` 区块的抖音/小红书/B站链接、抖音号、微信号 `data-wx` 自行替换。

> 封面用工具从抖音视频自动抓：`mcporter call 'douyin.parse_douyin_video_info(share_link:"…")'` 拿到无水印视频直链，再 `ffmpeg -i <直链> -vframes 1 cover.jpg` 截帧；或直接用频道封面截图裁剪。

> 改完所有三语文案后，三种语言会同步生效；只改了 HTML 默认中文的话，英/日仍走词典里的旧值，记得一起改。

## 设计说明（给后续维护者）

- **配色刻意采用 vaporwave 粉 `#ff6ad5` / 青 `#21f7d4` / 紫 `#b072ff`**，源自频道身份与头像立绘，并非通用 AI 模板配色。
- 字体：Orbitron（拉丁展示）＋ DotGothic16（像素点缀／假名）＋ Noto Sans SC/JP（正文与中日标题）。
- 标题用纯色 + 多层霓虹 `text-shadow` 实现铬质感，**未用** `background-clip:text` 渐变字，兼顾观感与可读性、高对比模式。
- 全站尊重 `prefers-reduced-motion`：开启后网格滚动、呼吸、跑马灯、入场动画全部停用。

托管于 GitHub Pages · 用想象力构建。
