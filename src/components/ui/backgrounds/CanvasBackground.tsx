import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { ConstellationsBackground, ConstellationsBackgroundProps } from './ConstellationsBackground';
import { PerlinNoiseBackground, PerlinNoiseBackgroundProps } from './PerlinNoiseBackground';
import { AtmosphericAuroraBackground, AtmosphericAuroraBackgroundProps } from './AtmosphericAuroraBackground';
import { cn } from '@/lib/utils';

import { BackgroundType } from '@/theme/tokens';
export type { BackgroundType };

export interface CanvasBackgroundProps {
  type?: BackgroundType;
  constellationProps?: Partial<ConstellationsBackgroundProps>;
  perlinProps?: Partial<PerlinNoiseBackgroundProps>;
  auroraProps?: Partial<AtmosphericAuroraBackgroundProps>;
  showGrid?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const CanvasBackground: React.FC<CanvasBackgroundProps> = ({
  type: propType,
  constellationProps,
  perlinProps,
  auroraProps,
  showGrid,
  className,
  style,
}) => {
  const { theme } = useTheme();

  const activeType: BackgroundType = propType || theme.backgroundType || 'constellations';
  const isGrid = showGrid !== undefined ? showGrid : (activeType === 'grid' || theme.showBackgroundGrid);
  const isAmbient = theme.ambientLighting ?? true;

  return (
    <div
      className={cn(
        'absolute inset-0 pointer-events-none overflow-hidden select-none z-0 transition-opacity duration-700',
        isGrid && 'scifi-grid-bg',
        className
      )}
      style={style}
    >
      {/* Underlying Fluid Aurora Lighting (if enabled) */}
      {(isAmbient || activeType === 'aurora') && (
        <AtmosphericAuroraBackground
          auroraColors={theme.auroraColors}
          {...auroraProps}
        />
      )}

      {/* Constellations Star Network Canvas */}
      {activeType === 'constellations' && (
        <ConstellationsBackground
          particleCount={theme.constellationConfig?.particleCount ?? 80}
          maxDistance={theme.constellationConfig?.maxDistance ?? 140}
          speed={theme.constellationConfig?.speed ?? 0.7}
          starSize={theme.constellationConfig?.starSize ?? 2}
          starColor={theme.constellationConfig?.starColor || 'rgba(255, 255, 255, 0.9)'}
          lineColor={theme.constellationConfig?.lineColor || 'rgba(255, 255, 255, 0.25)'}
          glow={theme.constellationConfig?.glow ?? true}
          glowColor={theme.constellationConfig?.glowColor}
          interactive={theme.constellationConfig?.interactive ?? true}
          mouseRadius={theme.constellationConfig?.mouseRadius ?? 160}
          lineOpacity={theme.constellationConfig?.lineOpacity ?? 0.35}
          {...constellationProps}
        />
      )}

      {/* Perlin Noise Flow Field Streamlines Canvas */}
      {activeType === 'perlin-flow' && (
        <PerlinNoiseBackground
          particleCount={theme.perlinConfig?.particleCount ?? 350}
          noiseScale={theme.perlinConfig?.noiseScale ?? 0.003}
          flowSpeed={theme.perlinConfig?.flowSpeed ?? 0.8}
          trailLength={theme.perlinConfig?.trailLength ?? 0.08}
          lineThickness={theme.perlinConfig?.lineThickness ?? 1.2}
          colorMode={theme.perlinConfig?.colorMode ?? 'custom'}
          customColor={theme.perlinConfig?.customColor || '#06b6d4'}
          customSecondaryColor={theme.perlinConfig?.customSecondaryColor || '#8b5cf6'}
          interactive={theme.perlinConfig?.interactive ?? true}
          mouseRadius={theme.perlinConfig?.mouseRadius ?? 180}
          fadeOpacity={theme.perlinConfig?.fadeOpacity ?? 0.06}
          {...perlinProps}
        />
      )}
    </div>
  );
};

export default CanvasBackground;
