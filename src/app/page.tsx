"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, StatCard, GradientCard, MetricCard } from "@/components/ui";
import { Button } from "@/components/ui";
import {
  Sparkle,
  Palette,
  Lightning,
  ChartLineUp,
  Users,
  CurrencyDollar,
  ArrowRight,
  TrendUp,
} from "@phosphor-icons/react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Welcome to Canary</h1>
            <p className="text-[var(--muted)] mt-1">
              Your premium UI template is ready. Start building something amazing.
            </p>
          </div>
          <Link href="/playground">
            <Button>
              <Palette size={18} weight="duotone" />
              View Components
            </Button>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <GradientCard icon={<Sparkle size={80} />} gradient="primary">
            <p className="text-xs uppercase tracking-wider text-white/70">Components</p>
            <p className="text-3xl font-mono font-bold mt-2">20+</p>
            <p className="text-sm text-white/70 mt-2">Ready to use</p>
          </GradientCard>

          <GradientCard icon={<Palette size={80} />} gradient="success">
            <p className="text-xs uppercase tracking-wider text-white/70">Color Themes</p>
            <p className="text-3xl font-mono font-bold mt-2">Light & Dark</p>
            <p className="text-sm text-white/70 mt-2">System aware</p>
          </GradientCard>

          <GradientCard icon={<Lightning size={80} />} gradient="warning">
            <p className="text-xs uppercase tracking-wider text-white/70">Stack</p>
            <p className="text-3xl font-mono font-bold mt-2">Next.js 16</p>
            <p className="text-sm text-white/70 mt-2">React 19 + Tailwind 4</p>
          </GradientCard>

          <GradientCard icon={<ChartLineUp size={80} />} gradient="gold">
            <p className="text-xs uppercase tracking-wider text-white/70">Performance</p>
            <p className="text-3xl font-mono font-bold mt-2">100</p>
            <p className="text-sm text-white/70 mt-2">Lighthouse score</p>
          </GradientCard>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader
              title="Component Library"
              description="All the building blocks you need"
            />
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-[var(--card-border)]">
                <span className="text-sm">Buttons & Inputs</span>
                <span className="text-xs font-mono text-[var(--muted)]">6 variants</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-[var(--card-border)]">
                <span className="text-sm">Cards & Stats</span>
                <span className="text-xs font-mono text-[var(--muted)]">5 variants</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-[var(--card-border)]">
                <span className="text-sm">Menus & Dropdowns</span>
                <span className="text-xs font-mono text-[var(--muted)]">2 types</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-[var(--card-border)]">
                <span className="text-sm">Modals & Toasts</span>
                <span className="text-xs font-mono text-[var(--muted)]">4 types</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm">Tables & Badges</span>
                <span className="text-xs font-mono text-[var(--muted)]">5 variants</span>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/playground">
                <Button variant="secondary" className="w-full">
                  Explore Playground
                  <ArrowRight size={16} weight="bold" />
                </Button>
              </Link>
            </div>
          </Card>

          <Card>
            <CardHeader
              title="Typography"
              description="Switzer + JetBrains Mono pairing"
            />
            <div className="space-y-4">
              <div>
                <p className="text-2xl font-bold tracking-tight">Display Heading</p>
                <p className="text-xs text-[var(--muted)] mt-1">Switzer Bold</p>
              </div>
              <div>
                <p className="text-base">Body text for content and descriptions. Clean, readable, and professional.</p>
                <p className="text-xs text-[var(--muted)] mt-1">Switzer Regular</p>
              </div>
              <div>
                <p className="text-2xl font-mono font-bold">$12,450.00</p>
                <p className="text-xs text-[var(--muted)] mt-1">JetBrains Mono - Data & Numbers</p>
              </div>
              <div>
                <p className="text-sm font-mono text-[var(--muted)]">SKU-2847-XL • #A1B2C3</p>
                <p className="text-xs text-[var(--muted)] mt-1">JetBrains Mono - Technical</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <MetricCard
            label="Total Revenue"
            value="$48,352"
            icon={<CurrencyDollar size={24} weight="duotone" />}
            subvalue="+12.5%"
          />
          <MetricCard
            label="Active Users"
            value="2,847"
            icon={<Users size={24} weight="duotone" />}
            subvalue="+8.2%"
          />
          <MetricCard
            label="Conversion"
            value="3.24%"
            icon={<ChartLineUp size={24} weight="duotone" />}
            subvalue="+1.2%"
          />
          <MetricCard
            label="Growth"
            value="23%"
            icon={<TrendUp size={24} weight="duotone" />}
            subvalue="+4.1%"
          />
        </div>

        {/* Getting Started */}
        <Card>
          <CardHeader
            title="Getting Started"
            description="Quick start guide for your new project"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center font-mono font-bold">1</div>
              <h3 className="font-semibold">Customize Theme</h3>
              <p className="text-sm text-[var(--muted)]">Edit globals.css to adjust colors, fonts, and spacing to match your brand.</p>
            </div>
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center font-mono font-bold">2</div>
              <h3 className="font-semibold">Add Navigation</h3>
              <p className="text-sm text-[var(--muted)]">Update Sidebar.tsx to add your routes and navigation structure.</p>
            </div>
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center font-mono font-bold">3</div>
              <h3 className="font-semibold">Build Pages</h3>
              <p className="text-sm text-[var(--muted)]">Use the components from /components/ui to build your application pages.</p>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
