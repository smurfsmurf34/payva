"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Settings,
  PanelLeftClose,
  PanelLeft,
  Palette,
} from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import {
  HoverMenu,
  HoverMenuTrigger,
  HoverMenuContent,
  HoverMenuItem,
} from "./ui/HoverMenu";

// Context for sidebar state
const SidebarContext = createContext<{
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
  isMobile: boolean;
}>({
  isCollapsed: false,
  setIsCollapsed: () => {},
  isMobile: false,
});

export const useSidebar = () => useContext(SidebarContext);

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isCollapsed: boolean;
}

function NavItem({ href, icon, label, isCollapsed }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200
        ${isCollapsed ? "justify-center" : ""}
        ${
          isActive
            ? "bg-[var(--accent)] text-[var(--foreground)] font-semibold"
            : "text-[var(--muted)] hover:bg-[var(--accent)] hover:text-[var(--foreground)]"
        }
      `}
      title={isCollapsed ? label : undefined}
    >
      <span className="flex-shrink-0">{icon}</span>
      {!isCollapsed && (
        <span className="text-sm font-medium sidebar-content-transition">
          {label}
        </span>
      )}
    </Link>
  );
}

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <SidebarContext.Provider
      value={{ isCollapsed, setIsCollapsed, isMobile }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function Sidebar() {
  const { isCollapsed, setIsCollapsed, isMobile } = useSidebar();

  // On mobile, sidebar is hidden - navigation is handled by the mobile header dropdown
  if (isMobile) return null;

  return (
    <aside
      className={`
        fixed left-0 top-0 h-screen bg-[var(--sidebar-bg)] border-r border-[var(--sidebar-border)]
        flex flex-col sidebar-transition z-50
        ${isCollapsed ? "w-16" : "w-64"}
      `}
    >
      {/* Logo */}
      <div
        className="flex items-center justify-between h-16 px-4 border-b border-[var(--sidebar-border)]"
      >
        {isCollapsed ? (
          <HoverMenu>
            <HoverMenuTrigger className="!p-0 !border-0 !bg-transparent">
              <div className="w-8 h-8 bg-[var(--primary)] rounded-lg flex items-center justify-center flex-shrink-0 p-1.5">
                <Image
                  src="/canarycanarylogo-white.svg"
                  alt="Canary Canary"
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </div>
            </HoverMenuTrigger>
            <HoverMenuContent side="right" align="start">
              <HoverMenuItem
                icon={<PanelLeft size={16} />}
                onSelect={() => setIsCollapsed(false)}
              >
                Expand sidebar
              </HoverMenuItem>
            </HoverMenuContent>
          </HoverMenu>
        ) : (
          <>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[var(--primary)] rounded-lg flex items-center justify-center flex-shrink-0 p-1.5">
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
              onClick={() => setIsCollapsed(true)}
              className="p-1.5 rounded-md text-[var(--muted)] hover:bg-[var(--accent)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
              title="Collapse sidebar"
            >
              <PanelLeftClose size={18} />
            </button>
          </>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
        <NavItem
          href="/"
          icon={<LayoutDashboard size={20} />}
          label="Dashboard"
          isCollapsed={isCollapsed}
        />

        <NavItem
          href="/playground"
          icon={<Palette size={20} />}
          label="Playground"
          isCollapsed={isCollapsed}
        />

        {/* Add your navigation items here */}
      </nav>

      {/* Bottom section */}
      <div className="border-t border-[var(--sidebar-border)] p-2 space-y-1">
        <NavItem
          href="/settings"
          icon={<Settings size={20} />}
          label="Settings"
          isCollapsed={isCollapsed}
        />

        {/* Theme toggle */}
        <ThemeToggle isCollapsed={isCollapsed} />
      </div>
    </aside>
  );
}
