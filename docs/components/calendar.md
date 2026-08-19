# Calendar

A date selection grid styled with sharp rectangular borders and high-contrast active dates, ideal for scheduling panels and log filters.

- **Source**: `packages/ui/src/components/ui/calendar.tsx`

## Interactive Calendar

Embed a date picker directly into any card or container:

```tsx
import { Calendar } from '@boredkevin/ui';

export function CalendarDemo() {
  return (
    <div className="border border-border bg-card p-4 max-w-sm">
      <Calendar selectedDate={18} />
    </div>
  );
}
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `selectedDate` | `number` | `6` | The currently selected day number |
| `onSelectDate` | `(day: number) => void` | `undefined` | Callback fired when a date is clicked |
| `className` | `string` | `undefined` | Additional Tailwind utility classes |
