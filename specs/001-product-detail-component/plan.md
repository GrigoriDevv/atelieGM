# Implementation Plan: Product Detail Component

**Branch**: `001-product-detail-component` | **Date**: 2026-07-12 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-product-detail-component/spec.md`

## Summary

Extract and harden a reusable **product detail component set** from the existing product route so mothers can review a piece, pick a quality line, and open a WhatsApp quote that already names the piece and line. The page becomes a thin route wrapper; presentation lives under `src/components/product/`.

## Technical Context

**Language/Version**: TypeScript 5.x / React 19  

**Primary Dependencies**: React Router, existing `@/config/catalog`, shadcn/ui Button/Badge/Card, Tailwind v4  

**Storage**: N/A (static catalog in `src/config/catalog.ts`)  

**Testing**: Manual verification via `quickstart.md` (no automated test suite requested)  

**Target Platform**: Web (mobile + desktop browsers)  

**Project Type**: Vite SPA marketing site  

**Performance Goals**: Instant client navigation; detail view interactive within one paint after route change  

**Constraints**: No new dependencies; preserve DESIGN.md / PRODUCT.md (catalog-first, no side-stripe >1px, accessible placeholders); Portuguese copy  

**Scale/Scope**: One feature surface (product detail); ~6–8 small components + one composing view  

## Constitution Check

*No `.specify/memory/constitution.md` — gates from PRODUCT.md / DESIGN.md:*

| Gate | Status |
|------|--------|
| Catalog-first; WhatsApp continues the conversation | Pass — quote CTA after tier selection |
| Show the stitch / accessible media | Pass — media component with accessible name |
| Never SaaS costume / no thick left accent stripe | Pass — selection via full border + fill |
| Contrast, keyboard, reduced-motion floor | Pass — keep focus rings; no new motion that ignores PRM |
| No new dependencies without approval | Pass |

## Project Structure

### Documentation (this feature)

```text
specs/001-product-detail-component/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── product-detail-props.md
└── tasks.md
```

### Source Code (repository root)

```text
src/
├── components/product/
│   ├── ProductDetailView.tsx      # composing view (valid item)
│   ├── ProductNotFound.tsx
│   ├── ProductBreadcrumb.tsx
│   ├── ProductMedia.tsx
│   ├── ProductHeader.tsx          # badge, title, descriptions
│   ├── ProductFeatures.tsx
│   ├── ProductQualityPicker.tsx
│   ├── ProductQuoteCta.tsx
│   ├── ProductRelated.tsx
│   └── index.ts                   # public exports
├── pages/ProductDetail.tsx        # route: params, scroll, data load, compose
└── config/catalog.ts              # unchanged data helpers
```

**Structure Decision**: Stay inside the existing Vite SPA. New UI under `src/components/product/`; page retains routing concerns only.

## Complexity Tracking

No constitution violations requiring justification.
