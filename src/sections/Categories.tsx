import { Link } from 'react-router-dom'
import type { CSSProperties } from 'react'
import { ArrowRight } from 'lucide-react'
import { CATEGORIES, type CategoryId } from '@/config/brand'
import { CATALOG_ITEMS } from '@/config/catalog'
import SectionHead from '@/components/SectionHead'
import { Container, Section } from '@/components/layout'
import { cn } from '@/lib/utils'

const categoryImages: Partial<Record<CategoryId, string>> = {
  criancas: '/images/kit-berco-maria-helena-1.png',
  cama: '/images/jogo-lencol-virol-fronha.png',
  banho: '/images/kit-toalhas-banho-rosto.png',
  mesa: '/images/kit-safari-paulo-francisco.png',
}

const tileTints = ['bg-pastel-pink', 'bg-pastel-blue', 'bg-secondary'] as const

const availableCategories = CATEGORIES.filter((category) =>
  CATALOG_ITEMS.some((item) => item.category === category.id),
)

export default function Categories() {
  return (
    <Section id="categorias">
      <Container>
        <SectionHead
          eyebrow="Categorias"
          title="Para cada momento, um bordado especial"
          subtitle="Escolha a linha e veja as peças no catálogo — o orçamento fica para o WhatsApp quando você estiver pronta."
          center
        />

        <div className="stagger grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {availableCategories.map((category, index) => (
            <Link
              key={category.id}
              to="/#catalogo"
              className={cn(
                'reveal group relative flex flex-col overflow-hidden rounded-[1.75rem] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-1 hover:shadow-[0_22px_44px_-28px_rgba(64,55,47,0.4)]',
                tileTints[index % tileTints.length],
              )}
              style={{ '--i': index } as CSSProperties}
            >
              <div className="overflow-hidden px-6 pt-6 sm:px-8 sm:pt-8">
                <img
                  src={categoryImages[category.id]}
                  alt={`Peças bordadas da linha ${category.title}`}
                  className="aspect-[4/3] w-full rounded-[1.25rem] object-cover shadow-[0_16px_32px_-24px_rgba(64,55,47,0.45)] transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col px-6 pt-5 pb-6 text-center sm:px-8 sm:pt-6 sm:pb-8">
                <h3 className="font-display text-2xl font-semibold tracking-[0.14em] uppercase">
                  {category.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[28ch] flex-1 text-sm leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
                <span className="mx-auto mt-4 inline-flex items-center gap-1.5 text-[0.6875rem] font-bold tracking-[0.2em] text-foreground uppercase transition-all duration-300 group-hover:gap-2.5 group-hover:text-primary">
                  Ver no catálogo
                  <ArrowRight className="size-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  )
}
