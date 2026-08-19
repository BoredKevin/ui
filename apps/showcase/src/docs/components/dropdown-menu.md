# Dropdown Menu

Displays an overlay menu triggered by a button, supporting action items, nested submenus, checkboxes, and dividers.

- **Source**: `packages/ui/src/components/ui/dropdown-menu.tsx`
- **Primitive**: `DropdownMenu (@radix-ui/react-dropdown-menu)`

## Interactive Dropdown

Attach a menu to a trigger button and group related options with headers and separators:

```tsx
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Button,
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
| `open` | `boolean` | `undefined` | Controlled open state of the dropdown |
| `onOpenChange` | `(open: boolean) => void` | `undefined` | Callback fired when the menu opens or closes |
