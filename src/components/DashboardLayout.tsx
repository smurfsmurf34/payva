"use client";

import { Sidebar, SidebarProvider, useSidebar } from "./Sidebar";
import { Menu } from "lucide-react";
import Image from "next/image";

function MobileHeader() {
  const { isMobile, setIsMobileOpen } = useSidebar();

  if (!isMobile) return null;

  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-[var(--sidebar-bg)] border-b border-[var(--sidebar-border)] flex items-center justify-between px-4 z-30 md:hidden">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[var(--primary)] rounded-lg flex items-center justify-center p-1.5">
          <Image
            src="/canarycanarylogo-white.svg"
            alt="Canary Canary"
            width={20}
            height={20}
            className="w-full h-full object-contain"
          />
        </div>
        <span className="font-semibold text-lg tracking-tight">Canary Canary</span>
      </div>
      <button
        onClick={() => setIsMobileOpen(true)}
        className="p-2 rounded-md text-[var(--muted)] hover:bg-[var(--accent)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
        title="Open menu"
      >
        <Menu size={20} />
      </button>
    </header>
  );
}

function MainContent({ children }: { children: React.ReactNode }) {
  const { isCollapsed, isMobile } = useSidebar();

  return (
    <main
      className={`
        min-h-screen transition-all duration-200
        ${isMobile ? "ml-0 pt-14" : isCollapsed ? "ml-16" : "ml-64"}
      `}
    >
      <div className="p-4 md:p-8">{children}</div>
    </main>
  );
}

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-[var(--background)]">
        <Sidebar />
        <MobileHeader />
        <MainContent>{children}</MainContent>
      </div>
    </SidebarProvider>
  );
}
