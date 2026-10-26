# Liánwǎng v1.1.0 — Complete User Guide

**Version:** 1.1.0  
**App type:** Local-first Windows desktop workspace  
**Data location:** `%APPDATA%\Liánwǎng\users\<your-computer-user>\`

Liánwǎng is a desktop workspace for tasks, notes, files, media and everyday
utilities. It has no account system and no cloud account. The workspace belongs
to the Windows user account that runs the app.

> **Drive is temporarily hidden in v1.1.0.** Drive code and data are retained,
> but Drive is not shown in the sidebar, Settings, the setup wizard, Home quick
> actions or the Help guide. Everything below describes the 15 visible tools in
> v1.1.0.

---

## Contents

1. [First launch and setup](#1-first-launch-and-setup)
2. [Understanding the main window](#2-understanding-the-main-window)
3. [Home](#3-home)
4. [Tasks](#4-tasks)
5. [Calendar](#5-calendar)
6. [Notes](#6-notes)
7. [Video Editor](#7-video-editor)
8. [Watermark Adder](#8-watermark-adder)
9. [Watermark Remover](#9-watermark-remover)
10. [File Editor](#10-file-editor)
11. [Code Editor](#11-code-editor)
12. [Timer](#12-timer)
13. [Calculator](#13-calculator)
14. [Password Generator](#14-password-generator)
15. [Unit Converter](#15-unit-converter)
16. [Color Picker](#16-color-picker)
17. [Formatter](#17-formatter)
18. [Settings](#18-settings)
19. [Themes and accessibility](#19-themes-and-accessibility)
20. [Tray and app lifecycle](#20-tray-and-app-lifecycle)
21. [Keyboard shortcuts](#21-keyboard-shortcuts)
22. [Data, backups and privacy](#22-data-backups-and-privacy)
23. [Troubleshooting](#23-troubleshooting)

---

## 1. First launch and setup

The first launch opens the setup wizard.

### Welcome
The welcome page introduces the local-first workspace and asks for:

- **Display name** — the name shown in the sidebar and Home greeting.
- **Terms of Service and Privacy Policy consent** — the required checkbox.
  Click either document name to read it in the legal viewer.

Choose **Set up my workspace** to continue, or **Use defaults** to accept the
default setup. You cannot continue without checking legal consent.

### Preset
Choose a starting layout:

- **Essential** — Home and Tasks.
- **Focus** — Home, Tasks, Calendar, Notes and Timer.
- **Creator** — Home, Tasks, Calendar, Video Editor, Watermark Adder, Watermark
  Remover, File Editor, Code Editor and Color Picker.
- **Image & Media** — Home, Watermark Adder, Watermark Remover, Video Editor
  and Color Picker.
- **Utilities** — Home, Tasks, Calendar, Calculator, Password Generator,
  Unit Converter, Color Picker and Formatter.
- **All Tools** — every available tool except the hidden Drive tool.

A preset is only a starting point. You can change it later.

### Personalize
Toggle individual tools on or off. The count badge shows how many tools are
currently selected. Use **Select all** or **Clear** as a shortcut.

### Arrange
Drag the handle beside each selected tool to set its sidebar order. Choose how
to arrange the sidebar, then finish setup.

### Done
The final page summarizes the selected tools. Choose **Open workspace** to enter
the app.

To run the wizard again: **Settings → Workspace → Run setup wizard again**.
Your existing display name and legal consent are remembered.

---

## 2. Understanding the main window

- **Sidebar** — the active tools. Click a tool to switch to it.
- **Active tool highlight** — the current tool has a highlighted background.
- **Resize handle** — drag the right edge of the sidebar to resize it.
- **Settings** — the gear at the bottom of the sidebar opens the settings
  overlay. The settings window includes its own Close button.
- **Tray** — closing the window hides it to the Windows notification area rather
  than quitting. See [Tray and app lifecycle](#20-tray-and-app-lifecycle).

---

## 3. Home

Home is a dashboard that reflects the tools currently enabled in the sidebar.

### Active tools
The **Your active tools** section shows a card for each visible tool. Click a
card to open that tool. If you hide a tool in Settings, its card disappears.

### Task statistics
When Tasks is enabled, Home shows:

- Total Tasks
- In Progress
- Overdue
- Completed

Click a statistic card to open the task board filtered to that category.

### Quick actions
- **New Task** — opens the task board with the create-task dialog.
- **Upload File** — this Drive action is hidden in v1.1.0.
- **Add Event** — opens Calendar.

Quick actions for disabled tools are hidden automatically.

### Upcoming tasks and schedule
- **Upcoming Tasks** shows upcoming task work with priority and due date.
- **Today's Schedule** shows calendar entries for today.

These cards are hidden when the corresponding tool is not active.

### Recent activity
The activity feed lists recent workspace activity when Tasks is active.

### Greeting
The greeting uses your saved display name and the current date format from
Settings.

---

## 4. Tasks

Tasks is a three-column task board.

### Columns
- **Not Started** — work that has not begun.
- **In Progress** — work currently underway.
- **Done** — completed work.

Drag a task card between columns to change its status. Each column shows its
task count.

### Creating a task
Select **New Task**, or use the plus button in a column. Enter the task details:

- Title and description
- Priority: High, Medium or Low
- Due date
- Assignee and tags, where available
- Subtasks
- Comments

Save the task to add it to the board.

### Editing a task
Click a task card to open its detail view. Change the title, description,
priority, due date, status, subtasks or comments.

### Subtasks and comments
Subtasks can be checked off individually. The parent task’s progress updates as
subtasks are completed. Comments are stored with the task.

### Searching and filtering
Open the filter bar to search by text and filter by:

- Priority
- Assignee
- Tag
- Date range: Today, This Week, This Month or Overdue

Choose **Clear** to remove filters.

### Archive and activity
- **Archive** moves completed tasks out of the active board.
- **Activity log** shows the task history.
- Export the task list as JSON or CSV using the download buttons.

### Calendar view
The **Calendar** toggle switches the task board into a calendar view of tasks.

---

## 5. Calendar

Calendar shows months, holidays, birthdays and key dates.

### Navigation
- Use the left and right arrows to change month.
- Choose **Today** to return to the current month.
- Select a date to see its details in the side panel.

### Region and holidays
The region chip shows the current holiday region. Change it in
**Settings → General → Region**. The calendar reloads the matching holiday set.

### Birthdays
Use **Add birthday**, enter a name, and save it. Birthdays appear in the selected
day’s details and in the upcoming birthdays list. Use the cancel button to close
the form without saving.

### Selected day
The selected-day panel shows:

- The date
- Birthdays
- Holidays
- Other key dates for that day/month

Calendar dates are local to the app and are included in workspace backups.

---

## 6. Notes

Notes is a local notes and drawing workspace.

### Creating and finding notes
- **New Note** creates a text note.
- **Search** searches note titles and content.
- Filter the list by **All**, **Favorites**, **Archived** or **Trash**.

### Editing
The note editor supports basic rich text formatting:

- Bold
- Italic
- Underline

Notes save automatically as you type. The note header shows word count and
last-edited information.

### Drawing notes
Create a drawing note to use the drawing canvas. Adjust the drawing color,
brush size and eraser from the drawing toolbar.

### Organizing
- Favorite a note to keep it at hand.
- Archive notes you are not actively using.
- Move notes to Trash instead of deleting immediately.
- Restore from Trash, or permanently delete items from Trash.
- Empty the Trash when you want to remove all deleted notes.

---

## 7. Video Editor

Video Editor is a local multi-clip editor.

### Import media
Choose **Import** or **Add media**, or drag video files into the Media panel.
Imported clips appear in the media list.

### Timeline
Add clips to the timeline and arrange them in playback order. Use:

- **Play/Pause** and **Stop**
- **Split** at the playhead
- **Duplicate** the selected clip
- **Delete** the selected clip
- **Snap** to align clips and the playhead
- **Undo** and **Redo**

The preview shows the current timeline frame. Drag the timeline playhead to
scrub through the project.

### Export
After building the timeline, choose **Export**. Export runs locally. The output
is written to the location chosen in the save dialog; the app’s default export
folder is under your Documents folder.

---

## 8. Watermark Adder

Watermark Adder places text watermarks on images locally.

### Open an image
Choose **Open image** or drag a PNG, JPG, WebP or GIF into the drop area.

### Text and styling
Enter watermark text, then adjust:

- **Size** — from small text to large display text
- **Opacity** — make the watermark subtle or strong
- **Color** — any text color
- **Angle** — rotate from -45° to +45°
- **Margin** — distance from the image edge

### Style presets
Use the quick style buttons:

- **Corner**
- **Subtle**
- **Bold**
- **Tiled**

### Position
Choose one of the nine anchors: top-left, top-center, top-right, middle-left,
center, middle-right, bottom-left, bottom-center or bottom-right.

### Visibility over busy images
- **Contrast plate** adds a translucent plate behind the text.
- **Outline** adds an outline around the text.
- **Tile** repeats the watermark across the image.

The layout preview updates immediately. Use **Fit** to fit the full image in
the preview area.

### Export
Choose PNG, JPEG or WebP. JPEG quality is adjustable. Select **Export** to save
the watermarked copy. The original image is not overwritten.

---

## 9. Watermark Remover

Watermark Remover heals areas you paint over, locally and without uploading.

### Open an image
Choose **Open image** or drop a supported image into the drop area.

### Paint the mask
- Adjust **Brush size**.
- Paint over the watermark. Paint slightly beyond its edges so anti-aliased
  pixels are included.
- Use **Undo** to remove the last stroke.
- Use **Clear mask** to start over.
- Toggle the mask overlay when you need to inspect the painted area.

### Edge expansion
**Edge expansion** grows the painted mask by a few pixels. Raise it when a faint
outline or text edge remains after healing.

### Healing method
- **Texture-aware (best)** — matches nearby textures and patterns. Recommended
  for photographs, fabric, foliage, patterns and complex backgrounds.
- **Smooth fill (fast)** — fills from surrounding color and is best for simple
  gradients or flat backgrounds.

**Edge smoothing** softens only the boundary of the healed area. A value of `0`
preserves the most texture; raise it if seams are visible.

### Heal and compare
Choose **Remove watermark** / **Heal**. When processing finishes:

- Use **Before/After** to compare results.
- Export the healed image as PNG, JPEG or WebP.

For best results, paint a mask that covers the entire watermark plus a small
margin. Watermarks placed directly over important text cannot reconstruct the
hidden text; use an image where the underlying content is visible around the
watermark.

---

## 10. File Editor

File Editor opens documents for viewing and editing.

### Open
Use **Open** (`Ctrl+O`) or the empty-state Open button. Supported text documents
open in the editor; PDF documents open in the PDF viewer.

### Editing and saving
- Type directly in the document.
- Choose **Save** (`Ctrl+S`) to write changes back to the original file.
- Choose **Export** to export a PDF copy.

### View controls
- Zoom in and out
- Reset zoom
- Fullscreen
- Print

The File Editor header is intentionally minimal: file name and metadata appear
in the status area, while the document gets the full window.

---

## 11. Code Editor

Code Editor provides a local editing environment with an Explorer and tabs.

### Open a workspace
- **Open Folder** opens a folder and shows its file tree.
- **Open Files** opens individual files.
- **New File** creates a new file.
- **Refresh** reloads the Explorer.

### Editing
Files open in tabs. Edit with syntax highlighting, save with the standard
keyboard shortcuts, and switch between open files using the tabs.

The activity bar provides Explorer, Search, Source Control and Extensions views.
Use them as local workspace panels; the editor does not connect to a remote
repository or cloud account.

---

## 12. Timer

Timer includes a focus timer and a stopwatch.

### Focus timer
- Start, pause, reset and skip the current interval.
- Configure focus, short-break and long-break durations.
- Set the number of focus sessions before a long break.
- Enable auto-start for breaks and the next focus session.

The circular progress ring and time display show the current interval.

### Stopwatch
Open the stopwatch view to time open-ended sessions. Record sessions and review
timing history.

### Extras
- **History** shows completed sessions.
- **Statistics** summarizes your focus activity.
- **Pop out** opens a compact timer widget.
- Sound and desktop notifications are optional and can be configured in Timer
  settings or in **Settings → General**.

---

## 13. Calculator

Calculator combines standard calculation, scientific notation, CAS operations
and graphing.

### Input
Use the on-screen keypad or type expressions. The display can show the current
expression and result. Switch angle mode between degrees and radians where
available.

### CAS functions
The function row provides:

- Derivative
- Integral
- Solve
- Factor
- Expand
- Simplify
- Limit
- Square root
- Pi

### Panels
- **Graph** — enter a function such as `x^2` and plot it. Zoom controls adjust
  the graph view.
- **Solve** — use the solving/CAS panel for equations and expressions.
- **History** — review previous calculations.

---

## 14. Password Generator

Password Generator creates passwords locally and checks password strength.

### Generate
Choose:

- Length
- Uppercase letters
- Lowercase letters
- Numbers
- Symbols
- Exclude ambiguous characters, where shown

Choose **Generate** to create a new password. Use **Copy** to place it on the
clipboard and **Regenerate** for another value.

### Checker
Open the **Checker** tab and enter a password to see its strength and any
feedback. The password is checked locally.

### History
The **History** tab lists passwords generated during the current/local history
workflow. Clear or manage the history as needed.

Passwords are not uploaded. Store important passwords in a dedicated password
manager rather than relying on browser or app history alone.

---

## 15. Unit Converter

Unit Converter supports:

- Length
- Mass
- Volume
- Area
- Temperature
- Speed
- Time
- Data

Choose a category, enter a value, and select the source and target units. The
converted result updates immediately. Use the preset value buttons (`1`, `10`,
`100`, `1000`, `0.5`) for quick conversions, and swap units where available.

---

## 16. Color Picker

Color Picker works with HEX, RGB and HSL values.

- Pick a color visually or enter a HEX/RGB/HSL value.
- Adjust hue, saturation and lightness with the sliders.
- Copy the color value in the format you need.
- Use the palette and harmony tools to build related colors.

All color work happens locally; no color service is contacted.

---

## 17. Formatter

Formatter validates, formats and converts JSON and YAML.

### Modes
- **JSON**
- **YAML**

### Actions
- **Format** — pretty-print the document
- **Minify** — compact the document
- **Validate** — check syntax and report errors
- **Copy** — copy the result
- **Clear** — clear the editor
- **Download** — save the result as a file
- **Convert JSON to YAML** where available

Formatting is useful before saving configuration files, committing code, or
sharing structured data.

---

## 18. Settings

Open Settings from the sidebar gear or the tray menu.

### Workspace
- Apply a preset.
- Toggle sidebar tools on or off.
- Drag to reorder tools.
- Reset the order.
- **Run setup wizard again** to revisit your name, legal consent, preset and
  sidebar choices.

### General
- Display name
- Region (holiday calendar)
- Date format
- Notifications and sound preferences

### Appearance
- **Theme:** Light, Dark, Midnight, Ocean, Forest, Sunset, Rose or System
- **Font size:** Small, Medium, Large or Extra Large
- **Compact mode** for tighter spacing
- **Motion:** reduced or full animations

Theme changes apply immediately across the app and every open tool.

### Data & Backup
- View the current user data folder.
- Open the folder in File Explorer.
- Refresh a portable snapshot.
- Enable or disable automatic backups.
- Inspect storage metadata.

### Help
A built-in guide covering Home, Tasks, Calendar, Notes and editors, Watermark
tools, utilities, data backups and troubleshooting.

### About
- App version
- Storage and privacy summary
- **Privacy Policy** and **Terms of Service** links
- Local data statement

### Legal documents
The Privacy Policy and Terms of Service can be reopened at any time from
**Settings → About**. They open in a compact, scrollable viewer.

---

## 19. Themes and accessibility

Liánwǎng includes:

- **Light** — clean and bright
- **Dark** — low-light neutral
- **Midnight** — indigo night
- **Ocean** — blue workspace
- **Forest** — green workspace
- **Sunset** — warm orange
- **Rose** — editorial pink
- **System** — follows Windows light/dark mode

v1.1.0 includes a readability pass across all themes:

- Stronger muted-text contrast
- Readable primary text on dark surfaces
- Dark task-board headers
- High-contrast status chips
- Adjusted dark-mode sidebar and button text

If text still feels small, use **Appearance → Font size** or enable **Compact
mode** to change the amount of content shown.

---

## 20. Tray and app lifecycle

Liánwǎng runs as a single desktop instance.

- Closing the window with the **X** hides Liánwǎng to the Windows notification
  area instead of quitting.
- Click the Liánwǎng tray icon once to reopen the window.
- Double-clicking the tray icon also reopens it.
- The tray menu provides **Open Liánwǎng**, **Settings** and **Quit**.
- Launching Liánwǎng again while it is running brings the existing window
  forward instead of opening a second copy.
- Choose **Quit** from the tray menu to stop the app completely.

The local API server starts with the app. If port `3000` is already in use by
another program, Liánwǎng automatically selects the next available local port.

---

## 21. Keyboard shortcuts

### Global / Home
| Shortcut | Action |
| --- | --- |
| `Ctrl+N` | New task |
| `Ctrl+E` | Open Calendar |
| `Ctrl+Shift+T` | Open Tasks |

### Notes
| Shortcut | Action |
| --- | --- |
| `Ctrl+N` | New note |
| `Ctrl+F` | Search notes |
| `Ctrl+B` | Bold |
| `Ctrl+I` | Italic |
| `Ctrl+U` | Underline |

### File Editor
| Shortcut | Action |
| --- | --- |
| `Ctrl+O` | Open file |
| `Ctrl+S` | Save |
| `Ctrl+Shift+E` | Export |
| `Ctrl++` / `Ctrl+-` | Zoom in / out |
| `Ctrl+0` | Reset zoom |
| `F11` | Fullscreen |
| `Ctrl+P` | Print |

### Video Editor
| Shortcut | Action |
| --- | --- |
| `Space` | Play / pause |
| `S` | Split at playhead |
| `Delete` | Delete selection |
| `Ctrl+Z` / `Ctrl+Y` | Undo / redo |

### Formatter
| Shortcut | Action |
| --- | --- |
| `Ctrl+Shift+F` | Format |
| `Ctrl+Shift+M` | Minify |
| `Ctrl+Shift+V` | Validate |
| `Ctrl+Shift+C` | Copy |
| `Ctrl+Shift+X` | Clear |
| `Ctrl+Shift+D` | Download |
| `Ctrl+Shift+K` | JSON to YAML |

Shortcuts are scoped to the focused tool; they do not override system-wide
shortcuts outside Liánwǎng.

---

## 22. Data, backups and privacy

### Where data lives
Liánwǎng stores workspace data as readable JSON in:

```text
%APPDATA%\Liánwǎng\users\<your-computer-user>\
```

Typical files include:

- `data.json`
- `profile.json`
- `notes.json`
- `tasks.json`
- `files.json`
- `settings.json`
- `snapshot.json`
- `backups/`
- `exports/`

Open the folder from **Settings → Data & Backup → User Data Folder**.

### Backups
- Automatic backups can be enabled in Data & Backup.
- **Refresh snapshot** creates a portable copy of the current workspace.
- Backups and snapshots live inside your local user folder.
- Copy the folder to an external drive for an off-device backup.

### Privacy
Liánwǎng has:

- No account or login
- No analytics or tracking
- No cloud sync
- No remote processing of notes, tasks, files or images

Images and video are processed locally. The interface may load icon fonts from
a CDN, but workspace content is not included in those requests. See the in-app
Privacy Policy for the full statement.

### Security
The local files are protected by your Windows user account permissions.
Liánwǎng does not add its own encryption. Use full-disk encryption and Windows
account security if you need stronger protection.

---

## 23. Troubleshooting

### A tool is missing from the sidebar
Open **Settings → Workspace** and switch it on. Drive is intentionally hidden in
v1.1.0 and cannot be enabled from the UI.

### Data appears missing
Check **Settings → Data & Backup** for the user folder path. Make sure the
folder is readable. Refresh the snapshot to rewrite the portable copy.

### The app is in the tray
Click the Liánwǎng tray icon once. If the app is hidden, closing and relaunching
it will also restore the existing window. Use the tray menu’s **Quit** action to
exit fully.

### A second copy will not open
This is intentional. Liánwǎng is single-instance and brings the existing window
forward. Close the existing app or use the tray menu before starting a new copy.

### Theme text looks wrong
Choose another theme in **Settings → Appearance**. v1.1.0 includes contrast
fixes for all included themes. You can also increase **Font size**.

### Export is slow or large
For photographs, use JPEG or WebP for smaller files. PNG is better for sharp
graphics and transparency.

### Video export does not start
Confirm FFmpeg is available in the packaged app, then try a shorter clip or a
different output folder. Keep enough free disk space for the export.

### Image healing leaves a mark
Increase **Edge expansion**, repaint the full watermark including anti-aliased
edges, and use **Texture-aware** for patterned backgrounds. For watermarks over
important text, the hidden text cannot be reconstructed.

### Re-run setup
Go to **Settings → Workspace → Run setup wizard again**.

---

## Quick tool reference

| Tool | Purpose |
| --- | --- |
| Home | Dashboard, active tools, tasks and schedule |
| Tasks | Task board, subtasks, comments, filters, export |
| Calendar | Holidays, birthdays and key dates |
| Notes | Rich text and drawing notes with Trash |
| Video Editor | Local multi-clip editing and export |
| Watermark Adder | Add styled text watermarks to images |
| Watermark Remover | Heal image watermarks locally |
| File Editor | Open, edit, save, print and export documents |
| Code Editor | Local file/folder editing with Explorer and tabs |
| Timer | Focus timer, stopwatch, sessions and statistics |
| Calculator | Standard, scientific, CAS and graphing |
| Password Generator | Generate, copy and check passwords |
| Unit Converter | Length, mass, volume, area, temperature, speed, time and data |
| Color Picker | HEX/RGB/HSL colors and harmonies |
| Formatter | Format, validate and convert JSON/YAML |
| Drive | Hidden in v1.1.0; code and data retained |

---

## Legal

The current Terms of Service and Privacy Policy are available in the app under
**Settings → About** and during setup. They describe local storage, image
processing, no telemetry, backup responsibilities, acceptable use and the
limits of the software warranty.

**Effective policy version:** 2026-10-24

---

*Liánwǎng v1.1.0 — local-first, private by default.*
