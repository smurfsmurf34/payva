"use client";

import React from "react";
import { ContextMenu as BaseContextMenu } from "@base-ui/react/context-menu";
import { Check } from "lucide-react";

interface ContextMenuProps {
  children: React.ReactNode;
}

export function ContextMenu({ children }: ContextMenuProps) {
  return <BaseContextMenu.Root>{children}</BaseContextMenu.Root>;
}

interface ContextMenuTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export function ContextMenuTrigger({ children, className = "" }: ContextMenuTriggerProps) {
  return (
    <BaseContextMenu.Trigger className={className}>
      {children}
    </BaseContextMenu.Trigger>
  );
}

interface ContextMenuContentProps {
  children: React.ReactNode;
  className?: string;
}

export function ContextMenuContent({ children, className = "" }: ContextMenuContentProps) {
  return (
    <BaseContextMenu.Portal>
      <BaseContextMenu.Positioner>
        <BaseContextMenu.Popup
          className={`
            min-w-[180px] p-1
            bg-[var(--card-bg)] border border-[var(--card-border)]
            rounded-xl shadow-xl
            animate-fade-in
            focus:outline-none
            ${className}
          `}
        >
          {children}
        </BaseContextMenu.Popup>
      </BaseContextMenu.Positioner>
    </BaseContextMenu.Portal>
  );
}

interface ContextMenuItemProps {
  children: React.ReactNode;
  onSelect?: () => void;
  disabled?: boolean;
  destructive?: boolean;
  icon?: React.ReactNode;
  shortcut?: string;
  className?: string;
}

export function ContextMenuItem({
  children,
  onSelect,
  disabled = false,
  destructive = false,
  icon,
  shortcut,
  className = "",
}: ContextMenuItemProps) {
  return (
    <BaseContextMenu.Item
      onClick={onSelect}
      disabled={disabled}
      className={`
        flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm
        transition-colors cursor-pointer
        outline-none
        ${
          disabled
            ? "opacity-50 cursor-not-allowed"
            : destructive
            ? "text-[var(--danger)] hover:bg-[var(--danger-light)] focus:bg-[var(--danger-light)]"
            : "text-[var(--foreground)] hover:bg-[var(--accent)] focus:bg-[var(--accent)]"
        }
        ${className}
      `}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span className="flex-1">{children}</span>
      {shortcut && (
        <span className="text-xs text-[var(--muted)] ml-auto">{shortcut}</span>
      )}
    </BaseContextMenu.Item>
  );
}

export function ContextMenuSeparator() {
  return <BaseContextMenu.Separator className="my-1 h-px bg-[var(--card-border)]" />;
}

interface ContextMenuLabelProps {
  children: React.ReactNode;
}

export function ContextMenuLabel({ children }: ContextMenuLabelProps) {
  return (
    <div className="px-3 py-1.5 text-xs font-medium text-[var(--muted)] uppercase tracking-wider">
      {children}
    </div>
  );
}

interface ContextMenuCheckboxItemProps {
  children: React.ReactNode;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export function ContextMenuCheckboxItem({
  children,
  checked = false,
  onCheckedChange,
  disabled = false,
  className = "",
}: ContextMenuCheckboxItemProps) {
  return (
    <BaseContextMenu.CheckboxItem
      checked={checked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      className={`
        flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm
        transition-colors cursor-pointer
        outline-none
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        text-[var(--foreground)] hover:bg-[var(--accent)] focus:bg-[var(--accent)]
        ${className}
      `}
    >
      <span className="w-4 h-4 flex items-center justify-center">
        <BaseContextMenu.CheckboxItemIndicator>
          <Check size={14} />
        </BaseContextMenu.CheckboxItemIndicator>
      </span>
      {children}
    </BaseContextMenu.CheckboxItem>
  );
}

interface ContextSubmenuProps {
  children: React.ReactNode;
}

export function ContextSubmenu({ children }: ContextSubmenuProps) {
  return <BaseContextMenu.SubmenuRoot>{children}</BaseContextMenu.SubmenuRoot>;
}

interface ContextSubmenuTriggerProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export function ContextSubmenuTrigger({ children, icon, className = "" }: ContextSubmenuTriggerProps) {
  return (
    <BaseContextMenu.SubmenuTrigger
      className={`
        flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm
        transition-colors cursor-pointer outline-none
        text-[var(--foreground)] hover:bg-[var(--accent)] focus:bg-[var(--accent)]
        ${className}
      `}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span className="flex-1">{children}</span>
      <span className="text-[var(--muted)]">›</span>
    </BaseContextMenu.SubmenuTrigger>
  );
}
