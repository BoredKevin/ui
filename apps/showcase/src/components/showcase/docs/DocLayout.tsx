import React, { useState } from 'react';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { Badge, Button, cn } from '@boredkevin/ui';
import { Code2, Eye } from 'lucide-react';

interface DocHeaderProps {
  title: string;
  description: string;
  badge?: string;
  sourcePath?: string;
  radixPrimitive?: string;
}

export const DocHeader: React.FC<DocHeaderProps> = ({
  title,
  description,
  badge = 'Component',
  sourcePath,
  radixPrimitive,
}) => {
  return (
    <div className="space-y-3 pb-6 border-b border-border/60">
      <div className="flex items-center gap-2">
        <Badge variant="outline" className="text-[10px] font-mono uppercase tracking-wider text-primary border-primary/40">
          {badge}
        </Badge>
        {radixPrimitive && (
          <Badge variant="secondary" className="text-[10px] font-mono">
            Radix: {radixPrimitive}
          </Badge>
        )}
      </div>
      <h1 className="text-3xl font-black tracking-tight text-foreground font-sans">
        {title}
      </h1>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
        {description}
      </p>
      {sourcePath && (
        <div className="pt-1 flex items-center gap-2 text-xs text-muted-foreground font-mono">
          <span>Source:</span>
          <code className="text-foreground bg-muted/40 px-1.5 py-0.5 border border-border/50 text-[11px]">
            {sourcePath}
          </code>
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
}

export const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  title,
  description,
  code,
  children,
  align = 'center',
}) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="my-6 space-y-2">
      {title && (
        <div>
          <h3 className="text-base font-semibold text-foreground">{title}</h3>
          {description && (
            <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
          )}
        </div>
      )}

      <div className="border border-border bg-card/40 backdrop-blur-sm overflow-hidden">
        {/* Preview Toolbar */}
        <div className="flex items-center justify-between border-b border-border/60 bg-muted/20 px-3 py-1.5 text-xs">
          <span className="font-mono text-[11px] text-muted-foreground flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 bg-emerald-400 inline-block" />
            Interactive Preview
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowCode(!showCode)}
            className="h-6 px-2 text-xs gap-1.5 text-muted-foreground hover:text-foreground font-mono"
          >
            {showCode ? (
              <>
                <Eye className="h-3 w-3" />
                <span>Hide Code</span>
              </>
            ) : (
              <>
                <Code2 className="h-3 w-3" />
                <span>View Code</span>
              </>
            )}
          </Button>
        </div>

        {/* Live Rendering Canvas */}
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

        {/* Expandable Code Snippet */}
        {showCode && (
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
}

export const PropsTable: React.FC<PropsTableProps> = ({
  props,
  title = 'Props Reference',
}) => {
  return (
    <div className="my-6 space-y-3">
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
