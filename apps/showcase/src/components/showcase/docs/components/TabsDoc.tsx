import React from 'react';
import { DocHeader, DocSection, ComponentPreview, PropsTable } from '../DocLayout';
import { Tabs, TabsList, TabsTrigger, TabsContent, Card, CardHeader, CardTitle, CardContent, Button, Input } from '@boredkevin/ui';

export const TabsDoc: React.FC = () => {
  return (
    <div className="space-y-10 max-w-4xl mx-auto pb-16">
      <DocHeader
        title="Tabs"
        description="A set of layered content panels—known as tab panels—that display one panel of content at a time with sharp rectangular indicators."
        sourcePath="packages/ui/src/components/ui/tabs.tsx"
        radixPrimitive="@radix-ui/react-tabs"
      />

      <DocSection
        title="Interactive Tabs Demo"
        description="Toggle between different tab panels."
      >
        <ComponentPreview
          code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from '@boredkevin/ui';

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="space-y-3 pt-2">
        <Input placeholder="Username" defaultValue="kevin_matrix" />
        <Button variant="cyber" className="w-full">Save Changes</Button>
      </TabsContent>
      <TabsContent value="password" className="space-y-3 pt-2">
        <Input type="password" placeholder="Current Password" />
        <Input type="password" placeholder="New Password" />
        <Button variant="white" className="w-full">Update Password</Button>
      </TabsContent>
    </Tabs>
  );
}`}
        >
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="space-y-3 pt-2">
              <Input placeholder="Username" defaultValue="kevin_matrix" />
              <Button variant="cyber" className="w-full">Save Changes</Button>
            </TabsContent>
            <TabsContent value="password" className="space-y-3 pt-2">
              <Input type="password" placeholder="Current Password" />
              <Input type="password" placeholder="New Password" />
              <Button variant="white" className="w-full">Update Password</Button>
            </TabsContent>
          </Tabs>
        </ComponentPreview>
      </DocSection>
    </div>
  );
};

export default TabsDoc;
