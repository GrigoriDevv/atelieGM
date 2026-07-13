import type { CSSProperties } from 'react'
import { PROCESS_STEPS } from '@/config/brand'
import SectionHead from '@/components/SectionHead'
import { Container, Section } from '@/components/layout'

export default function Process() {
  return (
    <Section id="como-funciona">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-16">
          <SectionHead
            title="Do pedido à entrega"
            subtitle="Todo o processo acontece pelo WhatsApp — rápido, personalizado e sem complicação."
            className="mb-0 md:mb-0"
          />

          <ol className="stagger relative space-y-0 border-l border-border pl-6 md:pl-8">
            {PROCESS_STEPS.map((step, index) => (
              <li
                key={step.step}
                className="reveal relative pb-10 last:pb-0"
                style={{ '--i': index } as CSSProperties}
              >
                <span
                  className="absolute -left-[1.9rem] top-0 flex size-8 items-center justify-center rounded-full bg-background font-display text-sm font-bold text-primary ring-4 ring-background md:-left-[2.35rem] md:size-9 md:text-base"
                  aria-hidden="true"
                >
                  {step.step}
                </span>
                <h3 className="font-display text-xl font-semibold md:text-2xl">{step.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  )
}
