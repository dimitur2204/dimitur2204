# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Currently static HTML, CSS and vanilla JS in `website/assets/`, served as Cloudflare static assets (`website/wrangler.jsonc`, custom 404 page), with PostHog analytics proxied through `ohmyhog.dimitar-nizamov.net`. No build step or package manifest today. The owner has confirmed this is **flexible**: a framework or build step is acceptable when the work justifies it. Cloudflare hosting stays.

## Users

Primary: recruiters, hiring managers and engineering leads evaluating Dimitar Nizamov for a **full-time role**, around the end of their BEng (January 2027), possibly abroad (EU citizen, open to relocation). The roles in scope are deliberately broad: **frontend, fullstack and DevOps**. The site must not narrow Dimitar to frontend or design systems only.

Their job: decide quickly whether Dimitar is worth an interview, then find the evidence and a way to get in touch or pass on the résumé.

## Product Purpose

A personal portfolio and CV site for Dimitar Nizamov (dimitur2204). It exists to get Dimitar interviews for full-time engineering roles. Success means a hiring visitor reads the work, understands the range and depth of the experience, and reaches out or takes the résumé away.

## Positioning

A five-year working engineer, not a student portfolio: Dimitar owns production infrastructure that other engineers depend on (the shared component library behind every WISEflow frontend), and also has real range across the stack: payments end to end on an open-source platform, CI/CD and Docker work with DevOps, serverless on Cloudflare Workers, a self-run homelab, and backend/embedded/ML coursework. The through-line is that Dimitar builds the dependable layer underneath other people's work, whether that is a UI library or a server.

## Operating Context

- Visitors usually arrive from a job application, LinkedIn, GitHub or the CV, and skim before deciding to read.
- The primary action is to **read the work** (Work & Projects). Résumé (PDF) and email/LinkedIn come second.
- Pages: home (`index.html`), Work & Projects (`work.html`), About (`about-me.html`), 404, and the downloadable `cv.pdf`.
- Copy is candid, first-person and specific, with dry humour ("I also use Neovim, btw").

## Capabilities and Constraints

- Keep existing URLs, the CV PDF, analytics setup and professional history accurate.
- Content and navigation should work without JavaScript.
- Named view transitions between menu titles and subpage headings already exist (recent work); they are an established behaviour.
- Static regression tests live in `website/tests/site.test.mjs` (Node's built-in test runner).
- The visual system is "Utility Locate", recorded in `DESIGN.md` (and `.impeccable/design.json`). Atkinson Hyperlegible and the heading morph are binding by the owner's choice.

## Brand Commitments

- Name: Dimitar Nizamov. Handle: dimitur2204. Email: dimitur2204@gmail.com.
- Location: Aarhus, Denmark. Grew up in Bulgaria. Bulgarian native, English fluent.
- Voice: plain, first-person, concrete numbers over adjectives, a little self-deprecating. No buzzword stacks.

## Evidence on Hand

- **UNIwise / WISEflow** (Feb 2022 to present, part-time frontend developer): owns the shared React/TypeScript component library and design system used by 10 microfrontends and 15–20 engineers; leading the migration from Semantic UI React to headless primitives while keeping WCAG 2.1 AA; introduced Vitest unit tests and Cypress visual regression; built and optimised the Docker containers the frontend repos are published from to the company's cloud deployments, with faster testing and linting steps, alongside DevOps; mentors interns and new hires.
- **Podkrepi.bg** (Dec 2021 to May 2024, volunteer fullstack, open source): 73 merged PRs; built the primary payment flow end to end (React/Next.js, Node/NestJS/Prisma); Stripe one-off and recurring payments; Cypress tests for the donation journey.
- **Devasoft** (2021): sole frontend engineer; built the admin panel for a cloud VM marketplace; worked in the Python backend and Ansible provisioning.
- **Klevret** (2020–2021): first job, Umbraco/SCSS/jQuery, some Vue and React.
- **Chivou** (Dec 2025): landing page and onboarding for a startup; forms post to a Cloudflare Worker backed by Airtable; deploys to Cloudflare automatically on push; PostHog analytics through a reverse proxy on a Cloudflare Worker (per owner). Repo: `~/dev/personal/chivou-landing` (private).
- **Homelab / selfhosted-compose** (since Sep 2024, ~134 commits, private repo `~/dev/personal/selfhosted-compose`): 26 Docker Compose stacks (Nextcloud, Immich, Home Assistant, Forgejo, …) behind Nginx Proxy Manager; AdGuard Home DNS; Tailscale, VPN containers, and a VPN on the home router (per owner); nightly Borg backups in Bun/TypeScript that quiesce stacks in dependency order and verify restart; weekly restore test with SQLite integrity checks; monthly `borg check`; Grafana, InfluxDB, Beszel, Scrutiny; Healthchecks.io + ntfy alerts; GitHub Actions validating every Compose file, shellcheck, actionlint and tool tests, SHA-pinned actions, Dependabot; Cloudflare DDNS; secrets backed up to Bitwarden. Leave the media-acquisition stacks (torrent, indexers, arr) out of public copy.
- **Education:** BEng Software Technology Engineering, VIA University College, Sep 2023 to Jan 2027, ~10.4/12; bachelor's project with Aarhus University Hospital radiology (ML on medical imaging, organ health vs. biological age).
- Assets: `website/assets/cv.pdf`; company logos for UNIwise, Podkrepi, Devasoft, Klevret.
- **Absent, do not fabricate:** testimonials, references, metrics beyond those above, screenshots of proprietary WISEflow UI, a professional photo (the CV is deliberately photo-less), blog posts.

## Product Principles

1. **Range with a spine.** Show frontend, fullstack and ops work as one coherent engineer, not a frontend specialist with side hobbies.
2. **Evidence before claims.** Lead with what Dimitar owned and the concrete numbers; let readers verify through links.
3. **Respect a skimming reviewer.** The case for an interview should land in seconds; depth is there for those who keep reading.
4. **Sound like Dimitar.** Keep the candid first-person voice; never inflate.
5. **The site is itself a work sample.** Accessibility, performance and craft are part of the pitch.

## Accessibility & Inclusion

WCAG 2.1 AA is the floor. Accessibility is part of Dimitar's professional claim, so keyboard navigation, visible focus, reduced-motion support and readable contrast are non-negotiable.
