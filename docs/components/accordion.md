# Accordion

Vertically stacked panels that expand and collapse to reveal extra details. Perfect for FAQs, nested configuration menus, or dense technical specifications.

- **Source**: `packages/ui/src/components/ui/accordion.tsx`
- **Primitive**: `Accordion (@radix-ui/react-accordion)`

## Interactive Accordion

Create collapsible sections using triggers and expandable content areas:

```tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@boredkevin/ui';

<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>What makes @boredkevin/ui different?</AccordionTrigger>
    <AccordionContent>
      Sharp rectangular geometry, pitch-dark OLED styling by default, and drop-in canvas backgrounds.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>How does theming work?</AccordionTrigger>
    <AccordionContent>
      All colors use standard HSL CSS variables, allowing live theme switches and preset switching without page reloads.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'single' \| 'multiple'` | `'single'` | Determines whether one or multiple items can stay open simultaneously |
| `collapsible` | `boolean` | `false` | When true, clicking an open item collapses it |
