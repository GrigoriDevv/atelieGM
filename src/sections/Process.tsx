import { PROCESS_STEPS } from '@/config/brand'
import SectionHead from '@/components/SectionHead'
import { Container, Section } from '@/components/layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Process() {
  return (
    <Section id="como-funciona">
      <Container>
        <SectionHead
          eyebrow="Como funciona"
          title="Do pedido à entrega, com simplicidade"
          subtitle="Todo o processo acontece pelo WhatsApp — rápido, personalizado e sem complicação."
          center
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <Card key={step.step} className="reveal">
              <CardHeader className="items-start gap-3 lg:items-center lg:text-center">
                <div className="flex size-11 items-center justify-center rounded-full bg-primary/15 font-display text-lg font-bold text-primary">
                  {step.step}
                </div>
                <CardTitle className="font-display text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="lg:text-center">
                <CardDescription className="leading-relaxed">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
