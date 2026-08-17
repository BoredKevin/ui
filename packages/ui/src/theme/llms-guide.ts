/**
 * Instruction set formatted specifically for AI LLMs, Coding Agents, and Assistant Rules.
 */
export const LLMS_INSTRUCTIONS = `# @boredkevin/ui AI LLM & Coding Agent Implementation Guide

You are an expert Frontend AI Assistant generating code for applications using **@boredkevin/ui** — the sharp-cornered, pitch-dark Shadcn UI design system inspired by Tweakcn with customizable dynamic backgrounds (Constellations & Perlin Noise).

## 1. Core Design Axioms
- **Zero Border Radius (\`--radius: 0rem\`)**: ALL buttons, cards, dialogs, dropdowns, inputs, popovers, badges, tabs, and avatar containers MUST have sharp 90-degree corners. Never use \`rounded-md\`, \`rounded-lg\`, or \`rounded-full\` unless explicitly asked for a circular indicator. Use \`rounded-none\` or \`rounded-[var(--radius)]\`.
- **Pitch Dark & Crisp Contrast**: Dark background is pitch zinc \`hsl(0 0% 3.9%)\` (\`#09090b\`), cards are \`hsl(0 0% 3.9%)\` with subtle 1px border \`hsl(0 0% 14.9%)\` (\`#27272a\`), foreground is pure high-contrast white \`hsl(0 0% 98%)\`.
- **Borders & Separators**: Crisp, 1px solid borders \`border-border\` (\`border-[hsl(var(--border))]\`).

## 2. CSS Variables Configuration (globals.css)
When setting up a project, ensure \`app/globals.css\` or \`src/index.css\` contains:

\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
    --primary: 0 0% 9%;
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 9%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 0 0% 3.9%;
    --radius: 0rem;
  }

  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --card: 0 0% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 0 0% 9%;
    --secondary: 0 0% 14.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;
    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;
    --ring: 0 0% 83.1%;
    --radius: 0rem;

    /* Sci-Fi Tactical Chamfers & Corner Lines */
    --chamfer-size: 6px;
    --chamfer-clip: polygon(0 0, calc(100% - var(--chamfer-size)) 0, 100% var(--chamfer-size), 100% 100%, var(--chamfer-size) 100%, 0 calc(100% - var(--chamfer-size)));
    --corner-lines: 1;
    --corner-line-glow: 1;
  }
}
\`\`\`

## 3. Dynamic Background Components
\`@boredkevin/ui\` provides standalone, customizable dynamic 60fps canvas backgrounds:

### 🌟 Constellations Background
Interactive twinkling star nodes with proximity connection webbing and mouse magnetism:
\`\`\`tsx
import { ConstellationsBackground } from '@boredkevin/ui';

<ConstellationsBackground
  particleCount={80}
  maxDistance={140}
  speed={0.7}
  starSize={2}
  glow={true}
  interactive={true}
/>
\`\`\`

### 🌊 Perlin Noise Flow Field Background
Silky organic particle streamlines driven by mathematical Perlin vector noise:
\`\`\`tsx
import { PerlinNoiseBackground } from '@boredkevin/ui';

<PerlinNoiseBackground
  particleCount={400}
  noiseScale={0.003}
  flowSpeed={0.8}
  lineThickness={1.2}
  colorMode="theme" // 'theme' | 'aurora' | 'cyan' | 'emerald' | 'amber' | 'crimson' | 'monochrome'
  interactive={true}
/>
\`\`\`

### 🌌 Atmospheric Aurora & Unified Canvas Background
\`\`\`tsx
import { CanvasBackground } from '@boredkevin/ui';

// Automatically renders active theme background and responds to theme controls
<CanvasBackground />
\`\`\`

## 4. Sci-Fi Tactical Chamfers & Corner Lines
1. **Customizable Chamfers on Buttons & Inputs**:
   - \`chamfer="dual"\` (Default 45° cut on top-right & bottom-left)
   - \`chamfer="top-right"\` (Single notch)
   - \`chamfer="all"\` (4-corner combat bevel)
   - \`chamfer="none"\` (Rectangular 0rem sharp)
2. **Bright Corner Edge Lines on Cards & Containers**:
   - Use \`<Card cornerLines={true} telemetry="SYS.01">\` for bright neon cyber brackets framing panels.
   - Use \`<CornerEdges size={10} glow={true} telemetry="SYS.01" />\` standalone.
`;
