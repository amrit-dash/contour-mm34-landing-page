# Contour Methods 3/4 Landing Page

Claude Design export for the AY2027 VCE Maths Methods 3/4 subject landing page.

**Live preview:** GitHub Pages serves `index.html` from the `main` branch root.

> Internal review build. Not production copy — see *Known gaps* below.

## Layout

| Path | What it is |
|---|---|
| `index.html` | Packed, self-contained deliverable. This is what Pages serves. |
| `Methods 3-4 Landing Page.dc.html` | **Source of truth.** Edit this. |
| `standalone-src.dc.html` | Older variant, one `<section>` per component. Superseded. |
| `support.js`, `image-slot.js` | Claude Design runtime, inlined at pack time. |
| `_ds/` | Contour design system. |
| `assets/` | Images and fonts, inlined at pack time. |
| `tools/` | `pack.py` (build), `render.sh` (headless QA render), `transform_system.py`. |
| `reference/mm34-prototype.html` | Earlier prototype, for comparison. |
| `docs/superpowers/` | Polish plan and design spec (2026-09-09). |

`uploads/` (briefs, feedback log, standing rules) and `scraps/` (backups) are gitignored — they live only in the local working copy.

## Build

```sh
python3 tools/pack.py
cp "Contour Methods 3-4 Landing Page.html" index.html
```

QA render:

```sh
tools/render.sh out.png 1440 22000 "Methods 3-4 Landing Page.dc.html" "?reveal=all"
```

`?reveal=all` forces all scroll reveals so nothing is missed in a static capture. `?probe=1` lists overflow offenders.

## Known gaps

- Prototype control bar is still present, on purpose.
- Hero stats read "Proof-bank pending".
- Founder portrait slots empty; hero video poster is stock art-class photography.
- Campus card photos are generic classroom shots, not the real campuses.
- Copy items outstanding: "sat Methods, and beat it" (rule #85), WWCC line under tutors (rule #89).
- Google Fonts and OpenStreetMap tiles load from the network; Leaflet itself is vendored.

## Notes

`.nojekyll` is required — the page contains ~400 `{{ … }}` design-component placeholders that Jekyll would otherwise parse as Liquid and fail on.
