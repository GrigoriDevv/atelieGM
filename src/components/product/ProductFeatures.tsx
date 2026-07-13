import { Check } from 'lucide-react'

interface ProductFeaturesProps {
  features: string[]
}

export function ProductFeatures({ features }: ProductFeaturesProps) {
  if (features.length === 0) return null

  return (
    <ul className="mt-6 space-y-3">
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground">
          <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  )
}
