"use client";

import React from "react";

interface BadgeProps {
  variant?: "default" | "success" | "warning" | "danger" | "info";
  children: React.ReactNode;
  className?: string;
}

export function Badge({
  variant = "default",
  children,
  className = "",
}: BadgeProps) {
  const variants = {
    default: "bg-[var(--accent)] text-[var(--foreground-secondary)]",
    success: "bg-[var(--success-light)] text-[var(--success)]",
    warning: "bg-[var(--warning-light)] text-[var(--warning)]",
    danger: "bg-[var(--danger-light)] text-[var(--danger)]",
    info: "bg-[var(--info-light)] text-[var(--info)]",
  };

  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
