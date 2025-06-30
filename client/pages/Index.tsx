import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Brain,
  Heart,
  Lock,
  Settings,
  Users,
  Eye,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  MessageSquare,
  BarChart3,
  Smartphone,
} from "lucide-react";

export default function Index() {
  const features = [
    {
      icon: Settings,
      title: "Simplicity with Depth",
      description:
        "Clean, intuitive interface designed for non-tech-savvy parents — powered by smart AI under the hood.",
    },
    {
      icon: Lock,
      title: "Privacy-First Architecture",
      description:
        "Analyzes data locally or anonymously, prioritizing child and family privacy unlike cloud-based platforms.",
    },
    {
      icon: Heart,
      title: "AI-Powered Emotional Insight",
      description:
        "Tracks screen time and flags emotional tone in messages, giving a holistic view of your child's well-being.",
    },
    {
      icon: MessageSquare,
      title: "Actionable Guidance, Not Just Alerts",
      description:
        "Provides context-aware suggestions rather than overwhelming you with raw data and notifications.",
    },
    {
      icon: Smartphone,
      title: "No Tech Setup Required",
      description:
        "Plug-and-play design with minimal setup, unlike competitors requiring extensive configuration.",
    },
    {
      icon: Users,
      title: "Local Cultural Sensitivity",
      description:
        "Content flagging and suggestions tailored to Indian family values and media for maximum relevance.",
    },
    {
      icon: Shield,
      title: "Trust-Centric Brand Identity",
      description:
        "Built around trust, empathy, and parenting — not surveillance. A positioning that's hard to replicate.",
    },
  ];

  const stats = [
    {
      value: "99%",
      label: "Parents feel more confident about their child's digital safety",
    },
    { value: "85%", label: "Reduction in family screen time conflicts" },
    {
      value: "24/7",
      label: "Continuous protection without invasive monitoring",
    },
    { value: "1M+", label: "Indian families already protected" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  🇮🇳 Made for Indian Families
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                  Digital Parenting Made{" "}
                  <span className="text-primary">Simple</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl">
                  GuardianAI provides AI-powered insights and privacy-first
                  protection for your child's digital journey. No tech expertise
                  required.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Setup in 2 minutes</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-3xl opacity-30"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 border">
                  <div className="space-y-6">
                    <div className="text-center">
                      <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-gray-900">
                        GuardianAI
                      </h3>
                      <p className="text-gray-600">
                        Digital Parenting Assistant
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="text-sm text-gray-700">
                          Device Status
                        </span>
                        <Badge variant="default" className="bg-green-500">
                          Protected
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="text-sm text-gray-700">
                          Screen Time Today
                        </span>
                        <span className="text-sm font-medium text-gray-900">
                          2h 15m
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                        <span className="text-sm text-gray-700">
                          Emotional Insight
                        </span>
                        <Badge variant="secondary" className="bg-orange-100">
                          Positive
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Why Choose GuardianAI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unlike complex monitoring tools, GuardianAI focuses on empowering
              parents with actionable insights while respecting family privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-8">
              Built on Trust, Not Surveillance
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Privacy First</h3>
                <p className="text-muted-foreground">
                  Your family's data stays private. Local processing means no
                  cloud storage of personal information.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Brain className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Smart Insights</h3>
                <p className="text-muted-foreground">
                  AI-powered analysis provides meaningful insights, not
                  overwhelming data dumps.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Family Focused</h3>
                <p className="text-muted-foreground">
                  Designed for building trust and communication, not creating
                  conflict between parents and children.
                </p>
              </div>
            </div>

            <blockquote className="text-2xl font-medium text-foreground italic">
              "Finally, a parenting app that understands Indian families and
              respects our values."
            </blockquote>
            <cite className="text-muted-foreground mt-4 block">
              — Priya Sharma, Mother of 2, Mumbai
            </cite>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Family's Digital Experience?
            </h2>
            <p className="text-xl text-white/90">
              Join thousands of Indian families who trust GuardianAI to keep
              their children safe online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary"
              >
                Request Demo
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-6 text-white/80 text-sm">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-current" />
                <span>4.9/5 rating</span>
              </div>
              <div className="flex items-center space-x-1">
                <Shield className="h-4 w-4" />
                <span>100% secure</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>1M+ families</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
