import React from 'react';
import { cn } from '@/lib/utils';

export interface AtmosphericAuroraBackgroundProps {
  auroraColors?: [string, string, string];
  opacity?: number;
  blur?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const AtmosphericAuroraBackground: React.FC<AtmosphericAuroraBackgroundProps> = ({
  auroraColors = [
    'var(--aurora-1, hsl(var(--primary)))',
    'var(--aurora-2, hsl(var(--chart-1)))',
    'var(--aurora-3, hsl(var(--chart-4)))',
  ],
  opacity = 0.25,
  blur = 130,
  className,
  style,
}) => {
  return (
    <div
      className={cn(
        'absolute inset-0 pointer-events-none overflow-hidden select-none z-0',
        className
      )}
      style={style}
    >
      {/* Primary Theme Fluid Aura */}
      <div
        className="liquid-orb-1 absolute -top-24 left-1/4 w-[520px] h-[520px] rounded-full transition-colors duration-500"
        style={{
          backgroundColor: auroraColors[0],
          filter: `blur(${blur}px)`,
          opacity: opacity,
        }}
      />
      {/* Cyan / Secondary Fluid Aura */}
      <div
        className="liquid-orb-2 absolute top-1/3 -right-20 w-[460px] h-[460px] rounded-full transition-colors duration-500"
        style={{
          backgroundColor: auroraColors[1],
          filter: `blur(${Math.round(blur * 1.1)}px)`,
          opacity: opacity * 0.8,
        }}
      />
      {/* Deep Violet / Tertiary Fluid Aura */}
      <div
        className="liquid-orb-3 absolute -bottom-32 left-1/3 w-[580px] h-[580px] rounded-full transition-colors duration-500"
        style={{
          backgroundColor: auroraColors[2],
          filter: `blur(${Math.round(blur * 1.2)}px)`,
          opacity: opacity * 0.65,
        }}
      />
    </div>
  );
};

export default AtmosphericAuroraBackground;
