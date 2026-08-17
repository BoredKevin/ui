import React, { useState } from 'react';
import {
  DollarSign,
  Users,
  Plus,
  Minus,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export const CardsView: React.FC = () => {
  // Move Goal State
  const [goal, setGoal] = useState(350);

  // Plan State
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'pro'>('starter');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-[1400px] mx-auto">
      {/* ================= CARD 1: Total Revenue ================= */}
      <Card telemetry="SYS.REV-01" className="flex flex-col justify-between">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground uppercase font-mono tracking-wider">// Total Revenue</span>
            <DollarSign className="h-4 w-4 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold font-mono tracking-tight pt-1 text-foreground">
            $15,231.89
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground flex items-center gap-1 pt-0.5">
            <span className="text-emerald-400 font-medium font-mono">+20.1%</span> from last month
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4 pb-2">
          {/* Sparkline SVG Chart */}
          <div className="h-20 w-full relative flex items-end">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 280 60"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="revenueGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M 0,45 L 35,38 L 70,42 L 105,30 L 140,36 L 175,22 L 210,28 L 245,10 L 280,18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                className="text-foreground"
              />
              <path
                d="M 0,45 L 35,38 L 70,42 L 105,30 L 140,36 L 175,22 L 210,28 L 245,10 L 280,18 L 280,60 L 0,60 Z"
                fill="url(#revenueGlow)"
                className="text-foreground"
              />
              {/* Nodes */}
              {[
                { cx: 0, cy: 45 },
                { cx: 35, cy: 38 },
                { cx: 70, cy: 42 },
                { cx: 105, cy: 30 },
                { cx: 140, cy: 36 },
                { cx: 175, cy: 22 },
                { cx: 210, cy: 28 },
                { cx: 245, cy: 10 },
                { cx: 280, cy: 18 },
              ].map((pt, i) => (
                <circle
                  key={i}
                  cx={pt.cx}
                  cy={pt.cy}
                  r="3"
                  className="fill-background stroke-foreground"
                  strokeWidth="2"
                />
              ))}
            </svg>
          </div>
        </CardContent>
      </Card>

      {/* ================= CARD 2: Subscriptions ================= */}
      <Card telemetry="NET.SUB-02" className="flex flex-col justify-between">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground uppercase font-mono tracking-wider">// Subscriptions</span>
            <Users className="h-4 w-4 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold font-mono tracking-tight pt-1">
            +2,350
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground flex items-center gap-1 pt-0.5">
            <span className="text-emerald-400 font-medium font-mono">+180.1%</span> from last month
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4 pb-2">
          {/* Smooth Curved Wave SVG Chart */}
          <div className="h-20 w-full relative flex items-end">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 280 60"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="subGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M 0,55 Q 50,50 90,45 T 160,20 T 210,48 T 250,15 T 280,30"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                className="text-foreground"
              />
              <path
                d="M 0,55 Q 50,50 90,45 T 160,20 T 210,48 T 250,15 T 280,30 L 280,60 L 0,60 Z"
                fill="url(#subGradient)"
                className="text-foreground"
              />
            </svg>
          </div>
        </CardContent>
      </Card>

      {/* ================= CARD 3: Calendar Picker ================= */}
      <Card telemetry="CAL.TIME-03" className="row-span-1">
        <CardContent className="p-0">
          <Calendar selectedDate={6} />
        </CardContent>
      </Card>

      {/* ================= CARD 4: Move Goal ================= */}
      <Card telemetry="ACT.GOAL-04">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-semibold">Move Goal</CardTitle>
          <CardDescription className="text-xs">
            Set your daily activity goal.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Decrease calorie goal"
              onClick={() => setGoal((prev) => Math.max(100, prev - 10))}
              className="h-8 w-8 flex items-center justify-center border border-border bg-card hover:bg-muted text-foreground transition-colors"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <div className="text-center">
              <div className="text-3xl font-black font-mono tracking-tight text-foreground">
                {goal}
              </div>
              <div className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground">
                CALORIES/DAY
              </div>
            </div>
            <button
              type="button"
              aria-label="Increase calorie goal"
              onClick={() => setGoal((prev) => prev + 10)}
              className="h-8 w-8 flex items-center justify-center border border-border bg-card hover:bg-muted text-foreground transition-colors"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* 16 Animated/Interactive Vertical Bars */}
          <div className="flex items-end justify-between gap-1 h-14 pt-2">
            {[
              28, 45, 32, 60, 48, 75, 52, 90, 68, 85, 95, 78, 62, 88, 92, 70,
            ].map((height, i) => (
              <div
                key={i}
                className="w-full bg-foreground transition-all duration-300 hover:bg-primary"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="white" className="w-full font-bold">
            Set Goal
          </Button>
        </CardFooter>
      </Card>

      {/* ================= CARD 5: Upgrade your subscription ================= */}
      <Card telemetry="PLAN.UPGRADE-05" className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-base font-semibold">
            Upgrade your subscription
          </CardTitle>
          <CardDescription className="text-xs">
            You are currently on the free plan. Upgrade to the pro plan to get access to all features.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground">Name</label>
              <Input defaultValue="Evil Rabbit" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground">Email</label>
              <div className="relative">
                <Input defaultValue="example@acme.inc" />
                <span className="absolute right-2.5 top-2.5 h-4 w-4 rounded-full bg-amber-500/20 border border-amber-500/40 text-[10px] flex items-center justify-center text-amber-300 font-bold">
                  ⚡
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">Card Number</label>
            <div className="grid grid-cols-6 gap-2">
              <Input className="col-span-3" defaultValue="1234 1234 1234" />
              <Input className="col-span-2" defaultValue="MM/YY" />
              <Input className="col-span-1" defaultValue="CVC" />
            </div>
          </div>

          {/* Plan selection */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">Plan</label>
            <p className="text-[11px] text-muted-foreground">
              Select the plan that best fits your needs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {/* Starter Plan */}
              <div
                onClick={() => setSelectedPlan('starter')}
                className={cn(
                  'p-3 border cursor-pointer transition-colors flex items-start gap-3',
                  selectedPlan === 'starter'
                    ? 'border-foreground bg-accent/40'
                    : 'border-border bg-card hover:bg-muted/50'
                )}
              >
                <div
                  className={cn(
                    'mt-0.5 h-3.5 w-3.5 border flex items-center justify-center shrink-0',
                    selectedPlan === 'starter'
                      ? 'border-foreground bg-foreground'
                      : 'border-muted-foreground'
                  )}
                >
                  {selectedPlan === 'starter' && (
                    <div className="h-1.5 w-1.5 bg-background" />
                  )}
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">Starter Plan</div>
                  <div className="text-[11px] text-muted-foreground">
                    Perfect for small businesses.
                  </div>
                </div>
              </div>

              {/* Pro Plan */}
              <div
                onClick={() => setSelectedPlan('pro')}
                className={cn(
                  'p-3 border cursor-pointer transition-colors flex items-start gap-3',
                  selectedPlan === 'pro'
                    ? 'border-foreground bg-accent/40'
                    : 'border-border bg-card hover:bg-muted/50'
                )}
              >
                <div
                  className={cn(
                    'mt-0.5 h-3.5 w-3.5 border flex items-center justify-center shrink-0',
                    selectedPlan === 'pro'
                      ? 'border-foreground bg-foreground'
                      : 'border-muted-foreground'
                  )}
                >
                  {selectedPlan === 'pro' && (
                    <div className="h-1.5 w-1.5 bg-background" />
                  )}
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">Pro Plan</div>
                  <div className="text-[11px] text-muted-foreground">
                    More features and storage.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ================= CARD 6: Create an Account ================= */}
      <Card telemetry="AUTH.SEC-06">
        <CardHeader className="space-y-1">
          <CardTitle className="text-base font-semibold">Create an account</CardTitle>
          <CardDescription className="text-xs">
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {/* Social OAuth Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" size="sm" className="gap-1.5 text-xs">
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-1.5 text-xs">
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
              <span>Google</span>
            </Button>
          </div>

          {/* Divider */}
          <div className="relative my-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-[10px] uppercase">
              <span className="bg-card px-2 text-muted-foreground font-semibold">
                OR CONTINUE WITH
              </span>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">Email</label>
            <Input defaultValue="m@example.com" />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">Password</label>
            <Input type="password" defaultValue="secretpassword" />
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="white" className="w-full font-bold">
            Create account
          </Button>
        </CardFooter>
      </Card>

      {/* ================= CARD 7: Exercise Minutes ================= */}
      <Card telemetry="METRICS.TIME-07" className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-base font-semibold">Exercise Minutes</CardTitle>
          <CardDescription className="text-xs">
            Your exercise minutes are ahead of where you normally are.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {/* Dual Line SVG Curve */}
          <div className="h-32 w-full relative flex items-end">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 400 100"
              preserveAspectRatio="none"
            >
              {/* Secondary/Previous week curve */}
              <path
                d="M 0,80 Q 60,85 120,70 T 240,40 T 320,60 T 400,65"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeDasharray="4 4"
                className="text-muted-foreground/60"
              />
              {/* Primary/Current week active curve */}
              <path
                d="M 0,70 Q 70,75 140,25 T 260,65 T 330,55 T 400,65"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="text-foreground"
              />
              {/* Active Highlight Points */}
              <circle cx="140" cy="25" r="4" className="fill-background stroke-foreground" strokeWidth="2.5" />
              <circle cx="260" cy="65" r="3.5" className="fill-background stroke-foreground" strokeWidth="2" />
              <circle cx="400" cy="65" r="3.5" className="fill-background stroke-foreground" strokeWidth="2" />
            </svg>
          </div>

          {/* Days of Week */}
          <div className="grid grid-cols-7 text-center text-[11px] text-muted-foreground font-mono pt-1">
            <span>Mon</span>
            <span>Tue</span>
            <span className="text-foreground font-bold">Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </CardContent>
      </Card>

      {/* ================= CARD 8: Payments / Transactions ================= */}
      <Card telemetry="TX.PAYMENTS-08" className="lg:col-span-3">
        <CardHeader className="flex flex-row items-center justify-between pb-3">
          <div>
            <CardTitle className="text-base font-semibold">Payments</CardTitle>
            <CardDescription className="text-xs">
              Recent customer invoices and billing statuses.
            </CardDescription>
          </div>
          <Button variant="outline" size="sm" className="text-xs h-7">
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                name: 'Olivia Martin',
                email: 'olivia.martin@email.com',
                amount: '+$1,999.00',
                status: 'Success',
                initials: 'OM',
              },
              {
                name: 'Jackson Lee',
                email: 'jackson.lee@email.com',
                amount: '+$39.00',
                status: 'Processing',
                initials: 'JL',
              },
              {
                name: 'Isabella Nguyen',
                email: 'isabella.nguyen@email.com',
                amount: '+$299.00',
                status: 'Success',
                initials: 'IN',
              },
              {
                name: 'William Kim',
                email: 'will@email.com',
                amount: '+$99.00',
                status: 'Pending',
                initials: 'WK',
              },
            ].map((tx, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2 hover:bg-muted/40 transition-colors border-b border-border/50 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{tx.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-xs font-semibold text-foreground">
                      {tx.name}
                    </div>
                    <div className="text-[11px] text-muted-foreground">
                      {tx.email}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge
                    variant={
                      tx.status === 'Success'
                        ? 'success'
                        : tx.status === 'Pending'
                        ? 'warning'
                        : 'secondary'
                    }
                    className="text-[10px]"
                  >
                    {tx.status}
                  </Badge>
                  <span className="font-mono text-xs font-bold text-foreground">
                    {tx.amount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
