import { Badge } from '@/components/ui/badge'

interface ProductHeaderProps {
  name: string
  categoryLabel: string
  description: string
  longDescription: string
  hint?: string
}

export function ProductHeader({
  name,
  categoryLabel,
  description,
  longDescription,
  hint,
}: ProductHeaderProps) {
  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Badge className="rounded-full bg-accent/15 text-accent hover:bg-accent/15">
          {categoryLabel}
        </Badge>
        {hint && <span className="text-xs font-medium text-primary">{hint}</span>}
      </div>

      <h1 className="font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
        {name}
      </h1>
      <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{description}</p>
      <p className="mt-4 leading-relaxed">{longDescription}</p>
    </div>
  )
}
