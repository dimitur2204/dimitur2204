---
version: 1
slug: "assets-index-html"
primary_target: "assets/index.html"
related_targets: ["assets/work.html","assets/about-me.html","assets/404.html"]
---

# Surface brief: personal site (Index, Work & Projects, About, 404)

Mode: Read. The visitor's success is understanding the depth of the work.
Audience: hiring managers and tech leads with 2–5 minutes, on desktop or a phone.
Action: read the work in depth; contact follows on its own. Proof: the real numbers and links already in the copy.
Constraints: static HTML/CSS/JS on Cloudflare assets, same URLs, tests/site.test.mjs stays green, WCAG 2.1 AA, English copy only.
Memorable moment: the hem bands stitch themselves in, cell by cell.
Unresolved: keeping PostHog (kept for now).

## Direction contract

THESIS: Bulgarian shevitsa treated as a working system, not a souvenir. The cross-stitch cell is the layout unit and the bands are the only ornament. It refuses the dark-mode developer portfolio of project cards, and it refuses folk costume.

OWN-WORLD: cool white ground, madder red (#A8121E range) and near-black thread. Red owns full-width hem bands at the title block, at each section opener and at the footer. Discipline motifs are drawn on an 8px stitch grid: frontend a rhombus "eye", fullstack an "oak-leaf" zigzag tree, operations a stepped cross. Sofia Sans (a Bulgarian foundry, Lettersoup) is the reading and display family; its Condensed cut sets labels and numbers. No texture, gradients, shadows, cards or folk sun-wheel motifs.

STORY: in seconds the reader learns who Dimitar is and his claim, sees all three disciplines with a real number for each, follows one into Work, reads the depth, and finds email, CV and GitHub at the close.

FIRST VIEWPORT: a red hem band runs full-bleed across the top, above the name and nav row. The h1 claim is set large and left on the stitch grid, with the lede beside or below it. Below that sits a three-column row, one per discipline: motif, title, real metric line and link into work.html. The footer band closes the page.

FORM: user-pinned (shevitsa), overriding the roll's assigned datasheet direction (position 3 on the ordered list); seed:2883a6cffc792746

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
