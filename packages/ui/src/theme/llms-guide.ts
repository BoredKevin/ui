/**
 * Instruction set formatted specifically for AI LLMs, Coding Agents, and Assistant Rules.
 */
export const LLMS_INSTRUCTIONS = `# @boredkevin/ui — AI Assistant Skill & Rules

You are generating UI code with **@boredkevin/ui** — a precision-crafted, pitch-dark React design system built on Radix UI, Tailwind CSS, and hardware-accelerated canvas backgrounds.

Documentation: https://ui.bkev.in/docs
LLMs Index: https://ui.bkev.in/llms.txt
Master Skill: https://ui.bkev.in/ai-skill/SKILL.md
Design Tokens: https://ui.bkev.in/ai-skill/design.json

## 0. Setup Checklist
1. Install: \`npm install @boredkevin/ui lucide-react\`
2. Import CSS at root: \`import '@boredkevin/ui/theme.css';\`
3. Wrap app tree in \`<ThemeProvider>\`
4. In \`tailwind.config.js\`, include \`'./node_modules/@boredkevin/ui/**/*.{js,mjs,ts,tsx}'\` in \`content\`

## 1. Components & Naming
- **Button**: \`variant="default" | "cyber" | "outline" | "secondary" | "destructive" | "ghost" | "link" | "white"\`
  - Chamfer: \`chamfer="auto" | "dual" | "top-right" | "all" | "none"\`
- **Card**: \`<Card telemetry="SYS.01" cornerLines={true} liquidGlass={true}>\`
  - Sub-components: \`CardHeader\`, \`CardTitle\`, \`CardDescription\`, \`CardContent\`, \`CardFooter\`
- **Badge**: \`variant="default" | "secondary" | "destructive" | "outline" | "success" | "warning"\`
- **Input**: \`<Input placeholder="Access key..." chamfer="auto" />\`
- **Dialog**: \`<Dialog><DialogTrigger asChild><Button>Open</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Title</DialogTitle></DialogHeader><DialogFooter><Button>Confirm</Button></DialogFooter></DialogContent></Dialog>\`
- **Backgrounds**: \`<CanvasBackground />\`, \`<ConstellationsBackground />\`, \`<PerlinNoiseBackground />\`, \`<AtmosphericAuroraBackground />\`
- **CornerEdges**: \`<CornerEdges size={10} glow={true} telemetry="HUD.01" />\` inside a \`relative\` container.

## 2. Core Rules & Anti-Patterns
- NEVER use raw HTML buttons or inputs when library components exist.
- NEVER hardcode hex or HSL colors. Always use semantic Tailwind classes (\`bg-primary\`, \`text-muted-foreground\`, \`border-border\`).
- Always wrap with \`<ThemeProvider>\`.
`;
