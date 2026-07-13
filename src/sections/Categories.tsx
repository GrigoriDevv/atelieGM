import { Link } from 'react-router-dom'
import type { CSSProperties } from 'react'
import type { LucideIcon } from 'lucide-react'
import { ArrowRight, Baby, Bath, BedDouble, Table } from 'lucide-react'
import { CATEGORIES, type CategoryId } from '@/config/brand'
import SectionHead from '@/components/SectionHead'
import { Container, Section } from '@/components/layout'

const categoryIcons: Record<CategoryId, LucideIcon> = {
  criancas: Baby,
  cama: BedDouble,
  mesa: Table,
  banho: Bath,
}

export default function Categories() {
  return (
    <Section id="categorias">
      <Container>
        <SectionHead
          title="Para cada momento, um bordado especial"
          subtitle="Escolha a linha e veja as peças no catálogo — o orçamento fica para o WhatsApp quando você estiver pronta."
        />

        <div className="stagger grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {CATEGORIES.map((category, index) => {
            const Icon = categoryIcons[category.id]

            return (
              <Link
                key={category.id}
                to="/#catalogo"
                className="reveal group flex gap-5"
                style={{ '--i': index } as CSSProperties}
              >
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent transition-colors duration-200 group-hover:bg-accent/25">
                  <Icon className="size-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-2xl font-semibold tracking-tight">{category.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {category.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-all duration-200 group-hover:gap-2.5 group-hover:text-primary">
                    Ver no catálogo
                    <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
