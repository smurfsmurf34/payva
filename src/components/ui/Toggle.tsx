"use client";

import React from "react";
import { Toggle as BaseToggle } from "@base-ui/react/toggle";
import { ToggleGroup as BaseToggleGroup } from "@base-ui/react/toggle-group";

interface ToggleProps {
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  disabled?: boolean;
  children: React.ReactNode;
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "h-8 px-2.5 text-sm",
  md: "h-10 px-3 text-sm",
  lg: "h-12 px-4 text-base",
};

export function Toggle({
  pressed,
  defaultPressed,
  onPressedChange,
  disabled = false,
  children,
  variant = "default",
  size = "md",
  className = "",
}: ToggleProps) {
  return (
    <BaseToggle
      pressed={pressed}
      defaultPressed={defaultPressed}
      onPressedChange={onPressedChange}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-lg font-medium transition-all duration-150
        focus-ring cursor-pointer
        ${sizeClasses[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${
          variant === "outline"
            ? `
              border border-[var(--card-border)]
              text-[var(--muted)] hover:text-[var(--foreground)]
              hover:bg-[var(--accent)]
              data-[pressed]:bg-[var(--primary)] data-[pressed]:text-white
              data-[pressed]:border-[var(--primary)]
            `
            : `
              bg-[var(--accent)] text-[var(--muted)]
              hover:text-[var(--foreground)]
              data-[pressed]:bg-[var(--primary)] data-[pressed]:text-white
            `
        }
        ${className}
      `}
    >
      {children}
    </BaseToggle>
  );
}

interface ToggleGroupProps {
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function ToggleGroup({
  value,
  defaultValue,
  onValueChange,
  disabled = false,
  children,
  className = "",
}: ToggleGroupProps) {
  return (
    <BaseToggleGroup
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      disabled={disabled}
      className={`
        inline-flex items-center gap-1 p-1
        bg-[var(--accent)] rounded-lg
        ${className}
      `}
    >
      {children}
    </BaseToggleGroup>
  );
}

interface ToggleGroupItemProps {
  value: string;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function ToggleGroupItem({
  value,
  disabled = false,
  children,
  className = "",
}: ToggleGroupItemProps) {
  return (
    <BaseToggle
      value={value}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2
        h-8 px-3 rounded-md text-sm font-medium
        transition-all duration-150 cursor-pointer
        text-[var(--muted)] hover:text-[var(--foreground)]
        data-[pressed]:bg-[var(--background)] data-[pressed]:text-[var(--foreground)]
        data-[pressed]:shadow-sm
        focus-ring
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {children}
    </BaseToggle>
  );
}
