"use client";

import React from "react";
import { Field as BaseField } from "@base-ui/react/field";
import { Fieldset as BaseFieldset } from "@base-ui/react/fieldset";

interface FieldProps {
  children: React.ReactNode;
  className?: string;
  invalid?: boolean;
}

export function Field({ children, className = "", invalid }: FieldProps) {
  return (
    <BaseField.Root invalid={invalid} className={`flex flex-col gap-1.5 ${className}`}>
      {children}
    </BaseField.Root>
  );
}

interface FieldLabelProps {
  children: React.ReactNode;
  className?: string;
  required?: boolean;
}

export function FieldLabel({ children, className = "", required }: FieldLabelProps) {
  return (
    <BaseField.Label
      className={`
        text-sm font-medium text-[var(--foreground)]
        ${className}
      `}
    >
      {children}
      {required && <span className="text-[var(--danger)] ml-0.5">*</span>}
    </BaseField.Label>
  );
}

interface FieldDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function FieldDescription({ children, className = "" }: FieldDescriptionProps) {
  return (
    <BaseField.Description
      className={`text-xs text-[var(--muted)] ${className}`}
    >
      {children}
    </BaseField.Description>
  );
}

interface FieldErrorProps {
  children?: React.ReactNode;
  className?: string;
  match?: "valueMissing" | "typeMismatch" | "patternMismatch" | "tooShort" | "tooLong" | "rangeUnderflow" | "rangeOverflow" | "stepMismatch" | "badInput" | "customError";
}

export function FieldError({ children, className = "", match }: FieldErrorProps) {
  return (
    <BaseField.Error
      match={match}
      className={`text-xs text-[var(--danger)] ${className}`}
    >
      {children}
    </BaseField.Error>
  );
}

export function FieldControl({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <BaseField.Control
      className={`
        w-full px-3 py-2 rounded-lg
        bg-[var(--input-bg)] border border-[var(--input-border)]
        text-[var(--foreground)] text-sm
        placeholder:text-[var(--muted)]
        transition-all duration-150
        focus:outline-none focus:ring-2 focus:ring-[var(--primary)]
        focus:ring-offset-2 focus:ring-offset-[var(--background)]
        data-[invalid]:border-[var(--danger)]
        data-[invalid]:focus:ring-[var(--danger)]
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      render={children as React.ReactElement}
    />
  );
}

interface FieldsetProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export function Fieldset({ children, className = "", disabled }: FieldsetProps) {
  return (
    <BaseFieldset.Root
      disabled={disabled}
      className={`
        flex flex-col gap-4
        p-4 rounded-xl
        border border-[var(--card-border)]
        ${disabled ? "opacity-50" : ""}
        ${className}
      `}
    >
      {children}
    </BaseFieldset.Root>
  );
}

interface FieldsetLegendProps {
  children: React.ReactNode;
  className?: string;
}

export function FieldsetLegend({ children, className = "" }: FieldsetLegendProps) {
  return (
    <BaseFieldset.Legend
      className={`
        text-sm font-semibold text-[var(--foreground)]
        px-2 -ml-2
        ${className}
      `}
    >
      {children}
    </BaseFieldset.Legend>
  );
}
