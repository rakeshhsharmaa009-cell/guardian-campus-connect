import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { EmergencyButton } from "@/components/ui/emergency-button"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface RoleCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  variant?: "admin" | "school" | "student" | "authority"
  className?: string
}

const roleVariants = {
  admin: "border-primary shadow-glow hover:shadow-glow/60",
  school: "border-success shadow-card hover:shadow-glow/40",
  student: "border-accent shadow-card hover:shadow-glow/40", 
  authority: "border-warning shadow-card hover:shadow-glow/40"
}

export function RoleCard({ title, description, icon: Icon, href, variant = "admin", className }: RoleCardProps) {
  return (
    <Card className={cn(
      "group cursor-pointer transition-all duration-300 hover:scale-105",
      roleVariants[variant],
      className
    )}>
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-hero w-16 h-16 flex items-center justify-center shadow-glow">
          <Icon className="h-8 w-8 text-primary-foreground" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-center pt-0">
        <EmergencyButton
          variant="hero"
          size="lg"
          className="w-full"
          asChild
        >
          <a href={href}>Access Portal</a>
        </EmergencyButton>
      </CardContent>
    </Card>
  )
}