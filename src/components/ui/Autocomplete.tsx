"use client";

import React from "react";
import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";
import { Check, ChevronDown, X } from "lucide-react";

interface AutocompleteOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface AutocompleteProps {
  options: AutocompleteOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  clearable?: boolean;
  className?: string;
}

export function Autocomplete({
  options,
  value,
  defaultValue,
  onValueChange,
  placeholder = "Search...",
  label,
  disabled = false,
  clearable = true,
  className = "",
}: AutocompleteProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-[var(--foreground)]">
          {label}
        </label>
      )}
      <BaseAutocomplete.Root
        items={options}
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        disabled={disabled}
        itemToStringValue={(item) => item?.label ?? ""}
      >
        <div className="relative">
          <BaseAutocomplete.Input
            className={`
              w-full h-10 px-3 pr-16
              bg-[var(--input-bg)] border border-[var(--input-border)]
              rounded-lg text-sm text-[var(--foreground)]
              placeholder:text-[var(--muted)]
              transition-colors duration-150
              focus:outline-none focus:border-[var(--foreground-secondary)]
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
            placeholder={placeholder}
          />

          <BaseAutocomplete.Trigger
            className={`
              absolute right-8 top-1/2 -translate-y-1/2
              p-1 rounded
              text-[var(--muted)] hover:text-[var(--foreground)]
              transition-colors cursor-pointer
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
          >
            <ChevronDown size={16} />
          </BaseAutocomplete.Trigger>

          {clearable && (
            <BaseAutocomplete.Clear
              className={`
                absolute right-2 top-1/2 -translate-y-1/2
                p-1 rounded
                text-[var(--muted)] hover:text-[var(--foreground)]
                hover:bg-[var(--accent)]
                transition-colors cursor-pointer
              `}
            >
              <X size={14} />
            </BaseAutocomplete.Clear>
          )}
        </div>

        <BaseAutocomplete.Portal>
          <BaseAutocomplete.Positioner sideOffset={4} className="z-50">
            <BaseAutocomplete.Popup
              className={`
                min-w-[var(--anchor-width)] max-h-[300px] overflow-auto
                bg-[var(--card-bg)] border border-[var(--card-border)]
                rounded-xl shadow-xl
                p-1
                animate-fade-in-down
              `}
            >
              <BaseAutocomplete.List>
                {(item: AutocompleteOption) => (
                  <BaseAutocomplete.Item
                    value={item.value}
                    disabled={item.disabled}
                    className={`
                      group flex items-center justify-between gap-2
                      px-3 py-2 rounded-lg text-sm
                      cursor-pointer transition-colors
                      text-[var(--foreground)]
                      data-[highlighted]:bg-[var(--accent)]
                      data-[selected]:font-medium
                      data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed
                    `}
                  >
                    <span>{item.label}</span>
                    <Check
                      size={16}
                      className="text-[var(--primary)] opacity-0 group-data-[selected]:opacity-100"
                    />
                  </BaseAutocomplete.Item>
                )}
              </BaseAutocomplete.List>
              <BaseAutocomplete.Empty
                className="px-3 py-6 text-sm text-center text-[var(--muted)]"
              >
                No results found
              </BaseAutocomplete.Empty>
            </BaseAutocomplete.Popup>
          </BaseAutocomplete.Positioner>
        </BaseAutocomplete.Portal>
      </BaseAutocomplete.Root>
    </div>
  );
}

// Grouped Autocomplete for categorized options
interface AutocompleteGroup {
  label: string;
  items: AutocompleteOption[];
}

interface GroupedAutocompleteProps {
  groups: AutocompleteGroup[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  clearable?: boolean;
  className?: string;
}

export function GroupedAutocomplete({
  groups,
  value,
  defaultValue,
  onValueChange,
  placeholder = "Search...",
  label,
  disabled = false,
  clearable = true,
  className = "",
}: GroupedAutocompleteProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-[var(--foreground)]">
          {label}
        </label>
      )}
      <BaseAutocomplete.Root
        items={groups}
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        disabled={disabled}
        itemToStringValue={(item) => item?.label ?? ""}
      >
        <div className="relative">
          <BaseAutocomplete.Input
            className={`
              w-full h-10 px-3 pr-16
              bg-[var(--input-bg)] border border-[var(--input-border)]
              rounded-lg text-sm text-[var(--foreground)]
              placeholder:text-[var(--muted)]
              transition-colors duration-150
              focus:outline-none focus:border-[var(--foreground-secondary)]
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
            placeholder={placeholder}
          />

          <BaseAutocomplete.Trigger
            className={`
              absolute right-8 top-1/2 -translate-y-1/2
              p-1 rounded
              text-[var(--muted)] hover:text-[var(--foreground)]
              transition-colors cursor-pointer
            `}
          >
            <ChevronDown size={16} />
          </BaseAutocomplete.Trigger>

          {clearable && (
            <BaseAutocomplete.Clear
              className={`
                absolute right-2 top-1/2 -translate-y-1/2
                p-1 rounded
                text-[var(--muted)] hover:text-[var(--foreground)]
                hover:bg-[var(--accent)]
                transition-colors cursor-pointer
              `}
            >
              <X size={14} />
            </BaseAutocomplete.Clear>
          )}
        </div>

        <BaseAutocomplete.Portal>
          <BaseAutocomplete.Positioner sideOffset={4} className="z-50">
            <BaseAutocomplete.Popup
              className={`
                min-w-[var(--anchor-width)] max-h-[300px] overflow-auto
                bg-[var(--card-bg)] border border-[var(--card-border)]
                rounded-xl shadow-xl
                p-1
                animate-fade-in-down
              `}
            >
              <BaseAutocomplete.List>
                {(group: AutocompleteGroup) => (
                  <BaseAutocomplete.Group key={group.label}>
                    <BaseAutocomplete.GroupLabel
                      className="px-3 py-2 text-xs font-medium uppercase tracking-wider text-[var(--muted)]"
                    >
                      {group.label}
                    </BaseAutocomplete.GroupLabel>
                    {group.items.map((item) => (
                      <BaseAutocomplete.Item
                        key={item.value}
                        value={item.value}
                        disabled={item.disabled}
                        className={`
                          group flex items-center justify-between gap-2
                          px-3 py-2 rounded-lg text-sm
                          cursor-pointer transition-colors
                          text-[var(--foreground)]
                          data-[highlighted]:bg-[var(--accent)]
                          data-[selected]:font-medium
                          data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed
                        `}
                      >
                        <span>{item.label}</span>
                        <Check
                          size={16}
                          className="text-[var(--primary)] opacity-0 group-data-[selected]:opacity-100"
                        />
                      </BaseAutocomplete.Item>
                    ))}
                  </BaseAutocomplete.Group>
                )}
              </BaseAutocomplete.List>
              <BaseAutocomplete.Empty
                className="px-3 py-6 text-sm text-center text-[var(--muted)]"
              >
                No results found
              </BaseAutocomplete.Empty>
            </BaseAutocomplete.Popup>
          </BaseAutocomplete.Positioner>
        </BaseAutocomplete.Portal>
      </BaseAutocomplete.Root>
    </div>
  );
}
