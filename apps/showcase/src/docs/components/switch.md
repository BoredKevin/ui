# Switch

A binary toggle switch for turning settings, background particle effects, or notifications on and off.

- **Source**: `packages/ui/src/components/ui/switch.tsx`
- **Primitive**: `Switch (@radix-ui/react-switch)`

## Interactive Switch

Pair a switch with a descriptive label for toggling preferences:

```tsx
import { Switch } from '@boredkevin/ui';

<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <label htmlFor="airplane-mode" className="text-xs text-foreground">
    Telemetry Broadcast
  </label>
</div>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | `undefined` | Controlled state indicating whether the switch is active |
| `onCheckedChange` | `(checked: boolean) => void` | `undefined` | Callback fired when the toggle state flips |
