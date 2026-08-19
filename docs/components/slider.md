# Slider

A clean range slider for tuning numeric values such as volume levels, particle counts, opacity percentages, and frequency thresholds.

- **Source**: `packages/ui/src/components/ui/slider.tsx`
- **Primitive**: `Slider (@radix-ui/react-slider)`

## Interactive Slider

Render a draggable slider track with support for default values, bounds, and step increments:

```tsx
import { Slider } from '@boredkevin/ui';

<Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultValue` | `number[]` | `[0]` | Initial slider value array |
| `max` | `number` | `100` | Maximum selectable value |
| `min` | `number` | `0` | Minimum selectable value |
| `step` | `number` | `1` | Granularity of each step |
| `onValueChange` | `(value: number[]) => void` | `undefined` | Callback fired as the slider value changes |
