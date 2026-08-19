# Separator

Visually or semantically separates content with a crisp 1px border line.

- **Source**: `packages/ui/src/components/ui/separator.tsx`
- **Primitive**: `Separator (@radix-ui/react-separator)`

## Horizontal & Vertical Separators

```tsx
import { Separator } from '@boredkevin/ui';

<div>
  <div className="space-y-1">
    <h4 className="text-sm font-medium leading-none">Terminal Matrix</h4>
    <p className="text-xs text-muted-foreground">High contrast layout</p>
  </div>
  <Separator className="my-4" />
  <div className="flex h-5 items-center space-x-4 text-xs">
    <div>Blog</div>
    <Separator orientation="vertical" />
    <div>Docs</div>
    <Separator orientation="vertical" />
    <div>Source</div>
  </div>
</div>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Line orientation |
| `decorative` | `boolean` | `true` | Declares element as decorative for accessibility |
