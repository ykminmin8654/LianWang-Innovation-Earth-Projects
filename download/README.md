# Placeholder installer

`Lianwang-Setup-v1.1.0.exe` in this folder is a **placeholder binary**, not the app.

**Your real installer is probably bigger than 25 MB and GitHub's web upload will
reject it — that's normal.** See **[PUBLISHING.md](PUBLISHING.md)** for the fix:
attach the .exe to a **GitHub Release** (assets up to 2 GB) and set
`useExternalRelease: true` in `js/lianwang.js`. The download buttons then serve
the Release asset directly; nothing large ever gets committed to this repo.

## How to publish your real build (short version)
1. Repo → Releases → Draft a new release → tag `v1.1.0` → drag the .exe in → Publish.
2. In `js/lianwang.js`: `useExternalRelease: true` (optionally paste the asset URL
   into `releaseDownloadUrl`; otherwise the site auto-detects the latest .exe).
3. Push. Buttons activate automatically, still same-tab.

## If your installer happens to be under 25 MB
1. Copy your built installer over this file (keep the name), e.g.
   `copy Lianwang-Setup-1.1.0.exe download\Lianwang-Setup-v1.1.0.exe`
   - If you rename it, update both `href="download/..."` in `index.html` and
     `downloadPath` in `js/lianwang.js`.
2. Done — no HTML edits needed. The page reads the file on load: as long as it still
   contains the marker string `LIANWANG-PLACEHOLDER-BINARY`, the download buttons stay
   disabled and show "Placeholder file". Once replaced, they activate automatically.

## Notes
- The file has a valid PE/MZ header so browsers treat it as an executable download.
- To flip the site out of "in development" mode at launch, set `inDevelopment: false`
  in `js/lianwang.js` (removes the ribbon, banner badges and the confirm dialog).
