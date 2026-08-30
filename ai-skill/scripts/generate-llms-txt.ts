import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://ui.bkev.in';
const PUBLIC_DIR = path.resolve('public');
const META_DIR = path.resolve('ai-skill/components');

async function generateLlmsTxt() {
  console.log('📝 Generating public/llms.txt index...');

  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  const metaFiles = fs
    .readdirSync(META_DIR)
    .filter((f) => f.endsWith('.meta.ts'));

  const lines: string[] = [
    '# @boredkevin/ui',
    '',
    '> A precision-crafted, pitch-dark React design system with live HSL theme controls, custom sci-fi chamfers, and hardware-accelerated canvas backgrounds.',
    '',
    '## Documentation & Endpoints',
    `- Quickstart & Setup: ${BASE_URL}/docs/installation`,
    `- Theming & Tokens: ${BASE_URL}/docs/theming`,
    `- Canvas Backgrounds: ${BASE_URL}/docs/backgrounds`,
    `- LLMs Prompt Guide: ${BASE_URL}/docs/llms`,
    '',
    '## AI Skill & Machine Specifications',
    `- Master System Prompt: ${BASE_URL}/ai-skill/SKILL.md`,
    `- Design Tokens & Brand Schema: ${BASE_URL}/ai-skill/design.json`,
    '',
    '## Component AI Metadata & Docs',
  ];

  for (const file of metaFiles) {
    const slug = file.replace('.meta.ts', '');
    const name = slug
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join('');

    lines.push(
      `- **${name}**: ${BASE_URL}/docs/components/${slug} (Meta: ${BASE_URL}/ai-skill/components/${file})`
    );
  }

  lines.push(
    '',
    '## Quick Installation & Setup',
    '```bash',
    'npm install @boredkevin/ui lucide-react',
    '```',
    '',
    'Import CSS tokens and wrap your root with `ThemeProvider`:',
    '```tsx',
    "import React from 'react';",
    "import { ThemeProvider, Card, CardHeader, CardTitle, CardContent, Button, CanvasBackground } from '@boredkevin/ui';",
    "import '@boredkevin/ui/theme.css';",
    '',
    'export function App() {',
    '  return (',
    '    <ThemeProvider>',
    '      <div className="relative min-h-screen bg-background text-foreground flex items-center justify-center p-6">',
    '        <CanvasBackground />',
    '        <Card telemetry="SYS.01" className="w-full max-w-md relative z-10">',
    '          <CardHeader>',
    '            <CardTitle>Telemetry Node</CardTitle>',
    '          </CardHeader>',
    '          <CardContent>',
    '            <Button variant="cyber" className="w-full">Initialize</Button>',
    '          </CardContent>',
    '        </Card>',
    '      </div>',
    '    </ThemeProvider>',
    '  );',
    '}',
    '```',
    ''
  );

  const outputPath = path.join(PUBLIC_DIR, 'llms.txt');
  fs.writeFileSync(outputPath, lines.join('\n'), 'utf8');
  console.log(`✅ Saved ${lines.length} lines to ${outputPath}`);
}

generateLlmsTxt().catch((err) => {
  console.error('Failed to generate llms.txt:', err);
  process.exit(1);
});
