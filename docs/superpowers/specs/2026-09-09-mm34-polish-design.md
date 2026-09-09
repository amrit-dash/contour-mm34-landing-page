# MM34 landing page polish — design

Date: 2026-09-09. Requested by Angad via Slack; executed for Amrit.

## Goal

Polish, not rehaul. Same structure and copy. Page must feel even, neat, continuous
("one big story"), more animated and more impactful. Pillars should read as one section.

## Working files

- Source of truth: `Methods 3-4 Landing Page.dc.html` (newest variant, tabbed pillars).
- `standalone-src.dc.html` untouched, kept as backup.
- Deliverable: regenerated `Contour Methods 3-4 Landing Page.html` (single self-contained file)
  produced by `tools/pack.py`, which inlines `support.js`, `image-slot.js`, `_ds/*.css`,
  `_ds_bundle.js`, Leaflet, and every `assets/` image as data URIs.
- Prototype control bar stays (removed in production later).

## Changes

### 1. Unified Contour System section
- `#method` intro (h2 + three pillar cards + partnership band) stays.
- Three `.pwrap`/`#pillar-N` blocks merge into one `#system` flow:
  one sticky "Your journey" rail on the left listing all 19 steps grouped under three
  pillar sub-headings; right panel shows current step. Clicking a step or scrolling
  advances. Pillar colour (navy / OG blue / highlighter) drives rail accent and panel chip.
- Levels card (Core/Mastery/Extension) sits inside the Tutoring stretch after step 06.
- Existing `#pillar-1/2/3` ids kept as anchors on the sub-headings so rail dots and
  in-page links keep working.

### 2. Motion system (one set of tokens)
- CSS vars: `--ease-out: cubic-bezier(.22,1,.36,1)`, `--dur-s: .35s`, `--dur-m: .6s`, `--dur-l: .9s`.
- `[data-reveal]` attribute on section heads, cards, stat tiles; IntersectionObserver adds
  `.in` once. Variants: `fade-up` (default), `fade`, `scale`, `clip-left`.
- `[data-stagger]` children get incremental `--i` delay.
- Counters on `[data-cnt]` already exist; kept, timing aligned.
- Side rail: continuous scroll progress line + active dot; rail gets a cream-tinted
  frosted background.
- Hover: cards lift 2px + shadow step; buttons 1px lift; image tiles 1.03 scale.
- All motion disabled under `prefers-reduced-motion`.

### 3. Story thread
- Each section head gets an eyebrow chip with a running arc label
  (Why → Proof → Who → How → Where → Price → Start) and a thin connective line
  drawn from the previous section's last element into the next heading.
- Section dividers unified: 1px `--border-subtle` rule, same top/bottom padding scale.

### 4. Even and neat
- Spacing scale: sections `clamp(72px,9vw,112px)`; inner gaps 18 / 28 / 44.
- Card: radius `--radius-xl`, border `--border-subtle`, shadow `--shadow-xs`, hover `--shadow-md`.
- Heading ladder: eyebrow 12.5px / h2 clamp(32px,3.6vw,44px) / lead 17px.
- CTA pair styling identical across hero, pillars, price, final.

### 5. Condense datapoints
- Results: leaderboard + stat tiles into one tighter grid.
- Offer table: four columns even height, icons aligned.
- Tutor row, campus grid, FAQ cards: consistent card sizes.

### 6. Cleanup (from audit)
- Campus dropdown list matches campus cards (Bentleigh, Springvale, Narre Warren).
- Rail label "Curriculum" → "Tutoring"; FAQ rail dot → `#faq`.
- Journey thumbnails: use distinct existing photos instead of repeated building shot.
- Campus cards: rotate through the available `assets/opt` photos rather than 8 identical.
- "beat it" heading left for Angad's copy pass; noted in handoff.

## Out of scope
Copy rewrites, CMS wiring, removing prototype bar, new photography.

## Verification
Headless Chromium full-page render at 1440 and 390 widths; visual check of every
section; no console errors; packed file opens from file:// with images visible.
