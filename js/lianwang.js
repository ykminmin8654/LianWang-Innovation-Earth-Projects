/* ============================================================
   LIÁNWǑNG — page behaviour
   - Nav / footer injection (same-tab policy for internal links)
   - Scroll reveals + progress bar animation
   - Tools grid rendered from js/tools-data.js
   - Download card: placeholder detection + confirm-before-download
   ============================================================ */

(function () {
  'use strict';

  /* ------------------------------------------------------------
     CONFIG — edit these when you ship a new build
     ------------------------------------------------------------ */
  var LW = {
    version: '1.1.1',
    /* ---------------------------------------------------------------
       SHIPPING MODEL (current): the Setup .exe on GitHub Releases is
       the ONLY download option. The old portable .zip is retired.

       Why: the build (~140 MB) exceeds GitHub's 25 MB per-file repo
       limit, so it lives as a Release asset (Releases accept up to
       2 GB). To ship a new version:
         1. Repo -> Releases -> Draft a new release -> attach the .exe
         2. Update `version`, `releaseTagName` and `releaseAssetName`
            below (or leave releaseDownloadUrl empty and the site will
            auto-detect the newest Release's .exe via the GitHub API).

       `useExternalRelease: true` = download comes from Releases.
       Setting it back to false only makes sense if you commit a small
       test package under download/ again.
       --------------------------------------------------------------- */
    downloadPath: 'download/Lianwang-Setup-1.1.1.exe', // legacy local path (unused while external mode is on)
    useExternalRelease: true,    // THE .exe on GitHub Releases is the only download
    releaseRepo: 'ykminmin8654/LianWang-Innovation-Earth-Projects', // <owner>/<repo> of your Releases
    releaseTagName: 'install',   // tag of the release holding the setup exe
    releaseAssetName: 'Lianwang-Setup-1.1.1.exe', // exact .exe filename attached to the release
    /* Pinned to the published asset (release tag "install"). Verified
       live (HTTP 200, ~140 MB) — if you re-publish under a new tag or
       asset name, update this URL or empty it and the site will
       auto-detect the latest Release's .exe. */
    releaseDownloadUrl: 'https://github.com/ykminmin8654/LianWang-Innovation-Earth-Projects/releases/download/install/Lianwang-Setup-1.1.1.exe',
    appExeName: '',             // display name of the program (derived from the asset name; set explicitly to override)
    mainSiteUrl: 'https://innovationearthprojects.org', // the ORIGINAL website — every "back to site" link points here, same tab
    inDevelopment: true,        // master switch for all "in development" UI
    devProgress: 72             // % shown on the build-status bar
  };

  /* Display name of the program users run — derived from the asset
     filename (a Setup .exe runs itself; a zip would be extracted
     first). Override with LW.appExeName if it differs. */
  function appExeName() {
    if (LW.appExeName) return LW.appExeName;
    var src = (LW.releaseDownloadUrl || LW.releaseAssetName || LW.downloadPath).split('/').pop();
    try { src = decodeURIComponent(src); } catch (e) {}
    return src.replace(/\.(zip|exe)$/i, '') + '.exe';
  }

  /* Display name for whatever you actually ship: ".exe" or ".zip".
     Derived automatically from downloadPath / releaseAssetName. */
  function pkgExt() {
    var src = LW.useExternalRelease ? (LW.releaseDownloadUrl || LW.releaseAssetName) : LW.downloadPath;
    return /\.zip$/i.test(src) ? '.zip' : '.exe';
  }
  function isZipPackage() { return pkgExt() === '.zip'; }
  function btnLabel() {
    return '<i class="fas fa-download"></i> Download v' + LW.version + ' (' + pkgExt() + ')';
  }

  function releaseLatestUrl() {
    return 'https://github.com/' + LW.releaseRepo + '/releases/latest';
  }
  function releaseDirectUrl() {
    if (LW.releaseDownloadUrl) return LW.releaseDownloadUrl;
    /* Prefer the "latest" *release page* over a guessed asset URL:
       GitHub Pages can't byte-probe Releases, so we never ship a link
       that might 404. checkReleaseStatus() replaces this with the real
       asset URL as soon as the GitHub API confirms the zip exists. */
    return releaseLatestUrl();
  }
  function activeDownloadHref() {
    return LW.useExternalRelease ? releaseDirectUrl() : LW.downloadPath;
  }

  /* The byte signature written into the placeholder file created in
     /download. If the served file still contains it, it has not been
     replaced with the real app yet. */
  var PLACEHOLDER_MARK = 'LIANWANG-PLACEHOLDER-BINARY';

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  /* ------------------------------------------------------------
     1. NAV + FOOTER (static shell, same tab for everything internal)
     ------------------------------------------------------------ */
  var NAV_LINKS = [
    { href: '#tools',      label: 'Tools',      key: 'tools' },
    { href: '#download',   label: 'Download',   key: 'download' },
    { href: '#privacy',    label: 'Privacy',    key: 'privacy' },
    { href: '#roadmap',    label: 'Roadmap',    key: 'roadmap' },
    { href: '#faq',        label: 'FAQ',        key: 'faq' }
  ];

  /* "Back to the main website" link — ALWAYS same tab (no target=_blank;
     enforceSameTab() additionally strips strays and routes the click via
     window.location.href). */
  function backToSitePill(extraClass) {
    return '<a href="' + LW.mainSiteUrl + '" data-external class="back-to-site' +
      (extraClass ? ' ' + extraClass : '') + '" title="Back to innovationearthprojects.org (opens in this tab)">' +
      '<i class="fas fa-arrow-left" aria-hidden="true"></i>' +
      '<span>Innovation Earth Projects</span></a>';
  }

  function buildNav() {
    var mount = $('#nav-mount');
    if (!mount) return;
    var links = NAV_LINKS.map(function (l) {
      return '<a href="' + l.href + '" data-nav="' + l.key + '">' + l.label + '</a>';
    }).join('');

    mount.innerHTML =
      (LW.inDevelopment
        ? '<div class="dev-ribbon"><i class="fas fa-hammer" aria-hidden="true"></i>' +
          'Liánwǎng is <strong>still in active development</strong> — v' + LW.version +
          ' builds are pre-release. <a href="#development">See what\'s shipping →</a></div>'
        : '') +
      '<header class="nav"><div class="nav__inner">' +
        '<a href="index.html" class="nav__brand" aria-label="Liánwǎng — home">' +
          '<span class="nav__mark"><img src="images/logo.png" alt="" width="32" height="32" class="nav__logo-img" loading="lazy" /></span>' +
          '<span class="nav__wordmark">Liánwǎng</span>' +
          '<span class="nav__version">v' + LW.version + ' · dev</span>' +
        '</a>' +
        '<nav class="nav__links" id="primary-nav" aria-label="Primary">' + links + '</nav>' +
        backToSitePill('nav__back') +
        '<a href="#download" class="btn btn--ghost nav__cta shine">Download <i class="fas fa-download"></i></a>' +
        '<button class="nav__toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="primary-nav">' +
          '<i class="fas fa-bars"></i></button>' +
      '</div></header>';

    $('#nav-toggle').addEventListener('click', function () {
      var open = $('#primary-nav').classList.toggle('is-open');
      this.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  function buildFooter() {
    var mount = $('#footer-mount');
    if (!mount) return;
    mount.innerHTML =
      '<footer class="footer"><div class="container footer__inner">' +
        '<div class="footer__col">' +
          '<div class="footer__brand">' +
            '<span class="nav__mark"><img src="images/logo.png" alt="" width="28" height="28" class="nav__logo-img" loading="lazy" /></span>' +
            '<span>Liánwǎng</span>' +
          '</div>' +
          '<p class="footer__tagline">Local-first Windows desktop workspace — tasks, notes, media and everyday utilities. No accounts, no cloud.</p>' +
        '</div>' +
        '<div class="footer__col"><h4>Page</h4><ul>' +
          '<li><a href="#tools">Tools</a></li>' +
          '<li><a href="#download">Download</a></li>' +
          '<li><a href="#roadmap">Roadmap</a></li>' +
          '<li><a href="#faq">FAQ</a></li>' +
        '</ul></div>' +
        '<div class="footer__col"><h4>Status</h4><ul>' +
          '<li><span class="status status--dev"><span class="pulse-dot"></span> In development</span></li>' +
          '<li><a href="#development">What\'s shipping</a></li>' +
        '</ul></div>' +
        '<div class="footer__col"><h4>Studio</h4><ul>' +
          '<li><a href="' + LW.mainSiteUrl + '" data-external title="Back to the main website — opens in this tab">Innovation Earth Projects <i class="fas fa-arrow-left"></i></a></li>' +
          '<li><a href="mailto:InnovationEarthProjects@gmail.com"><i class="fas fa-envelope"></i> Email us</a></li>' +
        '</ul></div>' +
      '</div>' +
      '<div class="container footer__back">' +
        backToSitePill('footer__back-pill') +
        '<span class="footer__back-note">This page is the Liánwǎng download site — the link above returns you to the main website (same tab, no pop-ups).</span>' +
      '</div>' +
      '<div class="container footer__bottom">' +
        '<span>&copy; <span id="footer-year"></span> Innovation Earth Projects LLC &middot; Utah, USA</span>' +
        '<span class="footer__legal">Privacy Policy &amp; Terms of Service ship inside the app under Settings → About</span>' +
        '<span>Local-first, private by default.</span>' +
      '</div></footer>';

    var y = $('#footer-year');
    if (y) y.textContent = new Date().getFullYear();
  }

  /* ------------------------------------------------------------
     2. TOOLS GRID (from js/tools-data.js)
     ------------------------------------------------------------ */
  function renderTools() {
    var grid = $('#tools-grid');
    if (!grid || !window.LW_TOOLS) return;
    grid.innerHTML = window.LW_TOOLS.map(function (t, i) {
      return '' +
      '<article class="tool-card reveal" data-delay="' + ((i % 3) * 100 + 100) + '">' +
        '<div class="tool-card__top">' +
          '<span class="tool-card__icon tool-card__icon--' + t.color + '"><i class="fas ' + t.icon + '"></i></span>' +
          '<span class="status status--dev"><span class="dot dot--dev"></span> Dev build</span>' +
        '</div>' +
        '<h3 class="tool-card__title">' + t.name + '</h3>' +
        '<p class="tool-card__desc">' + t.desc + '</p>' +
        '<div class="tool-card__tags">' +
          t.tags.map(function (tag) { return '<span class="tool-card__tag">' + tag + '</span>'; }).join('') +
        '</div>' +
        '<div class="tool-card__footer">' +
          '<span class="tool-card__meta">v' + LW.version + ' · local-only</span>' +
          '<span class="tool-card__meta">Ship: in progress</span>' +
        '</div>' +
      '</article>';
    }).join('');

    var count = $('#tool-count');
    if (count) count.textContent = window.LW_TOOLS.length;
  }

  /* ------------------------------------------------------------
     3. DOWNLOAD CARD — placeholder detection + confirmation gate
     ------------------------------------------------------------ */
  /* Keep every download button's href in sync with the chosen source:
     local /download path while testing, GitHub Releases once the real
     (over-25MB) installer lives there. */
  function applyDownloadTargets() {
    var href = activeDownloadHref();
    $all('.dl-download').forEach(function (b) {
      b.setAttribute('href', href);
      if (b.dataset) b.dataset.href = href;
      // `download` attr only works same-origin; drop it for external URLs.
      if (LW.useExternalRelease) b.removeAttribute('download');
      else b.setAttribute('download', '');
      // Keep static button captions in sync with the package type (.exe / .zip)
      if (!b.classList.contains('is-disabled') && !b.disabled) b.innerHTML = btnLabel();
    });
    var fname = decodeURIComponent(href.split('/').pop());
    ['#dl-filename', '#dl-filename-table'].forEach(function (sel) {
      var el = $(sel);
      if (el) el.textContent = fname;
    });
  }

  function setDlState(state, extra) {
    var badge = $('#dl-state-badge');
    var note = $('#dl-note');
    var btn = $('#dl-btn');
    var heroNote = $('#hero-dl-note');
    if (!badge || !note || !btn) return;

    if (state === 'placeholder') {
      badge.className = 'status status--soon';
      badge.innerHTML = '<span class="dot dot--soon"></span> Placeholder file';
      note.innerHTML = 'The installer at <code>' + LW.downloadPath + '</code> is still the <strong>placeholder</strong>. ' +
        'Your real .exe is almost certainly bigger than GitHub\'s 25&nbsp;MB web-upload limit — don\'t commit it to this repo. ' +
        'Attach it to a <a href="' + releaseLatestUrl() + '" style="color:var(--teal);text-decoration:underline">GitHub Release</a> instead, ' +
        'then set <code>useExternalRelease: true</code> (and paste the asset URL) in <code>js/lianwang.js</code>. ' +
        'Until then, downloading stays disabled.';
      btn.disabled = true;
      btn.innerHTML = '<i class="fas fa-hourglass-half"></i> Real build coming soon';
      setDlDisabled(true);
      if (heroNote) heroNote.innerHTML =
        '<i class="fas fa-triangle-exclamation" style="color:var(--warn)"></i> ' +
        'The app is <strong>still in development</strong> and the package is a placeholder — ' +
        'downloading unlocks when the real build is published (see the Download section).';
    } else if (state === 'ready') {
      badge.className = 'status status--dev';
      badge.innerHTML = '<span class="pulse-dot"></span> Pre-release build';
      note.innerHTML = 'Pre-release build — expect bugs. Your feedback keeps Liánwǎng moving: ' +
        '<a href="mailto:InnovationEarthProjects@gmail.com" style="color:var(--teal);text-decoration:underline">email us</a>.' +
        (extra || '');
      btn.disabled = false;
      btn.innerHTML = btnLabel();
      setDlDisabled(false);
      applyDownloadTargets();
      if (heroNote) heroNote.innerHTML =
        '<i class="fas fa-triangle-exclamation" style="color:var(--warn)"></i> ' +
        'Pre-release build — the app is <strong>still in development</strong>. Installer: ' +
        '<code>' + (LW.useExternalRelease ? 'GitHub Releases' : LW.downloadPath) + '</code>' + (extra || '');
    } else if (state === 'external') {
      /* The Setup .exe lives on GitHub Releases (>25MB, never
         committed to this repo). It is the ONLY download option. */
      badge.className = 'status status--dev';
      badge.innerHTML = '<span class="pulse-dot"></span> Pre-release build · via GitHub Releases';
      var sizeEl0 = $('#dl-size');
      if (sizeEl0) sizeEl0.textContent = 'Hosted on GitHub Releases';
      var zipMode = isZipPackage();
      note.innerHTML = 'The <strong>' + pkgExt() + '</strong> is attached to a <strong>GitHub Release</strong> of this repo. ' +
        (zipMode
          ? 'Download it, right-click → <em>Extract All…</em>, then run <code>' + appExeName() + '</code> from the extracted folder — no installation needed. '
          : 'Run <code>' + decodeURIComponent((LW.releaseAssetName || activeDownloadHref()).split('/').pop()) + '</code> and follow the setup wizard — it installs Liánwǎng and adds a Start-menu shortcut. ') +
        'The button starts the download in the same tab. Pre-release build — expect bugs: ' +
        '<a href="mailto:InnovationEarthProjects@gmail.com" style="color:var(--teal);text-decoration:underline">email us</a>.';
      btn.disabled = false;
      btn.innerHTML = btnLabel();
      setDlDisabled(false);
      applyDownloadTargets();
      if (heroNote) heroNote.innerHTML =
        '<i class="fas fa-triangle-exclamation" style="color:var(--warn)"></i> ' +
        'Pre-release build — the app is <strong>still in development</strong>. ' +
        (zipMode
          ? 'Portable .zip hosted on GitHub Releases — extract and run, no installer.'
          : 'Setup .exe hosted on GitHub Releases — run the installer after downloading.');
    } else if (state === 'checking') {
      badge.className = 'status status--soon';
      badge.innerHTML = '<span class="dot dot--soon"></span> Checking…';
    }
  }

  function checkPlaceholder() {
    /* Installer hosted on GitHub Releases (>25MB): skip the local byte
       probe entirely — the file intentionally isn't in this repo. */
    if (LW.useExternalRelease) { setDlState('external'); return; }
    if (!('fetch' in window)) { setDlState('ready'); return; }
    setDlState('checking');
    // HEAD first (cheap), fall back to ranged GET for file:// or servers without HEAD.
    fetch(LW.downloadPath, { method: 'HEAD' })
      .then(function (r) {
        if (!r.ok) throw new Error('missing');
        var len = parseInt(r.headers.get('Content-Length') || '0', 10);
        if (len > 65536) { setDlReady(len); return; } // too big to be the stub
        return fetch(LW.downloadPath).then(function (rr) { return rr.arrayBuffer(); });
      })
      .then(function (buf) {
        if (buf === undefined) return;
        var bytes = new Uint8Array(buf.slice(0, 65536));
        var text = '';
        for (var i = 0; i < bytes.length; i++) text += String.fromCharCode(bytes[i]);
        if (text.indexOf(PLACEHOLDER_MARK) !== -1) setDlState('placeholder');
        else setDlReady(bytes.length);
      })
      .catch(function () {
        // file:// or blocked — try a ranged read via XHR, else stay neutral.
        try {
          var x = new XMLHttpRequest();
          x.open('GET', LW.downloadPath, false);
          x.overrideMimeType && x.overrideMimeType('text/plain; charset=x-user-defined');
          x.send();
          if (x.status === 200 || x.responseText) {
            var raw = x.responseText.slice(0, 65536), s = '';
            for (var j = 0; j < raw.length; j++) s += String.fromCharCode(raw.charCodeAt(j) & 0xff);
            if (s.indexOf(PLACEHOLDER_MARK) !== -1) { setDlState('placeholder'); return; }
            setDlReady(x.responseURL ? raw.length : 0);
            return;
          }
        } catch (e) { /* ignore */ }
        setDlState('ready');
      });
  }

  function setDlReady(sizeBytes) {
    setDlState('ready');
    var sizeEl = $('#dl-size');
    if (sizeEl && sizeBytes) {
      var mb = sizeBytes / (1024 * 1024);
      sizeEl.textContent = mb >= 1 ? mb.toFixed(1) + ' MB' : Math.round(sizeBytes / 1024) + ' KB';
    }
  }

  function setDlDisabled(disabled) {
    $all('.dl-download').forEach(function (b) {
      b.classList.toggle('is-disabled', disabled);
      b.setAttribute('aria-disabled', disabled ? 'true' : 'false');
      if (disabled) { b.dataset.href = b.getAttribute('href') || ''; b.removeAttribute('href'); }
      else { var h = b.dataset.href || activeDownloadHref(); b.setAttribute('href', h); }
    });
  }

  function wireDownloadButtons() {
    $all('.dl-download').forEach(function (btn) {
      if (!LW.useExternalRelease && btn.tagName === 'A') btn.setAttribute('download', '');
      btn.addEventListener('click', function (e) {
        if (btn.classList.contains('is-disabled') || btn.disabled) {
          e.preventDefault();
          return;
        }
        if (LW.inDevelopment && !btn.dataset.confirmed) {
          e.preventDefault();
          var ok = window.confirm(
            'Liánwǎng v' + LW.version + ' is still in DEVELOPMENT.\n\n' +
            'This is a pre-release build: features may change, and bugs are expected.\n\n' +
            'Continue with the download anyway?'
          );
          if (ok) {
            btn.dataset.confirmed = '1';
            btn.click();
            setTimeout(function () { delete btn.dataset.confirmed; }, 1500);
          }
        }
      });
    });
  }

  /* ------------------------------------------------------------
     4. MOTION — scroll reveals + progress bars
     ------------------------------------------------------------ */
  function initMotion() {
    var els = $all('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      els.forEach(function (el) { io.observe(el); });
    }

    // Active nav link on scroll
    var sections = ['tools', 'download', 'privacy', 'roadmap', 'faq']
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);
    function onScroll() {
      var pos = window.scrollY + 120;
      var current = null;
      sections.forEach(function (s) { if (s.offsetTop <= pos) current = s.id; });
      $all('[data-nav]').forEach(function (a) {
        a.classList.toggle('is-active', a.getAttribute('data-nav') === current);
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function animateProgressBars() {
    $all('.progress-fill[data-width]').forEach(function (bar) {
      var fill = function () { bar.style.width = bar.getAttribute('data-width') + '%'; };
      if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (es) {
          es.forEach(function (en) { if (en.isIntersecting) { fill(); io.disconnect(); } });
        }, { threshold: 0.4 });
        io.observe(bar);
      } else { fill(); }
    });
  }

  /* ------------------------------------------------------------
     5. BOOT
     ------------------------------------------------------------ */
  /* ------------------------------------------------------------
     5. SAME-TAB POLICY — nothing this page links to opens a new tab.
        Internal links scroll/navigate in place; the one external link
        (main website) navigates in the current tab.
     ------------------------------------------------------------ */
  function enforceSameTab() {
    // Belt & braces: strip any stray target=_blank that slipped into markup.
    $all('a[target="_blank"]').forEach(function (a) { a.removeAttribute('target'); });

    // External links (main website) -> current tab, with referrer hygiene.
    $all('a[data-external]').forEach(function (a) {
      a.removeAttribute('target');
      a.setAttribute('rel', 'noopener noreferrer');
      a.addEventListener('click', function (e) {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; // respect modifier clicks
        e.preventDefault();
        window.location.href = a.href;   // same tab, no new window
      });
    });
  }

  /* ------------------------------------------------------------
     4b. RELEASES CHECK — when hosting on GitHub Releases, verify the
         latest release actually carries the installer asset (same-tab
         policy is preserved: we never window.open anything).
     ------------------------------------------------------------ */
  function checkReleaseStatus() {
    if (!LW.useExternalRelease) return;
    var badge = $('#dl-state-badge');
    var api = 'https://api.github.com/repos/' + LW.releaseRepo + '/releases/latest';
    if (!('fetch' in window)) return;
    fetch(api)
      .then(function (r) {
        if (!r.ok) throw new Error('no release yet');
        return r.json();
      })
      .then(function (rel) {
        /* The setup .exe is the only package: prefer the configured
           asset name, then any .exe. (.zip fallback kept for legacy
           releases in case you re-attach one.) */
        var assets = rel.assets || [];
        var hit = assets.filter(function (a) { return a.name === LW.releaseAssetName; })[0] ||
                  assets.filter(function (a) { return /\.exe$/i.test(a.name); })[0] ||
                  assets.filter(function (a) { return /\.zip$/i.test(a.name); })[0];
        if (hit && !LW.releaseDownloadUrl) {
          LW.releaseDownloadUrl = hit.browser_download_url;
          applyDownloadTargets();
        }
        if (hit) setDlState('external'); // refresh labels now that we know exe vs zip
        if (badge) {
          badge.className = 'status status--dev';
          badge.innerHTML = '<span class="pulse-dot"></span> Pre-release build · Release ' +
            (rel.tag_name || '') + ' live' + (isZipPackage() ? ' (.zip)' : '');
        }
        var sizeEl = $('#dl-size');
        if (sizeEl && hit) {
          var bytes = hit.size;
          var mb = bytes / (1024 * 1024);
          sizeEl.textContent = (mb >= 1 ? mb.toFixed(1) + ' MB' : Math.max(1, Math.round(bytes / 1024)) + ' KB') +
            ' · via GitHub Releases';
        }
      })
      .catch(function () {
        if (badge) {
          badge.className = 'status status--soon';
          badge.innerHTML = '<span class="dot dot--soon"></span> Release not published yet';
        }
        var note = $('#dl-note');
        if (note) {
          note.innerHTML = 'The download button points at this repo\'s <strong>latest GitHub Release</strong>. ' +
            'No release with the setup <code>.exe</code> has been published yet — once you attach it to a ' +
            '<a href="' + releaseLatestUrl() + '" style="color:var(--teal);text-decoration:underline">Release</a>, ' +
            'this page links straight to the file and shows its size. Pre-release build — the app is still in development.';
        }
      });
  }

  document.addEventListener('DOMContentLoaded', function () {
    buildNav();
    buildFooter();
    renderTools();
    applyDownloadTargets();
    checkPlaceholder();
    checkReleaseStatus();
    wireDownloadButtons();
    initMotion();
    animateProgressBars();
    enforceSameTab();
  });
})();
