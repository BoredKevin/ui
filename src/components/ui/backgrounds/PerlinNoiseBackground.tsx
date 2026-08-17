import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { PerlinNoise, resolveCanvasColor } from './perlin';

import { PerlinColorMode } from '@/theme/tokens';
export type { PerlinColorMode };

export interface PerlinNoiseBackgroundProps {
  particleCount?: number;
  noiseScale?: number;
  flowSpeed?: number;
  trailLength?: number;
  lineThickness?: number;
  colorMode?: PerlinColorMode;
  customColor?: string;
  customSecondaryColor?: string;
  interactive?: boolean;
  mouseRadius?: number;
  fadeOpacity?: number;
  className?: string;
  style?: React.CSSProperties;
}

interface FlowParticle {
  x: number;
  y: number;
  prevX: number;
  prevY: number;
  vx: number;
  vy: number;
  age: number;
  maxAge: number;
  speed: number;
  hue: number;
}

export const PerlinNoiseBackground: React.FC<PerlinNoiseBackgroundProps> = ({
  particleCount = 350,
  noiseScale = 0.003,
  flowSpeed = 0.8,
  trailLength = 0.08,
  lineThickness = 1.2,
  colorMode = 'cyan',
  customColor = '#06b6d4',
  customSecondaryColor = '#8b5cf6',
  interactive = true,
  mouseRadius = 180,
  fadeOpacity = 0.06,
  className,
  style,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: false });
    if (!ctx) return;

    const perlin = new PerlinNoise(1337);
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      if (!container || !canvas) return;
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(container);

    // Color resolution helper with robust fallback
    const getBaseColors = (): { primary: string; secondary: string; tertiary: string } => {
      if (colorMode === 'custom' || customColor) {
        const pColor = resolveCanvasColor(customColor, '#06b6d4');
        const sColor = resolveCanvasColor(customSecondaryColor || customColor, '#8b5cf6');
        return { primary: pColor, secondary: sColor, tertiary: pColor };
      }
      if (colorMode === 'cyan') {
        return { primary: '#06b6d4', secondary: '#3b82f6', tertiary: '#8b5cf6' };
      }
      if (colorMode === 'emerald') {
        return { primary: '#10b981', secondary: '#059669', tertiary: '#34d399' };
      }
      if (colorMode === 'amber') {
        return { primary: '#f59e0b', secondary: '#d97706', tertiary: '#fbbf24' };
      }
      if (colorMode === 'crimson') {
        return { primary: '#f43f5e', secondary: '#e11d48', tertiary: '#fb7185' };
      }
      if (colorMode === 'monochrome') {
        return { primary: '#ffffff', secondary: '#a1a1aa', tertiary: '#71717a' };
      }
      if (colorMode === 'aurora') {
        return { primary: '#06b6d4', secondary: '#a855f7', tertiary: '#ec4899' };
      }
      // 'theme' mode: resolve CSS variables to actual computed HSL
      return {
        primary: resolveCanvasColor('var(--primary)', '#06b6d4'),
        secondary: resolveCanvasColor('var(--chart-1)', '#3b82f6'),
        tertiary: resolveCanvasColor('var(--chart-4)', '#8b5cf6'),
      };
    };

    const count = Math.max(50, Math.min(particleCount, 800));
    const particles: FlowParticle[] = [];

    const initParticle = (p?: FlowParticle): FlowParticle => {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const maxAge = Math.floor(Math.random() * 120 + 60);
      const speed = (Math.random() * 0.8 + 0.8) * flowSpeed;

      if (p) {
        p.x = x;
        p.y = y;
        p.prevX = x;
        p.prevY = y;
        p.vx = 0;
        p.vy = 0;
        p.age = 0;
        p.maxAge = maxAge;
        p.speed = speed;
        p.hue = Math.random();
        return p;
      }

      return {
        x,
        y,
        prevX: x,
        prevY: y,
        vx: 0,
        vy: 0,
        age: Math.floor(Math.random() * maxAge),
        maxAge,
        speed,
        hue: Math.random(),
      };
    };

    for (let i = 0; i < count; i++) {
      particles.push(initParticle());
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    window.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    let zTime = 0;

    const render = () => {
      zTime += 0.0025 * flowSpeed;

      // Silky persistent fade: clear canvas with low opacity to produce continuous flow streaks
      ctx.save();
      ctx.fillStyle = `rgba(0, 0, 0, ${Math.max(0.02, Math.min(0.2, fadeOpacity))})`;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const colors = getBaseColors();

      ctx.lineWidth = lineThickness;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.prevX = p.x;
        p.prevY = p.y;

        // Calculate Perlin angle at current coordinate
        let angle = perlin.noise3D(p.x * noiseScale, p.y * noiseScale, zTime) * Math.PI * 4;

        // Interactive mouse deflection / vortex swirl
        if (interactive && mx !== null && my !== null) {
          const dx = mx - p.x;
          const dy = my - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseRadius && dist > 0) {
            const mouseAngle = Math.atan2(dy, dx);
            const force = (1 - dist / mouseRadius) * 1.5;
            // Add vortex swirl perpendicular to mouse vector
            angle += (mouseAngle + Math.PI / 2) * force * 0.5;
          }
        }

        // Apply velocity from angle
        p.vx = Math.cos(angle) * p.speed;
        p.vy = Math.sin(angle) * p.speed;

        p.x += p.vx;
        p.y += p.vy;
        p.age++;

        // Life cycle & alpha fading
        const lifeRatio = p.age / p.maxAge;
        let alpha = 1;
        if (lifeRatio < 0.2) {
          alpha = lifeRatio / 0.2;
        } else if (lifeRatio > 0.8) {
          alpha = (1 - lifeRatio) / 0.2;
        }
        alpha = Math.max(0.05, Math.min(0.85, alpha));

        // Color selection based on particle hue and mode
        let strokeColor = colors.primary;
        if (colorMode === 'aurora') {
          strokeColor = p.hue < 0.33 ? colors.primary : p.hue < 0.66 ? colors.secondary : colors.tertiary;
        } else {
          strokeColor = p.hue < 0.5 ? colors.primary : colors.secondary;
        }

        // Draw streamline path
        ctx.save();
        ctx.strokeStyle = strokeColor;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.moveTo(p.prevX, p.prevY);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
        ctx.restore();

        // Respawn if out of bounds or expired
        if (
          p.age >= p.maxAge ||
          p.x < -10 ||
          p.x > width + 10 ||
          p.y < -10 ||
          p.y > height + 10
        ) {
          initParticle(p);
        }
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [
    particleCount,
    noiseScale,
    flowSpeed,
    trailLength,
    lineThickness,
    colorMode,
    customColor,
    customSecondaryColor,
    interactive,
    mouseRadius,
    fadeOpacity,
  ]);

  return (
    <div
      ref={containerRef}
      className={cn('absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none', className)}
      style={style}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default PerlinNoiseBackground;
