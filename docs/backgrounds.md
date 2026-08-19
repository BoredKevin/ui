# Canvas Backgrounds

Dark interfaces look great with high-contrast borders and sharp typography, but completely flat backgrounds can sometimes feel static. `@boredkevin/ui` provides a collection of lightweight, canvas-based ambient backgrounds that drop straight into your app without pulling in heavy 3D engines or complex WebGL dependencies.

All backgrounds render to standard HTML5 canvas elements, automatically pause when offscreen or unfocused, and adjust smoothly to window resizing.

## 1. Constellations Background

Renders a starry particle field where nearby nodes connect with faint lines. When interactive mode is enabled, particles gently move away from your mouse cursor:

```tsx
import { ConstellationsBackground } from '@boredkevin/ui';

<ConstellationsBackground
  particleCount={80}
  maxDistance={140}
  speed={0.7}
  starSize={2}
  glow={true}
  interactive={true}
/>
```

## 2. Perlin Noise Flow Field

Generates flowing particle trails guided by continuous 2D Perlin noise, creating a smooth smoke or fluid motion effect:

```tsx
import { PerlinNoiseBackground } from '@boredkevin/ui';

<PerlinNoiseBackground
  particleCount={400}
  noiseScale={0.003}
  flowSpeed={0.8}
  lineThickness={1.2}
  colorMode="theme"
  interactive={true}
/>
```

## 3. Atmospheric Aurora

A soft, drifting ambient glow that gently pulses across the screen, adding depth behind cards and modals without distracting from text:

```tsx
import { AtmosphericAuroraBackground } from '@boredkevin/ui';

<AtmosphericAuroraBackground intensity="medium" speed="normal" />
```

## 4. CanvasBackground Unified Component

If your application uses the `ThemeProvider` and you want the background to automatically switch based on the user's active theme or preset settings, use the unified `CanvasBackground` component:

```tsx
import { CanvasBackground } from '@boredkevin/ui';

<CanvasBackground />
```
