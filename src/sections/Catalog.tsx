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

function filterItems(filter: CatalogFilter): CatalogItem[] {
  if (filter === 'todos') return CATALOG_ITEMS
  return CATALOG_ITEMS.filter((item) => item.category === filter)
}

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
          className="mb-8"
        >
          <TabsList className="flex h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0 sm:w-auto">
            <TabsTrigger
              value="todos"
              className="rounded-full border border-border bg-card px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Todos
            </TabsTrigger>
            {CATEGORIES.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="rounded-full border border-border bg-card px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="stagger grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Card
              key={item.id}
              className="reveal overflow-hidden py-0 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-md"
              style={{ '--i': Math.min(index, 8) } as CSSProperties}
            >
              <Link to={getProductPath(item.id)} className="flex h-full flex-col">
                <div className="flex aspect-[4/3] items-center justify-center bg-linear-to-br from-secondary to-placeholder-end text-muted-foreground">
                  <ImageIcon className="size-8 opacity-60" />
                </div>
                <CardContent className="flex flex-1 flex-col gap-3 p-5">
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
