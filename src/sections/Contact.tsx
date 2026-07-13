import { BUSINESS_HOURS } from '@/config/brand'
import { WHATSAPP_DISPLAY, WHATSAPP_URL } from '@/config/contact'
import { Button } from '@/components/ui/button'
import { Container, Section } from '@/components/layout'
import { IconWhatsApp } from '@/components/WhatsAppIcon'

export default function Contact() {
  return (
    <Section id="contato" soft>
      <Container>
        <div className="reveal grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Vamos criar algo especial juntos?
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Envie uma mensagem pelo WhatsApp e conte o que você imagina. Respondemos com
              carinho e agilidade para montar seu orçamento.
            </p>
            <Button asChild variant="whatsapp" size="lg" className="mt-8">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <IconWhatsApp className="size-5" />
                Iniciar conversa no WhatsApp
              </a>
            </Button>
          </div>

          <aside className="border-t border-border pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-10">
            <p className="font-display text-2xl font-semibold text-foreground">{WHATSAPP_DISPLAY}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Atendimento: {BUSINESS_HOURS}
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Sem compromisso. Você descreve a peça — nós cuidamos dos detalhes do bordado.
            </p>
          </aside>
        </div>
      </Container>
    </Section>
  )
}
