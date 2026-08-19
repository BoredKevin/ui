import React from 'react';
import { DocHeader, DocSection } from './DocLayout';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { LLMS_INSTRUCTIONS } from '@boredkevin/ui';
import { Bot, ExternalLink, FileCode, Sparkles } from 'lucide-react';
import { Button } from '@boredkevin/ui';

export const LLMGuideDoc: React.FC = () => {
  return (
    <div className="space-y-10 max-w-4xl mx-auto pb-16">
      <DocHeader
        title="LLMs & AI Prompt Guide"
        description="Configure AI coding assistants (Claude, Cursor, Copilot, ChatGPT, Antigravity) to build with @boredkevin/ui by referencing live online documentation at https://ui.bkev.in/docs."
        badge="AI Reference"
      />

      {/* Online Docs Reference Box */}
      <div id="online-docs-reference" className="p-4 border border-border bg-card/40 space-y-2">
        <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
          <Bot className="h-4 w-4 text-primary" />
          <span>Online Documentation Endpoint</span>
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Tell your AI assistant to read live component specifications and interactive examples from{' '}
          <a
            href="https://ui.bkev.in/docs"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline font-mono font-medium"
          >
            https://ui.bkev.in/docs
          </a>{' '}
          or fetch the standardized index from{' '}
          <a
            href="/llms.txt"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline font-mono font-medium"
          >
            https://ui.bkev.in/llms.txt
          </a>
          .
        </p>
      </div>

      {/* Prompt Specification */}
      <DocSection
        title="System Prompt Specification"
        description="Copy this prompt into your .cursorrules, CLAUDE.md, or system prompt."
        id="prompt-specification"
      >
        <CodeBlock
          language="markdown"
          filename="LLMS_INSTRUCTIONS.md"
          code={LLMS_INSTRUCTIONS}
          showLineNumbers
        />
      </DocSection>

      {/* llms.txt Endpoint */}
      <DocSection
        title="llms.txt Endpoint"
        description="Standardized llms.txt file hosted at the domain root for automated crawlers and AI agents."
        id="llms-txt-endpoint"
      >
        <div className="p-4 border border-border bg-card/30 flex items-center justify-between">
          <div className="space-y-1">
            <div className="font-mono text-xs font-bold text-foreground">
              https://ui.bkev.in/llms.txt
            </div>
            <p className="text-xs text-muted-foreground">
              Direct index mapping all documentation paths and component URLs.
            </p>
          </div>
          <Button asChild variant="outline" size="sm" className="font-mono text-xs">
            <a href="/llms.txt" target="_blank" rel="noreferrer">
              <span>View llms.txt</span>
              <ExternalLink className="h-3 w-3 ml-1.5" />
            </a>
          </Button>
        </div>
      </DocSection>
    </div>
  );
};

export default LLMGuideDoc;
