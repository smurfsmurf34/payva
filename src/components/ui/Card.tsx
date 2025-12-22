"use client";

import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "gradient" | "glass";
}

export function Card({ children, className = "", variant = "default" }: CardProps) {
  const variants = {
    default: "bg-[var(--card-bg)] border border-[var(--card-border)]",
    gradient: "bg-gradient-to-br from-[var(--card-bg)] to-[var(--accent)] border border-[var(--card-border)]",
    glass: "glass",
  };

  return (
    <div
      className={`
        rounded-2xl p-6 transition-all duration-200
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function CardHeader({ title, description, action }: CardHeaderProps) {
  return (
    <div className="flex items-start justify-between mb-4">
      <div>
        <h3 className="font-semibold text-lg tracking-tight">{title}</h3>
        {description && (
          <p className="text-sm text-[var(--muted)] mt-1">{description}</p>
        )}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
  variant?: "default" | "gradient" | "minimal" | "accent";
}

export function StatCard({
  title,
  value,
  icon,
  trend,
  className = "",
  variant = "default",
}: StatCardProps) {
  if (variant === "gradient") {
    return (
      <div
        className={`
          relative overflow-hidden rounded-2xl p-6
          bg-gradient-to-br from-[var(--primary)] to-[var(--primary-hover)]
          text-white shadow-lg
          ${className}
        `}
      >
        {/* Background decoration */}
        <div className="absolute top-4 right-2 w-24 h-24 opacity-20">
          <div className="w-full h-full">
            {icon}
          </div>
        </div>

        <div className="relative z-10">
          <p className="text-xs font-medium uppercase tracking-wider text-white/70">
            {title}
          </p>
          <p className="text-4xl font-mono font-bold mt-2 tracking-tight">{value}</p>
          {trend && (
            <p className="text-sm mt-3 font-medium text-white/80">
              <span className="font-mono">{trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}%</span> from last month
            </p>
          )}
        </div>
      </div>
    );
  }

  if (variant === "minimal") {
    return (
      <div className={`p-6 ${className}`}>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[var(--foreground-tertiary)]">{icon}</span>
          <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
            {title}
          </p>
        </div>
        <p className="text-4xl font-mono font-bold tracking-tight">{value}</p>
        {trend && (
          <p
            className={`text-sm mt-2 font-mono font-medium ${
              trend.isPositive ? "text-[var(--success)]" : "text-[var(--danger)]"
            }`}
          >
            {trend.isPositive ? "+" : ""}{trend.value}%
          </p>
        )}
      </div>
    );
  }

  if (variant === "accent") {
    return (
      <div
        className={`
          rounded-2xl p-6
          bg-[var(--card-bg)] border border-[var(--card-border)]
          ${className}
        `}
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
              {title}
            </p>
            <p className="text-3xl font-mono font-bold mt-2 tracking-tight">{value}</p>
            {trend && (
              <p
                className={`text-sm mt-2 font-medium ${
                  trend.isPositive ? "text-[var(--success)]" : "text-[var(--danger)]"
                }`}
              >
                <span className="font-mono">{trend.isPositive ? "+" : ""}{trend.value}%</span> from last month
              </p>
            )}
          </div>
          <div className="text-[var(--muted)]">{icon}</div>
        </div>
      </div>
    );
  }

  // Default variant - refined
  return (
    <Card className={className}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-[var(--foreground-tertiary)]">{icon}</span>
            <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
              {title}
            </p>
          </div>
          <p className="text-3xl font-mono font-bold mt-3 tracking-tight">{value}</p>
          {trend && (
            <div className="flex items-center gap-2 mt-2">
              <span
                className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-mono font-medium ${
                  trend.isPositive
                    ? "bg-[var(--success-light)] text-[var(--success)]"
                    : "bg-[var(--danger-light)] text-[var(--danger)]"
                }`}
              >
                {trend.isPositive ? "+" : ""}{trend.value}%
              </span>
              <span className="text-xs text-[var(--muted)]">vs last month</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

// Gradient Card with icon background
interface GradientCardProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  gradient?: "primary" | "success" | "warning" | "danger" | "gold";
  className?: string;
}

export function GradientCard({
  children,
  icon,
  gradient = "primary",
  className = "",
}: GradientCardProps) {
  const gradients = {
    primary: "from-[var(--primary)] via-[var(--primary-hover)] to-[var(--primary)]",
    success: "from-[var(--success)] to-emerald-600",
    warning: "from-[var(--warning)] to-orange-600",
    danger: "from-[var(--danger)] to-rose-600",
    gold: "from-amber-500 via-yellow-500 to-amber-600",
  };

  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl p-6
        bg-gradient-to-br ${gradients[gradient]}
        text-white shadow-lg
        ${className}
      `}
    >
      {/* Background icon */}
      {icon && (
        <div className="absolute top-2 -right-2 w-28 h-28 opacity-20 transform rotate-12">
          {icon}
        </div>
      )}

      {/* Subtle noise overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}

// Metric Card for data displays
interface MetricCardProps {
  label: string;
  value: string | number;
  subvalue?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function MetricCard({
  label,
  value,
  subvalue,
  icon,
  className = "",
}: MetricCardProps) {
  // Determine if subvalue indicates positive or negative change
  const isPositive = subvalue?.startsWith("+");
  const isNegative = subvalue?.startsWith("-");

  return (
    <div
      className={`
        p-4 rounded-xl
        bg-[var(--accent)] border border-transparent
        hover:border-[var(--card-border)] transition-colors
        ${className}
      `}
    >
      <div className="flex items-center gap-2 mb-2">
        {icon && (
          <div className="text-[var(--foreground-tertiary)]">{icon}</div>
        )}
        <p className="text-xs text-[var(--muted)] uppercase tracking-wider truncate">
          {label}
        </p>
      </div>
      <div className="flex items-baseline gap-2">
        <p className="text-2xl font-mono font-bold tracking-tight">{value}</p>
        {subvalue && (
          <span
            className={`text-xs font-mono font-medium ${
              isPositive
                ? "text-[var(--success)]"
                : isNegative
                ? "text-[var(--danger)]"
                : "text-[var(--muted)]"
            }`}
          >
            {subvalue}
          </span>
        )}
      </div>
    </div>
  );
}
