import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "rounded-full border border-primary bg-transparent text-[0.8125rem] font-bold uppercase tracking-[0.15em] text-foreground transition-colors hover:bg-primary hover:text-primary-foreground",
        destructive:
          "rounded-full bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
        outline:
          "rounded-full border border-border bg-background shadow-xs hover:border-primary hover:bg-secondary hover:text-foreground",
        secondary:
          "rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "rounded-full hover:bg-secondary hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        whatsapp:
          "rounded-full bg-whatsapp text-[0.8125rem] font-bold uppercase tracking-[0.12em] text-whatsapp-foreground shadow-md shadow-whatsapp/30 hover:bg-whatsapp/90",
      },
      size: {
        default: "h-11 min-h-11 px-5 py-2 has-[>svg]:px-4 sm:h-10 sm:min-h-10",
        xs: "h-8 min-h-8 gap-1 rounded-full px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-11 min-h-11 gap-1.5 rounded-full px-4 has-[>svg]:px-3 sm:h-9 sm:min-h-9",
        lg: "h-12 min-h-12 rounded-full px-6 text-base has-[>svg]:px-5 sm:px-7",
        icon: "size-11 min-h-11 min-w-11 rounded-full sm:size-10",
        "icon-xs": "size-8 rounded-full [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-10 min-h-10 min-w-10 rounded-full sm:size-8",
        "icon-lg": "size-12 min-h-12 min-w-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
