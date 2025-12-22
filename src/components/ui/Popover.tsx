"use client";

import React from "react";
import { Popover as BasePopover } from "@base-ui/react/popover";

interface PopoverProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Popover({ children, defaultOpen, open, onOpenChange }: PopoverProps) {
  return (
    <BasePopover.Root defaultOpen={defaultOpen} open={open} onOpenChange={onOpenChange}>
      {children}
    </BasePopover.Root>
  );
}

interface PopoverTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

export function PopoverTrigger({ children, asChild, className = "" }: PopoverTriggerProps) {
  return (
    <BasePopover.Trigger
      className={`
        inline-flex items-center justify-center
        cursor-pointer focus-ring rounded-lg
        ${className}
      `}
      render={asChild ? (children as React.ReactElement) : undefined}
    >
      {!asChild && children}
    </BasePopover.Trigger>
  );
}

interface PopoverContentProps {
  children: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  sideOffset?: number;
  className?: string;
}

export function PopoverContent({
  children,
  side = "bottom",
  align = "center",
  sideOffset = 8,
  className = "",
}: PopoverContentProps) {
  return (
    <BasePopover.Portal>
      <BasePopover.Positioner side={side} align={align} sideOffset={sideOffset}>
        <BasePopover.Popup
          className={`
            min-w-[220px] p-4
            bg-[var(--card-bg)] border border-[var(--card-border)]
            rounded-xl shadow-xl
            animate-fade-in-down
            focus:outline-none
            ${className}
          `}
        >
          <BasePopover.Arrow
            className="
              fill-[var(--card-bg)]
              [&>path:first-child]:stroke-[var(--card-border)]
            "
          />
          {children}
        </BasePopover.Popup>
      </BasePopover.Positioner>
    </BasePopover.Portal>
  );
}

interface PopoverHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function PopoverHeader({ children, className = "" }: PopoverHeaderProps) {
  return (
    <div className={`mb-3 ${className}`}>
      <BasePopover.Title className="font-semibold text-[var(--foreground)]">
        {children}
      </BasePopover.Title>
    </div>
  );
}

interface PopoverDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function PopoverDescription({ children, className = "" }: PopoverDescriptionProps) {
  return (
    <BasePopover.Description
      className={`text-sm text-[var(--muted)] ${className}`}
    >
      {children}
    </BasePopover.Description>
  );
}

export function PopoverClose({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <BasePopover.Close
      className={`
        absolute top-3 right-3 p-1 rounded-md
        text-[var(--muted)] hover:text-[var(--foreground)]
        hover:bg-[var(--accent)] transition-colors
        cursor-pointer
        ${className}
      `}
    >
      {children}
    </BasePopover.Close>
  );
}
