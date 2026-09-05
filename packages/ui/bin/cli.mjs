#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Potential paths to find the bundled skills directory
const BUNDLED_SKILLS_PATHS = [
  path.resolve(__dirname, '../skills'),
  path.resolve(__dirname, '../../skills'),
  path.resolve(__dirname, '../../../skills'),
  path.resolve(__dirname, '../../.agents/skills'),
  path.resolve(__dirname, '../../../.agents/skills'),
];

const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com/BoredKevin/ui/main';

const START_MARKER = '<!-- @boredkevin/ui:start -->';
const END_MARKER = '<!-- @boredkevin/ui:end -->';

const ALL_COMPONENTS = [
  'accordion',
  'avatar',
  'backgrounds',
  'badge',
  'button',
  'calendar',
  'card',
  'corner-edges',
  'dialog',
  'dropdown-menu',
  'input',
  'separator',
  'slider',
  'switch',
  'table',
  'tabs',
  'tooltip',
];

const RULES_TEMPLATES = {
  '.cursorrules': `${START_MARKER}
# @boredkevin/ui AI Assistant Rules

When generating or editing UI code:
- Always import components from '@boredkevin/ui' (never use raw <button>, <input>, etc.).
- Always ensure the app tree is wrapped in <ThemeProvider> and import '@boredkevin/ui/theme.css'.
- Never hardcode colors (#hex, rgb, hsl). Always use semantic Tailwind tokens (bg-primary, text-muted-foreground, border-border, etc.).
- Signature sci-fi features: chamfer="auto" on Button/Input, telemetry="SYS.01" and cornerLines={true} on Card, and canvas backgrounds (CanvasBackground, ConstellationsBackground, etc.).
- Consult modular skills at .agents/skills/boredkevin-ui/SKILL.md and .agents/skills/boredkevin-ui-<component>/SKILL.md for exact props, variants, and composition guidelines.
- Live docs: https://ui.bkev.in/docs | LLMs Index: https://ui.bkev.in/llms.txt
${END_MARKER}`,

  'AGENTS.md': `${START_MARKER}
# Agent Guide — @boredkevin/ui Component System

This repository uses the @boredkevin/ui component library. All agentic AI assistants must follow the guidelines established in .agents/skills/boredkevin-ui/SKILL.md and component sub-skills in .agents/skills/boredkevin-ui-*/SKILL.md.

## Core Agent Directives
1. **Never Hallucinate Components**: Only use exported components from @boredkevin/ui.
2. **Adhere to Sci-Fi Tokens**: Use chamfer clip-paths, corner edges, liquid-glass cards, and canvas backgrounds.
3. **Strict Props & Variants**: Consult .agents/skills/boredkevin-ui-<component>/SKILL.md for valid variants and properties.
4. **Theme Requirement**: Always ensure <ThemeProvider> is at the root of any React app tree.
5. **No Color Inlining**: Never use hex or raw HSL values directly in classNames. Use semantic token classes like bg-card, text-primary, border-border.
${END_MARKER}`,

  'CLAUDE.md': `${START_MARKER}
# Claude Code Instructions — @boredkevin/ui

You are working in a repository utilizing @boredkevin/ui — a precision-crafted, pitch-dark React design system built on Radix UI and Tailwind CSS.

## Key Rules for AI Code Generation
- Master Skill: Read .agents/skills/boredkevin-ui/SKILL.md before generating any UI components.
- Component Metadata & Skills: Read .agents/skills/boredkevin-ui-<component>/SKILL.md for exact props, variants, and composition guidelines.
- Online Specs: https://ui.bkev.in/docs & https://ui.bkev.in/llms.txt.

## Quick Conventions
- Always wrap applications in <ThemeProvider> and import '@boredkevin/ui/theme.css'.
- Always import from '@boredkevin/ui'.
- Use <Button variant="cyber"> or variant="default" for primary actions.
- Use <Card telemetry="SYS.01"> with CardHeader, CardTitle, CardDescription, CardContent, and CardFooter.
- Use <Badge variant="default" | "secondary" | "destructive" | "outline" | "success" | "warning">.
- Use <AtmosphericAuroraBackground>, <ConstellationsBackground>, <PerlinNoiseBackground>, or <CanvasBackground>.
- Never hardcode colors; always use semantic Tailwind classes (bg-primary, border-border, text-card-foreground).
${END_MARKER}`,
};

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Non-destructively layers or updates a rule block inside a file.
 * If file exists and contains markers: updates the block.
 * If file exists and lacks markers: prepends the block to the top of existing content.
 * If file does not exist: creates the file.
 */
function layerRuleFile(targetDir, filename, blockContent) {
  const filePath = path.join(targetDir, filename);

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, blockContent + '\n', 'utf8');
    return { status: 'created', file: filename };
  }

  const existing = fs.readFileSync(filePath, 'utf8');
  if (existing.includes(START_MARKER) && existing.includes(END_MARKER)) {
    const regex = new RegExp(`${escapeRegex(START_MARKER)}[\\s\\S]*?${escapeRegex(END_MARKER)}`, 'g');
    const updated = existing.replace(regex, blockContent);
    fs.writeFileSync(filePath, updated, 'utf8');
    return { status: 'updated', file: filename };
  }

  // Prepend block on top of existing file, preserving user's existing rules
  const layered = `${blockContent}\n\n${existing}`;
  fs.writeFileSync(filePath, layered, 'utf8');
  return { status: 'layered', file: filename };
}

/**
 * Finds local bundled skills directory, or returns null.
 */
function getBundledSkillsDir() {
  for (const candidate of BUNDLED_SKILLS_PATHS) {
    if (fs.existsSync(candidate) && fs.existsSync(path.join(candidate, 'boredkevin-ui/SKILL.md'))) {
      return candidate;
    }
  }
  return null;
}

/**
 * Fetches text file from remote repository fallback.
 */
async function fetchRemoteFile(relPath) {
  const url = `${GITHUB_RAW_BASE}/${relPath}`;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return await res.text();
  } catch (err) {
    return null;
  }
}

/**
 * Installs a skill folder (e.g. boredkevin-ui or boredkevin-ui-button).
 */
async function installSkillFolder(targetDir, skillName, bundledDir) {
  const destDir = path.join(targetDir, '.agents', 'skills', skillName);
  fs.mkdirSync(destDir, { recursive: true });
  const destFile = path.join(destDir, 'SKILL.md');

  // Try reading from bundled directory first
  if (bundledDir) {
    const localSkillPath = path.join(bundledDir, skillName, 'SKILL.md');
    if (fs.existsSync(localSkillPath)) {
      const content = fs.readFileSync(localSkillPath, 'utf8');
      fs.writeFileSync(destFile, content, 'utf8');
      return true;
    }
  }

  // Fallback: fetch from GitHub raw
  const remoteContent = await fetchRemoteFile(`skills/${skillName}/SKILL.md`);
  if (remoteContent) {
    fs.writeFileSync(destFile, remoteContent, 'utf8');
    return true;
  }

  // Fallback 2: check .agents/skills/ in repo
  const remoteAgentContent = await fetchRemoteFile(`.agents/skills/${skillName}/SKILL.md`);
  if (remoteAgentContent) {
    fs.writeFileSync(destFile, remoteAgentContent, 'utf8');
    return true;
  }

  return false;
}

function printUsage() {
  console.log(`
@boredkevin/ui CLI — Modular Agent Skills Installer (Convex format)

Usage:
  npx @boredkevin/ui init [options]         Initialize rules and install all skills
  npx @boredkevin/ui add <component...>     Install skills for specific components
  npx @boredkevin/ui list                   List all available component skills

Options:
  --all                 Install all 17 component skills (default for init)
  --cursor              Also mirror skills to .cursor/skills/
  --claude              Also mirror skills to .claude/skills/
  -h, --help            Show this help message

Examples:
  npx @boredkevin/ui init
  npx @boredkevin/ui add button card dialog
  npx @boredkevin/ui add backgrounds corner-edges
`);
}

async function main() {
  const args = process.argv.slice(2);
  const command = args[0] || 'init';

  if (command === '-h' || command === '--help' || command === 'help') {
    printUsage();
    return;
  }

  if (command === 'list') {
    console.log('\nAvailable @boredkevin/ui component skills:');
    console.log('  - boredkevin-ui (Master Skill)');
    for (const comp of ALL_COMPONENTS) {
      console.log(`  - boredkevin-ui-${comp}`);
    }
    console.log('\nInstall them anytime via:');
    console.log('  npx @boredkevin/ui add <component...>');
    return;
  }

  const targetDir = process.cwd();
  console.log(`\n🌌 Setting up @boredkevin/ui Agent Skills in: ${targetDir}\n`);

  // 1. Layer rules onto .cursorrules, AGENTS.md, CLAUDE.md
  console.log('📝 Configuring editor & agent rule files...');
  for (const [filename, template] of Object.entries(RULES_TEMPLATES)) {
    const result = layerRuleFile(targetDir, filename, template);
    if (result.status === 'created') {
      console.log(`  ✨ Created ${filename}`);
    } else if (result.status === 'layered') {
      console.log(`  🛡️  Added on top of existing ${filename} (preserved existing rules)`);
    } else if (result.status === 'updated') {
      console.log(`  🔄 Refreshed @boredkevin/ui section in ${filename}`);
    }
  }

  // 2. Determine which skills to install
  const bundledDir = getBundledSkillsDir();
  const mirrorCursor = args.includes('--cursor');
  const mirrorClaude = args.includes('--claude');

  let componentsToInstall = ALL_COMPONENTS;

  if (command === 'add') {
    const requested = args
      .slice(1)
      .filter((a) => !a.startsWith('-'))
      .map((c) => c.replace(/^boredkevin-ui-/, '').toLowerCase());

    if (requested.length > 0) {
      componentsToInstall = requested;
    }
  }

  console.log('\n📦 Installing Convex-style modular agent skills in .agents/skills/...');

  // Always install master skill
  const masterSuccess = await installSkillFolder(targetDir, 'boredkevin-ui', bundledDir);
  if (masterSuccess) {
    console.log('  ✅ .agents/skills/boredkevin-ui/SKILL.md (Master Skill)');
  } else {
    console.warn('  ⚠️  Could not fetch boredkevin-ui master skill');
  }

  // Install component skills
  let installedCount = 0;
  for (const comp of componentsToInstall) {
    const skillName = `boredkevin-ui-${comp}`;
    const ok = await installSkillFolder(targetDir, skillName, bundledDir);
    if (ok) {
      console.log(`  ✅ .agents/skills/${skillName}/SKILL.md`);
      installedCount++;

      if (mirrorCursor) {
        const cursorDir = path.join(targetDir, '.cursor', 'skills', skillName);
        fs.mkdirSync(cursorDir, { recursive: true });
        const srcFile = path.join(targetDir, '.agents', 'skills', skillName, 'SKILL.md');
        fs.copyFileSync(srcFile, path.join(cursorDir, 'SKILL.md'));
      }
      if (mirrorClaude) {
        const claudeDir = path.join(targetDir, '.claude', 'skills', skillName);
        fs.mkdirSync(claudeDir, { recursive: true });
        const srcFile = path.join(targetDir, '.agents', 'skills', skillName, 'SKILL.md');
        fs.copyFileSync(srcFile, path.join(claudeDir, 'SKILL.md'));
      }
    } else {
      console.warn(`  ⚠️  Unknown component skill: ${comp}`);
    }
  }

  console.log(`\n🎉 Success! Installed master skill and ${installedCount} component sub-skills.`);
  console.log('\nAI Coding Assistants (Cursor, Claude Code, Antigravity, Copilot) are now fully configured.');
  console.log('When building UI, your agents will automatically discover and load the matching skills.\n');
}

main().catch((err) => {
  console.error('\n❌ Initialization failed:', err);
  process.exit(1);
});
