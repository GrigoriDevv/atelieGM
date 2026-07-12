import { ImageIcon } from 'lucide-react'
import { CATEGORIES, GALLERY_ITEMS } from '@/config/brand'
import SectionHead from '@/components/SectionHead'
import { Container, Section } from '@/components/layout'
import { Badge } from '@/components/ui/badge'

const categoryLabels = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c.title]),
) as Record<string, string>

export default function Gallery() {
  return (
    <Section id="galeria">
      <Container>
        <SectionHead
          eyebrow="Portfólio"
          title="Peças feitas com dedicação"
          subtitle="Cada trabalho é único. Substitua estes placeholders pelas fotos reais das suas peças."
          center
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {GALLERY_ITEMS.map((item) => (
            <figure
              key={item.id}
              className="reveal relative aspect-square overflow-hidden rounded-2xl bg-secondary shadow-sm"
            >
              <div className="flex h-full flex-col items-center justify-center gap-2 bg-linear-to-br from-secondary to-[#ebe3d8] p-4 text-center">
                <ImageIcon className="size-8 text-muted-foreground/60" />
                <span className="text-xs text-muted-foreground">{item.alt}</span>
              </div>
              <Badge className="absolute bottom-3 left-3 rounded-full bg-card/90 text-[0.6875rem] font-semibold uppercase tracking-wide text-foreground hover:bg-card/90">
                {categoryLabels[item.category]}
              </Badge>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  )
}
