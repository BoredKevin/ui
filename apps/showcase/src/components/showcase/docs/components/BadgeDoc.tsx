import React from 'react';
import { DocHeader, DocSection, ComponentPreview, PropsTable } from '../DocLayout';
import { Badge } from '@boredkevin/ui';

export const BadgeDoc: React.FC = () => {
  return (
    <div className="space-y-10 max-w-4xl mx-auto pb-16">
      <DocHeader
        title="Badge"
        description="Displays a sharp status badge or indicator with distinct high-contrast variant styles."
        sourcePath="packages/ui/src/components/ui/badge.tsx"
      />

      <DocSection
        title="Badge Variants"
        description="Support for default, secondary, destructive, outline, success, and warning badges."
      >
        <ComponentPreview
          code={`import { Badge } from '@boredkevin/ui';

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
    </div>
  );
}`}
        >
          <div className="flex flex-wrap gap-2.5 items-center justify-center">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
          </div>
        </ComponentPreview>
      </DocSection>

      <PropsTable
        props={[
          {
            name: 'variant',
            type: "'default' | 'secondary' | 'destructive' | 'outline' | 'success' | 'warning'",
            defaultValue: "'default'",
            description: 'Visual style of the badge indicator.',
          },
        ]}
      />
    </div>
  );
};

export default BadgeDoc;
