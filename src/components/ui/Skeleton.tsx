"use client";

import React from "react";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular";
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
}

export function Skeleton({
  className = "",
  variant = "text",
  width,
  height,
  style,
}: SkeletonProps) {
  const variantClasses = {
    text: "rounded-md",
    circular: "rounded-full",
    rectangular: "rounded-lg",
  };

  const defaultHeight = variant === "text" ? "1em" : height;

  return (
    <div
      className={`skeleton ${variantClasses[variant]} ${className}`}
      style={{
        width: width,
        height: defaultHeight,
        ...style,
      }}
      aria-hidden="true"
    />
  );
}

// Pre-built skeleton patterns
export function SkeletonText({
  lines = 3,
  className = "",
}: {
  lines?: number;
  className?: string;
}) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className="h-4"
          style={{ width: i === lines - 1 ? "60%" : "100%" }}
        />
      ))}
    </div>
  );
}

export function SkeletonAvatar({
  size = 40,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Skeleton
      variant="circular"
      width={size}
      height={size}
      className={className}
    />
  );
}

export function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 ${className}`}
    >
      <div className="flex items-start gap-4">
        <SkeletonAvatar size={48} />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-5 w-1/3" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
      <div className="mt-4">
        <SkeletonText lines={3} />
      </div>
    </div>
  );
}

export function SkeletonTable({
  rows = 5,
  columns = 4,
  className = "",
}: {
  rows?: number;
  columns?: number;
  className?: string;
}) {
  return (
    <div className={`space-y-3 ${className}`}>
      {/* Header */}
      <div className="flex gap-4 pb-3 border-b border-[var(--card-border)]">
        {Array.from({ length: columns }).map((_, i) => (
          <Skeleton key={i} className="h-4 flex-1" />
        ))}
      </div>
      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex gap-4 py-3">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <Skeleton
              key={colIndex}
              className="h-5 flex-1"
              style={{
                width: colIndex === 0 ? "20%" : undefined,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export function SkeletonStat({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 ${className}`}
    >
      <Skeleton className="h-4 w-24 mb-2" />
      <Skeleton className="h-8 w-20 mb-2" />
      <Skeleton className="h-3 w-32" />
    </div>
  );
}

// List skeleton
export function SkeletonList({
  items = 5,
  className = "",
}: {
  items?: number;
  className?: string;
}) {
  return (
    <div className={`space-y-4 ${className}`}>
      {Array.from({ length: items }).map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <SkeletonAvatar size={40} />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}
