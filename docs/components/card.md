# Card & Telemetry

Pitch-dark card container with optional telemetry tags and glowing sci-fi corner bracket framing.

- **Source**: `packages/ui/src/components/ui/card.tsx`

## Basic Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Badge } from '@boredkevin/ui';

<Card className="w-full max-w-md">
  <CardHeader>
    <CardTitle>System Overview</CardTitle>
    <CardDescription>Real-time telemetry and diagnostics.</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">All nodes operating normally.</p>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline" size="sm">Details</Button>
    <Button variant="cyber" size="sm">Connect</Button>
  </CardFooter>
</Card>
```

## Card with Telemetry & Corner Lines

```tsx
<Card telemetry="SYS.SEC-04" cornerLines={true} className="w-full max-w-md">
  <CardHeader>
    <div className="flex items-center justify-between">
      <Badge variant="cyber">ACTIVE</Badge>
      <span className="text-xs text-muted-foreground font-mono">NODE 01</span>
    </div>
    <CardTitle>Telemetry Firewall</CardTitle>
  </CardHeader>
</Card>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `telemetry` | `string` | `undefined` | Optional sci-fi HUD code rendered in the corner |
| `cornerLines` | `boolean` | `false` | Enables glowing neon corner brackets |
| `className` | `string` | `undefined` | Additional CSS classes |
| `children` | `React.ReactNode` | - | Card sub-components |
