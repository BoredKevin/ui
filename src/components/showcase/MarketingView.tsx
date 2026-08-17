import React from 'react';
import { ArrowRight, CheckCircle, Zap, Terminal, Code2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const MarketingView: React.FC = () => {
  return (
    <div className="p-4 md:p-8 space-y-12 max-w-[1200px] mx-auto">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-8 border border-border bg-card/20 p-8">
        <Badge variant="outline" className="mb-2 font-mono text-[11px]">
          v0.1.0 — @boredkevin/ui
        </Badge>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground">
          Precision Engineering for <span className="underline decoration-primary">Shadcn UI</span>
        </h1>
        <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
          @boredkevin/ui brings the signature tweakcn pitch-dark aesthetic with 0px sharp corners, customizable HSL tokens, and instant drop-in integration.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Button variant="white" size="lg" className="gap-2 text-sm font-bold">
            <span>Explore Components</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="text-sm">
            View on GitHub
          </Button>
        </div>
      </div>

      {/* Feature Grids */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card telemetry="FEAT.CHAMFER-01">
          <CardHeader>
            <Zap className="h-6 w-6 text-primary mb-2" />
            <CardTitle className="text-base font-bold">Customizable Chamfers</CardTitle>
            <CardDescription className="text-xs">
              Configurable 45° cut corners, tactical cyber bevels, and dual notch styling for all buttons and inputs.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card telemetry="FEAT.CORNER-02">
          <CardHeader>
            <Terminal className="h-6 w-6 text-primary mb-2" />
            <CardTitle className="text-base font-bold">Bright Corner Edge Lines</CardTitle>
            <CardDescription className="text-xs">
              L-shaped neon cyber brackets and telemetry metadata tags framing containers with laser glow.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card telemetry="FEAT.LLM-03">
          <CardHeader>
            <Code2 className="h-6 w-6 text-primary mb-2" />
            <CardTitle className="text-base font-bold">AI LLM Ready</CardTitle>
            <CardDescription className="text-xs">
              Includes comprehensive LLMS.md instructions tailored for Cursor, Claude, ChatGPT, Copilot, and Gemini.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Pricing Tier */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <Card className="border border-border">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Community</CardTitle>
            <CardDescription className="text-xs">
              For open-source and personal applications.
            </CardDescription>
            <div className="text-3xl font-bold font-mono pt-2">$0 <span className="text-xs font-normal text-muted-foreground">/ forever</span></div>
          </CardHeader>
          <CardContent className="space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-400" />
              <span>Full CSS Variables Theme</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-400" />
              <span>Tailwind v3 & v4 Presets</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-400" />
              <span>Copy-Paste Component Library</span>
            </div>
          </CardContent>
          <div className="p-6 pt-0">
            <Button variant="outline" className="w-full">Get Started</Button>
          </div>
        </Card>

        <Card className="border border-foreground bg-accent/20">
          <CardHeader>
            <Badge variant="default" className="w-fit mb-1 text-[10px]">RECOMMENDED</Badge>
            <CardTitle className="text-lg font-bold">Enterprise Pro</CardTitle>
            <CardDescription className="text-xs">
              For advanced teams and production platforms.
            </CardDescription>
            <div className="text-3xl font-bold font-mono pt-2">$49 <span className="text-xs font-normal text-muted-foreground">/ month</span></div>
          </CardHeader>
          <CardContent className="space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-400" />
              <span>Unlimited Custom Themes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-400" />
              <span>AI Component Prompt Generator</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-400" />
              <span>Priority Support & Updates</span>
            </div>
          </CardContent>
          <div className="p-6 pt-0">
            <Button variant="white" className="w-full font-bold">Upgrade to Pro</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
