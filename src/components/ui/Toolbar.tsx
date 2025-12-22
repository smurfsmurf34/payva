"use client";

import React from "react";
import { Toolbar as BaseToolbar } from "@base-ui/react/toolbar";

interface ToolbarProps {
  children: React.ReactNode;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function Toolbar({ children, orientation = "horizontal", className = "" }: ToolbarProps) {
  return (
    <BaseToolbar.Root
      orientation={orientation}
      className={`
        inline-flex items-center gap-1 p-1
        bg-[var(--card-bg)] border border-[var(--card-border)]
        rounded-lg
        ${orientation === "vertical" ? "flex-col" : ""}
        ${className}
      `}
    >
      {children}
    </BaseToolbar.Root>
  );
}

interface ToolbarButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
  className?: string;
}

export function ToolbarButton({
  children,
  onClick,
  disabled = false,
  active = false,
  className = "",
}: ToolbarButtonProps) {
  return (
    <BaseToolbar.Button
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center
        h-8 px-2.5 rounded-md text-sm font-medium
        transition-all duration-150 cursor-pointer
        focus-ring
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${
          active
            ? "bg-[var(--accent)] text-[var(--foreground)]"
            : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--accent)]"
        }
        ${className}
      `}
    >
      {children}
    </BaseToolbar.Button>
  );
}

interface ToolbarLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export function ToolbarLink({ children, href, className = "" }: ToolbarLinkProps) {
  return (
    <BaseToolbar.Link
      href={href}
      className={`
        inline-flex items-center justify-center
        h-8 px-2.5 rounded-md text-sm font-medium
        transition-all duration-150 cursor-pointer
        text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--accent)]
        focus-ring
        ${className}
      `}
    >
      {children}
    </BaseToolbar.Link>
  );
}

export function ToolbarSeparator({ className = "" }: { className?: string }) {
  return (
    <BaseToolbar.Separator
      className={`
        w-px h-6 mx-1
        bg-[var(--card-border)]
        ${className}
      `}
    />
  );
}

interface ToolbarGroupProps {
  children: React.ReactNode;
  className?: string;
}

export function ToolbarGroup({ children, className = "" }: ToolbarGroupProps) {
  return (
    <BaseToolbar.Group
      className={`
        inline-flex items-center gap-0.5
        ${className}
      `}
    >
      {children}
    </BaseToolbar.Group>
  );
}

