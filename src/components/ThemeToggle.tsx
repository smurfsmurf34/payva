"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Monitor } from "lucide-react";

interface ThemeToggleProps {
  isCollapsed?: boolean;
}

export function ThemeToggle({ isCollapsed = false }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const cycleTheme = () => {
    const themes: Array<"light" | "dark" | "system"> = ["light", "dark", "system"];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const getIcon = () => {
    if (theme === "system") {
      return <Monitor size={20} />;
    }
    return resolvedTheme === "dark" ? <Moon size={20} /> : <Sun size={20} />;
  };

  const getLabel = () => {
    switch (theme) {
      case "light":
        return "Light";
      case "dark":
        return "Dark";
      case "system":
        return "System";
    }
  };

  return (
    <button
      onClick={cycleTheme}
      className={`
        flex items-center w-full px-3 py-2.5 rounded-lg
        text-[var(--muted)] hover:bg-[var(--accent)] hover:text-[var(--foreground)]
        transition-colors cursor-pointer
        ${isCollapsed ? "justify-center" : "gap-3"}
      `}
      title={`Theme: ${getLabel()} (click to change)`}
    >
      {getIcon()}
      {!isCollapsed && (
        <span className="font-medium text-sm">{getLabel()}</span>
      )}
    </button>
  );
}

// Dropdown version for more control
export function ThemeDropdown({ isCollapsed = false }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();

  if (isCollapsed) {
    return <ThemeToggle isCollapsed />;
  }

  return (
    <div className="px-2">
      <p className="px-3 py-1 text-xs font-medium text-[var(--muted)] uppercase tracking-wider">
        Theme
      </p>
      <div className="flex gap-1 p-1 bg-[var(--accent)] rounded-lg">
        <button
          onClick={() => setTheme("light")}
          className={`
            flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md text-sm font-medium
            transition-colors cursor-pointer
            ${
              theme === "light"
                ? "bg-[var(--card-bg)] text-[var(--foreground)] shadow-sm"
                : "text-[var(--muted)] hover:text-[var(--foreground)]"
            }
          `}
          title="Light theme"
        >
          <Sun size={14} />
          <span className="hidden sm:inline">Light</span>
        </button>
        <button
          onClick={() => setTheme("dark")}
          className={`
            flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md text-sm font-medium
            transition-colors cursor-pointer
            ${
              theme === "dark"
                ? "bg-[var(--card-bg)] text-[var(--foreground)] shadow-sm"
                : "text-[var(--muted)] hover:text-[var(--foreground)]"
            }
          `}
          title="Dark theme"
        >
          <Moon size={14} />
          <span className="hidden sm:inline">Dark</span>
        </button>
        <button
          onClick={() => setTheme("system")}
          className={`
            flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md text-sm font-medium
            transition-colors cursor-pointer
            ${
              theme === "system"
                ? "bg-[var(--card-bg)] text-[var(--foreground)] shadow-sm"
                : "text-[var(--muted)] hover:text-[var(--foreground)]"
            }
          `}
          title="System theme"
        >
          <Monitor size={14} />
          <span className="hidden sm:inline">Auto</span>
        </button>
      </div>
    </div>
  );
}
