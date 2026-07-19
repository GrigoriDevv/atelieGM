import type { CSSProperties } from 'react'
import { ABOUT_HIGHLIGHTS, BRAND } from '@/config/brand'
import SectionHead from '@/components/SectionHead'
import { Container, Section } from '@/components/layout'

export default function About() {
  return (
    <Section id="sobre" soft>
      <Container className="grid items-start gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <div>
          <SectionHead
            title="Artesanato que transforma tecido em memória"
            className="mb-6 md:mb-8"
          />
          <p className="reveal text-base leading-8 text-muted-foreground md:text-lg">
            A {BRAND.name} nasceu do amor pelos bordados e pelo cuidado em cada detalhe.
            Trabalhamos com peças para crianças e enxoval de cama, mesa e banho — sempre
            com a proposta de criar algo único, feito à mão e pensado especialmente para você.
          </p>
          <p className="reveal mt-5 text-base leading-8 text-muted-foreground md:text-lg">
            Acreditamos que um bordado bem feito carrega carinho, história e significado.
            Por isso, cada encomenda recebe atenção individual, desde a escolha dos tecidos
            até o último ponto.
          </p>
        </div>

        <ul className="stagger divide-y divide-border border-y border-border">
          {ABOUT_HIGHLIGHTS.map((highlight, index) => (
            <li
              key={highlight.title}
              className="reveal py-5"
              style={{ '--i': index } as CSSProperties}
            >
              <h3 className="font-display text-xl font-semibold">{highlight.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {highlight.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
