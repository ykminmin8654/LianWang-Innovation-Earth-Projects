# Publishing your installer (it's bigger than 25 MB — that's fine)

GitHub blocks files over **25 MB** uploaded through the web "Add files" UI (and
over **100 MB** even via git). A real Windows installer is almost always larger,
so **do not commit it into this repo**. Host it as a **GitHub Release asset**
instead — Releases allow files up to **2 GB** and are free for public repos.

## Option A — GitHub Releases (recommended, no size headaches)

1. Go to your repo → **Releases** → **Draft a new release**.
2. Create tag `v1.1.0` (or your build's version).
3. Drag `Lianwang-Setup-v1.1.0.exe` into the
   *"Attach binaries by dropping them here"* box → **Publish release**.
4. Open `js/lianwang.js` and edit the CONFIG block at the top:
   ```js
   useExternalRelease: true,   // <-- flip this
   releaseDownloadUrl: '',     // optional: paste the asset URL
                               // https://github.com/ykminmin8654/LianWang-Innovation-Earth-Projects/releases/download/v1.1.0/Lianwang-Setup-v1.1.0.exe
   ```
   If you leave `releaseDownloadUrl` empty, the site queries the GitHub API and
   auto-links the `.exe` attached to your **latest** release.
5. Commit/push that one-line change. Done — every download button now serves
   the Release asset in the same tab (no pop-ups), and the badge shows
   "Pre-release build · via GitHub Releases".

The tiny placeholder `Lianwang-Setup-v1.1.0.exe` in this folder can stay (it's
harmless, ~4 KB) or be deleted once `useExternalRelease: true`.

## Option B — keep it inside the repo (only if under 25 MB)

Copy your built installer over `download/Lianwang-Setup-v1.1.0.exe` (keep the
name). The page reads the file on load: as long as it still contains the marker
string `LIANWANG-PLACEHOLDER-BINARY`, download buttons stay disabled; once
replaced they activate automatically. If you rename it, update both
`href="download/..."` in `index.html` and `downloadPath` in `js/lianwang.js`.

## Option C — Git LFS (works, but usually worse)

`git lfs track "*.exe"` lets big files live in the repo, but GitHub gives only
~1 GB free storage/bandwidth per month for LFS and silently throttles after
that. Releases have no such quota for public repos — prefer Option A.

## Notes
- The placeholder has a valid PE/MZ header so browsers treat it as an executable download.
- To flip the site out of "in development" mode at launch, set `inDevelopment: false`
  in `js/lianwang.js` (removes the ribbon, banner badges and the confirm dialog).
- Same-tab policy: all links (including the Releases link) navigate in the current
  tab; nothing uses `target="_blank"`.
