"use client";

import React, { useState } from "react";
import { Menu } from "@base-ui/react/menu";
import { CaretDown, Check } from "@phosphor-icons/react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({
  label,
  error,
  className = "",
  id,
  ...props
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-xs font-medium uppercase tracking-wider text-[var(--foreground)]"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`
          w-full px-3 py-2 rounded-lg border border-[var(--input-border)]
          bg-[var(--input-bg)] text-[var(--foreground)]
          placeholder:text-[var(--muted)]
          focus:outline-none
          transition-colors
          ${error ? "border-[var(--danger)]" : ""}
          ${className}
        `}
        {...props}
      />
      {error && <p className="text-sm text-[var(--danger)]">{error}</p>}
    </div>
  );
}

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function Textarea({
  label,
  error,
  className = "",
  id,
  ...props
}: TextareaProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-xs font-medium uppercase tracking-wider text-[var(--foreground)]"
        >
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        className={`
          w-full px-3 py-2 rounded-lg border border-[var(--input-border)]
          bg-[var(--input-bg)] text-[var(--foreground)]
          placeholder:text-[var(--muted)]
          focus:outline-none
          transition-colors resize-none
          ${error ? "border-[var(--danger)]" : ""}
          ${className}
        `}
        {...props}
      />
      {error && <p className="text-sm text-[var(--danger)]">{error}</p>}
    </div>
  );
}

interface SelectProps {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (e: { target: { value: string } }) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function Select({
  label,
  error,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  className = "",
}: SelectProps) {
  const [open, setOpen] = useState(false);

  const selectedOption = options.find((opt) => opt.value === value);
  const displayLabel = selectedOption?.label || placeholder;

  const handleSelect = (optionValue: string) => {
    if (onChange) {
      onChange({ target: { value: optionValue } });
    }
    setOpen(false);
  };

  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-xs font-medium uppercase tracking-wider text-[var(--foreground)]">
          {label}
        </label>
      )}
      <Menu.Root open={open} onOpenChange={setOpen} modal={false}>
        <Menu.Trigger
          disabled={disabled}
          className={`
            w-full flex items-center justify-between px-3 py-2 rounded-lg
            border border-[var(--input-border)]
            bg-[var(--input-bg)] text-[var(--foreground)]
            hover:bg-[var(--accent)] transition-colors cursor-pointer
            focus:outline-none
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? "border-[var(--danger)]" : ""}
            ${!selectedOption ? "text-[var(--muted)]" : ""}
            ${className}
          `}
        >
          <span className="truncate text-sm">{displayLabel}</span>
          <CaretDown
            size={16}
            className={`flex-shrink-0 text-[var(--muted)] transition-transform ${open ? "rotate-180" : ""}`}
          />
        </Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner align="start" sideOffset={4} className="w-[var(--anchor-width)]">
            <Menu.Popup
              className={`
                w-full p-1
                bg-[var(--card-bg)] border border-[var(--card-border)]
                rounded-xl shadow-xl
                animate-fade-in-down
                outline-none
                max-h-[240px] overflow-y-auto
              `}
            >
              {options.map((option) => (
                <Menu.Item
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className={`
                    flex items-center justify-between gap-2 w-full px-3 py-2 rounded-lg text-sm
                    transition-colors cursor-pointer
                    outline-none
                    text-[var(--foreground)] hover:bg-[var(--accent)] data-[highlighted]:bg-[var(--accent)]
                  `}
                >
                  <span className="truncate">{option.label}</span>
                  {value === option.value && (
                    <Check size={16} weight="bold" className="flex-shrink-0 text-[var(--primary)]" />
                  )}
                </Menu.Item>
              ))}
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>
      {error && <p className="text-sm text-[var(--danger)]">{error}</p>}
    </div>
  );
}
