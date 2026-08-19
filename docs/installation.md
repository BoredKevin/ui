# Installation & Setup

Learn how to install `@boredkevin/ui`, configure Tailwind CSS tokens, and initialize the `ThemeProvider`.

## 1. Package Installation

Install `@boredkevin/ui` and peer dependencies:

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

## 2. Import CSS Tokens

Import the compiled theme CSS variables in your entry file (`main.tsx` or `app/layout.tsx`):

```tsx
import '@boredkevin/ui/theme.css';
import './index.css';
```

## 3. Configure Tailwind

Ensure Tailwind scans the `@boredkevin/ui` package files:

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

## 4. Add ThemeProvider

Wrap your application in `ThemeProvider`:

```tsx
import React from 'react';
import { ThemeProvider, Card, CardHeader, CardTitle, Button, ConstellationsBackground } from '@boredkevin/ui';

export function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background text-foreground flex items-center justify-center p-6">
        <ConstellationsBackground particleCount={40} interactive />
        <Card telemetry="SYS.01" className="w-full max-w-sm relative z-10">
          <CardHeader>
            <CardTitle>Welcome to @boredkevin/ui</CardTitle>
          </CardHeader>
          <Button variant="cyber" className="w-full">
            Launch System
          </Button>
        </Card>
      </div>
    </ThemeProvider>
  );
}
```
