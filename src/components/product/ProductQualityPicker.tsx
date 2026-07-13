import type { QualityTier, QualityTierId } from '@/config/catalog'
import { cn } from '@/lib/utils'

const tierAccent: Record<QualityTierId, string> = {
  bebe: 'bg-[color-mix(in_srgb,var(--tier-bebe)_22%,transparent)] text-[color-mix(in_srgb,var(--tier-bebe)_72%,var(--foreground))]',
  'dia-a-dia': 'bg-accent/15 text-accent',
  'super-luxo': 'bg-primary/15 text-primary',
}

const tierChipLabel: Record<QualityTierId, string> = {
  bebe: 'Suave',
  'dia-a-dia': 'Diário',
  'super-luxo': 'Premium',
}

interface ProductQualityPickerProps {
  tiers: QualityTier[]
  value: QualityTier | null
  onChange: (tier: QualityTier) => void
}

export function ProductQualityPicker({ tiers, value, onChange }: ProductQualityPickerProps) {
  if (tiers.length === 0) return null

  return (
    <div className="mt-8">
      <h2 className="font-display text-xl font-semibold">Escolha a linha de qualidade</h2>
      <div className="mt-4 flex flex-col gap-3" role="radiogroup" aria-label="Linha de qualidade">
        {tiers.map((tier) => {
          const isSelected = value?.id === tier.id
          return (
            <button
              key={tier.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => onChange(tier)}
              className={cn(
                'min-h-[4.5rem] rounded-xl border border-border bg-card p-4 text-left transition-[border-color,box-shadow,background-color] duration-200',
                'focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50',
                'active:scale-[0.99]',
                isSelected
                  ? 'border-primary bg-primary/5 shadow-[0_0_0_1px_var(--primary)]'
                  : 'hover:border-primary/50',
              )}
            >
              <span className="flex flex-wrap items-center gap-2">
                <span className="font-display text-lg font-semibold">{tier.label}</span>
                <span
                  className={cn(
                    'rounded-full px-2 py-0.5 text-[0.6875rem] font-medium',
                    tierAccent[tier.id],
                  )}
                >
                  {tierChipLabel[tier.id]}
                </span>
              </span>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{tier.description}</p>
            </button>
          )
        })}
      </div>
    </div>
  )
}
