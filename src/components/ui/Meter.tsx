"use client";

import React from "react";
import { Meter as BaseMeter } from "@base-ui/react/meter";

interface MeterProps {
  value: number;
  min?: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "success" | "warning" | "danger";
  className?: string;
}

const sizeClasses = {
  sm: "h-1.5",
  md: "h-2.5",
  lg: "h-4",
};

const variantClasses = {
  default: "bg-[var(--primary)]",
  success: "bg-[var(--success)]",
  warning: "bg-[var(--warning)]",
  danger: "bg-[var(--danger)]",
};

export function Meter({
  value,
  min = 0,
  max = 100,
  label,
  showValue = false,
  size = "md",
  variant = "default",
  className = "",
}: MeterProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && (
            <span className="text-sm font-medium text-[var(--foreground)]">
              {label}
            </span>
          )}
          {showValue && (
            <span className="text-sm text-[var(--muted)]">
              {value}/{max}
            </span>
          )}
        </div>
      )}
      <BaseMeter.Root
        value={value}
        min={min}
        max={max}
        className={`
          relative w-full overflow-hidden rounded-full
          bg-[var(--accent)]
          ${sizeClasses[size]}
        `}
      >
        <BaseMeter.Indicator
          className={`
            h-full rounded-full transition-all duration-300 ease-out
            ${variantClasses[variant]}
          `}
          style={{ width: `${percentage}%` }}
        />
      </BaseMeter.Root>
    </div>
  );
}

interface GradientMeterProps {
  value: number;
  min?: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  className?: string;
}

export function GradientMeter({
  value,
  min = 0,
  max = 100,
  label,
  showValue = false,
  className = "",
}: GradientMeterProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && (
            <span className="text-sm font-medium text-[var(--foreground)]">
              {label}
            </span>
          )}
          {showValue && (
            <span className="text-sm text-[var(--muted)]">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <BaseMeter.Root
        value={value}
        min={min}
        max={max}
        className="relative w-full h-3 overflow-hidden rounded-full bg-[var(--accent)]"
      >
        <BaseMeter.Indicator
          className="h-full rounded-full transition-all duration-300 ease-out bg-gradient-to-r from-[var(--danger)] via-[var(--warning)] to-[var(--success)]"
          style={{ width: `${percentage}%` }}
        />
      </BaseMeter.Root>
    </div>
  );
}
