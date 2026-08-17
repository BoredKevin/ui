import React from 'react';
import {
  DollarSign,
  Users,
  CreditCard,
  Activity,
  Download,
  Calendar as CalendarIcon,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export const DashboardView: React.FC = () => {
  return (
    <div className="p-4 space-y-6 max-w-[1400px] mx-auto">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold tracking-tight text-foreground font-mono">
              // DASHBOARD.HUD
            </h2>
            <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono px-1.5 py-0.5 animate-pulse">
              LIVE TELEMETRY
            </span>
          </div>
          <p className="text-xs text-muted-foreground pt-0.5">
            Real-time tactical performance, network metrics, and sales ingestion.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2 text-xs">
            <CalendarIcon className="h-3.5 w-3.5" />
            <span>Jan 20, 2026 - Feb 09, 2026</span>
          </Button>
          <Button variant="cyber" size="sm" className="gap-1.5 text-xs font-semibold">
            <Download className="h-3.5 w-3.5" />
            <span>Export Data</span>
          </Button>
        </div>
      </div>

      {/* Top 4 Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card telemetry="DASH.REV-01">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground uppercase font-mono">
              Total Revenue
            </CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono text-foreground">$45,231.89</div>
            <p className="text-xs text-muted-foreground pt-1">
              <span className="text-emerald-400 font-medium font-mono">+20.1%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card telemetry="DASH.SUB-02">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground uppercase font-mono">
              Subscriptions
            </CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono text-foreground">+2,350</div>
            <p className="text-xs text-muted-foreground pt-1">
              <span className="text-emerald-400 font-medium font-mono">+180.1%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card telemetry="DASH.SALES-03">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground uppercase font-mono">
              Sales Ingest
            </CardTitle>
            <CreditCard className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono text-foreground">+12,234</div>
            <p className="text-xs text-muted-foreground pt-1">
              <span className="text-emerald-400 font-medium font-mono">+19%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card telemetry="DASH.ACT-04">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground uppercase font-mono">
              Active Nodes
            </CardTitle>
            <Activity className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono text-foreground">+573</div>
            <p className="text-xs text-muted-foreground pt-1">
              <span className="text-emerald-400 font-medium font-mono">+201</span> since last hour
            </p>
          </CardContent>
        </Card>
      </div>


      {/* Main Grid: Overview Chart + Recent Sales */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
        {/* Overview Bar Chart (col-span-4) */}
        <Card telemetry="ANALYTICS.MONTHLY-05" className="lg:col-span-4">
          <CardHeader>
            <CardTitle className="text-base font-semibold">Overview</CardTitle>
            <CardDescription className="text-xs">
              Monthly revenue breakdown in USD.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="h-64 flex items-end justify-between gap-2 pb-6 border-b border-border/50">
              {[
                { month: 'Jan', val: 35 },
                { month: 'Feb', val: 58 },
                { month: 'Mar', val: 82 },
                { month: 'Apr', val: 45 },
                { month: 'May', val: 65 },
                { month: 'Jun', val: 95 },
                { month: 'Jul', val: 75 },
                { month: 'Aug', val: 88 },
                { month: 'Sep', val: 55 },
                { month: 'Oct', val: 70 },
                { month: 'Nov', val: 92 },
                { month: 'Dec', val: 100 },
              ].map((item) => (
                <div key={item.month} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                  <div
                    className="w-full bg-foreground transition-all duration-300 group-hover:bg-primary group-hover:scifi-glow-subtle"
                    style={{ height: `${item.val}%` }}
                  />
                  <span className="text-[10px] text-muted-foreground font-mono">
                    {item.month}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Sales List (col-span-3) */}
        <Card telemetry="FEED.SALES-06" className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="text-base font-semibold">Recent Sales</CardTitle>
            <CardDescription className="text-xs">
              You made 265 sales this month.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: 'Olivia Martin', email: 'olivia.martin@email.com', amount: '+$1,999.00', initials: 'OM' },
              { name: 'Jackson Lee', email: 'jackson.lee@email.com', amount: '+$39.00', initials: 'JL' },
              { name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', amount: '+$299.00', initials: 'IN' },
              { name: 'William Kim', email: 'will@email.com', amount: '+$99.00', initials: 'WK' },
              { name: 'Sofia Davis', email: 'sofia.davis@email.com', amount: '+$39.00', initials: 'SD' },
            ].map((sale, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{sale.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-xs font-semibold text-foreground">{sale.name}</div>
                    <div className="text-[11px] text-muted-foreground">{sale.email}</div>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-foreground">
                  {sale.amount}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
