# AI Agent Skills & LLM Integration Guide

If you use AI coding assistants like Cursor, Claude Code, Antigravity, GitHub Copilot, or Windsurf when building your apps, models often default to generic rounded buttons and standard Tailwind classes.

`@boredkevin/ui` provides a **Convex-style modular AI Agent Skills** architecture:
1. **Master Skill** (`.agents/skills/boredkevin-ui/SKILL.md`): High-level system architecture, `<ThemeProvider>` checklist, design token rules, chamfers, canvas backgrounds, and sub-skill directory.
2. **Granular Component Sub-Skills** (`.agents/skills/boredkevin-ui-<component>/SKILL.md`): Self-contained skills for every component (`boredkevin-ui-button`, `boredkevin-ui-card`, `boredkevin-ui-dialog`, etc.) with exact prop types, valid variants, and copy-paste examples.
3. **Non-Destructive Layered Rules**: When installed in a project that already has `.cursorrules`, `AGENTS.md`, or `CLAUDE.md`, the CLI **layers on top** of your existing configuration rather than overwriting your custom instructions.

---

## Quick Install

### Method 1: Automatic Setup via CLI (Recommended)

Run this one-liner in your project root to layer rules and install all skills:

```bash
# Using npx
npx @boredkevin/ui init

# Or install specific component skills
npx @boredkevin/ui add button card dialog
```

### Method 2: Universal Skills CLI (Convex Compatible)

You can also install via the open agent skills ecosystem:

```bash
# Install all skills
npx skills add BoredKevin/ui --all

# Or install a specific skill
npx skills add BoredKevin/ui --skill boredkevin-ui-button
```

---

## How Rule Layering Works ("Added On Top")

When `@boredkevin/ui init` runs, it inspects your repository for existing configuration files:
- `.cursorrules`
- `AGENTS.md`
- `CLAUDE.md`

It uses delimiter markers:
```markdown
<!-- @boredkevin/ui:start -->
... (@boredkevin/ui rules and skill links) ...
<!-- @boredkevin/ui:end -->
```

- **If the file already exists**: The `@boredkevin/ui` block is added on top, preserving all of your project's custom instructions, formatting conventions, and existing rules.
- **If the file is updated later**: Running `init` again cleanly refreshes the block between the markers without duplicating content or altering your custom rules.
- **If the file does not exist**: It creates the file with the formatted block.

---

## Modular Skills Directory Structure

After installation, your project structure looks like:

```text
your-project/
├── .cursorrules                      # Layered on top of your rules
├── AGENTS.md                         # Universal agent guide (layered)
├── CLAUDE.md                         # Claude Code instructions (layered)
└── .agents/
    └── skills/
        ├── boredkevin-ui/
        │   └── SKILL.md              # Master skill & directory
        ├── boredkevin-ui-accordion/
        │   └── SKILL.md              # Accordion component skill
        ├── boredkevin-ui-button/
        │   └── SKILL.md              # Button variants, chamfers, sizes
        ├── boredkevin-ui-card/
        │   └── SKILL.md              # Card telemetry, liquid glass, corner lines
        ├── boredkevin-ui-dialog/
        │   └── SKILL.md              # Dialog modal overlay
        └── ...                       # All 17 component sub-skills
```

---

## Editor & Agent Configurations

### Cursor (`.cursorrules` & `.cursor/skills/`)
Cursor reads `.cursorrules` at session start. To mirror skills directly to Cursor's skills folder:
```bash
npx @boredkevin/ui init --cursor
```

### Claude Code (`CLAUDE.md` & `.claude/skills/`)
Claude Code reads `CLAUDE.md` in your project root. To mirror skills directly to Claude's skills folder:
```bash
npx @boredkevin/ui init --claude
```

### Antigravity IDE (`.agents/skills/`)
Antigravity automatically discovers skills in `.agents/skills/`. Whenever you ask Antigravity to build or modify a component (e.g. "Add a cyber button and a telemetry card"), it activates:
- `boredkevin-ui` for global context
- `boredkevin-ui-button` for button-specific props and clip-paths
- `boredkevin-ui-card` for card telemetry and glass styling

---

## Endpoints & Registry

- **Live Documentation**: `https://ui.bkev.in/docs`
- **Standardized LLMs Index**: `https://ui.bkev.in/llms.txt`
- **Skills Registry Manifest**: `https://ui.bkev.in/skills.json`
- **Master Skill Source**: `https://ui.bkev.in/skills/boredkevin-ui/SKILL.md`
