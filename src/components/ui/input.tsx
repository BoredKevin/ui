import * as React from 'react';
import { cn } from '@/lib/utils';
import { ChamferStyle } from '@/theme/tokens';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  chamfer?: ChamferStyle | 'auto';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, chamfer = 'auto', disabled, ...props }, ref) => {
    const chamferClass =
      chamfer === 'none'
        ? 'chamfer-none'
        : chamfer === 'dual'
        ? 'chamfer-dual'
        : chamfer === 'top-right' || chamfer === 'bottom-right'
        ? 'chamfer-tr'
        : chamfer === 'all'
        ? 'chamfer-all'
        : 'chamfer-active';

    return (
      <div
        className={cn(
          'relative flex h-9 w-full p-[1px] bg-input/80 focus-within:bg-primary focus-within:scifi-glow-subtle transition-all duration-200 rounded-[var(--radius)]',
          disabled && 'opacity-50 cursor-not-allowed',
          chamferClass
        )}
      >
        <input
          type={type}
          disabled={disabled}
          className={cn(
            'flex h-full w-full bg-background/80 backdrop-blur-md px-3 py-1 text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-foreground rounded-[var(--radius)]',
            chamferClass,
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };

