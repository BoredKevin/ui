# Tooltip

A popup that displays informational text when a user hovers or focuses on an element.

- **Source**: `packages/ui/src/components/ui/tooltip.tsx`
- **Primitive**: `Tooltip (@radix-ui/react-tooltip)`

## Interactive Tooltip

```tsx
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  Button
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
| `delayDuration` | `number` | `700` | Hover duration in milliseconds before tooltip appears |
