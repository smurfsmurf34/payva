"use client";

import React from "react";
import { RadioGroup as BaseRadioGroup } from "@base-ui-components/react/radio-group";
import { Radio as BaseRadio } from "@base-ui-components/react/radio";

interface RadioGroupProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  label?: string;
  children: React.ReactNode;
  orientation?: "horizontal" | "vertical";
}

export function RadioGroup({
  value,
  defaultValue,
  onValueChange,
  label,
  children,
  orientation = "vertical",
}: RadioGroupProps) {
  return (
    <BaseRadioGroup.Root
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      className="space-y-3"
    >
      {label && (
        <p className="text-sm font-medium text-[var(--foreground)]">{label}</p>
      )}
      <div
        className={
          orientation === "horizontal"
            ? "flex flex-wrap gap-4"
            : "flex flex-col gap-2"
        }
      >
        {children}
      </div>
    </BaseRadioGroup.Root>
  );
}

interface RadioProps {
  value: string;
  label?: string;
  description?: string;
  disabled?: boolean;
}

export function Radio({ value, label, description, disabled = false }: RadioProps) {
  const id = React.useId();

  return (
    <div className="flex items-start gap-3">
      <BaseRadio.Root
        id={id}
        value={value}
        disabled={disabled}
        className={`
          w-5 h-5 rounded-full border-2 flex items-center justify-center
          transition-all duration-150 cursor-pointer mt-0.5
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          border-[var(--input-border)] hover:border-[var(--primary)]
          data-[checked]:border-[var(--primary)] data-[checked]:bg-[var(--primary)]
        `}
      >
        <BaseRadio.Indicator className="w-2 h-2 rounded-full bg-white" />
      </BaseRadio.Root>
      {(label || description) && (
        <div className="flex flex-col">
          {label && (
            <label
              htmlFor={id}
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

// Card-style radio for more prominent selection
interface RadioCardProps {
  value: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export function RadioCard({
  value,
  title,
  description,
  icon,
  disabled = false,
}: RadioCardProps) {
  const id = React.useId();

  return (
    <BaseRadio.Root
      id={id}
      value={value}
      disabled={disabled}
      className={`
        relative flex items-start gap-4 p-4 rounded-xl border-2
        transition-all duration-200 cursor-pointer
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        border-[var(--card-border)] hover:border-[var(--primary-light)]
        data-[checked]:border-[var(--primary)] data-[checked]:bg-[var(--primary-lighter)]
      `}
    >
      {icon && (
        <div className="flex-shrink-0 text-[var(--primary)]">{icon}</div>
      )}
      <div className="flex-1">
        <p className="font-medium text-[var(--foreground)]">{title}</p>
        {description && (
          <p className="text-sm text-[var(--muted)] mt-1">{description}</p>
        )}
      </div>
      <div
        className={`
          w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0
          transition-all duration-150
          border-[var(--input-border)]
          [[data-checked]_&]:border-[var(--primary)] [[data-checked]_&]:bg-[var(--primary)]
        `}
      >
        <BaseRadio.Indicator className="w-2 h-2 rounded-full bg-white" />
      </div>
    </BaseRadio.Root>
  );
}
