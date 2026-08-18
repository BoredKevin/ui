import React from 'react';
import { DocHeader, DocSection, ComponentPreview, PropsTable } from '../DocLayout';
import { Button } from '@boredkevin/ui';
import { Terminal, Send, ArrowRight, Trash2, Sparkles, Loader2 } from 'lucide-react';

export const ButtonDoc: React.FC = () => {
  return (
    <div className="space-y-10 max-w-4xl mx-auto pb-16">
      <DocHeader
        title="Button"
        description="Displays a sharp, interactive button or component that triggers an action. Includes special cyber, sharp outline, high-contrast white, and ghost variants."
        sourcePath="packages/ui/src/components/ui/button.tsx"
        radixPrimitive="Slot (@radix-ui/react-slot)"
      />

      {/* 1. All Variants */}
      <DocSection
        title="Variants"
        description="Buttons support standard shadcn variants plus customized sci-fi additions like 'cyber' and 'white'."
      >
        <ComponentPreview
          code={`import { Button } from '@boredkevin/ui';

export function ButtonVariants() {
  return (
    <div className="flex flex-wrap gap-2.5 items-center">
      <Button variant="default">Default</Button>
      <Button variant="cyber">Cyber</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="white">White</Button>
    </div>
  );
}`}
        >
          <div className="flex flex-wrap gap-2.5 items-center justify-center">
            <Button variant="default">Default</Button>
            <Button variant="cyber">Cyber</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="white">White</Button>
          </div>
        </ComponentPreview>
      </DocSection>

      {/* 2. Sizes */}
      <DocSection
        title="Sizes"
        description="Use the size prop to adjust the dimensions and padding of the button."
      >
        <ComponentPreview
          code={`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Sparkles className="h-4 w-4" /></Button>`}
        >
          <div className="flex items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" variant="outline">
              <Sparkles className="h-4 w-4 text-primary" />
            </Button>
          </div>
        </ComponentPreview>
      </DocSection>

      {/* 3. With Icons and States */}
      <DocSection
        title="Icons & Loading States"
        description="Combine buttons with Lucide icons for rich user actions."
      >
        <ComponentPreview
          code={`<Button variant="cyber" className="gap-2">
  <Terminal className="h-4 w-4" />
  <span>Execute Script</span>
</Button>

<Button variant="outline" className="gap-2">
  <span>Send Payload</span>
  <Send className="h-4 w-4" />
</Button>

<Button disabled variant="secondary" className="gap-2">
  <Loader2 className="h-4 w-4 animate-spin" />
  <span>Processing...</span>
</Button>`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="cyber" className="gap-2">
              <Terminal className="h-4 w-4" />
              <span>Execute Script</span>
            </Button>
            <Button variant="outline" className="gap-2">
              <span>Send Payload</span>
              <Send className="h-4 w-4" />
            </Button>
            <Button disabled variant="secondary" className="gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Processing...</span>
            </Button>
          </div>
        </ComponentPreview>
      </DocSection>

      {/* Props Reference */}
      <PropsTable
        props={[
          {
            name: 'variant',
            type: "'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'cyber' | 'white'",
            defaultValue: "'default'",
            description: 'Visual stylistic variant of the button.',
          },
          {
            name: 'size',
            type: "'default' | 'sm' | 'lg' | 'icon'",
            defaultValue: "'default'",
            description: 'Height, padding, and text scale.',
          },
          {
            name: 'asChild',
            type: 'boolean',
            defaultValue: 'false',
            description: 'Merges button props onto immediate child element via Radix Slot.',
          },
          {
            name: 'disabled',
            type: 'boolean',
            defaultValue: 'false',
            description: 'Disables user interactions and applies opacity styling.',
          },
        ]}
      />
    </div>
  );
};

export default ButtonDoc;
