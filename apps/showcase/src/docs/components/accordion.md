# Accordion

A vertically stacked set of interactive headings that each expand to reveal a section of content.

- **Source**: `packages/ui/src/components/ui/accordion.tsx`
- **Primitive**: `Accordion (@radix-ui/react-accordion)`

## Interactive Accordion

```tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@boredkevin/ui';

<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>What is @boredkevin/ui?</AccordionTrigger>
    <AccordionContent>
      A pitch-dark, precision-crafted UI system for high-performance React web applications.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>How does theming work?</AccordionTrigger>
    <AccordionContent>
      All colors are pure HSL channel variables supporting live runtime updates and presets.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'single' \| 'multiple'` | `'single'` | Selection mode |
| `collapsible` | `boolean` | `false` | Allows closing active accordion item |
