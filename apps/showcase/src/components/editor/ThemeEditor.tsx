import React, { useState } from 'react';
import {
  Sparkles,
  Crosshair,
  Shield,
  Zap,
  Sliders,
  Check,
  Palette,
  Orbit,
  Waves,
  Layers,
  RotateCcw,
  Grid,
} from 'lucide-react';
import {
  useTheme,
  Slider,
  Button,
  Switch,
  cn,
  ChamferStyle,
  BackgroundType,
  AURORA_PRESETS,
  BACKGROUND_PRESETS,
} from '@boredkevin/ui';

export const ThemeEditor: React.FC = () => {
  const {
    theme,
    selectPreset,
    isDark,
    activeEditorTab,
    setActiveEditorTab,
    setHueShift,
    setSaturationMultiplier,
    setLightnessMultiplier,
    setRadius,
    setFontFamily,
    setChamferSize,
    setChamferStyle,
    setCornerLines,
    setCornerLineGlow,
    setLiquidGlass,
    setGlassBlur,
    setGlassOpacity,
    setAmbientLighting,
    setAuroraColors,
    setBackgroundType,
    setFullAppBackground,
    setShowBackgroundGrid,
    updateConstellationConfig,
    updatePerlinConfig,
    selectBackgroundPreset,
    updateColorToken,
  } = useTheme();

  // Accordion open states inside "Other"
  const [hslOpen, setHslOpen] = useState(true);
  const [radiusOpen, setRadiusOpen] = useState(false);

  // AI Prompt State
  const [aiPrompt, setAiPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleAiGenerate = () => {
    if (!aiPrompt.trim()) return;
    setIsGenerating(true);

    setTimeout(() => {
      const lower = aiPrompt.toLowerCase();
      if (lower.includes('cyber') || lower.includes('neon') || lower.includes('cyan')) {
        setHueShift(195);
        setSaturationMultiplier(1.3);
        setRadius(0);
        setChamferSize(8);
        setChamferStyle('dual');
        setCornerLines(true);
        setCornerLineGlow(true);
        setFontFamily('JetBrains Mono');
        setBackgroundType('perlin-flow');
        updatePerlinConfig({ colorMode: 'cyan' });
      } else if (lower.includes('constellation') || lower.includes('star') || lower.includes('space')) {
        setHueShift(220);
        setRadius(0);
        setChamferSize(6);
        setChamferStyle('dual');
        setBackgroundType('constellations');
        updateConstellationConfig({ particleCount: 100, maxDistance: 160, glow: true });
      } else if (lower.includes('emerald') || lower.includes('matrix') || lower.includes('green')) {
        setHueShift(145);
        setSaturationMultiplier(1.2);
        setRadius(0);
        setChamferSize(6);
        setChamferStyle('dual');
        setCornerLines(true);
        setCornerLineGlow(true);
        setFontFamily('Geist');
        setBackgroundType('perlin-flow');
        updatePerlinConfig({ colorMode: 'emerald' });
      } else if (lower.includes('amber') || lower.includes('gold') || lower.includes('terminal')) {
        setHueShift(40);
        setSaturationMultiplier(1.4);
        setRadius(0);
        setChamferSize(6);
        setChamferStyle('dual');
        setCornerLines(true);
        setCornerLineGlow(true);
        setFontFamily('JetBrains Mono');
        setBackgroundType('constellations');
        updateConstellationConfig({ starColor: '#f59e0b', lineColor: 'rgba(245,158,11,0.3)' });
      } else if (lower.includes('crimson') || lower.includes('red') || lower.includes('alert')) {
        setHueShift(0);
        setSaturationMultiplier(1.4);
        setRadius(0);
        setChamferSize(8);
        setChamferStyle('all');
        setCornerLines(true);
        setCornerLineGlow(true);
        setFontFamily('JetBrains Mono');
        setBackgroundType('perlin-flow');
        updatePerlinConfig({ colorMode: 'crimson' });
      } else {
        // Subtle shift based on string hash
        const hash = Math.abs(
          aiPrompt.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
        );
        setHueShift(hash % 360);
        setRadius(0);
        setChamferSize(6);
      }
      setIsGenerating(false);
    }, 500);
  };

  const chamferStyles: { id: ChamferStyle; label: string; desc: string }[] = [
    { id: 'dual', label: 'Dual Notch', desc: 'Top-Right & Bottom-Left 45° cut' },
    { id: 'top-right', label: 'Top-Right Cut', desc: 'Single tactical notch' },
    { id: 'all', label: 'All 4 Corners', desc: 'Hexagonal cyber armor bevel' },
    { id: 'none', label: 'None (0rem)', desc: 'Sharp 90° rectangular edge' },
  ];

  const backgroundTypeOptions: { id: BackgroundType; label: string; desc: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'constellations', label: 'Constellations', desc: 'Interactive star web & twinkling nodes', icon: Orbit },
    { id: 'perlin-flow', label: 'Perlin Noise', desc: 'Silky vector streamlines & vortices', icon: Waves },
    { id: 'aurora', label: 'Aurora Mesh', desc: 'Drifting fluid ambient glass orbs', icon: Sparkles },
    { id: 'grid', label: 'Tactical Grid', desc: '24px sci-fi coordinates overlay', icon: Grid },
    { id: 'none', label: 'Minimalist', desc: 'Pure pitch-dark matte background', icon: Sliders },
  ];

  return (
    <aside className="w-full lg:w-[320px] shrink-0 border-r border-border bg-background flex flex-col h-[calc(100vh-88px)] sticky top-[88px] overflow-y-auto">
      {/* Editor Navigation Tabs: Sci-Fi, Colors, Typography, Other, Generate */}
      <div className="flex items-center border-b border-border bg-card/30 p-1">
        <button
          type="button"
          onClick={() => setActiveEditorTab('scifi')}
          className={cn(
            'flex-1 py-1.5 text-xs font-medium transition-colors text-center flex items-center justify-center gap-1',
            activeEditorTab === 'scifi'
              ? 'bg-card text-primary font-bold shadow-sm border border-border/50'
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          <Crosshair className="h-3 w-3 text-primary" />
          <span>Sci-Fi</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveEditorTab('colors')}
          className={cn(
            'flex-1 py-1.5 text-xs font-medium transition-colors text-center',
            activeEditorTab === 'colors'
              ? 'bg-card text-foreground font-semibold shadow-sm border border-border/50'
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          Colors
        </button>
        <button
          type="button"
          onClick={() => setActiveEditorTab('typography')}
          className={cn(
            'flex-1 py-1.5 text-xs font-medium transition-colors text-center',
            activeEditorTab === 'typography'
              ? 'bg-card text-foreground font-semibold shadow-sm border border-border/50'
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          Type
        </button>
        <button
          type="button"
          onClick={() => setActiveEditorTab('other')}
          className={cn(
            'flex-1 py-1.5 text-xs font-medium transition-colors text-center',
            activeEditorTab === 'other'
              ? 'bg-card text-foreground font-semibold shadow-sm border border-border/50'
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          Other
        </button>
        <button
          type="button"
          onClick={() => setActiveEditorTab('generate')}
          className={cn(
            'flex-1 py-1.5 text-xs font-medium transition-colors text-center flex items-center justify-center gap-1',
            activeEditorTab === 'generate'
              ? 'bg-card text-primary font-semibold shadow-sm border border-border/50'
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          <Sparkles className="h-3 w-3 text-primary" />
          <span>AI</span>
        </button>
      </div>

      {/* Editor Content Body */}
      <div className="p-4 space-y-4 text-xs">
        {/* ================= SCI-FI HUD & BACKGROUNDS TAB ================= */}
        {activeEditorTab === 'scifi' && (
          <div className="space-y-4">
            {/* Header description */}
            <div className="p-2.5 border border-primary/30 bg-primary/5 space-y-1 relative">
              <div className="flex items-center gap-1.5 text-primary font-bold text-xs uppercase tracking-wider">
                <Shield className="h-3.5 w-3.5" />
                <span>Tactical Sci-Fi & Atmosphere Engine</span>
              </div>
              <p className="text-[11px] text-muted-foreground">
                Customize dynamic backgrounds (Constellations & Perlin Noise), chamfer cuts, corner lines, and glass depth.
              </p>
            </div>

            {/* 1. Dynamic Background Selector */}
            <div className="border border-border bg-card/20 p-3 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold tracking-wider text-[11px] text-muted-foreground uppercase flex items-center gap-1.5">
                  <Orbit className="h-3.5 w-3.5 text-primary" />
                  <span>Dynamic Background</span>
                </span>
                <span className="text-[10px] font-mono uppercase bg-primary/10 text-primary px-1.5 py-0.5 border border-primary/20">
                  {theme.backgroundType || 'constellations'}
                </span>
              </div>

              {/* Background Type Grid Tiles */}
              <div className="grid grid-cols-2 gap-1.5">
                {backgroundTypeOptions.map((bgOpt) => {
                  const isActive = (theme.backgroundType || 'constellations') === bgOpt.id;
                  const Icon = bgOpt.icon;
                  return (
                    <button
                      key={bgOpt.id}
                      type="button"
                      onClick={() => setBackgroundType(bgOpt.id)}
                      className={cn(
                        'p-2 text-left border transition-all flex flex-col justify-between gap-1',
                        isActive
                          ? 'border-primary bg-primary/15 text-primary shadow-sm font-semibold'
                          : 'border-border bg-card hover:bg-muted text-muted-foreground'
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <Icon className={cn('h-3.5 w-3.5', isActive ? 'text-primary' : 'text-muted-foreground')} />
                          <span className="text-[11px] truncate">{bgOpt.label}</span>
                        </div>
                        {isActive && <Check className="h-3 w-3 text-primary shrink-0" />}
                      </div>
                      <span className="text-[9px] text-muted-foreground/80 line-clamp-1">
                        {bgOpt.desc}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Viewport Scope: Canvas vs Full Viewport */}
              <div className="flex items-center justify-between p-2 border border-border bg-card">
                <div>
                  <div className="font-medium text-xs text-foreground flex items-center gap-1">
                    <Layers className="h-3 w-3 text-primary" />
                    <span>Full App Background Scope</span>
                  </div>
                  <div className="text-[10px] text-muted-foreground">
                    Expand dynamic canvas behind sidebar & header
                  </div>
                </div>
                <Switch
                  checked={theme.fullAppBackground ?? false}
                  onCheckedChange={(checked) => setFullAppBackground(checked)}
                />
              </div>

              {/* Underlying Tactical Grid Pattern Switch */}
              <div className="flex items-center justify-between p-2 border border-border bg-card">
                <div>
                  <div className="font-medium text-xs text-foreground flex items-center gap-1">
                    <Grid className="h-3 w-3 text-muted-foreground" />
                    <span>24px Tactical Grid Pattern</span>
                  </div>
                  <div className="text-[10px] text-muted-foreground">
                    Sci-Fi coordinate grid lines overlay
                  </div>
                </div>
                <Switch
                  checked={theme.showBackgroundGrid ?? true}
                  onCheckedChange={(checked) => setShowBackgroundGrid(checked)}
                />
              </div>

              {/* Background Preset Quick Buttons */}
              <div className="pt-2 border-t border-border/50 space-y-1.5">
                <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider block">
                  Atmosphere Presets
                </span>
                <div className="grid grid-cols-2 gap-1">
                  {BACKGROUND_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => selectBackgroundPreset(preset.id)}
                      className="p-1.5 text-left border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-all flex flex-col justify-between"
                    >
                      <span className="text-[10px] font-medium truncate">{preset.name}</span>
                      <span className="text-[8px] text-muted-foreground/70 uppercase font-mono">{preset.type}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Constellations Customization Panel (when constellations is active) */}
            {theme.backgroundType === 'constellations' && (
              <div className="border border-cyan-500/30 bg-cyan-500/5 p-3 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold tracking-wider text-[11px] text-cyan-400 uppercase flex items-center gap-1.5">
                    <Orbit className="h-3.5 w-3.5" />
                    <span>Constellation Controls</span>
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400">
                    {theme.constellationConfig?.particleCount ?? 80} STARS
                  </span>
                </div>

                {/* Star Count Slider */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground font-medium text-[11px]">Star Density</span>
                    <span className="font-mono bg-muted px-1.5 py-0.5 border border-border font-bold text-[11px]">
                      {theme.constellationConfig?.particleCount ?? 80}
                    </span>
                  </div>
                  <Slider
                    value={[theme.constellationConfig?.particleCount ?? 80]}
                    min={20}
                    max={180}
                    step={5}
                    onValueChange={([val]) => updateConstellationConfig({ particleCount: val })}
                  />
                </div>

                {/* Connection Max Distance Slider */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground font-medium text-[11px]">Connection Reach</span>
                    <span className="font-mono bg-muted px-1.5 py-0.5 border border-border font-bold text-[11px]">
                      {theme.constellationConfig?.maxDistance ?? 140}px
                    </span>
                  </div>
                  <Slider
                    value={[theme.constellationConfig?.maxDistance ?? 140]}
                    min={60}
                    max={220}
                    step={10}
                    onValueChange={([val]) => updateConstellationConfig({ maxDistance: val })}
                  />
                </div>

                {/* Star Drift Speed */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground font-medium text-[11px]">Drift Velocity</span>
                    <span className="font-mono bg-muted px-1.5 py-0.5 border border-border font-bold text-[11px]">
                      {theme.constellationConfig?.speed ?? 0.7}x
                    </span>
                  </div>
                  <Slider
                    value={[theme.constellationConfig?.speed ?? 0.7]}
                    min={0.1}
                    max={2.5}
                    step={0.1}
                    onValueChange={([val]) => updateConstellationConfig({ speed: val })}
                  />
                </div>

                {/* Line Opacity */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground font-medium text-[11px]">Web Line Opacity</span>
                    <span className="font-mono bg-muted px-1.5 py-0.5 border border-border font-bold text-[11px]">
                      {Math.round((theme.constellationConfig?.lineOpacity ?? 0.35) * 100)}%
                    </span>
                  </div>
                  <Slider
                    value={[theme.constellationConfig?.lineOpacity ?? 0.35]}
                    min={0.1}
                    max={0.8}
                    step={0.05}
                    onValueChange={([val]) => updateConstellationConfig({ lineOpacity: val })}
                  />
                </div>

                {/* Mouse Interaction & Twinkle Glow Switches */}
                <div className="grid grid-cols-1 gap-1.5 pt-1">
                  <div className="flex items-center justify-between p-2 border border-border bg-card">
                    <div>
                      <div className="font-medium text-xs text-foreground">Mouse Magnetism</div>
                      <div className="text-[10px] text-muted-foreground">Draws links & attracts nearby stars</div>
                    </div>
                    <Switch
                      checked={theme.constellationConfig?.interactive ?? true}
                      onCheckedChange={(checked) => updateConstellationConfig({ interactive: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between p-2 border border-border bg-card">
                    <div>
                      <div className="font-medium text-xs text-foreground">Twinkling Star Glow</div>
                      <div className="text-[10px] text-muted-foreground">Luminous bloom on celestial nodes</div>
                    </div>
                    <Switch
                      checked={theme.constellationConfig?.glow ?? true}
                      onCheckedChange={(checked) => updateConstellationConfig({ glow: checked })}
                    />
                  </div>
                </div>

                {/* Color Scheme Picker */}
                <div className="pt-2 border-t border-border/50 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                      Star & Line Color Pickers
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        updateConstellationConfig({
                          starColor: '#ffffff',
                          lineColor: 'rgba(255, 255, 255, 0.25)',
                        })
                      }
                      className="text-[10px] text-primary hover:underline flex items-center gap-0.5"
                    >
                      <RotateCcw className="h-2.5 w-2.5" />
                      <span>Reset</span>
                    </button>
                  </div>

                  {/* Live Star & Line Color Pickers */}
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="p-2 border border-border bg-card flex flex-col gap-1.5">
                      <span className="text-[10px] text-muted-foreground font-medium">Star Node Color</span>
                      <div className="flex items-center gap-2">
                        <div className="relative w-7 h-7 border border-border shrink-0 overflow-hidden cursor-pointer">
                          <input
                            type="color"
                            value={theme.constellationConfig?.starColor?.startsWith('#') ? theme.constellationConfig.starColor : '#ffffff'}
                            onChange={(e) => updateConstellationConfig({ starColor: e.target.value })}
                            className="absolute -top-2 -left-2 w-12 h-12 cursor-pointer opacity-0"
                          />
                          <div
                            className="w-full h-full"
                            style={{ backgroundColor: theme.constellationConfig?.starColor || '#ffffff' }}
                          />
                        </div>
                        <input
                          type="text"
                          value={theme.constellationConfig?.starColor || '#ffffff'}
                          onChange={(e) => updateConstellationConfig({ starColor: e.target.value })}
                          className="w-full bg-input border border-border px-1.5 py-0.5 text-[10px] font-mono"
                          placeholder="#ffffff"
                        />
                      </div>
                    </div>

                    <div className="p-2 border border-border bg-card flex flex-col gap-1.5">
                      <span className="text-[10px] text-muted-foreground font-medium">Line Color</span>
                      <div className="flex items-center gap-2">
                        <div className="relative w-7 h-7 border border-border shrink-0 overflow-hidden cursor-pointer">
                          <input
                            type="color"
                            value={theme.constellationConfig?.lineColor?.startsWith('#') ? theme.constellationConfig.lineColor : '#06b6d4'}
                            onChange={(e) => updateConstellationConfig({ lineColor: e.target.value })}
                            className="absolute -top-2 -left-2 w-12 h-12 cursor-pointer opacity-0"
                          />
                          <div
                            className="w-full h-full"
                            style={{ backgroundColor: theme.constellationConfig?.lineColor || '#06b6d4' }}
                          />
                        </div>
                        <input
                          type="text"
                          value={theme.constellationConfig?.lineColor || '#06b6d4'}
                          onChange={(e) => updateConstellationConfig({ lineColor: e.target.value })}
                          className="w-full bg-input border border-border px-1.5 py-0.5 text-[10px] font-mono"
                          placeholder="#06b6d4"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Preset Swatches */}
                  <div className="grid grid-cols-4 gap-1 pt-1">
                    {[
                      { label: 'Starlight', star: '#ffffff', line: 'rgba(255,255,255,0.3)' },
                      { label: 'Cyan', star: '#06b6d4', line: '#06b6d4' },
                      { label: 'Emerald', star: '#10b981', line: '#10b981' },
                      { label: 'Amber', star: '#f59e0b', line: '#f59e0b' },
                    ].map((c) => (
                      <button
                        key={c.label}
                        type="button"
                        onClick={() =>
                          updateConstellationConfig({
                            starColor: c.star,
                            lineColor: c.line,
                          })
                        }
                        className="p-1 border border-border bg-card hover:bg-muted text-[9px] text-center text-muted-foreground truncate flex items-center justify-center gap-1"
                      >
                        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: c.star }} />
                        <span>{c.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 3. Perlin Noise Customization Panel (when perlin-flow is active) */}
            {theme.backgroundType === 'perlin-flow' && (
              <div className="border border-violet-500/30 bg-violet-500/5 p-3 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold tracking-wider text-[11px] text-violet-400 uppercase flex items-center gap-1.5">
                    <Waves className="h-3.5 w-3.5" />
                    <span>Perlin Flow Field Controls</span>
                  </span>
                  <span className="text-[10px] font-mono text-violet-400">
                    {theme.perlinConfig?.particleCount ?? 350} STREAMS
                  </span>
                </div>

                {/* Particle Streamlines Count Slider */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground font-medium text-[11px]">Stream Density</span>
                    <span className="font-mono bg-muted px-1.5 py-0.5 border border-border font-bold text-[11px]">
                      {theme.perlinConfig?.particleCount ?? 350}
                    </span>
                  </div>
                  <Slider
                    value={[theme.perlinConfig?.particleCount ?? 350]}
                    min={100}
                    max={600}
                    step={25}
                    onValueChange={([val]) => updatePerlinConfig({ particleCount: val })}
                  />
                </div>

                {/* Flow Speed Slider */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground font-medium text-[11px]">Flow Velocity</span>
                    <span className="font-mono bg-muted px-1.5 py-0.5 border border-border font-bold text-[11px]">
                      {theme.perlinConfig?.flowSpeed ?? 0.8}x
                    </span>
                  </div>
                  <Slider
                    value={[theme.perlinConfig?.flowSpeed ?? 0.8]}
                    min={0.2}
                    max={2.5}
                    step={0.1}
                    onValueChange={([val]) => updatePerlinConfig({ flowSpeed: val })}
                  />
                </div>

                {/* Noise Scale / Wave Turbulence Slider */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground font-medium text-[11px]">Vector Turbulence (Zoom)</span>
                    <span className="font-mono bg-muted px-1.5 py-0.5 border border-border font-bold text-[11px]">
                      {Math.round((theme.perlinConfig?.noiseScale ?? 0.003) * 10000) / 10}k
                    </span>
                  </div>
                  <Slider
                    value={[theme.perlinConfig?.noiseScale ?? 0.003]}
                    min={0.001}
                    max={0.008}
                    step={0.0005}
                    onValueChange={([val]) => updatePerlinConfig({ noiseScale: val })}
                  />
                </div>

                {/* Line Thickness */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground font-medium text-[11px]">Line Thickness</span>
                    <span className="font-mono bg-muted px-1.5 py-0.5 border border-border font-bold text-[11px]">
                      {theme.perlinConfig?.lineThickness ?? 1.2}px
                    </span>
                  </div>
                  <Slider
                    value={[theme.perlinConfig?.lineThickness ?? 1.2]}
                    min={0.5}
                    max={3}
                    step={0.1}
                    onValueChange={([val]) => updatePerlinConfig({ lineThickness: val })}
                  />
                </div>

                {/* Interactive Mouse Deflection Switch */}
                <div className="flex items-center justify-between p-2 border border-border bg-card">
                  <div>
                    <div className="font-medium text-xs text-foreground">Mouse Vortex & Deflection</div>
                    <div className="text-[10px] text-muted-foreground">Cursor creates fluid swirl currents</div>
                  </div>
                  <Switch
                    checked={theme.perlinConfig?.interactive ?? true}
                    onCheckedChange={(checked) => updatePerlinConfig({ interactive: checked })}
                  />
                </div>

                {/* Live Color Picker for Perlin Noise */}
                <div className="pt-2 border-t border-border/50 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">
                      Flow Stream Colors
                    </span>
                    <span className="text-[10px] font-mono text-violet-400 font-bold">
                      {theme.perlinConfig?.customColor || '#06b6d4'}
                    </span>
                  </div>

                  {/* Dual Color Picker Inputs */}
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="p-2 border border-border bg-card flex flex-col gap-1.5">
                      <span className="text-[10px] text-muted-foreground font-medium">Primary Stream</span>
                      <div className="flex items-center gap-2">
                        <div className="relative w-7 h-7 border border-border shrink-0 overflow-hidden cursor-pointer">
                          <input
                            type="color"
                            value={theme.perlinConfig?.customColor || '#06b6d4'}
                            onChange={(e) =>
                              updatePerlinConfig({
                                colorMode: 'custom',
                                customColor: e.target.value,
                              })
                            }
                            className="absolute -top-2 -left-2 w-12 h-12 cursor-pointer opacity-0"
                          />
                          <div
                            className="w-full h-full"
                            style={{ backgroundColor: theme.perlinConfig?.customColor || '#06b6d4' }}
                          />
                        </div>
                        <input
                          type="text"
                          value={theme.perlinConfig?.customColor || '#06b6d4'}
                          onChange={(e) =>
                            updatePerlinConfig({
                              colorMode: 'custom',
                              customColor: e.target.value,
                            })
                          }
                          className="w-full bg-input border border-border px-1.5 py-0.5 text-[10px] font-mono"
                          placeholder="#06b6d4"
                        />
                      </div>
                    </div>

                    <div className="p-2 border border-border bg-card flex flex-col gap-1.5">
                      <span className="text-[10px] text-muted-foreground font-medium">Secondary Accent</span>
                      <div className="flex items-center gap-2">
                        <div className="relative w-7 h-7 border border-border shrink-0 overflow-hidden cursor-pointer">
                          <input
                            type="color"
                            value={theme.perlinConfig?.customSecondaryColor || '#8b5cf6'}
                            onChange={(e) =>
                              updatePerlinConfig({
                                colorMode: 'custom',
                                customSecondaryColor: e.target.value,
                              })
                            }
                            className="absolute -top-2 -left-2 w-12 h-12 cursor-pointer opacity-0"
                          />
                          <div
                            className="w-full h-full"
                            style={{ backgroundColor: theme.perlinConfig?.customSecondaryColor || '#8b5cf6' }}
                          />
                        </div>
                        <input
                          type="text"
                          value={theme.perlinConfig?.customSecondaryColor || '#8b5cf6'}
                          onChange={(e) =>
                            updatePerlinConfig({
                              colorMode: 'custom',
                              customSecondaryColor: e.target.value,
                            })
                          }
                          className="w-full bg-input border border-border px-1.5 py-0.5 text-[10px] font-mono"
                          placeholder="#8b5cf6"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Preset Swatches Palette Grid */}
                  <div className="space-y-1 pt-1">
                    <span className="text-[9px] text-muted-foreground/80 block uppercase font-mono">
                      Curated Stream Palettes
                    </span>
                    <div className="grid grid-cols-2 gap-1.5">
                      {[
                        { label: 'Cyber Cyan', color1: '#06b6d4', color2: '#3b82f6', mode: 'cyan' as const },
                        { label: 'Emerald Matrix', color1: '#10b981', color2: '#059669', mode: 'emerald' as const },
                        { label: 'Solar Gold', color1: '#f59e0b', color2: '#d97706', mode: 'amber' as const },
                        { label: 'Alert Crimson', color1: '#f43f5e', color2: '#e11d48', mode: 'crimson' as const },
                        { label: 'Aurora Multi', color1: '#06b6d4', color2: '#ec4899', mode: 'aurora' as const },
                        { label: 'Crisp White', color1: '#ffffff', color2: '#a1a1aa', mode: 'monochrome' as const },
                        { label: 'Violet Nebula', color1: '#8b5cf6', color2: '#ec4899', mode: 'custom' as const },
                        { label: 'Deep Indigo', color1: '#6366f1', color2: '#3b82f6', mode: 'custom' as const },
                      ].map((pal) => {
                        const isMatch =
                          (theme.perlinConfig?.customColor === pal.color1 &&
                            theme.perlinConfig?.customSecondaryColor === pal.color2) ||
                          theme.perlinConfig?.colorMode === pal.mode;
                        return (
                          <button
                            key={pal.label}
                            type="button"
                            onClick={() =>
                              updatePerlinConfig({
                                colorMode: pal.mode,
                                customColor: pal.color1,
                                customSecondaryColor: pal.color2,
                              })
                            }
                            className={cn(
                              'p-1.5 text-left border transition-all flex items-center justify-between gap-1',
                              isMatch
                                ? 'border-violet-400 bg-violet-400/15 text-violet-300 font-bold'
                                : 'border-border bg-card hover:bg-muted text-muted-foreground'
                            )}
                          >
                            <span className="text-[10px] truncate">{pal.label}</span>
                            <div className="flex items-center gap-0.5 shrink-0">
                              <span className="h-2 w-2" style={{ backgroundColor: pal.color1 }} />
                              <span className="h-2 w-2" style={{ backgroundColor: pal.color2 }} />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. Chamfer Cut Geometry */}
            <div className="border border-border bg-card/20 p-3 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold tracking-wider text-[11px] text-muted-foreground uppercase flex items-center gap-1.5">
                  <Sliders className="h-3.5 w-3.5 text-primary" />
                  <span>Chamfer Style</span>
                </span>
                <span className="text-[10px] font-mono uppercase bg-primary/10 text-primary px-1.5 py-0.5 border border-primary/20">
                  {theme.chamferStyle}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-1.5 pt-1">
                {chamferStyles.map((item) => {
                  const isActive = theme.chamferStyle === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setChamferStyle(item.id)}
                      className={cn(
                        'p-2 text-left border transition-all flex flex-col justify-between',
                        isActive
                          ? 'border-primary bg-primary/15 text-primary shadow-sm font-semibold'
                          : 'border-border bg-card hover:bg-muted text-muted-foreground'
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px]">{item.label}</span>
                        {isActive && <Check className="h-3 w-3 text-primary" />}
                      </div>
                      <span className="text-[9px] text-muted-foreground/80 mt-1 line-clamp-1">
                        {item.desc}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Chamfer Size Slider */}
              <div className="space-y-1.5 pt-2 border-t border-border/50">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground font-medium text-[11px]">Chamfer Depth (px)</span>
                  <span className="font-mono bg-muted px-1.5 py-0.5 border border-border font-bold text-[11px]">
                    {theme.chamferSize}px
                  </span>
                </div>
                <Slider
                  value={[theme.chamferSize]}
                  min={0}
                  max={14}
                  step={1}
                  onValueChange={([val]) => setChamferSize(val)}
                />
              </div>
            </div>

            {/* 5. Bright Corner Lines & Edge Brackets */}
            <div className="border border-border bg-card/20 p-3 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold tracking-wider text-[11px] text-muted-foreground uppercase flex items-center gap-1.5">
                  <Crosshair className="h-3.5 w-3.5 text-primary" />
                  <span>Corner Edge Brackets</span>
                </span>
                <span className="text-[10px] font-mono text-primary font-bold">
                  {theme.cornerLines ? 'ACTIVE' : 'OFF'}
                </span>
              </div>

              <div className="flex items-center justify-between p-2 border border-border bg-card">
                <div>
                  <div className="font-medium text-xs text-foreground">Corner Bracket Lines</div>
                  <div className="text-[10px] text-muted-foreground">Tactical L-brackets on cards & containers</div>
                </div>
                <Switch
                  checked={theme.cornerLines}
                  onCheckedChange={(checked) => setCornerLines(checked)}
                />
              </div>

              <div className="flex items-center justify-between p-2 border border-border bg-card">
                <div>
                  <div className="font-medium text-xs text-foreground">Corner Neon Glow</div>
                  <div className="text-[10px] text-muted-foreground">Luminous drop-shadow flare</div>
                </div>
                <Switch
                  checked={theme.cornerLineGlow}
                  onCheckedChange={(checked) => setCornerLineGlow(checked)}
                />
              </div>
            </div>

            {/* 6. Liquid Glass Atmosphere */}
            <div className="border border-border bg-card/20 p-3 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold tracking-wider text-[11px] text-muted-foreground uppercase flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3 text-cyan-400" />
                  <span>Liquid Glass Materials</span>
                </span>
                <span className="text-[10px] font-mono text-primary font-bold">
                  {(theme.liquidGlass ?? true) ? 'ACTIVE' : 'OFF'}
                </span>
              </div>

              {/* Liquid Glass Toggle */}
              <div className="flex items-center justify-between p-2 border border-border bg-card">
                <div>
                  <div className="font-medium text-xs text-foreground">
                    Liquid Glass Material
                  </div>
                  <div className="text-[10px] text-muted-foreground">
                    Frosted blur, specular sheen & glass fills
                  </div>
                </div>
                <Switch
                  checked={theme.liquidGlass ?? true}
                  onCheckedChange={(checked) => setLiquidGlass(checked)}
                />
              </div>

              {/* Ambient Aurora Mesh Toggle */}
              <div className="flex items-center justify-between p-2 border border-border bg-card">
                <div>
                  <div className="font-medium text-xs text-foreground">
                    Ambient Fluid Aurora
                  </div>
                  <div className="text-[10px] text-muted-foreground">
                    Glowing fluid aurora mesh behind glass
                  </div>
                </div>
                <Switch
                  checked={theme.ambientLighting ?? true}
                  onCheckedChange={(checked) => setAmbientLighting(checked)}
                />
              </div>

              {/* Fluid Aurora Color Presets */}
              {(theme.ambientLighting ?? true) && (
                <div className="space-y-2 pt-2 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground font-medium text-[11px] flex items-center gap-1">
                      <Palette className="h-3 w-3 text-primary" />
                      <span>Aurora Color Palette</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5">
                    {AURORA_PRESETS.map((preset) => {
                      const isSelected =
                        theme.auroraColors &&
                        theme.auroraColors[0] === preset.colors[0] &&
                        theme.auroraColors[1] === preset.colors[1] &&
                        theme.auroraColors[2] === preset.colors[2];

                      return (
                        <button
                          key={preset.id}
                          type="button"
                          onClick={() => setAuroraColors(preset.colors)}
                          className={cn(
                            'p-1.5 text-left border transition-all flex items-center justify-between gap-1.5',
                            isSelected
                              ? 'border-primary bg-primary/10 text-primary font-bold'
                              : 'border-border bg-card hover:bg-muted text-muted-foreground'
                          )}
                        >
                          <span className="text-[10px] truncate">{preset.name}</span>
                          <div className="flex items-center gap-0.5 shrink-0">
                            {preset.colors.map((c, idx) => (
                              <span
                                key={idx}
                                className="h-2 w-2 border border-border/60"
                                style={{
                                  backgroundColor: c.startsWith('hsl(var(')
                                    ? idx === 0
                                      ? 'hsl(var(--primary))'
                                      : idx === 1
                                      ? 'hsl(var(--chart-1))'
                                      : 'hsl(var(--chart-4))'
                                    : c,
                                }}
                              />
                            ))}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Glass Frosted Blur Slider */}
              <div className="space-y-1.5 pt-1 border-t border-border/50">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground font-medium text-[11px]">Frosted Glass Blur</span>
                  <span className="font-mono bg-muted px-1.5 py-0.5 border border-border font-bold text-[11px]">
                    {theme.glassBlur ?? 16}px
                  </span>
                </div>
                <Slider
                  value={[theme.glassBlur ?? 16]}
                  min={0}
                  max={32}
                  step={2}
                  onValueChange={([val]) => setGlassBlur(val)}
                />
              </div>

              {/* Glass Transparency Slider */}
              <div className="space-y-1.5 pt-1 border-t border-border/50">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground font-medium text-[11px]">Surface Opacity</span>
                  <span className="font-mono bg-muted px-1.5 py-0.5 border border-border font-bold text-[11px]">
                    {Math.round((theme.glassOpacity ?? 0.65) * 100)}%
                  </span>
                </div>
                <Slider
                  value={[theme.glassOpacity ?? 0.65]}
                  min={0.3}
                  max={0.95}
                  step={0.05}
                  onValueChange={([val]) => setGlassOpacity(val)}
                />
              </div>
            </div>

            {/* 7. Sci-Fi Theme Presets */}
            <div className="border border-border bg-card/20 p-3 space-y-3">
              <span className="font-semibold tracking-wider text-[11px] text-muted-foreground uppercase block">
                Instant Sci-Fi Presets
              </span>

              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { id: 'zinc-cyber', name: 'Cyber Neon Cyan', icon: Zap },
                  { id: 'amber-terminal', name: 'Amber 2077', icon: Crosshair },
                  { id: 'emerald-matrix', name: 'Matrix Command', icon: Shield },
                  { id: 'crimson-alert', name: 'Crimson Alert', icon: Zap },
                  { id: 'default-sharp', name: 'Pitch Monotone', icon: Sliders },
                ].map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => selectPreset(preset.id)}
                    className={cn(
                      'p-2 text-left border transition-all flex items-center gap-1.5',
                      theme.id === preset.id
                        ? 'border-primary bg-primary/10 text-primary font-bold'
                        : 'border-border bg-card hover:bg-muted text-muted-foreground'
                    )}
                  >
                    <preset.icon className="h-3 w-3 shrink-0" />
                    <span className="text-[11px] truncate">{preset.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================= OTHER TAB ================= */}
        {activeEditorTab === 'other' && (
          <div className="space-y-4">
            {/* 1. HSL ADJUSTMENTS */}
            <div className="border border-border bg-card/20 p-3 space-y-3">
              <button
                type="button"
                onClick={() => setHslOpen(!hslOpen)}
                className="w-full flex items-center justify-between font-semibold tracking-wider text-[11px] text-muted-foreground uppercase"
              >
                <div className="flex items-center gap-1.5">
                  <Palette className="h-3.5 w-3.5 text-primary" />
                  <span>HSL Color Matrix</span>
                </div>
                <span className="text-[10px] font-mono text-primary font-bold">
                  {theme.hueShift}°
                </span>
              </button>

              {hslOpen && (
                <div className="space-y-3 pt-2">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground font-medium text-[11px]">Hue Shift</span>
                      <span className="font-mono bg-muted px-1.5 py-0.5 border border-border font-bold text-[11px]">
                        {theme.hueShift}°
                      </span>
                    </div>
                    <Slider
                      value={[theme.hueShift]}
                      min={0}
                      max={360}
                      step={1}
                      onValueChange={([val]) => setHueShift(val)}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground font-medium text-[11px]">Saturation Multiplier</span>
                      <span className="font-mono bg-muted px-1.5 py-0.5 border border-border font-bold text-[11px]">
                        {Math.round(theme.saturationMultiplier * 100)}%
                      </span>
                    </div>
                    <Slider
                      value={[theme.saturationMultiplier]}
                      min={0}
                      max={2}
                      step={0.05}
                      onValueChange={([val]) => setSaturationMultiplier(val)}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground font-medium text-[11px]">Lightness Multiplier</span>
                      <span className="font-mono bg-muted px-1.5 py-0.5 border border-border font-bold text-[11px]">
                        {Math.round(theme.lightnessMultiplier * 100)}%
                      </span>
                    </div>
                    <Slider
                      value={[theme.lightnessMultiplier]}
                      min={0.5}
                      max={1.5}
                      step={0.05}
                      onValueChange={([val]) => setLightnessMultiplier(val)}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* 2. RADIUS */}
            <div className="border border-border bg-card/20 p-3 space-y-3">
              <button
                type="button"
                onClick={() => setRadiusOpen(!radiusOpen)}
                className="w-full flex items-center justify-between font-semibold tracking-wider text-[11px] text-muted-foreground uppercase"
              >
                <span>Border Radius</span>
                <span className="text-[10px] font-mono text-primary font-bold">{theme.radius}rem</span>
              </button>

              {radiusOpen && (
                <div className="space-y-2 pt-2">
                  <div className="p-2 border border-border/80 bg-muted/20 text-[11px] text-muted-foreground">
                    Notice: @boredkevin/ui specifies 0rem for strict sharp corners.
                  </div>
                  <Slider
                    value={[theme.radius]}
                    min={0}
                    max={1}
                    step={0.125}
                    onValueChange={([val]) => setRadius(val)}
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= COLORS TAB ================= */}
        {activeEditorTab === 'colors' && (
          <div className="space-y-3">
            <div className="p-2 border border-border bg-card/30 text-[11px] text-muted-foreground">
              Direct live token override. Mode: <span className="text-primary font-bold">{isDark ? 'DARK' : 'LIGHT'}</span>
            </div>

            {Object.entries(isDark ? theme.dark : theme.light).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between p-2 border border-border bg-card">
                <span className="font-mono text-[11px]">{key}</span>
                <input
                  type="text"
                  value={String(value ?? '')}
                  onChange={(e) => updateColorToken(key, e.target.value, isDark ? 'dark' : 'light')}
                  className="w-32 bg-input border border-border px-2 py-0.5 text-[11px] font-mono text-right"
                />
              </div>
            ))}
          </div>
        )}

        {/* ================= TYPE TAB ================= */}
        {activeEditorTab === 'typography' && (
          <div className="space-y-2">
            {['Inter', 'Luna Obscura', 'Geist', 'JetBrains Mono', 'Outfit', 'Albatross'].map((font) => (
              <button
                key={font}
                type="button"
                onClick={() => setFontFamily(font)}
                className={cn(
                  'w-full p-2.5 text-left border flex items-center justify-between transition-colors',
                  theme.fontFamily === font
                    ? 'border-primary bg-primary/10 text-primary font-bold'
                    : 'border-border bg-card text-muted-foreground hover:bg-muted'
                )}
                style={font === 'Luna Obscura' ? { fontFamily: '"Luna Obscura", sans-serif', fontFeatureSettings: '"ss01" 1' } : { fontFamily: `"${font}", sans-serif` }}
              >
                <span>{font}</span>
                {theme.fontFamily === font && <Check className="h-3.5 w-3.5" />}
              </button>
            ))}
          </div>
        )}

        {/* ================= AI GENERATE TAB ================= */}
        {activeEditorTab === 'generate' && (
          <div className="space-y-3">
            <div className="space-y-1.5">
              <label className="font-semibold text-muted-foreground uppercase text-[11px]">
                AI Theme Prompt
              </label>
              <textarea
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                placeholder="e.g. Cyberpunk neon cyan with Perlin vector streamlines and dual chamfers..."
                className="w-full h-24 p-2 bg-input border border-border text-xs text-foreground resize-none focus:outline-none focus:border-primary"
              />
            </div>

            <Button
              variant="default"
              chamfer="dual"
              className="w-full"
              onClick={handleAiGenerate}
              disabled={isGenerating}
            >
              {isGenerating ? (
                <span>Generating Atmosphere...</span>
              ) : (
                <span className="flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Generate Sci-Fi Atmosphere</span>
                </span>
              )}
            </Button>
          </div>
        )}
      </div>
    </aside>
  );
};
