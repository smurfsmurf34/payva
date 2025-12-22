"use client";

import React, { useEffect, useRef } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";
import { Button } from "./Button";

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export function Modal({ open, onOpenChange, children }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  );
}

interface ModalTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export function ModalTrigger({ children, asChild }: ModalTriggerProps) {
  return <Dialog.Trigger render={asChild ? (children as React.ReactElement) : undefined}>{!asChild && children}</Dialog.Trigger>;
}

interface ModalContentProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-4xl",
};

export function ModalContent({
  children,
  className = "",
  size = "md",
}: ModalContentProps) {
  return (
    <Dialog.Portal>
      <Dialog.Backdrop
        className="fixed inset-0 z-[90] overlay-backdrop animate-fade-in"
      />
      <Dialog.Popup
        className={`
          fixed left-1/2 top-1/2 z-[95] -translate-x-1/2 -translate-y-1/2
          w-[calc(100%-2rem)] ${sizeClasses[size]}
          bg-[var(--card-bg)] border border-[var(--card-border)]
          rounded-xl shadow-xl
          animate-scale-in
          focus:outline-none
          ${className}
        `}
      >
        {children}
      </Dialog.Popup>
    </Dialog.Portal>
  );
}

interface ModalHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function ModalHeader({ children, className = "" }: ModalHeaderProps) {
  return (
    <div
      className={`
        flex items-center justify-between p-6 border-b border-[var(--card-border)]
        ${className}
      `}
    >
      <Dialog.Title className="text-lg font-semibold tracking-tight">{children}</Dialog.Title>
      <Dialog.Close
        className="p-2 rounded-lg hover:bg-[var(--accent)] transition-colors cursor-pointer"
        aria-label="Close"
      >
        <X size={18} className="text-[var(--muted)]" />
      </Dialog.Close>
    </div>
  );
}

interface ModalBodyProps {
  children: React.ReactNode;
  className?: string;
}

export function ModalBody({ children, className = "" }: ModalBodyProps) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

interface ModalFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function ModalFooter({ children, className = "" }: ModalFooterProps) {
  return (
    <div
      className={`
        flex items-center justify-end gap-3 p-6 pt-0
        ${className}
      `}
    >
      {children}
    </div>
  );
}

// Alert Dialog variant
interface AlertDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  variant?: "default" | "danger";
}

export function AlertDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  variant = "default",
}: AlertDialogProps) {
  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalContent size="sm">
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>
          <p className="text-[var(--muted)]">{description}</p>
        </ModalBody>
        <ModalFooter>
          <Dialog.Close
            className="px-4 py-2 rounded-lg text-sm font-medium bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors cursor-pointer"
          >
            {cancelText}
          </Dialog.Close>
          <Button
            variant={variant === "danger" ? "danger" : "primary"}
            onClick={() => {
              onConfirm();
              onOpenChange(false);
            }}
          >
            {confirmText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
