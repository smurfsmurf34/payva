"use client";

import { Sidebar, SidebarProvider, useSidebar } from "./Sidebar";

function MainContent({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebar();

  return (
    <main
      className={`
        min-h-screen transition-all duration-200
        ${isCollapsed ? "ml-16" : "ml-64"}
      `}
    >
      <div className="p-8">{children}</div>
    </main>
  );
}

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-[var(--background)]">
        <Sidebar />
        <MainContent>{children}</MainContent>
      </div>
    </SidebarProvider>
  );
}
