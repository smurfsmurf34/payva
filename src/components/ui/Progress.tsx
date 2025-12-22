"use client";

import React from "react";
import { Progress as BaseProgress } from "@base-ui-components/react/progress";

interface ProgressProps {
  value?: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "success" | "warning" | "danger";
}

export function Progress({
  value = 0,
  max = 100,
  label,
  showValue = false,
  size = "md",
  variant = "default",
}: ProgressProps) {
  const percentage = Math.round((value / max) * 100);

  const sizes = {
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-4",
  };

  const variants = {
    default: "bg-[var(--primary)]",
    success: "bg-[var(--success)]",
    warning: "bg-[var(--warning)]",
    danger: "bg-[var(--danger)]",
  };

  return (
    <div className="space-y-2">
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && (
            <span className="text-sm font-medium text-[var(--foreground)]">
              {label}
            </span>
          )}
          {showValue && (
            <span className="text-sm font-mono text-[var(--muted)]">
              {percentage}%
            </span>
          )}
        </div>
      )}
      <BaseProgress.Root
        value={value}
        max={max}
        className={`relative w-full ${sizes[size]} rounded-full bg-[var(--accent)] overflow-hidden`}
      >
        <BaseProgress.Indicator
          className={`h-full rounded-full transition-all duration-300 ${variants[variant]}`}
          style={{ width: `${percentage}%` }}
        />
      </BaseProgress.Root>
    </div>
  );
}

// Circular progress variant
interface CircularProgressProps {
  value?: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  showValue?: boolean;
  variant?: "default" | "success" | "warning" | "danger";
}

export function CircularProgress({
  value = 0,
  max = 100,
  size = 64,
  strokeWidth = 6,
  showValue = true,
  variant = "default",
}: CircularProgressProps) {
  const percentage = Math.round((value / max) * 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  const variants = {
    default: "stroke-[var(--primary)]",
    success: "stroke-[var(--success)]",
    warning: "stroke-[var(--warning)]",
    danger: "stroke-[var(--danger)]",
  };

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          className="stroke-[var(--accent)]"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={`${variants[variant]} transition-all duration-300`}
        />
      </svg>
      {showValue && (
        <span className="absolute text-sm font-mono font-medium">
          {percentage}%
        </span>
      )}
    </div>
  );
}
