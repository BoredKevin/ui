<!-- @boredkevin/ui:start -->
# Agent Guide — @boredkevin/ui Component System

This repository contains the `@boredkevin/ui` component library. All agentic AI assistants must follow the guidelines established in `.agents/skills/boredkevin-ui/SKILL.md` and component sub-skills in `.agents/skills/boredkevin-ui-*/SKILL.md`.

## Core Agent Directives
1. **Never Hallucinate Components**: Only use exported components from `@boredkevin/ui`.
2. **Adhere to Sci-Fi Tokens**: Use chamfer clip-paths, corner edges, liquid-glass cards, and canvas backgrounds.
3. **Strict Props & Variants**: Consult `.agents/skills/boredkevin-ui-<component>/SKILL.md` for valid variants and properties.
4. **Theme Requirement**: Always ensure `<ThemeProvider>` is at the root of any React app tree.
5. **No Color Inlining**: Never use hex or raw HSL values directly in classNames. Use semantic token classes like `bg-card`, `text-primary`, `border-border`.
<!-- @boredkevin/ui:end -->
