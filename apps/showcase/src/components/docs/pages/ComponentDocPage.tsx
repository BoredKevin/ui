import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

// Component Docs
import { ButtonDoc } from '@/components/showcase/docs/components/ButtonDoc';
import { CardDoc } from '@/components/showcase/docs/components/CardDoc';
import { CornerEdgesDoc } from '@/components/showcase/docs/components/CornerEdgesDoc';
import { InputDoc } from '@/components/showcase/docs/components/InputDoc';
import { BadgeDoc } from '@/components/showcase/docs/components/BadgeDoc';
import { DialogDoc } from '@/components/showcase/docs/components/DialogDoc';
import { TabsDoc } from '@/components/showcase/docs/components/TabsDoc';
import { DropdownMenuDoc } from '@/components/showcase/docs/components/DropdownMenuDoc';
import { AccordionDoc } from '@/components/showcase/docs/components/AccordionDoc';
import { SliderDoc } from '@/components/showcase/docs/components/SliderDoc';
import { SwitchDoc } from '@/components/showcase/docs/components/SwitchDoc';
import { AvatarDoc } from '@/components/showcase/docs/components/AvatarDoc';
import { CalendarDoc } from '@/components/showcase/docs/components/CalendarDoc';
import { TableDoc } from '@/components/showcase/docs/components/TableDoc';
import { TooltipDoc } from '@/components/showcase/docs/components/TooltipDoc';
import { SeparatorDoc } from '@/components/showcase/docs/components/SeparatorDoc';

const COMPONENT_MAP: Record<string, React.ComponentType> = {
  button: ButtonDoc,
  card: CardDoc,
  'corner-edges': CornerEdgesDoc,
  input: InputDoc,
  badge: BadgeDoc,
  dialog: DialogDoc,
  tabs: TabsDoc,
  'dropdown-menu': DropdownMenuDoc,
  accordion: AccordionDoc,
  slider: SliderDoc,
  switch: SwitchDoc,
  avatar: AvatarDoc,
  calendar: CalendarDoc,
  table: TableDoc,
  tooltip: TooltipDoc,
  separator: SeparatorDoc,
};

export const ComponentDocPage: React.FC = () => {
  const { componentId } = useParams<{ componentId: string }>();

  if (!componentId || !COMPONENT_MAP[componentId]) {
    return <Navigate to="/docs/components/button" replace />;
  }

  const Component = COMPONENT_MAP[componentId];
  return <Component />;
};

export default ComponentDocPage;
