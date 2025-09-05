import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { EmergencyButton } from "@/components/ui/emergency-button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  BookOpen, 
  AlertTriangle, 
  Award,
  TrendingUp,
  Shield,
  Bell,
  MapPin,
  Clock,
  CheckCircle
} from "lucide-react"

const mockData = {
  quizScore: 85,
  drillParticipation: 12,
  ranking: 5,
  schoolRanking: 3,
  badges: 8,
  nextDrill: "Tomorrow 2:00 PM"
}

const learningModules = [
  { title: "Fire Safety Basics", progress: 100, completed: true },
  { title: "Earthquake Response", progress: 75, completed: false },
  { title: "First Aid Fundamentals", progress: 60, completed: false },
  { title: "Emergency Communication", progress: 0, completed: false }
]

const recentAlerts = [
  { 
    type: "Weather Alert", 
    message: "Severe thunderstorm warning for next 24 hours", 
    time: "2 hours ago",
    severity: "high"
  },
  { 
    type: "Drill Reminder", 
    message: "Fire drill scheduled for tomorrow at 2:00 PM", 
    time: "1 day ago",
    severity: "medium"
  },
  { 
    type: "Quiz Available", 
    message: "New earthquake safety quiz is now available", 
    time: "2 days ago",
    severity: "low"
  }
]

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-background">
      <Header userRole="student" showSOS />
      
      <main className="container py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Student Portal</h1>
            <p className="text-muted-foreground">
              Welcome back, Alex! Stay prepared, stay safe.
            </p>
          </div>
          
          <div className="flex gap-3">
            <EmergencyButton variant="emergency">
              <AlertTriangle className="h-4 w-4" />
              Emergency SOS
            </EmergencyButton>
            <EmergencyButton variant="hero">
              <BookOpen className="h-4 w-4" />
              Continue Learning
            </EmergencyButton>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Quiz Average</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockData.quizScore}%</div>
              <p className="text-xs text-muted-foreground">+5% this month</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Drills Attended</CardTitle>
              <Shield className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockData.drillParticipation}</div>
              <p className="text-xs text-muted-foreground">100% participation</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Personal Rank</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">#{mockData.ranking}</div>
              <p className="text-xs text-muted-foreground">In your school</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Badges Earned</CardTitle>
              <Award className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockData.badges}</div>
              <p className="text-xs text-muted-foreground">Great progress!</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Drill</CardTitle>
              <Clock className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-sm font-bold">{mockData.nextDrill}</div>
              <p className="text-xs text-muted-foreground">Fire drill</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="learning">Learning</TabsTrigger>
            <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
            <TabsTrigger value="ranking">Rankings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Learning Progress</CardTitle>
                  <CardDescription>Your emergency preparedness training</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {learningModules.map((module, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{module.title}</span>
                        {module.completed ? (
                          <CheckCircle className="h-4 w-4 text-success" />
                        ) : (
                          <span className="text-sm text-muted-foreground">{module.progress}%</span>
                        )}
                      </div>
                      <Progress value={module.progress} className="h-2" />
                    </div>
                  ))}
                  <EmergencyButton variant="hero" className="w-full mt-4">
                    Continue Learning
                  </EmergencyButton>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Recent Alerts</CardTitle>
                  <CardDescription>Important notifications and updates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentAlerts.map((alert, index) => (
                    <div key={index} className={`p-3 rounded-lg border ${
                      alert.severity === "high" ? "bg-emergency/10 border-emergency/20" :
                      alert.severity === "medium" ? "bg-warning/10 border-warning/20" :
                      "bg-muted/50 border-border"
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        {alert.severity === "high" ? (
                          <AlertTriangle className="h-4 w-4 text-emergency" />
                        ) : (
                          <Bell className="h-4 w-4 text-primary" />
                        )}
                        <span className="font-medium">{alert.type}</span>
                      </div>
                      <p className="text-sm">{alert.message}</p>
                      <p className="text-xs text-muted-foreground mt-2">{alert.time}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="learning" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Emergency Preparedness Training</CardTitle>
                <CardDescription>Learn essential emergency response skills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {learningModules.map((module, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border hover:shadow-card transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium">{module.title}</h4>
                        {module.completed && <CheckCircle className="h-5 w-5 text-success" />}
                      </div>
                      <Progress value={module.progress} className="mb-3" />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{module.progress}% complete</span>
                        <EmergencyButton 
                          size="sm" 
                          variant={module.completed ? "success" : "hero"}
                        >
                          {module.completed ? "Review" : "Continue"}
                        </EmergencyButton>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="quizzes" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Knowledge Assessment</CardTitle>
                <CardDescription>Test your emergency preparedness knowledge</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {["Fire Safety Quiz", "Earthquake Response", "First Aid Basics", "Evacuation Procedures", "Communication Protocols", "Weather Emergencies"].map((quiz, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border hover:shadow-card transition-shadow">
                      <BookOpen className="h-8 w-8 text-primary mb-2" />
                      <h4 className="font-medium mb-2">{quiz}</h4>
                      <p className="text-sm text-muted-foreground mb-3">10 questions • 15 minutes</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Best Score:</span>
                          <span className="font-medium">{85 + (index * 2)}%</span>
                        </div>
                        <EmergencyButton size="sm" variant="hero" className="w-full">
                          {index < 2 ? "Retake Quiz" : "Start Quiz"}
                        </EmergencyButton>
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
                <CardTitle>Emergency Alerts & Notifications</CardTitle>
                <CardDescription>Real-time alerts and regional updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-success" />
                      <span className="font-medium text-success">All Clear</span>
                    </div>
                    <p className="text-sm">No active emergency alerts in your area.</p>
                  </div>
                  
                  {recentAlerts.map((alert, index) => (
                    <div key={index} className={`p-4 rounded-lg border ${
                      alert.severity === "high" ? "bg-emergency/10 border-emergency/20" :
                      alert.severity === "medium" ? "bg-warning/10 border-warning/20" :
                      "bg-muted/50 border-border"
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {alert.severity === "high" ? (
                            <AlertTriangle className="h-4 w-4 text-emergency" />
                          ) : (
                            <Bell className="h-4 w-4 text-primary" />
                          )}
                          <span className="font-medium">{alert.type}</span>
                        </div>
                        <Badge variant={alert.severity === "high" ? "destructive" : 
                                       alert.severity === "medium" ? "secondary" : "default"}>
                          {alert.severity}
                        </Badge>
                      </div>
                      <p className="text-sm mb-2">{alert.message}</p>
                      <p className="text-xs text-muted-foreground">{alert.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="ranking" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Personal Ranking</CardTitle>
                  <CardDescription>Your position among school students</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-primary mb-2">#{mockData.ranking}</div>
                    <p className="text-muted-foreground">Out of 485 students</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-primary/10">
                      <span className="font-medium">Quiz Performance</span>
                      <span className="text-primary font-bold">{mockData.quizScore}%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-success/10">
                      <span className="font-medium">Drill Participation</span>
                      <span className="text-success font-bold">100%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-warning/10">
                      <span className="font-medium">Badges Earned</span>
                      <span className="text-warning font-bold">{mockData.badges}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>School Ranking</CardTitle>
                  <CardDescription>Lincoln High School regional position</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-success mb-2">#{mockData.schoolRanking}</div>
                    <p className="text-muted-foreground">Out of 15 schools in region</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <span className="text-sm">Overall Score</span>
                      <span className="font-bold">92%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <span className="text-sm">Drill Performance</span>
                      <span className="font-bold">95%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <span className="text-sm">Student Participation</span>
                      <span className="font-bold">88%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}