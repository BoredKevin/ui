import React from 'react';
import { DocHeader, DocSection, ComponentPreview } from '../DocLayout';
import { Separator } from '@boredkevin/ui';

export const SeparatorDoc: React.FC = () => {
  return (
    <div className="space-y-10 max-w-4xl mx-auto pb-16">
      <DocHeader
        title="Separator"
        description="Visually or semantically separates content with sharp, high-contrast borders."
        sourcePath="packages/ui/src/components/ui/separator.tsx"
        radixPrimitive="@radix-ui/react-separator"
      />

      <DocSection
        title="Separator Demo"
        description="Horizontal and vertical orientation separators."
      >
        <ComponentPreview
          code={`import { Separator } from '@boredkevin/ui';

export function SeparatorDemo() {
  return (
    <div className="space-y-4 max-w-sm">
      <div>
        <h4 className="text-sm font-medium leading-none">@boredkevin/ui</h4>
        <p className="text-xs text-muted-foreground mt-1">
          An open-source sharp design system.
        </p>
      </div>
      <Separator />
      <div className="flex h-5 items-center space-x-4 text-xs font-mono">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  );
}`}
        >
          <div className="space-y-4 max-w-sm w-full">
            <div>
              <h4 className="text-sm font-bold text-foreground">@boredkevin/ui</h4>
              <p className="text-xs text-muted-foreground mt-1">
                An open-source sharp design system.
              </p>
            </div>
            <Separator />
            <div className="flex h-5 items-center space-x-4 text-xs font-mono text-muted-foreground">
              <span className="hover:text-foreground cursor-pointer">Blog</span>
              <Separator orientation="vertical" />
              <span className="hover:text-foreground cursor-pointer">Docs</span>
              <Separator orientation="vertical" />
              <span className="hover:text-foreground cursor-pointer">Source</span>
            </div>
          </div>
        </ComponentPreview>
      </DocSection>
    </div>
  );
};

export default SeparatorDoc;
