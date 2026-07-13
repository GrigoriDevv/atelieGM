import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CATEGORIES, type CategoryId } from '@/config/brand'
import {
  buildCatalogWhatsAppUrl,
  getCatalogItemById,
  getQualityTiersForCategory,
  getRelatedCatalogItems,
  type QualityTier,
} from '@/config/catalog'
import { ProductDetailView, ProductNotFound } from '@/components/product'

const categoryLabels = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c.title]),
) as Record<CategoryId, string>

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const item = id ? getCatalogItemById(id) : undefined
  const [selectedTier, setSelectedTier] = useState<QualityTier | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    if (!item) {
      setSelectedTier(null)
      return
    }
    const tiers = getQualityTiersForCategory(item.category)
    setSelectedTier(tiers[0] ?? null)
  }, [item])

  if (!item) {
    return <ProductNotFound />
  }

  const categoryLabel = categoryLabels[item.category]
  const tiers = getQualityTiersForCategory(item.category)
  const related = getRelatedCatalogItems(item)
  const whatsappUrl = selectedTier
    ? buildCatalogWhatsAppUrl(item, categoryLabel, selectedTier)
    : undefined

  return (
    <ProductDetailView
      item={item}
      categoryLabel={categoryLabel}
      tiers={tiers}
      selectedTier={selectedTier}
      onSelectTier={setSelectedTier}
      related={related}
      whatsappUrl={whatsappUrl}
    />
  )
}
