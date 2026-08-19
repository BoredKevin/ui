# Dialog

A modal dialog window overlaid on the primary viewport, powered by Radix UI with crisp borders and backdrop blur.

- **Source**: `packages/ui/src/components/ui/dialog.tsx`
- **Primitive**: `Dialog (@radix-ui/react-dialog)`

## Interactive Dialog

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Button,
  Input
} from '@boredkevin/ui';

<Dialog>
  <DialogTrigger asChild>
    <Button variant="cyber">Open Terminal Modal</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>System Authorization</DialogTitle>
      <DialogDescription>
        Enter your credentials to access the secure node.
      </DialogDescription>
    </DialogHeader>
    <div className="py-4">
      <Input placeholder="Access key..." />
    </div>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button variant="cyber">Authorize</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `undefined` | Controlled open state |
| `onOpenChange` | `(open: boolean) => void` | `undefined` | Callback when open state changes |
