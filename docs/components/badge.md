# Badge

Displays a status badge or numeric counter with cyber, outline, secondary, and destructive styles.

- **Source**: `packages/ui/src/components/ui/badge.tsx`

## Variants

```tsx
import { Badge } from '@boredkevin/ui';

<div className="flex gap-2">
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
| `variant` | `'default' \| 'secondary' \| 'destructive' \| 'outline' \| 'cyber'` | `'default'` | Visual styling variant |
