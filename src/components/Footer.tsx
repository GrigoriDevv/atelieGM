import { Link } from 'react-router-dom'
import { BRAND, NAV_LINKS, SOCIAL } from '@/config/brand'
import { WHATSAPP_DISPLAY } from '@/config/contact'
import { Separator } from '@/components/ui/separator'
import { Container } from '@/components/layout'

const year = new Date().getFullYear()

function homeHash(href: string): string {
  return href.startsWith('#') ? `/${href}` : href
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/60 py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:py-12">
      <Container className="flex flex-col items-center gap-5 text-center sm:gap-6">
        <Link to="/" className="font-display text-xl font-bold">
          Ateliê <span className="text-primary">GM</span>
        </Link>

        <nav
          className="flex flex-wrap justify-center gap-x-2 gap-y-1 sm:gap-x-4"
          aria-label="Links do rodapé"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={homeHash(link.href)}
              className="inline-flex min-h-11 items-center px-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          {SOCIAL.instagram && (
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center px-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Instagram
            </a>
          )}
        </nav>

        <Separator className="max-w-xs" />

        <p className="text-xs leading-relaxed text-muted-foreground/80">
          © {year} {BRAND.name}. Todos os direitos reservados.
          <br />
          {WHATSAPP_DISPLAY}
        </p>
      </Container>
    </footer>
  )
}
