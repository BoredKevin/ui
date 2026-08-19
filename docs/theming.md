# Theming & Design Tokens

The theming architecture in `@boredkevin/ui` is built on standard CSS custom properties and HSL color values rather than heavy CSS-in-JS runtimes. This allows dark and light modes, color presets, and runtime hue shifts to function dynamically with zero page reloads.

## 1. How the CSS Variables Work

Colors are stored as raw HSL channel values (like `0 0% 98%`) instead of wrapped `hsl(...)` strings. This allows Tailwind to apply opacity modifiers dynamically, enabling utility classes such as `bg-primary/20` or `text-foreground/60` across all components.

```css
/* Light mode defaults */
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 0 0% 3.9%;
  --primary: 0 0% 9%;
  --primary-foreground: 0 0% 98%;
  --muted: 0 0% 96.1%;
  --muted-foreground: 0 0% 45.1%;
  --border: 0 0% 89.8%;
  --radius: 0rem;
}

/* Dark mode overrides (active by default) */
.dark {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  --card: 0 0% 3.9%;
  --card-foreground: 0 0% 98%;
  --primary: 0 0% 98%;
  --primary-foreground: 0 0% 9%;
  --muted: 0 0% 14.9%;
  --muted-foreground: 0 0% 63.9%;
  --border: 0 0% 14.9%;
  --radius: 0rem;
}
```

## 2. Using the useTheme Hook

The `useTheme` hook provides access to the active theme state, preset selections, and dynamic color adjustments:

```tsx
import React from 'react';
import { useTheme, Button } from '@boredkevin/ui';

export function ThemeControls() {
  const {
    isDark,
    toggleThemeMode,
    selectPreset,
    setHueShift,
    resetTheme,
  } = useTheme();

  return (
    <div className="flex flex-wrap gap-2">
      {/* Toggle dark / light mode */}
      <Button variant="outline" onClick={toggleThemeMode}>
        {isDark ? 'Switch to Light' : 'Switch to Dark'}
      </Button>

      {/* Switch to a preset */}
      <Button variant="cyber" onClick={() => selectPreset('zinc-cyber')}>
        Cyber Preset
      </Button>

      {/* Reset to defaults */}
      <Button variant="ghost" onClick={resetTheme}>
        Reset
      </Button>
    </div>
  );
}
```

## 3. Built-In Presets

The library ships with four curated color presets tailored for dark mode:

- **`default-sharp`**: Pitch-black monochrome with crisp white text and silver accents.
- **`zinc-cyber`**: High-contrast dark slate with vivid cyan neon highlights.
- **`emerald-matrix`**: Deep tactical green tones inspired by terminal screens.
- **`amber-terminal`**: Warm amber phosphor glow reminiscent of vintage monitors.
