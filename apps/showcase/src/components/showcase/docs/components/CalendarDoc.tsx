import React from 'react';
import { DocHeader, DocSection, ComponentPreview } from '../DocLayout';
import { Calendar } from '@boredkevin/ui';

export const CalendarDoc: React.FC = () => {
  return (
    <div className="space-y-10 max-w-4xl mx-auto pb-16">
      <DocHeader
        title="Calendar"
        description="A sharp date and schedule calendar picker component."
        sourcePath="packages/ui/src/components/ui/calendar.tsx"
      />

      <DocSection
        title="Calendar Demo"
        description="Interactive date grid with day, week, month navigation."
      >
        <ComponentPreview
          code={`import { Calendar } from '@boredkevin/ui';

export function CalendarDemo() {
  return (
    <div className="border border-border bg-card p-4 max-w-sm">
      <Calendar selectedDate={18} />
    </div>
  );
}`}
        >
          <div className="border border-border bg-card p-2 max-w-sm">
            <Calendar selectedDate={18} />
          </div>
        </ComponentPreview>
      </DocSection>
    </div>
  );
};

export default CalendarDoc;
