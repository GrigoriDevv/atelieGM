import { useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { ImageIcon } from 'lucide-react'
import { CATEGORIES, type CategoryId } from '@/config/brand'
import {
  CATALOG_ITEMS,
  getProductPath,
  type CatalogFilter,
  type CatalogItem,
} from '@/config/catalog'
import SectionHead from '@/components/SectionHead'
import { Container, Section } from '@/components/layout'
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
  'shrink-0 snap-start rounded-full border border-border bg-card px-4 py-2.5 min-h-11 data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground'

export default function Catalog() {
  const [activeFilter, setActiveFilter] = useState<CatalogFilter>('todos')
  const items = filterItems(activeFilter)

  return (
    <Section id="catalogo" soft>
      <Container>
        <SectionHead
          title="Escolha a peça ideal"
          subtitle="Abra o produto para ver detalhes, escolher a linha de qualidade e pedir orçamento pelo WhatsApp."
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

        <div className="stagger grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {items.map((item, index) => (
            <Card
              key={item.id}
              className="reveal overflow-hidden py-0 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.99]"
              style={{ '--i': Math.min(index, 8) } as CSSProperties}
            >
              <Link to={getProductPath(item.id)} className="flex h-full flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-linear-to-br from-secondary to-placeholder-end text-muted-foreground">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="size-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex size-full items-center justify-center">
                      <ImageIcon className="size-8 opacity-60" />
                    </div>
                  )}
                </div>
                <CardContent className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="rounded-full bg-accent/15 text-accent hover:bg-accent/15">
                      {categoryLabels[item.category]}
                    </Badge>
                    {item.hint && (
                      <span className="text-xs font-medium text-primary">{item.hint}</span>
                    )}
                  </div>
                  <h3 className="font-display text-xl font-semibold leading-snug">{item.name}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <span className="text-sm font-semibold text-primary">Ver detalhes →</span>
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
