import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { resolveCanvasColor } from './perlin';

export interface ConstellationsBackgroundProps {
  particleCount?: number;
  maxDistance?: number;
  speed?: number;
  starSize?: number;
  starColor?: string;
  lineColor?: string;
  glow?: boolean;
  glowColor?: string;
  interactive?: boolean;
  mouseRadius?: number;
  lineOpacity?: number;
  className?: string;
  style?: React.CSSProperties;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

export const ConstellationsBackground: React.FC<ConstellationsBackgroundProps> = ({
  particleCount = 75,
  maxDistance = 140,
  speed = 0.7,
  starSize = 2,
  starColor = 'rgba(255, 255, 255, 0.9)',
  lineColor = 'rgba(255, 255, 255, 0.25)',
  glow = true,
  glowColor,
  interactive = true,
  mouseRadius = 160,
  lineOpacity = 0.35,
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

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

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

    const actualStarColor = resolveCanvasColor(starColor, 'rgba(255, 255, 255, 0.9)');
    const actualLineColor = resolveCanvasColor(lineColor, 'rgba(255, 255, 255, 0.25)');
    const actualGlowColor = resolveCanvasColor(glowColor || starColor, actualStarColor);

    // Initialize particles
    const particles: Particle[] = [];
    const count = Math.max(10, Math.min(particleCount, 300));

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed * 0.8,
        vy: (Math.random() - 0.5) * speed * 0.8,
        size: Math.random() * (starSize * 0.8) + starSize * 0.4,
        baseAlpha: Math.random() * 0.6 + 0.4,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        twinkleOffset: Math.random() * Math.PI * 2,
      });
    }

    // Mouse event handlers
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

    let time = 0;

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on borders with wrap around
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Mouse attraction/repulsion
        if (interactive && mx !== null && my !== null) {
          const dx = mx - p.x;
          const dy = my - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRadius && dist > 0) {
            const force = (1 - dist / mouseRadius) * 0.02;
            p.x += dx * force;
            p.y += dy * force;
          }
        }

        // Twinkle calculation
        const alpha = p.baseAlpha * (0.7 + 0.3 * Math.sin(time * p.twinkleSpeed + p.twinkleOffset));

        // Draw Star Node
        ctx.save();
        ctx.fillStyle = actualStarColor;
        ctx.globalAlpha = Math.min(1, Math.max(0.1, alpha));

        if (glow) {
          ctx.shadowBlur = p.size * 4;
          ctx.shadowColor = actualGlowColor;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Draw Connection Lines between nearest particles
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * lineOpacity;
            ctx.save();
            ctx.strokeStyle = actualLineColor;
            ctx.globalAlpha = lineAlpha;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
          }
        }

        // Draw interactive lines to mouse cursor
        if (interactive && mx !== null && my !== null) {
          const dx = p1.x - mx;
          const dy = p1.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseRadius) {
            const lineAlpha = (1 - dist / mouseRadius) * lineOpacity * 1.5;
            ctx.save();
            ctx.strokeStyle = actualLineColor;
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mx, my);
            ctx.stroke();
            ctx.restore();
          }
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
  }, [particleCount, maxDistance, speed, starSize, starColor, lineColor, glow, glowColor, interactive, mouseRadius, lineOpacity]);

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

export default ConstellationsBackground;
