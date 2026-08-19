# Canvas Backgrounds

Dark interfaces benefit from high-contrast borders and sharp typography, but completely flat backgrounds can sometimes feel static. `@boredkevin/ui` includes a collection of lightweight, canvas-based ambient backgrounds that integrate directly into React applications without pulling in heavy 3D engines or complex WebGL dependencies.

All backgrounds render to standard HTML5 canvas elements, automatically pause when offscreen or unfocused, and adjust smoothly to window resizing.

## 1. Constellations Background

Renders a starry particle field where nearby nodes connect with faint lines. When interactive mode is enabled, particles gently move away from the mouse cursor:

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

When an application uses `ThemeProvider` and needs the background to switch automatically based on the active theme or preset settings, the unified `CanvasBackground` component handles this automatically:

```tsx
import { CanvasBackground } from '@boredkevin/ui';

<CanvasBackground />
```
