import type { CSSProperties } from 'react'
import { ImageIcon } from 'lucide-react'
import { CATEGORIES, GALLERY_ITEMS } from '@/config/brand'
import SectionHead from '@/components/SectionHead'
import { Container, Section } from '@/components/layout'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const categoryLabels = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c.title]),
) as Record<string, string>

export default function Gallery() {
  return (
    <Section id="galeria">
      <Container>
        <SectionHead
          title="Peças feitas com dedicação"
          subtitle="Um olhar sobre o acabamento artesanal — cada trabalho é único."
        />

        <div className="stagger grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {GALLERY_ITEMS.map((item, index) => {
            const featured = index === 0
            return (
              <figure
                key={item.id}
                className={cn(
                  'reveal relative overflow-hidden rounded-2xl bg-secondary',
                  featured
                    ? 'col-span-2 row-span-2 aspect-square md:aspect-auto md:min-h-[28rem]'
                    : 'aspect-square',
                )}
                style={{ '--i': Math.min(index, 5) } as CSSProperties}
              >
                <div className="flex h-full flex-col items-center justify-center gap-2 bg-linear-to-br from-secondary to-placeholder-end p-4 text-center">
                  <ImageIcon
                    className={cn(
                      'text-muted-foreground/60',
                      featured ? 'size-12' : 'size-8',
                    )}
                  />
                  <span
                    className={cn(
                      'text-muted-foreground',
                      featured ? 'max-w-[14rem] text-sm' : 'text-xs',
                    )}
                  >
                    {item.alt}
                  </span>
                </div>
                <Badge className="absolute bottom-3 left-3 rounded-full bg-card/95 text-xs font-medium tracking-wide text-foreground hover:bg-card/95">
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
