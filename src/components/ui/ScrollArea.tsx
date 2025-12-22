"use client";

import React from "react";
import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area";

interface ScrollAreaProps {
  children: React.ReactNode;
  className?: string;
  maxHeight?: string | number;
}

export function ScrollArea({ children, className = "", maxHeight }: ScrollAreaProps) {
  const style = maxHeight ? { maxHeight: typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight } : undefined;

  return (
    <BaseScrollArea.Root
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      <BaseScrollArea.Viewport className="h-full w-full overscroll-contain">
        {children}
      </BaseScrollArea.Viewport>
      <BaseScrollArea.Scrollbar
        orientation="vertical"
        className="
          flex w-2.5 touch-none select-none p-0.5
          transition-opacity duration-150
          hover:bg-[var(--accent)]
          data-[state=hidden]:opacity-0
        "
      >
        <BaseScrollArea.Thumb
          className="
            relative flex-1 rounded-full
            bg-[var(--muted)] opacity-50
            hover:opacity-80 transition-opacity
            before:absolute before:left-1/2 before:top-1/2
            before:h-full before:min-h-[44px]
            before:w-full before:min-w-[44px]
            before:-translate-x-1/2 before:-translate-y-1/2
          "
        />
      </BaseScrollArea.Scrollbar>
      <BaseScrollArea.Scrollbar
        orientation="horizontal"
        className="
          flex h-2.5 touch-none select-none flex-col p-0.5
          transition-opacity duration-150
          hover:bg-[var(--accent)]
          data-[state=hidden]:opacity-0
        "
      >
        <BaseScrollArea.Thumb
          className="
            relative flex-1 rounded-full
            bg-[var(--muted)] opacity-50
            hover:opacity-80 transition-opacity
          "
        />
      </BaseScrollArea.Scrollbar>
      <BaseScrollArea.Corner className="bg-[var(--accent)]" />
    </BaseScrollArea.Root>
  );
}
