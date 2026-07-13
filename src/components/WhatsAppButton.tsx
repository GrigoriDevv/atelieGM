import { useEffect, useState } from 'react'
import { WHATSAPP_URL } from '@/config/contact'
import { Button } from '@/components/ui/button'
import { IconWhatsApp } from '@/components/WhatsAppIcon'
import { cn } from '@/lib/utils'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const threshold = Math.min(window.innerHeight * 0.7, 560)
      setVisible(window.scrollY > threshold)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <Button
      asChild
      variant="whatsapp"
      size="icon-lg"
      className={cn(
        'fab-enter fixed right-5 bottom-5 z-40 shadow-lg shadow-whatsapp/40 sm:right-6 sm:bottom-6',
      )}
    >
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
        <IconWhatsApp className="size-7" />
      </a>
    </Button>
  )
}
