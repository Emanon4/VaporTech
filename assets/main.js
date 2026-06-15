/* 蒸汽电波 VaporTech — 交互 + 三语 i18n */
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
      "hero.cta1": "看作品", "hero.cta2": "关注 B站",
      "about.eyebrow": "关于这道电波",
      "about.title": "一道关于 AI 的电波",
      "about.body": "蒸汽电波 VaporTech 是一个聚焦 AI 创作的内容厂牌。我们把最新的 AI 工具拆开、玩透，再用蒸汽波的霓虹审美重新拼起来：AI 视频、AI 绘画、稀奇古怪的 AI 玩法，全都在这道频率上播出。",
      "stat.fans": "B站粉丝", "stat.works": "视频投稿", "stat.imagination": "想象力",
      "content.eyebrow": "在播什么",
      "content.title": "这道频率上，播点什么",
      "content.c1t": "AI 视频创作",
      "content.c1d": "用 AI 把脑洞变成能看的画面，从分镜、生成到成片，一条龙玩给你看。",
      "content.c2t": "AI 视觉绘画",
      "content.c2d": "霓虹、赛博、复古未来，这里是 AI 绘画的审美实验场，也是这套头像的来处。",
      "content.c3t": "AI 工具玩法",
      "content.c3d": "新工具第一时间拆给你看，把官方没说的用法，玩出不一样的花样。",
      "works.eyebrow": "作品精选",
      "works.title": "挑几段电波，给你听",
      "works.lead": "点开任意一段，都会跳到频道。把封面、标题和链接换成真实视频即可。",
      "work.1": "AI 短片 · 最新", "work.2": "霓虹绘画实验", "work.3": "AI 工具实测",
      "work.4": "赛博美学", "work.5": "脑洞实验室", "work.6": "幕后玩法",
      "works.all": "在 B站看全部 39 个作品 →",
      "follow.eyebrow": "接收信号",
      "follow.title": "锁定这道频率",
      "follow.body": "在 B站和抖音搜「蒸汽电波 VaporTech」，或直接点开下面的频道。商务合作加微信。",
      "follow.dy": "抖音 Douyin", "follow.wx": "商务微信", "follow.wxsub": "qianpai857 · 点击复制",
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
      "hero.cta1": "See the works", "hero.cta2": "Follow on Bilibili",
      "about.eyebrow": "About this signal",
      "about.title": "A signal tuned to AI",
      "about.body": "VaporTech is a content studio focused on AI creation. We take the newest AI tools apart, play them to the limit, and reassemble them through a vaporwave neon lens. AI video, AI art and odd little AI experiments all broadcast on this frequency.",
      "stat.fans": "Bilibili fans", "stat.works": "videos posted", "stat.imagination": "imagination",
      "content.eyebrow": "On air",
      "content.title": "What plays on this frequency",
      "content.c1t": "AI video",
      "content.c1d": "Turning wild ideas into watchable footage with AI, from storyboard to generation to final cut.",
      "content.c2t": "AI visuals",
      "content.c2d": "Neon, cyber, retro-future. A playground for AI image-making, and where this very avatar came from.",
      "content.c3t": "AI tools & hacks",
      "content.c3d": "Breaking down new tools the moment they drop, and finding the uses the docs never mention.",
      "works.eyebrow": "Selected works",
      "works.title": "A few signals to tune into",
      "works.lead": "Each tile links out to the channel. Swap the cover, title and link for a real video.",
      "work.1": "AI short, latest", "work.2": "Neon art experiment", "work.3": "AI tool, tested",
      "work.4": "Cyber aesthetics", "work.5": "Idea lab", "work.6": "Behind the scenes",
      "works.all": "See all 39 works on Bilibili →",
      "follow.eyebrow": "Tune in",
      "follow.title": "Lock onto the frequency",
      "follow.body": "Search “蒸汽电波 VaporTech” on Bilibili and Douyin, or jump straight to the channels below. For business, add the WeChat.",
      "follow.dy": "Douyin", "follow.wx": "Business WeChat", "follow.wxsub": "qianpai857 · click to copy",
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
      "hero.cta1": "作品を見る", "hero.cta2": "Bilibiliでフォロー",
      "about.eyebrow": "この電波について",
      "about.title": "AIに合わせた電波",
      "about.body": "蒸汽电波 VaporTech は、AIクリエイションに特化したコンテンツスタジオ。最新のAIツールを分解し、遊び尽くし、ヴェイパーウェイヴのネオン美学で組み直す。AI動画、AIアート、風変わりなAIの遊びが、この周波数で流れています。",
      "stat.fans": "Bilibiliフォロワー", "stat.works": "投稿動画", "stat.imagination": "想像力",
      "content.eyebrow": "放送中",
      "content.title": "この周波数で流れるもの",
      "content.c1t": "AI動画",
      "content.c1d": "妄想をAIで観られる映像に。絵コンテから生成、完成まで一気に。",
      "content.c2t": "AIビジュアル",
      "content.c2d": "ネオン、サイバー、レトロフューチャー。AI作画の実験場であり、このアバターの出どころ。",
      "content.c3t": "AIツール術",
      "content.c3d": "新ツールをいち早く解説。公式が語らない使い方まで掘り下げる。",
      "works.eyebrow": "セレクト作品",
      "works.title": "いくつかの電波を、どうぞ",
      "works.lead": "各タイルはチャンネルへ。カバー・タイトル・リンクを実際の動画に差し替えてください。",
      "work.1": "AIショート・最新", "work.2": "ネオン作画実験", "work.3": "AIツール検証",
      "work.4": "サイバー美学", "work.5": "妄想ラボ", "work.6": "舞台裏",
      "works.all": "Bilibiliで全39作品を見る →",
      "follow.eyebrow": "チューニング",
      "follow.title": "この周波数に合わせて",
      "follow.body": "Bilibiliと抖音で「蒸汽电波 VaporTech」を検索、または下のチャンネルへ。お仕事のご相談はWeChatまで。",
      "follow.dy": "抖音 Douyin", "follow.wx": "ビジネスWeChat", "follow.wxsub": "qianpai857 · クリックでコピー",
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
