# Feature Specification: Product Detail Component

**Feature Branch**: `001-product-detail-component`

**Created**: 2026-07-12

**Status**: Implemented

**Input**: User description: "construa um componente de detalhes de produto"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Review a piece before quoting (Priority: P1)

A mother browsing the Ateliê GM catalog opens a piece she likes. She sees the name, description, craft highlights, and a clear photo area so she can decide whether the finish and style match her moment (baptism, maternity gift, enxoval). She then chooses a quality line and continues to WhatsApp with a pre-filled quote that already names the piece and line — so the chat starts specific, not as idle curiosity.

**Why this priority**: Matches the product purpose (catalog-first path, fewer vague WhatsApp chats) and the belief ladder (finish → fit → worth asking).

**Independent Test**: Open any known catalog piece detail view, read name/description/features, select a quality line, and confirm the WhatsApp action includes piece + line. Completes without visiting the homepage.

**Acceptance Scenarios**:

1. **Given** a valid product from the catalog, **When** the visitor opens its detail view, **Then** she sees the product name, short description, longer description, category label, feature list, and a primary media area for the piece.
2. **Given** the product belongs to a category with quality lines, **When** the detail view loads, **Then** a quality-line choice is available and one line is selected by default.
3. **Given** a quality line is selected, **When** she activates the quote action, **Then** she is taken to WhatsApp with a message that identifies the product and the selected quality line.
4. **Given** she is on the detail view, **When** she uses keyboard only, **Then** she can move through navigation, quality options, and the quote action with visible focus.

---

### User Story 2 - Recover when the piece is missing (Priority: P1)

A visitor lands on a detail address for a piece that no longer exists (old link, typo, removed catalog entry). She is told clearly that the piece is unavailable and is offered a path back to the catalog so she can continue shopping without dead ends.

**Why this priority**: Prevents trust loss and abandoned visits on a brand site with no backend recovery.

**Independent Test**: Open a detail view with an unknown product id and confirm a human message plus a catalog return path.

**Acceptance Scenarios**:

1. **Given** an unknown or removed product id, **When** the detail view loads, **Then** she sees a clear “not found” message in Portuguese (not a blank page or technical error code).
2. **Given** the not-found state, **When** she chooses the return action, **Then** she reaches the catalog section of the site.

---

### User Story 3 - Discover related pieces (Priority: P2)

After reviewing one piece, the visitor sees other options in the same category so she can compare without going back to filters. Choosing a related piece opens that piece’s detail view.

**Why this priority**: Supports catalog browsing depth and “fit my moment” without forcing a full restart.

**Independent Test**: On a product that has siblings in-category, confirm related items appear and each opens the correct detail.

**Acceptance Scenarios**:

1. **Given** other catalog items share the same category, **When** the detail view is shown, **Then** a related-pieces group lists those items (excluding the current piece).
2. **Given** related pieces are shown, **When** she selects one, **Then** she sees that piece’s detail content.
3. **Given** no other items exist in the category, **When** the detail view loads, **Then** the related section is omitted (no empty “nothing here” block).

---

### User Story 4 - Orient and go back (Priority: P3)

The visitor always knows where she is (home → catalog → current piece) and can return to the catalog without using the browser back button.

**Why this priority**: Reduces disorientation on mobile, especially after WhatsApp tab switches.

**Independent Test**: Confirm orientation trail and an explicit “back to catalog” control on a valid detail view.

**Acceptance Scenarios**:

1. **Given** a valid product detail view, **When** the page is shown, **Then** orientation links include home and catalog plus the current piece name.
2. **Given** she is on a valid detail view, **When** she chooses “back to catalog”, **Then** she returns to the catalog section.

### Edge Cases

- Product exists but has no quality lines for its category: quote action must not promise a line; visitor still needs a clear path to contact or catalog.
- Product exists but has no photo yet: media area remains understandable (accessible placeholder), without developer-facing copy.
- Very long product name or description: layout remains readable; content is not truncated in a way that hides critical meaning without a way to read more.
- Opening WhatsApp fails (app/browser blocked): visitor still sees the intended piece and line on-screen so she can contact another way.
- Rapidly switching between related products: each view shows the correct product and resets quality selection appropriately for the new category.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The experience MUST present a dedicated product detail surface for a single catalog piece identified by the visitor’s chosen piece.
- **FR-002**: The detail surface MUST show, for a valid piece: name, category, short description, long description, feature list, and a primary media area.
- **FR-003**: When a quality-line set exists for the piece’s category, the surface MUST let the visitor select exactly one quality line at a time (radiogroup behavior) and MUST preselect a default line on load.
- **FR-004**: The primary conversion action on the detail surface MUST open WhatsApp with a message that includes the piece name and the selected quality line when a line is selected.
- **FR-005**: The surface MUST provide a clear not-found state for unknown pieces, with a path back to the catalog.
- **FR-006**: The surface MUST offer related pieces from the same category when available, excluding the current piece, each linking to its own detail.
- **FR-007**: The surface MUST provide orientation (home / catalog / current piece) and an explicit control to return to the catalog.
- **FR-008**: All interactive controls (quality options, primary quote action, related links, orientation links) MUST be operable by keyboard with a visible focus indicator.
- **FR-009**: Quality selection MUST NOT use a colored left-border stripe thicker than 1px as the selected-state cue (brand anti-pattern ban).
- **FR-010**: Copy on the detail surface MUST be in Portuguese and align with brand voice (warm, precise; not SaaS marketing grammar).
- **FR-011**: The detail UI MUST be expressed as a reusable product-detail component (or cohesive component set) so the route/page can compose it without duplicating the presentation logic for media, features, quality selection, and quote CTA.
- **FR-012**: When product photography is unavailable, the media area MUST remain accessible (meaningful accessible name / label) and MUST NOT expose internal placeholder instructions to visitors.

### Key Entities

- **Catalog Piece**: A hand-embroidery offer with id, name, category, short and long descriptions, feature list, optional hint, and optional media.
- **Quality Line**: A named tier (e.g. Bebê, Dia a dia, Super Luxo) with description, scoped by category; used to specialize the WhatsApp quote.
- **Related Piece Set**: Other catalog pieces sharing the same category as the current piece, excluding itself.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A first-time visitor can open a piece from the catalog, understand what it is, pick a quality line, and reach WhatsApp with piece + line identified in under 2 minutes without help.
- **SC-002**: 100% of unknown-product visits show a human not-found message and a catalog return path (no blank or cryptic failure).
- **SC-003**: On products with quality lines, 100% of quote actions include both piece name and selected line in the outgoing WhatsApp message text.
- **SC-004**: Keyboard-only users can complete quality selection and activate the quote action without using a pointing device.
- **SC-005**: When related pieces exist, visitors can open at least one related piece from the detail surface without returning to catalog filters.
- **SC-006**: After this feature, idle “oi, vim pelo site” chats without a named piece should decrease relative to chats that mention a specific piece (qualitative check with atelier owner after a trial period).

## Assumptions

- The site remains a static brand catalog with WhatsApp as the only sales channel (no cart, payment, or account).
- Catalog pieces and quality lines already exist as content managed in the project; this feature does not invent a CMS.
- Primary audience is mothers/families evaluating handmade trust before chat (per PRODUCT.md).
- Portuguese (Brazil) is the only UI language for this feature.
- A product detail route/page already exists; this feature focuses on a proper reusable **component** (and any necessary composition cleanup) rather than inventing a new business channel.
- Real photography may still be missing; accessible placeholders are acceptable until assets are supplied.
- “Component” means a cohesive UI building block used by the product detail page, not a separate micro-frontend or app.

## Out of Scope

- Shopping cart, checkout, inventory, or online payment
- User accounts, favorites, or saved quotes
- Multi-language localization
- Admin UI to edit catalog content
- Live chat widgets other than WhatsApp deep links
- Image upload or CDN management
