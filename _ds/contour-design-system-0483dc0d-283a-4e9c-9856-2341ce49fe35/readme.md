# Contour Design System

> Reshaping education, one student at a time.

A student-centred Australian education brand. One master brand, three services:
**Contour Education** (core, long-term academic development · VCE),
**Contour Medprep** (competitive medical pathways · UCAT), and
**Contour Testprep** (specific entry exams · short & intensive).
Delivered across web, LMS, print and social.

The brand voice is **warm, confident, expert and clear — a trusted older sibling.**
Modern and confident; never corporate, never childish.

---

## Sources

This system was built from the supplied brand materials:

- **`uploads/Contour_Brand_Guidelines_March_2026.pdf`** — 58-page master brand guidelines (logo, colour, type, shapes, illustration, tone, applications). Page renders cached in `scraps/page-*.jpg`.
- **`uploads/PolySans Bulky.ttf`** — display typeface → `assets/fonts/PolySans-Bulky.ttf`.
- **Official logo art** (Figma exports) supplied by the client: horizontal sub-brand
  lockups (Education / Medprep / Testprep in navy / cream / charcoal), stacked vertical
  lockups, and colour breakdowns — now the source of truth in `assets/logos/`.
- Colour, type, casing and tone notes provided alongside the brief.

The plain **“contour” horizontal lockup** and the standalone **brand mark** were derived
losslessly from the official Education vector (cropped viewBox / isolated mark paths),
so every logo in this system is official vector art — no PDF tracing remains.

> No production Contour website or LMS code/Figma was supplied. The two UI kits
> therefore **apply the documented brand system** to plausible Contour surfaces
> rather than recreating existing screens. See each kit's README.

---

## Content fundamentals

**Voice:** a trusted older sibling — warm, confident, expert, clear. Student-first,
then parents. Transparent and specific (real numbers, no exaggeration). Encouraging
without hype.

**Person:** speak to the student as **"you"**; Contour is **"we"**.
e.g. *"You're on track this week."* · *"We'll send your timetable here."*

**Casing — this is load-bearing:**
- **Sentence case for all copy.** Never uppercase body copy.
- **Title Case** only for the brand, the sub-brands (Education, Medprep, Testprep)
  and key CTAs (*Book a free trial*, *Explore courses*).
- The wordmark **"contour" is always lowercase**; everywhere else in prose it's
  **"Contour"** with a capital C.

**Tone in practice:**
- Specific over vague: *"3 seats left for Term 3"* beats *"limited spots"*.
- Confident, not boastful: state outcomes plainly, let numbers carry the weight.
- Calm and uncluttered — one idea per block.

**Signature lines:**
- *"Reshaping education, one student at a time."*
- *"Empowering students to reach their full potential through the Contour ecosystem."*
- *"Empower. Clarify. Transform learning."*

**Emoji:** not used. The brand expresses warmth through colour, illustration and
voice — not emoji or exclamation-heavy copy.

---

## Visual foundations

**Colour.** Every layout is **anchored in hero navy `#0C3166`**. **Cream `#FFF9F1`**
is the default base/background; **charcoal `#212121`** is the default text colour.
Two digital accents are used **sparingly and never together**: **OG Blue `#007AFF`**
(heritage accent — clarity/emphasis) and **Highlighter `#D7FC3D`** (focus/standout,
especially CTAs). Monochromatic tints give contrast on coloured grounds. A nine-colour
**subject palette** is reserved for subject-specific contexts (illustration, icons,
LMS) and is always navy-anchored.
**Text-colour rule (strict): text is only ever cream, charcoal or navy — never
highlighter or OG blue.** Accents carry colour as fills, dots and bars; the words on
top stay navy/charcoal/cream.

**Type.** Display/headlines in **PolySans Bulky** (bold 700, tightened tracking
`-0.02em`) — strong, modern, high-impact. Body/UI/long-form in **Inter**
(Regular 400, Medium 500, Semi Bold 600). CTAs are **Inter Semi Bold**. Major-third
scale on a 16px base. Headlines are navy on cream; body is charcoal.

**Layout.** **Left-aligned by default**; centre sparingly; **right alignment never
used.** Generous, calm rhythm on a 4px spacing base; ~1200–1320px max content width.

**Shapes.** **Rounded, contoured edges only — no sharp corners.** 1–2 shape styles
per layout. Radii run 8 → 40px with a 999px pill for capsule CTAs, avatars and badges.

**The highlight strike.** The brand's signature device: a hero highlight on **one**
key word or phrase, with ~4px breathing room (`--highlight-pad-x/y`), with **square
edges (no rounded corners)**. The strike fill is **only** Highlighter (navy text) or
OG Blue (cream text) — never any other colour. Use once per headline, never more.

**Illustration.** The Contour illustration system (used across workbooks, website,
LMS and social) is **semi-isometric, geometric, simplified vector** art with a
distinctive look: **navy `#0C3166` line work** over a **flat colour fill**, finished
with fine **dot/stipple shading** and small **hand-drawn doodle accents** (motion
squiggles, sparks, stars). Artwork has a transparent background — never a white box —
so it sits directly on cream, white cards or navy.

The fill colour is the variable and follows one rule:
- **OG Blue `#007AFF`** is the default fill (the heritage two-tone look),
- **Highlighter `#D7FC3D`** when an illustration needs to stand out, or
- a **subject colour** when the illustration is subject-specific (Chemistry `#DF9943`,
  Biology `#45A172`, etc.).
The navy line work stays constant across all fills — recolour the single fill only,
never the lines. See the "Illustration fill rule" specimen card.

Four families ship in `assets/illustrations/`:
- **`spot/`** — reusable scalable SVG spots (beaker, test-tubes, flame, dna-strand,
  molecular-bonds, heartbeat-line, periodic-table-square, on-demand, weekly-program,
  special-events) + recoloured variants.
- **`covers/`** — detailed isometric workbook/lesson cover scenes (PNG, background
  removed), used as course art and feature imagery.
- **`expressions/`** — playful hand-lettered student-voice graphics (epic, yoooo,
  cooked, doomed) for social and lighter LMS moments — use sparingly.
- **`icons/`** — small isometric icon-illustrations (idea-bulb, magnifying-glass,
  success-star, stopwatch, timer-clock, upward-arrow).

Never warp, place photos inside, or recolour the navy line work.

> This curated set is a representative slice of Contour's ~289-illustration board.
> Ask to pull in more, or to recolour any spot into a given fill.

**Backgrounds.** Flat brand colours — cream (default), navy (hero/anchor sections),
cream-M (quiet bands), charcoal (footer). **No gradients, no photographic hero washes,
no textures** beyond the illustration dot-shading. Sections alternate cream ↔ navy for
rhythm.

**Elevation.** Soft, warm, **navy-tinted** shadows, low and diffuse (`--shadow-xs → lg`)
— never harsh grey drop-shadows. Cards rest on `--shadow-sm`.

**Cards.** White on cream with a hairline `--border-subtle`, `--radius-lg` (20px) and
`--shadow-sm`. Interactive cards lift 3px on hover (`--shadow-lg`). Navy and charcoal
card tones exist for inverse sections.

**Motion.** Calm and confident: `--ease-standard` for most transitions, `--ease-out`
for entrances. Durations 120/200/360ms. **Fades and gentle lifts — no bounces, no
infinite loops.** Honour `prefers-reduced-motion`.

**Interaction states.**
- *Hover:* primary CTA → highlighter-M; secondary → navy-M; ghost/outline → a soft
  tint wash (cream-M on light, 10–18% cream on navy).
- *Press:* a subtle `scale(0.97)` on buttons.
- *Focus:* OG-blue ring (`--shadow-focus`, 3px) on form fields and controls.

**Transparency & blur.** Used only for the sticky nav (cream at 86% + 12px backdrop
blur) and translucent cream overlays on navy. Sparingly.

**Logo.** Brand mark (the contoured "C") + rounded wordmark, kept together off-brand
channels. Respect clear space. **Never** warp, rotate, outline, drop-shadow/glow,
gradient-fill, recolour, or place images inside the logo.

---

## Iconography

- **UI icons** are simple, **rounded-stroke line icons** (~2px stroke, round caps/joins)
  drawn inline as SVG with `stroke="currentColor"`, so they inherit navy/cream. They
  match the rounded, contoured brand geometry. No icon font ships with the brand; the
  closest CDN match for production is **Lucide** (same rounded-stroke style, 2px) —
  flagged as a substitution; swap in Contour's own set when available.
- **Brand illustrations** are the real Contour vector/PNG artwork in
  `assets/illustrations/` (`spot/`, `covers/`, `expressions/`, `icons/`) — navy line
  work + OG-Blue/Highlighter/subject fill, transparent background. Prefer these over
  line icons for feature, subject and empty-state moments.
- **Emoji are not used.** Unicode glyphs are not used as icons.
- The brand mark itself doubles as a favicon/app glyph — see `assets/logos/contour-mark-*.svg`.

---

## Index

**Foundations**
- `styles.css` — global entry point (link this); `@import`s only.
- `tokens/colors.css` · `tokens/typography.css` · `tokens/spacing.css` · `tokens/fonts.css`
- `guidelines/*.card.html` — foundation specimen cards (Colors, Type, Spacing, Brand, Illustrations).

**Components** (`window.ContourDesignSystem_0483dc.*`)
- `buttons/` — **Button**, **IconButton**
- `forms/` — **Input**, **Select**, **Checkbox**, **Switch**
- `data-display/` — **Card**, **Badge**, **SubjectBadge**, **Avatar**
- `navigation/` — **Tabs**
- `feedback/` — **Callout**

Each component ships `Name.jsx`, `Name.d.ts`, `Name.prompt.md`, and a directory
`*.card.html` specimen.

**UI kits**
- `ui_kits/marketing/` — Contour homepage (`index.html`).
- `ui_kits/lms/` — Contour student portal / dashboard (`index.html`) + subject viewer (`subject-viewer.html`).

**Templates** (picker entries for consuming projects)
- `templates/marketing-site/` — Marketing site homepage.
- `templates/student-dashboard/` — Student dashboard (LMS).
- `templates/subject-viewer/` — Subject viewer (workbook).

**Assets**
- `assets/logos/` — official vector logos:
  - `contour-h-{navy,cream,charcoal}.svg` — plain horizontal lockup (mark + wordmark).
  - `contour-v-{navy,cream,charcoal}.svg` — stacked vertical lockup.
  - `contour-mark-{navy,cream,charcoal}.svg` — standalone brand mark.
  - `contour-{education,medprep,testprep}-h-{navy,cream,charcoal}.{svg,png}` — sub-brand lockups.
  - `assets/logos/official/` — raw client exports (kept for reference).
- `assets/illustrations/` — real Contour artwork (navy line + OG-Blue/Highlighter/subject fill, transparent bg):
  - `spot/` — reusable SVG spot illustrations + recoloured fill variants.
  - `covers/` — workbook/lesson cover scenes (PNG, background removed).
  - `expressions/` — hand-lettered student-voice graphics.
  - `icons/` — small isometric icon-illustrations.
- `assets/fonts/` — PolySans Bulky.

**Other**
- `SKILL.md` — Agent-Skill manifest for using this system in Claude Code.
