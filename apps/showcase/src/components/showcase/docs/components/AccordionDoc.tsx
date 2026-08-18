import React from 'react';
import { DocHeader, DocSection, ComponentPreview, PropsTable } from '../DocLayout';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@boredkevin/ui';

export const AccordionDoc: React.FC = () => {
  return (
    <div className="space-y-10 max-w-4xl mx-auto pb-16">
      <DocHeader
        title="Accordion"
        description="A vertically stacked set of interactive headings that each reveal an associated section of content."
        sourcePath="packages/ui/src/components/ui/accordion.tsx"
        radixPrimitive="@radix-ui/react-accordion"
      />

      <DocSection
        title="Interactive Accordion Demo"
        description="Click items below to expand and collapse panels."
      >
        <ComponentPreview
          code={`import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@boredkevin/ui';

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern and supports full keyboard navigation.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What is the chamfer radius?</AccordionTrigger>
        <AccordionContent>
          It defaults to 0rem sharp edges with custom CSS chamfer borders for an authentic sci-fi terminal vibe.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can I customize the HSL theme dynamically?</AccordionTrigger>
        <AccordionContent>
          Yes! Wrap your application in ThemeProvider and invoke useTheme() to rotate hues or toggle dark mode.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`}
        >
          <Accordion type="single" collapsible className="w-full max-w-md">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern and supports full keyboard navigation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What is the chamfer radius?</AccordionTrigger>
              <AccordionContent>
                It defaults to 0rem sharp edges with custom CSS chamfer borders for an authentic sci-fi terminal vibe.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I customize the HSL theme dynamically?</AccordionTrigger>
              <AccordionContent>
                Yes! Wrap your application in ThemeProvider and invoke useTheme() to rotate hues or toggle dark mode.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentPreview>
      </DocSection>
    </div>
  );
};

export default AccordionDoc;
