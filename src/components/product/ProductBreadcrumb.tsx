import { Link } from 'react-router-dom'

interface ProductBreadcrumbProps {
  productName: string
}

export function ProductBreadcrumb({ productName }: ProductBreadcrumbProps) {
  return (
    <nav
      className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
      aria-label="Navegação do produto"
    >
      <Link to="/" className="hover:text-foreground">
        Início
      </Link>
      <span aria-hidden="true">/</span>
      <Link to="/#catalogo" className="hover:text-foreground">
        Catálogo
      </Link>
      <span aria-hidden="true">/</span>
      <span className="font-medium text-foreground">{productName}</span>
    </nav>
  )
}
