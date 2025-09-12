import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Eye, 
  Plus,
  MoreHorizontal,
  Settings
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [organizationName, setOrganizationName] = useState("");

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    const orgName = localStorage.getItem("organizationName") || "Demo Organization";
    setOrganizationName(orgName);
  }, [navigate]);

  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231",
      change: "+20.1% from last month",
      changeType: "positive" as const,
      icon: DollarSign
    },
    {
      title: "Active Campaigns",
      value: "12",
      change: "+3 new this week",
      changeType: "positive" as const,
      icon: TrendingUp
    },
    {
      title: "Team Members",
      value: "8",
      change: "2 pending invites",
      changeType: "neutral" as const,
      icon: Users
    },
    {
      title: "Impressions",
      value: "1.2M",
      change: "+15% this month",
      changeType: "positive" as const,
      icon: Eye
    }
  ];

  const campaigns = [
    {
      id: 1,
      name: "Summer Sale 2024",
      status: "Active",
      budget: "$5,000",
      spent: "$3,247",
      impressions: "145,231",
      clicks: "2,847"
    },
    {
      id: 2,
      name: "Brand Awareness Q1",
      status: "Paused",
      budget: "$8,000",
      spent: "$6,123",
      impressions: "234,567",
      clicks: "4,234"
    },
    {
      id: 3,
      name: "Product Launch",
      status: "Active",
      budget: "$12,000",
      spent: "$8,945",
      impressions: "456,789",
      clicks: "8,123"
    }
  ];

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("organizationName");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header tenant={organizationName} />
      
      <main className="container py-8">
        {/* Welcome Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome back! 👋
            </h1>
            <p className="text-muted-foreground">
              Here's what's happening with your campaigns today.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={handleLogout}>
              <Settings className="mr-2 h-4 w-4" />
              Logout
            </Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Campaign
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Campaigns Table */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border/50 shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Active Campaigns</CardTitle>
                    <CardDescription>
                      Manage and monitor your advertising campaigns
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Campaign</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Budget</TableHead>
                      <TableHead>Spent</TableHead>
                      <TableHead>Performance</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {campaigns.map((campaign) => (
                      <TableRow key={campaign.id}>
                        <TableCell className="font-medium">
                          {campaign.name}
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={campaign.status === "Active" ? "default" : "secondary"}
                          >
                            {campaign.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{campaign.budget}</TableCell>
                        <TableCell>{campaign.spent}</TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div>{campaign.impressions} impressions</div>
                            <div className="text-muted-foreground">{campaign.clicks} clicks</div>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card className="bg-gradient-card border-border/50 shadow-sm">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates from your organization</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-success mt-2" />
                  <div className="flex-1 text-sm">
                    <p className="font-medium">Campaign "Summer Sale" launched</p>
                    <p className="text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-warning mt-2" />
                  <div className="flex-1 text-sm">
                    <p className="font-medium">Budget alert for Q1 Brand campaign</p>
                    <p className="text-muted-foreground">4 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <div className="flex-1 text-sm">
                    <p className="font-medium">New team member joined</p>
                    <p className="text-muted-foreground">1 day ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-card border-border/50 shadow-sm">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Campaign
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Invite Team Member
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  View Analytics
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;