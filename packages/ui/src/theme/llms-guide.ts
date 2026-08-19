/**
 * Instruction set formatted specifically for AI LLMs, Coding Agents, and Assistant Rules.
 */
export const LLMS_INSTRUCTIONS = `# @boredkevin/ui Implementation Guide for AI Assistants

You are an expert Frontend AI Assistant generating UI code for web applications using **@boredkevin/ui** — a precision-crafted, pitch-dark design system with customizable dynamic backgrounds (Constellations, Perlin Noise, Aurora) and live HSL theme controls.

The complete live documentation, interactive previews, and component APIs are available at:
https://ui.bkev.in/docs

## 1. Quick Documentation Endpoints
- **Quickstart & Setup**: https://ui.bkev.in/docs/installation
- **Theming & Tokens**: https://ui.bkev.in/docs/theming
- **Canvas Backgrounds**: https://ui.bkev.in/docs/backgrounds
- **Component Directory**: https://ui.bkev.in/docs/components/:componentId (e.g., button, card, corner-edges, input, badge, dialog, tabs)
- **Machine Index**: https://ui.bkev.in/llms.txt

## 2. Setup (globals.css & ThemeProvider)
Ensure \`globals.css\` or \`index.css\` contains:

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
  }
}
\`\`\`

## 3. Dynamic Background Components
\`@boredkevin/ui\` provides high-performance 60fps canvas backgrounds:

\`\`\`tsx
import { ConstellationsBackground, PerlinNoiseBackground, CanvasBackground } from '@boredkevin/ui';

// Star nodes with proximity connection webbing and mouse interaction
<ConstellationsBackground particleCount={80} maxDistance={140} speed={0.7} interactive={true} />

// Organic flow field streamlines driven by Perlin vector noise
<PerlinNoiseBackground particleCount={400} noiseScale={0.003} flowSpeed={0.8} colorMode="theme" interactive={true} />

// Automatically matches active theme settings
<CanvasBackground />
\`\`\`

## 4. Components & Tactical Sci-Fi Chamfers
- Buttons & Inputs support \`chamfer="dual"\` (top-right & bottom-left 45° cut), \`chamfer="top-right"\`, \`chamfer="all"\`, or \`chamfer="none"\`.
- Cards support \`<Card cornerLines={true} telemetry="SYS.01">\` for cyber HUD bracket framing.
- Standalone \`<CornerEdges size={10} glow={true} telemetry="SYS.01" />\` can frame any arbitrary element.
`;
