"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  isCollapsed?: boolean;
}

export function ThemeToggle({ isCollapsed = false }: ThemeToggleProps) {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    // Toggle between light and dark based on current resolved theme
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const icon = resolvedTheme === "dark" ? <Moon size={20} /> : <Sun size={20} />;
  const label = resolvedTheme === "dark" ? "Dark" : "Light";

  return (
    <button
      onClick={toggleTheme}
      className={`
        flex items-center w-full px-3 py-2.5 rounded-lg
        text-[var(--muted)] hover:bg-[var(--accent)] hover:text-[var(--foreground)]
        transition-colors cursor-pointer
        ${isCollapsed ? "justify-center" : "gap-3"}
      `}
      title={`Theme: ${label} (click to toggle)`}
    >
      {icon}
      {!isCollapsed && (
        <span className="font-medium text-sm">{label}</span>
      )}
    </button>
  );
}

// Simple two-button version for settings or other UIs
export function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <div className="flex gap-1 p-1 bg-[var(--accent)] rounded-lg">
      <button
        onClick={() => setTheme("light")}
        className={`
          flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-md text-sm font-medium
          transition-colors cursor-pointer
          ${
            resolvedTheme === "light"
              ? "bg-[var(--card-bg)] text-[var(--foreground)] shadow-sm"
              : "text-[var(--muted)] hover:text-[var(--foreground)]"
          }
        `}
        title="Light theme"
      >
        <Sun size={14} />
        <span>Light</span>
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`
          flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-md text-sm font-medium
          transition-colors cursor-pointer
          ${
            resolvedTheme === "dark"
              ? "bg-[var(--card-bg)] text-[var(--foreground)] shadow-sm"
              : "text-[var(--muted)] hover:text-[var(--foreground)]"
          }
        `}
        title="Dark theme"
      >
        <Moon size={14} />
        <span>Dark</span>
      </button>
    </div>
  );
}
