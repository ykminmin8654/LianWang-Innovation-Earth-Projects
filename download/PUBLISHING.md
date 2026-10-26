# Publishing a new build (Setup .exe = the only download option)

Liánwǎng ships as a single **Setup .exe** attached to a GitHub Release.
There is nothing in this folder — real builds (~140 MB) exceed GitHub's
25 MB per-file repo limit; Releases accept assets up to 2 GB.

Current release: tag `install` → `Lianwang-Setup-1.1.1.exe`
(https://github.com/ykminmin8654/LianWang-Innovation-Earth-Projects/releases/tag/install)
An earlier portable `.zip` release (tag `ZIP`) was retired and is no longer
linked from the site.

## Ship a new version

1. Build the installer, e.g. `Lianwang-Setup-1.1.2.exe`.
2. Repo → **Releases** → **Draft a new release**:
   - Tag: bump per release (e.g. `install-1.1.2` or reuse a naming scheme)
   - Tick **pre-release** while the app is in development
   - Drag the .exe into "attach binaries" → **Publish release**
3. Update `version` / `releaseTagName` / `releaseAssetName` /
   `releaseDownloadUrl` in `js/lianwang.js` CONFIG and push — or leave
   `releaseDownloadUrl` empty and the site auto-detects the newest
   release's `.exe` via
   `api.github.com/repos/ykminmin8654/LianWang-Innovation-Earth-Projects/releases/latest`,
   links both download buttons straight at the asset and shows its real
   size automatically.

## Optional config (`js/lianwang.js`, CONFIG block)

| Key | Meaning |
|---|---|
| `useExternalRelease` | keep `true` — downloads come from Releases |
| `releaseAssetName` | exact .exe filename; helps pick the right asset if a release has several |
| `releaseDownloadUrl` | paste the asset URL to pin one exact file (otherwise latest release wins) |
| `version` | shown in nav/buttons — bump it with each release |
| `inDevelopment` | master switch for all "still in development" banners; set `false` at launch |

If you rename the .exe, update `releaseAssetName` (or leave it — the site
still auto-finds any `.exe` in the latest release).

## Before the first release is published

Buttons point at `/releases/latest`; once a release exists GitHub redirects
to it. Until then the page badge reads "Release not published yet" and the
note explains how to publish — no broken file links inside the site itself.

## Why not commit the .exe to the repo?

* Web editor blocks files > 25 MB; git hard-blocks > 100 MB.
* Git LFS would work but has ~1 GB/month free quota and bloats clones.
* Releases give per-asset stats, changelogs and a stable canonical URL.

## Note on SmartScreen

The installer is unsigned while the app is in development, so Windows may
warn before running it. That's expected — app signing is on the roadmap.
Ticking "pre-release" on the release also matches the site's messaging.
