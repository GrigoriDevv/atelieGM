import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Container, Section } from '@/components/layout'

export function ProductNotFound() {
  return (
    <Section className="pt-header text-center">
      <Container>
        <h1 className="font-display text-3xl font-semibold">Produto não encontrado</h1>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Essa opção não está mais disponível no catálogo. Volte e escolha outra peça.
        </p>
        <Button asChild variant="outline" className="mt-6">
          <Link to="/#catalogo">Voltar ao catálogo</Link>
        </Button>
      </Container>
    </Section>
  )
}
