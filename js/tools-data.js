/* ============================================================
   LIÁNWǑNG — tool data (source: README.md user guide, v1.1.0)
   Single source of truth for the tools grid + quick reference.
   ============================================================ */

window.LW_TOOLS = [
  {
    name: "Home",
    icon: "fa-house",
    color: "teal",
    desc: "Dashboard with active-tool cards, task statistics, quick actions, upcoming work and today's schedule.",
    tags: ["Dashboard", "Overview"]
  },
  {
    name: "Tasks",
    icon: "fa-list-check",
    color: "cyan",
    desc: "Three-column board — Not Started, In Progress, Done. Drag cards, add subtasks and comments, filter, archive and export JSON/CSV.",
    tags: ["Board", "Subtasks", "Export"]
  },
  {
    name: "Calendar",
    icon: "fa-calendar-days",
    color: "blue",
    desc: "Months, regional holidays, birthdays and key dates with a selected-day detail panel. Local to the app.",
    tags: ["Holidays", "Birthdays"]
  },
  {
    name: "Notes",
    icon: "fa-note-sticky",
    color: "lime",
    desc: "Rich text and drawing notes with autosave, favorites, archive, search and a Trash you can restore from.",
    tags: ["Rich text", "Drawing", "Autosave"]
  },
  {
    name: "Video Editor",
    icon: "fa-film",
    color: "warn",
    desc: "Local multi-clip editing: import media, arrange the timeline, split at the playhead, snap, undo/redo and export.",
    tags: ["Timeline", "Split", "Export"]
  },
  {
    name: "Watermark Adder",
    icon: "fa-stamp",
    color: "teal",
    desc: "Text watermarks on images with size, opacity, color, angle and margin controls, nine anchors and Corner / Subtle / Bold / Tiled presets.",
    tags: ["PNG", "JPEG", "WebP"]
  },
  {
    name: "Watermark Remover",
    icon: "fa-wand-magic-sparkles",
    color: "cyan",
    desc: "Paint a mask and heal it locally — texture-aware or smooth fill, edge expansion, before/after compare. Nothing is uploaded.",
    tags: ["Healing", "Mask brush"]
  },
  {
    name: "File Editor",
    icon: "fa-file-lines",
    color: "blue",
    desc: "Open, edit, save, print and export documents; PDFs open in the built-in viewer with zoom and fullscreen.",
    tags: ["Docs", "PDF viewer"]
  },
  {
    name: "Code Editor",
    icon: "fa-code",
    color: "lime",
    desc: "Local editing with an Explorer file tree, tabs and syntax highlighting. Search, source control and extensions panels included.",
    tags: ["Explorer", "Tabs"]
  },
  {
    name: "Timer",
    icon: "fa-stopwatch",
    color: "warn",
    desc: "Focus timer with configurable intervals, a stopwatch, session history, statistics and a pop-out widget.",
    tags: ["Pomodoro", "Stopwatch"]
  },
  {
    name: "Calculator",
    icon: "fa-calculator",
    color: "teal",
    desc: "Standard keypad plus scientific, CAS (derivative, integral, solve, factor, limit) and function graphing.",
    tags: ["Scientific", "CAS", "Graph"]
  },
  {
    name: "Password Generator",
    icon: "fa-key",
    color: "cyan",
    desc: "Generate passwords locally with length and character rules, check strength and keep a local history. Never uploaded.",
    tags: ["Checker", "Local-only"]
  },
  {
    name: "Unit Converter",
    icon: "fa-ruler-combined",
    color: "blue",
    desc: "Length, mass, volume, area, temperature, speed, time and data — instant results with swap and preset values.",
    tags: ["8 categories"]
  },
  {
    name: "Color Picker",
    icon: "fa-palette",
    color: "lime",
    desc: "HEX, RGB and HSL with sliders, copy in any format, palettes and harmony tools. All work happens locally.",
    tags: ["HEX/RGB/HSL", "Harmonies"]
  },
  {
    name: "Formatter",
    icon: "fa-code-compare",
    color: "warn",
    desc: "Format, minify, validate and convert JSON and YAML. Copy, clear, download — with shortcuts for every action.",
    tags: ["JSON", "YAML", "Validate"]
  }
];

/* Presets offered by the setup wizard (README §1) */
window.LW_PRESETS = [
  { name: "Essential",   tools: "Home, Tasks" },
  { name: "Focus",       tools: "Home, Tasks, Calendar, Notes, Timer" },
  { name: "Creator",     tools: "9 tools incl. Video Editor & editors" },
  { name: "Image & Media", tools: "Watermark tools, Video Editor, Color Picker" },
  { name: "Utilities",   tools: "Calculator, Passwords, Units, Colors, Formatter" },
  { name: "All Tools",   tools: "Everything except the hidden Drive" }
];
