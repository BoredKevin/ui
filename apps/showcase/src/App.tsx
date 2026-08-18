import React, { useState } from 'react';
import { ExternalLink, Maximize2, MoreHorizontal } from 'lucide-react';
import { ThemeProvider, useTheme, ShowcaseTab, CanvasBackground, cn } from '@boredkevin/ui';
import { Header } from '@/components/layout/Header';
import { ThemeEditor } from '@/components/editor/ThemeEditor';
import { CardsView } from '@/components/showcase/CardsView';
import { DashboardView } from '@/components/showcase/DashboardView';
import { ApplicationView } from '@/components/showcase/ApplicationView';
import { MarketingView } from '@/components/showcase/MarketingView';
import { CustomView } from '@/components/showcase/CustomView';
import { DocumentationView } from '@/components/showcase/DocumentationView';
import { CodeModal } from '@/components/modals/CodeModal';
import { ImportModal } from '@/components/modals/ImportModal';
import { ShareModal } from '@/components/modals/ShareModal';

const MainLayout: React.FC = () => {
  const { theme, activeShowcaseTab, setActiveShowcaseTab } = useTheme();

  const [codeModalOpen, setCodeModalOpen] = useState(false);
  const [importModalOpen, setImportModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [fullscreenPreview, setFullscreenPreview] = useState(false);

  const isFullApp = theme.fullAppBackground ?? false;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans relative overflow-x-hidden">
      {/* Full App Scope Dynamic Background (if fullAppBackground is enabled) */}
      {isFullApp && (
        <CanvasBackground
          className="fixed inset-0 pointer-events-none z-0"
        />
      )}

      {/* Top Header */}
      <Header
        onOpenCode={() => setCodeModalOpen(true)}
        onOpenImport={() => setImportModalOpen(true)}
        onOpenShare={() => setShareModalOpen(true)}
      />

      {/* Main Body */}
      <div className="flex-1 flex flex-col lg:flex-row relative z-10">
        {/* Left Sidebar (Editor) - Hidden if in Docs or Fullscreen */}
        {!fullscreenPreview && activeShowcaseTab !== 'documentation' && <ThemeEditor />}

        {/* Right Canvas / Showcase Area */}
        <main
          className={cn(
            'flex-1 flex flex-col min-w-0 relative overflow-hidden transition-colors',
            isFullApp ? 'bg-transparent' : 'bg-background/60'
          )}
        >
          {/* Showcase Scope Dynamic Canvas Background (if fullAppBackground is disabled) */}
          {!isFullApp && (
            <CanvasBackground
              className="absolute inset-0 pointer-events-none z-0"
            />
          )}

          {/* Sub Navigation Bar above Showcase */}
          <div className="flex h-11 items-center justify-between border-b border-border/60 bg-card/20 backdrop-blur-md px-4 relative z-10">
            {/* View Tabs: Docs, Custom, Cards (default), Dashboard, Application, Marketing */}
            <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto">
              {[
                { id: 'documentation', label: 'Docs', highlight: true },
                { id: 'custom', label: 'Custom' },
                { id: 'cards', label: 'Cards' },
                { id: 'dashboard', label: 'Dashboard' },
                { id: 'application', label: 'Application' },
                { id: 'marketing', label: 'Marketing' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveShowcaseTab(tab.id as ShowcaseTab)}
                  className={cn(
                    'px-3 py-1 text-xs font-medium transition-colors border flex items-center gap-1.5',
                    activeShowcaseTab === tab.id
                      ? 'border-border bg-card text-foreground font-semibold shadow-sm'
                      : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/40',
                    tab.id === 'documentation' && activeShowcaseTab !== 'documentation' && 'text-primary hover:text-primary font-mono'
                  )}
                >
                  {tab.id === 'documentation' && <span className="h-1.5 w-1.5 bg-primary inline-block" />}
                  <span>{tab.label}</span>
                </button>
              ))}

              <button
                type="button"
                className="p-1 text-muted-foreground hover:text-foreground"
                title="More views"
              >
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </div>

            {/* Right Canvas Actions */}
            <div className="flex items-center space-x-2">
              <a
                href="https://v0.dev"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground px-2 py-1 transition-colors"
              >
                <span>Open in v0</span>
                <ExternalLink className="h-3 w-3" />
              </a>

              <button
                type="button"
                onClick={() => setFullscreenPreview(!fullscreenPreview)}
                className="p-1.5 text-muted-foreground hover:text-foreground border border-border bg-card/30 hover:bg-card transition-colors"
                title={fullscreenPreview ? 'Show Sidebar' : 'Maximize Canvas'}
              >
                <Maximize2 className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Active View Component */}
          <div className="flex-1 overflow-y-auto pb-12 relative z-10">
            {activeShowcaseTab === 'documentation' && <DocumentationView />}
            {activeShowcaseTab === 'cards' && <CardsView />}
            {activeShowcaseTab === 'dashboard' && <DashboardView />}
            {activeShowcaseTab === 'application' && <ApplicationView />}
            {activeShowcaseTab === 'marketing' && <MarketingView />}
            {activeShowcaseTab === 'custom' && <CustomView />}
          </div>
        </main>
      </div>

      {/* Modals */}
      <CodeModal open={codeModalOpen} onOpenChange={setCodeModalOpen} />
      <ImportModal open={importModalOpen} onOpenChange={setImportModalOpen} />
      <ShareModal open={shareModalOpen} onOpenChange={setShareModalOpen} />
    </div>
  );
};

export function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
