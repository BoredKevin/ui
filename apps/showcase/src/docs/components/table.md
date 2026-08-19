# Table

High-density data tables designed for metrics, event logs, and status dashboards with row hover states and monospace alignment.

- **Source**: `packages/ui/src/components/ui/table.tsx`

## Data Table Example

Assemble structured tables using header, body, row, cell, and caption components:

```tsx
import {
  Table,
  TableHeader,
  TableBody,
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
| `className` | `string` | `undefined` | Additional Tailwind utility classes |
