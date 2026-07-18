import { cn } from '@/lib/utils'

interface SectionHeadProps {
  eyebrow?: string
  title: string
  subtitle?: string
  center?: boolean
  className?: string
}

export default function SectionHead({
  eyebrow,
  title,
  subtitle,
  center = false,
  className,
}: SectionHeadProps) {
  return (
    <div
      className={cn(
        'mb-8 md:mb-12',
        center && 'mx-auto max-w-2xl text-center',
        className,
      )}
    >
      {eyebrow && (
        <span className="reveal mb-3 inline-block text-[0.6875rem] font-bold tracking-[0.3em] text-primary uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="reveal font-display text-3xl font-semibold tracking-tight text-balance text-foreground md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'reveal mt-3 max-w-prose text-base leading-relaxed text-pretty text-muted-foreground md:text-lg',
            center && 'mx-auto',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
