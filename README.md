# 蒸汽电波 VaporTech

一个聚焦 AI 创作的内容厂牌介绍站。视觉走经典蒸汽波（vaporwave）霓虹日落，骨架借鉴 [nooc.me](https://nooc.me) 的极简、排版优先思路。纯静态，零构建，适合 GitHub Pages 托管。

- 在线频道：[Bilibili](https://space.bilibili.com/416968601) · [抖音](https://v.douyin.com/57qH8FmbsdQ/)
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

1. **作品精选**：`index.html` 里 6 个 `<a class="work" …>` 卡片。
   - 把 `href` 换成具体视频链接；
   - 想换封面图，把对应 `.work-cover.cN` 的 `background` 改成 `url(assets/你的封面.jpg) center/cover`；
   - 标题改 `assets/main.js` 中 `work.1`～`work.6` 三种语言的文案（或直接改 HTML 默认中文）。
2. **栏目介绍**：`content.c1t/c1d`…在 `main.js` 词典里改三语文案。
3. **关于 / 标语 / 数据**：粉丝数、投稿数直接在 `index.html` 的 `.stats` 改；其余文案在 `main.js` 词典。
4. **联系方式**：`#follow` 区块的 B站 / 抖音链接、微信号 `data-wx` 自行替换。

> 改完所有三语文案后，三种语言会同步生效；只改了 HTML 默认中文的话，英/日仍走词典里的旧值，记得一起改。

## 设计说明（给后续维护者）

- **配色刻意采用 vaporwave 粉 `#ff6ad5` / 青 `#21f7d4` / 紫 `#b072ff`**，源自频道身份与头像立绘，并非通用 AI 模板配色。
- 字体：Orbitron（拉丁展示）＋ DotGothic16（像素点缀／假名）＋ Noto Sans SC/JP（正文与中日标题）。
- 标题用纯色 + 多层霓虹 `text-shadow` 实现铬质感，**未用** `background-clip:text` 渐变字，兼顾观感与可读性、高对比模式。
- 全站尊重 `prefers-reduced-motion`：开启后网格滚动、呼吸、跑马灯、入场动画全部停用。

托管于 GitHub Pages · 用想象力构建。
