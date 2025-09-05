import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { EmergencyButton } from "@/components/ui/emergency-button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  School, 
  Users, 
  AlertTriangle, 
  FileText, 
  Calendar,
  TrendingUp,
  Shield,
  Bell
} from "lucide-react"

const mockData = {
  schools: 15,
  totalStudents: 12450,
  activeDrills: 3,
  pendingAlerts: 2,
  upcomingInspections: 5
}

const recentActivities = [
  { school: "Lincoln High", action: "Completed Fire Drill", time: "2 hours ago", status: "success" },
  { school: "Roosevelt Elementary", action: "SOS Alert Triggered", time: "4 hours ago", status: "emergency" },
  { school: "Washington Middle", action: "Inspection Scheduled", time: "1 day ago", status: "warning" }
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-background">
      <Header userRole="admin" />
      
      <main className="container py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Regional Emergency Management Portal
            </p>
          </div>
          
          <div className="flex gap-3">
            <EmergencyButton variant="warning">
              <Bell className="h-4 w-4" />
              Send Alert
            </EmergencyButton>
            <EmergencyButton variant="hero">
              <Calendar className="h-4 w-4" />
              Schedule Drill
            </EmergencyButton>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Registered Schools</CardTitle>
              <School className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockData.schools}</div>
              <p className="text-xs text-muted-foreground">+2 this month</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockData.totalStudents.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+180 this month</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Drills</CardTitle>
              <AlertTriangle className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockData.activeDrills}</div>
              <p className="text-xs text-muted-foreground">In progress</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Alerts</CardTitle>
              <Bell className="h-4 w-4 text-emergency" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockData.pendingAlerts}</div>
              <p className="text-xs text-muted-foreground">Requires attention</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Inspections</CardTitle>
              <Shield className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockData.upcomingInspections}</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="schools">Schools</TabsTrigger>
            <TabsTrigger value="drills">Drill Planner</TabsTrigger>
            <TabsTrigger value="alerts">Alerts & News</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                  <CardDescription>Latest updates from schools in your region</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div>
                        <p className="font-medium">{activity.school}</p>
                        <p className="text-sm text-muted-foreground">{activity.action}</p>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={activity.status === "emergency" ? "destructive" : 
                                  activity.status === "warning" ? "secondary" : "default"}
                        >
                          {activity.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>School Rankings</CardTitle>
                  <CardDescription>Top performing schools in emergency preparedness</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {["Lincoln High School", "Roosevelt Elementary", "Washington Middle"].map((school, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-lg">#{index + 1}</span>
                        <div>
                          <p className="font-medium">{school}</p>
                          <p className="text-sm text-muted-foreground">Drill Score: {95 - index * 5}%</p>
                        </div>
                      </div>
                      <TrendingUp className="h-5 w-5 text-success" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="schools" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Manage Schools</CardTitle>
                <CardDescription>Register new schools and manage existing ones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-6">
                  <EmergencyButton variant="hero">
                    <School className="h-4 w-4" />
                    Add New School
                  </EmergencyButton>
                  <EmergencyButton variant="default">
                    Generate Reference IDs
                  </EmergencyButton>
                </div>
                <p className="text-muted-foreground text-center py-8">
                  School management interface will be implemented here
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="drills" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Drill Planner</CardTitle>
                <CardDescription>Schedule and monitor emergency drills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-6">
                  <EmergencyButton variant="warning">
                    <AlertTriangle className="h-4 w-4" />
                    Schedule Random Drill
                  </EmergencyButton>
                  <EmergencyButton variant="default">
                    <Calendar className="h-4 w-4" />
                    View Drill History
                  </EmergencyButton>
                </div>
                <p className="text-muted-foreground text-center py-8">
                  Drill planning interface will be implemented here
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="alerts" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Alerts & Communications</CardTitle>
                <CardDescription>Publish alerts, manuals, and news updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-6">
                  <EmergencyButton variant="emergency">
                    <AlertTriangle className="h-4 w-4" />
                    Send Emergency Alert
                  </EmergencyButton>
                  <EmergencyButton variant="default">
                    <FileText className="h-4 w-4" />
                    Publish Manual
                  </EmergencyButton>
                  <EmergencyButton variant="default">
                    <Bell className="h-4 w-4" />
                    Send Notice
                  </EmergencyButton>
                </div>
                <p className="text-muted-foreground text-center py-8">
                  Alert management interface will be implemented here
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}