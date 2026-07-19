import type { CSSProperties } from 'react'
import { CATEGORIES, GALLERY_ITEMS } from '@/config/brand'
import SectionHead from '@/components/SectionHead'
import { Container, Section } from '@/components/layout'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const categoryLabels = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c.title]),
) as Record<string, string>

const galleryFocus: Record<string, string> = {
  '/images/kit-berco-maria-fernanda.png': 'object-[center_42%]',
  '/images/kit-berco-maria-helena-1.png': 'object-[center_40%]',
  '/images/kit-berco-mavie.png': 'object-[center_42%]',
  '/images/toalha-batismo-luiza.png': 'object-[center_42%]',
  '/images/jogo-lencol-virol-fronha.png': 'object-[center_48%]',
}

const galleryItems = GALLERY_ITEMS.filter((item) => Boolean(item.image))

export default function Gallery() {
  return (
    <Section id="galeria">
      <Container>
        <SectionHead
          title="Peças feitas com dedicação"
          subtitle="Um olhar sobre o acabamento artesanal — cada trabalho é único."
        />

        <div className="stagger grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-4 md:gap-4">
          {galleryItems.map((item, index) => {
            const featured = index === 0
            return (
              <figure
                key={item.id}
                className={cn(
                  'reveal group relative overflow-hidden rounded-xl bg-pastel-lavender sm:rounded-2xl',
                  featured
                    ? 'col-span-2 row-span-2 aspect-square md:aspect-auto md:min-h-[28rem]'
                    : 'aspect-square',
                )}
                style={{ '--i': Math.min(index, 5) } as CSSProperties}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className={cn(
                    'media-zoom size-full object-cover transition-transform',
                    galleryFocus[item.image!] ?? 'object-[center_45%]',
                  )}
                  loading="lazy"
                />
                <Badge className="absolute bottom-2 left-2 rounded-full bg-card/95 text-[0.65rem] font-medium tracking-wide text-foreground hover:bg-card/95 sm:bottom-3 sm:left-3 sm:text-xs">
                  {categoryLabels[item.category]}
                </Badge>
              </figure>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
