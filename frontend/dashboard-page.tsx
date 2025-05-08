"use client"

import { AvatarFallback } from "@/components/ui/avatar"

import { Avatar } from "@/components/ui/avatar"

import { ArrowDown, ArrowUp, BarChart3, DollarSign, Gamepad2, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

export function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to METS CRM, your gaming industry relationship management solution.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUp className="mr-1 h-4 w-4 text-emerald-500" />
              <span className="text-emerald-500">12%</span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Games</CardTitle>
            <Gamepad2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">324</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUp className="mr-1 h-4 w-4 text-emerald-500" />
              <span className="text-emerald-500">8%</span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUp className="mr-1 h-4 w-4 text-emerald-500" />
              <span className="text-emerald-500">18%</span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Tasks</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowDown className="mr-1 h-4 w-4 text-red-500" />
              <span className="text-red-500">4%</span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>Monthly revenue from gaming clients</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                  <AreaChart
                    data={[
                      { name: "Jan", total: 12000 },
                      { name: "Feb", total: 18000 },
                      { name: "Mar", total: 15000 },
                      { name: "Apr", total: 22000 },
                      { name: "May", total: 28000 },
                      { name: "Jun", total: 32000 },
                      { name: "Jul", total: 36000 },
                      { name: "Aug", total: 42000 },
                      { name: "Sep", total: 38000 },
                      { name: "Oct", total: 45000 },
                      { name: "Nov", total: 48000 },
                      { name: "Dec", total: 52000 },
                    ]}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="name" className="text-xs" />
                    <YAxis className="text-xs" tickFormatter={(value) => `$${value.toLocaleString()}`} />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                              <div className="grid grid-cols-2 gap-2">
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">Month</span>
                                  <span className="font-bold text-muted-foreground">{payload[0].payload.name}</span>
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">Revenue</span>
                                  <span className="font-bold">${payload[0].value.toLocaleString()}</span>
                                </div>
                              </div>
                            </div>
                          )
                        }
                        return null
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="total"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.2}
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Customer Segments</CardTitle>
                <CardDescription>Distribution by game genre</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart
                    data={[
                      { name: "RPG", value: 35 },
                      { name: "FPS", value: 28 },
                      { name: "MOBA", value: 15 },
                      { name: "Casual", value: 12 },
                      { name: "Simulation", value: 10 },
                    ]}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="name" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                              <div className="grid grid-cols-2 gap-2">
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">Genre</span>
                                  <span className="font-bold text-muted-foreground">{payload[0].payload.name}</span>
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">Percentage</span>
                                  <span className="font-bold">{payload[0].value}%</span>
                                </div>
                              </div>
                            </div>
                          )
                        }
                        return null
                      }}
                    />
                    <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Customer Growth</CardTitle>
              <CardDescription>New customer acquisition over time</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart
                  data={[
                    { name: "Jan", new: 45, returning: 120 },
                    { name: "Feb", new: 52, returning: 132 },
                    { name: "Mar", new: 48, returning: 145 },
                    { name: "Apr", new: 61, returning: 158 },
                    { name: "May", new: 64, returning: 163 },
                    { name: "Jun", new: 72, returning: 172 },
                    { name: "Jul", new: 85, returning: 185 },
                    { name: "Aug", new: 78, returning: 195 },
                    { name: "Sep", new: 90, returning: 210 },
                    { name: "Oct", new: 95, returning: 234 },
                    { name: "Nov", new: 98, returning: 256 },
                    { name: "Dec", new: 102, returning: 270 },
                  ]}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="name" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border bg-background p-2 shadow-sm">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">Month</span>
                                <span className="font-bold text-muted-foreground">{payload[0].payload.name}</span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">New</span>
                                <span className="font-bold">{payload[0].value}</span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">Returning</span>
                                <span className="font-bold">{payload[1].value}</span>
                              </div>
                            </div>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="new" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="returning" stroke="#82ca9d" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>View and generate custom reports</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This section will contain report generation tools and saved reports.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Recent Customers</CardTitle>
            <CardDescription>Latest customer additions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Epic Games", date: "2 days ago", avatar: "EG" },
                { name: "Riot Games", date: "3 days ago", avatar: "RG" },
                { name: "Valve Corporation", date: "5 days ago", avatar: "VC" },
                { name: "Ubisoft", date: "1 week ago", avatar: "UB" },
              ].map((customer) => (
                <div key={customer.name} className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback>{customer.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{customer.name}</p>
                    <p className="text-xs text-muted-foreground">{customer.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Tasks</CardTitle>
            <CardDescription>Latest assigned tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Follow up with Blizzard", status: "In Progress", date: "Due tomorrow" },
                { title: "Send proposal to Nintendo", status: "Pending", date: "Due in 3 days" },
                { title: "Schedule meeting with Sony", status: "Completed", date: "Completed yesterday" },
                { title: "Review EA contract", status: "In Progress", date: "Due in 1 week" },
              ].map((task) => (
                <div key={task.title} className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{task.title}</p>
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex h-2 w-2 rounded-full ${
                        task.status === "Completed"
                          ? "bg-emerald-500"
                          : task.status === "In Progress"
                            ? "bg-amber-500"
                            : "bg-blue-500"
                      }`}
                    />
                    <p className="text-xs text-muted-foreground">{task.status}</p>
                    <span className="text-xs text-muted-foreground">•</span>
                    <p className="text-xs text-muted-foreground">{task.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="md:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle>Activity Feed</CardTitle>
            <CardDescription>Recent system activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "John Doe added a new customer", time: "2 hours ago" },
                { action: "Sarah Smith completed a task", time: "5 hours ago" },
                { action: "Mike Johnson updated a contact", time: "Yesterday at 2:30 PM" },
                { action: "Anna Williams scheduled a meeting", time: "Yesterday at 10:15 AM" },
                { action: "David Brown generated a report", time: "2 days ago" },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex flex-col space-y-1 border-l-2 border-muted pl-4 last:border-l-transparent"
                >
                  <p className="text-sm">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
