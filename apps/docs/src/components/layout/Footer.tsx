import React from 'react';
import { Github, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-border/60 py-8 px-4 text-xs text-muted-foreground">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <img src="/BKVN.png" alt="BKVN Logo" className="h-4 w-4 object-contain opacity-70" />
          <span className="font-mono">
            @boredkevin/ui &mdash; Built with precision rectangular geometry and Radix UI.
          </span>
        </div>

        <div className="flex items-center gap-4 font-mono text-[11px]">
          <a
            href="https://github.com/boredkevin/ui"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://github.com/boredkevin/ui/blob/main/LICENSE"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            MIT License
          </a>
          <a
            href="https://v0.dev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            v0.dev
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
