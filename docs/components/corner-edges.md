# CornerEdges

Standalone sci-fi HUD bracket framing system with glowing corner lines, telemetry markers, and tactical status readouts.

- **Source**: `packages/ui/src/components/ui/corner-edges.tsx`

## Basic HUD Framing

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
| `size` | `number` | `8` | Size of corner bracket arms in pixels |
| `glow` | `boolean` | `true` | Enables subtle accent neon glow |
| `telemetry` | `string` | `undefined` | Monospace status or identifier code |
| `variant` | `'primary' \| 'cyber' \| 'destructive' \| 'muted'` | `'primary'` | Color theme for corner brackets |
