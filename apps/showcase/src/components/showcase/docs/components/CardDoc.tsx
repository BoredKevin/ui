import React from 'react';
import { DocHeader, DocSection, ComponentPreview, PropsTable } from '../DocLayout';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  Badge,
  Input,
} from '@boredkevin/ui';
import { Bell, ShieldAlert, Cpu } from 'lucide-react';

export const CardDoc: React.FC = () => {
  return (
    <div className="space-y-10 max-w-4xl mx-auto pb-16">
      <DocHeader
        title="Card"
        description="Displays a sharp card container with optional telemetry HUD markers, header, title, description, body content, and action footer."
        sourcePath="packages/ui/src/components/ui/card.tsx"
      />

      {/* 1. Basic Card with Telemetry */}
      <DocSection
        title="Card with Sci-Fi Telemetry Tag"
        description="Pass the telemetry prop to render a high-tech monospace HUD tracking tag in the corner of the card."
      >
        <ComponentPreview
          code={`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  Badge,
} from '@boredkevin/ui';

export function TelemetryCardExample() {
  return (
    <Card telemetry="SYS.SEC-04" className="w-full max-w-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="outline">ACTIVE NODE</Badge>
          <span className="text-xs text-muted-foreground font-mono">192.168.1.1</span>
        </div>
        <CardTitle className="text-lg font-bold">Security Firewall</CardTitle>
        <CardDescription>
          Real-time packet inspection and intrusion prevention system.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-xs text-muted-foreground">
          Zero threats detected in the last 24 hours across all endpoints.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">Logs</Button>
        <Button variant="cyber" size="sm">Scan Now</Button>
      </CardFooter>
    </Card>
  );
}`}
        >
          <Card telemetry="SYS.SEC-04" className="w-full max-w-md">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="outline">ACTIVE NODE</Badge>
                <span className="text-xs text-muted-foreground font-mono">192.168.1.1</span>
              </div>
              <CardTitle className="text-lg font-bold">Security Firewall</CardTitle>
              <CardDescription>
                Real-time packet inspection and intrusion prevention system.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-xs text-muted-foreground">
                Zero threats detected in the last 24 hours across all endpoints.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">Logs</Button>
              <Button variant="cyber" size="sm">Scan Now</Button>
            </CardFooter>
          </Card>
        </ComponentPreview>
      </DocSection>

      {/* Props Reference */}
      <PropsTable
        props={[
          {
            name: 'telemetry',
            type: 'string',
            defaultValue: 'undefined',
            description: 'Optional sci-fi HUD code (e.g., "SYS.01") rendered at the top-right corner.',
          },
          {
            name: 'className',
            type: 'string',
            defaultValue: 'undefined',
            description: 'Additional CSS classes merged with card defaults.',
          },
          {
            name: 'children',
            type: 'React.ReactNode',
            description: 'Card contents (CardHeader, CardContent, CardFooter, etc.).',
          },
        ]}
      />
    </div>
  );
};

export default CardDoc;
