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
    <footer className="border-t border-border bg-secondary/60 py-12">
      <Container className="flex flex-col items-center gap-6 text-center">
        <Link to="/" className="font-display text-xl font-bold">
          Ateliê <span className="text-primary">GM</span>
        </Link>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Links do rodapé">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={homeHash(link.href)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          {SOCIAL.instagram && (
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Instagram
            </a>
          )}
        </nav>

        <Separator className="max-w-xs" />

        <p className="text-xs text-muted-foreground/80">
          © {year} {BRAND.name}. Todos os direitos reservados.
          <br />
          {WHATSAPP_DISPLAY}
        </p>
      </Container>
    </footer>
  )
}
