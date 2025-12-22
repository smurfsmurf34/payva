"use client";

import React from "react";
import { NavigationMenu as BaseNavigationMenu } from "@base-ui/react/navigation-menu";
import { ChevronDown } from "lucide-react";

interface NavigationMenuProps {
  children: React.ReactNode;
  className?: string;
}

export function NavigationMenu({ children, className = "" }: NavigationMenuProps) {
  return (
    <BaseNavigationMenu.Root
      className={`
        relative
        ${className}
      `}
    >
      <BaseNavigationMenu.List
        className="flex items-center gap-1"
      >
        {children}
      </BaseNavigationMenu.List>
      <BaseNavigationMenu.Viewport
        className="
          absolute left-0 top-full mt-2
          w-full
          data-[state=open]:animate-fade-in-down
          data-[state=closed]:animate-fade-out
        "
      />
    </BaseNavigationMenu.Root>
  );
}

interface NavigationMenuItemProps {
  children: React.ReactNode;
  className?: string;
}

export function NavigationMenuItem({ children, className = "" }: NavigationMenuItemProps) {
  return (
    <BaseNavigationMenu.Item className={className}>
      {children}
    </BaseNavigationMenu.Item>
  );
}

interface NavigationMenuTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export function NavigationMenuTrigger({ children, className = "" }: NavigationMenuTriggerProps) {
  return (
    <BaseNavigationMenu.Trigger
      className={`
        inline-flex items-center gap-1 px-4 py-2 rounded-lg
        text-sm font-medium
        text-[var(--muted)] hover:text-[var(--foreground)]
        hover:bg-[var(--accent)]
        transition-colors cursor-pointer
        data-[state=open]:bg-[var(--accent)]
        data-[state=open]:text-[var(--foreground)]
        focus-ring
        ${className}
      `}
    >
      {children}
      <ChevronDown
        size={14}
        className="transition-transform duration-200 data-[state=open]:rotate-180"
      />
    </BaseNavigationMenu.Trigger>
  );
}

interface NavigationMenuContentProps {
  children: React.ReactNode;
  className?: string;
}

export function NavigationMenuContent({ children, className = "" }: NavigationMenuContentProps) {
  return (
    <BaseNavigationMenu.Content
      className={`
        absolute left-0 top-0 w-full
        p-4
        bg-[var(--card-bg)] border border-[var(--card-border)]
        rounded-xl shadow-xl
        ${className}
      `}
    >
      {children}
    </BaseNavigationMenu.Content>
  );
}

interface NavigationMenuLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  className?: string;
}

export function NavigationMenuLink({ href, children, active, className = "" }: NavigationMenuLinkProps) {
  return (
    <BaseNavigationMenu.Link
      href={href}
      active={active}
      className={`
        inline-flex items-center px-4 py-2 rounded-lg
        text-sm font-medium
        transition-colors cursor-pointer
        focus-ring
        ${
          active
            ? "text-[var(--foreground)] bg-[var(--accent)]"
            : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--accent)]"
        }
        ${className}
      `}
    >
      {children}
    </BaseNavigationMenu.Link>
  );
}

interface NavigationMenuGridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

export function NavigationMenuGrid({ children, columns = 2, className = "" }: NavigationMenuGridProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-2 ${className}`}>
      {children}
    </div>
  );
}

interface NavigationMenuCardProps {
  href: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function NavigationMenuCard({ href, title, description, icon, className = "" }: NavigationMenuCardProps) {
  return (
    <a
      href={href}
      className={`
        flex items-start gap-3 p-3 rounded-lg
        transition-colors cursor-pointer
        hover:bg-[var(--accent)]
        ${className}
      `}
    >
      {icon && (
        <div className="flex-shrink-0 mt-0.5 text-[var(--primary)]">
          {icon}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className="font-medium text-[var(--foreground)]">{title}</p>
        {description && (
          <p className="text-sm text-[var(--muted)] mt-0.5 line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </a>
  );
}
