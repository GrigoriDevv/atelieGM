import type { LucideIcon } from 'lucide-react'
import { ArrowRight, Baby, Bath, BedDouble, Table } from 'lucide-react'
import { CATEGORIES, getCategoryWhatsAppUrl, type CategoryId } from '@/config/brand'
import SectionHead from '@/components/SectionHead'
import { Container, Section } from '@/components/layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { IconWhatsApp } from '@/components/WhatsAppIcon'

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
          eyebrow="Nossas especialidades"
          title="Para cada momento, um bordado especial"
          subtitle="Escolha a categoria e fale conosco pelo WhatsApp para receber um orçamento personalizado."
          center
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((category) => {
            const Icon = categoryIcons[category.id]
            const url = getCategoryWhatsAppUrl(category.id)

            return (
              <a
                key={category.id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal group"
              >
                <Card className="h-full transition-all group-hover:-translate-y-1 group-hover:border-primary group-hover:shadow-md">
                  <CardHeader>
                    <div className="mb-2 flex size-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                      <Icon className="size-6" />
                    </div>
                    <CardTitle className="font-display text-xl">{category.title}</CardTitle>
                    <CardDescription className="leading-relaxed">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-whatsapp transition-all group-hover:gap-2.5">
                      <IconWhatsApp className="size-4" />
                      Pedir orçamento
                      <ArrowRight className="size-3.5" />
                    </span>
                  </CardContent>
                </Card>
              </a>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
