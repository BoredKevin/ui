import React, { useState } from 'react';
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
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { THEME_PRESETS } from '@/theme/tokens';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  onOpenCode: () => void;
  onOpenImport: () => void;
  onOpenShare: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCode,
  onOpenImport,
  onOpenShare,
}) => {
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

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.25)]">
      {/* Top Navbar */}
      <div className="flex h-12 items-center justify-between px-3 md:px-5">
        {/* Left: Brand */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center gap-2.5">
            {/* Logo */}
            <img
              src="/BKVN.png"
              alt="BoredKevin Logo"
              className="h-5 w-5 object-contain rounded-none select-none"
            />
            <span
              className="font-luna text-base tracking-wide text-foreground select-none"
              style={{ fontFeatureSettings: '"ss01" 1' }}
            >
              @boredkevin/ui
            </span>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-1.5 md:space-x-2">
          {/* GitHub Star Badge */}
          <a
            href="https://github.com/boredkevin/ui"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground px-2.5 py-1 border border-border bg-card/50 transition-colors"
          >
            <Github className="h-3.5 w-3.5" />
            <span className="font-medium">10.3k</span>
          </a>

          {/* Discord */}
          <a
            href="#"
            className="hidden md:inline-flex items-center justify-center text-muted-foreground hover:text-foreground h-8 w-8 transition-colors"
            title="Discord"
          >
            <svg
              className="h-4 w-4 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028z" />
            </svg>
          </a>

          {/* X */}
          <a
            href="#"
            className="hidden md:inline-flex items-center justify-center text-muted-foreground hover:text-foreground h-8 w-8 transition-colors"
            title="X (Twitter)"
          >
            <svg
              className="h-3.5 w-3.5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* Export to Figma */}
          <button
            type="button"
            className="hidden lg:inline-flex items-center gap-1.5 text-xs text-foreground px-2.5 py-1 border border-border bg-secondary/50 hover:bg-secondary transition-colors"
          >
            <Layers className="h-3.5 w-3.5 text-pink-400" />
            <span>Export to Figma</span>
          </button>

          {/* Sign In */}
          <button
            type="button"
            className="text-xs text-muted-foreground hover:text-foreground px-2.5 py-1 transition-colors"
          >
            Sign In
          </button>

          {/* Sign Up */}
          <Button variant="white" size="sm" className="text-xs h-7 px-3">
            Sign Up
          </Button>
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
