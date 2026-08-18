import React, { useState } from 'react';
import { DocHeader, DocSection, ComponentPreview, PropsTable } from '../DocLayout';
import { Switch } from '@boredkevin/ui';

export const SwitchDoc: React.FC = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div className="space-y-10 max-w-4xl mx-auto pb-16">
      <DocHeader
        title="Switch"
        description="A control that allows the user to toggle between checked and not checked with sharp rectangular toggle tracks."
        sourcePath="packages/ui/src/components/ui/switch.tsx"
        radixPrimitive="@radix-ui/react-switch"
      />

      <DocSection
        title="Interactive Switch Demo"
        description="Toggle the switch state below."
      >
        <ComponentPreview
          code={`import React, { useState } from 'react';
import { Switch } from '@boredkevin/ui';

export function SwitchDemo() {
  const [checked, setChecked] = useState(true);

  return (
    <div className="flex items-center space-x-3">
      <Switch
        id="airplane-mode"
        checked={checked}
        onCheckedChange={setChecked}
      />
      <label
        htmlFor="airplane-mode"
        className="text-xs font-mono font-medium text-foreground cursor-pointer"
      >
        OVERCLOCK HARDWARE ACCELERATION
      </label>
    </div>
  );
}`}
        >
          <div className="flex items-center space-x-3">
            <Switch
              id="airplane-mode"
              checked={checked}
              onCheckedChange={setChecked}
            />
            <label
              htmlFor="airplane-mode"
              className="text-xs font-mono font-medium text-foreground cursor-pointer"
            >
              OVERCLOCK HARDWARE ACCELERATION
            </label>
          </div>
        </ComponentPreview>
      </DocSection>
    </div>
  );
};

export default SwitchDoc;
