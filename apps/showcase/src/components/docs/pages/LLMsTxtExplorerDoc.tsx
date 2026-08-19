import React, { useState, useEffect } from 'react';
import { DocHeader, DocSection } from '@/components/showcase/docs/DocLayout';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Button, Badge } from '@boredkevin/ui';
import { Bot, FileCode, ExternalLink, Check, Copy } from 'lucide-react';

export const LLMsTxtExplorerDoc: React.FC = () => {
  const [llmsTxtContent, setLlmsTxtContent] = useState<string>('Loading /llms.txt...');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch('/llms.txt')
      .then((res) => res.text())
      .then((text) => setLlmsTxtContent(text))
      .catch(() => setLlmsTxtContent('Failed to fetch /llms.txt'));
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(llmsTxtContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-10 max-w-4xl mx-auto pb-16">
      <DocHeader
        title="llms.txt Directory Index"
        description="Standardized machine-readable endpoint following the llmstxt.org specification, allowing AI models, coding agents, and automated web crawlers to discover all documentation endpoints hosted at https://ui.bkev.in/docs."
        badge="llmstxt.org"
      />

      {/* Info Card */}
      <div className="p-4 border border-border bg-card/40 space-y-2">
        <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
          <Bot className="h-4 w-4 text-primary" />
          <span>Documentation Endpoint for LLMs</span>
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          <code className="text-foreground font-mono">/llms.txt</code> is served at the domain root (
          <a
            href="/llms.txt"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline font-mono"
          >
            https://ui.bkev.in/llms.txt
          </a>
          ) providing a concise index of all components and setup guides.
        </p>
      </div>

      {/* Live Interactive Viewer */}
      <DocSection
        title="Live /llms.txt Viewer"
        description="Inspect the actual raw file content served to AI agents."
        id="live-viewer"
      >
        <div className="border border-border bg-card/50">
          <div className="flex items-center justify-between border-b border-border/60 bg-muted/20 px-3 py-1.5 text-xs">
            <span className="font-mono text-xs text-foreground font-semibold flex items-center gap-2">
              <FileCode className="h-3.5 w-3.5 text-primary" />
              <span>/llms.txt</span>
            </span>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className="h-6 px-2 text-xs font-mono gap-1 text-muted-foreground hover:text-foreground"
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span>Copy Content</span>
                  </>
                )}
              </Button>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="h-6 px-2 text-xs font-mono text-muted-foreground hover:text-foreground"
              >
                <a href="/llms.txt" target="_blank" rel="noreferrer">
                  <span>Open Raw</span>
                  <ExternalLink className="h-2.5 w-2.5 ml-1" />
                </a>
              </Button>
            </div>
          </div>

          <div className="p-1 max-h-[500px] overflow-y-auto">
            <CodeBlock
              language="markdown"
              filename="llms.txt"
              code={llmsTxtContent}
              showLineNumbers
            />
          </div>
        </div>
      </DocSection>
    </div>
  );
};

export default LLMsTxtExplorerDoc;
