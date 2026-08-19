import React, { useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getDocByPath, DocMeta } from '@/lib/docs-loader';
import { DocHeader, ComponentPreview } from '@/components/showcase/docs/DocLayout';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Badge, Button, cn } from '@boredkevin/ui';

// Live component demos for interactive preview embedding
import { ButtonDoc } from '@/components/showcase/docs/components/ButtonDoc';
import { CardDoc } from '@/components/showcase/docs/components/CardDoc';
import { CornerEdgesDoc } from '@/components/showcase/docs/components/CornerEdgesDoc';
import { InputDoc } from '@/components/showcase/docs/components/InputDoc';
import { BadgeDoc } from '@/components/showcase/docs/components/BadgeDoc';
import { DialogDoc } from '@/components/showcase/docs/components/DialogDoc';
import { TabsDoc } from '@/components/showcase/docs/components/TabsDoc';
import { DropdownMenuDoc } from '@/components/showcase/docs/components/DropdownMenuDoc';
import { AccordionDoc } from '@/components/showcase/docs/components/AccordionDoc';
import { SliderDoc } from '@/components/showcase/docs/components/SliderDoc';
import { SwitchDoc } from '@/components/showcase/docs/components/SwitchDoc';
import { AvatarDoc } from '@/components/showcase/docs/components/AvatarDoc';
import { CalendarDoc } from '@/components/showcase/docs/components/CalendarDoc';
import { TableDoc } from '@/components/showcase/docs/components/TableDoc';
import { TooltipDoc } from '@/components/showcase/docs/components/TooltipDoc';
import { SeparatorDoc } from '@/components/showcase/docs/components/SeparatorDoc';

// Mapping for interactive component demos
const LIVE_COMPONENT_DEMOS: Record<string, React.ComponentType> = {
  button: ButtonDoc,
  card: CardDoc,
  'corner-edges': CornerEdgesDoc,
  input: InputDoc,
  badge: BadgeDoc,
  dialog: DialogDoc,
  tabs: TabsDoc,
  'dropdown-menu': DropdownMenuDoc,
  accordion: AccordionDoc,
  slider: SliderDoc,
  switch: SwitchDoc,
  avatar: AvatarDoc,
  calendar: CalendarDoc,
  table: TableDoc,
  tooltip: TooltipDoc,
  separator: SeparatorDoc,
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export const MarkdownDocRenderer: React.FC = () => {
  const location = useLocation();
  const doc = getDocByPath(location.pathname);

  if (!doc) {
    return <Navigate to="/docs" replace />;
  }

  // If there's an interactive demo component available for this component ID
  const LiveComponentDemo = LIVE_COMPONENT_DEMOS[doc.id];

  // If an interactive component demo exists, we render the rich interactive demo
  if (LiveComponentDemo) {
    return <LiveComponentDemo />;
  }

  // Strip H1 from markdown body since DocHeader renders the H1
  const bodyMarkdown = doc.rawMarkdown
    .replace(/^#\s+[^\n]+\n+/, '')
    .replace(/>\s+[^\n]+\n+/, '');

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-16">
      <DocHeader
        title={doc.title}
        description={doc.description}
        badge={doc.badge}
        sourcePath={doc.sourcePath}
        radixPrimitive={doc.radixPrimitive}
        docId={doc.id}
        customMarkdown={doc.rawMarkdown}
      />

      {/* Render Markdown Content with Custom Cyber Components */}
      <div className="prose prose-invert max-w-none space-y-6 text-sm text-foreground leading-relaxed">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h2({ children }) {
              const text = String(children);
              const id = slugify(text);
              return (
                <h2
                  id={id}
                  className="text-xl font-bold tracking-tight text-foreground font-sans pt-6 border-t border-border/40 flex items-center gap-2"
                >
                  <span>{children}</span>
                </h2>
              );
            },
            h3({ children }) {
              return (
                <h3 className="text-base font-semibold text-foreground mt-4 mb-2">
                  {children}
                </h3>
              );
            },
            p({ children }) {
              return <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">{children}</p>;
            },
            ul({ children }) {
              return <ul className="list-disc list-inside space-y-1.5 text-muted-foreground text-xs sm:text-sm pl-2">{children}</ul>;
            },
            ol({ children }) {
              return <ol className="list-decimal list-inside space-y-1.5 text-muted-foreground text-xs sm:text-sm pl-2">{children}</ol>;
            },
            li({ children }) {
              return <li className="leading-relaxed">{children}</li>;
            },
            blockquote({ children }) {
              return (
                <div className="p-4 border-l-2 border-primary bg-primary/5 text-xs text-foreground my-4">
                  {children}
                </div>
              );
            },
            code({ className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              const isInline = !match && !String(children).includes('\n');

              if (isInline) {
                return (
                  <code
                    className="px-1.5 py-0.5 font-mono text-[11px] bg-muted/60 text-primary border border-border/50"
                    {...props}
                  >
                    {children}
                  </code>
                );
              }

              return (
                <CodeBlock
                  language={match ? match[1] : 'tsx'}
                  code={String(children).replace(/\n$/, '')}
                  showLineNumbers={String(children).split('\n').length > 3}
                />
              );
            },
            table({ children }) {
              return (
                <div className="my-6 overflow-x-auto border border-border bg-card/30">
                  <table className="w-full text-left text-xs">{children}</table>
                </div>
              );
            },
            thead({ children }) {
              return (
                <thead className="bg-muted/40 border-b border-border text-muted-foreground uppercase font-mono text-[10px] tracking-wider">
                  {children}
                </thead>
              );
            },
            th({ children }) {
              return <th className="py-2.5 px-4 font-semibold">{children}</th>;
            },
            tbody({ children }) {
              return <tbody className="divide-y divide-border/60">{children}</tbody>;
            },
            tr({ children }) {
              return <tr className="hover:bg-muted/20 transition-colors">{children}</tr>;
            },
            td({ children }) {
              return <td className="py-2.5 px-4 text-muted-foreground">{children}</td>;
            },
            a({ href, children }) {
              const isExternal = href?.startsWith('http');
              return (
                <a
                  href={href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noreferrer' : undefined}
                  className="text-primary underline hover:text-primary/80 font-mono text-xs"
                >
                  {children}
                </a>
              );
            },
          }}
        >
          {bodyMarkdown}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownDocRenderer;
