# @boredkevin/ui

A sharp-cornered Shadcn UI design system inspired by Tweakcn with pitch-dark aesthetic, live HSL controls, custom chamfers, dynamic background effects, and drop-in integration.

## Installation

```bash
npm install @boredkevin/ui
# or
pnpm add @boredkevin/ui
# or
yarn add @boredkevin/ui
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
  CornerEdges,
  ConstellationsBackground,
  ThemeProvider 
} from '@boredkevin/ui';

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen p-8 bg-background text-foreground flex items-center justify-center">
        {/* Dynamic Canvas Background */}
        <ConstellationsBackground particleCount={45} interactive />

        {/* Sharp Sci-Fi Card */}
        <Card telemetry="SYS.01" className="w-full max-w-md relative z-10">
          <CardHeader>
            <CardTitle>Welcome to @boredkevin/ui</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Sharp chamfers, glowing edges, and dark theme by default.
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

- **Sharp Corners & Sci-Fi Chamfers:** Unique angular button, card, and corner styles (`CornerEdges`).
- **Dynamic Backgrounds:** Hardware-accelerated canvas animations (`ConstellationsBackground`, `PerlinNoiseBackground`, `AtmosphericAuroraBackground`, `UnifiedDynamicCanvas`).
- **Live HSL Tokens & Theme Provider:** Seamlessly customize hue, saturation, lightness, and radius across all components.
- **Full TypeScript Support:** Complete typings shipped directly with the bundle.

## License

MIT
