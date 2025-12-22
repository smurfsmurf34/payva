"use client";

import React from "react";
import { Avatar as BaseAvatar } from "@base-ui/react/avatar";

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeClasses = {
  xs: "w-6 h-6 text-xs",
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-12 h-12 text-lg",
  xl: "w-16 h-16 text-xl",
};

export function Avatar({
  src,
  alt = "",
  fallback,
  size = "md",
  className = "",
}: AvatarProps) {
  const initials = fallback || alt?.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase() || "?";

  return (
    <BaseAvatar.Root
      className={`
        relative inline-flex items-center justify-center
        rounded-full overflow-hidden
        bg-[var(--background)] text-[var(--foreground-secondary)]
        border-2 border-[var(--accent)]
        font-medium select-none
        ${sizeClasses[size]}
        ${className}
      `}
    >
      <BaseAvatar.Image
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
      <BaseAvatar.Fallback
        className="flex items-center justify-center w-full h-full bg-[var(--background)] text-[var(--foreground-secondary)]"
      >
        {initials}
      </BaseAvatar.Fallback>
    </BaseAvatar.Root>
  );
}

interface AvatarGroupProps {
  children: React.ReactNode;
  max?: number;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export function AvatarGroup({ children, max = 4, size = "md" }: AvatarGroupProps) {
  const childArray = React.Children.toArray(children);
  const visibleChildren = childArray.slice(0, max);
  const remainingCount = childArray.length - max;

  return (
    <div className="flex -space-x-2">
      {visibleChildren.map((child, index) => (
        <div
          key={index}
          className="rounded-full"
        >
          {React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement<AvatarProps>, { size })
            : child}
        </div>
      ))}
      {remainingCount > 0 && (
        <div
          className={`
            rounded-full
            flex items-center justify-center
            bg-[var(--background)] text-[var(--foreground-secondary)]
            border-2 border-[var(--accent)]
            font-medium
            ${sizeClasses[size]}
          `}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
}
