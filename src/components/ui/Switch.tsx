"use client";

import React from "react";
import { Switch as BaseSwitch } from "@base-ui/react/switch";

interface SwitchProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  description?: string;
  size?: "sm" | "md" | "lg";
}

export function Switch({
  checked = false,
  onCheckedChange,
  disabled = false,
  label,
  description,
  size = "md",
}: SwitchProps) {
  const id = React.useId();

  const sizes = {
    sm: { track: "w-8 h-5", thumb: "w-4 h-4", translate: "translate-x-3" },
    md: { track: "w-10 h-6", thumb: "w-5 h-5", translate: "translate-x-4" },
    lg: { track: "w-12 h-7", thumb: "w-6 h-6", translate: "translate-x-5" },
  };

  const { track, thumb, translate } = sizes[size];

  return (
    <div className="flex items-center justify-between gap-4">
      {(label || description) && (
        <div className="flex flex-col">
          {label && (
            <label
              htmlFor={id}
              className={`text-sm font-medium cursor-pointer ${
                disabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {label}
            </label>
          )}
          {description && (
            <span className="text-xs text-[var(--muted)]">{description}</span>
          )}
        </div>
      )}
      <BaseSwitch.Root
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        className={`
          ${track} rounded-full p-0.5 transition-colors duration-200 cursor-pointer
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          ${checked ? "bg-[var(--primary)]" : "bg-[var(--accent-hover)]"}
        `}
      >
        <BaseSwitch.Thumb
          className={`
            ${thumb} rounded-full bg-white shadow-sm block
            transition-transform duration-200
            ${checked ? translate : "translate-x-0"}
          `}
        />
      </BaseSwitch.Root>
    </div>
  );
}
