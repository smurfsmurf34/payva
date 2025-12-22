"use client";

import React, { useState, useEffect } from "react";
import { Check } from "@phosphor-icons/react";

// Predefined premium color palettes
const colorPalettes = {
  violet: {
    name: "Violet",
    light: {
      primary: "#6D28D9",
      primaryHover: "#5B21B6",
      primaryLight: "#EDE9FE",
    },
    dark: {
      primary: "#8B5CF6",
      primaryHover: "#A78BFA",
      primaryLight: "#2E1065",
    },
  },
  indigo: {
    name: "Indigo",
    light: {
      primary: "#4F46E5",
      primaryHover: "#4338CA",
      primaryLight: "#E0E7FF",
    },
    dark: {
      primary: "#6366F1",
      primaryHover: "#818CF8",
      primaryLight: "#1E1B4B",
    },
  },
  emerald: {
    name: "Emerald",
    light: {
      primary: "#059669",
      primaryHover: "#047857",
      primaryLight: "#D1FAE5",
    },
    dark: {
      primary: "#10B981",
      primaryHover: "#34D399",
      primaryLight: "#064E3B",
    },
  },
  rose: {
    name: "Rose",
    light: {
      primary: "#E11D48",
      primaryHover: "#BE123C",
      primaryLight: "#FFE4E6",
    },
    dark: {
      primary: "#F43F5E",
      primaryHover: "#FB7185",
      primaryLight: "#4C0519",
    },
  },
  amber: {
    name: "Amber",
    light: {
      primary: "#D97706",
      primaryHover: "#B45309",
      primaryLight: "#FEF3C7",
    },
    dark: {
      primary: "#F59E0B",
      primaryHover: "#FBBF24",
      primaryLight: "#451A03",
    },
  },
  cyan: {
    name: "Cyan",
    light: {
      primary: "#0891B2",
      primaryHover: "#0E7490",
      primaryLight: "#CFFAFE",
    },
    dark: {
      primary: "#06B6D4",
      primaryHover: "#22D3EE",
      primaryLight: "#164E63",
    },
  },
  slate: {
    name: "Slate",
    light: {
      primary: "#475569",
      primaryHover: "#334155",
      primaryLight: "#F1F5F9",
    },
    dark: {
      primary: "#64748B",
      primaryHover: "#94A3B8",
      primaryLight: "#1E293B",
    },
  },
  orange: {
    name: "Orange",
    light: {
      primary: "#EA580C",
      primaryHover: "#C2410C",
      primaryLight: "#FFEDD5",
    },
    dark: {
      primary: "#F97316",
      primaryHover: "#FB923C",
      primaryLight: "#431407",
    },
  },
};

type PaletteKey = keyof typeof colorPalettes;

interface ThemeColorPickerProps {
  className?: string;
}

export function ThemeColorPicker({ className = "" }: ThemeColorPickerProps) {
  const [selectedPalette, setSelectedPalette] = useState<PaletteKey>("violet");
  const [customColor, setCustomColor] = useState("#6D28D9");
  const [useCustom, setUseCustom] = useState(false);

  const applyTheme = (palette: PaletteKey | null, custom?: string) => {
    const root = document.documentElement;
    const isDark = root.getAttribute("data-theme") === "dark";

    if (custom) {
      // Apply custom color
      root.style.setProperty("--primary", custom);
      root.style.setProperty("--primary-hover", adjustColor(custom, isDark ? 20 : -15));
      root.style.setProperty("--primary-light", adjustColor(custom, isDark ? -60 : 80));
      root.style.setProperty("--info", custom);
      root.style.setProperty("--info-light", adjustColor(custom, isDark ? -60 : 80));
    } else if (palette) {
      const colors = isDark ? colorPalettes[palette].dark : colorPalettes[palette].light;
      root.style.setProperty("--primary", colors.primary);
      root.style.setProperty("--primary-hover", colors.primaryHover);
      root.style.setProperty("--primary-light", colors.primaryLight);
      root.style.setProperty("--info", colors.primary);
      root.style.setProperty("--info-light", colors.primaryLight);
    }
  };

  // Watch for theme changes and reapply colors
  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (useCustom) {
        applyTheme(null, customColor);
      } else {
        applyTheme(selectedPalette);
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, [selectedPalette, customColor, useCustom]);

  const handlePaletteSelect = (palette: PaletteKey) => {
    setSelectedPalette(palette);
    setUseCustom(false);
    applyTheme(palette);
  };

  const handleCustomColorChange = (color: string) => {
    setCustomColor(color);
    setUseCustom(true);
    applyTheme(null, color);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono font-medium uppercase tracking-wider text-[var(--muted)]">
          Theme Color
        </span>
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={customColor}
            onChange={(e) => handleCustomColorChange(e.target.value)}
            className="w-8 h-8 rounded-lg cursor-pointer border-0 bg-transparent"
            title="Custom color"
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {(Object.keys(colorPalettes) as PaletteKey[]).map((key) => {
          const palette = colorPalettes[key];
          const isSelected = selectedPalette === key && !useCustom;

          return (
            <button
              key={key}
              onClick={() => handlePaletteSelect(key)}
              className={`
                relative flex flex-col items-center gap-1.5 p-2 rounded-xl
                border transition-all duration-200 cursor-pointer
                ${isSelected
                  ? "border-[var(--primary)] bg-[var(--primary-light)]"
                  : "border-[var(--card-border)] hover:border-[var(--muted-light)] bg-[var(--card-bg)]"
                }
              `}
              title={palette.name}
            >
              <div
                className="w-8 h-8 rounded-lg shadow-sm"
                style={{ backgroundColor: palette.light.primary }}
              />
              <span className="text-xs font-mono">{palette.name}</span>
              {isSelected && (
                <div className="absolute top-1 right-1">
                  <Check size={12} weight="bold" className="text-[var(--primary)]" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Helper function to adjust color brightness
function adjustColor(hex: string, percent: number): string {
  const num = parseInt(hex.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.min(255, Math.max(0, (num >> 16) + amt));
  const G = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + amt));
  const B = Math.min(255, Math.max(0, (num & 0x0000ff) + amt));
  return `#${(0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1)}`;
}
