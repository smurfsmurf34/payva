"use client";

import React from "react";
import { NumberField as BaseNumberField } from "@base-ui/react/number-field";
import { Minus, Plus } from "lucide-react";

interface NumberFieldProps {
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number | null) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  label?: string;
  description?: string;
  error?: string;
  placeholder?: string;
  className?: string;
}

export function NumberField({
  value,
  defaultValue,
  onValueChange,
  min,
  max,
  step = 1,
  disabled = false,
  label,
  description,
  error,
  placeholder,
  className = "",
}: NumberFieldProps) {
  return (
    <BaseNumberField.Root
      value={value}
      defaultValue={defaultValue}
      onValueChange={(val) => onValueChange?.(val)}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      className={`flex flex-col gap-1.5 ${className}`}
    >
      {label && (
        <BaseNumberField.ScrubArea className="cursor-ew-resize">
          <label className="text-sm font-medium text-[var(--foreground)]">
            {label}
          </label>
        </BaseNumberField.ScrubArea>
      )}

      <BaseNumberField.Group
        className={`
          flex items-center
          border rounded-lg overflow-hidden
          transition-all duration-150
          ${error ? "border-[var(--danger)]" : "border-[var(--input-border)]"}
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          focus-within:ring-2 focus-within:ring-[var(--primary)] focus-within:ring-offset-2
          focus-within:ring-offset-[var(--background)]
        `}
      >
        <BaseNumberField.Decrement
          className={`
            flex items-center justify-center w-10 h-10
            bg-[var(--accent)] text-[var(--muted)]
            hover:bg-[var(--card-border)] hover:text-[var(--foreground)]
            transition-colors cursor-pointer
            disabled:opacity-50 disabled:cursor-not-allowed
            border-r border-[var(--input-border)]
          `}
        >
          <Minus size={16} />
        </BaseNumberField.Decrement>

        <BaseNumberField.Input
          placeholder={placeholder}
          className={`
            flex-1 h-10 px-3
            bg-[var(--input-bg)] text-[var(--foreground)]
            text-center text-sm font-medium
            outline-none
            [appearance:textfield]
            [&::-webkit-outer-spin-button]:appearance-none
            [&::-webkit-inner-spin-button]:appearance-none
          `}
        />

        <BaseNumberField.Increment
          className={`
            flex items-center justify-center w-10 h-10
            bg-[var(--accent)] text-[var(--muted)]
            hover:bg-[var(--card-border)] hover:text-[var(--foreground)]
            transition-colors cursor-pointer
            disabled:opacity-50 disabled:cursor-not-allowed
            border-l border-[var(--input-border)]
          `}
        >
          <Plus size={16} />
        </BaseNumberField.Increment>
      </BaseNumberField.Group>

      {description && !error && (
        <p className="text-xs text-[var(--muted)]">{description}</p>
      )}
      {error && (
        <p className="text-xs text-[var(--danger)]">{error}</p>
      )}
    </BaseNumberField.Root>
  );
}

interface CompactNumberFieldProps {
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number | null) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  className?: string;
}

export function CompactNumberField({
  value,
  defaultValue,
  onValueChange,
  min,
  max,
  step = 1,
  disabled = false,
  className = "",
}: CompactNumberFieldProps) {
  return (
    <BaseNumberField.Root
      value={value}
      defaultValue={defaultValue}
      onValueChange={(val) => onValueChange?.(val)}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      className={className}
    >
      <BaseNumberField.Group
        className={`
          inline-flex items-center gap-1
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        `}
      >
        <BaseNumberField.Decrement
          className={`
            flex items-center justify-center w-7 h-7
            rounded-md bg-[var(--accent)] text-[var(--muted)]
            hover:bg-[var(--card-border)] hover:text-[var(--foreground)]
            transition-colors cursor-pointer
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        >
          <Minus size={14} />
        </BaseNumberField.Decrement>

        <BaseNumberField.Input
          className={`
            w-12 h-7 px-1
            bg-transparent text-[var(--foreground)]
            text-center text-sm font-medium
            outline-none rounded-md
            focus:ring-2 focus:ring-[var(--primary)]
            [appearance:textfield]
            [&::-webkit-outer-spin-button]:appearance-none
            [&::-webkit-inner-spin-button]:appearance-none
          `}
        />

        <BaseNumberField.Increment
          className={`
            flex items-center justify-center w-7 h-7
            rounded-md bg-[var(--accent)] text-[var(--muted)]
            hover:bg-[var(--card-border)] hover:text-[var(--foreground)]
            transition-colors cursor-pointer
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        >
          <Plus size={14} />
        </BaseNumberField.Increment>
      </BaseNumberField.Group>
    </BaseNumberField.Root>
  );
}
