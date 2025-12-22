"use client";

import React from "react";
import { Checkbox as BaseCheckbox } from "@base-ui-components/react/checkbox";
import { Check, Minus } from "lucide-react";

interface CheckboxProps {
  checked?: boolean | "indeterminate";
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  description?: string;
  id?: string;
}

export function Checkbox({
  checked = false,
  onCheckedChange,
  disabled = false,
  label,
  description,
  id,
}: CheckboxProps) {
  const checkboxId = id || React.useId();

  return (
    <div className="flex items-start gap-3">
      <BaseCheckbox.Root
        id={checkboxId}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        className={`
          w-5 h-5 rounded-md border-2 flex items-center justify-center
          transition-all duration-150 cursor-pointer mt-0.5
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          ${
            checked
              ? "bg-[var(--primary)] border-[var(--primary)]"
              : "bg-transparent border-[var(--input-border)] hover:border-[var(--primary)]"
          }
        `}
      >
        <BaseCheckbox.Indicator className="text-white">
          {checked === "indeterminate" ? (
            <Minus size={14} strokeWidth={3} />
          ) : (
            <Check size={14} strokeWidth={3} />
          )}
        </BaseCheckbox.Indicator>
      </BaseCheckbox.Root>
      {(label || description) && (
        <div className="flex flex-col">
          {label && (
            <label
              htmlFor={checkboxId}
              className={`text-sm font-medium cursor-pointer ${
                disabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {label}
            </label>
          )}
          {description && (
            <span className="text-xs text-[var(--muted)]">{description}</span>
          )}
        </div>
      )}
    </div>
  );
}

interface CheckboxGroupProps {
  label?: string;
  children: React.ReactNode;
}

export function CheckboxGroup({ label, children }: CheckboxGroupProps) {
  return (
    <div className="space-y-3">
      {label && (
        <p className="text-sm font-medium text-[var(--foreground)]">{label}</p>
      )}
      <div className="space-y-2">{children}</div>
    </div>
  );
}
