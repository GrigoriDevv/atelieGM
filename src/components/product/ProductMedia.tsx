import { ProductCarousel } from './ProductCarousel'

interface ProductMediaProps {
  productName: string
  imageSrc?: string
  images?: string[]
}

export function ProductMedia({ productName, imageSrc, images }: ProductMediaProps) {
  return (
    <ProductCarousel
      productName={productName}
      imageSrc={imageSrc}
      images={images}
      aspect="detail"
      autoPlay
      showArrows
      className="rounded-[1.75rem] shadow-[0_18px_40px_-28px_rgba(61,54,48,0.45)] ring-1 ring-border/60"
    />
  )
}
