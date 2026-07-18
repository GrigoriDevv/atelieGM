import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react'
import { ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ProductCarouselProps {
  productName: string
  images?: string[]
  imageSrc?: string
  /** Catalog card / related card aspect */
  aspect?: 'card' | 'detail' | 'related'
  autoPlay?: boolean
  className?: string
  /** When true, arrows stay hidden (catalog cards) */
  showArrows?: boolean
}

const aspectClass = {
  card: 'aspect-[4/3]',
  related: 'aspect-video',
  detail:
    'aspect-[4/5] max-h-[min(70vw,28rem)] sm:aspect-square sm:max-h-none',
} as const

const AUTO_MS = 4200

export function ProductCarousel({
  productName,
  images,
  imageSrc,
  aspect = 'detail',
  autoPlay = false,
  className,
  showArrows = true,
}: ProductCarouselProps) {
  const slides =
    images && images.length > 0
      ? images
      : imageSrc
        ? [imageSrc]
        : []

  const multi = slides.length > 1
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduceMotion = usePrefersReducedMotion()
  const touchStartX = useRef<number | null>(null)

  const goTo = useCallback(
    (index: number) => {
      if (!multi) return
      const next = ((index % slides.length) + slides.length) % slides.length
      setActive(next)
    },
    [multi, slides.length],
  )

  const goPrev = useCallback(() => goTo(active - 1), [active, goTo])
  const goNext = useCallback(() => goTo(active + 1), [active, goTo])

  useEffect(() => {
    if (!multi || !autoPlay || paused || reduceMotion) return
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length)
    }, AUTO_MS)
    return () => window.clearInterval(id)
  }, [multi, autoPlay, paused, reduceMotion, slides.length])

  if (slides.length === 0) {
    return (
      <div
        className={cn(
          'flex flex-col items-center justify-center gap-3 bg-linear-to-br from-secondary to-placeholder-end text-muted-foreground',
          aspectClass[aspect],
          className,
        )}
        role="img"
        aria-label={`Espaço reservado para foto de ${productName}`}
      >
        <ImageIcon className="size-10 opacity-50" aria-hidden="true" />
        <span className="text-sm">Foto do produto</span>
      </div>
    )
  }

  return (
    <div
      className={cn(
        'group relative overflow-hidden bg-secondary',
        aspectClass[aspect],
        className,
      )}
      role={multi ? 'region' : undefined}
      aria-roledescription={multi ? 'carrossel' : undefined}
      aria-label={multi ? `Fotos de ${productName}` : undefined}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false)
        }
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.changedTouches[0]?.clientX ?? null
      }}
      onTouchEnd={(event) => {
        if (touchStartX.current == null || !multi) return
        const delta = (event.changedTouches[0]?.clientX ?? 0) - touchStartX.current
        touchStartX.current = null
        if (Math.abs(delta) < 40) return
        if (delta > 0) goPrev()
        else goNext()
      }}
    >
      {slides.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={
            multi
              ? `Foto ${index + 1} de ${slides.length} — ${productName}`
              : `Foto de ${productName}`
          }
          className={cn(
            'absolute inset-0 size-full object-cover',
            'carousel-slide',
            index === active ? 'is-active' : 'is-idle',
          )}
          style={{ '--slide-i': index } as CSSProperties}
          loading={index === 0 ? 'eager' : 'lazy'}
          draggable={false}
        />
      ))}

      {multi && showArrows && (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              event.stopPropagation()
              goPrev()
            }}
            aria-label="Foto anterior"
            className="absolute top-1/2 left-2 z-10 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full bg-card/85 text-foreground shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-card hover:scale-105 sm:flex opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              event.stopPropagation()
              goNext()
            }}
            aria-label="Próxima foto"
            className="absolute top-1/2 right-2 z-10 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full bg-card/85 text-foreground shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-card hover:scale-105 sm:flex opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
          >
            <ChevronRight className="size-5" />
          </button>
        </>
      )}

      {multi && (
        <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center gap-1.5 px-3">
          {slides.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={(event) => {
                event.preventDefault()
                event.stopPropagation()
                goTo(index)
              }}
              aria-label={`Ir para a foto ${index + 1}`}
              aria-current={index === active}
              className={cn(
                'h-1.5 rounded-full bg-card/55 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]',
                index === active ? 'w-6 bg-card' : 'w-1.5 hover:bg-card/80',
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return reduced
}
