"use client";

import React, { useState, useRef } from "react";
import { Menu } from "@base-ui/react/menu";
import { CaretRight, Check } from "@phosphor-icons/react";

// Simple hover menu - opens on hover, closes when cursor leaves

interface HoverMenuProps {
  children: React.ReactNode;
}

export function HoverMenu({ children }: HoverMenuProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const handleOpen = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setOpen(false);
    }, 50);
  };

  return (
    <Menu.Root open={open} onOpenChange={setOpen}>
      <div
        ref={containerRef}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        className="inline-block"
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === HoverMenuContent) {
            return React.cloneElement(child as React.ReactElement<HoverMenuContentProps & { _onEnter?: () => void; _onLeave?: () => void; _popupRef?: React.RefObject<HTMLDivElement> }>, {
              _onEnter: handleOpen,
              _onLeave: handleClose,
              _popupRef: popupRef,
            });
          }
          return child;
        })}
      </div>
    </Menu.Root>
  );
}

interface HoverMenuTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export function HoverMenuTrigger({ children, className = "" }: HoverMenuTriggerProps) {
  return (
    <Menu.Trigger
      className={`
        inline-flex items-center gap-2 px-4 py-2 rounded-lg
        bg-[var(--card-bg)] border border-[var(--card-border)]
        text-sm font-medium cursor-pointer
        ${className}
      `}
    >
      {children}
    </Menu.Trigger>
  );
}

interface HoverMenuContentProps {
  children: React.ReactNode;
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
  className?: string;
  _onEnter?: () => void;
  _onLeave?: () => void;
  _popupRef?: React.RefObject<HTMLDivElement>;
}

export function HoverMenuContent({
  children,
  align = "start",
  side = "bottom",
  className = "",
  _onEnter,
  _onLeave,
  _popupRef,
}: HoverMenuContentProps) {
  return (
    <Menu.Portal>
      <Menu.Positioner align={align} side={side} sideOffset={8}>
        <Menu.Popup
          ref={_popupRef}
          onMouseEnter={_onEnter}
          onMouseLeave={_onLeave}
          className={`
            min-w-[180px] p-1
            bg-[var(--card-bg)] border border-[var(--card-border)]
            rounded-xl shadow-xl
            animate-fade-in-down
            outline-none
            ${className}
          `}
        >
          {children}
        </Menu.Popup>
      </Menu.Positioner>
    </Menu.Portal>
  );
}

interface HoverMenuItemProps {
  children: React.ReactNode;
  onSelect?: () => void;
  disabled?: boolean;
  destructive?: boolean;
  icon?: React.ReactNode;
  shortcut?: string;
}

export function HoverMenuItem({
  children,
  onSelect,
  disabled = false,
  destructive = false,
  icon,
  shortcut,
}: HoverMenuItemProps) {
  return (
    <Menu.Item
      onClick={onSelect}
      disabled={disabled}
      className={`
        flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm
        cursor-pointer
        !outline-none !ring-0 !border-0 !shadow-none
        ${
          disabled
            ? "opacity-50 cursor-not-allowed"
            : destructive
            ? "text-[var(--danger)] hover:bg-[var(--danger-light)] data-[highlighted]:bg-[var(--danger-light)]"
            : "text-[var(--foreground)] hover:bg-[var(--accent)] data-[highlighted]:bg-[var(--accent)]"
        }
      `}
      style={{ outline: 'none', boxShadow: 'none' }}
    >
      {icon && <span className="flex-shrink-0 text-[var(--muted)]">{icon}</span>}
      <span className="flex-1">{children}</span>
      {shortcut && <span className="text-xs text-[var(--muted)] ml-auto font-mono">{shortcut}</span>}
    </Menu.Item>
  );
}

export function HoverMenuSeparator() {
  return <Menu.Separator className="my-1 h-px bg-[var(--card-border)]" />;
}

export function HoverMenuLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-3 py-1.5 text-xs font-medium text-[var(--muted)] uppercase tracking-wider">
      {children}
    </div>
  );
}

export function HoverSubmenu({ children }: { children: React.ReactNode }) {
  return <Menu.SubmenuRoot>{children}</Menu.SubmenuRoot>;
}

export function HoverSubmenuTrigger({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <Menu.SubmenuTrigger
      className="
        flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm
        text-[var(--foreground)] hover:bg-[var(--accent)] data-[highlighted]:bg-[var(--accent)]
        cursor-pointer
        !outline-none !ring-0 !border-0 !shadow-none
      "
      style={{ outline: 'none', boxShadow: 'none' }}
    >
      {icon && <span className="flex-shrink-0 text-[var(--muted)]">{icon}</span>}
      <span className="flex-1">{children}</span>
      <CaretRight size={14} className="text-[var(--muted)]" />
    </Menu.SubmenuTrigger>
  );
}

export function HoverMenuCheckboxItem({
  children,
  checked,
  onCheckedChange,
  icon,
}: {
  children: React.ReactNode;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  icon?: React.ReactNode;
}) {
  return (
    <Menu.CheckboxItem
      checked={checked}
      onCheckedChange={onCheckedChange}
      className="
        flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm
        text-[var(--foreground)] hover:bg-[var(--accent)] data-[highlighted]:bg-[var(--accent)]
        cursor-pointer
        !outline-none !ring-0 !border-0 !shadow-none
      "
      style={{ outline: 'none', boxShadow: 'none' }}
    >
      <span className="w-4 h-4 flex items-center justify-center">
        {checked && <Check size={14} weight="bold" className="text-[var(--primary)]" />}
      </span>
      {icon && <span className="flex-shrink-0 text-[var(--muted)]">{icon}</span>}
      <span className="flex-1">{children}</span>
    </Menu.CheckboxItem>
  );
}
