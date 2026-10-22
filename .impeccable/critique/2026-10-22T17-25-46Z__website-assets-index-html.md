---
target: website/assets/index.html
total_score: 24
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:/Users/dimitar.nizamov/dev/personal/dimitur2204/website/assets/index.html"
target_fingerprint: "sha256:5d547fd3447795c31c0939b2d7bb8428d388fe47a4035b1475be5160166d76e1"
target_path: /Users/dimitar.nizamov/dev/personal/dimitur2204/website/assets/index.html
timestamp: 2026-10-22T17-25-46Z
slug: website-assets-index-html
---
Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score (24/32, 75%, Good; n/a: 7, 10)
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | "About me" stays sharp mid-transition |
| 2 | Match System / Real World | 3 | Recruiter-unfriendly jargon in cards; "Index" |
| 3 | User Control and Freedom | 3 | "← Index" href="/" creates Back-button loop |
| 4 | Consistency and Standards | 3 | Homepage range vs work.html "Five years of frontend" |
| 5 | Error Prevention | 3 | Static; new-tab résumé labelled |
| 6 | Recognition Rather Than Recall | 3 | Card links' destination not signalled |
| 7 | Flexibility and Efficiency | n/a | portfolio |
| 8 | Aesthetic and Minimalist Design | 3 | Menu sits between claim and proof |
| 9 | Error Recovery | 3 | Custom 404 |
| 10 | Help and Documentation | n/a | portfolio |

## Design Specificity Verdict
Copy specific to him; visual system generic dark-dev portfolio (mint accent, glow, uppercase mono labels, 3 columns). Morph is the one owned element; nothing visualizes "the layer underneath". Detector: CLI 0 findings; overlay 1 false positive (extension badge). Contrast all AA (min 4.97:1 on --text-dim). No overflow 320-1440. Two card-title tap targets 24px at 375.

## Priority Issues
1. [P1] Hiring status buried in dim footer below the fold. clarify.
2. [P1] Range unsupported / contradicted by work.html lede+meta; DevOps proof is only the homelab. clarify.
3. [P2] No proof on first phone screen (first card y=787 at 375; landscape shows only claim+lede); 24px card-title targets. adapt.
4. [P2] Résumé reads as fine print; email only in footer. layout.
5. [P3] No external verification links (GitHub PRs). clarify.

## Persona Red Flags
Jordan: jargon, "Index", code-like labels, CV/availability weakest.
Casey: no proof above fold, contact far from thumb, small targets.
Skimming hiring manager: no availability, seniority ambiguity, Work page re-narrows.
DevOps lead: ops evidence is a hobby, vague CI/CD, Ansible/Workers absent.

## Minor Observations
about-title transition name with no counterpart on work.html; "Selected work" too quiet; 233px columns at 812; glow ~5.5% near-invisible; PRODUCT.md fonts stale.

## Questions to Consider
- Should the homepage be the top of the work page?
- What would a composition that shows layers look like?
- Homelab vs CI/CD for 10 microfrontends in the third slot?
