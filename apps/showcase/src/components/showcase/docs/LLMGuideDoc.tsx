import React from 'react';
import { DocHeader, DocSection } from './DocLayout';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { LLMS_INSTRUCTIONS } from '@boredkevin/ui';
import { Bot, Sparkles, Terminal } from 'lucide-react';

export const LLMGuideDoc: React.FC = () => {
  return (
    <div className="space-y-10 max-w-4xl mx-auto pb-16">
      <DocHeader
        title="AI LLM & Agent System Prompt"
        description="A prompt-ready markdown instruction set formatted specifically for Claude, ChatGPT, Cursor, and Copilot to generate authentic sharp-cornered @boredkevin/ui interfaces."
        badge="AI Ready"
      />

      <div className="p-4 border border-border bg-card/40 space-y-2">
        <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
          <Bot className="h-4 w-4 text-primary" />
          <span>Copy-Paste Prompt for Cursor / Claude Projects</span>
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Copy the complete rules block below into your project's <code className="text-primary font-mono">.cursorrules</code>, <code className="text-primary font-mono">CLAUDE.md</code>, or system prompt to instruct coding agents on generating sharp cyberpunk UI.
        </p>
      </div>

      <DocSection
        title="Prompt Specification"
        description="Official LLM Guide exported from @boredkevin/ui."
      >
        <CodeBlock
          language="markdown"
          filename="LLMS_INSTRUCTIONS.md"
          code={LLMS_INSTRUCTIONS}
          showLineNumbers
        />
      </DocSection>
    </div>
  );
};

export default LLMGuideDoc;
