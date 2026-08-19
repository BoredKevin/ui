# Button

Displays an interactive button or component that triggers an action. Includes cyber, sharp outline, high-contrast white, and ghost variants.

- **Source**: `packages/ui/src/components/ui/button.tsx`
- **Primitive**: `Slot (@radix-ui/react-slot)`

## Variants

```tsx
import { Button } from '@boredkevin/ui';

export function ButtonVariants() {
  return (
    <div className="flex flex-wrap gap-2.5 items-center">
      <Button variant="default">Default</Button>
      <Button variant="cyber">Cyber</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="white">White</Button>
    </div>
  );
}
```

## Sizes

```tsx
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Sparkles className="h-4 w-4" /></Button>
```

## Chamfers

```tsx
<Button chamfer="dual">Dual Chamfer</Button>
<Button chamfer="top-right">Top-Right Cut</Button>
<Button chamfer="all">All Bevel</Button>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link' \| 'cyber' \| 'white'` | `'default'` | Visual stylistic variant |
| `size` | `'default' \| 'sm' \| 'lg' \| 'icon'` | `'default'` | Height, padding, and text scale |
| `chamfer` | `'none' \| 'dual' \| 'top-right' \| 'all'` | `'none'` | Tactical sci-fi 45° angle cut style |
| `asChild` | `boolean` | `false` | Merges button props onto immediate child element via Radix Slot |
| `disabled` | `boolean` | `false` | Disables user interactions and applies opacity styling |
