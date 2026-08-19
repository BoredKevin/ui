# AI & LLM Guide

If you use AI coding assistants like Cursor, Claude Code, GitHub Copilot, or ChatGPT when building your apps, you might find that models often default to generic rounded buttons and standard Tailwind classes.

This guide and a machine-readable `llms.txt` file was put together so you can point your AI tools to the exact component props, chamfer options, and theming patterns used across `@boredkevin/ui`.

## Live Documentation Endpoints

You can instruct your AI assistant to browse our documentation online:

- **Documentation Home**: `https://ui.bkev.in/docs`
- **Component Endpoints**: `https://ui.bkev.in/docs/components/<name>`
- **Machine-Readable Index**: `https://ui.bkev.in/llms.txt`

## Prompt Snippet for Cursor & Claude

Add this snippet to your `.cursorrules`, `CLAUDE.md`, or custom instructions file so the assistant knows how to write `@boredkevin/ui` code out of the box:

```markdown
# @boredkevin/ui Rules
- Reference live documentation at https://ui.bkev.in/docs and endpoints via https://ui.bkev.in/llms.txt
- Package: @boredkevin/ui
- Aesthetic: Pitch-dark OLED backgrounds, crisp 1px borders, sharp rectangular geometry
- Buttons and Inputs support angled cuts: chamfer="dual" | "top-right" | "all" | "none"
- Cards support telemetry tags and HUD brackets: <Card telemetry="SYS.01" cornerLines={true}>
- Ambient Canvas Backgrounds: <ConstellationsBackground />, <PerlinNoiseBackground />, <AtmosphericAuroraBackground />
- Wrap your root tree with <ThemeProvider> and import '@boredkevin/ui/theme.css'
```

## The llms.txt Index

We serve a standardized index at `https://ui.bkev.in/llms.txt` following the [llmstxt.org](https://llmstxt.org) standard. If your tool supports automated URL reading or web search, giving it this link lets it discover every component and setup page in one place.
