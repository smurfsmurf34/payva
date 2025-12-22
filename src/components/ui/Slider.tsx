"use client";

import React from "react";
import { Slider as BaseSlider } from "@base-ui/react/slider";

interface SliderProps {
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  label?: string;
  showValue?: boolean;
}

export function Slider({
  value,
  defaultValue = 50,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  label,
  showValue = false,
}: SliderProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const currentValue = value ?? internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setInternalValue(val);
    onValueChange?.(val);
  };

  const percentage = ((currentValue - min) / (max - min)) * 100;

  return (
    <div className="space-y-2">
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && (
            <label className="text-sm font-medium text-[var(--foreground)]">
              {label}
            </label>
          )}
          {showValue && (
            <span className="text-sm font-mono text-[var(--muted)]">
              {currentValue}
            </span>
          )}
        </div>
      )}
      <div className={`relative flex items-center w-full h-5 ${disabled ? "opacity-50" : ""}`}>
        <div className="relative h-2 w-full rounded-full bg-[var(--accent)]">
          <div
            className="absolute h-full rounded-full bg-[var(--primary)]"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={currentValue}
          onChange={handleChange}
          disabled={disabled}
          className="absolute w-full h-5 appearance-none bg-transparent cursor-pointer [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[var(--primary)] [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:active:cursor-grabbing [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[var(--primary)] [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:cursor-grab"
        />
      </div>
    </div>
  );
}

interface RangeSliderProps {
  value?: [number, number];
  defaultValue?: [number, number];
  onValueChange?: (value: [number, number]) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  label?: string;
  showValue?: boolean;
}

export function RangeSlider({
  value,
  defaultValue = [25, 75],
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  label,
  showValue = false,
}: RangeSliderProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const currentValue = value ?? internalValue;

  const handleChange = (newValue: number, index: number) => {
    const updated: [number, number] = [...currentValue] as [number, number];
    updated[index] = newValue;
    // Ensure min <= max
    if (index === 0 && updated[0] > updated[1]) {
      updated[0] = updated[1];
    } else if (index === 1 && updated[1] < updated[0]) {
      updated[1] = updated[0];
    }
    setInternalValue(updated);
    onValueChange?.(updated);
  };

  return (
    <div className="space-y-2">
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && (
            <label className="text-sm font-medium text-[var(--foreground)]">
              {label}
            </label>
          )}
          {showValue && (
            <span className="text-sm font-mono text-[var(--muted)]">
              {currentValue[0]} – {currentValue[1]}
            </span>
          )}
        </div>
      )}
      <div className="relative flex items-center w-full h-5">
        <div className="relative h-2 w-full rounded-full bg-[var(--accent)]">
          <div
            className="absolute h-full rounded-full bg-[var(--primary)]"
            style={{
              left: `${((currentValue[0] - min) / (max - min)) * 100}%`,
              right: `${100 - ((currentValue[1] - min) / (max - min)) * 100}%`,
            }}
          />
        </div>
        {/* Min thumb */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={currentValue[0]}
          onChange={(e) => handleChange(Number(e.target.value), 0)}
          disabled={disabled}
          className="absolute w-full h-5 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[var(--primary)] [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:cursor-grab"
        />
        {/* Max thumb */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={currentValue[1]}
          onChange={(e) => handleChange(Number(e.target.value), 1)}
          disabled={disabled}
          className="absolute w-full h-5 appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[var(--primary)] [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:cursor-grab"
        />
      </div>
    </div>
  );
}
