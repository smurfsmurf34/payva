"use client";

import React from "react";
import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactElement;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  delayDuration?: number;
}

export function Tooltip({
  content,
  children,
  side = "top",
  align = "center",
  delayDuration = 200,
}: TooltipProps) {
  return (
    <BaseTooltip.Provider>
      <BaseTooltip.Root>
        <BaseTooltip.Trigger render={children} />
        <BaseTooltip.Portal>
          <BaseTooltip.Positioner side={side} align={align} sideOffset={8}>
            <BaseTooltip.Popup
              className="
                px-3 py-1.5 text-sm
                bg-[var(--foreground)] text-[var(--background)]
                rounded-lg shadow-lg
                animate-fade-in
                max-w-xs
              "
            >
              {content}
              <BaseTooltip.Arrow
                className="fill-[var(--foreground)]"
              />
            </BaseTooltip.Popup>
          </BaseTooltip.Positioner>
        </BaseTooltip.Portal>
      </BaseTooltip.Root>
    </BaseTooltip.Provider>
  );
}

// Icon button with tooltip
interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
  variant?: "default" | "ghost" | "danger";
}

export function IconButton({
  icon,
  label,
  variant = "default",
  className = "",
  ...props
}: IconButtonProps) {
  const variants = {
    default:
      "bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--foreground)]",
    ghost:
      "bg-transparent hover:bg-[var(--accent)] text-[var(--muted)] hover:text-[var(--foreground)]",
    danger:
      "bg-transparent hover:bg-[var(--danger-light)] text-[var(--muted)] hover:text-[var(--danger)]",
  };

  return (
    <Tooltip content={label}>
      <button
        className={`
          p-2 rounded-lg transition-colors cursor-pointer
          btn-press focus-ring
          ${variants[variant]}
          ${className}
        `}
        aria-label={label}
        {...props}
      >
        {icon}
      </button>
    </Tooltip>
  );
}
