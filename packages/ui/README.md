# @boredkevin/ui

A sharp, pitch-dark UI component library built on Radix UI, Tailwind CSS, and lightweight canvas backgrounds. Built for developer tools, dashboards, and futuristic web apps.

## Installation

```bash
# npm
npm install @boredkevin/ui lucide-react

# pnpm
pnpm add @boredkevin/ui lucide-react

# yarn
yarn add @boredkevin/ui lucide-react

# bun
bun add @boredkevin/ui lucide-react
```

## Quick Start

### 1. Import Theme Styles
Import `@boredkevin/ui/theme.css` in your application root (e.g. `main.tsx`, `App.tsx`, or Next.js `layout.tsx`):

```tsx
import '@boredkevin/ui/theme.css';
```

### 2. Use Components

```tsx
import React from 'react';
import { 
  Button, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent,
  ConstellationsBackground,
  ThemeProvider 
} from '@boredkevin/ui';

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen p-8 bg-background text-foreground flex items-center justify-center">
        {/* Ambient Star Background */}
        <ConstellationsBackground particleCount={45} interactive />

        {/* Sharp HUD Card */}
        <Card telemetry="SYS.01" className="w-full max-w-md relative z-10">
          <CardHeader>
            <CardTitle>Welcome to @boredkevin/ui</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Pitch-black OLED contrast, crisp 1px borders, and optional angled chamfer cuts.
            </p>
            <div className="flex gap-2">
              <Button variant="cyber">Cyber Action</Button>
              <Button variant="outline">Secondary</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
}
```

## Features

- **Sharp Geometry & Beveled Chamfers:** Angular button cuts, card styles, and HUD corner overlays (`CornerEdges`).
- **Lightweight Canvas Backgrounds:** Ambient background animations (`ConstellationsBackground`, `PerlinNoiseBackground`, `AtmosphericAuroraBackground`, `CanvasBackground`).
- **Live HSL Tokens & Theme Provider:** Easily switch presets (`zinc-cyber`, `emerald-matrix`, `amber-terminal`) or adjust hue at runtime without page reloads.
- **Full TypeScript Support:** Complete typings shipped with the bundle.

## License

MIT
