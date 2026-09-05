---
name: boredkevin-ui
description: >
  Master guide for @boredkevin/ui — a precision-crafted, pitch-dark React design system built
  on Radix UI and Tailwind CSS v3 with sci-fi HUD tokens, corner chamfers, and animated backgrounds.
---

# @boredkevin/ui — Master Agent Skill

Welcome to **@boredkevin/ui**. This skill teaches AI coding assistants (Antigravity, Cursor, Claude Code, Copilot, Windsurf) how to properly use and compose components from the library.

The library follows a strict **sci-fi / pitch-dark HUD aesthetic**. It is NOT a generic SaaS UI library.
Aesthetic hallmarks: pitch-dark canvas backgrounds, 45° chamfered clip-path corners, neon primary glow states, liquid-glass frosted cards, telemetry brackets, and hardware-accelerated animated canvas backgrounds.

---

## 0. Mandatory Setup Checklist (Every Project)

Before generating UI component code, verify:
1. **Dependencies installed**: `npm install @boredkevin/ui lucide-react`
2. **CSS Tokens imported**: `import '@boredkevin/ui/theme.css';` at root (e.g. `App.tsx` or `layout.tsx`)
3. **App Tree wrapped**: Wrap the root tree in `<ThemeProvider>`
4. **Tailwind Config updated**: Include `'./node_modules/@boredkevin/ui/**/*.{js,mjs,ts,tsx}'` in `content` of `tailwind.config.js`

```tsx
// App.tsx minimal correct setup
import React from 'react';
import { ThemeProvider } from '@boredkevin/ui';
import '@boredkevin/ui/theme.css';

export default function App() {
  return (
    <ThemeProvider>
      {/* application tree */}
    </ThemeProvider>
  );
}
```

---

## 1. Modular Component Sub-Skills Directory

Each component in @boredkevin/ui has a dedicated skill folder with exact prop types, valid variants, and code snippets.
When working with a specific component, refer to its sub-skill:

- **[`boredkevin-ui-accordion`](.agents/skills/boredkevin-ui-accordion/SKILL.md)**: Accordion (Accordion, AccordionItem, AccordionTrigger, AccordionContent) — Expandable disclosure panels with smooth collapse animations and keyboard focus handling.
- **[`boredkevin-ui-avatar`](.agents/skills/boredkevin-ui-avatar/SKILL.md)**: Avatar (Avatar, AvatarImage, AvatarFallback) — User representation with image loading fallback, sharp border radius, and muted background.
- **[`boredkevin-ui-backgrounds`](.agents/skills/boredkevin-ui-backgrounds/SKILL.md)**: Backgrounds (CanvasBackground, ConstellationsBackground, PerlinNoiseBackground, AtmosphericAuroraBackground) — Hardware-accelerated 60fps canvas backgrounds and fluid aurora ambient lighting layers for pitch-dark sci-fi interfaces.
- **[`boredkevin-ui-badge`](.agents/skills/boredkevin-ui-badge/SKILL.md)**: Badge (Badge, badgeVariants) — Compact status pills and metadata indicators with tactical color tokens.
- **[`boredkevin-ui-button`](.agents/skills/boredkevin-ui-button/SKILL.md)**: Button (Button, buttonVariants) — Interactive trigger element styled with the @boredkevin/ui sci-fi aesthetic. Supports chamfered clip-paths, neon glow on hover, and icon composition.
- **[`boredkevin-ui-calendar`](.agents/skills/boredkevin-ui-calendar/SKILL.md)**: Calendar (Calendar) — Compact date picker calendar with month navigation and high-contrast day selector.
- **[`boredkevin-ui-card`](.agents/skills/boredkevin-ui-card/SKILL.md)**: Card (Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter) — Sci-fi HUD container with optional liquid-glass frosted material, L-bracket corner edge lines, and a telemetry label. The primary surface primitive for grouping related content.
- **[`boredkevin-ui-corner-edges`](.agents/skills/boredkevin-ui-corner-edges/SKILL.md)**: CornerEdges (CornerEdges) — Standalone sci-fi HUD bracket framing system that renders 4 corner tick marks and an optional telemetry code inside any relative container.
- **[`boredkevin-ui-dialog`](.agents/skills/boredkevin-ui-dialog/SKILL.md)**: Dialog (Dialog, DialogPortal, DialogOverlay, DialogTrigger, DialogClose, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription) — Accessible modal overlay powered by Radix UI with animated backdrop blur, keyboard trapping, and sci-fi styling.
- **[`boredkevin-ui-dropdown-menu`](.agents/skills/boredkevin-ui-dropdown-menu/SKILL.md)**: DropdownMenu (DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuRadioGroup) — Accessible overlay menu triggered by a button, supporting action items, nested submenus, checkboxes, and separators.
- **[`boredkevin-ui-input`](.agents/skills/boredkevin-ui-input/SKILL.md)**: Input (Input) — Styled text input with glowing primary-color border on focus, frosted glass inner surface, and chamfer clip-path support.
- **[`boredkevin-ui-separator`](.agents/skills/boredkevin-ui-separator/SKILL.md)**: Separator (Separator) — Visual divider line supporting horizontal and vertical orientations.
- **[`boredkevin-ui-slider`](.agents/skills/boredkevin-ui-slider/SKILL.md)**: Slider (Slider) — Precision range slider input for adjusting numeric parameters, opacity, speed, and volume.
- **[`boredkevin-ui-switch`](.agents/skills/boredkevin-ui-switch/SKILL.md)**: Switch (Switch) — Two-state boolean toggle switch with sharp corners and primary color fill on active state.
- **[`boredkevin-ui-table`](.agents/skills/boredkevin-ui-table/SKILL.md)**: Table (Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption) — High-density data table with pitch-dark borders, hover highlights, and tabular layout.
- **[`boredkevin-ui-tabs`](.agents/skills/boredkevin-ui-tabs/SKILL.md)**: Tabs (Tabs, TabsList, TabsTrigger, TabsContent) — Tabbed content navigation panels with sharp triggers and keyboard arrow navigation.
- **[`boredkevin-ui-tooltip`](.agents/skills/boredkevin-ui-tooltip/SKILL.md)**: Tooltip (Tooltip, TooltipTrigger, TooltipContent, TooltipProvider) — Instant contextual help popups triggered on hover and focus.

---

## 2. Core Sci-Fi Tokens & Rules

### Color Tokens (Never Hardcode Colors)
Never output raw hex (`#00f0ff`) or raw HSL values in class names. Always use semantic Tailwind token classes:
- Backgrounds: `bg-background`, `bg-card`, `bg-popover`, `bg-muted`
- Foregrounds: `text-foreground`, `text-card-foreground`, `text-muted-foreground`
- Accents: `bg-primary`, `text-primary`, `border-primary`, `border-border`
- Status: `text-destructive`, `bg-destructive`

### Chamfers (Clip-path Corners)
- Available on `<Button>` and `<Input>` via the `chamfer` prop.
- Default is `chamfer="auto"` (inherits from current theme preset).
- Explicit values: `"dual"` (top-right & bottom-left cut), `"top-right"`, `"all"`, `"none"`.

### Corner Edges & Telemetry
- `<Card>` features telemetry text (`telemetry="SYS.01"`), corner lines (`cornerLines={true}`), and frosted glass (`liquidGlass={true}`).
- Standalone `<CornerEdges size={10} glow={true} telemetry="HUD.01" />` can frame any arbitrary container with HUD brackets.

### Canvas Backgrounds
Position ambient canvas backgrounds behind content inside a `relative` container:
- `<CanvasBackground />`: Auto-matches active theme.
- `<ConstellationsBackground particleCount={80} maxDistance={140} speed={0.7} interactive={true} />`
- `<PerlinNoiseBackground particleCount={400} noiseScale={0.003} flowSpeed={0.8} colorMode="theme" interactive={true} />`
- `<AtmosphericAuroraBackground opacity={0.25} blur={130} />`

---

## 3. Global Anti-Patterns

| ❌ Wrong | ✅ Correct |
|---|---|
| `<button className="bg-cyan-500 ...">` | `<Button variant="cyber">` or `<Button variant="default">` |
| `<input className="border ...">` | `<Input chamfer="auto" />` |
| `<div className="fixed inset-0 ...">` (custom modal) | `<Dialog>` |
| `variant="primary"` on Button | `variant="default"` or `variant="cyber"` |
| `<Badge variant="cyber">` | `<Badge variant="outline">` or `<Badge variant="success">` |
| Hard-coded colors (`text-cyan-400`, `bg-black`) | Semantic classes (`text-primary`, `bg-background`) |
| Skipping `<ThemeProvider>` | Always wrap root with `<ThemeProvider>` |
| `<a>` inside `<Button>` without `asChild` | `<Button asChild><a href="...">Link</a></Button>` |

---

## 4. Page Composition Patterns

### Full Page HUD Shell
```tsx
import React from 'react';
import { ThemeProvider, CanvasBackground, Card, CardHeader, CardTitle, CardContent, Button } from '@boredkevin/ui';
import '@boredkevin/ui/theme.css';

export function HudPage() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background text-foreground flex items-center justify-center p-6">
        <CanvasBackground />
        <Card telemetry="SYS.01" cornerLines={true} liquidGlass={true} className="w-full max-w-md relative z-10">
          <CardHeader>
            <CardTitle>TELEMETRY INTERFACE</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">All systems operational.</p>
            <Button variant="cyber" className="w-full">ENGAGE</Button>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
}
```
