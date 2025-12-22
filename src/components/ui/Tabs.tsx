"use client";

import React from "react";
import { Tabs as BaseTabs } from "@base-ui-components/react/tabs";

interface TabsProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}

export function Tabs({ defaultValue, value, onValueChange, children }: TabsProps) {
  return (
    <BaseTabs.Root
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
    >
      {children}
    </BaseTabs.Root>
  );
}

interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

export function TabsList({ children, className = "" }: TabsListProps) {
  return (
    <BaseTabs.List
      className={`
        flex gap-1 p-1 bg-[var(--accent)] rounded-lg
        ${className}
      `}
    >
      {children}
    </BaseTabs.List>
  );
}

interface TabProps {
  value: string;
  children: React.ReactNode;
  disabled?: boolean;
}

export function Tab({ value, children, disabled = false }: TabProps) {
  return (
    <BaseTabs.Tab
      value={value}
      disabled={disabled}
      className={`
        flex-1 px-4 py-2 text-sm font-medium rounded-md
        transition-all duration-200 cursor-pointer
        text-[var(--muted)] hover:text-[var(--foreground)]
        data-[selected]:bg-[var(--card-bg)] data-[selected]:text-[var(--foreground)] data-[selected]:shadow-sm
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2
      `}
    >
      {children}
    </BaseTabs.Tab>
  );
}

interface TabPanelProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export function TabPanel({ value, children, className = "" }: TabPanelProps) {
  return (
    <BaseTabs.Panel
      value={value}
      className={`
        mt-4 focus:outline-none
        ${className}
      `}
    >
      {children}
    </BaseTabs.Panel>
  );
}

// Variant: Pills style tabs
interface TabsPillsProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}

export function TabsPills({ defaultValue, value, onValueChange, children }: TabsPillsProps) {
  return (
    <BaseTabs.Root
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
    >
      {children}
    </BaseTabs.Root>
  );
}

export function TabsPillsList({ children, className = "" }: TabsListProps) {
  return (
    <BaseTabs.List
      className={`
        flex gap-2
        ${className}
      `}
    >
      {children}
    </BaseTabs.List>
  );
}

export function TabPill({ value, children, disabled = false }: TabProps) {
  return (
    <BaseTabs.Tab
      value={value}
      disabled={disabled}
      className={`
        px-4 py-2 text-sm font-medium rounded-full
        transition-all duration-200 cursor-pointer
        border border-transparent
        text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--accent)]
        data-[selected]:bg-[var(--primary)] data-[selected]:text-white data-[selected]:border-[var(--primary)]
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2
      `}
    >
      {children}
    </BaseTabs.Tab>
  );
}
