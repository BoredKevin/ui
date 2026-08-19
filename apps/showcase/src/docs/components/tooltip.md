# Tooltip

Displays a short descriptive hint when users hover or focus on an element, helpful for icon buttons and truncated labels.

- **Source**: `packages/ui/src/components/ui/tooltip.tsx`
- **Primitive**: `Tooltip (@radix-ui/react-tooltip)`

## Interactive Tooltip

Wrap your trigger with `TooltipProvider` and `Tooltip`:

```tsx
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  Button,
} from '@boredkevin/ui';

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover Over Me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Encrypted telemetry node 01</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `delayDuration` | `number` | `700` | Delay in milliseconds before the tooltip appears |
