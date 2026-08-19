import React, { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import {
  Search,
  ChevronRight,
  Menu,
  X,
  Bot,
  Sparkles,
  FileCode,
  Github,
  Check,
  Copy,
  ExternalLink,
  Sliders,
  Bug,
} from 'lucide-react';
import {
  CanvasBackground,
  useTheme,
  Button,
  Badge,
  cn,
} from '@boredkevin/ui';
import { NAV_GROUPS, ALL_DOCS, getDocByPath, searchDocs, DocMeta } from '@/lib/docs-loader';
import { Header } from '@/components/layout/Header';
import { CommandSearchModal } from '@/components/modals/CommandSearchModal';
import { CodeModal } from '@/components/modals/CodeModal';
import { ImportModal } from '@/components/modals/ImportModal';
import { ShareModal } from '@/components/modals/ShareModal';
import { DocPagination } from '@/components/showcase/docs/DocLayout';

export const DocsLayout: React.FC = () => {
  const location = useLocation();
  const { theme } = useTheme();

  const [searchFilter, setSearchFilter] = useState('');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [codeModalOpen, setCodeModalOpen] = useState(false);
  const [importModalOpen, setImportModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string>('');
  const [copiedLlmSidebar, setCopiedLlmSidebar] = useState(false);

  // Find active doc item from route
  const currentDoc = getDocByPath(location.pathname) || ALL_DOCS[0];

  // Keyboard shortcut for Cmd+K / Ctrl+K search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter groups based on search filter input in sidebar
  const filteredGroups = NAV_GROUPS.map((group) => ({
    ...group,
    items: group.items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
        item.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
        item.rawMarkdown.toLowerCase().includes(searchFilter.toLowerCase())
    ),
  })).filter((group) => group.items.length > 0);

  // Scrollspy observer for Table of Contents
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0% -60% 0%', threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id], div[id], h2[id]');
    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, [location.pathname]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileNavOpen(false);
  }, [location.pathname]);

  const handleCopyPageMarkdown = async () => {
    try {
      await navigator.clipboard.writeText(currentDoc.rawMarkdown);
      setCopiedLlmSidebar(true);
      setTimeout(() => setCopiedLlmSidebar(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const isFullApp = theme.fullAppBackground ?? false;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans relative overflow-x-hidden">
      {/* Background */}
      {isFullApp && (
        <CanvasBackground className="fixed inset-0 pointer-events-none z-0" />
      )}

      {/* Top Main Navigation Header */}
      <Header
        onOpenCode={() => setCodeModalOpen(true)}
        onOpenImport={() => setImportModalOpen(true)}
        onOpenShare={() => setShareModalOpen(true)}
      />

      {/* Mobile Docs Nav Bar */}
      <div className="lg:hidden flex items-center justify-between p-3 border-b border-border/70 bg-card/80 backdrop-blur-md sticky top-12 z-30">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-muted-foreground uppercase">
            {currentDoc.category} &gt;
          </span>
          <span className="text-xs font-mono font-bold text-foreground truncate">
            {currentDoc.title}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSearchModalOpen(true)}
            className="p-1.5 border border-border text-muted-foreground hover:text-foreground"
            title="Search docs"
          >
            <Search className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="p-1.5 border border-border text-foreground hover:bg-muted"
          >
            {mobileNavOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Main Multi-Page Container */}
      <div className="flex-1 flex w-full max-w-[1600px] mx-auto relative z-10">
        {/* Left Sidebar Navigation */}
        <aside
          className={cn(
            'fixed inset-y-0 left-0 z-40 w-72 bg-card/95 backdrop-blur-xl border-r border-border/70 p-4 flex flex-col transition-transform duration-200 lg:static lg:w-64 xl:w-72 lg:translate-x-0 lg:bg-card/30 lg:shrink-0',
            mobileNavOpen ? 'translate-x-0 top-12 bottom-0' : '-translate-x-full lg:translate-x-0'
          )}
        >
          {/* Quick Search Button / Input */}
          <div className="mb-4 space-y-2">
            <button
              type="button"
              onClick={() => setSearchModalOpen(true)}
              className="w-full flex items-center justify-between px-2.5 py-1.5 text-xs bg-background/80 hover:bg-background border border-border text-muted-foreground hover:text-foreground font-mono transition-colors"
            >
              <div className="flex items-center gap-2">
                <Search className="h-3.5 w-3.5 text-primary" />
                <span>Search docs...</span>
              </div>
              <kbd className="text-[10px] px-1 py-0.2 bg-muted/60 border border-border/60">
                ⌘K
              </kbd>
            </button>

            {/* In-sidebar quick filter */}
            <input
              type="text"
              placeholder="Filter topics..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full bg-background/50 border border-border/60 px-2.5 py-1 text-[11px] text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary font-mono"
            />
          </div>

          {/* Navigation Links Grouped */}
          <div className="flex-1 overflow-y-auto pr-1 space-y-6">
            {filteredGroups.map((group) => (
              <div key={group.group} className="space-y-1">
                <h4 className="text-[10px] font-mono uppercase font-bold text-muted-foreground/80 tracking-wider px-2.5">
                  {group.group}
                </h4>
                <div className="space-y-0.5">
                  {group.items.map((item) => {
                    const Icon = item.icon || ChevronRight;
                    const isActive =
                      location.pathname === item.path ||
                      (item.id === 'overview' && location.pathname === '/docs');

                    return (
                      <Link
                        key={item.id}
                        to={item.path}
                        onClick={() => setMobileNavOpen(false)}
                        className={cn(
                          'w-full text-left px-2.5 py-1.5 text-xs font-medium transition-colors flex items-center justify-between border-l-2',
                          isActive
                            ? 'border-primary bg-primary/10 text-primary font-semibold'
                            : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/40'
                        )}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <Icon
                            className={cn(
                              'h-3.5 w-3.5 shrink-0',
                              isActive ? 'text-primary' : 'text-muted-foreground'
                            )}
                          />
                          <span className="truncate">{item.title}</span>
                        </div>
                        {item.badge && (
                          <span className="text-[9px] font-mono px-1 py-0.2 border uppercase bg-muted/60 text-muted-foreground border-border/50">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Footer Link to Theme Studio */}
          <div className="pt-3 border-t border-border/60 space-y-1.5">
            <Link
              to="/"
              className="flex items-center justify-between px-2.5 py-1.5 text-xs font-mono border border-border bg-card/60 hover:bg-muted/40 text-foreground transition-colors"
            >
              <div className="flex items-center gap-2">
                <Sliders className="h-3.5 w-3.5 text-primary" />
                <span>Theme Studio</span>
              </div>
              <ChevronRight className="h-3 w-3 text-muted-foreground" />
            </Link>

            <a
              href="/llms.txt"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-2.5 py-1 text-[11px] font-mono text-muted-foreground hover:text-primary transition-colors"
            >
              <div className="flex items-center gap-1.5">
                <FileCode className="h-3 w-3 text-primary" />
                <span>/llms.txt</span>
              </div>
              <ExternalLink className="h-2.5 w-2.5" />
            </a>
          </div>
        </aside>

        {/* Center Main Content Area */}
        <main className="flex-1 min-w-0 px-4 sm:px-8 lg:px-12 py-8 overflow-y-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground mb-6">
            <Link to="/docs" className="hover:text-foreground transition-colors">
              Docs
            </Link>
            <span>/</span>
            <span className="text-muted-foreground/80">{currentDoc.category}</span>
            <span>/</span>
            <span className="text-foreground font-bold">{currentDoc.title}</span>
          </nav>

          {/* Active Documentation Route Page Content */}
          <article className="max-w-4xl">
            <Outlet />
            <DocPagination />
          </article>
        </main>

        {/* Right Sidebar: Table of Contents & Tools */}
        <aside className="hidden xl:block w-64 shrink-0 p-6 space-y-6 sticky top-12 h-[calc(100vh-3rem)] overflow-y-auto border-l border-border/50 text-xs">
          {/* Table of Contents (On This Page) */}
          {currentDoc.toc && currentDoc.toc.length > 0 && (
            <div className="space-y-2.5">
              <h4 className="text-[11px] font-mono uppercase font-bold text-foreground tracking-wider">
                On This Page
              </h4>
              <nav className="space-y-1 border-l border-border/60 pl-2">
                {currentDoc.toc.map((toc) => {
                  const isSectionActive = activeSectionId === toc.id;
                  return (
                    <a
                      key={toc.id}
                      href={`#${toc.id}`}
                      className={cn(
                        'block py-1 text-xs transition-colors truncate',
                        isSectionActive
                          ? 'text-primary font-bold -ml-[9px] border-l-2 border-primary pl-2'
                          : 'text-muted-foreground hover:text-foreground'
                      )}
                    >
                      {toc.title}
                    </a>
                  );
                })}
              </nav>
            </div>
          )}

          {/* Quick Markdown Context Tool */}
          <div className="p-3 border border-border bg-card/60 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono font-bold text-foreground">
              <span>Markdown Context</span>
              <span className="text-[10px] text-muted-foreground font-normal">.md</span>
            </div>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Copy this page's raw markdown file for Cursor, Claude, or ChatGPT:
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyPageMarkdown}
              className="w-full h-7 text-xs font-mono gap-1.5 border-border hover:border-primary text-foreground"
            >
              {copiedLlmSidebar ? (
                <>
                  <Check className="h-3 w-3 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" />
                  <span>Copy Page Markdown</span>
                </>
              )}
            </Button>
          </div>

          {/* Machine-Readable /llms.txt link */}
          <div className="p-3 border border-border/60 bg-muted/20 space-y-1 font-mono text-[11px]">
            <div className="text-muted-foreground font-bold">Standard Endpoint</div>
            <a
              href="/llms.txt"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between text-muted-foreground hover:text-primary transition-colors"
            >
              <span>/llms.txt</span>
              <ExternalLink className="h-2.5 w-2.5" />
            </a>
          </div>

          {/* Community Links */}
          <div className="space-y-2 text-[11px] font-mono text-muted-foreground">
            <a
              href="https://github.com/boredkevin/ui"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              <span>GitHub Repository</span>
            </a>
            <a
              href="https://github.com/boredkevin/ui/issues"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Bug className="h-3.5 w-3.5" />
              <span>Report Issue</span>
            </a>
          </div>
        </aside>
      </div>

      {/* Global Modals */}
      <CommandSearchModal
        open={searchModalOpen}
        onOpenChange={setSearchModalOpen}
      />
      <CodeModal open={codeModalOpen} onOpenChange={setCodeModalOpen} />
      <ImportModal open={importModalOpen} onOpenChange={setImportModalOpen} />
      <ShareModal open={shareModalOpen} onOpenChange={setShareModalOpen} />
    </div>
  );
};

export default DocsLayout;
