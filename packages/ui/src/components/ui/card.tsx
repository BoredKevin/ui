import * as React from 'react';
import { cn } from '@/lib/utils';
import { CornerEdges } from './corner-edges';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  cornerLines?: boolean;
  telemetry?: string;
  glow?: boolean;
  liquidGlass?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, cornerLines = true, telemetry, glow, liquidGlass = true, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'relative rounded-[var(--radius)] border transition-all text-card-foreground',
        liquidGlass
          ? 'liquid-glass-card'
          : 'border-border bg-card shadow-sm',
        className
      )}
      {...props}
    >
      {cornerLines && (
        <CornerEdges
          size={10}
          glow={glow}
          telemetry={telemetry}
          className="transition-opacity"
        />
      )}
      {children}
    </div>
  )
);
Card.displayName = 'Card';


const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('font-semibold leading-none tracking-tight text-foreground', className)}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
