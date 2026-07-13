import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { WHATSAPP_URL } from '@/config/contact'
import { Button } from '@/components/ui/button'
import { IconWhatsApp } from '@/components/WhatsAppIcon'
import { cn } from '@/lib/utils'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)
  const location = useLocation()
  const onProductPage = location.pathname.startsWith('/produto/')

  useEffect(() => {
    if (onProductPage) {
      setVisible(false)
      return
    }
    const onScroll = () => {
      const threshold = Math.min(window.innerHeight * 0.55, 420)
      setVisible(window.scrollY > threshold)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [onProductPage])

  if (!visible || onProductPage) return null

  return (
    <Button
      asChild
      variant="whatsapp"
      size="icon-lg"
      className={cn(
        'fab-enter fixed z-40 size-14 shadow-lg shadow-whatsapp/40',
        'right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))]',
        'sm:right-6 sm:bottom-6 sm:size-12',
      )}
    >
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
        <IconWhatsApp className="size-7" />
      </a>
    </Button>
  )
}
