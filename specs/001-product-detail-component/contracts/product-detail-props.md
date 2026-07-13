# Contract: Product Detail Component Props

## `ProductDetailView`

```ts
interface ProductDetailViewProps {
  item: CatalogItem
  categoryLabel: string
  tiers: QualityTier[]
  selectedTier: QualityTier | null
  onSelectTier: (tier: QualityTier) => void
  related: CatalogItem[]
  whatsappUrl?: string
}
```

## `ProductNotFound`

No required props (fixed Portuguese copy + catalog link).

## `ProductMedia`

```ts
interface ProductMediaProps {
  productName: string
  /** Optional future image URL; when absent, accessible placeholder */
  imageSrc?: string
}
```

## `ProductQualityPicker`

```ts
interface ProductQualityPickerProps {
  tiers: QualityTier[]
  value: QualityTier | null
  onChange: (tier: QualityTier) => void
}
```

## `ProductRelated`

```ts
interface ProductRelatedProps {
  categoryLabel: string
  items: CatalogItem[]
}
```
