import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DocHeader, DocSection } from '@/components/showcase/docs/DocLayout';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, Badge } from '@boredkevin/ui';
import {
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
  Code2,
  Check,
  Copy,
  Terminal,
  Bot,
  Sliders,
} from 'lucide-react';
import { ALL_DOCS } from '@/lib/docs-loader';

export const DocsOverviewPage: React.FC = () => {
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const quickPrompt = `Use @boredkevin/ui components (from https://ui.bkev.in/docs).
Wrap with <ThemeProvider>, import '@boredkevin/ui/theme.css', and use sharp pitch-dark styling with chamfer and telemetry options.`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(quickPrompt);
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  const componentItems = ALL_DOCS.filter((i) => i.category === 'Components');

  return (
    <div className="space-y-12 max-w-4xl mx-auto pb-16">
      <DocHeader
        title="Overview & Architecture"
        description="A precision-crafted UI component library built on Radix UI, Tailwind CSS, and hardware-accelerated canvas backgrounds — designed for mission-critical developer tools and futuristic dashboards."
        badge="Documentation"
      />

      {/* Quick Access Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-4 border border-border bg-card/40 space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-primary">
            <Zap className="h-4 w-4" />
            <span>Precision Aesthetics</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Clean rectangular geometry, pitch-dark OLED contrast, and tactical sci-fi chamfers.
          </p>
        </div>

        <div className="p-4 border border-border bg-card/40 space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-primary">
            <ShieldCheck className="h-4 w-4" />
            <span>Radix UI Powered</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Keyboard navigation, focus trapping, and screen-reader accessibility out of the box.
          </p>
        </div>

        <div className="p-4 border border-border bg-card/40 space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-primary">
            <Layers className="h-4 w-4" />
            <span>60fps Canvas FX</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Hardware-accelerated Constellations, Perlin Noise, and Aurora background effects.
          </p>
        </div>
      </div>

      {/* Getting Started Quick CTA */}
      <div className="p-6 border border-border bg-card/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-base font-bold text-foreground">
            Ready to build?
          </h3>
          <p className="text-xs text-muted-foreground">
            Follow the step-by-step installation guide to set up Tailwind CSS and ThemeProvider.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Button asChild variant="cyber" size="sm" className="text-xs">
            <Link to="/docs/installation">
              <span>Quickstart Guide</span>
              <ArrowRight className="h-3.5 w-3.5 ml-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="text-xs">
            <Link to="/">
              <span>Theme Studio</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Component Library Directory */}
      <DocSection
        title="Component Directory (16 Primitives)"
        description="Explore live interactive previews, props references, and usage examples for each component."
        id="components-directory"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {componentItems.map((comp) => {
            const Icon = comp.icon || Code2;
            return (
              <Link
                key={comp.id}
                to={comp.path}
                className="group p-3.5 border border-border bg-card/40 hover:bg-card hover:border-primary transition-all flex flex-col justify-between space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1 border border-border bg-muted/30 group-hover:border-primary group-hover:text-primary transition-colors">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                      {comp.title}
                    </span>
                  </div>
                  {comp.badge && (
                    <Badge variant="outline" className="text-[9px] font-mono">
                      {comp.badge}
                    </Badge>
                  )}
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-2">
                  {comp.description}
                </p>
              </Link>
            );
          })}
        </div>
      </DocSection>

      {/* AI Assistant Integration */}
      <DocSection
        title="AI Assistant & LLM Context"
        description="Use @boredkevin/ui with Cursor, Claude, Copilot, ChatGPT, or Antigravity."
        id="ai-assistant-context"
      >
        <div className="p-4 border border-border bg-card/30 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-foreground">
              <Bot className="h-4 w-4 text-primary" />
              <span>Prompt Reference & Documentation URL</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="h-6 px-2 text-xs font-mono"
            >
              {copiedPrompt ? (
                <>
                  <Check className="h-3 w-3 mr-1 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3 mr-1" />
                  <span>Copy Snippet</span>
                </>
              )}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Instruct AI assistants to reference documentation at{' '}
            <code className="text-primary font-mono">https://ui.bkev.in/docs</code> and discover endpoints via{' '}
            <code className="text-primary font-mono">https://ui.bkev.in/llms.txt</code>.
          </p>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm" className="text-xs font-mono">
              <Link to="/docs/llms">Open LLM Guide</Link>
            </Button>
          </div>
        </div>
      </DocSection>
    </div>
  );
};

export default DocsOverviewPage;
