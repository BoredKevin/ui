# Tabs

Tabs organize content into switchable panels without cluttering your layout. They provide keyboard arrow navigation and crisp active indicators.

- **Source**: `packages/ui/src/components/ui/tabs.tsx`
- **Primitive**: `Tabs (@radix-ui/react-tabs)`

## Basic Tabs

Build a tabbed section with triggers and corresponding content panels:

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@boredkevin/ui';

<Tabs defaultValue="account" className="w-[400px]">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <div className="p-4 border border-border bg-card">Account settings and preferences.</div>
  </TabsContent>
  <TabsContent value="password">
    <div className="p-4 border border-border bg-card">Security credentials and password management.</div>
  </TabsContent>
</Tabs>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultValue` | `string` | `undefined` | The value of the tab open by default |
| `value` | `string` | `undefined` | Controlled value of the currently active tab |
| `onValueChange` | `(value: string) => void` | `undefined` | Callback fired when the active tab switches |
