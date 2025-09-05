import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { EmergencyButton } from "@/components/ui/emergency-button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  AlertTriangle, 
  FileText, 
  Calendar,
  TrendingUp,
  Shield,
  Bell,
  UserPlus,
  ClipboardCheck
} from "lucide-react"

const mockData = {
  students: 485,
  pendingDrills: 2,
  compliance: 92,
  ranking: 3,
  lastInspection: "2024-01-15"
}

const pendingDrills = [
  { type: "Fire Drill", scheduledBy: "Regional Admin", deadline: "Tomorrow 2:00 PM", priority: "high" },
  { type: "Earthquake Drill", scheduledBy: "Regional Admin", deadline: "This Friday", priority: "medium" }
]

const students = [
  { name: "Alice Johnson", grade: "10th", drillScore: 95, quizScore: 88 },
  { name: "Bob Smith", grade: "11th", drillScore: 87, quizScore: 92 },
  { name: "Carol Davis", grade: "9th", drillScore: 91, quizScore: 85 }
]

export default function SchoolDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-background">
      <Header userRole="school" showSOS />
      
      <main className="container py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">School Portal</h1>
            <p className="text-muted-foreground">
              Lincoln High School - Emergency Management Dashboard
            </p>
          </div>
          
          <div className="flex gap-3">
            <EmergencyButton variant="emergency">
              <AlertTriangle className="h-4 w-4" />
              SOS Alert
            </EmergencyButton>
            <EmergencyButton variant="hero">
              <UserPlus className="h-4 w-4" />
              Add Student
            </EmergencyButton>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockData.students}</div>
              <p className="text-xs text-muted-foreground">+12 this semester</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Drills</CardTitle>
              <AlertTriangle className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockData.pendingDrills}</div>
              <p className="text-xs text-muted-foreground">Due this week</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
              <Shield className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockData.compliance}%</div>
              <p className="text-xs text-muted-foreground">+5% this month</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Regional Ranking</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">#{mockData.ranking}</div>
              <p className="text-xs text-muted-foreground">Out of 15 schools</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="drills">Drills</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Pending Drill Requests</CardTitle>
                  <CardDescription>Drills scheduled by regional admin</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pendingDrills.map((drill, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div>
                        <p className="font-medium">{drill.type}</p>
                        <p className="text-sm text-muted-foreground">By: {drill.scheduledBy}</p>
                        <p className="text-sm text-muted-foreground">Due: {drill.deadline}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant={drill.priority === "high" ? "destructive" : "secondary"}>
                          {drill.priority}
                        </Badge>
                        <div className="mt-2">
                          <EmergencyButton size="sm" variant="hero">
                            Start Drill
                          </EmergencyButton>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Recent Alerts & News</CardTitle>
                  <CardDescription>Updates from regional authorities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 rounded-lg bg-emergency/10 border border-emergency/20">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-emergency" />
                      <span className="font-medium text-emergency">Weather Alert</span>
                    </div>
                    <p className="text-sm">Severe thunderstorm warning for next 24 hours. Review indoor safety protocols.</p>
                    <p className="text-xs text-muted-foreground mt-2">2 hours ago</p>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="font-medium">New Manual Available</span>
                    </div>
                    <p className="text-sm">Updated earthquake safety procedures have been published.</p>
                    <p className="text-xs text-muted-foreground mt-2">1 day ago</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="students" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Student Management</CardTitle>
                <CardDescription>Manage student accounts and track performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-6">
                  <EmergencyButton variant="hero">
                    <UserPlus className="h-4 w-4" />
                    Add New Student
                  </EmergencyButton>
                  <EmergencyButton variant="default">
                    Export Student List
                  </EmergencyButton>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold">Top Performing Students</h4>
                  {students.map((student, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-muted-foreground">Grade: {student.grade}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">Drill: {student.drillScore}% | Quiz: {student.quizScore}%</p>
                        <Badge variant="default">Active</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="drills" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Drill Management</CardTitle>
                <CardDescription>Execute and track emergency drills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <EmergencyButton variant="warning" size="lg">
                    <AlertTriangle className="h-4 w-4" />
                    Start Emergency Drill
                  </EmergencyButton>
                  <EmergencyButton variant="default" size="lg">
                    <ClipboardCheck className="h-4 w-4" />
                    View Drill History
                  </EmergencyButton>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold mb-4">Pending Drill Requests</h4>
                  {pendingDrills.map((drill, index) => (
                    <div key={index} className="p-4 rounded-lg bg-warning/10 border border-warning/20 mb-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{drill.type}</p>
                          <p className="text-sm text-muted-foreground">Deadline: {drill.deadline}</p>
                        </div>
                        <EmergencyButton variant="hero">
                          Execute Drill
                        </EmergencyButton>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="resources" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Resources & Manuals</CardTitle>
                <CardDescription>Access emergency procedures and guidelines</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {["Fire Safety Manual", "Earthquake Procedures", "Medical Emergency Guide", "Evacuation Plans", "Communication Protocols", "First Aid Guidelines"].map((resource, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border hover:shadow-card transition-shadow cursor-pointer">
                      <FileText className="h-8 w-8 text-primary mb-2" />
                      <h4 className="font-medium mb-2">{resource}</h4>
                      <p className="text-sm text-muted-foreground mb-3">Updated emergency procedures and guidelines</p>
                      <EmergencyButton size="sm" variant="default">
                        Download
                      </EmergencyButton>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reports" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Performance Reports</CardTitle>
                <CardDescription>School and student performance analytics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                  <p>Performance analytics and reporting dashboard will be implemented here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}