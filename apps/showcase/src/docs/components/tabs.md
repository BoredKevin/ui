# Tabs

A set of layered content panels displaying one panel at a time with clean tab strip triggers.

- **Source**: `packages/ui/src/components/ui/tabs.tsx`
- **Primitive**: `Tabs (@radix-ui/react-tabs)`

## Basic Tabs

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@boredkevin/ui';

<Tabs defaultValue="account" className="w-[400px]">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <div className="p-4 border border-border bg-card">Account details.</div>
  </TabsContent>
  <TabsContent value="password">
    <div className="p-4 border border-border bg-card">Password management.</div>
  </TabsContent>
</Tabs>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultValue` | `string` | `undefined` | The value of the default selected tab |
| `value` | `string` | `undefined` | Controlled active tab value |
| `onValueChange` | `(value: string) => void` | `undefined` | Callback on tab change |
