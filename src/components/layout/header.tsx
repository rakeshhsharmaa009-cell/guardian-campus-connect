import { Shield, AlertTriangle } from "lucide-react"
import { EmergencyButton } from "@/components/ui/emergency-button"

interface HeaderProps {
  userRole?: "admin" | "school" | "student" | "authority"
  showSOS?: boolean
}

export function Header({ userRole, showSOS = false }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              DisasterPrep
            </span>
          </div>
          {userRole && (
            <span className="text-sm bg-secondary px-3 py-1 rounded-full capitalize">
              {userRole} Portal
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          {showSOS && (
            <EmergencyButton
              variant="sos"
              size="sos"
              className="animate-pulse"
              title="Emergency SOS Alert"
            >
              <AlertTriangle className="h-6 w-6" />
            </EmergencyButton>
          )}
          
          <nav className="flex items-center gap-2">
            <EmergencyButton variant="default" size="sm">
              Profile
            </EmergencyButton>
            <EmergencyButton variant="default" size="sm">
              Logout
            </EmergencyButton>
          </nav>
        </div>
      </div>
    </header>
  )
}