# Table

A responsive, high-density data table with row hover states and telemetry alignment.

- **Source**: `packages/ui/src/components/ui/table.tsx`

## Data Table Example

```tsx
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from '@boredkevin/ui';

<Table>
  <TableCaption>Active System Node Invoices</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Node ID</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Bandwidth</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-mono">NODE-01</TableCell>
      <TableCell>Online</TableCell>
      <TableCell>Fiber</TableCell>
      <TableCell className="text-right font-mono">10 Gbps</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional styling classes |
