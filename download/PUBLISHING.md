# Publishing a new build (portable .zip = the only download option)

Liánwǎng ships as a single **portable .zip** attached to a GitHub Release.
There is no Setup.exe and nothing lives in this folder — real builds exceed
GitHub's 25 MB per-file repo limit, Releases accept assets up to 2 GB.

## Ship a new version

1. Build the portable app folder (`Lianwang.exe` + data files) and zip it,
   e.g. `Lianwang-v1.1.0-Web-Installer.zip`.
2. Repo → **Releases** → **Draft a new release**:
   - Tag: `v1.1.0` (bump per release)
   - Tick **pre-release** while the app is in development
   - Drag the zip into "attach binaries" → **Publish release**
3. That's it for hosting. The site queries
   `api.github.com/repos/ykminmin8654/LianWang-Innovation-Earth-Projects/releases/latest`,
   finds the newest release's `.zip`, links both download buttons straight at
   the asset and shows its real size automatically.

## Optional config (`js/lianwang.js`, CONFIG block)

| Key | Meaning |
|---|---|
| `useExternalRelease` | keep `true` — downloads come from Releases |
| `releaseAssetName` | exact zip filename; helps pick the right asset if a release has several |
| `releaseDownloadUrl` | paste the asset URL to pin one exact file (otherwise latest release wins) |
| `version` | shown in nav/buttons — bump it with each release |
| `inDevelopment` | master switch for all "still in development" banners; set `false` at launch |

If you rename the zip, update `releaseAssetName` (or leave it — the site still
auto-finds any `.zip` in the latest release).

## Before the first release is published

Buttons point at `/releases/latest`; once a release exists GitHub redirects to
it. Until then the page badge reads "Release not published yet" and the note
explains how to publish — no broken file links inside the site itself.

## Why not commit the zip to the repo?

* Web editor blocks files > 25 MB; git hard-blocks > 100 MB.
* Git LFS would work but has ~1 GB/month free quota and bloats clones.
* Releases give per-asset stats, changelogs and a stable canonical URL.
