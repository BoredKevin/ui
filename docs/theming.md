# Theming & Design Tokens

Master the pitch-dark HSL color system, precision design tokens, sci-fi chamfers, and dynamic runtime customization hooks.

## 1. CSS Variables Architecture

Colors are defined as raw HSL channel triplets (`h s% l%`) without the `hsl()` wrapper to allow alpha blending with Tailwind (e.g., `bg-primary/20`):

```css
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

## 2. useTheme() Runtime Hook

Manipulate theme modes, presets, and hue rotation dynamically:

```tsx
import React from 'react';
import { useTheme, Button } from '@boredkevin/ui';

export function ThemeControls() {
  const {
    theme,
    isDark,
    toggleThemeMode,
    selectPreset,
    setHueShift,
    resetTheme
  } = useTheme();

  return (
    <div className="flex gap-2">
      <Button variant="outline" onClick={toggleThemeMode}>
        {isDark ? 'Light' : 'Dark'}
      </Button>
      <Button variant="cyber" onClick={() => selectPreset('zinc-cyber')}>
        Cyber Preset
      </Button>
    </div>
  );
}
```

## 3. Presets
- `default-sharp`: Pitch-black OLED monochrome contrast.
- `zinc-cyber`: Cyberpunk cyan neon accents.
- `emerald-matrix`: Matrix tactical emerald green.
- `amber-terminal`: Retro industrial amber phosphor.
