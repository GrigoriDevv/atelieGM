# Tasks: Product Detail Component

**Input**: plan.md + spec.md  
**Feature**: `001-product-detail-component`

## Phase 1: Setup

- [x] T001 Create folder `src/components/product/` and barrel `src/components/product/index.ts`

## Phase 2: Foundational

- [x] T002 [P] Add `ProductMedia.tsx` with accessible placeholder / optional image in `src/components/product/ProductMedia.tsx`
- [x] T003 [P] Add `ProductBreadcrumb.tsx` in `src/components/product/ProductBreadcrumb.tsx`
- [x] T004 [P] Add `ProductFeatures.tsx` in `src/components/product/ProductFeatures.tsx`
- [x] T005 [P] Add `ProductHeader.tsx` (badge, hint, title, descriptions) in `src/components/product/ProductHeader.tsx`

## Phase 3: User Story 1 — Review & quote (P1)

**Goal**: Valid product detail with quality line + WhatsApp quote  
**Independent test**: Open known product; select tier; WhatsApp includes piece + line

- [x] T006 [US1] Implement `ProductQualityPicker.tsx` (radiogroup, no side-stripe) in `src/components/product/ProductQualityPicker.tsx`
- [x] T007 [US1] Implement `ProductQuoteCta.tsx` in `src/components/product/ProductQuoteCta.tsx`
- [x] T008 [US1] Compose `ProductDetailView.tsx` wiring media/header/features/picker/CTA/back link in `src/components/product/ProductDetailView.tsx`
- [x] T009 [US1] Thin `src/pages/ProductDetail.tsx` to load item/tiers/state and render `ProductDetailView`

## Phase 4: User Story 2 — Not found (P1)

**Goal**: Human not-found + catalog return  
**Independent test**: `/produto/nao-existe`

- [x] T010 [US2] Implement `ProductNotFound.tsx` in `src/components/product/ProductNotFound.tsx`
- [x] T011 [US2] Render `ProductNotFound` from `src/pages/ProductDetail.tsx` when item missing

## Phase 5: User Story 3 — Related pieces (P2)

**Goal**: Related grid when siblings exist  
**Independent test**: Product with same-category siblings

- [x] T012 [US3] Implement `ProductRelated.tsx` in `src/components/product/ProductRelated.tsx`
- [x] T013 [US3] Include `ProductRelated` in `ProductDetailView.tsx` only when `related.length > 0`

## Phase 6: User Story 4 — Orient & back (P3)

**Goal**: Breadcrumb + explicit back already covered; verify polish  
**Independent test**: Breadcrumb + ← Voltar ao catálogo

- [x] T014 [US4] Ensure `ProductBreadcrumb` + back link used in `ProductDetailView.tsx` / `ProductNotFound.tsx`

## Phase 7: Polish

- [x] T015 Export public API from `src/components/product/index.ts`
- [x] T016 Run `npm run build` and walk `quickstart.md` checks
- [x] T017 Mark completed tasks in this file

## Dependencies

- Setup → Foundational → US1 → US2 (can parallel after T001) → US3 depends on ProductDetailView → US4 verify → Polish
- MVP = Phase 1–4 (US1 + US2)

## Parallel examples

- T002–T005 after T001
- T010 can start after T001 in parallel with US1 until page wiring

## MVP

Ship T001–T011 first (reusable detail + not-found). Related products (T012–T013) next.
