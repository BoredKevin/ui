import React, { useState } from 'react';
import { DocHeader, DocSection, ComponentPreview, PropsTable } from './DocLayout';
import { CodeBlock } from '@/components/ui/CodeBlock';
import {
  ConstellationsBackground,
  PerlinNoiseBackground,
  AtmosphericAuroraBackground,
  Button,
  Badge,
} from '@boredkevin/ui';
import { Sparkles, Activity, CloudFog } from 'lucide-react';

export const BackgroundsDoc: React.FC = () => {
  const [activeBg, setActiveBg] = useState<'constellations' | 'perlin' | 'aurora'>('constellations');
  const [particleCount, setParticleCount] = useState(40);

  return (
    <div className="space-y-10 max-w-4xl mx-auto pb-16">
      <DocHeader
        title="Dynamic Background Effects"
        description="High-performance, 60fps HTML5 Canvas particle systems, fluid noise flow-fields, and atmospheric ambient nebulas built right into @boredkevin/ui."
        badge="Canvas Systems"
      />

      {/* Interactive Showcase Sandbox */}
      <DocSection
        title="Interactive Background Sandbox"
        description="Select an effect below to test it live inside the bounded viewport container."
      >
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Button
              size="sm"
              variant={activeBg === 'constellations' ? 'cyber' : 'outline'}
              onClick={() => setActiveBg('constellations')}
              className="gap-1.5 text-xs"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Constellations</span>
            </Button>
            <Button
              size="sm"
              variant={activeBg === 'perlin' ? 'cyber' : 'outline'}
              onClick={() => setActiveBg('perlin')}
              className="gap-1.5 text-xs"
            >
              <Activity className="h-3.5 w-3.5" />
              <span>Perlin Noise Field</span>
            </Button>
            <Button
              size="sm"
              variant={activeBg === 'aurora' ? 'cyber' : 'outline'}
              onClick={() => setActiveBg('aurora')}
              className="gap-1.5 text-xs"
            >
              <CloudFog className="h-3.5 w-3.5" />
              <span>Atmospheric Aurora</span>
            </Button>
          </div>

          {/* Canvas Box */}
          <div className="relative h-64 w-full overflow-hidden border border-border bg-background flex items-center justify-center">
            {activeBg === 'constellations' && (
              <ConstellationsBackground
                particleCount={particleCount}
                interactive
                className="absolute inset-0"
              />
            )}
            {activeBg === 'perlin' && (
              <PerlinNoiseBackground
                particleCount={150}
                className="absolute inset-0"
              />
            )}
            {activeBg === 'aurora' && (
              <AtmosphericAuroraBackground
                className="absolute inset-0"
              />
            )}

            {/* Overlay Telemetry Box */}
            <div className="relative z-10 p-4 border border-border/80 bg-background/80 backdrop-blur-md text-center max-w-xs shadow-xl">
              <Badge variant="outline" className="text-[10px] font-mono text-primary mb-1">
                CANVAS // 60 FPS
              </Badge>
              <h4 className="text-sm font-bold text-foreground capitalize">
                {activeBg} Active
              </h4>
              <p className="text-xs text-muted-foreground mt-1">
                Move your mouse over the canvas to interact with particles.
              </p>
            </div>
          </div>
        </div>
      </DocSection>

      {/* 1. ConstellationsBackground */}
      <DocSection
        title="1. ConstellationsBackground"
        description="Renders an interconnected node network where particles gravitate and draw glowing lines when in proximity to each other and the user's cursor."
      >
        <CodeBlock
          language="tsx"
          filename="ConstellationsExample.tsx"
          code={`import { ConstellationsBackground } from '@boredkevin/ui';

export function HeroSection() {
  return (
    <div className="relative min-h-[400px] flex items-center justify-center overflow-hidden border border-border">
      {/* Background Layer */}
      <ConstellationsBackground 
        particleCount={50}
        speed={0.4}
        maxDistance={120}
        interactive={true}
        className="absolute inset-0"
      />

      {/* Foreground Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-2xl font-bold">Cyberpunk Interface</h1>
      </div>
    </div>
  );
}`}
        />

        <PropsTable
          title="ConstellationsBackground Props"
          props={[
            {
              name: 'particleCount',
              type: 'number',
              defaultValue: '40',
              description: 'Total number of animated nodes on the canvas.',
            },
            {
              name: 'speed',
              type: 'number',
              defaultValue: '0.5',
              description: 'Base velocity multiplier of particle drift.',
            },
            {
              name: 'maxDistance',
              type: 'number',
              defaultValue: '120',
              description: 'Distance threshold in pixels below which connection lines are drawn.',
            },
            {
              name: 'interactive',
              type: 'boolean',
              defaultValue: 'true',
              description: 'Enables mouse attraction and mouse-to-particle connecting lines.',
            },
            {
              name: 'color',
              type: 'string',
              defaultValue: 'currentColor / primary',
              description: 'Custom override color for nodes and lines.',
            },
          ]}
        />
      </DocSection>

      {/* 2. PerlinNoiseBackground */}
      <DocSection
        title="2. PerlinNoiseBackground"
        description="Generates continuous mathematical Perlin / Simplex vector fields for organic fluid simulations."
      >
        <CodeBlock
          language="tsx"
          filename="PerlinExample.tsx"
          code={`import { PerlinNoiseBackground } from '@boredkevin/ui';

export function NoiseBanner() {
  return (
    <div className="relative h-48 overflow-hidden">
      <PerlinNoiseBackground 
        particleCount={200}
        scale={0.005}
        speed={0.8}
        className="absolute inset-0"
      />
    </div>
  );
}`}
        />
      </DocSection>
    </div>
  );
};

export default BackgroundsDoc;
