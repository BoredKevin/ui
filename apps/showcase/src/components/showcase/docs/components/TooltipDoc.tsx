import React from 'react';
import { DocHeader, DocSection, ComponentPreview } from '../DocLayout';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  Button,
} from '@boredkevin/ui';
import { Info, HelpCircle } from 'lucide-react';

export const TooltipDoc: React.FC = () => {
  return (
    <div className="space-y-10 max-w-4xl mx-auto pb-16">
      <DocHeader
        title="Tooltip"
        description="A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
        sourcePath="packages/ui/src/components/ui/tooltip.tsx"
        radixPrimitive="@radix-ui/react-tooltip"
      />

      <DocSection
        title="Interactive Tooltip Demo"
        description="Hover over the button below to see the sharp sci-fi tooltip."
      >
        <ComponentPreview
          code={`import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  Button,
} from '@boredkevin/ui';

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm" className="gap-1.5">
            <Info className="h-3.5 w-3.5" />
            <span>Hover Me</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-xs font-mono">// TELEMETRY.INFO: System Nominal</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}`}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm" className="gap-1.5">
                  <Info className="h-3.5 w-3.5" />
                  <span>Hover Me</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs font-mono">// TELEMETRY.INFO: System Nominal</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </ComponentPreview>
      </DocSection>
    </div>
  );
};

export default TooltipDoc;
