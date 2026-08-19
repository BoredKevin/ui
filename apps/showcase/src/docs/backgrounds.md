# Canvas Backgrounds

Hardware-accelerated dynamic 60fps canvas backgrounds for React applications.

## 1. Constellations Background

Interactive twinkling star nodes with proximity connection webbing and mouse magnetism:

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

Silky organic particle streamlines driven by mathematical Perlin vector noise:

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

Ambient dynamic glowing color gradients:

```tsx
import { AtmosphericAuroraBackground } from '@boredkevin/ui';

<AtmosphericAuroraBackground intensity="medium" speed="normal" />
```

## 4. CanvasBackground Unified Component

Automatically matches the active theme settings and renders the user's selected background:

```tsx
import { CanvasBackground } from '@boredkevin/ui';

<CanvasBackground />
```
