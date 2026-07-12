import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { BRAND, NAV_LINKS } from '@/config/brand'
import { WHATSAPP_URL } from '@/config/contact'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Container } from '@/components/layout'
import { IconWhatsApp } from '@/components/WhatsAppIcon'
import { cn } from '@/lib/utils'

function homeHash(href: string): string {
  return href.startsWith('#') ? `/${href}` : href
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all',
        scrolled
          ? 'border-b border-border/80 bg-background/90 py-3 shadow-sm backdrop-blur-md'
          : 'py-4',
      )}
    >
      <Container className="flex items-center justify-between gap-4">
        <Link
          to="/"
          className="font-display text-2xl font-bold tracking-tight text-foreground"
          aria-label={`${BRAND.name} — início`}
        >
          Ateliê <span className="text-primary">GM</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={homeHash(link.href)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="whatsapp" size="sm" className="hidden md:inline-flex">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <IconWhatsApp className="size-4" />
              WhatsApp
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)] bg-background">
              <SheetHeader>
                <SheetTitle className="font-display text-left text-xl">
                  Ateliê <span className="text-primary">GM</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-4" aria-label="Menu mobile">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    to={homeHash(link.href)}
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl font-semibold text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild variant="whatsapp" className="mt-4">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    <IconWhatsApp className="size-4" />
                    Fale no WhatsApp
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}
