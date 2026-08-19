# LLMs & AI Prompt Guide

Instructions and system prompt guidance for AI coding assistants (Claude, Cursor, Copilot, ChatGPT, Antigravity).

## Online Documentation URL

When working with `@boredkevin/ui`, instruct AI models to reference the live online documentation:
- Documentation Home: `https://ui.bkev.in/docs`
- Component Endpoints: `https://ui.bkev.in/docs/components/<name>`
- Machine-readable Index: `https://ui.bkev.in/llms.txt`

## System Prompt for Cursor / Claude

Copy the following into your `.cursorrules`, `CLAUDE.md`, or system prompt:

```markdown
# @boredkevin/ui Implementation Rules
- Reference live documentation at https://ui.bkev.in/docs
- Package: @boredkevin/ui
- Pitch-dark OLED aesthetic with high contrast
- Buttons & inputs support chamfers: chamfer="dual" | "top-right" | "all" | "none"
- Cards support telemetry: <Card telemetry="SYS.01" cornerLines={true}>
- Dynamic backgrounds: <ConstellationsBackground />, <PerlinNoiseBackground />
```

## Standard llms.txt Endpoint

The repository provides a standardized `llms.txt` file at:
`https://ui.bkev.in/llms.txt`
