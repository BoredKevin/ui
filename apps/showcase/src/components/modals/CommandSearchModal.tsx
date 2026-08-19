import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronRight, CornerDownLeft } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Badge,
  cn,
} from '@boredkevin/ui';
import { searchDocs, DocMeta } from '@/lib/docs-loader';

interface CommandSearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CommandSearchModal: React.FC<CommandSearchModalProps> = ({
  open,
  onOpenChange,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const filteredItems = searchDocs(query);

  useEffect(() => {
    if (open) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleSelect = (item: DocMeta) => {
    onOpenChange(false);
    navigate(item.path);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        handleSelect(filteredItems[selectedIndex]);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 max-w-xl overflow-hidden border border-border bg-card/95 backdrop-blur-xl shadow-2xl">
        <DialogHeader className="sr-only">
          <DialogTitle>Search Documentation</DialogTitle>
        </DialogHeader>

        {/* Search Input Bar */}
        <div className="flex items-center px-4 border-b border-border/70 bg-background/50">
          <Search className="h-4 w-4 text-primary shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search docs, components, tokens, guides... (e.g. Button, theming, llms)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none font-mono"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-[10px] text-muted-foreground hover:text-foreground px-1.5 py-0.5 border border-border"
            >
              Clear
            </button>
          )}
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-xs text-muted-foreground font-mono space-y-2">
              <p>No documentation found for "{query}"</p>
              <p className="text-[11px] text-muted-foreground/70">
                Try searching for "button", "card", "theming", or "installation"
              </p>
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isSelected = index === selectedIndex;
              const Icon = item.icon || ChevronRight;

              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={cn(
                    'flex items-center justify-between px-3 py-2.5 cursor-pointer transition-all border text-left',
                    isSelected
                      ? 'border-primary bg-primary/10 text-foreground'
                      : 'border-transparent text-muted-foreground hover:bg-muted/40'
                  )}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={cn(
                        'p-1.5 border shrink-0',
                        isSelected
                          ? 'border-primary bg-primary/20 text-primary'
                          : 'border-border bg-card text-muted-foreground'
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="truncate">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-foreground truncate font-sans">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-mono text-muted-foreground uppercase px-1 py-0.2 bg-muted/40 border border-border/40">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-[11px] text-muted-foreground truncate mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-2">
                    {item.badge && (
                      <Badge variant="outline" className="text-[9px] font-mono">
                        {item.badge}
                      </Badge>
                    )}
                    {isSelected && (
                      <CornerDownLeft className="h-3.5 w-3.5 text-primary" />
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer info bar */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-border/60 bg-muted/20 text-[11px] font-mono text-muted-foreground">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1 py-0.5 bg-card border border-border text-[10px]">↑</kbd>{' '}
              <kbd className="px-1 py-0.5 bg-card border border-border text-[10px]">↓</kbd> to navigate
            </span>
            <span>
              <kbd className="px-1 py-0.5 bg-card border border-border text-[10px]">↵</kbd> to select
            </span>
          </div>
          <span>
            <kbd className="px-1 py-0.5 bg-card border border-border text-[10px]">ESC</kbd> to close
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CommandSearchModal;
