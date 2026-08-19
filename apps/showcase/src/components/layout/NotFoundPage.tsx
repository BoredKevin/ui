import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, Badge, ConstellationsBackground } from '@boredkevin/ui';
import { Terminal, Home, BookOpen, Bot } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      <ConstellationsBackground particleCount={50} interactive />

      <Card telemetry="ERR.404-NOT-FOUND" cornerLines className="w-full max-w-lg relative z-10 border-destructive/40 bg-card/80 backdrop-blur-xl">
        <CardHeader className="space-y-2">
          <div className="flex items-center justify-between">
            <Badge variant="destructive" className="font-mono text-xs">
              404 // SIGNAL LOST
            </Badge>
            <span className="font-mono text-xs text-muted-foreground">ROUTE NOT FOUND</span>
          </div>
          <CardTitle className="text-2xl font-black font-mono tracking-tight text-foreground">
            VECTOR_OUT_OF_BOUNDS
          </CardTitle>
          <CardDescription className="text-sm">
            The documentation node or route you requested does not exist in the @boredkevin/ui matrix.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="p-3 bg-muted/20 border border-border/60 font-mono text-xs text-muted-foreground space-y-1">
            <div>&gt; status: 404_PAGE_NOT_FOUND</div>
            <div>&gt; available_destinations: ["/", "/docs", "/docs/llms"]</div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <Button asChild variant="cyber" className="gap-2">
              <Link to="/">
                <Home className="h-4 w-4" />
                <span>Theme Studio</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <Link to="/docs">
                <BookOpen className="h-4 w-4" />
                <span>Documentation</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" className="gap-2 font-mono text-xs">
              <Link to="/docs/llms">
                <Bot className="h-4 w-4" />
                <span>AI Prompt Guide</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFoundPage;
