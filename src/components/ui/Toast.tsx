"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react";

type ToastType = "success" | "error" | "warning" | "info";

interface Toast {
  id: string;
  type: ToastType;
  title: string;
  description?: string;
  duration?: number;
}

interface ToastContextType {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, "id">) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { ...toast, id };

    setToasts((prev) => [...prev, newToast]);

    // Auto-remove after duration
    const duration = toast.duration ?? 5000;
    if (duration > 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, duration);
    }
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
}

function ToastContainer() {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[100] pointer-events-none h-20 w-[360px]">
      {toasts.map((toast, index) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          onClose={() => removeToast(toast.id)}
          index={index}
          total={toasts.length}
        />
      ))}
    </div>
  );
}

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
};

const styles = {
  success: {
    icon: "text-[var(--success)]",
  },
  error: {
    icon: "text-[var(--danger)]",
  },
  warning: {
    icon: "text-[var(--warning)]",
  },
  info: {
    icon: "text-[var(--muted)]",
  },
};

interface ToastItemProps {
  toast: Toast;
  onClose: () => void;
  index: number;
  total: number;
}

function ToastItem({ toast, onClose, index, total }: ToastItemProps) {
  const Icon = icons[toast.type];
  const toastStyles = styles[toast.type];

  // Stack from bottom: newest toast is at position 0 (bottom), older ones stack above
  const stackPosition = total - 1 - index;
  const translateY = stackPosition * -8; // Each toast shifts up slightly
  const scale = 1 - stackPosition * 0.02; // Slight scale reduction for depth
  const opacity = Math.max(0.4, 1 - stackPosition * 0.15); // Fade older toasts

  return (
    <div
      className={`
        pointer-events-auto absolute bottom-0 right-0
        flex items-start gap-3 w-[360px] p-4
        bg-[var(--card-bg)] border border-[var(--card-border)]
        rounded-xl shadow-lg
        animate-slide-in-right
        transition-all duration-200 ease-out
      `}
      style={{
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity,
        zIndex: total - stackPosition,
      }}
      role="alert"
    >
      <Icon size={18} className={`flex-shrink-0 mt-0.5 ${toastStyles.icon}`} />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-[var(--foreground)]">{toast.title}</p>
        {toast.description && (
          <p className="text-xs text-[var(--muted)] mt-0.5">{toast.description}</p>
        )}
      </div>
      <button
        onClick={onClose}
        className="flex-shrink-0 p-1 rounded-md hover:bg-[var(--accent)] transition-colors cursor-pointer"
        aria-label="Close notification"
      >
        <X size={14} className="text-[var(--muted)]" />
      </button>
    </div>
  );
}

// Convenience functions
export function toast(options: Omit<Toast, "id">) {
  // This will be set by the provider
  console.warn("Toast called outside of provider");
}

export { ToastContainer };
