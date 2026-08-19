# Slider

An input where the user selects a value from within a given range.

- **Source**: `packages/ui/src/components/ui/slider.tsx`
- **Primitive**: `Slider (@radix-ui/react-slider)`

## Interactive Slider

```tsx
import { Slider } from '@boredkevin/ui';

<Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultValue` | `number[]` | `[0]` | Default slider value array |
| `max` | `number` | `100` | Maximum limit |
| `min` | `number` | `0` | Minimum limit |
| `step` | `number` | `1` | Increment step |
| `onValueChange` | `(value: number[]) => void` | `undefined` | Callback on value change |
