"use client";

import React from "react";
import { Form as BaseForm } from "@base-ui/react/form";

type FormValidationMode = "onSubmit" | "onBlur" | "onChange";

interface FormProps<T extends Record<string, unknown> = Record<string, unknown>>
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
  children: React.ReactNode;
  validationMode?: FormValidationMode;
  errors?: Record<string, string | string[]>;
  onFormSubmit?: (formValues: T) => void;
  className?: string;
}

export function Form<T extends Record<string, unknown> = Record<string, unknown>>({
  children,
  validationMode = "onSubmit",
  errors,
  onFormSubmit,
  className = "",
  ...props
}: FormProps<T>) {
  return (
    <BaseForm
      validationMode={validationMode}
      errors={errors}
      onFormSubmit={onFormSubmit as (formValues: Record<string, unknown>) => void}
      className={`space-y-4 ${className}`}
      {...props}
    >
      {children}
    </BaseForm>
  );
}
