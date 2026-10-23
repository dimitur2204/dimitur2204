# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Primary: hiring managers and engineering leads assessing Dimitar Nizamov for a software engineering role, usually arriving from a CV, LinkedIn or a direct link. They are technically literate, short on time, and deciding whether he is worth an interview.

Secondary (not confirmed as targets): recruiters, engineering peers and open-source collaborators. They use the same pages.

## Product Purpose
This is a personal portfolio site for Dimitar Nizamov, a software engineer in Aarhus, Denmark. It succeeds when a hiring manager has read the depth of the work (the component library, the payments flow, the homelab, the education) and comes away convinced. Contact comes after conviction, not before it.

## Positioning
He builds the layer other developers build on. That claim spans three disciplines, and he keeps all three: frontend (a shared React/TypeScript component library behind every WISEflow frontend, WCAG 2.1 AA), fullstack (open-source donation payments at Podkrepi.bg, 73 merged PRs) and operations (a homelab of 26 self-hosted services run like production). It is a generalist position, and the connecting idea is infrastructure for others, not breadth for its own sake.

## Operating Context
- Visitors read it on desktop and mobile, often moving between the site, the PDF CV (`assets/cv.pdf`), GitHub and LinkedIn.
- He is an EU citizen, open to relocation, and finishing a BEng at VIA University College in January 2027.

## Capabilities and Constraints
- Static HTML/CSS/JS served as Cloudflare Workers static assets (`wrangler.jsonc`, `404-page` handling). PostHog analytics run via `assets/js/posthog.js`.
- Pages: Index, Work & Projects, About me, 404, plus the CV PDF.
- `tests/site.test.mjs` asserts landmarks, a skip link, a single h1, labelled primary navigation (work, about, cv.pdf) and a mailto link.
- Undecided: whether the multi-page structure, the static/no-build stack, the test contract and the Atkinson Hyperlegible typeface are binding for the redesign. When asked, the user marked none of them as binding.

## Brand Commitments
- Voice: first person, plain, specific and slightly dry ("Both are plausible."; "I also use Neovim, btw."). It is concrete about numbers and mechanisms, with no buzzwords.
- Bulgarian identity (user-pinned, 2026-10-22): the visual world is built from Bulgarian shevitsa (folk cross-stitch embroidery). Bulgarian shows visually only, and all copy stays English. It must work as a system (grid, colour, structure), not as souvenir decoration.
- Anti-reference: the previous "utility-locate street" world (asphalt, spray marks, dig frames, locate colour codes) was rejected as too gimmicky and not like him. Future work should not put a metaphor in front of the substance.

## Evidence on Hand
- Work copy in `assets/work.html`: UNIwise (Feb 2022–present), Podkrepi.bg (Dec 2021–May 2024), an earlier frontend role (May–Sep 2021), Cloudflare/Airtable work, the homelab, VIA education (~10.4/12) and a skills list.
- About copy in `assets/about-me.html`.
- Logos: `assets/logo-uniwise.png`, `logo-podkrepi.svg`, `logo-devasoft.png`, `logo-klevret.png`.
- Verifiable link: the GitHub search of 73 merged Podkrepi PRs.
- Absent: testimonials, screenshots of the component library, homelab dashboards and writing. Do not fabricate any of them.

## Product Principles
1. Substance first. The work is the evidence, and nothing decorative stands between a reader and it.
2. Depth is reachable fast. A manager can see the shape in seconds and go as deep as they want.
3. Specific beats impressive. Real numbers, mechanisms and links, never adjectives.
4. Practise what he claims. The site itself should demonstrate accessibility and frontend craft.
5. Sound like him: plain, first person, a little dry.

## Accessibility & Inclusion
At least WCAG 2.1 AA. Accessibility is part of his professional claim, so the site has to pass its own bar.
