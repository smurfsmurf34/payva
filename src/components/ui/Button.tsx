"use client";

import React from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  icon,
  iconPosition = "left",
  className = "",
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center font-medium rounded-lg
    transition-all cursor-pointer
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    btn-press focus-ring
  `;

  const variants = {
    primary: `
      bg-[var(--primary)] text-[#FFFFFC]
      hover:bg-[var(--primary-hover)]
      shadow-sm hover:shadow-md
      active:shadow-sm
    `,
    secondary: `
      bg-[var(--accent)] text-[var(--foreground)]
      hover:bg-[var(--accent-hover)]
    `,
    outline: `
      border border-[var(--card-border)] bg-transparent text-[var(--foreground)]
      hover:bg-[var(--accent)] hover:border-[var(--accent-hover)]
    `,
    ghost: `
      bg-transparent text-[var(--foreground)]
      hover:bg-[var(--accent)]
    `,
    danger: `
      bg-[var(--danger)] text-[#FFFFFC]
      hover:opacity-90
      shadow-sm hover:shadow-md
      active:shadow-sm
    `,
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2",
  };

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 18,
  };

  const renderIcon = () => {
    if (loading) {
      return <Loader2 size={iconSizes[size]} className="animate-spin" />;
    }
    return icon;
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {iconPosition === "left" && renderIcon()}
      {children}
      {iconPosition === "right" && !loading && icon}
    </button>
  );
}

// Animated button with hover effect
export function AnimatedButton({
  children,
  className = "",
  ...props
}: Omit<ButtonProps, "variant">) {
  return (
    <button
      className={`
        relative overflow-hidden
        inline-flex items-center justify-center gap-2
        px-6 py-3 rounded-lg font-medium
        bg-[var(--primary)] text-[#FFFFFC]
        transition-all duration-300
        hover:shadow-lg hover:shadow-[var(--primary)]/25
        btn-press focus-ring
        group
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="
          absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
          translate-x-[-100%] group-hover:translate-x-[100%]
          transition-transform duration-700
        "
      />
    </button>
  );
}

// Icon-only button
interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "ghost" | "danger";
  "aria-label": string;
}

export function IconButton({
  icon,
  size = "md",
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

  const sizes = {
    sm: "p-1.5",
    md: "p-2",
    lg: "p-3",
  };

  return (
    <button
      className={`
        rounded-lg transition-colors
        btn-press focus-ring
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {icon}
    </button>
  );
}

// Textured button - premium tactile style, use sparingly
interface TexturedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "dark" | "primary" | "light";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export function TexturedButton({
  variant = "dark",
  size = "md",
  icon,
  iconPosition = "left",
  className = "",
  children,
  ...props
}: TexturedButtonProps) {
  const sizes = {
    sm: "h-8 px-3 text-sm gap-1.5",
    md: "h-9 px-4 text-sm gap-2",
    lg: "h-11 px-5 text-base gap-2",
  };

  const variantStyles = {
    dark: {
      base: "bg-[#3C3C3E] text-[#FAFAFA] border-[#2C2C2E]",
      hover: "hover:bg-[#4A4A4C] hover:border-[#3A3A3C]",
      active: "active:bg-[#323234]",
      shadow: "shadow-[0_1px_2px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.06)]",
      hoverOverlay: "bg-gradient-to-b from-white/[0.08] to-transparent",
      activeOverlay: "bg-gradient-to-b from-black/[0.08] to-transparent",
    },
    primary: {
      base: "bg-[var(--primary)] text-white border-[var(--primary-active)]",
      hover: "hover:bg-[var(--primary-hover)]",
      active: "active:bg-[var(--primary-active)]",
      shadow: "shadow-[0_1px_2px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]",
      hoverOverlay: "bg-gradient-to-b from-white/[0.1] to-transparent",
      activeOverlay: "bg-gradient-to-b from-black/[0.1] to-transparent",
    },
    light: {
      base: "bg-[#F5F5F5] text-[#1A1A1A] border-[#E0E0E0]",
      hover: "hover:bg-[#EBEBEB] hover:border-[#D4D4D4]",
      active: "active:bg-[#E0E0E0]",
      shadow: "shadow-[0_1px_2px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.8)]",
      hoverOverlay: "bg-gradient-to-b from-black/[0.02] to-transparent",
      activeOverlay: "bg-gradient-to-b from-black/[0.04] to-transparent",
    },
  };

  const v = variantStyles[variant];

  return (
    <button
      className={`
        group relative overflow-hidden
        inline-flex items-center justify-center font-medium rounded-lg
        border transition-all duration-100 ease-out
        cursor-pointer select-none
        disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none
        focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--primary)]
        ${v.base} ${v.hover} ${v.active} ${v.shadow}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {/* Hover overlay */}
      <span
        className={`
          absolute inset-0 opacity-0 pointer-events-none
          group-hover:opacity-100 group-active:opacity-0
          transition-opacity duration-100
          ${v.hoverOverlay}
        `}
      />
      {/* Active overlay */}
      <span
        className={`
          absolute inset-0 opacity-0 pointer-events-none
          group-active:opacity-100
          transition-opacity duration-100
          ${v.activeOverlay}
        `}
      />
      {/* Content */}
      <span className="relative z-10 inline-flex items-center gap-2 truncate">
        {iconPosition === "left" && icon}
        {children}
        {iconPosition === "right" && icon}
      </span>
    </button>
  );
}
