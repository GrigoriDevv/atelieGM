import { ArrowRight, Check, ImageIcon } from 'lucide-react'
import { BRAND } from '@/config/brand'
import { WHATSAPP_URL } from '@/config/contact'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Container } from '@/components/layout'
import { IconWhatsApp } from '@/components/WhatsAppIcon'

const badges = ['100% artesanal', 'Peças personalizadas', 'Enxoval completo']

export default function Hero() {
  const words = BRAND.tagline.split(' ')
  const titleStart = words.slice(0, -2).join(' ')
  const titleEnd = words.slice(-2).join(' ')

  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden pt-24 pb-12">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(143,175,154,0.15),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(196,168,130,0.12),transparent_45%)]"
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="max-w-xl">
          <span className="reveal mb-3 inline-block text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            Bordados exclusivos
          </span>

          <h1 className="reveal font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            {titleStart} <em className="text-primary">{titleEnd}</em>
          </h1>

          <p className="reveal mt-5 text-lg leading-relaxed text-muted-foreground">
            {BRAND.description}
          </p>

          <div className="reveal mt-8 flex flex-wrap gap-3">
            <Button asChild variant="whatsapp" size="lg">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <IconWhatsApp className="size-4" />
                Pedir orçamento no WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#galeria">
                Ver galeria
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>

          <div className="reveal mt-8 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <Badge
                key={badge}
                variant="secondary"
                className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
              >
                <Check className="size-3.5 text-accent" />
                {badge}
              </Badge>
            ))}
          </div>
        </div>

        <div className="reveal relative" aria-hidden="true">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <div className="flex aspect-[4/5] max-h-[520px] flex-col items-center justify-center gap-3 bg-linear-to-br from-secondary to-[#ebe3d8] text-sm text-muted-foreground">
              <ImageIcon className="size-12 opacity-50" />
              <span>Foto da peça em destaque</span>
            </div>
          </div>
          <Card className="absolute -bottom-4 -left-2 max-w-[200px] shadow-md sm:-left-4">
            <CardContent className="p-4">
              <p className="font-display text-lg font-semibold leading-snug">Cada ponto, uma história</p>
              <span className="text-xs text-muted-foreground">Bordado à mão com amor</span>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  )
}
