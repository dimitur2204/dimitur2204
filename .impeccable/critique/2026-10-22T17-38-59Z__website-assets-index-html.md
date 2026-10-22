---
target: website/assets/index.html
total_score: 24
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:/Users/dimitar.nizamov/dev/personal/dimitur2204/website/assets/index.html"
target_fingerprint: "sha256:049f38577fcc8b9d6a356a1b1440f67b916cb6645f502b8cd80bfcde050d1d21"
target_path: /Users/dimitar.nizamov/dev/personal/dimitur2204/website/assets/index.html
timestamp: 2026-10-22T17-38-59Z
slug: website-assets-index-html
---
Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score (24/32, 75%, Good; n/a: 7, 10)
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Card click morphs nav word into off-screen heading |
| 2 | Match System / Real World | 3 | Recruiter jargon (headless primitives, Borg, AdGuard) |
| 3 | User Control and Freedom | 3 | Fine |
| 4 | Consistency and Standards | 3 | "Selected work" styled unlike other section labels; stale base.css comment |
| 5 | Error Prevention | 3 | Fine |
| 6 | Recognition Rather Than Recall | 3 | Card links barely signalled |
| 7 | Flexibility and Efficiency | n/a | static |
| 8 | Aesthetic and Minimalist Design | 3 | Nav loudest, proof quietest |
| 9 | Error Recovery | 3 | Good 404 |
| 10 | Help and Documentation | n/a | portfolio |

## Design Specificity Verdict
Copy specific; visuals generic dark-dev (parked by owner: "Not yet"). Detector: CLI 0; overlay only extension-badge false positive. AA contrast throughout (min 4.97). No overflow. 24px card-title targets; About me 38px. First card y=787 @375x812, 599 @812x375, 654 @1440x900.

## Priority Issues
1. [P1] Proof below first phone/landscape screen (vh margins style.css:27/75/143, stacked nav). adapt.
2. [P1] Hierarchy inverted: nav 800 weight vs muted evidence; invisible card underlines. typeset.
3. [P2] DevOps evidence under-weighted/unverifiable (container work only a clause; homelab private). clarify.
4. [P2] Card→anchor hand-off: morph to off-screen h1, no scroll-margin-top on work entries. animate.
5. [P3] Availability in dim footer. clarify.

## Evidence-slot recommendation
1 UNIwise: library + containers merged. 2 Podkrepi: keep + external PR link. 3 Homelab: reframe to operations ("Backups that prove they restore"). Chivou stays on work.html (needs id).

## Persona Red Flags
Jordan: jargon, link affordance, equal-weight nav. Casey: no proof above fold, contact far, LinkedIn wrap @320. Skimmer: no availability, no external proof, part-time surprise. DevOps lead: no numbers, private repo, ops proof ~3250px deep on work.html, unverified "DevOps" claim.

## Minor Observations
Stale comment base.css:73-74; 0.45s underline lag on focus; noisy nav note; no GitHub near top.

## Questions to Consider
- Cards as navigation morphing into entries?
- Is "DevOps" earned before something public exists?
- Composition that shows layers?
