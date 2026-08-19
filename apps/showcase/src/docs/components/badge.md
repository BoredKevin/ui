# Badge

Badges are small status pills used to highlight tags, counters, and system states. Available in default, secondary, outline, destructive, and cyber neon styles.

- **Source**: `packages/ui/src/components/ui/badge.tsx`

## Variants

Select from multiple styles depending on the context:

```tsx
import { Badge } from '@boredkevin/ui';

<div className="flex flex-wrap gap-2">
  <Badge variant="default">Default</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="outline">Outline</Badge>
  <Badge variant="destructive">Destructive</Badge>
  <Badge variant="cyber">Cyber</Badge>
</div>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'secondary' \| 'destructive' \| 'outline' \| 'cyber'` | `'default'` | Visual style of the badge |
| `className` | `string` | `undefined` | Additional Tailwind utility classes |
