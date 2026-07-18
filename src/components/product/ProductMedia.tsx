import { useCallback, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProductMediaProps {
  productName: string
  imageSrc?: string
  images?: string[]
}

const frameClass =
  'aspect-[4/5] max-h-[min(70vw,28rem)] w-full object-cover sm:aspect-square sm:max-h-none'

export function ProductMedia({ productName, imageSrc, images }: ProductMediaProps) {
  const slides = images && images.length > 1 ? images : null
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const handleScroll = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    setActive(Math.round(track.scrollLeft / track.clientWidth))
  }, [])

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current
    if (!track) return
    track.scrollTo({ left: index * track.clientWidth, behavior: 'smooth' })
  }, [])

  if (slides) {
    return (
      <div
        className="group relative overflow-hidden rounded-2xl shadow-md"
        role="region"
        aria-roledescription="carrossel"
        aria-label={`Fotos de ${productName}`}
      >
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Foto ${index + 1} de ${slides.length} — ${productName}`}
              className={cn(frameClass, 'shrink-0 snap-center')}
              loading={index === 0 ? 'eager' : 'lazy'}
              draggable={false}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollTo(Math.max(active - 1, 0))}
          disabled={active === 0}
          aria-label="Foto anterior"
          className="absolute top-1/2 left-2 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-sm backdrop-blur-sm transition-opacity hover:bg-background disabled:pointer-events-none disabled:opacity-0 sm:flex"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollTo(Math.min(active + 1, slides.length - 1))}
          disabled={active === slides.length - 1}
          aria-label="Próxima foto"
          className="absolute top-1/2 right-2 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-sm backdrop-blur-sm transition-opacity hover:bg-background disabled:pointer-events-none disabled:opacity-0 sm:flex"
        >
          <ChevronRight className="size-5" />
        </button>

        <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
          {slides.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => scrollTo(index)}
              aria-label={`Ir para a foto ${index + 1}`}
              aria-current={index === active}
              className={cn(
                'size-2 rounded-full bg-background/70 shadow-sm transition-all',
                index === active && 'w-5 bg-background',
              )}
            />
          ))}
        </div>
      </div>
    )
  }

  if (imageSrc) {
    return (
      <div className="overflow-hidden rounded-2xl shadow-md">
        <img src={imageSrc} alt={`Foto de ${productName}`} className={frameClass} />
      </div>
    )
  }

  return (
    <div
      className="flex aspect-[4/5] max-h-[min(70vw,28rem)] flex-col items-center justify-center gap-3 rounded-2xl bg-linear-to-br from-secondary to-placeholder-end text-muted-foreground shadow-md sm:aspect-square sm:max-h-none"
      role="img"
      aria-label={`Espaço reservado para foto de ${productName}`}
    >
      <ImageIcon className="size-14 opacity-50" aria-hidden="true" />
      <span className="text-sm">Foto do produto</span>
    </div>
  )
}
