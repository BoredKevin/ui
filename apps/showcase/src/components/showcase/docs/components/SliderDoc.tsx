import React, { useState } from 'react';
import { DocHeader, DocSection, ComponentPreview, PropsTable } from '../DocLayout';
import { Slider } from '@boredkevin/ui';

export const SliderDoc: React.FC = () => {
  const [val, setVal] = useState([50]);

  return (
    <div className="space-y-10 max-w-4xl mx-auto pb-16">
      <DocHeader
        title="Slider"
        description="An input where the user selects a value from within a given range with sharp rectangular thumb indicators."
        sourcePath="packages/ui/src/components/ui/slider.tsx"
        radixPrimitive="@radix-ui/react-slider"
      />

      <DocSection
        title="Interactive Slider Demo"
        description="Drag the slider thumb to adjust value."
      >
        <ComponentPreview
          code={`import React, { useState } from 'react';
import { Slider } from '@boredkevin/ui';

export function SliderDemo() {
  const [val, setVal] = useState([50]);

  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="flex justify-between text-xs font-mono text-muted-foreground">
        <span>TRANSMISSION POWER</span>
        <span className="text-foreground font-bold">{val[0]}%</span>
      </div>
      <Slider
        value={val}
        onValueChange={setVal}
        max={100}
        step={1}
      />
    </div>
  );
}`}
        >
          <div className="w-full max-w-sm space-y-4">
            <div className="flex justify-between text-xs font-mono text-muted-foreground">
              <span>TRANSMISSION POWER</span>
              <span className="text-foreground font-bold">{val[0]}%</span>
            </div>
            <Slider
              value={val}
              onValueChange={setVal}
              max={100}
              step={1}
            />
          </div>
        </ComponentPreview>
      </DocSection>
    </div>
  );
};

export default SliderDoc;
