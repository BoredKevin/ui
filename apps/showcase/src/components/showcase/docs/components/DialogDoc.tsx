import React from 'react';
import { DocHeader, DocSection, ComponentPreview, PropsTable } from '../DocLayout';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Button,
  Input,
} from '@boredkevin/ui';

export const DialogDoc: React.FC = () => {
  return (
    <div className="space-y-10 max-w-4xl mx-auto pb-16">
      <DocHeader
        title="Dialog"
        description="A modal window overlaid over the primary view, built on Radix Dialog primitive with sharp chamfers, backdrop blur, and full focus trapping."
        sourcePath="packages/ui/src/components/ui/dialog.tsx"
        radixPrimitive="@radix-ui/react-dialog"
      />

      <DocSection
        title="Interactive Dialog Demo"
        description="Click the button below to open an accessible modal dialog."
      >
        <ComponentPreview
          code={`import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Button,
  Input,
} from '@boredkevin/ui';

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="cyber">Open Security Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Security Profile</DialogTitle>
          <DialogDescription>
            Make changes to your authentication keys here. Click save when done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-1">
            <label className="text-xs font-mono text-muted-foreground">API Token Name</label>
            <Input defaultValue="PROD_SECRET_KEY_01" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="white">Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="cyber">Open Security Dialog</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Security Profile</DialogTitle>
                <DialogDescription>
                  Make changes to your authentication keys here. Click save when done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-muted-foreground">API Token Name</label>
                  <Input defaultValue="PROD_SECRET_KEY_01" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button variant="white">Save Changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ComponentPreview>
      </DocSection>

      <DocSection
        title="Accessibility & Keyboard Commands"
        description="Complies with WAI-ARIA Dialog (Modal) design pattern."
      >
        <div className="p-4 border border-border bg-card/40 space-y-2 text-xs text-muted-foreground">
          <p>• Press <kbd className="px-1.5 py-0.5 border border-border bg-muted font-mono text-[10px] text-foreground">Esc</kbd> to dismiss the dialog.</p>
          <p>• Automatically traps tab focus within the modal content while open.</p>
          <p>• Restores focus to the trigger element upon closing.</p>
        </div>
      </DocSection>
    </div>
  );
};

export default DialogDoc;
