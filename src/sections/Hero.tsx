import { ArrowRight } from 'lucide-react'
import { BRAND } from '@/config/brand'
import { WHATSAPP_URL } from '@/config/contact'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/layout'
import { IconWhatsApp } from '@/components/WhatsAppIcon'

const badges = ['100% artesanal', 'Peças personalizadas', 'Enxoval completo']
const heroImage = '/images/kit-berco-maria-fernanda.png'

export default function Hero() {
  const words = BRAND.tagline.split(' ')
  const titleStart = words.slice(0, -2).join(' ')
  const titleEnd = words.slice(-2).join(' ')

  return (
    <section id="top" className="pt-header pb-6 sm:pb-10 md:pb-14">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-pastel-blue sm:rounded-[2.5rem]">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(255,255,255,0.55),transparent_46%),radial-gradient(circle_at_10%_90%,rgba(248,226,230,0.6),transparent_44%)]"
            aria-hidden="true"
          />

          <div className="relative grid items-center gap-8 px-5 py-10 sm:px-10 sm:py-14 md:grid-cols-[1.05fr_0.95fr] md:gap-12 md:px-14 md:py-16">
            <div className="order-1 max-w-xl">
              <p className="hero-enter hero-enter-delay-1 mb-4 text-[0.6875rem] font-bold tracking-[0.3em] text-accent uppercase">
                Feito à mão sob encomenda
              </p>

              <h1 className="hero-enter hero-enter-delay-2 font-display text-[2.05rem] font-semibold leading-[1.08] tracking-[-0.02em] text-balance sm:text-4xl md:text-5xl lg:text-[3.4rem]">
                {titleStart}{' '}
                <em className="text-primary not-italic md:italic">{titleEnd}</em>
              </h1>

              <p className="hero-enter hero-enter-delay-3 mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
                {BRAND.description}
              </p>

              <div className="hero-enter hero-enter-delay-4 mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
                <Button asChild variant="default" size="lg" className="w-full touch-target bg-card/60 sm:w-auto">
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

              <ul className="hero-enter hero-enter-delay-4 mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 sm:mt-9">
                {badges.map((badge) => (
                  <li
                    key={badge}
                    className="flex items-center gap-2 text-[0.6875rem] font-bold tracking-[0.18em] text-foreground/70 uppercase"
                  >
                    <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                    {badge}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hero-media-enter relative order-2">
              <div className="overflow-hidden rounded-[1.75rem] shadow-[0_28px_56px_-30px_rgba(64,55,47,0.5)]">
                <img
                  src={heroImage}
                  alt="Kit berço personalizado do Ateliê GM com bordado à mão"
                  className="aspect-[4/5] max-h-[min(50vh,400px)] w-full object-cover md:max-h-[500px]"
                  width={800}
                  height={1000}
                  fetchPriority="high"
                />
              </div>
              <aside className="absolute -bottom-3 left-3 hidden max-w-[210px] rounded-2xl bg-card/95 p-4 shadow-lg backdrop-blur-sm sm:left-0 sm:block md:-left-5 md:-bottom-4">
                <p className="font-display text-lg font-semibold leading-snug">
                  Cada ponto, uma história
                </p>
                <span className="text-[0.625rem] font-bold tracking-[0.2em] text-muted-foreground uppercase">
                  Bordado à mão
                </span>
              </aside>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
