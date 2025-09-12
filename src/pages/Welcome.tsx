import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Users, Shield, BarChart3, Zap, CheckCircle2 } from "lucide-react";

const Welcome = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: "Multi-tenant Architecture",
      description: "Separate organizations with isolated data and customizable settings"
    },
    {
      icon: Shield,
      title: "Role-based Access",
      description: "Owner, admin, and member roles with granular permissions"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time insights and performance metrics for your ad campaigns"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built with modern technologies for optimal performance"
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      features: ["Up to 3 organizations", "Basic analytics", "Email support"],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      features: ["Unlimited organizations", "Advanced analytics", "Priority support", "Custom integrations"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      features: ["Everything in Pro", "Dedicated support", "SLA guarantee", "Custom features"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">A</span>
            </div>
            <span className="text-2xl font-bold">Adsage</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate('/login')}>
              Sign In
            </Button>
            <Button onClick={() => navigate('/register')}>
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-24 text-center">
        <Badge variant="secondary" className="mb-6">
          🚀 Multi-tenant SaaS Platform
        </Badge>
        
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Streamline Your Ads Management
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Manage multiple advertising organizations with ease. Built for teams that need 
          scalable, secure, and efficient ad campaign management.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="shadow-hero" onClick={() => navigate('/register')}>
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" onClick={() => navigate('/demo')}>
            View Demo
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to manage ads across multiple organizations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that works best for your organization
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-primary shadow-lg' : 'shadow-sm'}`}>
              {plan.popular && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full mt-6" 
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => navigate('/register')}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container py-8 text-center text-muted-foreground">
          <p>&copy; 2024 Adsage. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Welcome;