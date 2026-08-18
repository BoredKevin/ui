import React, { useState } from 'react';
import {
  BookOpen,
  Palette,
  Sparkles,
  Layers,
  Search,
  Bot,
  Sliders,
  Square,
  ChevronsUpDown,
  CreditCard,
  Type,
  ToggleLeft,
  Calendar as CalendarIcon,
  Table as TableIcon,
  MessageSquare,
  ChevronRight,
  Menu,
  X,
} from 'lucide-react';
import { cn } from '@boredkevin/ui';

// Doc Views
import { GettingStartedDoc } from './docs/GettingStartedDoc';
import { ThemingDoc } from './docs/ThemingDoc';
import { BackgroundsDoc } from './docs/BackgroundsDoc';
import { LLMGuideDoc } from './docs/LLMGuideDoc';

// Component Doc Views
import { ButtonDoc } from './docs/components/ButtonDoc';
import { CardDoc } from './docs/components/CardDoc';
import { InputDoc } from './docs/components/InputDoc';
import { BadgeDoc } from './docs/components/BadgeDoc';
import { DialogDoc } from './docs/components/DialogDoc';
import { TabsDoc } from './docs/components/TabsDoc';
import { DropdownMenuDoc } from './docs/components/DropdownMenuDoc';
import { AccordionDoc } from './docs/components/AccordionDoc';
import { SliderDoc } from './docs/components/SliderDoc';
import { SwitchDoc } from './docs/components/SwitchDoc';
import { CornerEdgesDoc } from './docs/components/CornerEdgesDoc';
import { AvatarDoc } from './docs/components/AvatarDoc';
import { CalendarDoc } from './docs/components/CalendarDoc';
import { TableDoc } from './docs/components/TableDoc';
import { TooltipDoc } from './docs/components/TooltipDoc';
import { SeparatorDoc } from './docs/components/SeparatorDoc';

interface NavItem {
  id: string;
  label: string;
  badge?: string;
  icon?: React.ElementType;
}

interface NavGroup {
  group: string;
  items: NavItem[];
}

const NAV_GROUPS: NavGroup[] = [
  {
    group: 'Overview',
    items: [
      { id: 'getting-started', label: 'Installation & Setup', icon: BookOpen },
      { id: 'theming', label: 'Theming & Tokens', icon: Palette },
      { id: 'backgrounds', label: 'Canvas Backgrounds', badge: 'Dynamic', icon: Sparkles },
      { id: 'llm-guide', label: 'AI Agent Prompt Rules', badge: 'LLM', icon: Bot },
    ],
  },
  {
    group: 'Components',
    items: [
      { id: 'button', label: 'Button', icon: Square },
      { id: 'card', label: 'Card & Telemetry', icon: CreditCard },
      { id: 'corner-edges', label: 'CornerEdges (Sci-Fi HUD)', badge: 'New', icon: Layers },
      { id: 'input', label: 'Input', icon: Type },
      { id: 'badge', label: 'Badge', icon: Square },
      { id: 'dialog', label: 'Dialog (Modal)', icon: Square },
      { id: 'tabs', label: 'Tabs', icon: Square },
      { id: 'dropdown-menu', label: 'Dropdown Menu', icon: ChevronsUpDown },
      { id: 'accordion', label: 'Accordion', icon: ChevronsUpDown },
      { id: 'slider', label: 'Slider', icon: Sliders },
      { id: 'switch', label: 'Switch', icon: ToggleLeft },
      { id: 'avatar', label: 'Avatar', icon: Square },
      { id: 'calendar', label: 'Calendar', icon: CalendarIcon },
      { id: 'table', label: 'Table', icon: TableIcon },
      { id: 'tooltip', label: 'Tooltip', icon: MessageSquare },
      { id: 'separator', label: 'Separator', icon: Square },
    ],
  },
];

export const DocumentationView: React.FC = () => {
  const [activeDoc, setActiveDoc] = useState<string>('getting-started');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  // Filter groups by search query
  const filteredGroups = NAV_GROUPS.map((group) => ({
    ...group,
    items: group.items.filter((item) =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((group) => group.items.length > 0);

  const renderActiveDocContent = () => {
    switch (activeDoc) {
      case 'getting-started':
        return <GettingStartedDoc />;
      case 'theming':
        return <ThemingDoc />;
      case 'backgrounds':
        return <BackgroundsDoc />;
      case 'llm-guide':
        return <LLMGuideDoc />;
      case 'button':
        return <ButtonDoc />;
      case 'card':
        return <CardDoc />;
      case 'input':
        return <InputDoc />;
      case 'badge':
        return <BadgeDoc />;
      case 'dialog':
        return <DialogDoc />;
      case 'tabs':
        return <TabsDoc />;
      case 'dropdown-menu':
        return <DropdownMenuDoc />;
      case 'accordion':
        return <AccordionDoc />;
      case 'slider':
        return <SliderDoc />;
      case 'switch':
        return <SwitchDoc />;
      case 'corner-edges':
        return <CornerEdgesDoc />;
      case 'avatar':
        return <AvatarDoc />;
      case 'calendar':
        return <CalendarDoc />;
      case 'table':
        return <TableDoc />;
      case 'tooltip':
        return <TooltipDoc />;
      case 'separator':
        return <SeparatorDoc />;
      default:
        return <GettingStartedDoc />;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-8rem)] w-full">
      {/* Mobile Docs Nav Header */}
      <div className="lg:hidden flex items-center justify-between p-3 border-b border-border bg-card/70 backdrop-blur-md sticky top-0 z-20">
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-primary" />
          <span className="text-xs font-mono font-bold text-foreground">
            {NAV_GROUPS.flatMap((g) => g.items).find((i) => i.id === activeDoc)?.label || 'Documentation'}
          </span>
        </div>
        <button
          type="button"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="p-1.5 border border-border text-foreground hover:bg-muted"
        >
          {mobileNavOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={cn(
          'w-full lg:w-64 border-r border-border/70 bg-card/30 backdrop-blur-md shrink-0 flex flex-col p-4 z-10',
          mobileNavOpen ? 'block' : 'hidden lg:flex'
        )}
      >
        {/* Docs Search Filter */}
        <div className="relative mb-4">
          <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search docs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-background/80 border border-border px-2.5 py-1.5 pl-8 text-xs text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary font-mono transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-2.5 text-[10px] text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>
          )}
        </div>

        {/* Navigation Items */}
        <div className="space-y-6 overflow-y-auto pr-1">
          {filteredGroups.map((group) => (
            <div key={group.group} className="space-y-1.5">
              <h4 className="text-[11px] font-mono uppercase font-bold text-muted-foreground/80 tracking-wider px-2">
                {group.group}
              </h4>
              <div className="space-y-0.5">
                {group.items.map((item) => {
                  const Icon = item.icon || ChevronRight;
                  const isActive = activeDoc === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setActiveDoc(item.id);
                        setMobileNavOpen(false);
                      }}
                      className={cn(
                        'w-full text-left px-2.5 py-1.5 text-xs font-medium transition-colors flex items-center justify-between border-l-2',
                        isActive
                          ? 'border-primary bg-primary/10 text-primary font-semibold'
                          : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/40'
                      )}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <Icon className={cn('h-3.5 w-3.5 shrink-0', isActive ? 'text-primary' : 'text-muted-foreground')} />
                        <span className="truncate">{item.label}</span>
                      </div>
                      {item.badge && (
                        <span className="text-[9px] font-mono px-1 py-0.2 bg-muted/60 text-muted-foreground border border-border/50 uppercase">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 sm:p-10 lg:p-12 overflow-y-auto max-w-5xl">
        {renderActiveDocContent()}
      </main>
    </div>
  );
};

export default DocumentationView;
