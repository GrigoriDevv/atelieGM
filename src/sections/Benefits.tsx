import type { CSSProperties } from 'react'
import type { LucideIcon } from 'lucide-react'
import { Gem, HandHeart, Leaf, MessageCircleHeart } from 'lucide-react'
import { Container } from '@/components/layout'

interface Benefit {
  icon: LucideIcon
  title: string
  description: string
}

const BENEFITS: Benefit[] = [
  {
    icon: HandHeart,
    title: 'Feito à mão',
    description: 'Cada ponto bordado manualmente',
  },
  {
    icon: Gem,
    title: 'Peças exclusivas',
    description: 'Nomes, monogramas e desenhos únicos',
  },
  {
    icon: Leaf,
    title: 'Materiais de qualidade',
    description: 'Linhas e tecidos selecionados',
  },
  {
    icon: MessageCircleHeart,
    title: 'Orçamento sem compromisso',
    description: 'Atendimento pelo WhatsApp',
  },
]

export default function Benefits() {
  return (
    <section aria-label="Diferenciais do ateliê" className="py-8 sm:py-10 md:py-14">
      <Container>
        <ul className="stagger grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 md:gap-x-10">
          {BENEFITS.map((benefit, index) => (
            <li
              key={benefit.title}
              className="reveal flex flex-col items-center gap-3 text-center sm:flex-row sm:items-start sm:gap-4 sm:text-left"
              style={{ '--i': index } as CSSProperties}
            >
              <benefit.icon
                className="size-7 shrink-0 text-primary sm:mt-0.5"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <div>
                <h3 className="text-[0.6875rem] font-bold tracking-[0.18em] uppercase">
                  {benefit.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {benefit.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
