import React from 'react';
import {
  BookOpen,
  Palette,
  Sparkles,
  Layers,
  Bot,
  Square,
  CreditCard,
  Type,
  ChevronsUpDown,
  Sliders,
  ToggleLeft,
  Calendar as CalendarIcon,
  Table as TableIcon,
  MessageSquare,
  FileCode,
  SquareChevronUp,
  Badge,
  MessageSquareWarning,
  BetweenVerticalEnd,
  SquareUserRound,
  Minus,
  List,
} from 'lucide-react';

export interface TocItem {
  id: string;
  title: string;
}

export interface DocMeta {
  id: string;
  path: string;
  filePath: string;
  title: string;
  category: 'Overview' | 'Components';
  description: string;
  badge?: string;
  icon?: React.ElementType;
  sourcePath?: string;
  radixPrimitive?: string;
  toc: TocItem[];
  rawMarkdown: string;
}

export interface NavGroup {
  group: 'Overview' | 'Components';
  items: DocMeta[];
}

// Icon mapping by doc ID
const ICON_MAP: Record<string, React.ElementType> = {
  overview: BookOpen,
  installation: BookOpen,
  theming: Palette,
  backgrounds: Sparkles,
  llms: Bot,
  button: SquareChevronUp,
  card: CreditCard,
  'corner-edges': Layers,
  input: Type,
  badge: Badge,
  dialog: MessageSquareWarning,
  tabs: BetweenVerticalEnd,
  'dropdown-menu': ChevronsUpDown,
  accordion: List,
  slider: Sliders,
  switch: ToggleLeft,
  avatar: SquareUserRound,
  calendar: CalendarIcon,
  table: TableIcon,
  tooltip: MessageSquare,
  separator: Minus,
};

// Badges by doc ID
const BADGE_MAP: Record<string, string> = {
  overview: 'Guide',
  installation: 'Setup',
  theming: 'Architecture',
  backgrounds: 'Dynamic',
  llms: 'LLMs',
  card: 'Sci-Fi',
  'corner-edges': 'HUD',
};

// Import all markdown files from the single source docs/ folder in repo root
const rawFiles = (import.meta as any).glob('../../../docs/**/*.md', {
  query: '?raw',
  eager: true,
  import: 'default',
}) as Record<string, string>;

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function parseMarkdownFile(filepath: string, rawContent: string): DocMeta {
  const isComponent = filepath.includes('/components/');
  const filename = filepath.split('/').pop()?.replace(/\.md$/, '') || '';
  const id = filename;
  const category: 'Overview' | 'Components' = isComponent ? 'Components' : 'Overview';

  const path = isComponent
    ? `/docs/components/${id}`
    : id === 'overview'
      ? '/docs'
      : `/docs/${id}`;

  // Extract title: first # Heading
  const lines = (rawContent || '').split('\n');
  let title = id.charAt(0).toUpperCase() + id.slice(1).replace(/-([a-z])/g, (_, l) => ' ' + l.toUpperCase());
  let description = '';
  const toc: TocItem[] = [];
  let sourcePath: string | undefined;
  let radixPrimitive: string | undefined;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Extract H1
    if (line.startsWith('# ') && !title) {
      title = line.replace('# ', '').trim();
      continue;
    }

    // Extract H2 for Table of Contents
    if (line.startsWith('## ')) {
      const headingText = line.replace('## ', '').trim();
      toc.push({
        id: slugify(headingText),
        title: headingText,
      });
      continue;
    }

    // Extract Source metadata
    if (line.startsWith('- **Source**:')) {
      sourcePath = line.replace('- **Source**:', '').replace(/[`*]/g, '').trim();
      continue;
    }

    // Extract Primitive metadata
    if (line.startsWith('- **Primitive**:')) {
      radixPrimitive = line.replace('- **Primitive**:', '').replace(/[`*]/g, '').trim();
      continue;
    }

    // Extract description (first non-empty, non-header line)
    if (!description && line && !line.startsWith('#') && !line.startsWith('-') && !line.startsWith('```')) {
      description = line;
    }
  }

  return {
    id,
    path,
    filePath: filepath,
    title,
    category,
    description: description || `${title} documentation and API reference.`,
    badge: BADGE_MAP[id],
    icon: ICON_MAP[id] || Square,
    sourcePath,
    radixPrimitive,
    toc,
    rawMarkdown: rawContent || `# ${title}\n\nDocumentation for ${title}.`,
  };
}

// Build all doc metadata records
const docList: DocMeta[] = [];

// Pre-defined ordering for Overview items
const OVERVIEW_ORDER = ['overview', 'installation', 'theming', 'backgrounds', 'llms'];

// Pre-defined ordering for Components
const COMPONENT_ORDER = [
  'button',
  'card',
  'corner-edges',
  'input',
  'badge',
  'dialog',
  'tabs',
  'dropdown-menu',
  'accordion',
  'slider',
  'switch',
  'avatar',
  'calendar',
  'table',
  'tooltip',
  'separator',
];

const parsedDocs: Record<string, DocMeta> = {};

for (const [filePath, content] of Object.entries(rawFiles)) {
  const doc = parseMarkdownFile(filePath, content as string);
  parsedDocs[doc.id] = doc;
}

// Sort in desired order
OVERVIEW_ORDER.forEach((id) => {
  if (parsedDocs[id]) docList.push(parsedDocs[id]);
});

COMPONENT_ORDER.forEach((id) => {
  if (parsedDocs[id]) docList.push(parsedDocs[id]);
});

export const ALL_DOCS = docList.length > 0 ? docList : [
  {
    id: 'overview',
    path: '/docs',
    filePath: 'docs/overview.md',
    title: 'Overview & Architecture',
    category: 'Overview' as const,
    description: 'A precision-crafted UI component library built on Radix UI, Tailwind CSS, and hardware-accelerated canvas backgrounds.',
    badge: 'Guide',
    icon: BookOpen,
    toc: [],
    rawMarkdown: '# Overview & Architecture\n\nA precision-crafted UI component library.',
  }
];

export const NAV_GROUPS: NavGroup[] = [
  {
    group: 'Overview',
    items: ALL_DOCS.filter((d) => d.category === 'Overview'),
  },
  {
    group: 'Components',
    items: ALL_DOCS.filter((d) => d.category === 'Components'),
  },
];

export function getDocByPath(pathname: string): DocMeta {
  if (!pathname || pathname === '/docs' || pathname === '/docs/' || pathname === '/docs/overview') {
    return ALL_DOCS.find((d) => d.id === 'overview') || ALL_DOCS[0];
  }

  // Exact path match
  const match = ALL_DOCS.find((d) => d.path === pathname || d.path === pathname.replace(/\/$/, ''));
  if (match) return match;

  // Component path match /docs/components/:id
  if (pathname.startsWith('/docs/components/')) {
    const compId = pathname.replace('/docs/components/', '').replace(/\/$/, '');
    const compMatch = ALL_DOCS.find((d) => d.id === compId);
    if (compMatch) return compMatch;
  }

  // Guide path match /docs/:id
  if (pathname.startsWith('/docs/')) {
    const guideId = pathname.replace('/docs/', '').replace(/\/$/, '');
    const guideMatch = ALL_DOCS.find((d) => d.id === guideId);
    if (guideMatch) return guideMatch;
  }

  return ALL_DOCS[0];
}

export function getDocById(id: string): DocMeta {
  return ALL_DOCS.find((d) => d.id === id) || ALL_DOCS[0];
}

export function getPrevNextDoc(currentPath: string): {
  prev?: DocMeta;
  next?: DocMeta;
} {
  const cleanPath = currentPath === '/docs/overview' ? '/docs' : currentPath;
  const index = ALL_DOCS.findIndex((item) => item.path === cleanPath);
  if (index === -1) return {};

  return {
    prev: index > 0 ? ALL_DOCS[index - 1] : undefined,
    next: index < ALL_DOCS.length - 1 ? ALL_DOCS[index + 1] : undefined,
  };
}

export function searchDocs(query: string): DocMeta[] {
  if (!query || !query.trim()) return ALL_DOCS;
  const clean = query.toLowerCase().trim();

  return ALL_DOCS.filter(
    (item) =>
      item.title.toLowerCase().includes(clean) ||
      item.description.toLowerCase().includes(clean) ||
      item.category.toLowerCase().includes(clean) ||
      item.id.toLowerCase().includes(clean) ||
      item.rawMarkdown.toLowerCase().includes(clean)
  );
}
