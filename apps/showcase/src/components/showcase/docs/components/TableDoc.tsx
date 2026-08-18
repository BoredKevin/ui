import React from 'react';
import { DocHeader, DocSection, ComponentPreview } from '../DocLayout';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Badge,
} from '@boredkevin/ui';

export const TableDoc: React.FC = () => {
  return (
    <div className="space-y-10 max-w-4xl mx-auto pb-16">
      <DocHeader
        title="Table"
        description="A responsive data table component with sharp borders and monospace tabular alignment."
        sourcePath="packages/ui/src/components/ui/table.tsx"
      />

      <DocSection
        title="Table Demo"
        description="Structured tabular data with status badges."
      >
        <ComponentPreview
          code={`import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Badge,
} from '@boredkevin/ui';

export function TableDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-mono">INV-001</TableCell>
          <TableCell><Badge variant="success">Paid</Badge></TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right font-mono">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-mono">INV-002</TableCell>
          <TableCell><Badge variant="warning">Pending</Badge></TableCell>
          <TableCell>PayPal</TableCell>
          <TableCell className="text-right font-mono">$150.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`}
        >
          <div className="w-full border border-border bg-card/40">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-mono">INV-001</TableCell>
                  <TableCell><Badge variant="success">Paid</Badge></TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right font-mono">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">INV-002</TableCell>
                  <TableCell><Badge variant="warning">Pending</Badge></TableCell>
                  <TableCell>PayPal</TableCell>
                  <TableCell className="text-right font-mono">$150.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">INV-003</TableCell>
                  <TableCell><Badge variant="default">Verified</Badge></TableCell>
                  <TableCell>Crypto (ETH)</TableCell>
                  <TableCell className="text-right font-mono">$1,420.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </ComponentPreview>
      </DocSection>
    </div>
  );
};

export default TableDoc;
