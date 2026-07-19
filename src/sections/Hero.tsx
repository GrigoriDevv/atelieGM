import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { BRAND } from '@/config/brand'
import { WHATSAPP_URL } from '@/config/contact'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/layout'
import { IconWhatsApp } from '@/components/WhatsAppIcon'
import { cn } from '@/lib/utils'

const badges = ['100% artesanal', 'Peças personalizadas', 'Enxoval completo']

const HERO_SLIDES = [
  {
    category: 'Para Bebê',
    src: '/images/kit-berco-maria-fernanda.png',
    alt: 'Kit berço personalizado da GM Arteira — linha Para Bebê',
    focus: 'object-[center_42%]',
  },
  {
    category: 'Banho',
    src: '/images/kit-toalhas-banho-rosto.png',
    alt: 'Kit de toalhas de banho e rosto bordadas — linha Banho',
    focus: 'object-[center_46%]',
  },
  {
    category: 'Cama',
    src: '/images/hero-cama-maria-fernanda.png',
    alt: 'Jogo de lençol e fronhas bordados no berço — linha Cama',
    focus: 'object-[center_48%]',
  },
] as const

const HERO_INTERVAL_MS = 15_000

export default function Hero() {
  const words = BRAND.tagline.split(' ')
  const titleStart = words.slice(0, -2).join(' ')
  const titleEnd = words.slice(-2).join(' ')
  const [active, setActive] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduceMotion(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (reduceMotion) return
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % HERO_SLIDES.length)
    }, HERO_INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [reduceMotion])

  const slide = HERO_SLIDES[active]

  return (
    <section id="top" className="pt-header pb-6 sm:pb-10 md:pb-14">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-pastel-blue sm:rounded-[2.5rem]">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.65),transparent_48%),radial-gradient(circle_at_12%_88%,rgba(252,233,237,0.75),transparent_46%),radial-gradient(circle_at_60%_60%,rgba(232,244,238,0.45),transparent_40%)]"
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
                <Button asChild variant="default" size="lg" className="w-full touch-target bg-card/70 sm:w-auto">
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
              <div
                className="media-frame relative aspect-[4/5] max-h-[min(52vh,420px)] overflow-hidden rounded-[1.75rem] shadow-[0_28px_56px_-30px_rgba(58,53,64,0.45)] md:max-h-[520px]"
                role="region"
                aria-roledescription="carrossel"
                aria-label="Fotos por categoria: Para Bebê, Banho e Cama"
              >
                {HERO_SLIDES.map((item, index) => (
                  <img
                    key={item.src}
                    src={item.src}
                    alt={item.alt}
                    className={cn(
                      'absolute inset-0 size-full object-cover carousel-slide',
                      item.focus,
                      index === active ? 'is-active' : 'is-idle',
                    )}
                    width={1024}
                    height={903}
                    fetchPriority={index === 0 ? 'high' : 'low'}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                ))}

                <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center gap-1.5 px-3">
                  {HERO_SLIDES.map((item, index) => (
                    <button
                      key={item.category}
                      type="button"
                      onClick={() => setActive(index)}
                      aria-label={`Mostrar ${item.category}`}
                      aria-current={index === active}
                      className={cn(
                        'h-1.5 rounded-full bg-card/55 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]',
                        index === active ? 'w-6 bg-card' : 'w-1.5 hover:bg-card/80',
                      )}
                    />
                  ))}
                </div>
              </div>

              <aside className="absolute -bottom-3 left-3 z-10 hidden max-w-[210px] rounded-2xl bg-card/95 p-4 shadow-lg backdrop-blur-sm sm:left-0 sm:block md:-left-5 md:-bottom-4">
                <p className="font-display text-lg font-semibold leading-snug">
                  Cada ponto, uma história
                </p>
                <span className="text-[0.625rem] font-bold tracking-[0.2em] text-muted-foreground uppercase">
                  {slide.category}
                </span>
              </aside>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
