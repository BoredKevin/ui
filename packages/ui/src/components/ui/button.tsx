import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { ChamferStyle } from '@/theme/tokens';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 select-none rounded-[var(--radius)] relative isolate',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90 hover:scifi-glow-subtle active:scale-[0.98]',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:scifi-glow-subtle active:scale-[0.98]',
        outline:
          'btn-chamfer-outline shadow-sm active:scale-[0.98]',
        secondary:
          'btn-chamfer-secondary shadow-sm active:scale-[0.98]',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        white:
          'btn-chamfer-white font-semibold shadow-sm active:scale-[0.98]',
        cyber:
          'btn-chamfer-cyber shadow-sm active:scale-[0.98]',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-10 px-8 text-base',
        icon: 'h-9 w-9',
      },
      chamfer: {
        auto: 'chamfer-active',
        dual: 'chamfer-dual',
        'top-right': 'chamfer-tr',
        'bottom-right': 'chamfer-tr',
        all: 'chamfer-all',
        none: 'chamfer-none',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      chamfer: 'auto',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  chamfer?: ChamferStyle | 'auto';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, chamfer = 'auto', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            chamfer: chamfer === 'bottom-right' ? 'top-right' : chamfer,
            className,
          })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };

