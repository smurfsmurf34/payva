"use client";

import React from "react";
import { Separator as BaseSeparator } from "@base-ui/react/separator";

interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
  label?: string;
}

export function Separator({
  orientation = "horizontal",
  className = "",
  label,
}: SeparatorProps) {
  if (label) {
    return (
      <div
        className={`
          flex items-center gap-4
          ${orientation === "vertical" ? "flex-col h-full" : "w-full"}
          ${className}
        `}
      >
        <BaseSeparator
          className={
            orientation === "vertical"
              ? "w-px flex-1 bg-[var(--card-border)]"
              : "h-px flex-1 bg-[var(--card-border)]"
          }
        />
        <span className="text-xs text-[var(--muted)] font-medium uppercase tracking-wider px-2">
          {label}
        </span>
        <BaseSeparator
          className={
            orientation === "vertical"
              ? "w-px flex-1 bg-[var(--card-border)]"
              : "h-px flex-1 bg-[var(--card-border)]"
          }
        />
      </div>
    );
  }

  return (
    <BaseSeparator
      className={`
        ${
          orientation === "vertical"
            ? "w-px h-full min-h-[20px] bg-[var(--card-border)]"
            : "h-px w-full bg-[var(--card-border)]"
        }
        ${className}
      `}
    />
  );
}
