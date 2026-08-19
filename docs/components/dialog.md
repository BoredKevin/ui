# Dialog

Modal dialogs for critical actions, confirmations, or detailed forms. Powered by Radix UI for accessible keyboard focus trapping, Escape-to-close behavior, and smooth backdrop transitions.

- **Source**: `packages/ui/src/components/ui/dialog.tsx`
- **Primitive**: `Dialog (@radix-ui/react-dialog)`

## Interactive Dialog

Compose a modal using triggers, headers, content, and footer actions:

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
  Input,
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
| `open` | `boolean` | `undefined` | Controls whether the dialog is open |
| `onOpenChange` | `(open: boolean) => void` | `undefined` | Callback fired when the open state changes |
