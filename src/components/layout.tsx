import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  id?: string
  soft?: boolean
  className?: string
  children: ReactNode
}

export function Section({ id, soft = false, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24',
        soft && 'bg-secondary/60',
        className,
      )}
    >
      {children}
    </section>
  )
}

export function Container({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div className={cn('mx-auto w-full max-w-6xl px-4 sm:px-6', className)}>
      {children}
    </div>
  )
}
