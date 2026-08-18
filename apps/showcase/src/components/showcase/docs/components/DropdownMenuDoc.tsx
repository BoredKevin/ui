import React from 'react';
import { DocHeader, DocSection, ComponentPreview } from '../DocLayout';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Button,
} from '@boredkevin/ui';
import { MoreVertical, User, Settings, LogOut, Shield } from 'lucide-react';

export const DropdownMenuDoc: React.FC = () => {
  return (
    <div className="space-y-10 max-w-4xl mx-auto pb-16">
      <DocHeader
        title="Dropdown Menu"
        description="Displays a menu to the user—such as a set of actions or functions—triggered by a button with sharp corners and keyboard focus navigation."
        sourcePath="packages/ui/src/components/ui/dropdown-menu.tsx"
        radixPrimitive="@radix-ui/react-dropdown-menu"
      />

      <DocSection
        title="Interactive Dropdown Menu"
        description="Click the button below to toggle the context menu."
      >
        <ComponentPreview
          code={`import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Button,
} from '@boredkevin/ui';

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          <span>My Profile</span>
          <MoreVertical className="h-3.5 w-3.5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2">
          <User className="h-4 w-4" />
          <span>Profile</span>
          <span className="ml-auto text-[10px] font-mono text-muted-foreground">⇧⌘P</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2">
          <Shield className="h-4 w-4" />
          <span>Security</span>
          <span className="ml-auto text-[10px] font-mono text-muted-foreground">⌘S</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2">
          <Settings className="h-4 w-4" />
          <span>Settings</span>
          <span className="ml-auto text-[10px] font-mono text-muted-foreground">⌘,</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2 text-destructive">
          <LogOut className="h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <span>My Profile</span>
                <MoreVertical className="h-3.5 w-3.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-2">
                <User className="h-4 w-4" />
                <span>Profile</span>
                <span className="ml-auto text-[10px] font-mono text-muted-foreground">⇧⌘P</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <Shield className="h-4 w-4" />
                <span>Security</span>
                <span className="ml-auto text-[10px] font-mono text-muted-foreground">⌘S</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
                <span className="ml-auto text-[10px] font-mono text-muted-foreground">⌘,</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-2 text-destructive">
                <LogOut className="h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ComponentPreview>
      </DocSection>
    </div>
  );
};

export default DropdownMenuDoc;
