import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
  Input,
  Badge,
  useTheme,
  BackgroundType,
} from '@boredkevin/ui';
import { Orbit, Waves, Sparkles, Sliders, Shield } from 'lucide-react';

export const CustomView: React.FC = () => {
  const {
    theme,
    setBackgroundType,
    setFullAppBackground,
  } = useTheme();

  const [customText, setCustomText] = useState('Constellation Node Web Connected');
  const [clickCount, setClickCount] = useState(0);

  const bgTypes: { id: BackgroundType; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'constellations', label: 'Constellations', icon: Orbit },
    { id: 'perlin-flow', label: 'Perlin Noise', icon: Waves },
    { id: 'aurora', label: 'Aurora Mesh', icon: Sparkles },
    { id: 'grid', label: 'Tactical Grid', icon: Sliders },
    { id: 'none', label: 'Pitch Dark', icon: Shield },
  ];

  return (
    <div className="p-4 space-y-6 max-w-[1200px] mx-auto">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Atmosphere & Custom Sandbox</h2>
        <p className="text-xs text-muted-foreground">
          Interactive preview area to test live dynamic backgrounds, chamfer styling, and reactive HUD components.
        </p>
      </div>

      {/* Dynamic Background Live Sandbox Banner */}
      <Card telemetry="ATMOSPHERE.ENGINE-01" className="liquid-glass-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                {theme.backgroundType === 'constellations' && <Orbit className="h-4 w-4 text-cyan-400 animate-spin-slow" />}
                {theme.backgroundType === 'perlin-flow' && <Waves className="h-4 w-4 text-violet-400" />}
                {theme.backgroundType === 'aurora' && <Sparkles className="h-4 w-4 text-amber-400" />}
                <span>Active Dynamic Background: <span className="uppercase text-primary font-mono">{theme.backgroundType || 'constellations'}</span></span>
              </CardTitle>
              <CardDescription className="text-xs">
                Real-time 60fps canvas engine responding dynamically to mouse movements and theme color tokens.
              </CardDescription>
            </div>
            <Badge variant="outline" className="font-mono text-xs text-primary border-primary/40 bg-primary/10">
              {theme.fullAppBackground ? 'FULL VIEWPORT SCOPE' : 'CANVAS SCOPE'}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {bgTypes.map((bg) => {
              const isActive = (theme.backgroundType || 'constellations') === bg.id;
              const Icon = bg.icon;
              return (
                <Button
                  key={bg.id}
                  variant={isActive ? 'default' : 'outline'}
                  chamfer="dual"
                  size="sm"
                  onClick={() => setBackgroundType(bg.id)}
                  className="gap-1.5 text-xs"
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{bg.label}</span>
                </Button>
              );
            })}
            <Button
              variant="cyber"
              chamfer="top-right"
              size="sm"
              onClick={() => setFullAppBackground(!theme.fullAppBackground)}
              className="text-xs ml-auto"
            >
              Toggle Scope: {theme.fullAppBackground ? 'Full App' : 'Canvas Only'}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Interactive Test Card */}
        <Card telemetry="SANDBOX.INTERACTIVE-01">
          <CardHeader>
            <CardTitle className="text-base font-semibold">Interactive Sci-Fi Sandbox</CardTitle>
            <CardDescription className="text-xs">
              Test chamfer styling, live inputs, and reactive button clicks over background atmosphere.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground font-mono text-[11px]">// DUAL NOTCH INPUT TEST</label>
              <Input
                chamfer="dual"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Type something..."
              />
            </div>

            <div className="p-4 border border-border bg-card/60 space-y-2 relative">
              <div className="text-sm font-bold text-foreground font-mono">{customText}</div>
              <div className="text-xs text-muted-foreground">
                Move your cursor across the canvas to interact with stars or Perlin streamlines in real-time.
              </div>
              <div className="pt-2 flex items-center justify-between">
                <Badge variant="outline" className="font-mono">TELEMETRY CLICKS: {clickCount}</Badge>
                <Button size="sm" variant="cyber" chamfer="dual" onClick={() => setClickCount((c) => c + 1)}>
                  Trigger Pulse
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Live CSS Token Inspector */}
        <Card telemetry="SYS.TOKENS-02">
          <CardHeader>
            <CardTitle className="text-base font-semibold">Active HUD & Atmosphere Tokens</CardTitle>
            <CardDescription className="text-xs">
              Direct live inspection of DOM computed CSS and background parameters.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-3 bg-muted/30 border border-border font-mono text-xs space-y-1.5 overflow-x-auto">
              <div className="text-muted-foreground">// Active Atmosphere & HUD Variables</div>
              <div>--background-type: <span className="text-cyan-400 font-bold">{theme.backgroundType || 'constellations'}</span></div>
              <div>--constellation-stars: <span className="text-cyan-400">{theme.constellationConfig?.particleCount ?? 80} nodes</span></div>
              <div>--perlin-density: <span className="text-violet-400">{theme.perlinConfig?.particleCount ?? 350} streamlines</span></div>
              <div>--background: <span className="text-primary">var(--background)</span></div>
              <div>--chamfer-size: <span className="text-emerald-400 font-bold">var(--chamfer-size) ({theme.chamferSize}px)</span></div>
              <div>--corner-lines: <span className="text-emerald-400 font-bold">{theme.cornerLines ? 'Enabled' : 'Disabled'}</span></div>
              <div>--liquid-glass-blur: <span className="text-primary">{theme.glassBlur ?? 16}px</span></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CustomView;
