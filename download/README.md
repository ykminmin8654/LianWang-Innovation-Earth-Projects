# Placeholder installer

`Lianwang-Setup-v1.1.0.exe` in this folder is a **placeholder binary**, not the app.

## How to publish your real build
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
