import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@boredkevin/ui';

// Pages and Layouts
import { ShowcaseStudioPage } from '@/components/showcase/ShowcaseStudioPage';
import { DocsLayout } from '@/components/docs/DocsLayout';
import { MarkdownDocRenderer } from '@/components/docs/MarkdownDocRenderer';
import { NotFoundPage } from '@/components/layout/NotFoundPage';

export function App() {
  return (
    <ThemeProvider>
      <Routes>
        {/* Theme Studio & Canvas Showcase Route */}
        <Route path="/" element={<ShowcaseStudioPage />} />
        <Route path="/studio" element={<Navigate to="/" replace />} />

        {/* Dynamic Multi-Page Documentation Routes */}
        <Route path="/docs" element={<DocsLayout />}>
          {/* Docs Home / Overview */}
          <Route index element={<MarkdownDocRenderer />} />
          <Route path="overview" element={<Navigate to="/docs" replace />} />

          {/* Dynamic Top-Level Guides (e.g., installation, theming, backgrounds, llms) */}
          <Route path="getting-started" element={<Navigate to="/docs/installation" replace />} />
          <Route path="llm-guide" element={<Navigate to="/docs/llms" replace />} />
          <Route path=":guideId" element={<MarkdownDocRenderer />} />

          {/* Dedicated Component Documentation Routes */}
          <Route path="components/:componentId" element={<MarkdownDocRenderer />} />
          <Route
            path="components"
            element={<Navigate to="/docs/components/button" replace />}
          />
        </Route>

        {/* 404 Signal Lost Catch-all Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
