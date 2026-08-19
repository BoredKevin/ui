# Installation & Setup

Getting `@boredkevin/ui` running in your project takes about two minutes. You'll install the package, hook up the base CSS variables, tell Tailwind where to find component classes, and wrap your app with the theme provider.

## 1. Install the Package

Add `@boredkevin/ui` and `lucide-react` (used across several components for icons) using your package manager of choice:

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

## 2. Import the Theme Styles

Import the compiled theme CSS at the top of your entry file (such as `main.tsx`, `index.tsx`, or `app/layout.tsx` in Next.js). This loads the default HSL color variables and dark mode definitions:

```tsx
import '@boredkevin/ui/theme.css';
import './index.css';
```

## 3. Configure Tailwind CSS

In your `tailwind.config.js` or `tailwind.config.ts`, make sure Tailwind scans the `@boredkevin/ui` package so it doesn't purge component styles. Then map the standard color keys to the HSL CSS variables:

```javascript
/** @type {import('tailwindcss').Config} */
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
    },
  },
  plugins: [require('tailwindcss-animate')],
};
```

## 4. Wrap with ThemeProvider

Wrap your root layout with `<ThemeProvider>`. This gives every component access to theme presets, dark mode toggles, and dynamic color adjustments:

```tsx
import React from 'react';
import {
  ThemeProvider,
  Card,
  CardHeader,
  CardTitle,
  Button,
  ConstellationsBackground,
} from '@boredkevin/ui';

export function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background text-foreground flex items-center justify-center p-6">
        {/* Ambient star background */}
        <ConstellationsBackground particleCount={40} interactive />

        {/* Sharp HUD card */}
        <Card telemetry="SYS.01" className="w-full max-w-sm relative z-10">
          <CardHeader>
            <CardTitle>Welcome to @boredkevin/ui</CardTitle>
          </CardHeader>
          <div className="p-6 pt-0 space-y-4">
            <p className="text-sm text-muted-foreground">
              Your setup is complete. You are ready to start building.
            </p>
            <Button variant="cyber" className="w-full">
              Launch System
            </Button>
          </div>
        </Card>
      </div>
    </ThemeProvider>
  );
}
```
