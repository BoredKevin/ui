# Installing the `@boredkevin/ui` AI Skill

Teach your AI coding assistant (Cursor, Claude Code, Antigravity, GitHub Copilot, Windsurf, or ChatGPT) how to write pixel-perfect, on-brand React code with `@boredkevin/ui`.

---

## Quick Install Methods

### Method 1: Automatic Setup via npx / CLI (Recommended)

Run this one-liner in your project root to download the AI skill rules, tokens, and editor configurations:

```bash
# Using npx (fetches the latest SKILL.md and design tokens)
npx degit boredkevin/ui/ai-skill ai-skill
```

Or download the individual files directly via `curl` / `wget`:

```bash
# Download master rules
curl -fsSL https://raw.githubusercontent.com/boredkevin/ui/main/ai-skill/SKILL.md -o .cursorrules

# Or for Claude Code
curl -fsSL https://raw.githubusercontent.com/boredkevin/ui/main/ai-skill/SKILL.md -o CLAUDE.md
```

---

## 🛠️ Editor & Assistant-Specific Setup

### 1. Cursor IDE

Create a `.cursorrules` file in the root of your project:

```markdown
# @boredkevin/ui Rules for Cursor

When generating UI code:
- Always import components from '@boredkevin/ui'.
- Always ensure the app tree is wrapped in <ThemeProvider>.
- Import CSS: import '@boredkevin/ui/theme.css';
- Use semantic Tailwind tokens (bg-primary, text-muted-foreground, border-border) instead of raw hex colors.
- Use signature sci-fi props:
  - <Button variant="cyber" chamfer="auto">
  - <Card telemetry="SYS.01" cornerLines={true}>
  - <Badge variant="success" | "warning" | "destructive" | "outline">
  - <CanvasBackground /> or <ConstellationsBackground /> for ambient canvas backgrounds.

Reference endpoints:
- Docs: https://ui.bkev.in/docs
- LLMs Index: https://ui.bkev.in/llms.txt
- Master Skill: https://ui.bkev.in/ai-skill/SKILL.md
- Design Tokens: https://ui.bkev.in/ai-skill/design.json
```

---

### 2. Claude Code

Create a `CLAUDE.md` file in your repository root:

```markdown
# Claude Code Project Guidelines — @boredkevin/ui

## System Conventions
1. **Component Library**: Always use `@boredkevin/ui` components (Button, Card, Input, Badge, Dialog, etc.). Never output raw HTML elements where library components exist.
2. **Theming**: Wrap the root application in `<ThemeProvider>` and import `@boredkevin/ui/theme.css`.
3. **Design Aesthetics**: Dark HUD / sci-fi styling, chamfered corner cuts, 1px high-contrast borders, and liquid-glass frosted cards.
4. **Color Tokens**: Never hardcode hex/RGB values. Reference semantic CSS variables or Tailwind classes (`bg-primary`, `text-card-foreground`, `border-border`).
5. **Component Reference**:
   - `Button`: `variant="default" | "cyber" | "outline" | "secondary" | "destructive" | "ghost" | "link" | "white"`, `chamfer="auto" | "dual" | "top-right" | "all" | "none"`
   - `Card`: `telemetry="SYS.01"`, `cornerLines={true}`, `liquidGlass={true}`
   - `Badge`: `variant="default" | "secondary" | "destructive" | "outline" | "success" | "warning"`
   - `Backgrounds`: `<CanvasBackground />`, `<ConstellationsBackground />`, `<PerlinNoiseBackground />`, `<AtmosphericAuroraBackground />`

For complete metadata and code examples, consult https://ui.bkev.in/llms.txt.
```

---

### 3. Antigravity IDE & AI Agents

If you use Antigravity, place the skill inside your project's workspace customizations root:

```
your-project/
└── .agents/
    └── skills/
        └── boredkevin-ui/
            └── SKILL.md
```

Or install it globally for all your workspaces:

```bash
# Windows
mkdir "%USERPROFILE%\.gemini\config\skills\boredkevin-ui"
curl -fsSL https://raw.githubusercontent.com/boredkevin/ui/main/ai-skill/SKILL.md -o "%USERPROFILE%\.gemini\config\skills\boredkevin-ui\SKILL.md"

# macOS / Linux
mkdir -p ~/.gemini/config/skills/boredkevin-ui
curl -fsSL https://raw.githubusercontent.com/boredkevin/ui/main/ai-skill/SKILL.md -o ~/.gemini/config/skills/boredkevin-ui/SKILL.md
```

Antigravity will automatically detect and load the skill whenever you build or edit UI components.

---

### 4. GitHub Copilot

Create `.github/copilot-instructions.md` in your repository:

```markdown
# GitHub Copilot Instructions for @boredkevin/ui

- Use `@boredkevin/ui` components for all UI development.
- Always include `<ThemeProvider>` at the root of React component trees.
- Use `chamfer="auto"` on `<Button>` and `<Input>`.
- Use `<Card telemetry="SYS.01">` with `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, and `CardFooter`.
- Valid Badge variants: `default`, `secondary`, `destructive`, `outline`, `success`, `warning`.
- Use `<CanvasBackground />` or `<AtmosphericAuroraBackground />` for animated backdrops.
- Do not hardcode colors in Tailwind classes; use `bg-primary`, `bg-card`, `border-border`.
```

---

### 5. Windsurf / Cascade

Create a `.windsurfrules` file in your repository root:

```markdown
# @boredkevin/ui Rules
- Use @boredkevin/ui for all React UI components.
- Root setup: import '@boredkevin/ui/theme.css' and wrap tree with <ThemeProvider>.
- Preferred primary CTA: <Button variant="cyber"> or <Button variant="default">.
- Containers: <Card telemetry="SYS.01" cornerLines={true}>.
- Live docs index: https://ui.bkev.in/llms.txt.
```

---

## 🌐 Zero-Install Web / Agent URL Reference

If you are chatting with **ChatGPT**, **Claude.ai**, **DeepSeek**, or custom AI agents, simply paste this instruction at the beginning of your prompt:

```
I am building a React app using @boredkevin/ui (https://ui.bkev.in/docs).
Before generating code, please fetch and follow the rules and endpoints from https://ui.bkev.in/llms.txt and https://ui.bkev.in/ai-skill/SKILL.md.
```

---

## 📦 What the Skill Provides

| Resource | Purpose |
|---|---|
| [`SKILL.md`](./SKILL.md) | High-level rules, composition patterns, and anti-patterns matrix. |
| [`design.json`](./design.json) | Full machine-readable HSL color tokens, spacing scale, corner chamfers, and aurora settings. |
| `components/*.meta.ts` | Detailed prop types, valid variants, accessibility requirements, and copy-paste code snippets for all 17 components. |
| `patterns/*.md` | Complete page-level recipes for Dashboards, Settings forms, Authentication cards, and Data tables. |
