import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const emergencyButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        emergency: "bg-emergency text-emergency-foreground shadow-emergency hover:bg-emergency/90 animate-pulse-glow",
        success: "bg-success text-success-foreground shadow hover:bg-success/90",
        warning: "bg-warning text-warning-foreground shadow hover:bg-warning/90",
        sos: "bg-emergency text-emergency-foreground shadow-emergency animate-emergency-flash font-bold text-lg",
        hero: "bg-gradient-hero text-primary-foreground shadow-glow hover:shadow-glow/80"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        xl: "h-12 rounded-lg px-12 text-lg",
        sos: "h-16 w-16 rounded-full text-xl font-bold"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface EmergencyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof emergencyButtonVariants> {
  asChild?: boolean
}

const EmergencyButton = React.forwardRef<HTMLButtonElement, EmergencyButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(emergencyButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
EmergencyButton.displayName = "EmergencyButton"

export { EmergencyButton, emergencyButtonVariants }