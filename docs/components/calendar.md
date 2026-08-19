# Calendar

A date picker calendar component with cyber styling.

- **Source**: `packages/ui/src/components/ui/calendar.tsx`

## Interactive Calendar

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
| `selectedDate` | `number` | `6` | Currently selected day number |
| `onSelectDate` | `(day: number) => void` | `undefined` | Callback on date click |
| `className` | `string` | `undefined` | Additional styling classes |
