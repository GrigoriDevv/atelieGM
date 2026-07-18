import { ArrowRight, Check } from 'lucide-react'
import { BRAND } from '@/config/brand'
import { WHATSAPP_URL } from '@/config/contact'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/layout'
import { IconWhatsApp } from '@/components/WhatsAppIcon'

const badges = ['100% artesanal', 'Peças personalizadas', 'Enxoval completo']
const heroImage = '/images/kit-berco-maria-fernanda.png'

export default function Hero() {
  const words = BRAND.tagline.split(' ')
  const titleStart = words.slice(0, -2).join(' ')
  const titleEnd = words.slice(-2).join(' ')

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-header pb-10 sm:pb-16 md:min-h-svh md:pb-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(226,176,176,0.18),transparent_48%),radial-gradient(circle_at_78%_68%,rgba(143,181,154,0.16),transparent_46%),radial-gradient(circle_at_50%_100%,rgba(212,162,138,0.12),transparent_40%)]"
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-8 md:grid-cols-2 md:gap-16">
        <div className="order-1 max-w-xl">
          <p className="hero-enter hero-enter-delay-1 mb-3 text-sm font-semibold tracking-wide text-accent sm:mb-4">
            Feito à mão sob encomenda
          </p>

          <h1 className="hero-enter hero-enter-delay-2 font-display text-[2.05rem] font-semibold leading-[1.1] tracking-[-0.02em] text-balance sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            {titleStart}{' '}
            <em className="text-primary not-italic md:italic">{titleEnd}</em>
          </h1>

          <p className="hero-enter hero-enter-delay-3 mt-4 text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
            {BRAND.description}
          </p>

          <div className="hero-enter hero-enter-delay-4 mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <Button asChild variant="default" size="lg" className="w-full touch-target sm:w-auto">
              <a href="#catalogo">
                Ver catálogo
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="lg" className="w-full touch-target sm:w-auto">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <IconWhatsApp className="size-4" />
                Pedir orçamento
              </a>
            </Button>
          </div>

          <div className="hero-enter hero-enter-delay-4 mt-6 flex flex-wrap gap-2 sm:mt-8">
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

        <div className="hero-media-enter relative order-2">
          <div className="overflow-hidden rounded-[1.85rem] shadow-[0_24px_48px_-28px_rgba(63,52,47,0.45)] ring-1 ring-border/50">
            <img
              src={heroImage}
              alt="Kit berço personalizado do Ateliê GM com bordado à mão"
              className="aspect-[4/5] max-h-[min(52vh,420px)] w-full object-cover md:max-h-[520px]"
              width={800}
              height={1000}
              fetchPriority="high"
            />
          </div>
          <aside className="absolute -bottom-3 left-3 hidden max-w-[210px] rounded-2xl border border-border/70 bg-card/95 p-4 shadow-lg backdrop-blur-sm sm:left-0 sm:block md:-left-4 md:-bottom-4">
            <p className="font-display text-lg font-semibold leading-snug">Cada ponto, uma história</p>
            <span className="text-xs font-medium text-muted-foreground">
              Bordado à mão sob encomenda
            </span>
          </aside>
        </div>
      </Container>
    </section>
  )
}
