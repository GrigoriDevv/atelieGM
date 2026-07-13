import { Button } from '@/components/ui/button'
import { IconWhatsApp } from '@/components/WhatsAppIcon'
import { cn } from '@/lib/utils'

interface ProductQuoteCtaProps {
  whatsappUrl: string
  tierLabel: string
  className?: string
  sticky?: boolean
}

export function ProductQuoteCta({
  whatsappUrl,
  tierLabel,
  className,
  sticky = false,
}: ProductQuoteCtaProps) {
  return (
    <div
      className={cn(
        sticky &&
          'sticky bottom-0 z-30 -mx-4 border-t border-border bg-background/95 px-4 py-3 backdrop-blur-md supports-[backdrop-filter]:bg-background/90 md:static md:z-auto md:mx-0 md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none',
        sticky && 'pb-[max(0.75rem,env(safe-area-inset-bottom))] md:pb-0',
        className,
      )}
    >
      <Button asChild variant="whatsapp" size="lg" className="mt-0 w-full touch-target md:mt-6 md:w-auto">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <IconWhatsApp className="size-4" />
          Pedir orçamento — {tierLabel}
        </a>
      </Button>
    </div>
  )
}
