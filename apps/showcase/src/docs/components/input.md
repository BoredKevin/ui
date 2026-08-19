# Input

Text inputs for forms, search bars, and query prompts. Built with crisp high-contrast borders, clean focus rings that pop against dark backgrounds, and optional angled chamfer cuts.

- **Source**: `packages/ui/src/components/ui/input.tsx`

## Basic Input

A standard text field that inherits theme styling automatically:

```tsx
import { Input } from '@boredkevin/ui';

<Input placeholder="Enter username..." />
```

## With Icons & Chamfers

You can pair inputs with icons using standard Tailwind utility classes and add beveled corners with the `chamfer` prop:

```tsx
import { Search } from 'lucide-react';
import { Input } from '@boredkevin/ui';

<div className="relative">
  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
  <Input className="pl-9" placeholder="Search records..." chamfer="dual" />
</div>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `string` | `'text'` | Standard HTML input type (`text`, `password`, `email`, etc.) |
| `chamfer` | `'none' \| 'dual' \| 'top-right' \| 'all'` | `'none'` | Beveled 45° corner cut style |
| `disabled` | `boolean` | `false` | Disables text entry and applies muted styling |
| `className` | `string` | `undefined` | Additional Tailwind utility classes |
