# Button

The button is the foundation of almost every user flow. In addition to standard states like secondary, outline, and destructive, the component includes high-contrast `cyber` and `white` variants, plus optional angled chamfer cuts (`chamfer="dual"` or `"top-right"`) to give actions a sharp, technical look.

- **Source**: `packages/ui/src/components/ui/button.tsx`
- **Primitive**: `Slot (@radix-ui/react-slot)`

## Variants

Choose from several pre-styled variants to match the priority of each action:

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

Buttons come in four sizes, from compact inputs to full-sized callouts:

```tsx
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Sparkles className="h-4 w-4" /></Button>
```

## Chamfers

Give buttons a customized silhouette using 45-degree corner bevels:

```tsx
<Button chamfer="dual">Dual Chamfer</Button>
<Button chamfer="top-right">Top-Right Cut</Button>
<Button chamfer="all">All Bevel</Button>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link' \| 'cyber' \| 'white'` | `'default'` | Visual style of the button |
| `size` | `'default' \| 'sm' \| 'lg' \| 'icon'` | `'default'` | Button dimensions, padding, and font size |
| `chamfer` | `'none' \| 'dual' \| 'top-right' \| 'all'` | `'none'` | Beveled 45° corner cut style |
| `asChild` | `boolean` | `false` | Passes button props directly to the child element via Radix Slot |
| `disabled` | `boolean` | `false` | Disables clicks and dims the button appearance |
