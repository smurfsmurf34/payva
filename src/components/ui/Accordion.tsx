"use client";

import React from "react";
import { Collapsible } from "@base-ui-components/react/collapsible";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  children: React.ReactNode;
  type?: "single" | "multiple";
  defaultValue?: string[];
}

const AccordionContext = React.createContext<{
  type: "single" | "multiple";
  openItems: string[];
  toggle: (value: string) => void;
}>({
  type: "single",
  openItems: [],
  toggle: () => {},
});

export function Accordion({
  children,
  type = "single",
  defaultValue = [],
}: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<string[]>(defaultValue);

  const toggle = (value: string) => {
    if (type === "single") {
      setOpenItems(openItems.includes(value) ? [] : [value]);
    } else {
      setOpenItems(
        openItems.includes(value)
          ? openItems.filter((item) => item !== value)
          : [...openItems, value]
      );
    }
  };

  return (
    <AccordionContext.Provider value={{ type, openItems, toggle }}>
      <div className="space-y-2">{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
}

export function AccordionItem({ value, children }: AccordionItemProps) {
  const { openItems, toggle } = React.useContext(AccordionContext);
  const isOpen = openItems.includes(value);

  return (
    <Collapsible.Root open={isOpen} onOpenChange={() => toggle(value)}>
      <div className="border border-[var(--card-border)] rounded-xl overflow-hidden">
        {children}
      </div>
    </Collapsible.Root>
  );
}

interface AccordionTriggerProps {
  children: React.ReactNode;
}

export function AccordionTrigger({ children }: AccordionTriggerProps) {
  return (
    <Collapsible.Trigger
      className="
        flex items-center justify-between w-full px-4 py-3
        text-left font-medium text-[var(--foreground)]
        bg-[var(--card-bg)] hover:bg-[var(--accent)]
        transition-colors cursor-pointer
        group
      "
    >
      {children}
      <ChevronDown
        size={18}
        className="text-[var(--muted)] transition-transform duration-200 group-data-[open]:rotate-180"
      />
    </Collapsible.Trigger>
  );
}

interface AccordionContentProps {
  children: React.ReactNode;
}

export function AccordionContent({ children }: AccordionContentProps) {
  return (
    <Collapsible.Panel className="overflow-hidden data-[open]:animate-accordion-down data-[closed]:animate-accordion-up">
      <div className="px-4 py-3 text-sm text-[var(--foreground-secondary)] border-t border-[var(--card-border)] bg-[var(--card-bg)]">
        {children}
      </div>
    </Collapsible.Panel>
  );
}

// Simple collapsible component for single-item use
interface CollapsibleCardProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function CollapsibleCard({
  title,
  children,
  defaultOpen = false,
}: CollapsibleCardProps) {
  const [open, setOpen] = React.useState(defaultOpen);

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <div className="border border-[var(--card-border)] rounded-xl overflow-hidden">
        <Collapsible.Trigger
          className="
            flex items-center justify-between w-full px-4 py-3
            text-left font-medium text-[var(--foreground)]
            bg-[var(--card-bg)] hover:bg-[var(--accent)]
            transition-colors cursor-pointer
            group
          "
        >
          {title}
          <ChevronDown
            size={18}
            className="text-[var(--muted)] transition-transform duration-200 group-data-[open]:rotate-180"
          />
        </Collapsible.Trigger>
        <Collapsible.Panel className="overflow-hidden data-[open]:animate-accordion-down data-[closed]:animate-accordion-up">
          <div className="px-4 py-3 text-sm text-[var(--foreground-secondary)] border-t border-[var(--card-border)] bg-[var(--card-bg)]">
            {children}
          </div>
        </Collapsible.Panel>
      </div>
    </Collapsible.Root>
  );
}
