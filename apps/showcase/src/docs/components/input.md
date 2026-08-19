# Input

Text input field with high-contrast borders, icon slots, and tactical chamfer support.

- **Source**: `packages/ui/src/components/ui/input.tsx`

## Basic Input

```tsx
import { Input } from '@boredkevin/ui';

<Input placeholder="Enter username..." />
```

## With Icons & Chamfers

```tsx
import { Search } from 'lucide-react';

<div className="relative">
  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
  <Input className="pl-9" placeholder="Search records..." chamfer="dual" />
</div>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `string` | `'text'` | Input HTML type (text, password, number, etc.) |
| `chamfer` | `'none' \| 'dual' \| 'top-right' \| 'all'` | `'none'` | 45° angle cut style |
| `disabled` | `boolean` | `false` | Disables input interaction |
