"use client";

import React from "react";
import { PreviewCard as BasePreviewCard } from "@base-ui/react/preview-card";

interface PreviewCardProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function PreviewCard({ children, defaultOpen, open, onOpenChange }: PreviewCardProps) {
  return (
    <BasePreviewCard.Root defaultOpen={defaultOpen} open={open} onOpenChange={onOpenChange}>
      {children}
    </BasePreviewCard.Root>
  );
}

interface PreviewCardTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export function PreviewCardTrigger({ children, className = "" }: PreviewCardTriggerProps) {
  return (
    <BasePreviewCard.Trigger
      className={`
        cursor-pointer
        text-[var(--primary)] hover:underline
        ${className}
      `}
    >
      {children}
    </BasePreviewCard.Trigger>
  );
}

interface PreviewCardContentProps {
  children: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  sideOffset?: number;
  className?: string;
}

export function PreviewCardContent({
  children,
  side = "top",
  align = "center",
  sideOffset = 8,
  className = "",
}: PreviewCardContentProps) {
  return (
    <BasePreviewCard.Portal>
      <BasePreviewCard.Positioner side={side} align={align} sideOffset={sideOffset}>
        <BasePreviewCard.Popup
          className={`
            w-80 p-4
            bg-[var(--card-bg)] border border-[var(--card-border)]
            rounded-xl shadow-xl
            animate-fade-in
            ${className}
          `}
        >
          <BasePreviewCard.Arrow
            className="
              fill-[var(--card-bg)]
              [&>path:first-child]:stroke-[var(--card-border)]
            "
          />
          {children}
        </BasePreviewCard.Popup>
      </BasePreviewCard.Positioner>
    </BasePreviewCard.Portal>
  );
}

interface UserPreviewCardProps {
  trigger: React.ReactNode;
  name: string;
  username?: string;
  avatar?: string;
  bio?: string;
  stats?: { label: string; value: string | number }[];
  className?: string;
}

export function UserPreviewCard({
  trigger,
  name,
  username,
  avatar,
  bio,
  stats,
  className = "",
}: UserPreviewCardProps) {
  return (
    <PreviewCard>
      <PreviewCardTrigger className={className}>{trigger}</PreviewCardTrigger>
      <PreviewCardContent>
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-3">
            {avatar && (
              <img
                src={avatar}
                alt={name}
                className="w-12 h-12 rounded-full object-cover"
              />
            )}
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-[var(--foreground)] truncate">{name}</p>
              {username && (
                <p className="text-sm text-[var(--muted)]">@{username}</p>
              )}
            </div>
          </div>
          {bio && (
            <p className="text-sm text-[var(--foreground)] line-clamp-2">{bio}</p>
          )}
          {stats && stats.length > 0 && (
            <div className="flex gap-4 pt-2 border-t border-[var(--card-border)]">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="font-semibold text-[var(--foreground)]">
                    {stat.value}
                  </span>
                  <span className="text-xs text-[var(--muted)]">{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </PreviewCardContent>
    </PreviewCard>
  );
}

interface LinkPreviewCardProps {
  href: string;
  children: React.ReactNode;
  title: string;
  description?: string;
  image?: string;
  favicon?: string;
  className?: string;
}

export function LinkPreviewCard({
  href,
  children,
  title,
  description,
  image,
  favicon,
  className = "",
}: LinkPreviewCardProps) {
  return (
    <PreviewCard>
      <PreviewCardTrigger className={className}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </PreviewCardTrigger>
      <PreviewCardContent>
        <div className="flex flex-col gap-2">
          {image && (
            <img
              src={image}
              alt={title}
              className="w-full h-32 object-cover rounded-lg"
            />
          )}
          <div className="flex items-start gap-2">
            {favicon && (
              <img src={favicon} alt="" className="w-4 h-4 mt-0.5" />
            )}
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-[var(--foreground)] line-clamp-1">
                {title}
              </p>
              {description && (
                <p className="text-sm text-[var(--muted)] line-clamp-2 mt-1">
                  {description}
                </p>
              )}
              <p className="text-xs text-[var(--muted)] mt-1 truncate">
                {new URL(href).hostname}
              </p>
            </div>
          </div>
        </div>
      </PreviewCardContent>
    </PreviewCard>
  );
}
