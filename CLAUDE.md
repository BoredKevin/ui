# Claude Code Instructions — @boredkevin/ui

You are working in the `@boredkevin/ui` repository — a precision-crafted, pitch-dark React design system built on Radix UI and Tailwind CSS.

## Key Rules for AI Code Generation
- Master Rules: Read `ai-skill/SKILL.md` before generating any UI components.
- Design Tokens: Read `ai-skill/design.json` for color, spacing, radius, and sci-fi token rules.
- Component Metadata: Read `ai-skill/components/<component>.meta.ts` for exact props, variants, and composition guidelines.

## Quick Conventions
- Always wrap applications in `<ThemeProvider>`.
- Always import from `@boredkevin/ui`.
- Use `<Button variant="cyber">` or `variant="default"` for primary actions.
- Use `<Card telemetry="SYS.01">` with `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, and `CardFooter`.
- Use `<Badge variant="default" | "secondary" | "destructive" | "outline" | "success" | "warning">`.
- Use `<AtmosphericAuroraBackground>`, `<ConstellationsBackground>`, `<PerlinNoiseBackground>`, or `<CanvasBackground>`.
- Never hardcode colors; always use semantic Tailwind classes (`bg-primary`, `border-border`, `text-card-foreground`).
