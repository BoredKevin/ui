# Card & Telemetry

Cards group related content, metrics, and actions into structured containers. By default, they render in OLED dark with crisp 1px borders. If you are building a telemetry screen or dashboard, you can turn on glowing corner brackets (`cornerLines`) and attach monospace telemetry tags (`telemetry="SYS.01"`).

- **Source**: `packages/ui/src/components/ui/card.tsx`

## Basic Card

A clean container with header, body, and footer areas:

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
} from '@boredkevin/ui';

<Card className="w-full max-w-md">
  <CardHeader>
    <CardTitle>System Overview</CardTitle>
    <CardDescription>Live diagnostics and node status.</CardDescription>
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

Add glowing corner brackets and an optional monospace ID tag in the upper corner:

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
| `telemetry` | `string` | `undefined` | Optional monospace label displayed in the corner |
| `cornerLines` | `boolean` | `false` | Enables glowing accent corner brackets |
| `className` | `string` | `undefined` | Additional Tailwind utility classes |
| `children` | `React.ReactNode` | - | Card sub-components (`CardHeader`, `CardContent`, etc.) |
