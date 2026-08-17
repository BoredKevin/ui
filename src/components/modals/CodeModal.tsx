import React, { useState } from 'react';
import { Copy, Check, FileCode } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { useTheme } from '@/context/ThemeContext';
import { LLMS_INSTRUCTIONS } from '@/theme/llms-guide';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CodeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type CodeTab = 'v3' | 'v4' | 'backgrounds' | 'config' | 'json' | 'npm' | 'llms';

export const CodeModal: React.FC<CodeModalProps> = ({ open, onOpenChange }) => {
  const {
    getGlobalsCssV3,
    getGlobalsCssV4,
    getTailwindConfig,
    getThemeJson,
  } = useTheme();

  const [activeTab, setActiveTab] = useState<CodeTab>('v3');
  const [copied, setCopied] = useState(false);

  const getActiveCode = (): string => {
    switch (activeTab) {
      case 'v3':
        return getGlobalsCssV3();
      case 'v4':
        return getGlobalsCssV4();
      case 'backgrounds':
        return `// @boredkevin/ui Customizable Dynamic Backgrounds Usage

import { 
  ConstellationsBackground, 
  PerlinNoiseBackground, 
  AtmosphericAuroraBackground, 
  CanvasBackground 
} from '@boredkevin/ui';

// 1. Interactive Constellations Background
export function StarfieldDemo() {
  return (
    <div className="relative w-full h-screen bg-black">
      <ConstellationsBackground
        particleCount={80}
        maxDistance={140}
        speed={0.7}
        starSize={2}
        starColor="rgba(255, 255, 255, 0.9)"
        lineColor="rgba(255, 255, 255, 0.25)"
        glow={true}
        interactive={true}
        mouseRadius={160}
        lineOpacity={0.35}
      />
      {/* Your Foreground UI */}
      <div className="relative z-10 p-8">
        <h1 className="text-3xl font-bold text-white">Constellations Engine</h1>
      </div>
    </div>
  );
}

// 2. Silky Perlin Noise Flow Field Streamlines
export function PerlinFlowDemo() {
  return (
    <div className="relative w-full h-screen bg-black">
      <PerlinNoiseBackground
        particleCount={400}
        noiseScale={0.003}
        flowSpeed={0.8}
        lineThickness={1.2}
        colorMode="theme" // 'theme' | 'aurora' | 'cyan' | 'emerald' | 'amber' | 'crimson' | 'monochrome'
        interactive={true}
        mouseRadius={180}
      />
      {/* Your Foreground UI */}
    </div>
  );
}

// 3. Unified Dynamic Canvas Background (Syncs with Theme Context)
export function AppBackgroundWrapper() {
  return <CanvasBackground />;
}`;
      case 'config':
        return getTailwindConfig();
      case 'json':
        return getThemeJson();
      case 'npm':
        return `# Install the package
npm install @boredkevin/ui

# Or if using pnpm
pnpm add @boredkevin/ui

# Or if using yarn
yarn add @boredkevin/ui

# Import in your project:
import { 
  Button, 
  Card, 
  Input, 
  ConstellationsBackground, 
  PerlinNoiseBackground 
} from '@boredkevin/ui';
import '@boredkevin/ui/theme.css';`;
      case 'llms':
        return LLMS_INSTRUCTIONS;
      default:
        return '';
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getActiveCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100vw-2rem)] sm:max-w-3xl p-4 sm:p-6">
        <DialogHeader className="space-y-2 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pr-6">
            <div className="flex items-center gap-2 min-w-0">
              <FileCode className="h-5 w-5 text-primary shrink-0" />
              <DialogTitle className="text-lg font-bold truncate">Export Theme & Code</DialogTitle>
            </div>
            <Button
              variant="white"
              size="sm"
              onClick={handleCopy}
              className="gap-1.5 text-xs font-semibold h-8 shrink-0 self-start sm:self-auto"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy Code</span>
                </>
              )}
            </Button>
          </div>
          <DialogDescription className="text-xs">
            Export the sharp-cornered theme for Tailwind v3/v4, dynamic background components, npm install, or AI LLM system prompt instructions.
          </DialogDescription>
        </DialogHeader>

        {/* Tabs Bar */}
        <div className="flex items-center gap-1 border-b border-border overflow-x-auto pb-1.5 text-xs min-w-0 w-full">
          {[
            { id: 'v3', label: 'Tailwind v3 (globals.css)' },
            { id: 'v4', label: 'Tailwind v4 (@theme)' },
            { id: 'backgrounds', label: '✦ Backgrounds JSX' },
            { id: 'config', label: 'tailwind.config.js' },
            { id: 'json', label: 'theme.json' },
            { id: 'npm', label: 'npm / Package' },
            { id: 'llms', label: '✦ AI LLM Rules (LLMS.md)' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as CodeTab)}
              className={cn(
                'px-3 py-1.5 font-medium whitespace-nowrap transition-colors border shrink-0',
                activeTab === tab.id
                  ? 'border-primary bg-primary/10 text-primary font-semibold'
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Code Display Area */}
        <div className="relative min-w-0 w-full overflow-hidden">
          <pre className="p-4 bg-muted/40 border border-border font-mono text-xs text-foreground overflow-x-auto max-h-[50vh] max-w-full leading-relaxed selection:bg-primary selection:text-primary-foreground">
            <code>{getActiveCode()}</code>
          </pre>
        </div>
      </DialogContent>
    </Dialog>
  );
};
