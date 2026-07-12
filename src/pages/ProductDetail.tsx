import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Check, ImageIcon } from 'lucide-react'
import { CATEGORIES, type CategoryId } from '@/config/brand'
import {
  buildCatalogWhatsAppUrl,
  getCatalogItemById,
  getProductPath,
  getQualityTiersForCategory,
  getRelatedCatalogItems,
  type QualityTier,
  type QualityTierId,
} from '@/config/catalog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Container, Section } from '@/components/layout'
import { IconWhatsApp } from '@/components/WhatsAppIcon'
import { cn } from '@/lib/utils'

const categoryLabels = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c.title]),
) as Record<CategoryId, string>

const tierBorder: Record<QualityTierId, string> = {
  bebe: 'border-l-[#d4a5a5]',
  'dia-a-dia': 'border-l-accent',
  'super-luxo': 'border-l-primary',
}

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
    return (
      <Section className="pt-28 text-center">
        <Container>
          <h1 className="font-display text-3xl font-semibold">Produto não encontrado</h1>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Essa opção não está mais disponível no catálogo. Volte e escolha outra peça.
          </p>
          <Button asChild variant="outline" className="mt-6">
            <Link to="/#catalogo">Voltar ao catálogo</Link>
          </Button>
        </Container>
      </Section>
    )
  }

  const categoryLabel = categoryLabels[item.category]
  const tiers = getQualityTiersForCategory(item.category)
  const related = getRelatedCatalogItems(item)
  const whatsappUrl = selectedTier
    ? buildCatalogWhatsAppUrl(item, categoryLabel, selectedTier)
    : undefined

  return (
    <Section id="produto" className="pt-28">
      <Container>
        <nav
          className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
          aria-label="Navegação do produto"
        >
          <Link to="/" className="hover:text-foreground">
            Início
          </Link>
          <span aria-hidden="true">/</span>
          <Link to="/#catalogo" className="hover:text-foreground">
            Catálogo
          </Link>
          <span aria-hidden="true">/</span>
          <span className="font-medium text-foreground">{item.name}</span>
        </nav>

        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-12">
          <div
            className="flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl bg-linear-to-br from-secondary to-[#ebe3d8] text-muted-foreground shadow-md"
            aria-hidden="true"
          >
            <ImageIcon className="size-14 opacity-50" />
            <span className="text-sm">Foto do produto</span>
          </div>

          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <Badge className="rounded-full bg-accent/15 text-accent hover:bg-accent/15">
                {categoryLabel}
              </Badge>
              {item.hint && (
                <span className="text-xs font-medium text-primary">{item.hint}</span>
              )}
            </div>

            <h1 className="font-display text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              {item.name}
            </h1>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{item.description}</p>
            <p className="mt-4 leading-relaxed">{item.longDescription}</p>

            <ul className="mt-6 space-y-3">
              {item.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h2 className="font-display text-xl font-semibold">Escolha a linha de qualidade</h2>
              <div
                className="mt-4 flex flex-col gap-3"
                role="radiogroup"
                aria-label="Linha de qualidade"
              >
                {tiers.map((tier) => {
                  const isSelected = selectedTier?.id === tier.id
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => setSelectedTier(tier)}
                      className={cn(
                        'rounded-xl border border-border border-l-[3px] bg-card p-4 text-left transition-all',
                        tierBorder[tier.id],
                        isSelected && 'border-primary shadow-[0_0_0_1px_var(--primary)]',
                      )}
                    >
                      <span className="font-display text-lg font-semibold">{tier.label}</span>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {tier.description}
                      </p>
                    </button>
                  )
                })}
              </div>
            </div>

            {whatsappUrl && selectedTier && (
              <Button asChild variant="whatsapp" size="lg" className="mt-6 w-full md:w-auto">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <IconWhatsApp className="size-4" />
                  Pedir orçamento — {selectedTier.label}
                </a>
              </Button>
            )}

            <Link
              to="/#catalogo"
              className="mt-4 inline-block text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              ← Voltar ao catálogo
            </Link>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-14">
            <Separator className="mb-10" />
            <h2 className="mb-5 font-display text-2xl font-semibold">
              Outras opções de {categoryLabel}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedItem) => (
                <Card
                  key={relatedItem.id}
                  className="overflow-hidden py-0 transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <Link to={getProductPath(relatedItem.id)}>
                    <div className="flex aspect-video items-center justify-center bg-linear-to-br from-secondary to-[#ebe3d8] text-muted-foreground">
                      <ImageIcon className="size-7 opacity-60" />
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
        )}
      </Container>
    </Section>
  )
}
