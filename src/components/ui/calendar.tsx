import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CalendarProps {
  className?: string;
  selectedDate?: number;
  onSelectDate?: (day: number) => void;
}

export function Calendar({ className, selectedDate = 6, onSelectDate }: CalendarProps) {
  const [selected, setSelected] = React.useState<number>(selectedDate);
  const month = 'June 2025';

  const daysInMonth = 30;
  const startDayOffset = 0; // Sunday = 1st
  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const handleSelect = (day: number) => {
    setSelected(day);
    if (onSelectDate) onSelectDate(day);
  };

  return (
    <div className={cn('p-3 bg-card text-card-foreground select-none', className)}>
      <div className="flex items-center justify-between pb-3">
        <button
          type="button"
          aria-label="Previous month"
          className="h-7 w-7 inline-flex items-center justify-center rounded-[var(--radius)] text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          onClick={() => {}}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="text-sm font-semibold tracking-wide text-foreground">
          {month}
        </span>
        <button
          type="button"
          aria-label="Next month"
          className="h-7 w-7 inline-flex items-center justify-center rounded-[var(--radius)] text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          onClick={() => {}}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {weekDays.map((d) => (
          <div key={d} className="text-muted-foreground font-medium py-1.5">
            {d}
          </div>
        ))}
        {Array.from({ length: startDayOffset }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {days.map((day) => {
          const isSelected = selected === day;
          return (
            <button
              key={day}
              type="button"
              onClick={() => handleSelect(day)}
              className={cn(
                'h-8 w-8 mx-auto flex items-center justify-center text-xs font-medium rounded-[var(--radius)] transition-colors',
                isSelected
                  ? 'bg-foreground text-background font-bold shadow-sm'
                  : 'text-foreground hover:bg-muted'
              )}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
