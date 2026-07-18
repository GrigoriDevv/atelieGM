import { useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { CATEGORIES, type CategoryId } from '@/config/brand'
import {
  CATALOG_ITEMS,
  getProductPath,
  type CatalogFilter,
  type CatalogItem,
} from '@/config/catalog'
import SectionHead from '@/components/SectionHead'
import { Container, Section } from '@/components/layout'
import { ProductCarousel } from '@/components/product/ProductCarousel'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

const categoryLabels = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c.title]),
) as Record<CategoryId, string>

const availableCategories = CATEGORIES.filter((category) =>
  CATALOG_ITEMS.some((item) => item.category === category.id),
)

function filterItems(filter: CatalogFilter): CatalogItem[] {
  if (filter === 'todos') return CATALOG_ITEMS
  return CATALOG_ITEMS.filter((item) => item.category === filter)
}

const tabClass =
  'shrink-0 snap-start rounded-full border border-border/80 bg-card/90 px-4 py-2.5 min-h-11 text-[0.9375rem] font-semibold data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm'

export default function Catalog() {
  const [activeFilter, setActiveFilter] = useState<CatalogFilter>('todos')
  const items = filterItems(activeFilter)

  return (
    <Section id="catalogo" soft>
      <Container>
        <SectionHead
          title="Escolha a peça ideal"
          subtitle="Deslize pelas fotos, abra o produto e peça o orçamento pelo WhatsApp quando estiver pronta."
        />

        <Tabs
          value={activeFilter}
          onValueChange={(value) => setActiveFilter(value as CatalogFilter)}
          className="mb-6 sm:mb-8"
        >
          <div className="-mx-4 overflow-x-auto overscroll-x-contain px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:overflow-visible sm:px-0">
            <TabsList className="flex h-auto w-max min-w-full snap-x snap-mandatory flex-nowrap justify-start gap-2 bg-transparent p-0 sm:w-auto sm:snap-none sm:flex-wrap">
              <TabsTrigger value="todos" className={`${tabClass} snap-start`}>
                Todos
              </TabsTrigger>
              {availableCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className={`${tabClass} snap-start`}
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>

        <div className="stagger grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {items.map((item, index) => (
            <Card
              key={item.id}
              className="reveal group overflow-hidden rounded-[1.75rem] border-border/70 py-0 shadow-[0_12px_32px_-24px_rgba(61,54,48,0.35)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-1 hover:shadow-[0_22px_44px_-28px_rgba(61,54,48,0.4)] active:scale-[0.99]"
              style={{ '--i': Math.min(index, 8) } as CSSProperties}
            >
              <Link to={getProductPath(item.id)} className="flex h-full flex-col">
                <ProductCarousel
                  productName={item.name}
                  imageSrc={item.image}
                  images={item.images}
                  aspect="card"
                  autoPlay
                  showArrows={false}
                />
                <CardContent className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="rounded-full bg-accent/20 text-accent hover:bg-accent/20">
                      {categoryLabels[item.category]}
                    </Badge>
                    {item.hint && (
                      <span className="text-xs font-semibold tracking-wide text-primary">
                        {item.hint}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-balance">
                    {item.name}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-pretty text-muted-foreground">
                    {item.description}
                  </p>
                  <span className="text-sm font-semibold text-primary transition-transform duration-300 group-hover:translate-x-0.5">
                    Ver detalhes →
                  </span>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {items.length === 0 && (
          <p className="py-8 text-center text-muted-foreground">
            Nenhuma opção encontrada nesta categoria.
          </p>
        )}
      </Container>
    </Section>
  )
}
