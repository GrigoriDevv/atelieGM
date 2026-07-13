---
name: Ateliê GM
description: Bordados artesanais feitos com carinho
colors:
  linen-paper: "#faf8f5"
  stitch-ink: "#3d3630"
  thread-gold: "#c4a882"
  sage-leaf: "#8faf9a"
  soft-linen: "#f3ede6"
  muted-thread: "#5c554d"
  card-white: "#ffffff"
  whatsapp: "#25d366"
  destructive: "#c45c5c"
  placeholder-end: "#ebe3d8"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(1.875rem, 3vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.2
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "DM Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  sm: "12px"
  md: "14px"
  lg: "16px"
  xl: "20px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "64px"
  section-lg: "96px"
components:
  button-catalog:
    backgroundColor: "{colors.thread-gold}"
    textColor: "{colors.stitch-ink}"
    rounded: "{rounded.full}"
    padding: "12px 28px"
  button-catalog-hover:
    backgroundColor: "#b89772"
    textColor: "{colors.stitch-ink}"
  button-whatsapp:
    backgroundColor: "{colors.whatsapp}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "12px 28px"
  button-outline:
    backgroundColor: "{colors.linen-paper}"
    textColor: "{colors.stitch-ink}"
    rounded: "{rounded.full}"
    padding: "12px 28px"
  badge-soft:
    backgroundColor: "{colors.soft-linen}"
    textColor: "{colors.muted-thread}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
  card-surface:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.stitch-ink}"
    rounded: "{rounded.xl}"
    padding: "24px"
---

# Design System: Ateliê GM

## 1. Overview

**Creative North Star: "O Ponto Delicado"**

The visual system should feel like holding a finished embroidery up to soft daylight: quiet linen, a single gold thread catching the eye, sage as a calm secondary voice. Density stays airy on the homepage and a little denser on product detail, where decisions happen. Personality is *delicado · afetuoso · exclusivo* — never loud, never corporate.

This system exists to build trust in handmade work before conversation. Photography and craft detail carry belief; decorative chrome does not. Every screen reinforces one claim: each piece is hand-embroidered to order.

It explicitly rejects startup landing costume from PRODUCT.md: purple gradients, identical icon+heading+text card grids, SaaS marketing grammar, and generic “AI boutique” templates that could sell anything.

**Key Characteristics:**
- Linen field + thread-gold emphasis + sage accent
- Serif display for emotion; sans for clarity
- Catalog is the primary conversion path; WhatsApp is secondary
- Flat-by-default surfaces; soft lift only on hover or featured media
- Motion is scarce: one hero entrance, staggered lists only

## 2. Colors

A linen-and-thread palette: warm neutrals carry the page; gold and sage appear as craft accents, not SaaS chrome.

### Primary
- **Thread Gold** (#c4a882): Brand emphasis — logo span, italic hero stress, catalog primary buttons, selected product states. Keep coverage modest so rarity signals quality.

### Secondary
- **Sage Leaf** (#8faf9a): Soft affirmation — category icons, check marks, gentle highlights. Never the main CTA color.

### Tertiary
- **WhatsApp Green** (#25d366): Reserved exclusively for WhatsApp actions. Do not recolor brand CTAs to match it.

### Neutral
- **Linen Paper** (#faf8f5): Page background.
- **Soft Linen** (#f3ede6): Alternating soft bands (`soft` sections) and secondary fills.
- **Stitch Ink** (#3d3630): Body and heading text; also text on gold buttons for contrast.
- **Muted Thread** (#5c554d): Supporting copy; must stay ≥4.5:1 on linen.
- **Card White** (#ffffff): Cards and elevated panels.
- **Placeholder End** (#ebe3d8): Temporary media gradients until real photos land.

### Named Rules
**The Thread Budget Rule.** Thread Gold appears on ≤10% of any viewport. If gold is everywhere, nothing feels exclusive.

**The WhatsApp Lane Rule.** Green means chat. Never use WhatsApp green for brand decoration.

## 3. Typography

**Display Font:** Cormorant Garamond (Georgia, serif)
**Body Font:** DM Sans (ui-sans-serif, system-ui, sans-serif)

**Character:** Editorial warmth in the serif; calm practicality in the sans. The pairing is already shipping identity — preserve it; do not chase new Google Fonts fashion for its own sake.

### Hierarchy
- **Display** (600, clamp ~2.25–3.75rem, 1.1): Hero H1 only.
- **Headline** (600, ~1.875–2.25rem, 1.2): Section H2.
- **Title** (600, ~1.25rem, 1.3): Card and product titles.
- **Body** (400, 1rem, ~1.7): Descriptions; prefer max ~65–75ch.
- **Label** (500, 0.875rem): Nav, badges, meta. Sentence case preferred; avoid all-caps tracked eyebrows as section scaffolding.

### Named Rules
**The Quiet Label Rule.** Prefer weight and color over uppercase tracking for section cues. All-caps kickers on every section are prohibited scaffolding.

## 4. Elevation

Hybrid: tonal soft bands (`soft-linen` at reduced opacity) create most depth. Shadows are light and rare — featured media and hover lift only.

### Shadow Vocabulary
- **Media lift** (`0 10px 30px rgba(61, 54, 48, 0.12)`): Hero / gallery featured image.
- **Hover card** (Tailwind `shadow-md`): Catalog cards and interactive surfaces on hover.
- **FAB** (`shadow-lg` with WhatsApp tint): Floating chat control only.

### Named Rules
**The Flat-By-Default Rule.** Surfaces rest flat. Shadow is a response to state or to a featured photograph — never decoration on every card.

## 5. Components

Character line: soft, confident, pill-shaped actions; cards only when the content is a distinct product or decision.

### Buttons
- **Shape:** Fully rounded pills (`9999px`)
- **Catalog primary:** Thread Gold fill + Stitch Ink text (`button-catalog`)
- **WhatsApp secondary:** WhatsApp green + white text
- **Outline:** Linen/background fill, border, hover toward soft linen
- **Hover / Focus:** 200ms color shift; focus-visible ring using Thread Gold at ~50% opacity; press scale ~0.97

### Chips
- Soft linen / card chips with muted text; optional sage check icon. Not a primary CTA.

### Cards / Containers
- Corner ~16–20px; white fill; 1px border at 10% ink
- Prefer lists and split layouts over identical icon-card grids
- Internal padding ~20–24px

### Inputs / Fields
- Minimal — site is mostly navigation + WhatsApp. When present: border ink/14%, focus ring Thread Gold.

### Navigation
- Fixed header; condensed to four anchors (Peças, Galeria, Sobre, Contato)
- On scroll: near-opaque linen + light border (avoid heavy glassmorphism)
- Desktop WhatsApp chip is secondary to catalog path

### Signature: Hero media + caption card
- Dominant media plane with optional floating caption card (“Cada ponto, uma história”)
- Real photography preferred; placeholders must remain accessible (not `aria-hidden` on content)

## 6. Do's and Don'ts

### Do:
- **Do** lead the hero with catalog selection, WhatsApp as secondary.
- **Do** put real stitch/fabric photography in hero, catalog, and gallery as soon as assets exist (`.impeccable/assets/proof/` / `public/images`).
- **Do** keep body text ≥4.5:1 on linen (Muted Thread on Linen Paper).
- **Do** use ink text on gold buttons for WCAG contrast.
- **Do** vary section layouts (timeline, lists, featured gallery cell) so the page does not read as one card template.

### Don't:
- **Don't** look like a startup landing page: purple gradients, identical icon cards, SaaS marketing grammar.
- **Don't** use generic “AI boutique” templates that could sell any product.
- **Don't** use `border-left` greater than 1px as a colored accent stripe.
- **Don't** put uppercase tracked eyebrows on every section.
- **Don't** gate content behind opacity:0 reveals without a visible-by-default fallback.
- **Don't** ship placeholder meta-copy like “substitua estas fotos” to visitors.
