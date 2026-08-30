# AI Skill & LLM Integration Guide

If you use AI coding assistants like Cursor, Claude Code, Antigravity, GitHub Copilot, or Windsurf when building your apps, you might find that models often default to generic rounded buttons and standard Tailwind classes.

We provide a complete, installable **AI Skill**, machine-readable metadata, and a standardized `llms.txt` file so your AI tools reliably understand `@boredkevin/ui`'s custom chamfer clip-paths, HUD telemetry tags, liquid-glass cards, and animated canvas backgrounds.

---

## ⚡ Quick Install

### 1. Install via CLI

Run this in your project root to pull down the AI skill rules and tokens:

```bash
npx degit boredkevin/ui/ai-skill ai-skill
```

Or curl the master prompt directly:

```bash
# For Cursor
curl -fsSL https://raw.githubusercontent.com/boredkevin/ui/main/ai-skill/SKILL.md -o .cursorrules

# For Claude Code
curl -fsSL https://raw.githubusercontent.com/boredkevin/ui/main/ai-skill/SKILL.md -o CLAUDE.md
```

---

## 🛠️ Editor Configurations

### Cursor (`.cursorrules`)
```markdown
# @boredkevin/ui Rules
- Always import components from '@boredkevin/ui'.
- Wrap app with <ThemeProvider> and import '@boredkevin/ui/theme.css'.
- Use semantic Tailwind tokens (bg-primary, text-muted-foreground, border-border).
- Buttons: variant="cyber" | "default" | "outline" | "secondary" | "destructive" | "ghost" | "link" | "white"
- Badges: variant="default" | "secondary" | "destructive" | "outline" | "success" | "warning"
- Cards: <Card telemetry="SYS.01" cornerLines={true} liquidGlass={true}>
- Backgrounds: <CanvasBackground />, <ConstellationsBackground />, <PerlinNoiseBackground />, <AtmosphericAuroraBackground />
- Endpoints: https://ui.bkev.in/llms.txt & https://ui.bkev.in/ai-skill/SKILL.md
```

### Claude Code (`CLAUDE.md`)
```markdown
# Claude Code Project Guidelines — @boredkevin/ui
- Always use @boredkevin/ui components instead of raw HTML elements.
- Wrap root tree in <ThemeProvider> and import '@boredkevin/ui/theme.css'.
- Use sci-fi HUD aesthetic: dark backgrounds, corner chamfers, 1px high-contrast borders.
- Consult https://ui.bkev.in/llms.txt for full endpoint mapping and component metadata.
```

### Antigravity IDE (`.agents/skills/boredkevin-ui/SKILL.md`)
Place the skill at `.agents/skills/boredkevin-ui/SKILL.md` or in `~/.gemini/config/skills/boredkevin-ui/SKILL.md` for global discovery.

### GitHub Copilot (`.github/copilot-instructions.md`)
```markdown
- Use @boredkevin/ui for all UI components.
- Wrap React trees with <ThemeProvider>.
- Use semantic color tokens (bg-card, text-primary, border-border).
```

---

## 🌐 Endpoints & Specifications

- **Live Documentation**: `https://ui.bkev.in/docs`
- **Standardized LLMs Index**: `https://ui.bkev.in/llms.txt`
- **Master AI Skill Rules**: `https://ui.bkev.in/ai-skill/SKILL.md`
- **Design Tokens Schema**: `https://ui.bkev.in/ai-skill/design.json`
