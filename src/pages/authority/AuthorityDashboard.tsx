import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { EmergencyButton } from "@/components/ui/emergency-button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  AlertTriangle, 
  FileText, 
  Calendar,
  CheckCircle,
  Clock,
  MessageSquare,
  MapPin,
  Users
} from "lucide-react"

const mockData = {
  assignedInspections: 8,
  completedInspections: 12,
  pendingReports: 3,
  activeAlerts: 1
}

const inspectionAssignments = [
  { 
    school: "Lincoln High School", 
    type: "Fire Safety Inspection", 
    deadline: "Tomorrow",
    priority: "high",
    status: "pending"
  },
  { 
    school: "Roosevelt Elementary", 
    type: "Emergency Equipment Check", 
    deadline: "This Friday",
    priority: "medium",
    status: "pending"
  },
  { 
    school: "Washington Middle", 
    type: "Evacuation Route Review", 
    deadline: "Next Week",
    priority: "low",
    status: "pending"
  }
]

const recentCommunications = [
  {
    from: "Regional Admin",
    subject: "Urgent: Fire Safety Inspection Required",
    time: "2 hours ago",
    priority: "high"
  },
  {
    from: "Lincoln High School",
    subject: "SOS Alert - Medical Emergency",
    time: "4 hours ago",
    priority: "emergency"
  },
  {
    from: "Regional Admin", 
    subject: "Monthly Inspection Schedule",
    time: "1 day ago",
    priority: "normal"
  }
]

export default function AuthorityDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-background">
      <Header userRole="authority" />
      
      <main className="container py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Authority Portal</h1>
            <p className="text-muted-foreground">
              Disaster Management Authority - Inspector Dashboard
            </p>
          </div>
          
          <div className="flex gap-3">
            <EmergencyButton variant="warning">
              <AlertTriangle className="h-4 w-4" />
              Send Alert
            </EmergencyButton>
            <EmergencyButton variant="hero">
              <FileText className="h-4 w-4" />
              Submit Report
            </EmergencyButton>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Assigned Inspections</CardTitle>
              <Calendar className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockData.assignedInspections}</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <CheckCircle className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockData.completedInspections}</div>
              <p className="text-xs text-muted-foreground">This quarter</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Reports</CardTitle>
              <FileText className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockData.pendingReports}</div>
              <p className="text-xs text-muted-foreground">Due this week</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-emergency" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockData.activeAlerts}</div>
              <p className="text-xs text-muted-foreground">Monitoring</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="inspections">Inspections</TabsTrigger>
            <TabsTrigger value="communications">Communications</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Upcoming Inspections</CardTitle>
                  <CardDescription>Assigned inspection tasks from regional admin</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {inspectionAssignments.slice(0, 3).map((inspection, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div>
                        <p className="font-medium">{inspection.school}</p>
                        <p className="text-sm text-muted-foreground">{inspection.type}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">Due: {inspection.deadline}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={inspection.priority === "high" ? "destructive" : 
                                       inspection.priority === "medium" ? "secondary" : "default"}>
                          {inspection.priority}
                        </Badge>
                        <div className="mt-2">
                          <EmergencyButton size="sm" variant="hero">
                            Start
                          </EmergencyButton>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Recent Communications</CardTitle>
                  <CardDescription>Messages from regional admin and schools</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentCommunications.map((comm, index) => (
                    <div key={index} className={`p-3 rounded-lg border ${
                      comm.priority === "emergency" ? "bg-emergency/10 border-emergency/20" :
                      comm.priority === "high" ? "bg-warning/10 border-warning/20" :
                      "bg-muted/50 border-border"
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">{comm.from}</span>
                        <Badge variant={comm.priority === "emergency" ? "destructive" : 
                                       comm.priority === "high" ? "secondary" : "default"}>
                          {comm.priority}
                        </Badge>
                      </div>
                      <p className="text-sm">{comm.subject}</p>
                      <p className="text-xs text-muted-foreground mt-1">{comm.time}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="inspections" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Inspection Management</CardTitle>
                <CardDescription>Manage assigned inspections and submit reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-6">
                  <EmergencyButton variant="hero">
                    <Calendar className="h-4 w-4" />
                    View Schedule
                  </EmergencyButton>
                  <EmergencyButton variant="success">
                    <FileText className="h-4 w-4" />
                    Submit Report
                  </EmergencyButton>
                  <EmergencyButton variant="default">
                    <CheckCircle className="h-4 w-4" />
                    View History
                  </EmergencyButton>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">Assigned Inspections</h4>
                  {inspectionAssignments.map((inspection, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border hover:shadow-card transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h5 className="font-medium">{inspection.school}</h5>
                          <p className="text-sm text-muted-foreground">{inspection.type}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">Deadline: {inspection.deadline}</span>
                          </div>
                        </div>
                        <Badge variant={inspection.priority === "high" ? "destructive" : 
                                       inspection.priority === "medium" ? "secondary" : "default"}>
                          {inspection.priority} priority
                        </Badge>
                      </div>
                      
                      <div className="flex gap-2">
                        <EmergencyButton size="sm" variant="hero">
                          Start Inspection
                        </EmergencyButton>
                        <EmergencyButton size="sm" variant="default">
                          View Details
                        </EmergencyButton>
                        <EmergencyButton size="sm" variant="default">
                          Contact School
                        </EmergencyButton>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="communications" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Communication Hub</CardTitle>
                <CardDescription>Messages and coordination with admin and schools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-6">
                  <EmergencyButton variant="hero">
                    <MessageSquare className="h-4 w-4" />
                    New Message
                  </EmergencyButton>
                  <EmergencyButton variant="warning">
                    <AlertTriangle className="h-4 w-4" />
                    Emergency Report
                  </EmergencyButton>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">Inbox</h4>
                  {recentCommunications.map((comm, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border hover:shadow-card transition-shadow cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-medium">{comm.from}</p>
                          <p className="text-sm">{comm.subject}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant={comm.priority === "emergency" ? "destructive" : 
                                         comm.priority === "high" ? "secondary" : "default"}>
                            {comm.priority}
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">{comm.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="alerts" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Emergency Alerts & Updates</CardTitle>
                <CardDescription>Monitor and respond to emergency situations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-6">
                  <EmergencyButton variant="emergency">
                    <AlertTriangle className="h-4 w-4" />
                    Issue Alert
                  </EmergencyButton>
                  <EmergencyButton variant="warning">
                    <Shield className="h-4 w-4" />
                    Update Status
                  </EmergencyButton>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-emergency/10 border border-emergency/20">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-emergency" />
                        <span className="font-medium text-emergency">Active Emergency</span>
                      </div>
                      <Badge variant="destructive">ACTIVE</Badge>
                    </div>
                    <p className="text-sm mb-2">Medical emergency at Roosevelt Elementary - Emergency response team dispatched</p>
                    <div className="flex gap-2">
                      <EmergencyButton size="sm" variant="emergency">
                        Update Status
                      </EmergencyButton>
                      <EmergencyButton size="sm" variant="default">
                        View Details
                      </EmergencyButton>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-warning/10 border border-warning/20">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-warning" />
                        <span className="font-medium">Weather Warning</span>
                      </div>
                      <Badge variant="secondary">MONITORING</Badge>
                    </div>
                    <p className="text-sm">Severe thunderstorm warning for region - Schools advised to review indoor safety protocols</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-success" />
                        <span className="font-medium">All Clear</span>
                      </div>
                      <Badge variant="default">RESOLVED</Badge>
                    </div>
                    <p className="text-sm">Fire drill at Lincoln High completed successfully - All students evacuated within target time</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}