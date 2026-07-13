import { ArrowRight, Check, ImageIcon } from 'lucide-react'
import { BRAND } from '@/config/brand'
import { WHATSAPP_URL } from '@/config/contact'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/layout'
import { IconWhatsApp } from '@/components/WhatsAppIcon'

const badges = ['100% artesanal', 'Peças personalizadas', 'Enxoval completo']

export default function Hero() {
  const words = BRAND.tagline.split(' ')
  const titleStart = words.slice(0, -2).join(' ')
  const titleEnd = words.slice(-2).join(' ')

  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden pt-header pb-16 md:pb-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(143,175,154,0.15),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(196,168,130,0.12),transparent_45%)]"
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="max-w-xl">
          <p className="hero-enter hero-enter-delay-1 mb-4 text-sm font-medium text-accent">
            Feito à mão sob encomenda
          </p>

          <h1 className="hero-enter hero-enter-delay-2 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-balance md:text-5xl lg:text-6xl">
            {titleStart} <em className="text-primary not-italic md:italic">{titleEnd}</em>
          </h1>

          <p className="hero-enter hero-enter-delay-3 mt-5 text-lg leading-relaxed text-muted-foreground">
            {BRAND.description}
          </p>

          <div className="hero-enter hero-enter-delay-4 mt-8 flex flex-wrap gap-3">
            <Button asChild variant="default" size="lg">
              <a href="#catalogo">
                Ver catálogo
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="lg">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <IconWhatsApp className="size-4" />
                Pedir orçamento
              </a>
            </Button>
          </div>

          <div className="hero-enter hero-enter-delay-4 mt-8 flex flex-wrap gap-2">
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

        <div className="hero-media-enter relative">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <div
              className="flex aspect-[4/5] max-h-[520px] flex-col items-center justify-center gap-3 bg-linear-to-br from-secondary to-placeholder-end px-6 text-center text-sm text-muted-foreground"
              role="img"
              aria-label="Espaço para foto de peça bordada do Ateliê GM. Adicione imagens em .impeccable/assets/proof ou public/images."
            >
              <ImageIcon className="size-12 text-primary/70" aria-hidden="true" />
              <span className="max-w-[12rem] leading-relaxed">
                Em breve: foto real do bordado
              </span>
            </div>
          </div>
          <aside className="absolute -bottom-4 -left-2 max-w-[200px] rounded-xl border border-border bg-card p-4 shadow-md sm:-left-4">
            <p className="font-display text-lg font-semibold leading-snug">Cada ponto, uma história</p>
            <span className="text-xs text-muted-foreground">Bordado à mão sob encomenda</span>
          </aside>
        </div>
      </Container>
    </section>
  )
}
