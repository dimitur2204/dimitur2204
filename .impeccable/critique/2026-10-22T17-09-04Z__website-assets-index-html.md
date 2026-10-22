---
target: website/assets/index.html
total_score: 21
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:/Users/dimitar.nizamov/dev/personal/dimitur2204/website/assets/index.html"
target_fingerprint: "sha256:3fca5658aedbc5376df70886b079af3721eb9a9912f6fc5fdf1075938a4841e8"
target_path: /Users/dimitar.nizamov/dev/personal/dimitur2204/website/assets/index.html
timestamp: 2026-10-22T17-09-04Z
slug: website-assets-index-html
---
Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score (21/32, 66%, Acceptable; n/a: 7, 10)
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Résumé opens PDF in new tab unannounced |
| 2 | Match System / Real World | 2 | Only "Frontend Developer"; no case for hiring |
| 3 | User Control and Freedom | 3 | Unskippable 2–3s intro (reduced-motion safe) |
| 4 | Consistency and Standards | 3 | "About Me" vs "About me" in morph; role scope mismatch |
| 5 | Error Prevention | 3 | New-tab PDF, hidden system cursor |
| 6 | Recognition Rather Than Recall | 2 | Icon-only contacts; email only on About |
| 7 | Flexibility and Efficiency | n/a | 3-link index |
| 8 | Aesthetic and Minimalist Design | 2 | Decoration replaces substance |
| 9 | Error Recovery | 3 | Custom 404; content survives CDN failure |
| 10 | Help and Documentation | n/a | No task needs help |

## Design Specificity Verdict
Mostly category-interchangeable: giant 3-word menu, mono 01/02/03, particle plexus, lerp cursor, letter stagger, status dot. Specific: the menu-to-heading view-transition morph. Voice from Work/About absent here.
Detector: index.html 1 finding, overused-font (Mona Sans), taste call. Context pages: low-contrast x5 are false positives (hover-underline gradient, work.css:98, about-me.css:179); tight-leading on .lede false positive; em-dash advisory on work.html.

## Priority Issues
1. [P1] Homepage makes no case for an interview: add 1–2 voiced positioning lines, facts line (UNIwise · BEng Jan 2027 · relocation), real h1 and main. clarify, layout.
2. [P1] Role framing "Frontend Developer" in title/meta/identity (index.html:6,9,37) contradicts frontend/fullstack/DevOps audience. clarify.
3. [P2] Generic decoration (particles.js:47-103, cursor.js:62-78, magnet); body{cursor:none} without JS (style.css:6-10). quieter, delight.
4. [P2] Responsive: landscape identity overlaps menu, footer removed (style.css:305-309); relocation hidden <768px (style.css:291-293). adapt.
5. [P2] Secondary actions: Résumé (PDF) cue, visible email. clarify.

## Persona Red Flags
Jordan: no explanation on landing, icon-only contacts, unannounced PDF, fake sequence numbering.
Casey: "Work" truncation, relocation hidden, landscape breaks, 38px icons.
Skimming hiring manager: no years/stack/proof/availability; DevOps/fullstack filtered out; goes to PDF, misses Work page.

## Minor Observations
Per-letter spans may be spelled out by screen readers; no nav aria-label/skip link/main; hover underline lacks focus-visible equivalent; 1.1s footer delay; prefetch is good.

## Questions to Consider
- Why is the homepage an empty stage instead of a summary the Work heading flies out of?
- Would a DevOps hiring lead see a reason to click?
- What if it looked like "the dependable layer underneath" rather than an agency splash?
