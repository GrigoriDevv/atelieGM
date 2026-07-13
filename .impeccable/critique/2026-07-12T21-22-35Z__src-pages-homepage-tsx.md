---
target: homepage / src/pages/HomePage.tsx
total_score: 29
p0_count: 3
p1_count: 2
timestamp: 2026-07-12T21-22-35Z
slug: src-pages-homepage-tsx
---
# Critique: Ateliê GM homepage (`src/pages/HomePage.tsx`)

Method: dual-agent (A: 99ee39ff-5611-4a64-b083-90d826a72509 · B: 17729172-e44c-469d-8f75-d5d0a3100f6f)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | WhatsApp handoff opens external app with no “you’re leaving” cue; no image loading/empty product states beyond placeholders |
| 2 | Match System / Real World | 4 | Copy speaks Brazilian artisan language (fraldário, enxoval, linhas) |
| 3 | User Control and Freedom | 3 | Skip link + breadcrumbs help; many irreversible WhatsApp exits |
| 4 | Consistency and Standards | 2 | ProductDetail side-stripe vs homepage cards; Process `#como-funciona` missing from nav |
| 5 | Error Prevention | 3 | Tier pick before quote is good; category cards jump to WhatsApp without confirmation |
| 6 | Recognition Rather Than Recall | 3 | Labels help; 6 nav + 5 catalog tabs overload recognition |
| 7 | Flexibility and Efficiency | 3 | Dual browse vs chat paths; novices may not know which |
| 8 | Aesthetic and Minimalist Design | 2 | Seven sections + repeated SectionHead scaffolding + duplicate CTAs |
| 9 | Error Recovery | 3 | Product-not-found and empty filter are humane |
| 10 | Help and Documentation | 3 | Process + hours help; no FAQ on lead time / shipping / pricing bands |
| **Total** | | **29/40** | **Good** |

## Anti-Patterns Verdict

**LLM assessment:** Yes — a craft-aware visitor would likely say this was templated/AI-assisted. Cream `#faf8f5` + gold `#c4a882`, Cormorant + DM Sans, uppercase tracked eyebrows on every section, identical card grids with hover-lift, numbered Process 1–4, hero radial wash + floating overlay card, and above all **placeholder imagery everywhere** (Hero, Catalog, Gallery, ProductDetail). ProductDetail `border-l-[3px]` hits an absolute ban. Navbar glass blur on scroll is decorative glassmorphism. Engineering/copy care is real; the visual layer still reads as an unshipped shadcn artisan template.

**Deterministic scan:** `detect.mjs --json` on `src/pages`, `src/sections`, `src/components`, `index.html` exited **0** with `[]` — zero rule hits. Detector missed the human-visible slop (placeholders, eyebrows, cream lane, side-stripe in TSX class strings the scanner may not flag). No false positives.

**Visual overlays:** Not available. Browser visualization skipped (no browser automation in Assessment B; localhost:5173 not reachable). No user-visible overlay.

## Overall Impression

Structurally sound boutique landing with warm Portuguese copy and a thoughtful WhatsApp funnel — undercut by missing craft photography and repetitive AI-landing scaffolding. Biggest opportunity: make the stitch the hero before polishing components.

## What's Working

1. **Specific human copy** — real products and scenarios in `brand.ts` / `catalog.ts`, not lorem.
2. **WhatsApp funnel wiring** — per-category messages, tier-aware product quotes, radiogroup on ProductDetail.
3. **A11y baseline** — skip link, aria-labels, `prefers-reduced-motion`, focus rings.

## Priority Issues

### [P0] No real product photography
- **Why:** For embroidery, design *is* the product; placeholders disqualify trust.
- **Fix:** Replace Hero, Catalog, Gallery, ProductDetail, About placeholders with macro stitch/fabric photos.
- **Suggested command:** `/impeccable bolder` (or ship assets first, then polish)

### [P0] Hero primary visual is `aria-hidden` placeholder
- **Why:** Hides trust card from AT; signals image isn’t content.
- **Fix:** Real `<img>` with descriptive alt; remove `aria-hidden` on the visual column.
- **Suggested command:** `/impeccable harden`

### [P0] ProductDetail quality tiers use `border-l-[3px]` side-stripe
- **Why:** Absolute Impeccable ban; dashboard UI on an atelier PDP.
- **Fix:** Full border + selected fill/ring; never >1px left accent stripe.
- **Suggested command:** `/impeccable quieter` / `/impeccable polish`

### [P1] Template scaffolding repetition
- **Why:** Eyebrows on every section + numbered Process + identical card grids = AI fingerprint.
- **Fix:** Drop eyebrows on 2–3 sections; vary layouts; photo-caption Process steps.
- **Suggested command:** `/impeccable quieter` / `/impeccable distill`

### [P1] Nav overload (6 links) + Process orphaned
- **Why:** Exceeds ~4-choice working memory; Process not in nav.
- **Fix:** Collapse to ~4 anchors; merge or link “Como funciona”.
- **Suggested command:** `/impeccable distill` / `/impeccable layout`

### [P2] Competing WhatsApp primaries + Gallery meta-copy
- **Why:** Eight chat exits confuse browse-vs-ask; Gallery subtitle exposes “substitua placeholders”.
- **Fix:** One primary CTA per zone; FAB after Hero; remove meta-copy from production.
- **Suggested command:** `/impeccable clarify` / `/impeccable distill`

## Persona Red Flags

**Jordan (First-Timer):** Placeholder hero = unfinished shop; Categories + Catalog dual models; no price bands before WhatsApp.

**Riley (Stress Tester):** Mobile sheet dumps 6× large links; category cards `target="_blank"` to WhatsApp with no on-site state; placeholders make catalog filters feel pointless.

**Casey (Distracted Mobile):** Fixed nav + FAB compete in thumb zone; `.reveal` opacity-0 until intersect; trust chips without proof photos.

## Minor Observations

- Process `id="como-funciona"` not in `NAV_LINKS`
- Tier `bebe` uses raw hex `#d4a5a5`
- No Open Graph image meta
- Empty `SOCIAL.instagram`
- All `rounded-full` buttons reinforce kit sameness

## Questions to Consider

1. If the stitch is the hero, why seven sections before a single thread is visible?
2. Are eight WhatsApp buttons invitations — or anxious exits?
3. Would the embroiderer recognize their studio in cream + Cormorant?
4. Do customers ask for “Linha Bebê / Super Luxo” by name, or describe a gift and budget?
