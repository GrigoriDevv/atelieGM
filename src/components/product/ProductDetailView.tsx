import { Link } from 'react-router-dom'
import type { CatalogItem, QualityTier } from '@/config/catalog'
import { Container, Section } from '@/components/layout'
import { ProductBreadcrumb } from './ProductBreadcrumb'
import { ProductMedia } from './ProductMedia'
import { ProductHeader } from './ProductHeader'
import { ProductFeatures } from './ProductFeatures'
import { ProductQualityPicker } from './ProductQualityPicker'
import { ProductQuoteCta } from './ProductQuoteCta'
import { ProductRelated } from './ProductRelated'

export interface ProductDetailViewProps {
  item: CatalogItem
  categoryLabel: string
  tiers: QualityTier[]
  selectedTier: QualityTier | null
  onSelectTier: (tier: QualityTier) => void
  related: CatalogItem[]
  whatsappUrl?: string
  imageSrc?: string
}

export function ProductDetailView({
  item,
  categoryLabel,
  tiers,
  selectedTier,
  onSelectTier,
  related,
  whatsappUrl,
  imageSrc,
}: ProductDetailViewProps) {
  return (
    <Section id="produto" className="pt-header pb-28 md:pb-24">
      <Container>
        <ProductBreadcrumb productName={item.name} />

        <div className="grid items-start gap-6 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="order-1 md:sticky md:top-[calc(var(--header-offset)+1rem)] md:order-none">
            <ProductMedia productName={item.name} imageSrc={imageSrc} />
          </div>

          <div className="order-2 min-w-0 md:order-none">
            <ProductHeader
              name={item.name}
              categoryLabel={categoryLabel}
              description={item.description}
              longDescription={item.longDescription}
              hint={item.hint}
            />

            <ProductFeatures features={item.features} />

            <ProductQualityPicker
              tiers={tiers}
              value={selectedTier}
              onChange={onSelectTier}
            />

            {whatsappUrl && selectedTier && (
              <ProductQuoteCta
                whatsappUrl={whatsappUrl}
                tierLabel={selectedTier.label}
                sticky
                className="mt-6"
              />
            )}

            <Link
              to="/#catalogo"
              className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              ← Voltar ao catálogo
            </Link>
          </div>
        </div>

        <ProductRelated categoryLabel={categoryLabel} items={related} />
      </Container>
    </Section>
  )
}
