import React from 'react';
import { DocHeader, DocSection, ComponentPreview, PropsTable } from '../DocLayout';
import { Input, Button } from '@boredkevin/ui';
import { Search, Mail, KeyRound } from 'lucide-react';

export const InputDoc: React.FC = () => {
  return (
    <div className="space-y-10 max-w-4xl mx-auto pb-16">
      <DocHeader
        title="Input"
        description="Displays a sharp form input field or a component that looks like an input field with focus ring transitions and high contrast border styling."
        sourcePath="packages/ui/src/components/ui/input.tsx"
      />

      {/* 1. Basic Inputs */}
      <DocSection
        title="Input Variants & States"
        description="Standard text, email, password, and disabled states."
      >
        <ComponentPreview
          code={`import { Input } from '@boredkevin/ui';

export function InputDemo() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <Input placeholder="Enter username..." />
      <Input type="email" placeholder="Email address" defaultValue="user@matrix.cyber" />
      <Input type="password" placeholder="Password" defaultValue="secret_key" />
      <Input disabled placeholder="Disabled input" />
    </div>
  );
}`}
        >
          <div className="w-full max-w-sm space-y-3">
            <Input placeholder="Enter username..." />
            <Input type="email" placeholder="Email address" defaultValue="user@matrix.cyber" />
            <Input type="password" placeholder="Password" defaultValue="secret_key" />
            <Input disabled placeholder="Disabled input" />
          </div>
        </ComponentPreview>
      </DocSection>

      {/* 2. With Icon Overlays & Buttons */}
      <DocSection
        title="Input with Icons & Buttons"
        description="Combine inputs with absolute icons or inline action buttons."
      >
        <ComponentPreview
          code={`<div className="relative w-full max-w-sm">
  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
  <Input className="pl-8" placeholder="Search system registry..." />
</div>`}
        >
          <div className="w-full max-w-sm space-y-3">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input className="pl-8" placeholder="Search system registry..." />
            </div>

            <div className="flex gap-2">
              <Input placeholder="Enter promo code..." />
              <Button variant="cyber" size="sm">Apply</Button>
            </div>
          </div>
        </ComponentPreview>
      </DocSection>

      {/* Props Reference */}
      <PropsTable
        props={[
          {
            name: 'type',
            type: 'string',
            defaultValue: "'text'",
            description: 'HTML input type attribute (text, email, password, number, etc.).',
          },
          {
            name: 'disabled',
            type: 'boolean',
            defaultValue: 'false',
            description: 'Whether the input field is disabled.',
          },
          {
            name: 'className',
            type: 'string',
            defaultValue: 'undefined',
            description: 'Additional CSS class names to merge with defaults.',
          },
        ]}
      />
    </div>
  );
};

export default InputDoc;
