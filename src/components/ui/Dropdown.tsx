"use client";

import React from "react";
import { Menu } from "@base-ui/react/menu";
import { ChevronDown, Check } from "lucide-react";

interface DropdownProps {
  children: React.ReactNode;
}

export function Dropdown({ children }: DropdownProps) {
  return <Menu.Root>{children}</Menu.Root>;
}

interface DropdownTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export function DropdownTrigger({ children, className = "" }: DropdownTriggerProps) {
  return (
    <Menu.Trigger
      className={`
        inline-flex items-center gap-2 px-4 py-2 rounded-lg
        bg-[var(--card-bg)] border border-[var(--card-border)]
        text-sm font-medium
        hover:bg-[var(--accent)] transition-colors cursor-pointer
        btn-press focus-ring
        ${className}
      `}
    >
      {children}
      <ChevronDown size={16} className="text-[var(--muted)]" />
    </Menu.Trigger>
  );
}

interface DropdownContentProps {
  children: React.ReactNode;
  align?: "start" | "center" | "end";
  className?: string;
}

export function DropdownContent({
  children,
  align = "start",
  className = "",
}: DropdownContentProps) {
  return (
    <Menu.Portal>
      <Menu.Positioner align={align} sideOffset={8}>
        <Menu.Popup
          className={`
            min-w-[180px] p-1
            bg-[var(--card-bg)] border border-[var(--card-border)]
            rounded-xl shadow-xl
            animate-fade-in-down
            focus:outline-none
            ${className}
          `}
        >
          {children}
        </Menu.Popup>
      </Menu.Positioner>
    </Menu.Portal>
  );
}

interface DropdownItemProps {
  children: React.ReactNode;
  onSelect?: () => void;
  disabled?: boolean;
  destructive?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

export function DropdownItem({
  children,
  onSelect,
  disabled = false,
  destructive = false,
  icon,
  className = "",
}: DropdownItemProps) {
  return (
    <Menu.Item
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
      {children}
    </Menu.Item>
  );
}

export function DropdownSeparator() {
  return <Menu.Separator className="my-1 h-px bg-[var(--card-border)]" />;
}

interface DropdownLabelProps {
  children: React.ReactNode;
}

export function DropdownLabel({ children }: DropdownLabelProps) {
  return (
    <div className="px-3 py-1.5 text-xs font-medium text-[var(--muted)] uppercase tracking-wider">
      {children}
    </div>
  );
}

// Checkbox item
interface DropdownCheckboxItemProps {
  children: React.ReactNode;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export function DropdownCheckboxItem({
  children,
  checked,
  onCheckedChange,
}: DropdownCheckboxItemProps) {
  return (
    <Menu.CheckboxItem
      checked={checked}
      onCheckedChange={onCheckedChange}
      className="
        flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm
        text-[var(--foreground)] hover:bg-[var(--accent)] focus:bg-[var(--accent)]
        transition-colors cursor-pointer outline-none
      "
    >
      <span className="w-4 h-4 flex items-center justify-center">
        {checked && <Check size={14} className="text-[var(--primary)]" />}
      </span>
      {children}
    </Menu.CheckboxItem>
  );
}
