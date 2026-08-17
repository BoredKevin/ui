import React, { useState } from 'react';
import {
  Search,
} from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
  Input,
  Badge,
  Switch,
  Slider,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@boredkevin/ui';

export const ApplicationView: React.FC = () => {
  const [switchOn, setSwitchOn] = useState(true);
  const [sliderVal, setSliderVal] = useState([65]);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="p-4 space-y-6 max-w-[1400px] mx-auto">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Application Components
        </h2>
        <p className="text-xs text-muted-foreground">
          Explore all standard @boredkevin/ui components rendered with the active sharp theme.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Buttons & Badges */}
        <Card telemetry="UI.BTN-01">
          <CardHeader>
            <CardTitle className="text-sm font-semibold">Buttons & Chamfer Styles</CardTitle>
            <CardDescription className="text-xs">
              Customizable 45° chamfers and high-contrast tactical variants.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <Button size="sm" variant="default" chamfer="dual">Dual Notch</Button>
              <Button size="sm" variant="cyber" chamfer="top-right">Top-Right Cut</Button>
              <Button size="sm" variant="destructive" chamfer="all">All 4 Chamfered</Button>
              <Button size="sm" variant="outline" chamfer="none">0rem Sharp</Button>
              <Button size="sm" variant="white">White Bold</Button>
            </div>

            <div className="pt-2">
              <div className="text-xs font-medium text-muted-foreground pb-2 uppercase font-mono tracking-wider text-[10px]">
                // Telemetry Badges
              </div>
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="default">DEF-01</Badge>
                <Badge variant="secondary">SEC-NODES</Badge>
                <Badge variant="outline">STABLE</Badge>
                <Badge variant="success">ONLINE</Badge>
                <Badge variant="warning">ALERT.HIGH</Badge>
                <Badge variant="destructive">CRITICAL</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Inputs & Form Controls */}
        <Card telemetry="UI.INPUT-02">
          <CardHeader>
            <CardTitle className="text-sm font-semibold">Chamfered Inputs & Controls</CardTitle>
            <CardDescription className="text-xs">
              Interactive chamfered inputs, glowing focus rings, and switches.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground font-mono text-[11px]">// DUAL CHAMFER SEARCH</label>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-primary" />
                <Input chamfer="dual" className="pl-9" placeholder="Search telemetry, commands..." />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground font-mono text-[11px]">// TOP-RIGHT NOTCH INPUT</label>
              <Input chamfer="top-right" defaultValue="ACCESS_KEY_0912-ALPHA" />
            </div>

            <div className="flex items-center justify-between p-2 border border-border bg-muted/20">
              <div className="space-y-0.5">
                <div className="text-xs font-semibold text-foreground">HUD Glow Overlay</div>
                <div className="text-[11px] text-muted-foreground">
                  Render ambient laser glow on cards
                </div>
              </div>
              <Switch checked={switchOn} onCheckedChange={setSwitchOn} />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground font-mono text-[11px]">SIGNAL_GAIN</span>
                <span className="font-mono text-primary font-bold">{sliderVal[0]}%</span>
              </div>
              <Slider value={sliderVal} onValueChange={setSliderVal} max={100} step={1} />
            </div>
          </CardContent>
        </Card>

        {/* Modals & Dialogs */}
        <Card telemetry="UI.MODAL-03">
          <CardHeader>
            <CardTitle className="text-sm font-semibold">Dialogs & Menus</CardTitle>
            <CardDescription className="text-xs">
              Accessible overlay components with sharp geometry.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button className="w-full" size="sm">
                  Open Sharp Dialog
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Tactical Confirmation</DialogTitle>
                  <DialogDescription>
                    This is a sharp-cornered dialog built using Radix UI and styled with @boredkevin/ui CSS variables.
                  </DialogDescription>
                </DialogHeader>
                <div className="p-3 border border-border bg-muted/30 text-xs font-mono">
                  &gt; STATUS: ONLINE<br />
                  &gt; ENCRYPTION: AES-256-GCM<br />
                  &gt; RADIUS: 0.00 rem
                </div>
                <DialogFooter className="gap-2">
                  <Button variant="outline" size="sm" onClick={() => setDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button variant="white" size="sm" onClick={() => setDialogOpen(false)}>
                    Confirm Action
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Dropdown Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full" size="sm">
                  <span>Open Dropdown Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile Settings</DropdownMenuItem>
                <DropdownMenuItem>API Keys</DropdownMenuItem>
                <DropdownMenuItem>Billing & Usage</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-400">Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardContent>
        </Card>

        {/* Accordion Component */}
        <Card telemetry="UI.FAQ-04" className="md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-sm font-semibold">Accordion & FAQ</CardTitle>
            <CardDescription className="text-xs">
              Collapsible content items with crisp border separators.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I integrate @boredkevin/ui into my existing project?</AccordionTrigger>
                <AccordionContent>
                  Simply copy the exported CSS variables into your `globals.css` and set `--radius: 0rem`. You can also install the package via `npm install @boredkevin/ui` to import pre-configured components directly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is this compatible with Tailwind CSS v3 and v4?</AccordionTrigger>
                <AccordionContent>
                  Yes! Both Tailwind v3 HSL channel triplets and Tailwind v4 modern `@theme` color tokens are supported and generated inside the Code export modal.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I adjust the HSL hue shift and export custom colors?</AccordionTrigger>
                <AccordionContent>
                  Yes. Use the sidebar sliders to alter Hue, Saturation, and Lightness in real-time, then click the "&lt;&gt; Code" button to copy the updated CSS variables.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
