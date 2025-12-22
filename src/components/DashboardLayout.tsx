"use client";

import { Sidebar, SidebarProvider, useSidebar } from "./Sidebar";
import { Menu, LayoutDashboard, Palette, Settings, Sun, Moon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownLabel,
} from "./ui/Dropdown";

function MobileHeader() {
  const { isMobile } = useSidebar();
  const { setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();

  if (!isMobile) return null;

  const navItems = [
    { href: "/", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/playground", icon: Palette, label: "Playground" },
    { href: "/settings", icon: Settings, label: "Settings" },
  ];

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
      <Dropdown>
        <DropdownTrigger className="!p-2 !border-0 !bg-transparent">
          <Menu size={20} />
        </DropdownTrigger>
        <DropdownContent align="end" className="min-w-[200px]">
          <DropdownLabel>Navigation</DropdownLabel>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <DropdownItem
                  icon={<Icon size={16} />}
                  className={isActive ? "bg-[var(--accent)]" : ""}
                >
                  {item.label}
                </DropdownItem>
              </Link>
            );
          })}
          <DropdownSeparator />
          <DropdownLabel>Theme</DropdownLabel>
          <DropdownItem
            icon={resolvedTheme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
            onSelect={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >
            {resolvedTheme === "dark" ? "Dark Mode" : "Light Mode"}
          </DropdownItem>
        </DropdownContent>
      </Dropdown>
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
