<!-- @boredkevin/ui:start -->
# Claude Code Instructions — @boredkevin/ui

You are working in the `@boredkevin/ui` repository — a precision-crafted, pitch-dark React design system built on Radix UI and Tailwind CSS.

## Key Rules for AI Code Generation
- Master Skill: Read `.agents/skills/boredkevin-ui/SKILL.md` before generating any UI components.
- Component Sub-Skills: Read `.agents/skills/boredkevin-ui-<component>/SKILL.md` for exact props, variants, and composition guidelines.
- Design Tokens: Read `ai-skill/design.json` for color, spacing, radius, and sci-fi token rules.
- Online Specs: https://ui.bkev.in/docs & https://ui.bkev.in/llms.txt.

## Quick Conventions
- Always wrap applications in `<ThemeProvider>` and import `@boredkevin/ui/theme.css`.
- Always import from `@boredkevin/ui`.
- Use `<Button variant="cyber">` or `variant="default"` for primary actions.
- Use `<Card telemetry="SYS.01">` with `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, and `CardFooter`.
- Use `<Badge variant="default" | "secondary" | "destructive" | "outline" | "success" | "warning">`.
- Use `<AtmosphericAuroraBackground>`, `<ConstellationsBackground>`, `<PerlinNoiseBackground>`, or `<CanvasBackground>`.
- Never hardcode colors; always use semantic Tailwind classes (`bg-primary`, `border-border`, `text-card-foreground`).
<!-- @boredkevin/ui:end -->
