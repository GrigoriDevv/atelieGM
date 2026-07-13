import { ImageIcon } from 'lucide-react'

interface ProductMediaProps {
  productName: string
  imageSrc?: string
}

export function ProductMedia({ productName, imageSrc }: ProductMediaProps) {
  if (imageSrc) {
    return (
      <div className="overflow-hidden rounded-2xl shadow-md">
        <img
          src={imageSrc}
          alt={`Foto de ${productName}`}
          className="aspect-[4/5] max-h-[min(70vw,28rem)] w-full object-cover sm:aspect-square sm:max-h-none"
        />
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
