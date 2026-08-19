import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Badge, Button, cn } from '@boredkevin/ui';
import {
  Code2,
  Eye,
  Copy,
  Check,
  ExternalLink,
  Github,
  FileText,
  Bot,
} from 'lucide-react';
import { getDocByPath, getPrevNextDoc } from '@/lib/docs-loader';

interface DocHeaderProps {
  title: string;
  description: string;
  badge?: string;
  sourcePath?: string;
  radixPrimitive?: string;
  docId?: string;
  customMarkdown?: string;
}

export const DocHeader: React.FC<DocHeaderProps> = ({
  title,
  description,
  badge = 'Component',
  sourcePath,
  radixPrimitive,
  docId,
  customMarkdown,
}) => {
  const [copiedLlm, setCopiedLlm] = useState(false);
  const [showRawMarkdownModal, setShowRawMarkdownModal] = useState(false);
  const location = useLocation();

  const currentDoc = getDocByPath(location.pathname);

  const markdownContent =
    customMarkdown || (currentDoc ? currentDoc.rawMarkdown : `# ${title}\n\n${description}`);

  const handleCopyLlm = async () => {
    try {
      await navigator.clipboard.writeText(markdownContent);
      setCopiedLlm(true);
      setTimeout(() => setCopiedLlm(false), 2000);
    } catch (err) {
      console.error('Failed to copy markdown context', err);
    }
  };

  return (
    <div className="space-y-4 pb-6 border-b border-border/60">
      {/* Top Badges & Primitive */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Badge
            variant="outline"
            className="text-[10px] font-mono uppercase tracking-wider text-primary border-primary/40"
          >
            {badge}
          </Badge>
          {radixPrimitive && (
            <Badge variant="secondary" className="text-[10px] font-mono">
              Radix: {radixPrimitive}
            </Badge>
          )}
        </div>

        {/* Action Buttons: Copy Markdown (for LLMs), View Raw, GitHub, v0 */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopyLlm}
            className="h-7 px-2.5 text-xs gap-1.5 font-mono border-border bg-card/60 hover:bg-card text-foreground"
            title="Copy component markdown reference for Claude, Cursor, ChatGPT, or Antigravity"
          >
            {copiedLlm ? (
              <>
                <Check className="h-3 w-3 text-emerald-400" />
                <span className="text-emerald-400">Copied Markdown!</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                <span>Copy Markdown</span>
              </>
            )}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowRawMarkdownModal(!showRawMarkdownModal)}
            className="h-7 px-2 text-xs gap-1 font-mono text-muted-foreground hover:text-foreground"
            title="Toggle raw markdown preview"
          >
            <FileText className="h-3 w-3" />
            <span className="hidden sm:inline">Raw</span>
          </Button>

          {sourcePath && (
            <a
              href={`https://github.com/boredkevin/ui/blob/main/${sourcePath}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 h-7 px-2 text-xs font-mono text-muted-foreground hover:text-foreground border border-transparent hover:border-border transition-colors"
              title="View source on GitHub"
            >
              <Github className="h-3 w-3" />
              <span className="hidden sm:inline">Source</span>
            </a>
          )}

          <a
            href="https://v0.dev"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 h-7 px-2 text-xs font-mono text-muted-foreground hover:text-foreground border border-transparent hover:border-border transition-colors"
            title="Open in v0.dev"
          >
            <span>v0</span>
            <ExternalLink className="h-2.5 w-2.5" />
          </a>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground font-sans">
        {title}
      </h1>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
        {description}
      </p>

      {/* Source Path */}
      {sourcePath && (
        <div className="pt-1 flex items-center gap-2 text-xs text-muted-foreground font-mono">
          <span>Source:</span>
          <code className="text-foreground bg-muted/40 px-1.5 py-0.5 border border-border/50 text-[11px]">
            {sourcePath}
          </code>
        </div>
      )}

      {/* Expandable Raw Markdown Drawer */}
      {showRawMarkdownModal && (
        <div className="mt-4 p-3 border border-border bg-card/80 space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
            <span className="flex items-center gap-1.5 text-primary font-bold">
              <Bot className="h-3.5 w-3.5" />
              <span>Markdown Reference Context</span>
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowRawMarkdownModal(false)}
              className="h-5 px-1.5 text-[10px]"
            >
              Close
            </Button>
          </div>
          <CodeBlock
            language="markdown"
            filename={`${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.md`}
            code={markdownContent}
            showLineNumbers
          />
        </div>
      )}
    </div>
  );
};

interface ComponentPreviewProps {
  title?: string;
  description?: string;
  code: string;
  children: React.ReactNode;
  align?: 'center' | 'start' | 'stretch';
  id?: string;
}

export const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  title,
  description,
  code,
  children,
  align = 'center',
  id,
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  return (
    <div id={id} className="my-6 space-y-2">
      {title && (
        <div>
          <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
            <span>{title}</span>
          </h3>
          {description && (
            <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
          )}
        </div>
      )}

      <div className="border border-border bg-card/40 backdrop-blur-sm overflow-hidden">
        {/* Preview Toolbar / Tabs */}
        <div className="flex items-center justify-between border-b border-border/60 bg-muted/20 px-3 py-1.5 text-xs">
          <div className="flex items-center space-x-1">
            <button
              type="button"
              onClick={() => setActiveTab('preview')}
              className={cn(
                'px-2.5 py-1 text-xs font-mono font-medium transition-colors flex items-center gap-1.5 border',
                activeTab === 'preview'
                  ? 'border-border bg-card text-foreground font-semibold shadow-sm'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              )}
            >
              <Eye className="h-3 w-3 text-primary" />
              <span>Preview</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('code')}
              className={cn(
                'px-2.5 py-1 text-xs font-mono font-medium transition-colors flex items-center gap-1.5 border',
                activeTab === 'code'
                  ? 'border-border bg-card text-foreground font-semibold shadow-sm'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              )}
            >
              <Code2 className="h-3 w-3" />
              <span>Code</span>
            </button>
          </div>

          <span className="font-mono text-[11px] text-muted-foreground hidden sm:flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 bg-emerald-400 inline-block" />
            Interactive Live Canvas
          </span>
        </div>

        {/* Preview View */}
        {activeTab === 'preview' ? (
          <div
            className={cn(
              'min-h-[140px] p-6 sm:p-10 flex relative bg-background/50',
              align === 'center' && 'items-center justify-center',
              align === 'start' && 'items-start justify-start',
              align === 'stretch' && 'items-stretch justify-center flex-col'
            )}
          >
            {children}
          </div>
        ) : (
          /* Code View */
          <div className="border-t border-border/60">
            <CodeBlock code={code} className="my-0 border-0" />
          </div>
        )}
      </div>
    </div>
  );
};

export interface PropDefinition {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
  required?: boolean;
}

interface PropsTableProps {
  props: PropDefinition[];
  title?: string;
  id?: string;
}

export const PropsTable: React.FC<PropsTableProps> = ({
  props,
  title = 'Props Reference',
  id = 'props-reference',
}) => {
  return (
    <div id={id} className="my-8 space-y-3">
      <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
        <span>{title}</span>
        <Badge variant="secondary" className="text-[10px] font-mono">
          {props.length} props
        </Badge>
      </h3>

      <div className="overflow-x-auto border border-border bg-card/30">
        <table className="w-full text-left text-xs">
          <thead className="bg-muted/40 border-b border-border text-muted-foreground uppercase font-mono text-[10px] tracking-wider">
            <tr>
              <th className="py-2.5 px-4 font-semibold">Prop</th>
              <th className="py-2.5 px-4 font-semibold">Type</th>
              <th className="py-2.5 px-4 font-semibold">Default</th>
              <th className="py-2.5 px-4 font-semibold">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60 font-sans">
            {props.map((p) => (
              <tr key={p.name} className="hover:bg-muted/20 transition-colors">
                <td className="py-2.5 px-4 font-mono font-bold text-foreground">
                  <div className="flex items-center gap-1.5">
                    <span>{p.name}</span>
                    {p.required && (
                      <span className="text-[10px] text-destructive font-mono font-normal">
                        *required
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-2.5 px-4 font-mono text-primary text-[11px]">
                  {p.type}
                </td>
                <td className="py-2.5 px-4 font-mono text-muted-foreground text-[11px]">
                  {p.defaultValue || '-'}
                </td>
                <td className="py-2.5 px-4 text-muted-foreground leading-relaxed">
                  {p.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

interface DocSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  id?: string;
}

export const DocSection: React.FC<DocSectionProps> = ({
  title,
  description,
  children,
  id,
}) => {
  return (
    <section id={id} className="pt-8 space-y-4">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-foreground font-sans flex items-center gap-2">
          <span>{title}</span>
        </h2>
        {description && (
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  );
};

export const DocPagination: React.FC = () => {
  const location = useLocation();
  const { prev, next } = getPrevNextDoc(location.pathname);

  if (!prev && !next) return null;

  return (
    <div className="pt-10 mt-12 border-t border-border/60 flex items-center justify-between gap-4">
      {prev ? (
        <Link
          to={prev.path}
          className="group flex flex-col p-3 border border-border/80 bg-card/40 hover:bg-card hover:border-primary transition-all text-left max-w-[240px]"
        >
          <span className="text-[10px] font-mono text-muted-foreground uppercase">
            ← Previous
          </span>
          <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors truncate mt-0.5">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          to={next.path}
          className="group flex flex-col p-3 border border-border/80 bg-card/40 hover:bg-card hover:border-primary transition-all text-right max-w-[240px]"
        >
          <span className="text-[10px] font-mono text-muted-foreground uppercase">
            Next →
          </span>
          <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors truncate mt-0.5">
            {next.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
};
