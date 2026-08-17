import * as React from 'react';
import { cn } from '@/lib/utils';

export interface CornerEdgesProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number; // length of corner ticks in px (default 10)
  thickness?: number; // thickness in px (default 2)
  glow?: boolean;
  color?: string; // Tailwind border color class or custom style
  corners?: ('tl' | 'tr' | 'bl' | 'br')[];
  telemetry?: string; // Optional micro HUD telemetry tag e.g. "SYS.01"
}

export const CornerEdges: React.FC<CornerEdgesProps> = ({
  size = 10,
  thickness = 2,
  glow = false,
  color,
  corners = ['tl', 'tr', 'bl', 'br'],
  telemetry,
  className,
  ...props
}) => {
  const cornerStyle = (corner: 'tl' | 'tr' | 'bl' | 'br'): React.CSSProperties => {
    const base: React.CSSProperties = {
      width: `${size}px`,
      height: `${size}px`,
      borderWidth: `${thickness}px`,
      borderColor: 'currentColor',
    };

    switch (corner) {
      case 'tl':
        return {
          ...base,
          top: '-1px',
          left: '-1px',
          borderRight: 'none',
          borderBottom: 'none',
        };
      case 'tr':
        return {
          ...base,
          top: '-1px',
          right: '-1px',
          borderLeft: 'none',
          borderBottom: 'none',
        };
      case 'bl':
        return {
          ...base,
          bottom: '-1px',
          left: '-1px',
          borderRight: 'none',
          borderTop: 'none',
        };
      case 'br':
        return {
          ...base,
          bottom: '-1px',
          right: '-1px',
          borderLeft: 'none',
          borderTop: 'none',
        };
    }
  };

  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 z-10 select-none text-primary',
        color,
        className
      )}
      {...props}
    >
      {corners.includes('tl') && (
        <span
          className={cn('absolute block transition-all', glow && 'scifi-glow-subtle')}
          style={cornerStyle('tl')}
        />
      )}
      {corners.includes('tr') && (
        <span
          className={cn('absolute block transition-all', glow && 'scifi-glow-subtle')}
          style={cornerStyle('tr')}
        />
      )}
      {corners.includes('bl') && (
        <span
          className={cn('absolute block transition-all', glow && 'scifi-glow-subtle')}
          style={cornerStyle('bl')}
        />
      )}
      {corners.includes('br') && (
        <span
          className={cn('absolute block transition-all', glow && 'scifi-glow-subtle')}
          style={cornerStyle('br')}
        />
      )}

      {/* Crisp Telemetry / HUD Label (No drop-shadow glow) */}
      {telemetry && (
        <span className="absolute -top-2.5 right-3 bg-card px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-muted-foreground border border-border">
          // {telemetry}
        </span>
      )}
    </div>
  );
};
