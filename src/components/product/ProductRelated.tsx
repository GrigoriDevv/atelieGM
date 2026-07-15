import { Link } from 'react-router-dom'
import { ImageIcon } from 'lucide-react'
import type { CatalogItem } from '@/config/catalog'
import { getProductPath } from '@/config/catalog'
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
      <h2 className="mb-5 font-display text-2xl font-semibold">Outras opções de {categoryLabel}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((relatedItem) => (
          <Card
            key={relatedItem.id}
            className="overflow-hidden py-0 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            <Link to={getProductPath(relatedItem.id)}>
              <div className="relative aspect-video overflow-hidden bg-linear-to-br from-secondary to-placeholder-end text-muted-foreground">
                {relatedItem.image ? (
                  <img
                    src={relatedItem.image}
                    alt={relatedItem.name}
                    className="size-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex size-full items-center justify-center">
                    <ImageIcon className="size-7 opacity-60" aria-hidden="true" />
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-display text-lg font-semibold">{relatedItem.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{relatedItem.description}</p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}
