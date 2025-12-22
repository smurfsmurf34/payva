"use client";

import React from "react";
import { Menubar as BaseMenubar } from "@base-ui/react/menubar";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import { ChevronRight, Check } from "lucide-react";

interface MenubarProps {
  children: React.ReactNode;
  className?: string;
}

export function Menubar({ children, className = "" }: MenubarProps) {
  return (
    <BaseMenubar
      className={`
        inline-flex items-center gap-1 p-1
        bg-[var(--card-bg)] border border-[var(--card-border)]
        rounded-lg
        ${className}
      `}
    >
      {children}
    </BaseMenubar>
  );
}

interface MenubarMenuProps {
  children: React.ReactNode;
}

export function MenubarMenu({ children }: MenubarMenuProps) {
  return <BaseMenu.Root>{children}</BaseMenu.Root>;
}

interface MenubarTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export function MenubarTrigger({ children, className = "" }: MenubarTriggerProps) {
  return (
    <BaseMenu.Trigger
      className={`
        inline-flex items-center gap-1.5 px-3 py-1.5
        text-sm font-medium rounded-md
        text-[var(--foreground)]
        hover:bg-[var(--accent)]
        data-[popup-open]:bg-[var(--accent)]
        transition-colors cursor-pointer
        focus-ring
        ${className}
      `}
    >
      {children}
    </BaseMenu.Trigger>
  );
}

interface MenubarContentProps {
  children: React.ReactNode;
  className?: string;
  align?: "start" | "center" | "end";
  sideOffset?: number;
}

export function MenubarContent({
  children,
  className = "",
  align = "start",
  sideOffset = 4,
}: MenubarContentProps) {
  return (
    <BaseMenu.Portal>
      <BaseMenu.Positioner align={align} sideOffset={sideOffset} className="z-50">
        <BaseMenu.Popup
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
        </BaseMenu.Popup>
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  );
}

interface MenubarItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  shortcut?: string;
  icon?: React.ReactNode;
  destructive?: boolean;
  className?: string;
}

export function MenubarItem({
  children,
  onClick,
  disabled = false,
  shortcut,
  icon,
  destructive = false,
  className = "",
}: MenubarItemProps) {
  return (
    <BaseMenu.Item
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center gap-2 px-3 py-2 rounded-lg text-sm
        cursor-pointer transition-colors
        focus:outline-none
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${
          destructive
            ? "text-[var(--danger)] data-[highlighted]:bg-[var(--danger-light)]"
            : "text-[var(--foreground)] data-[highlighted]:bg-[var(--accent)]"
        }
        ${className}
      `}
    >
      {icon && <span className="w-4 h-4 flex items-center justify-center">{icon}</span>}
      <span className="flex-1">{children}</span>
      {shortcut && (
        <span className="text-xs text-[var(--muted)] font-mono">{shortcut}</span>
      )}
    </BaseMenu.Item>
  );
}

export function MenubarSeparator({ className = "" }: { className?: string }) {
  return (
    <BaseMenu.Separator
      className={`h-px my-1 mx-2 bg-[var(--card-border)] ${className}`}
    />
  );
}

interface MenubarLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function MenubarLabel({ children, className = "" }: MenubarLabelProps) {
  return (
    <BaseMenu.GroupLabel
      className={`px-3 py-1.5 text-xs font-medium text-[var(--muted)] uppercase tracking-wider ${className}`}
    >
      {children}
    </BaseMenu.GroupLabel>
  );
}

interface MenubarCheckboxItemProps {
  children: React.ReactNode;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export function MenubarCheckboxItem({
  children,
  checked = false,
  onCheckedChange,
  disabled = false,
  className = "",
}: MenubarCheckboxItemProps) {
  return (
    <BaseMenu.CheckboxItem
      checked={checked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      className={`
        flex items-center gap-2 px-3 py-2 rounded-lg text-sm
        cursor-pointer transition-colors
        text-[var(--foreground)]
        data-[highlighted]:bg-[var(--accent)]
        focus:outline-none
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      <span className="w-4 h-4 flex items-center justify-center">
        {checked && <Check size={14} className="text-[var(--primary)]" />}
      </span>
      <span className="flex-1">{children}</span>
    </BaseMenu.CheckboxItem>
  );
}

interface MenubarSubmenuProps {
  children: React.ReactNode;
}

export function MenubarSubmenu({ children }: MenubarSubmenuProps) {
  return <BaseMenu.SubmenuRoot>{children}</BaseMenu.SubmenuRoot>;
}

interface MenubarSubmenuTriggerProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export function MenubarSubmenuTrigger({
  children,
  icon,
  className = "",
}: MenubarSubmenuTriggerProps) {
  return (
    <BaseMenu.SubmenuTrigger
      className={`
        flex items-center gap-2 px-3 py-2 rounded-lg text-sm
        cursor-pointer transition-colors
        text-[var(--foreground)]
        data-[highlighted]:bg-[var(--accent)]
        data-[popup-open]:bg-[var(--accent)]
        focus:outline-none
        ${className}
      `}
    >
      {icon && <span className="w-4 h-4 flex items-center justify-center">{icon}</span>}
      <span className="flex-1">{children}</span>
      <ChevronRight size={14} className="text-[var(--muted)]" />
    </BaseMenu.SubmenuTrigger>
  );
}

interface MenubarSubmenuContentProps {
  children: React.ReactNode;
  className?: string;
}

export function MenubarSubmenuContent({
  children,
  className = "",
}: MenubarSubmenuContentProps) {
  return (
    <BaseMenu.Portal>
      <BaseMenu.Positioner side="right" align="start" sideOffset={4} className="z-50">
        <BaseMenu.Popup
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
        </BaseMenu.Popup>
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  );
}

export function MenubarGroup({ children }: { children: React.ReactNode }) {
  return <BaseMenu.Group>{children}</BaseMenu.Group>;
}
