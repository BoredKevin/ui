# Dropdown Menu

Displays a dropdown menu to the user — triggered by a button — with submenus, checkboxes, and radio options.

- **Source**: `packages/ui/src/components/ui/dropdown-menu.tsx`
- **Primitive**: `DropdownMenu (@radix-ui/react-dropdown-menu)`

## Interactive Dropdown

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Button
} from '@boredkevin/ui';

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Options</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Node Controls</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Status Overview</DropdownMenuItem>
    <DropdownMenuItem>Security Logs</DropdownMenuItem>
    <DropdownMenuItem>Terminal Shell</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `undefined` | Controlled open state |
| `onOpenChange` | `(open: boolean) => void` | `undefined` | Callback on open change |
