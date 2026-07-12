import { BUSINESS_HOURS } from '@/config/brand'
import { WHATSAPP_DISPLAY, WHATSAPP_URL } from '@/config/contact'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Container, Section } from '@/components/layout'
import { IconWhatsApp } from '@/components/WhatsAppIcon'

export default function Contact() {
  return (
    <Section id="contato" soft className="text-center">
      <Container>
        <Card className="reveal mx-auto max-w-xl shadow-md">
          <CardHeader className="items-center">
            <span className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
              Contato
            </span>
            <CardTitle className="font-display text-3xl md:text-4xl">
              Vamos criar algo especial juntos?
            </CardTitle>
            <CardDescription className="max-w-md text-base leading-relaxed">
              Envie uma mensagem pelo WhatsApp e conte o que você imagina. Respondemos com
              carinho e agilidade para montar seu orçamento.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <Button asChild variant="whatsapp" size="lg">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <IconWhatsApp className="size-5" />
                Iniciar conversa no WhatsApp
              </a>
            </Button>
            <div className="text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">{WHATSAPP_DISPLAY}</p>
              <p>Atendimento: {BUSINESS_HOURS}</p>
            </div>
          </CardContent>
        </Card>
      </Container>
    </Section>
  )
}
