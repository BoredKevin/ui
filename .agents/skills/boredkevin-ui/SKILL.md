---
name: boredkevin-ui
description: >
  Teaches Antigravity how to use the @boredkevin/ui component library, theme tokens,
  and sci-fi HUD elements correctly.
---

# @boredkevin/ui Skill for Antigravity

When building UI with `@boredkevin/ui`, read:
- Master instructions: `ai-skill/SKILL.md`
- Token reference: `ai-skill/design.json`
- Component metadata: `ai-skill/components/*.meta.ts`
- Page composition patterns: `ai-skill/patterns/*.md`

## Summary Checklist
- Import: `import { Button, Card, ... } from '@boredkevin/ui'`
- Wrap with `<ThemeProvider>`
- CSS import: `import '@boredkevin/ui/theme.css'`
- Buttons: `variant="cyber" | "default" | "outline" | "secondary" | "destructive" | "ghost" | "link" | "white"`
- Badges: `variant="default" | "secondary" | "destructive" | "outline" | "success" | "warning"`
- Backgrounds: `<CanvasBackground />`, `<ConstellationsBackground />`, `<PerlinNoiseBackground />`, `<AtmosphericAuroraBackground />`
- Colors: Always use semantic tokens (`bg-primary`, `border-border`, `text-muted-foreground`), never raw hex.
