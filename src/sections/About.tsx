import { ABOUT_HIGHLIGHTS, BRAND } from '@/config/brand'
import SectionHead from '@/components/SectionHead'
import { Container, Section } from '@/components/layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function About() {
  return (
    <Section id="sobre" soft>
      <Container className="grid items-start gap-12 md:grid-cols-2">
        <div>
          <SectionHead
            eyebrow="Nossa história"
            title="Artesanato que transforma tecido em memória"
          />
          <p className="reveal mb-4 text-base leading-8 text-muted-foreground md:text-lg">
            O {BRAND.name} nasceu do amor pelos bordados e pelo cuidado em cada detalhe.
            Trabalhamos com peças para crianças e enxoval de cama, mesa e banho — sempre
            com a proposta de criar algo único, feito à mão e pensado especialmente para você.
          </p>
          <p className="reveal text-base leading-8 text-muted-foreground md:text-lg">
            Acreditamos que um bordado bem feito carrega carinho, história e significado.
            Por isso, cada encomenda recebe atenção individual, desde a escolha dos tecidos
            até o último ponto.
          </p>
        </div>

        <div className="grid gap-4">
          {ABOUT_HIGHLIGHTS.map((highlight) => (
            <Card key={highlight.title} className="reveal">
              <CardHeader className="pb-2">
                <CardTitle className="font-display text-xl">{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {highlight.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
