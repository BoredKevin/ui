import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Moon,
  Sun,
  RotateCcw,
  Undo2,
  Redo2,
  Code2,
  Share2,
  Download,
  Bookmark,
  Github,
  ChevronDown,
  Layers,
  Check,
  Search,
  BookOpen,
  Bot,
  Sliders,
} from 'lucide-react';
import {
  useTheme,
  THEME_PRESETS,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  cn,
} from '@boredkevin/ui';

interface HeaderProps {
  onOpenCode: () => void;
  onOpenImport: () => void;
  onOpenShare: () => void;
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCode,
  onOpenImport,
  onOpenShare,
  onOpenSearch,
}) => {
  const location = useLocation();
  const {
    selectPreset,
    activePresetId,
    isDark,
    toggleThemeMode,
    undo,
    redo,
    canUndo,
    canRedo,
    resetTheme,
  } = useTheme();

  const [copiedPreset, setCopiedPreset] = useState(false);

  const activePreset =
    THEME_PRESETS.find((p) => p.id === activePresetId) || THEME_PRESETS[0];

  const isDocs = location.pathname.startsWith('/docs');
  const isStudio = location.pathname === '/' || location.pathname === '/studio';

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.25)]">
      {/* Top Navbar */}
      <div className="flex h-12 items-center justify-between px-3 md:px-5">
        {/* Left: Brand & Main Navigation */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src="/BKVN.png"
              alt="BoredKevin Logo"
              className="h-5 w-5 object-contain rounded-none select-none group-hover:opacity-80 transition-opacity"
            />
            <span
              className="font-luna text-base tracking-wide text-foreground select-none"
              style={{ fontFeatureSettings: '"ss01" 1' }}
            >
              @boredkevin/ui
            </span>
          </Link>

          {/* Top Level Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 font-mono text-xs">
            <Link
              to="/"
              className={cn(
                'px-2.5 py-1 transition-colors border flex items-center gap-1.5',
                isStudio
                  ? 'border-border bg-card text-foreground font-semibold shadow-sm'
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/30'
              )}
            >
              <Sliders className="h-3 w-3 text-primary" />
              <span>Studio</span>
            </Link>

            <Link
              to="/docs"
              className={cn(
                'px-2.5 py-1 transition-colors border flex items-center gap-1.5',
                isDocs && !location.pathname.startsWith('/docs/components') && !location.pathname.startsWith('/docs/llm')
                  ? 'border-border bg-card text-foreground font-semibold shadow-sm'
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/30'
              )}
            >
              <BookOpen className="h-3 w-3 text-primary" />
              <span>Docs</span>
            </Link>
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-1.5 md:space-x-2">
          {/* GitHub Button */}
          <a
            href="https://github.com/boredkevin/ui"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground px-2.5 py-1 border border-border bg-card/50 hover:bg-card transition-colors"
          >
            <Github className="h-3.5 w-3.5" />
            <span className="font-medium">GitHub</span>
          </a>
        </div>
      </div>

      {/* Sub Header / Control Bar */}
      <div className="flex h-10 items-center justify-between border-t border-border/60 bg-background/50 backdrop-blur-md px-3 md:px-5">
        {/* Left: Preset Selector */}
        <div className="flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-2 text-xs font-mono font-medium px-2 py-1 bg-card border border-border hover:bg-accent transition-colors"
              >
                {/* 4 swatch squares */}
                <div className="flex items-center gap-0.5">
                  <span className="h-2 w-2 bg-foreground inline-block" />
                  <span className="h-2 w-2 bg-muted-foreground inline-block" />
                  <span className="h-2 w-2 bg-border inline-block" />
                  <span className="h-2 w-2 bg-primary inline-block" />
                </div>
                <span>{activePreset.name}</span>
                <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuLabel>Sharp Presets (0rem)</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {THEME_PRESETS.map((p) => (
                <DropdownMenuItem
                  key={p.id}
                  onClick={() => selectPreset(p.id)}
                  className="flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 border border-border"
                      style={{
                        backgroundColor:
                          p.id === 'default-sharp'
                            ? '#fff'
                            : p.id === 'zinc-cyber'
                              ? '#06b6d4'
                              : p.id === 'emerald-matrix'
                                ? '#10b981'
                                : '#f59e0b',
                      }}
                    />
                    <span>{p.name}</span>
                  </div>
                  {p.id === activePresetId && (
                    <span className="text-[10px] font-mono text-primary">
                      ACTIVE
                    </span>
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Right Toolbar: Undo, Redo, Reset, Import, Share, Save, Code */}
        <div className="flex items-center space-x-1 sm:space-x-1.5">
          {/* Theme Toggle (Dark/Light) */}
          <button
            type="button"
            onClick={toggleThemeMode}
            className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
            title={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
          >
            {isDark ? (
              <Moon className="h-3.5 w-3.5" />
            ) : (
              <Sun className="h-3.5 w-3.5 text-amber-500" />
            )}
          </button>

          {/* Undo */}
          <button
            type="button"
            onClick={undo}
            disabled={!canUndo}
            className="p-1.5 text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
            title="Undo"
          >
            <Undo2 className="h-3.5 w-3.5" />
          </button>

          {/* Redo */}
          <button
            type="button"
            onClick={redo}
            disabled={!canRedo}
            className="p-1.5 text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
            title="Redo"
          >
            <Redo2 className="h-3.5 w-3.5" />
          </button>

          {/* Reset */}
          <button
            type="button"
            onClick={resetTheme}
            className="inline-flex items-center gap-1 px-2 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            title="Reset to default theme"
          >
            <RotateCcw className="h-3 w-3" />
            <span className="hidden sm:inline">Reset</span>
          </button>

          {/* Import */}
          <button
            type="button"
            onClick={onOpenImport}
            className="inline-flex items-center gap-1 px-2 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            title="Import theme preset"
          >
            <Download className="h-3 w-3" />
            <span className="hidden sm:inline">Import</span>
          </button>

          {/* Share */}
          <button
            type="button"
            onClick={onOpenShare}
            className="inline-flex items-center gap-1 px-2 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            title="Share theme"
          >
            <Share2 className="h-3 w-3" />
            <span className="hidden sm:inline">Share</span>
          </button>

          {/* Save */}
          <button
            type="button"
            onClick={() => {
              setCopiedPreset(true);
              setTimeout(() => setCopiedPreset(false), 1500);
            }}
            className="inline-flex items-center gap-1 px-2 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            title="Save preset to browser storage"
          >
            {copiedPreset ? (
              <Check className="h-3 w-3 text-emerald-400" />
            ) : (
              <Bookmark className="h-3 w-3" />
            )}
            <span className="hidden sm:inline">
              {copiedPreset ? 'Saved!' : 'Save'}
            </span>
          </button>

          {/* () Code Export Button */}
          <button
            type="button"
            onClick={onOpenCode}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-foreground bg-primary/10 hover:bg-primary/20 border border-primary/30 transition-colors"
            title="Export CSS / Tailwind & LLM Instructions"
          >
            <Code2 className="h-3.5 w-3.5 text-primary" />
            <span>&lt;&gt; Code</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
