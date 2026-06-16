/* 蒸汽电波 VaporTech — 交互 + 三语 i18n（v2：抖音为主） */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  /* ---------------- i18n 词典 ---------------- */
  var I18N = {
    zh: {
      "a11y.skip": "跳到主要内容",
      "a11y.nav": "主导航", "a11y.menu": "菜单", "a11y.lang": "语言",
      "nav.about": "关于", "nav.content": "内容", "nav.works": "作品", "nav.follow": "关注",
      "hero.eyebrow": "AI 创作内容厂牌",
      "hero.tagline": "AI 时代，你唯一的限制，也许只有想象力。",
      "hero.sub": "来，和我们一起玩点不一样的 AI。",
      "hero.cta1": "关注抖音", "hero.cta2": "看作品",
      "about.eyebrow": "关于这道电波",
      "about.title": "一道关于 AI 的电波",
      "about.body": "蒸汽电波 VaporTech 是一个聚焦 AI 创作的内容厂牌，主阵地在抖音。我们把最新的 AI 工具拆开、玩透，再用蒸汽波的霓虹审美，重新拼成一条条好看又好懂的视频：AI 测评、AI 绘画、稀奇古怪的 AI 玩法，全在这道频率上播出。",
      "stat.fansN": "114.3万", "stat.fans": "抖音粉丝",
      "stat.likesN": "975.6万", "stat.likes": "总获赞",
      "stat.worksN": "46", "stat.works": "作品",
      "content.eyebrow": "在播什么",
      "content.title": "这道频率上，播点什么",
      "content.c1t": "AI 视频创作",
      "content.c1d": "用 AI 把脑洞变成能看的画面，从分镜、生成到成片，一条龙玩给你看。",
      "content.c2t": "AI 视觉绘画",
      "content.c2d": "霓虹、赛博、复古未来，这里是 AI 绘画的审美实验场，也是这套头像的来处。",
      "content.c3t": "AI 工具玩法",
      "content.c3d": "新工具第一时间拆给你看，把官方没说的用法，玩出不一样的花样。",
      "works.eyebrow": "作品精选",
      "works.title": "挑几条抖音，先睹为快",
      "works.lead": "都是抖音上的热门作品，点开直达原视频。",
      "work.1": "「邪门」软件，逼疯五亿人", "work.1v": "80.0万",
      "work.2": "看不懂的体检报告？AI 帮你读", "work.2v": "554.8万",
      "work.3": "一个人开动画公司，用 MaxClaw 当导演", "work.3v": "26.8万",
      "work.4": "这份 PPT，漂亮得不像 AI 做的", "work.4v": "46.9万",
      "work.5": "AI 进化出「夜生活」了？", "work.5v": "54.9万",
      "works.all": "在抖音看全部 46 个作品 →",
      "follow.eyebrow": "接收信号",
      "follow.title": "锁定这道频率",
      "follow.body": "主阵地在抖音，搜「蒸汽电波」就能找到。小红书、B站也同步更新，商务合作加微信。",
      "follow.dy": "抖音", "follow.main": "主阵地", "follow.dyid": "抖音号",
      "follow.fans": "粉丝", "follow.likes": "赞",
      "follow.xhs": "小红书", "follow.bili": "哔哩哔哩",
      "follow.wx": "商务合作", "follow.wxsub": "微信 qianpai857 · 点击复制",
      "foot.copy": "© 2026 蒸汽电波 VaporTech · 用想象力构建 · 托管于 GitHub Pages",
      "foot.top": "回到顶部 ↑",
      "_title": "蒸汽电波 VaporTech · AI 创作内容厂牌",
      "_copied": "已复制微信号", "_copyfail": "复制失败，请手动复制：qianpai857"
    },
    en: {
      "a11y.skip": "Skip to content",
      "a11y.nav": "Main navigation", "a11y.menu": "Menu", "a11y.lang": "Language",
      "nav.about": "About", "nav.content": "Content", "nav.works": "Works", "nav.follow": "Follow",
      "hero.eyebrow": "AI creative studio",
      "hero.tagline": "In the age of AI, your only limit might be your imagination.",
      "hero.sub": "Come play with AI, a little differently.",
      "hero.cta1": "Follow on Douyin", "hero.cta2": "See the works",
      "about.eyebrow": "About this signal",
      "about.title": "A signal tuned to AI",
      "about.body": "VaporTech is a content studio focused on AI creation, with Douyin as home base. We take the newest AI tools apart, play them to the limit, and reassemble them through a vaporwave neon lens into videos that are easy on the eyes and easy to get: AI reviews, AI art and odd little AI experiments, all broadcast on this frequency.",
      "stat.fansN": "1.14M", "stat.fans": "Douyin fans",
      "stat.likesN": "9.76M", "stat.likes": "total likes",
      "stat.worksN": "46", "stat.works": "videos",
      "content.eyebrow": "On air",
      "content.title": "What plays on this frequency",
      "content.c1t": "AI video",
      "content.c1d": "Turning wild ideas into watchable footage with AI, from storyboard to generation to final cut.",
      "content.c2t": "AI visuals",
      "content.c2d": "Neon, cyber, retro-future. A playground for AI image-making, and where this very avatar came from.",
      "content.c3t": "AI tools & hacks",
      "content.c3d": "Breaking down new tools the moment they drop, and finding the uses the docs never mention.",
      "works.eyebrow": "Selected works",
      "works.title": "A few Douyin picks",
      "works.lead": "All trending on Douyin. Tap any to watch the original.",
      "work.1": "The ‘cursed’ app driving 500M people up the wall", "work.1v": "800K",
      "work.2": "Can’t read your medical report? Let AI explain it", "work.2v": "5.5M",
      "work.3": "A one-person animation studio, directed by MaxClaw", "work.3v": "268K",
      "work.4": "A deck so good it doesn’t look AI-made", "work.4v": "469K",
      "work.5": "AI has a ‘nightlife’ now?", "work.5v": "549K",
      "works.all": "See all 46 videos on Douyin →",
      "follow.eyebrow": "Tune in",
      "follow.title": "Lock onto the frequency",
      "follow.body": "Home base is Douyin, just search “蒸汽电波”. Also posting on Xiaohongshu and Bilibili. For business, add the WeChat.",
      "follow.dy": "Douyin", "follow.main": "Home base", "follow.dyid": "Douyin ID",
      "follow.fans": "fans", "follow.likes": "likes",
      "follow.xhs": "Xiaohongshu", "follow.bili": "Bilibili",
      "follow.wx": "Business", "follow.wxsub": "WeChat qianpai857 · click to copy",
      "foot.copy": "© 2026 蒸汽电波 VaporTech · built with imagination · hosted on GitHub Pages",
      "foot.top": "Back to top ↑",
      "_title": "蒸汽电波 VaporTech · AI creative studio",
      "_copied": "WeChat ID copied", "_copyfail": "Copy failed, copy manually: qianpai857"
    },
    ja: {
      "a11y.skip": "本文へスキップ",
      "a11y.nav": "メインナビゲーション", "a11y.menu": "メニュー", "a11y.lang": "言語",
      "nav.about": "概要", "nav.content": "コンテンツ", "nav.works": "作品", "nav.follow": "フォロー",
      "hero.eyebrow": "AIクリエイティブスタジオ",
      "hero.tagline": "AIの時代、あなたの唯一の限界は、想像力だけかもしれない。",
      "hero.sub": "さあ、ちょっと違うAIで遊ぼう。",
      "hero.cta1": "抖音をフォロー", "hero.cta2": "作品を見る",
      "about.eyebrow": "この電波について",
      "about.title": "AIに合わせた電波",
      "about.body": "蒸汽电波 VaporTech は、AIクリエイションに特化したコンテンツスタジオ。主戦場は抖音（Douyin）。最新のAIツールを分解し、遊び尽くし、ヴェイパーウェイヴのネオン美学で、観やすく分かりやすい動画に組み直す。AIレビュー、AIアート、風変わりなAIの遊びが、この周波数で流れています。",
      "stat.fansN": "114.3万", "stat.fans": "抖音フォロワー",
      "stat.likesN": "975.6万", "stat.likes": "総いいね",
      "stat.worksN": "46", "stat.works": "作品数",
      "content.eyebrow": "放送中",
      "content.title": "この周波数で流れるもの",
      "content.c1t": "AI動画",
      "content.c1d": "妄想をAIで観られる映像に。絵コンテから生成、完成まで一気に。",
      "content.c2t": "AIビジュアル",
      "content.c2d": "ネオン、サイバー、レトロフューチャー。AI作画の実験場であり、このアバターの出どころ。",
      "content.c3t": "AIツール術",
      "content.c3d": "新ツールをいち早く解説。公式が語らない使い方まで掘り下げる。",
      "works.eyebrow": "セレクト作品",
      "works.title": "抖音のピックアップ",
      "works.lead": "すべて抖音で話題の作品。タップで元動画へ。",
      "work.1": "「邪悪」アプリが5億人を翻弄", "work.1v": "80.0万",
      "work.2": "読めない健康診断、AIが解説", "work.2v": "554.8万",
      "work.3": "一人でアニメ会社、監督はMaxClaw", "work.3v": "26.8万",
      "work.4": "AI製とは思えないPPT", "work.4v": "46.9万",
      "work.5": "AIに「夜の生活」が？", "work.5v": "54.9万",
      "works.all": "抖音で全46作品を見る →",
      "follow.eyebrow": "チューニング",
      "follow.title": "この周波数に合わせて",
      "follow.body": "主戦場は抖音、「蒸汽电波」で検索。小紅書とBilibiliでも更新中。お仕事のご相談はWeChatまで。",
      "follow.dy": "抖音", "follow.main": "メイン", "follow.dyid": "抖音ID",
      "follow.fans": "フォロワー", "follow.likes": "いいね",
      "follow.xhs": "小紅書", "follow.bili": "Bilibili",
      "follow.wx": "お仕事", "follow.wxsub": "WeChat qianpai857 · クリックでコピー",
      "foot.copy": "© 2026 蒸汽电波 VaporTech · 想像力で構築 · GitHub Pages 配信",
      "foot.top": "トップへ ↑",
      "_title": "蒸汽电波 VaporTech · AIクリエイティブスタジオ",
      "_copied": "WeChat IDをコピーしました", "_copyfail": "コピー失敗。手動でコピー: qianpai857"
    }
  };

  var LANGS = { zh: "zh", en: "en", ja: "ja" };
  var current = "zh";

  function detectLang() {
    var saved = null;
    try { saved = localStorage.getItem("vt-lang"); } catch (e) {}
    if (saved && I18N[saved]) return saved;
    var n = (navigator.language || "zh").toLowerCase();
    if (n.indexOf("ja") === 0) return "ja";
    if (n.indexOf("zh") === 0) return "zh";
    if (n.indexOf("en") === 0) return "en";
    return "zh";
  }

  function applyLang(lang) {
    if (!I18N[lang]) lang = "zh";
    current = lang;
    var dict = I18N[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
    });
    document.documentElement.setAttribute("lang", LANGS[lang]);
    document.title = dict["_title"];
    document.querySelectorAll(".lang button").forEach(function (b) {
      var on = b.getAttribute("data-lang") === lang;
      b.classList.toggle("on", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    try { localStorage.setItem("vt-lang", lang); } catch (e) {}
  }

  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang")); });
  });

  applyLang(detectLang());

  /* ---------------- 导航：滚动态 + 汉堡菜单 ---------------- */
  var nav = document.getElementById("nav");
  var onScroll = function () {
    if (window.scrollY > 12) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
    document.body.classList.toggle("scrolled-deep", window.scrollY > window.innerHeight * 0.6);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  var toggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  function closeMenu() {
    navLinks.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
  toggle.addEventListener("click", function () {
    var open = navLinks.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) {
      var first = navLinks.querySelector("a");
      if (first) first.focus();
    }
  });
  navLinks.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeMenu);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navLinks.classList.contains("open")) {
      closeMenu();
      toggle.focus();
    }
  });
  document.addEventListener("click", function (e) {
    if (!navLinks.classList.contains("open")) return;
    if (!navLinks.contains(e.target) && !toggle.contains(e.target)) closeMenu();
  });

  /* ---------------- 滚动入场 ---------------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------------- 复制微信号 ---------------- */
  var toast = document.getElementById("toast");
  var toastTimer = null;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("show"); }, 2200);
  }
  var copyBtn = document.getElementById("copyWx");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var wx = copyBtn.getAttribute("data-wx") || "";
      var ok = function () { showToast(I18N[current]["_copied"]); };
      var fail = function () { showToast(I18N[current]["_copyfail"]); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(wx).then(ok).catch(fail);
      } else {
        try {
          var ta = document.createElement("textarea");
          ta.value = wx;
          ta.style.position = "fixed";
          ta.style.opacity = "0";
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
          ok();
        } catch (e) { fail(); }
      }
    });
  }
})();
