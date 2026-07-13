# Data Model: Product Detail Component

## Catalog Piece (existing)

| Field | Meaning |
|-------|---------|
| id | Stable slug used in `/produto/:id` |
| name | Display title |
| description | Short summary |
| longDescription | Extended copy |
| features | Bullet list of craft benefits |
| category | CategoryId |
| hint | Optional chip text (e.g. Personalizável) |

## Quality Line (existing)

| Field | Meaning |
|-------|---------|
| id | bebe \| dia-a-dia \| super-luxo |
| label | Visitor-facing name |
| description | What the line means |
| categories | Optional allow-list of categories |

## Related Piece Set

Derived: `getRelatedCatalogItems(item)` → same category, exclude self.

## UI State

| State | Owner | Notes |
|-------|-------|-------|
| selectedTier | ProductDetail page / ProductDetailView | Default = first available tier for category; null if none |
| route id | React Router | Drives item lookup |
