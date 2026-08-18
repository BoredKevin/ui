import React from 'react';
import { DocHeader, DocSection, ComponentPreview, PropsTable } from '../DocLayout';
import { CornerEdges, Button, Card, CardHeader, CardTitle, CardContent } from '@boredkevin/ui';

export const CornerEdgesDoc: React.FC = () => {
  return (
    <div className="space-y-10 max-w-4xl mx-auto pb-16">
      <DocHeader
        title="CornerEdges"
        description="A sci-fi telemetry overlay component that projects high-tech viewfinder brackets, chamfer markers, and telemetry tags onto any relative container."
        sourcePath="packages/ui/src/components/ui/corner-edges.tsx"
        badge="Sci-Fi HUD"
      />

      <DocSection
        title="Interactive Corner Brackets"
        description="Attach CornerEdges inside any relative container to give it a cyberpunk framing."
      >
        <ComponentPreview
          code={`import { CornerEdges, Button } from '@boredkevin/ui';

export function ViewfinderBox() {
  return (
    <div className="relative p-8 border border-border/80 bg-card/60 w-full max-w-md">
      {/* Sci-Fi Corner Brackets */}
      <CornerEdges size={14} thickness={2} telemetry="TARGET.LOCK-09" glow />

      <div className="space-y-2 text-center">
        <h3 className="text-lg font-bold font-mono tracking-wider">TARGET ACQUIRED</h3>
        <p className="text-xs text-muted-foreground">
          Orbital coordinate synchronization in progress.
        </p>
        <div className="pt-2">
          <Button variant="cyber" size="sm">Engage Lock</Button>
        </div>
      </div>
    </div>
  );
}`}
        >
          <div className="relative p-8 border border-border/80 bg-card/60 w-full max-w-md">
            <CornerEdges size={14} thickness={2} telemetry="TARGET.LOCK-09" glow />

            <div className="space-y-2 text-center">
              <h3 className="text-lg font-bold font-mono tracking-wider">TARGET ACQUIRED</h3>
              <p className="text-xs text-muted-foreground">
                Orbital coordinate synchronization in progress.
              </p>
              <div className="pt-2">
                <Button variant="cyber" size="sm">Engage Lock</Button>
              </div>
            </div>
          </div>
        </ComponentPreview>
      </DocSection>

      <PropsTable
        props={[
          {
            name: 'size',
            type: 'number',
            defaultValue: '10',
            description: 'Length of corner tick brackets in pixels.',
          },
          {
            name: 'thickness',
            type: 'number',
            defaultValue: '2',
            description: 'Stroke thickness in pixels.',
          },
          {
            name: 'glow',
            type: 'boolean',
            defaultValue: 'false',
            description: 'Applies an active glowing sci-fi aura to corners.',
          },
          {
            name: 'telemetry',
            type: 'string',
            defaultValue: 'undefined',
            description: 'Monospace micro-HUD code stamp rendered along the top border.',
          },
          {
            name: 'corners',
            type: "('tl' | 'tr' | 'bl' | 'br')[]",
            defaultValue: "['tl', 'tr', 'bl', 'br']",
            description: 'Array specifying which corners should render brackets.',
          },
        ]}
      />
    </div>
  );
};

export default CornerEdgesDoc;
