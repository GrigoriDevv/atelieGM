import { Link } from 'react-router-dom'
import type { CatalogItem } from '@/config/catalog'
import { getProductPath } from '@/config/catalog'
import { ProductCarousel } from '@/components/product/ProductCarousel'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

interface ProductRelatedProps {
  categoryLabel: string
  items: CatalogItem[]
}

export function ProductRelated({ categoryLabel, items }: ProductRelatedProps) {
  if (items.length === 0) return null

  return (
    <div className="mt-14">
      <Separator className="mb-10" />
      <h2 className="mb-5 font-display text-2xl font-semibold tracking-tight">
        Outras opções de {categoryLabel}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((relatedItem) => (
          <Card
            key={relatedItem.id}
            className="overflow-hidden rounded-[1.5rem] border-border/70 py-0 shadow-[0_12px_32px_-24px_rgba(61,54,48,0.3)] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-md"
          >
            <Link to={getProductPath(relatedItem.id)}>
              <ProductCarousel
                productName={relatedItem.name}
                imageSrc={relatedItem.image}
                images={relatedItem.images}
                aspect="related"
                autoPlay
                showArrows={false}
              />
              <CardContent className="p-4">
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {relatedItem.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {relatedItem.description}
                </p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}
