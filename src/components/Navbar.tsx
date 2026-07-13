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
    const onScroll = () => setScrolled(window.scrollY > 12)
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
        'pt-[env(safe-area-inset-top,0px)]',
        scrolled
          ? 'border-b border-border/80 bg-background/95 py-2.5 shadow-sm backdrop-blur-sm sm:py-3'
          : 'py-3 sm:py-4',
      )}
    >
      <Container className="flex items-center justify-between gap-3">
        <Link
          to="/"
          className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          aria-label={`${BRAND.name} — início`}
        >
          Ateliê <span className="text-primary">GM</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:gap-8 md:flex" aria-label="Navegação principal">
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

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Button asChild variant="whatsapp" size="sm" className="hidden touch-target md:inline-flex">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <IconWhatsApp className="size-4" />
              WhatsApp
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="touch-target size-11 md:hidden"
                aria-label="Abrir menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex w-[min(100%,22rem)] flex-col bg-background px-0 pb-[max(1.5rem,env(safe-area-inset-bottom))]"
            >
              <SheetHeader className="px-6">
                <SheetTitle className="font-display text-left text-xl">
                  Ateliê <span className="text-primary">GM</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-1 flex-col gap-1 px-3" aria-label="Menu mobile">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    to={homeHash(link.href)}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3.5 font-display text-xl font-semibold text-foreground active:bg-secondary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="border-t border-border px-6 pt-4">
                <Button asChild variant="whatsapp" size="lg" className="w-full touch-target">
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
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}
