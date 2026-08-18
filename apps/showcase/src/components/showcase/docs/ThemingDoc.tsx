import React from 'react';
import { DocHeader, DocSection, ComponentPreview, PropsTable } from './DocLayout';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { useTheme, THEME_PRESETS, Button, Badge } from '@boredkevin/ui';
import { Palette, Sliders, Moon, Sun, Layers } from 'lucide-react';

export const ThemingDoc: React.FC = () => {
  const { theme, selectPreset, activePresetId, isDark, toggleThemeMode, setHueShift } = useTheme();

  return (
    <div className="space-y-10 max-w-4xl mx-auto pb-16">
      <DocHeader
        title="Theming & Design Tokens"
        description="Master the pitch-dark HSL color system, 0rem sharp radius philosophy, sci-fi chamfers, and dynamic runtime customization hooks."
        badge="Architecture"
      />

      {/* Philosophy Callout */}
      <div className="p-4 border border-border bg-card/40 space-y-2">
        <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
          <Palette className="h-4 w-4 text-primary" />
          <span>The Sharp Aesthetic Philosophy</span>
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Unlike rounded, bubble-like consumer design systems, <code className="text-primary font-mono">@boredkevin/ui</code> defaults to crisp, zero-radius (<code className="font-mono text-foreground">--radius: 0rem</code>) edges, pitch-black OLED background contrast (<code className="font-mono text-foreground">0 0% 4%</code>), and surgical telemetry tags for a sci-fi developer terminal feel.
        </p>
      </div>

      {/* Live Preset Switcher Demo in Docs */}
      <DocSection
        title="1. Interactive Theme Presets"
        description="Switch between pre-configured presets in real-time or click to adjust live in your current session."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
          {THEME_PRESETS.map((preset) => {
            const isSelected = preset.id === activePresetId;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => selectPreset(preset.id)}
                className={`p-3 text-left border transition-all ${
                  isSelected
                    ? 'border-primary bg-primary/10 shadow-[0_0_15px_rgba(var(--primary),0.2)]'
                    : 'border-border bg-card/60 hover:bg-muted/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-foreground">
                    {preset.name}
                  </span>
                  {isSelected && (
                    <Badge variant="outline" className="text-[9px] px-1 py-0 text-primary border-primary">ACTIVE</Badge>
                  )}
                </div>
                <div className="flex items-center gap-1 mt-2">
                  <span
                    className="h-2 w-4 inline-block border border-border/60"
                    style={{
                      backgroundColor:
                        preset.id === 'zinc-cyber'
                          ? '#06b6d4'
                          : preset.id === 'emerald-matrix'
                          ? '#10b981'
                          : preset.id === 'amber-terminal'
                          ? '#f59e0b'
                          : '#ffffff',
                    }}
                  />
                  <span className="text-[10px] font-mono text-muted-foreground">
                    {preset.id}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </DocSection>

      {/* 2. CSS Variables Architecture */}
      <DocSection
        title="2. CSS Variables Architecture"
        description="All colors are defined as raw HSL channel triplets (h s% l%) without the hsl() wrapper to allow alpha blending with Tailwind (e.g., bg-primary/20)."
      >
        <CodeBlock
          language="css"
          filename="@boredkevin/ui/dist/theme.css"
          code={`:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 0 0% 3.9%;
  --primary: 0 0% 9%;
  --primary-foreground: 0 0% 98%;
  --muted: 0 0% 96.1%;
  --muted-foreground: 0 0% 45.1%;
  --border: 0 0% 89.8%;
  --radius: 0rem; /* Sharp 0-radius default */
}

.dark {
  --background: 0 0% 4%;       /* Pitch dark OLED background */
  --foreground: 0 0% 98%;
  --card: 0 0% 6%;
  --card-foreground: 0 0% 98%;
  --primary: 0 0% 98%;
  --primary-foreground: 0 0% 9%;
  --muted: 0 0% 12%;
  --muted-foreground: 0 0% 63.9%;
  --border: 0 0% 15%;          /* Crisp high-contrast border */
  --radius: 0rem;
}`}
        />
      </DocSection>

      {/* 3. useTheme Hook API */}
      <DocSection
        title="3. useTheme() Hook API"
        description="Access and manipulate the theme state from any component inside the <ThemeProvider>."
      >
        <CodeBlock
          language="tsx"
          filename="Example.tsx"
          code={`import React from 'react';
import { useTheme, Button } from '@boredkevin/ui';

export function ThemeController() {
  const { 
    theme, 
    isDark, 
    toggleThemeMode, 
    selectPreset, 
    setHueShift, 
    resetTheme 
  } = useTheme();

  return (
    <div className="space-y-4">
      {/* Dark / Light Toggle */}
      <Button variant="outline" onClick={toggleThemeMode}>
        {isDark ? 'Switch to Light' : 'Switch to Dark'}
      </Button>

      {/* Preset Switcher */}
      <Button variant="cyber" onClick={() => selectPreset('emerald-matrix')}>
        Apply Matrix Emerald Preset
      </Button>

      {/* Dynamic Hue Rotation (+45 deg) */}
      <Button variant="secondary" onClick={() => setHueShift(45)}>
        Rotate Hue +45°
      </Button>

      {/* Reset */}
      <Button variant="ghost" onClick={resetTheme}>
        Reset
      </Button>
    </div>
  );
}`}
        />

        <PropsTable
          title="useTheme() Return Values"
          props={[
            {
              name: 'theme',
              type: 'ThemeConfig',
              description: 'The active theme configuration object containing colors, radius, chamfer, and background settings.',
            },
            {
              name: 'isDark',
              type: 'boolean',
              description: 'Whether dark mode is currently active (toggles the .dark CSS class on document element).',
            },
            {
              name: 'toggleThemeMode',
              type: '() => void',
              description: 'Convenience method to flip between light and dark modes.',
            },
            {
              name: 'selectPreset',
              type: '(presetId: string) => void',
              description: 'Applies one of the built-in THEME_PRESETS by ID.',
            },
            {
              name: 'setHueShift',
              type: '(deg: number) => void',
              description: 'Dynamically shifts the hue of all primary, secondary, and accent colors across the app.',
            },
            {
              name: 'undo / redo',
              type: '() => void',
              description: 'Undo/redo history stack for live theme tweaking in builder applications.',
            },
          ]}
        />
      </DocSection>
    </div>
  );
};

export default ThemingDoc;
