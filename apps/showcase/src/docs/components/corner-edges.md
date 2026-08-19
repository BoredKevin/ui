# CornerEdges

When you want to frame an arbitrary container with a sci-fi HUD aesthetic, `CornerEdges` renders four corner bracket accents and an optional status code inside any relative parent element.

- **Source**: `packages/ui/src/components/ui/corner-edges.tsx`

## Basic HUD Framing

Drop `CornerEdges` into any container with `relative` positioning:

```tsx
import { CornerEdges } from '@boredkevin/ui';

<div className="relative p-6 bg-card border border-border">
  <CornerEdges size={10} glow={true} telemetry="SEC.04" />
  <h3 className="text-lg font-bold">Encrypted Container</h3>
  <p className="text-sm text-muted-foreground">Protected by hardware boundary.</p>
</div>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `8` | Length of each corner bracket arm in pixels |
| `glow` | `boolean` | `true` | Enables a soft neon accent glow around each bracket |
| `telemetry` | `string` | `undefined` | Optional monospace text label placed near the top edge |
| `variant` | `'primary' \| 'cyber' \| 'destructive' \| 'muted'` | `'primary'` | Color scheme for the brackets and glow |
