# Switch

A clean 2-state control that can be toggled on or off.

- **Source**: `packages/ui/src/components/ui/switch.tsx`
- **Primitive**: `Switch (@radix-ui/react-switch)`

## Interactive Switch

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
| `checked` | `boolean` | `undefined` | Controlled checked state |
| `onCheckedChange` | `(checked: boolean) => void` | `undefined` | Callback on toggle change |
