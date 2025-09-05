import { RoleCard } from "@/components/ui/role-card"
import { EmergencyButton } from "@/components/ui/emergency-button"
import { 
  Shield, 
  School, 
  GraduationCap, 
  UserCheck, 
  AlertTriangle,
  CheckCircle,
  Users,
  TrendingUp
} from "lucide-react"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="h-16 w-16 text-primary-foreground" />
            <h1 className="text-5xl font-bold text-primary-foreground">
              DisasterPrep
            </h1>
          </div>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Comprehensive disaster preparedness and emergency management system for educational institutions
          </p>
          <div className="flex items-center justify-center gap-4 text-primary-foreground/80 mb-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>Real-time Alerts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>Emergency Drills</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              <span>Training Modules</span>
            </div>
          </div>
          <EmergencyButton variant="hero" size="xl" className="shadow-glow">
            Get Started Today
          </EmergencyButton>
        </div>
      </section>

      {/* Role Selection Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Choose Your Portal</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access specialized dashboards designed for your role in emergency preparedness
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <RoleCard
              title="Regional Admin"
              description="Manage schools, coordinate drills, publish alerts and track regional compliance"
              icon={Shield}
              href="/admin"
              variant="admin"
            />
            
            <RoleCard
              title="School Portal"
              description="Manage students, execute drills, access resources and communicate with authorities"
              icon={School}
              href="/school"
              variant="school"
            />
            
            <RoleCard
              title="Student Portal"
              description="Learn safety protocols, take quizzes, participate in drills and receive alerts"
              icon={GraduationCap}
              href="/student"
              variant="student"
            />
            
            <RoleCard
              title="Authority Portal"
              description="Conduct inspections, communicate updates and coordinate emergency responses"
              icon={UserCheck}
              href="/authority"
              variant="authority"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Emergency Management</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for effective disaster preparedness
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="mx-auto w-16 h-16 bg-emergency text-emergency-foreground rounded-full flex items-center justify-center mb-4 shadow-emergency">
                <AlertTriangle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Emergency Alerts</h3>
              <p className="text-muted-foreground">
                Real-time emergency notifications, SOS alerts, and weather warnings to keep everyone informed and safe
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="mx-auto w-16 h-16 bg-success text-success-foreground rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Drill Management</h3>
              <p className="text-muted-foreground">
                Schedule and execute emergency drills, track participation, and monitor response times across all schools
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="mx-auto w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4 shadow-glow">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Analytics</h3>
              <p className="text-muted-foreground">
                Comprehensive ranking system, compliance tracking, and performance metrics for continuous improvement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="h-8 w-8" />
            <span className="text-xl font-bold">DisasterPrep</span>
          </div>
          <p className="text-primary-foreground/80 mb-6">
            Building resilient educational communities through comprehensive emergency preparedness
          </p>
          <p className="text-sm text-primary-foreground/60">
            © 2024 DisasterPrep. All rights reserved. | Emergency Hotline: 911
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
