import React from 'react';
import { DocHeader, DocSection } from './DocLayout';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, Badge } from '@boredkevin/ui';
import { Terminal, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export const GettingStartedDoc: React.FC = () => {
  return (
    <div className="space-y-10 max-w-4xl mx-auto pb-16">
      <DocHeader
        title="Installation & Setup"
        description="A precision UI design system engineered for high-performance React applications with pitch-dark aesthetics, live HSL theme controls, custom chamfers, and hardware-accelerated canvas backgrounds."
        badge="Guide"
      />

      {/* Quick Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-3 border border-border bg-card/40">
          <div className="flex items-center gap-2 text-primary font-bold text-xs font-mono">
            <Sparkles className="h-4 w-4" />
            <span>Precision Geometry</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Crisp rectangular layout and custom chamfered sci-fi edges.
          </p>
        </div>

        <div className="p-3 border border-border bg-card/40">
          <div className="flex items-center gap-2 text-primary font-bold text-xs font-mono">
            <ShieldCheck className="h-4 w-4" />
            <span>Radix UI Powered</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Full keyboard navigation, focus trapping, screen-reader accessibility (a11y).
          </p>
        </div>

        <div className="p-3 border border-border bg-card/40">
          <div className="flex items-center gap-2 text-primary font-bold text-xs font-mono">
            <CheckCircle2 className="h-4 w-4" />
            <span>Live HSL Theming</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Real-time theme switching, hue rotation, dynamic dark/light tokens.
          </p>
        </div>
      </div>

      {/* Step 1: Installation */}
      <DocSection
        title="1. Installation"
        description="Install the package and its peer dependencies using your preferred package manager."
      >
        <div className="space-y-3">
          <CodeBlock
            language="bash"
            filename="Terminal"
            code={`# Using npm
npm install @boredkevin/ui lucide-react

# Using pnpm
pnpm add @boredkevin/ui lucide-react

# Using yarn
yarn add @boredkevin/ui lucide-react

# Using bun
bun add @boredkevin/ui lucide-react`}
          />
        </div>
      </DocSection>

      {/* Step 2: Import Theme CSS */}
      <DocSection
        title="2. Import CSS Tokens"
        description="Import the compiled CSS variables in your root entry file (e.g., main.tsx, App.tsx, or app/layout.tsx in Next.js)."
      >
        <CodeBlock
          language="tsx"
          filename="src/main.tsx"
          code={`import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import @boredkevin/ui CSS variables & theme tokens
import '@boredkevin/ui/theme.css';
// Import your own Tailwind index.css if separate
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`}
        />
      </DocSection>

      {/* Step 3: Configure Tailwind */}
      <DocSection
        title="3. Configure Tailwind Content"
        description="Ensure Tailwind scans the @boredkevin/ui package files so classes are compiled properly in your build."
      >
        <CodeBlock
          language="javascript"
          filename="tailwind.config.js"
          code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@boredkevin/ui/**/*.{js,mjs,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};`}
        />
      </DocSection>

      {/* Step 4: Wrap with ThemeProvider */}
      <DocSection
        title="4. Add ThemeProvider & First Component"
        description="Wrap your app tree with ThemeProvider to unlock real-time HSL tokens, presets, and dynamic canvas backgrounds."
      >
        <CodeBlock
          language="tsx"
          filename="src/App.tsx"
          code={`import React from 'react';
import { 
  ThemeProvider, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  Button, 
  Badge,
  ConstellationsBackground 
} from '@boredkevin/ui';

export function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background text-foreground flex items-center justify-center p-6">
        {/* Dynamic Background */}
        <ConstellationsBackground particleCount={40} interactive />

        {/* Sharp Sci-Fi Telemetry Card */}
        <Card telemetry="SYS.INIT-01" className="w-full max-w-md relative z-10">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge variant="cyber">ONLINE</Badge>
              <span className="font-mono text-xs text-muted-foreground">v0.1.0</span>
            </div>
            <CardTitle className="text-xl font-bold tracking-tight">
              Welcome to @boredkevin/ui
            </CardTitle>
            <CardDescription>
              Sharp edges, pitch-dark aesthetic, and glowing HSL accents.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <Button variant="cyber" className="w-full">
                Explore Matrix
              </Button>
              <Button variant="outline" className="w-full">
                Documentation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;`}
        />
      </DocSection>

      {/* Live Preview of the Quickstart Result */}
      <DocSection
        title="Quickstart Result"
        description="Here is what a live component built with the code above looks like right now:"
      >
        <div className="p-6 border border-border bg-card/30 flex items-center justify-center">
          <Card telemetry="SYS.DEMO-01" className="w-full max-w-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-[10px]">ONLINE</Badge>
                <span className="font-mono text-[10px] text-muted-foreground">0ms ping</span>
              </div>
              <CardTitle className="text-lg font-bold">
                Telemetry Node
              </CardTitle>
              <CardDescription className="text-xs">
                Sharp edges with pitch dark aesthetic.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-2">
                <Button variant="cyber" size="sm" className="w-full text-xs">
                  Connect Node
                </Button>
                <Button variant="outline" size="sm" className="w-full text-xs">
                  Inspect
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </DocSection>
    </div>
  );
};

export default GettingStartedDoc;
