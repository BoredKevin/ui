import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import {
  ThemeConfig,
  ChamferStyle,
  BackgroundType,
  ConstellationConfig,
  PerlinConfig,
  DEFAULT_TWEAKCN_SHARP_THEME,
  THEME_PRESETS,
  BACKGROUND_PRESETS,
  applyHslAdjustments,
} from '@/theme/tokens';

export type ShowcaseTab = 'custom' | 'cards' | 'dashboard' | 'application' | 'marketing';
export type EditorTab = 'colors' | 'typography' | 'scifi' | 'other' | 'generate';

interface ThemeContextType {
  theme: ThemeConfig;
  setTheme: React.Dispatch<React.SetStateAction<ThemeConfig>>;
  activePresetId: string;
  selectPreset: (presetId: string) => void;
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
  toggleThemeMode: () => void;
  
  // Showcase Tab
  activeShowcaseTab: ShowcaseTab;
  setActiveShowcaseTab: (tab: ShowcaseTab) => void;

  // Editor Tab
  activeEditorTab: EditorTab;
  setActiveEditorTab: (tab: EditorTab) => void;

  // HSL controls
  setHueShift: (deg: number) => void;
  setSaturationMultiplier: (val: number) => void;
  setLightnessMultiplier: (val: number) => void;
  setRadius: (rem: number) => void;
  setFontFamily: (font: string) => void;
  setSpacingScale: (val: number) => void;
  setShadowLevel: (level: 'none' | 'subtle' | 'crisp' | 'hard') => void;
  
  // Sci-Fi Chamfer & Corner Line controls
  setChamferSize: (px: number) => void;
  setChamferStyle: (style: ChamferStyle) => void;
  setCornerLines: (enabled: boolean) => void;
  setCornerLineGlow: (enabled: boolean) => void;
  setCornerHighlightLength: (px: number) => void;
  
  // Liquid Glass & Atmosphere controls
  setLiquidGlass: (enabled: boolean) => void;
  setGlassBlur: (px: number) => void;
  setGlassOpacity: (opacity: number) => void;
  setAmbientLighting: (enabled: boolean) => void;
  setAuroraColors: (colors: [string, string, string]) => void;

  // Dynamic Background Controls
  setBackgroundType: (type: BackgroundType) => void;
  setFullAppBackground: (fullApp: boolean) => void;
  setShowBackgroundGrid: (show: boolean) => void;
  updateConstellationConfig: (config: Partial<ConstellationConfig>) => void;
  updatePerlinConfig: (config: Partial<PerlinConfig>) => void;
  selectBackgroundPreset: (presetId: string) => void;

  updateColorToken: (key: string, value: string, mode: 'dark' | 'light') => void;

  // History
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  resetTheme: () => void;

  // Code Export Strings
  getGlobalsCssV3: () => string;
  getGlobalsCssV4: () => string;
  getTailwindConfig: () => string;
  getThemeJson: () => string;
  importThemeJson: (jsonStr: string) => boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function getChamferClipPolygon(style: ChamferStyle, size: number): string {
  if (size <= 0 || style === 'none') return 'none';
  switch (style) {
    case 'dual':
      return `polygon(0 0, calc(100% - ${size}px) 0, 100% ${size}px, 100% 100%, ${size}px 100%, 0 calc(100% - ${size}px))`;
    case 'top-right':
      return `polygon(0 0, calc(100% - ${size}px) 0, 100% ${size}px, 100% 100%, 0 100%)`;
    case 'bottom-right':
      return `polygon(0 0, 100% 0, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, 0 100%)`;
    case 'all':
      return `polygon(${size}px 0, calc(100% - ${size}px) 0, 100% ${size}px, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, ${size}px 100%, 0 calc(100% - ${size}px), 0 ${size}px)`;
    default:
      return 'none';
  }
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeConfig>(DEFAULT_TWEAKCN_SHARP_THEME);
  const [activePresetId, setActivePresetId] = useState<string>('default-sharp');
  const [isDark, setIsDark] = useState<boolean>(true);
  const [activeShowcaseTab, setActiveShowcaseTab] = useState<ShowcaseTab>('cards');
  const [activeEditorTab, setActiveEditorTab] = useState<EditorTab>('scifi');

  // History stack
  const [history, setHistory] = useState<ThemeConfig[]>([DEFAULT_TWEAKCN_SHARP_THEME]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);

  const pushHistory = useCallback((newTheme: ThemeConfig) => {
    setHistory((prev) => {
      const upToCurrent = prev.slice(0, historyIndex + 1);
      return [...upToCurrent, newTheme];
    });
    setHistoryIndex((prev) => prev + 1);
  }, [historyIndex]);

  const selectPreset = useCallback((presetId: string) => {
    const preset = THEME_PRESETS.find((p) => p.id === presetId);
    if (preset) {
      setActivePresetId(presetId);
      setTheme(preset);
      pushHistory(preset);
    }
  }, [pushHistory]);

  const toggleThemeMode = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  const setHueShift = useCallback((deg: number) => {
    setTheme((prev) => ({ ...prev, hueShift: deg }));
  }, []);

  const setSaturationMultiplier = useCallback((val: number) => {
    setTheme((prev) => ({ ...prev, saturationMultiplier: val }));
  }, []);

  const setLightnessMultiplier = useCallback((val: number) => {
    setTheme((prev) => ({ ...prev, lightnessMultiplier: val }));
  }, []);

  const setRadius = useCallback((rem: number) => {
    setTheme((prev) => ({ ...prev, radius: rem }));
  }, []);

  const setFontFamily = useCallback((font: string) => {
    setTheme((prev) => ({ ...prev, fontFamily: font }));
  }, []);

  const setSpacingScale = useCallback((val: number) => {
    setTheme((prev) => ({ ...prev, spacingScale: val }));
  }, []);

  const setShadowLevel = useCallback((level: 'none' | 'subtle' | 'crisp' | 'hard') => {
    setTheme((prev) => ({ ...prev, shadowLevel: level }));
  }, []);

  const setChamferSize = useCallback((px: number) => {
    setTheme((prev) => ({ ...prev, chamferSize: px }));
  }, []);

  const setChamferStyle = useCallback((style: ChamferStyle) => {
    setTheme((prev) => ({ ...prev, chamferStyle: style }));
  }, []);

  const setCornerLines = useCallback((enabled: boolean) => {
    setTheme((prev) => ({ ...prev, cornerLines: enabled }));
  }, []);

  const setCornerLineGlow = useCallback((enabled: boolean) => {
    setTheme((prev) => ({ ...prev, cornerLineGlow: enabled }));
  }, []);

  const setCornerHighlightLength = useCallback((px: number) => {
    setTheme((prev) => ({ ...prev, cornerHighlightLength: px }));
  }, []);

  const setLiquidGlass = useCallback((enabled: boolean) => {
    setTheme((prev) => ({ ...prev, liquidGlass: enabled }));
  }, []);

  const setGlassBlur = useCallback((px: number) => {
    setTheme((prev) => ({ ...prev, glassBlur: px }));
  }, []);

  const setGlassOpacity = useCallback((opacity: number) => {
    setTheme((prev) => ({ ...prev, glassOpacity: opacity }));
  }, []);

  const setAmbientLighting = useCallback((enabled: boolean) => {
    setTheme((prev) => ({ ...prev, ambientLighting: enabled }));
  }, []);

  const setAuroraColors = useCallback((colors: [string, string, string]) => {
    setTheme((prev) => ({ ...prev, auroraColors: colors }));
  }, []);

  const setBackgroundType = useCallback((type: BackgroundType) => {
    setTheme((prev) => ({ ...prev, backgroundType: type }));
  }, []);

  const setFullAppBackground = useCallback((fullApp: boolean) => {
    setTheme((prev) => ({ ...prev, fullAppBackground: fullApp }));
  }, []);

  const setShowBackgroundGrid = useCallback((show: boolean) => {
    setTheme((prev) => ({ ...prev, showBackgroundGrid: show }));
  }, []);

  const updateConstellationConfig = useCallback((config: Partial<ConstellationConfig>) => {
    setTheme((prev) => ({
      ...prev,
      constellationConfig: {
        ...prev.constellationConfig,
        ...config,
      },
    }));
  }, []);

  const updatePerlinConfig = useCallback((config: Partial<PerlinConfig>) => {
    setTheme((prev) => ({
      ...prev,
      perlinConfig: {
        ...prev.perlinConfig,
        ...config,
      },
    }));
  }, []);

  const selectBackgroundPreset = useCallback((presetId: string) => {
    const preset = BACKGROUND_PRESETS.find((p) => p.id === presetId);
    if (preset) {
      setTheme((prev) => ({
        ...prev,
        backgroundType: preset.type,
        ...(preset.constellationConfig
          ? {
              constellationConfig: {
                ...prev.constellationConfig,
                ...preset.constellationConfig,
              },
            }
          : {}),
        ...(preset.perlinConfig
          ? {
              perlinConfig: {
                ...prev.perlinConfig,
                ...preset.perlinConfig,
              },
            }
          : {}),
      }));
    }
  }, []);

  const updateColorToken = useCallback((key: string, value: string, mode: 'dark' | 'light') => {
    setTheme((prev) => {
      const updated = {
        ...prev,
        [mode]: {
          ...prev[mode],
          [key]: value,
        },
      };
      pushHistory(updated);
      return updated;
    });
  }, [pushHistory]);

  const undo = useCallback(() => {
    if (historyIndex > 0) {
      const prevTheme = history[historyIndex - 1];
      setTheme(prevTheme);
      setHistoryIndex(historyIndex - 1);
    }
  }, [history, historyIndex]);

  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const nextTheme = history[historyIndex + 1];
      setTheme(nextTheme);
      setHistoryIndex(historyIndex + 1);
    }
  }, [history, historyIndex]);

  const resetTheme = useCallback(() => {
    setTheme(DEFAULT_TWEAKCN_SHARP_THEME);
    setActivePresetId('default-sharp');
    pushHistory(DEFAULT_TWEAKCN_SHARP_THEME);
  }, [pushHistory]);

  // Inject CSS variables to DOM
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }

    const currentMode = isDark ? theme.dark : theme.light;
    const {
      hueShift,
      saturationMultiplier,
      lightnessMultiplier,
      radius,
      fontFamily,
      chamferSize,
      chamferStyle,
      cornerLines,
      cornerLineGlow,
      cornerHighlightLength,
      liquidGlass,
      glassBlur,
      glassOpacity,
      ambientLighting,
      auroraColors,
    } = theme;

    // Apply color variables
    const applyToken = (varName: string, baseHsl: string) => {
      const adjusted = applyHslAdjustments(
        baseHsl,
        hueShift,
        saturationMultiplier,
        lightnessMultiplier
      );
      root.style.setProperty(varName, adjusted);
    };

    applyToken('--background', currentMode.background);
    applyToken('--foreground', currentMode.foreground);
    applyToken('--card', currentMode.card);
    applyToken('--card-foreground', currentMode.cardForeground);
    applyToken('--popover', currentMode.popover);
    applyToken('--popover-foreground', currentMode.popoverForeground);
    applyToken('--primary', currentMode.primary);
    applyToken('--primary-foreground', currentMode.primaryForeground);
    applyToken('--secondary', currentMode.secondary);
    applyToken('--secondary-foreground', currentMode.secondaryForeground);
    applyToken('--muted', currentMode.muted);
    applyToken('--muted-foreground', currentMode.mutedForeground);
    applyToken('--accent', currentMode.accent);
    applyToken('--accent-foreground', currentMode.accentForeground);
    applyToken('--destructive', currentMode.destructive);
    applyToken('--destructive-foreground', currentMode.destructiveForeground);
    applyToken('--border', currentMode.border);
    applyToken('--input', currentMode.input);
    applyToken('--ring', currentMode.ring);
    applyToken('--chart-1', currentMode.chart1);
    applyToken('--chart-2', currentMode.chart2);
    applyToken('--chart-3', currentMode.chart3);
    applyToken('--chart-4', currentMode.chart4);
    applyToken('--chart-5', currentMode.chart5);

    // Radius
    root.style.setProperty('--radius', `${radius}rem`);

    // Sci-Fi Chamfer & Corner Lines variables
    const clipPolygon = getChamferClipPolygon(chamferStyle, chamferSize);
    root.style.setProperty('--chamfer-size', `${chamferSize}px`);
    root.style.setProperty('--chamfer-clip', clipPolygon);
    root.style.setProperty('--corner-lines', cornerLines ? '1' : '0');
    root.style.setProperty('--corner-line-glow', cornerLineGlow ? '1' : '0');
    root.style.setProperty('--corner-highlight-length', `${cornerHighlightLength || 8}px`);

    // Liquid Glass & Atmosphere Tokens
    root.style.setProperty('--liquid-glass', (liquidGlass ?? true) ? '1' : '0');
    root.style.setProperty('--glass-blur', `${glassBlur ?? 16}px`);
    root.style.setProperty('--glass-opacity', `${glassOpacity ?? 0.65}`);
    root.style.setProperty('--ambient-lighting', (ambientLighting ?? true) ? '1' : '0');

    // Fluid Aurora Colors
    const curAurora = auroraColors || ['hsl(var(--primary))', 'hsl(var(--chart-1))', 'hsl(var(--chart-4))'];
    root.style.setProperty('--aurora-1', curAurora[0]);
    root.style.setProperty('--aurora-2', curAurora[1]);
    root.style.setProperty('--aurora-3', curAurora[2]);

    // Font
    root.style.fontFamily = `"${fontFamily}", system-ui, sans-serif`;
  }, [theme, isDark]);

  // Code Generators
  const getGlobalsCssV3 = useCallback(() => {
    const { hueShift, saturationMultiplier, lightnessMultiplier, radius, chamferSize, chamferStyle } = theme;
    const adjust = (val: string) =>
      applyHslAdjustments(val, hueShift, saturationMultiplier, lightnessMultiplier);

    const clipPoly = getChamferClipPolygon(chamferStyle, chamferSize);

    return `@layer base {
  :root {
    --background: ${adjust(theme.light.background)};
    --foreground: ${adjust(theme.light.foreground)};
    --card: ${adjust(theme.light.card)};
    --card-foreground: ${adjust(theme.light.cardForeground)};
    --popover: ${adjust(theme.light.popover)};
    --popover-foreground: ${adjust(theme.light.popoverForeground)};
    --primary: ${adjust(theme.light.primary)};
    --primary-foreground: ${adjust(theme.light.primaryForeground)};
    --secondary: ${adjust(theme.light.secondary)};
    --secondary-foreground: ${adjust(theme.light.secondaryForeground)};
    --muted: ${adjust(theme.light.muted)};
    --muted-foreground: ${adjust(theme.light.mutedForeground)};
    --accent: ${adjust(theme.light.accent)};
    --accent-foreground: ${adjust(theme.light.accentForeground)};
    --destructive: ${adjust(theme.light.destructive)};
    --destructive-foreground: ${adjust(theme.light.destructiveForeground)};
    --border: ${adjust(theme.light.border)};
    --input: ${adjust(theme.light.input)};
    --ring: ${adjust(theme.light.ring)};
    --chart-1: ${adjust(theme.light.chart1)};
    --chart-2: ${adjust(theme.light.chart2)};
    --chart-3: ${adjust(theme.light.chart3)};
    --chart-4: ${adjust(theme.light.chart4)};
    --chart-5: ${adjust(theme.light.chart5)};
    --radius: ${radius}rem;

    /* Sci-Fi Tactical Chamfer & Corner Lines */
    --chamfer-size: ${chamferSize}px;
    --chamfer-clip: ${clipPoly};
    --corner-highlight-length: ${theme.cornerHighlightLength || 8}px;

    /* Liquid Glass Material */
    --liquid-glass: ${(theme.liquidGlass ?? true) ? '1' : '0'};
    --glass-blur: ${theme.glassBlur ?? 16}px;
    --glass-opacity: ${theme.glassOpacity ?? 0.65};
  }

  .dark {
    --background: ${adjust(theme.dark.background)};
    --foreground: ${adjust(theme.dark.foreground)};
    --card: ${adjust(theme.dark.card)};
    --card-foreground: ${adjust(theme.dark.cardForeground)};
    --popover: ${adjust(theme.dark.popover)};
    --popover-foreground: ${adjust(theme.dark.popoverForeground)};
    --primary: ${adjust(theme.dark.primary)};
    --primary-foreground: ${adjust(theme.dark.primaryForeground)};
    --secondary: ${adjust(theme.dark.secondary)};
    --secondary-foreground: ${adjust(theme.dark.secondaryForeground)};
    --muted: ${adjust(theme.dark.muted)};
    --muted-foreground: ${adjust(theme.dark.mutedForeground)};
    --accent: ${adjust(theme.dark.accent)};
    --accent-foreground: ${adjust(theme.dark.accentForeground)};
    --destructive: ${adjust(theme.dark.destructive)};
    --destructive-foreground: ${adjust(theme.dark.destructiveForeground)};
    --border: ${adjust(theme.dark.border)};
    --input: ${adjust(theme.dark.input)};
    --ring: ${adjust(theme.dark.ring)};
    --chart-1: ${adjust(theme.dark.chart1)};
    --chart-2: ${adjust(theme.dark.chart2)};
    --chart-3: ${adjust(theme.dark.chart3)};
    --chart-4: ${adjust(theme.dark.chart4)};
    --chart-5: ${adjust(theme.dark.chart5)};
    --radius: ${radius}rem;

    /* Sci-Fi Tactical Chamfer & Corner Lines */
    --chamfer-size: ${chamferSize}px;
    --chamfer-clip: ${clipPoly};
    --corner-highlight-length: ${theme.cornerHighlightLength || 8}px;

    /* Liquid Glass Material */
    --liquid-glass: ${(theme.liquidGlass ?? true) ? '1' : '0'};
    --glass-blur: ${theme.glassBlur ?? 16}px;
    --glass-opacity: ${theme.glassOpacity ?? 0.65};
  }
}`;
  }, [theme]);

  const getGlobalsCssV4 = useCallback(() => {
    const { hueShift, saturationMultiplier, lightnessMultiplier, radius, chamferSize, chamferStyle } = theme;
    const toHsl = (val: string) => {
      const adj = applyHslAdjustments(val, hueShift, saturationMultiplier, lightnessMultiplier);
      return `hsl(${adj})`;
    };
    const clipPoly = getChamferClipPolygon(chamferStyle, chamferSize);

    return `@theme {
  --color-background: ${toHsl(theme.dark.background)};
  --color-foreground: ${toHsl(theme.dark.foreground)};
  --color-card: ${toHsl(theme.dark.card)};
  --color-card-foreground: ${toHsl(theme.dark.cardForeground)};
  --color-popover: ${toHsl(theme.dark.popover)};
  --color-popover-foreground: ${toHsl(theme.dark.popoverForeground)};
  --color-primary: ${toHsl(theme.dark.primary)};
  --color-primary-foreground: ${toHsl(theme.dark.primaryForeground)};
  --color-secondary: ${toHsl(theme.dark.secondary)};
  --color-secondary-foreground: ${toHsl(theme.dark.secondaryForeground)};
  --color-muted: ${toHsl(theme.dark.muted)};
  --color-muted-foreground: ${toHsl(theme.dark.mutedForeground)};
  --color-accent: ${toHsl(theme.dark.accent)};
  --color-accent-foreground: ${toHsl(theme.dark.accentForeground)};
  --color-destructive: ${toHsl(theme.dark.destructive)};
  --color-destructive-foreground: ${toHsl(theme.dark.destructiveForeground)};
  --color-border: ${toHsl(theme.dark.border)};
  --color-input: ${toHsl(theme.dark.input)};
  --color-ring: ${toHsl(theme.dark.ring)};
  --radius: ${radius}rem;

  --chamfer-size: ${chamferSize}px;
  --chamfer-clip: ${clipPoly};
  --corner-highlight-length: ${theme.cornerHighlightLength || 8}px;
  --glass-blur: ${theme.glassBlur ?? 16}px;
  --glass-opacity: ${theme.glassOpacity ?? 0.65};
}`;
  }, [theme]);

  const getTailwindConfig = useCallback(() => {
    return `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
};`;
  }, []);

  const getThemeJson = useCallback(() => {
    return JSON.stringify(theme, null, 2);
  }, [theme]);

  const importThemeJson = useCallback((jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed.dark && parsed.light) {
        setTheme(parsed);
        pushHistory(parsed);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }, [pushHistory]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      activePresetId,
      selectPreset,
      isDark,
      setIsDark,
      toggleThemeMode,
      activeShowcaseTab,
      setActiveShowcaseTab,
      activeEditorTab,
      setActiveEditorTab,
      setHueShift,
      setSaturationMultiplier,
      setLightnessMultiplier,
      setRadius,
      setFontFamily,
      setSpacingScale,
      setShadowLevel,
      setChamferSize,
      setChamferStyle,
      setCornerLines,
      setCornerLineGlow,
      setCornerHighlightLength,
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
      undo,
      redo,
      canUndo: historyIndex > 0,
      canRedo: historyIndex < history.length - 1,
      resetTheme,
      getGlobalsCssV3,
      getGlobalsCssV4,
      getTailwindConfig,
      getThemeJson,
      importThemeJson,
    }),
    [
      theme,
      activePresetId,
      selectPreset,
      isDark,
      toggleThemeMode,
      activeShowcaseTab,
      activeEditorTab,
      setHueShift,
      setSaturationMultiplier,
      setLightnessMultiplier,
      setRadius,
      setFontFamily,
      setSpacingScale,
      setShadowLevel,
      setChamferSize,
      setChamferStyle,
      setCornerLines,
      setCornerLineGlow,
      setCornerHighlightLength,
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
      undo,
      redo,
      historyIndex,
      history.length,
      resetTheme,
      getGlobalsCssV3,
      getGlobalsCssV4,
      getTailwindConfig,
      getThemeJson,
      importThemeJson,
    ]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
