# CMS map — Methods 3/4 subject landing page

Which parts of the page come from the CMS, and at which tier. Everything **not** listed here is fixed template: same on every subject page, marketing does not touch it.

Tiers follow `uploads/Resources-1/cms-architecture.md`:

| Tier | Scope | Colour on prototype |
|---|---|---|
| **Subject** | Per subject (Methods 3/4, Specialist 3/4, …) | lime |
| **Product / geography** | Per product = per state exam body (VCE · QCE · HSC · UCAT). Campuses, prices, trial shape, product FAQs | orange |
| **General** | Contour-wide. One copy, every page | blue |

## How to see it on the prototype

1. Open the page. In the dark **Prototype** bar at the top, click **CMS map**.
2. Every CMS-driven block gets a dashed outline in its tier colour, plus a chip at its top-left naming the tier and the CMS field.
3. A legend sits bottom-left with live counts. Click **CMS map** again to hide. The setting persists in the browser.
4. Deep link: append `?cms=1` to the URL to open with the map on.

In the source, every tagged block carries `data-cms="subject|product|general"` and a short `data-cms-note` with the field name. Marketing does not need to read the source; this doc is the list.

## Section by section

Section numbers match the prototype `data-screen-label`s.

### S1 · Hero
| Block | Tier | CMS field / rule |
|---|---|---|
| Breadcrumb (VCE / Methods / Units 3 & 4) | Subject | `route` — product → subject → units |
| Offer badge ("Term 4 starts…") | Product | `offer.badge` — cycle dates per state × season |
| H1 "VCE Maths Methods 3/4 Tutoring" | Subject | `seo.h1` — product + subject + units |
| Subline under H1 | Subject | `hero.subline` × lens (student / guardian) × season × ad variant |
| Three hero stats | General | proof-bank `atar_99_share`, `state_share`, `raw50_dux`. Note: `state_share` reads "of Victoria's…", so it becomes Product tier on QCE/HSC pages |
| Primary CTA ("Book your free trial") | Product | `trial.cta` × season |
| Risk line under CTAs | Product | `trial.risk_line` × season |
| Hero video | Subject | `assets.hero_film` — 90-second subject film |
| Floating proof chips (4.9 ★, 15,000+ tutored) | General | proof-bank `google_aggregate`, `google_review_count`, `students_tutored` |

### S2 · Story
| Block | Tier | CMS field / rule |
|---|---|---|
| Founder letter card | Product | `story.part1` — the broken things for this product (teacher lottery, generic resources, support ending at the bell). Part 2 (founder framing, signatures) is General |
| Origin photo album | General | `story.album` |
| "Download prospectus" button label | Product | one CMS string, prospectus per product |

### S3 · Results
| Block | Tier | CMS field / rule |
|---|---|---|
| Score ticker | Subject | `results.ticker` |
| Leaderboard + Study score / ATAR toggle | Subject | `results.leaderboard` — names render only with permission (PB §20) |
| "In Maths Methods" stat column | Subject | `results.subject_stats` — raw-50 count, average score, top-30 share |
| "1 in 7 … 99+ ATAR" card | General | proof-bank `atar99_share` |
| "1 in 5 of Victoria's 99+…" card | Product | proof-bank `state_share` — per state |
| Featured student photo card | Subject | `results.featured` — approval PB §20 |
| Whole-cohort footnote + "View all results" | General | fixed |

### S3b · Reviews
| Block | Tier | CMS field / rule |
|---|---|---|
| Google aggregate (4.9 · 3,000+) | General | proof-bank `google_aggregate` |
| Written review cards | Subject | `reviews.written` — subject filter on the review bank |
| 60-second video cards | Subject | `reviews.video` |

### S4 · Tutors
| Block | Tier | CMS field / rule |
|---|---|---|
| Intro line ("Every Methods tutor here scored 45+…") | Subject | `tutors.intro` |
| Head of subject card (letter, stats, 60-sec video) | Subject | `people.head` |
| Tutor rail + bios | Subject | `people.tutors` — subject filter, campus filter. Tutor bios / interests / campuses are first-class CMS entities |
| WWCC line | General | `tutors.wwcc` |
| **S4b** Tutor Academy | General | `academy` — proof-bank `academy_accept_rate` |

### S5 · Method / S6 · Contour System / S9 · Partnership
| Block | Tier | CMS field / rule |
|---|---|---|
| S5 three pillar cards | General | `method.pillars` — one sentence each |
| S6 whole section (19 parts) | Subject | `system.components` — each part shows / hides per subject, copy variant per subject. English: Content Class replaces Workshop, no practice SACs. Non-STEM: no CAS Hub |
| Curriculum term list | Subject | `curriculum.terms` — study design, SAC weeks |
| Your program (Core / Mastery / Extension) | Subject | `streams` — Methods 3/4 has all three; Bio/Spec/Physics 1/2 = Mastery + Extension; English = Mastery only |
| S9 Academic partnership | General | fixed |

### S12 · Availability / S10b · Class allocation
| Block | Tier | CMS field / rule |
|---|---|---|
| Whole Availability section (map, campus cards, typical week, cap states) | Product | `availability.campuses` × state |
| "Can't get to campus?" online card | General | `online.copy` |
| Class allocation photo (campus name) | Product | campus × state |

### S11 · Offer / S11b · Founders note / S12 · Pricing
| Block | Tier | CMS field / rule |
|---|---|---|
| Offer grid (everything included) | Subject | `offer.components` — text line (VCE STEM + Y7–10 Maths only), consults, CAS Hub, Bound Reference show / hide per subject |
| Founders note | General | fixed |
| Price card | Product | `commercials.price_week` × state × year level (VCE 3/4 $110, QCE 3/4 $90, HSC Y12 $110…) |
| "Every week includes" list inside price card | Subject | `price.includes` — components per subject |
| Hours split bar | Subject | English = 4 hrs, everything else 5 |
| Comparison anchors ("Melbourne, VCE Maths Methods") | Product | `price.comparison` — city × product |

### S13 · Trial
| Block | Tier | CMS field / rule |
|---|---|---|
| Sticky trial panel (title, lead, join state) | Product | `trial.copy` × product × season |
| Component chips (Weekly Class, Workshop…) | Subject | `trial.component_chips` |
| Five-step plan | Product | `trial.steps` — length (two weeks at launch, one week mid-program) + steps per product |

### S14 · FAQ and tail
| Block | Tier | CMS field / rule |
|---|---|---|
| "About Maths Methods 3/4" group | Subject | `faq.subject` |
| "About the program" group | Product | `faq.product` |
| "About Contour" group | General | `faq.general` |
| Student video card | Subject | `faq.video_card` |
| "Not yet?" nurture card | Product | `nurture` × season |
| "Most Methods students also look at" links | Product | `nav.related_subjects` — sibling subjects within the product |
| Intensive pill | Product | `season.intensive` |
| Footer "Programs" column | Product | `footer.programs` |

## Not tagged on purpose

- Header nav, lens switcher, section rail, mobile wayfinder: template UI.
- Section headings and intro copy (e.g. "Results speak for themselves"): fixed template copy unless listed above.
- Design-system buttons (`x-import`) cannot carry attributes, so CTAs are tagged on their wrapper row where it matters (hero, trial). All primary CTAs read `offer.cta` (Product tier).

## Open questions for Angad

1. Hero stats: keep as General with the Victoria line swapping to a state figure, or make the whole stat row Product?
2. S6 components: tag at part level (19 chips) once the component show/hide matrix per subject is final?
3. Do sign-up form field labels use the same three tier names, so both surfaces read the same?
