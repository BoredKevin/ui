export interface ThemeColorSet {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
  chart1: string;
  chart2: string;
  chart3: string;
  chart4: string;
  chart5: string;
}

export type ChamferStyle = 'dual' | 'top-right' | 'all' | 'bottom-right' | 'none';

export type BackgroundType = 'constellations' | 'perlin-flow' | 'aurora' | 'grid' | 'none';

export type PerlinColorMode = 'theme' | 'aurora' | 'cyan' | 'emerald' | 'amber' | 'crimson' | 'monochrome' | 'custom';

export interface ConstellationConfig {
  particleCount: number;
  maxDistance: number;
  speed: number;
  starSize: number;
  starColor: string;
  lineColor: string;
  glow: boolean;
  glowColor?: string;
  interactive: boolean;
  mouseRadius: number;
  lineOpacity: number;
}

export interface PerlinConfig {
  particleCount: number;
  noiseScale: number;
  flowSpeed: number;
  trailLength: number;
  lineThickness: number;
  colorMode: PerlinColorMode;
  customColor?: string;
  customSecondaryColor?: string;
  interactive: boolean;
  mouseRadius: number;
  fadeOpacity: number;
}

export interface ThemeConfig {
  id: string;
  name: string;
  description: string;
  radius: number; // in rem, default 0
  hueShift: number; // in degrees, default 0
  saturationMultiplier: number; // 0 to 2, default 1
  lightnessMultiplier: number; // 0 to 2, default 1
  fontFamily: string; // 'Inter', 'Geist', 'JetBrains Mono', 'Outfit'
  spacingScale: number; // 1
  shadowLevel: 'none' | 'subtle' | 'crisp' | 'hard';
  // Sci-Fi HUD Tokens
  chamferSize: number; // 0 to 14px, default 6px
  chamferStyle: ChamferStyle; // 'dual' | 'top-right' | 'all' | 'bottom-right' | 'none'
  cornerLines: boolean; // bright L-bracket corner edge lines on containers/cards
  cornerLineGlow: boolean; // neon drop-shadow glow
  cornerHighlightLength: number; // corner highlight length in px, default 8px
  // Liquid Glass Tokens
  liquidGlass: boolean; // Frosted liquid glass effect on foreground UI
  glassBlur: number; // Backdrop blur in px (e.g. 16px)
  glassOpacity: number; // Glass surface opacity (e.g. 0.65)
  ambientLighting: boolean; // Dynamic fluid background aurora/mesh lighting
  auroraColors?: [string, string, string]; // Custom fluid aurora colors [Orb1, Orb2, Orb3]
  // Atmosphere & Dynamic Backgrounds
  backgroundType: BackgroundType;
  fullAppBackground: boolean;
  showBackgroundGrid: boolean;
  constellationConfig: ConstellationConfig;
  perlinConfig: PerlinConfig;
  light: ThemeColorSet;
  dark: ThemeColorSet;
}

export interface AuroraPreset {
  id: string;
  name: string;
  colors: [string, string, string];
}

export const AURORA_PRESETS: AuroraPreset[] = [
  {
    id: 'theme-dynamic',
    name: 'Theme Matched',
    colors: ['hsl(var(--primary))', 'hsl(var(--chart-1))', 'hsl(var(--chart-4))'],
  },
  {
    id: 'cyber-neon',
    name: 'Cyber Neon',
    colors: ['#06b6d4', '#8b5cf6', '#ec4899'],
  },
  {
    id: 'emerald-matrix',
    name: 'Matrix Green',
    colors: ['#10b981', '#06b6d4', '#3b82f6'],
  },
  {
    id: 'solar-flare',
    name: 'Solar Flare',
    colors: ['#f59e0b', '#ef4444', '#f97316'],
  },
  {
    id: 'deep-cosmos',
    name: 'Deep Cosmos',
    colors: ['#6366f1', '#a855f7', '#3b82f6'],
  },
  {
    id: 'crimson-abyss',
    name: 'Crimson Abyss',
    colors: ['#f43f5e', '#e11d48', '#881337'],
  },
  {
    id: 'aurora-borealis',
    name: 'Northern Lights',
    colors: ['#22d3ee', '#10b981', '#818cf8'],
  },
];

export interface BackgroundPreset {
  id: string;
  name: string;
  type: BackgroundType;
  description: string;
  constellationConfig?: Partial<ConstellationConfig>;
  perlinConfig?: Partial<PerlinConfig>;
}

export const BACKGROUND_PRESETS: BackgroundPreset[] = [
  {
    id: 'constellations-stellar',
    name: 'Celestial Web',
    type: 'constellations',
    description: 'Interactive twinkling star nodes with responsive proximity webbing',
    constellationConfig: {
      particleCount: 80,
      maxDistance: 140,
      speed: 0.7,
      starSize: 2,
      starColor: 'rgba(255, 255, 255, 0.9)',
      lineColor: 'rgba(255, 255, 255, 0.25)',
      glow: true,
      interactive: true,
      mouseRadius: 160,
      lineOpacity: 0.35,
    },
  },
  {
    id: 'constellations-dense',
    name: 'Neural Matrix Net',
    type: 'constellations',
    description: 'Dense interconnected quantum node graph with high proximity reach',
    constellationConfig: {
      particleCount: 120,
      maxDistance: 180,
      speed: 0.9,
      starSize: 2.2,
      starColor: '#06b6d4',
      lineColor: 'rgba(6, 182, 212, 0.3)',
      glow: true,
      interactive: true,
      mouseRadius: 200,
      lineOpacity: 0.45,
    },
  },
  {
    id: 'perlin-silk',
    name: 'Perlin Silk Streams',
    type: 'perlin-flow',
    description: 'Silky smooth organic streamlines flowing along mathematical noise vector currents',
    perlinConfig: {
      particleCount: 400,
      noiseScale: 0.003,
      flowSpeed: 0.8,
      trailLength: 0.08,
      lineThickness: 1.2,
      colorMode: 'theme',
      interactive: true,
      mouseRadius: 180,
      fadeOpacity: 0.05,
    },
  },
  {
    id: 'perlin-cyber-neon',
    name: 'Cyber Vector Vortex',
    type: 'perlin-flow',
    description: 'Multi-hue aurora gradient streamlines with reactive mouse vortex swirls',
    perlinConfig: {
      particleCount: 500,
      noiseScale: 0.004,
      flowSpeed: 1.1,
      trailLength: 0.06,
      lineThickness: 1.4,
      colorMode: 'aurora',
      interactive: true,
      mouseRadius: 200,
      fadeOpacity: 0.06,
    },
  },
  {
    id: 'perlin-matrix',
    name: 'Matrix Data Currents',
    type: 'perlin-flow',
    description: 'Tactical emerald energy streams tracing computational vector fields',
    perlinConfig: {
      particleCount: 450,
      noiseScale: 0.0035,
      flowSpeed: 0.9,
      trailLength: 0.08,
      lineThickness: 1.2,
      colorMode: 'emerald',
      interactive: true,
      mouseRadius: 170,
      fadeOpacity: 0.05,
    },
  },
  {
    id: 'aurora-mesh',
    name: 'Liquid Glass Aurora',
    type: 'aurora',
    description: 'Atmospheric fluid ambient light orbs drifting behind frosted glass',
  },
];

export const DEFAULT_CONSTELLATION_CONFIG: ConstellationConfig = {
  particleCount: 75,
  maxDistance: 140,
  speed: 0.7,
  starSize: 2,
  starColor: 'rgba(255, 255, 255, 0.9)',
  lineColor: 'rgba(255, 255, 255, 0.25)',
  glow: true,
  interactive: true,
  mouseRadius: 160,
  lineOpacity: 0.35,
};

export const DEFAULT_PERLIN_CONFIG: PerlinConfig = {
  particleCount: 350,
  noiseScale: 0.003,
  flowSpeed: 0.8,
  trailLength: 0.08,
  lineThickness: 1.2,
  colorMode: 'custom',
  customColor: '#06b6d4',
  customSecondaryColor: '#8b5cf6',
  interactive: true,
  mouseRadius: 180,
  fadeOpacity: 0.06,
};

// Default tweakcn sharp theme (monochrome pitch dark & crisp white)
export const DEFAULT_TWEAKCN_SHARP_THEME: ThemeConfig = {
  id: 'default-sharp',
  name: 'Default Sharp (Pitch Dark)',
  description: 'Signature tweakcn dark palette with 0px sharp corners, tactical chamfers, and cyber corner edge lines.',
  radius: 0,
  hueShift: 0,
  saturationMultiplier: 1,
  lightnessMultiplier: 1,
  fontFamily: 'Inter',
  spacingScale: 1,
  shadowLevel: 'none',
  chamferSize: 6,
  chamferStyle: 'dual',
  cornerLines: true,
  cornerLineGlow: true,
  cornerHighlightLength: 8,
  liquidGlass: true,
  glassBlur: 16,
  glassOpacity: 0.65,
  ambientLighting: true,
  auroraColors: ['hsl(var(--primary))', 'hsl(var(--chart-1))', 'hsl(var(--chart-4))'],
  backgroundType: 'constellations',
  fullAppBackground: false,
  showBackgroundGrid: true,
  constellationConfig: { ...DEFAULT_CONSTELLATION_CONFIG },
  perlinConfig: { ...DEFAULT_PERLIN_CONFIG },
  dark: {
    background: '0 0% 3.9%',
    foreground: '0 0% 98%',
    card: '0 0% 3.9%',
    cardForeground: '0 0% 98%',
    popover: '0 0% 3.9%',
    popoverForeground: '0 0% 98%',
    primary: '0 0% 98%',
    primaryForeground: '0 0% 9%',
    secondary: '0 0% 14.9%',
    secondaryForeground: '0 0% 98%',
    muted: '0 0% 14.9%',
    mutedForeground: '0 0% 63.9%',
    accent: '0 0% 14.9%',
    accentForeground: '0 0% 98%',
    destructive: '0 62.8% 30.6%',
    destructiveForeground: '0 0% 98%',
    border: '0 0% 14.9%',
    input: '0 0% 14.9%',
    ring: '0 0% 83.1%',
    chart1: '220 70% 50%',
    chart2: '160 60% 45%',
    chart3: '30 80% 55%',
    chart4: '280 65% 60%',
    chart5: '340 75% 55%',
  },
  light: {
    background: '0 0% 100%',
    foreground: '0 0% 3.9%',
    card: '0 0% 100%',
    cardForeground: '0 0% 3.9%',
    popover: '0 0% 100%',
    popoverForeground: '0 0% 3.9%',
    primary: '0 0% 9%',
    primaryForeground: '0 0% 98%',
    secondary: '0 0% 96.1%',
    secondaryForeground: '0 0% 9%',
    muted: '0 0% 96.1%',
    mutedForeground: '0 0% 45.1%',
    accent: '0 0% 96.1%',
    accentForeground: '0 0% 9%',
    destructive: '0 84.2% 60.2%',
    destructiveForeground: '0 0% 98%',
    border: '0 0% 89.8%',
    input: '0 0% 89.8%',
    ring: '0 0% 3.9%',
    chart1: '12 76% 61%',
    chart2: '173 58% 39%',
    chart3: '197 37% 24%',
    chart4: '43 74% 66%',
    chart5: '27 87% 67%',
  },
};

// Additional Sharp Theme Presets
export const THEME_PRESETS: ThemeConfig[] = [
  DEFAULT_TWEAKCN_SHARP_THEME,
  {
    id: 'zinc-cyber',
    name: 'Zinc Cyber (0rem)',
    description: 'Stealth military zinc tones with cyan neon data charts and sharp chamfers.',
    radius: 0,
    hueShift: 210,
    saturationMultiplier: 1.1,
    lightnessMultiplier: 1,
    fontFamily: 'JetBrains Mono',
    spacingScale: 1,
    shadowLevel: 'crisp',
    chamferSize: 6,
    chamferStyle: 'dual',
    cornerLines: true,
    cornerLineGlow: true,
    cornerHighlightLength: 8,
    liquidGlass: true,
    glassBlur: 16,
    glassOpacity: 0.65,
    ambientLighting: true,
    auroraColors: ['#06b6d4', '#8b5cf6', '#ec4899'],
    backgroundType: 'perlin-flow',
    fullAppBackground: false,
    showBackgroundGrid: true,
    constellationConfig: {
      ...DEFAULT_CONSTELLATION_CONFIG,
      starColor: '#06b6d4',
      lineColor: 'rgba(6, 182, 212, 0.3)',
    },
    perlinConfig: {
      ...DEFAULT_PERLIN_CONFIG,
      colorMode: 'cyan',
    },
    dark: {
      background: '240 10% 3.9%',
      foreground: '0 0% 98%',
      card: '240 10% 4.9%',
      cardForeground: '0 0% 98%',
      popover: '240 10% 3.9%',
      popoverForeground: '0 0% 98%',
      primary: '190 95% 45%',
      primaryForeground: '240 10% 3.9%',
      secondary: '240 5% 15%',
      secondaryForeground: '0 0% 98%',
      muted: '240 5% 15%',
      mutedForeground: '240 5% 65%',
      accent: '240 5% 17%',
      accentForeground: '0 0% 98%',
      destructive: '0 72% 51%',
      destructiveForeground: '0 0% 98%',
      border: '240 5% 18%',
      input: '240 5% 18%',
      ring: '190 95% 45%',
      chart1: '190 95% 45%',
      chart2: '160 84% 39%',
      chart3: '280 65% 60%',
      chart4: '35 92% 55%',
      chart5: '340 75% 55%',
    },
    light: {
      background: '0 0% 100%',
      foreground: '240 10% 3.9%',
      card: '0 0% 100%',
      cardForeground: '240 10% 3.9%',
      popover: '0 0% 100%',
      popoverForeground: '240 10% 3.9%',
      primary: '190 95% 35%',
      primaryForeground: '0 0% 98%',
      secondary: '240 5% 96%',
      secondaryForeground: '240 10% 3.9%',
      muted: '240 5% 96%',
      mutedForeground: '240 4% 46%',
      accent: '240 5% 96%',
      accentForeground: '240 10% 3.9%',
      destructive: '0 84% 60%',
      destructiveForeground: '0 0% 98%',
      border: '240 6% 90%',
      input: '240 6% 90%',
      ring: '190 95% 35%',
      chart1: '190 95% 35%',
      chart2: '173 58% 39%',
      chart3: '197 37% 24%',
      chart4: '43 74% 66%',
      chart5: '27 87% 67%',
    },
  },
  {
    id: 'emerald-matrix',
    name: 'Emerald Matrix (0rem)',
    description: 'Tactical command center green accents with cut-corner chamfers and bright corner lines.',
    radius: 0,
    hueShift: 142,
    saturationMultiplier: 1.2,
    lightnessMultiplier: 1,
    fontFamily: 'Geist',
    spacingScale: 1,
    shadowLevel: 'none',
    chamferSize: 8,
    chamferStyle: 'dual',
    cornerLines: true,
    cornerLineGlow: true,
    cornerHighlightLength: 8,
    liquidGlass: true,
    glassBlur: 16,
    glassOpacity: 0.65,
    ambientLighting: true,
    auroraColors: ['#10b981', '#06b6d4', '#3b82f6'],
    backgroundType: 'perlin-flow',
    fullAppBackground: false,
    showBackgroundGrid: true,
    constellationConfig: {
      ...DEFAULT_CONSTELLATION_CONFIG,
      starColor: '#10b981',
      lineColor: 'rgba(16, 185, 129, 0.3)',
    },
    perlinConfig: {
      ...DEFAULT_PERLIN_CONFIG,
      colorMode: 'emerald',
    },
    dark: {
      background: '140 10% 3.5%',
      foreground: '140 10% 98%',
      card: '140 10% 4.8%',
      cardForeground: '140 10% 98%',
      popover: '140 10% 3.5%',
      popoverForeground: '140 10% 98%',
      primary: '142 76% 45%',
      primaryForeground: '140 10% 3.5%',
      secondary: '140 10% 14%',
      secondaryForeground: '140 10% 98%',
      muted: '140 10% 14%',
      mutedForeground: '140 10% 60%',
      accent: '140 10% 16%',
      accentForeground: '140 10% 98%',
      destructive: '0 62.8% 30.6%',
      destructiveForeground: '0 0% 98%',
      border: '140 10% 18%',
      input: '140 10% 18%',
      ring: '142 76% 45%',
      chart1: '142 76% 45%',
      chart2: '160 60% 45%',
      chart3: '180 70% 50%',
      chart4: '120 65% 55%',
      chart5: '90 75% 50%',
    },
    light: {
      background: '0 0% 100%',
      foreground: '140 10% 3.5%',
      card: '0 0% 100%',
      cardForeground: '140 10% 3.5%',
      popover: '0 0% 100%',
      popoverForeground: '140 10% 3.5%',
      primary: '142 76% 36%',
      primaryForeground: '0 0% 98%',
      secondary: '140 10% 96%',
      secondaryForeground: '140 10% 3.5%',
      muted: '140 10% 96%',
      mutedForeground: '140 10% 45%',
      accent: '140 10% 96%',
      accentForeground: '140 10% 3.5%',
      destructive: '0 84.2% 60.2%',
      destructiveForeground: '0 0% 98%',
      border: '140 10% 90%',
      input: '140 10% 90%',
      ring: '142 76% 36%',
      chart1: '142 76% 36%',
      chart2: '173 58% 39%',
      chart3: '197 37% 24%',
      chart4: '43 74% 66%',
      chart5: '27 87% 67%',
    },
  },
  {
    id: 'amber-terminal',
    name: 'Amber Terminal (0rem)',
    description: 'Industrial warm phosphor display with sharp high-contrast cards and dual chamfers.',
    radius: 0,
    hueShift: 38,
    saturationMultiplier: 1.3,
    lightnessMultiplier: 1,
    fontFamily: 'JetBrains Mono',
    spacingScale: 1,
    shadowLevel: 'subtle',
    chamferSize: 6,
    chamferStyle: 'dual',
    cornerLines: true,
    cornerLineGlow: true,
    cornerHighlightLength: 8,
    liquidGlass: true,
    glassBlur: 16,
    glassOpacity: 0.65,
    ambientLighting: true,
    auroraColors: ['#f59e0b', '#ef4444', '#f97316'],
    backgroundType: 'constellations',
    fullAppBackground: false,
    showBackgroundGrid: true,
    constellationConfig: {
      ...DEFAULT_CONSTELLATION_CONFIG,
      starColor: '#f59e0b',
      lineColor: 'rgba(245, 158, 11, 0.3)',
    },
    perlinConfig: {
      ...DEFAULT_PERLIN_CONFIG,
      colorMode: 'amber',
    },
    dark: {
      background: '24 10% 3.9%',
      foreground: '38 20% 98%',
      card: '24 10% 5.2%',
      cardForeground: '38 20% 98%',
      popover: '24 10% 3.9%',
      popoverForeground: '38 20% 98%',
      primary: '38 92% 50%',
      primaryForeground: '24 10% 3.9%',
      secondary: '24 10% 15%',
      secondaryForeground: '38 20% 98%',
      muted: '24 10% 15%',
      mutedForeground: '38 10% 64%',
      accent: '24 10% 18%',
      accentForeground: '38 20% 98%',
      destructive: '0 62.8% 30.6%',
      destructiveForeground: '0 0% 98%',
      border: '24 10% 18%',
      input: '24 10% 18%',
      ring: '38 92% 50%',
      chart1: '38 92% 50%',
      chart2: '24 90% 55%',
      chart3: '48 95% 48%',
      chart4: '15 85% 60%',
      chart5: '0 80% 55%',
    },
    light: {
      background: '0 0% 100%',
      foreground: '24 10% 3.9%',
      card: '0 0% 100%',
      cardForeground: '24 10% 3.9%',
      popover: '0 0% 100%',
      popoverForeground: '24 10% 3.9%',
      primary: '38 92% 40%',
      primaryForeground: '0 0% 98%',
      secondary: '24 10% 96%',
      secondaryForeground: '24 10% 3.9%',
      muted: '24 10% 96%',
      mutedForeground: '24 10% 45%',
      accent: '24 10% 96%',
      accentForeground: '24 10% 3.9%',
      destructive: '0 84% 60%',
      destructiveForeground: '0 0% 98%',
      border: '24 10% 90%',
      input: '24 10% 90%',
      ring: '38 92% 40%',
      chart1: '38 92% 40%',
      chart2: '173 58% 39%',
      chart3: '197 37% 24%',
      chart4: '43 74% 66%',
      chart5: '27 87% 67%',
    },
  },
  {
    id: 'crimson-alert',
    name: 'Crimson Alert (0rem)',
    description: 'Emergency combat HUD palette with sharp red accent flares and all-corner chamfers.',
    radius: 0,
    hueShift: 0,
    saturationMultiplier: 1.4,
    lightnessMultiplier: 1,
    fontFamily: 'JetBrains Mono',
    spacingScale: 1,
    shadowLevel: 'hard',
    chamferSize: 8,
    chamferStyle: 'all',
    cornerLines: true,
    cornerLineGlow: true,
    cornerHighlightLength: 8,
    liquidGlass: true,
    glassBlur: 16,
    glassOpacity: 0.65,
    ambientLighting: true,
    auroraColors: ['#f43f5e', '#e11d48', '#881337'],
    backgroundType: 'perlin-flow',
    fullAppBackground: false,
    showBackgroundGrid: true,
    constellationConfig: {
      ...DEFAULT_CONSTELLATION_CONFIG,
      starColor: '#f43f5e',
      lineColor: 'rgba(244, 63, 94, 0.3)',
    },
    perlinConfig: {
      ...DEFAULT_PERLIN_CONFIG,
      colorMode: 'crimson',
    },
    dark: {
      background: '0 15% 4%',
      foreground: '0 0% 98%',
      card: '0 15% 5.5%',
      cardForeground: '0 0% 98%',
      popover: '0 15% 4%',
      popoverForeground: '0 0% 98%',
      primary: '0 85% 58%',
      primaryForeground: '0 0% 98%',
      secondary: '0 15% 15%',
      secondaryForeground: '0 0% 98%',
      muted: '0 15% 15%',
      mutedForeground: '0 10% 65%',
      accent: '0 15% 18%',
      accentForeground: '0 0% 98%',
      destructive: '0 85% 58%',
      destructiveForeground: '0 0% 98%',
      border: '0 20% 20%',
      input: '0 20% 20%',
      ring: '0 85% 58%',
      chart1: '0 85% 58%',
      chart2: '25 90% 55%',
      chart3: '345 80% 50%',
      chart4: '40 90% 55%',
      chart5: '280 65% 60%',
    },
    light: {
      background: '0 0% 100%',
      foreground: '0 15% 4%',
      card: '0 0% 100%',
      cardForeground: '0 15% 4%',
      popover: '0 0% 100%',
      popoverForeground: '0 15% 4%',
      primary: '0 85% 45%',
      primaryForeground: '0 0% 98%',
      secondary: '0 10% 96%',
      secondaryForeground: '0 15% 4%',
      muted: '0 10% 96%',
      mutedForeground: '0 8% 45%',
      accent: '0 10% 96%',
      accentForeground: '0 15% 4%',
      destructive: '0 85% 45%',
      destructiveForeground: '0 0% 98%',
      border: '0 15% 88%',
      input: '0 15% 88%',
      ring: '0 85% 45%',
      chart1: '0 85% 45%',
      chart2: '173 58% 39%',
      chart3: '197 37% 24%',
      chart4: '43 74% 66%',
      chart5: '27 87% 67%',
    },
  },
];

// Helper to convert HSL string (e.g. "0 0% 98%") with adjustments
export function applyHslAdjustments(
  hslStr: string,
  hueShift: number,
  satMultiplier: number,
  lightMultiplier: number
): string {
  const parts = hslStr.trim().split(/\s+/);
  if (parts.length < 3) return hslStr;

  let h = parseFloat(parts[0]);
  let s = parseFloat(parts[1].replace('%', ''));
  let l = parseFloat(parts[2].replace('%', ''));

  if (isNaN(h) || isNaN(s) || isNaN(l)) return hslStr;

  // Apply hue shift
  h = (h + hueShift) % 360;
  if (h < 0) h += 360;

  // Apply saturation multiplier
  s = Math.min(100, Math.max(0, s * satMultiplier));

  // Apply lightness multiplier (anchor around baseline)
  l = Math.min(100, Math.max(0, l * lightMultiplier));

  return `${Math.round(h)} ${Math.round(s * 10) / 10}% ${Math.round(l * 10) / 10}%`;
}
