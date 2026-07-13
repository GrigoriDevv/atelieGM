# Research: Product Detail Component

**Date**: 2026-07-12

## Decision 1: Extract components vs rewrite page only

**Decision**: Extract a cohesive set under `src/components/product/` and keep `ProductDetail.tsx` as a thin route.

**Rationale**: Spec FR-011 requires a reusable component; current page already implements most behavior but mixes routing and presentation.

**Alternatives considered**: Leave monolithic page (fails FR-011); invent a new detail UX from scratch (unnecessary churn).

## Decision 2: State ownership for quality line

**Decision**: Keep selected tier state in the page (or composing view) and pass value/onChange into `ProductQualityPicker`.

**Rationale**: Tier resets when catalog item changes; WhatsApp URL depends on item + tier together.

**Alternatives considered**: Fully uncontrolled picker (harder to sync WhatsApp URL); global store (overkill for static SPA).

## Decision 3: Related products placement

**Decision**: `ProductRelated` remains part of the composing view, rendered only when related list length > 0.

**Rationale**: Matches US3 / FR-006; avoids empty states.

## Decision 4: No new packages

**Decision**: Reuse Button, Badge, Card, Separator, lucide icons already in the project.

**Rationale**: Security/devsecops rule — no new deps without approval; not needed.
