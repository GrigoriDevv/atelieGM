import { WHATSAPP_URL } from '@/config/contact'
import { Button } from '@/components/ui/button'
import { IconWhatsApp } from '@/components/WhatsAppIcon'

export default function WhatsAppButton() {
  return (
    <Button
      asChild
      variant="whatsapp"
      size="icon-lg"
      className="fixed right-6 bottom-6 z-40 shadow-lg shadow-whatsapp/40"
    >
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
        <IconWhatsApp className="size-7" />
      </a>
    </Button>
  )
}
