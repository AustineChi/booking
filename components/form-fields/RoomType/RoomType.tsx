import React from "react";

interface RoomTypeProps {
  label: string;
  subLabel: string;
  value: number;
  inputValue: string; 
  onDecrement: () => void;
  onIncrement: () => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  className?: string;
  id: string;
}

export const RoomType = ({
  label,
  subLabel,
  value,
  inputValue,
  onDecrement,
  onIncrement,
  onInputChange,
  onBlur,
  className = "",
  id,
}: RoomTypeProps) => {
  return (
    <div
      className={`flex items-center justify-between p-2 border rounded-md border-[--color-secondary] bg-[--color-background] mb-2 ${className}`}
      role="group"
      aria-labelledby={`${id}-label`}
    >
      <div>
        <div id={`${id}-label`} className="text-[--color-text] font-medium">
          {label}
        </div>
        <div className="text-sm text-[--color-text]">{subLabel}</div>
      </div>
      <div className="flex items-center space-x-2" role="region">
        <button
          type="button"
          onClick={onDecrement}
          className="w-8 h-8 rounded-full border border-[--color-primary] text-[--color-primary] flex items-center justify-center hover:bg-[--color-primary-light] disabled:opacity-50"
          disabled={value <= 0}
          aria-label={`Decrease ${label} count, current value ${value}`}
          aria-disabled={value <= 0}
        >
          −
        </button>
        <input
          type="text"
          value={inputValue}
          onChange={onInputChange}
          onBlur={onBlur}
          className="w-8 text-center border rounded-md p-1 bg-[--color-background] text-[--color-text]"
          aria-live="polite"
          aria-atomic="true"
          aria-label={`${label} count`}
        />
        <button
          type="button"
          onClick={onIncrement}
          className="w-8 h-8 rounded-full border border-[--color-primary] text-[--color-primary] flex items-center justify-center hover:bg-[--color-primary-light]"
          aria-label={`Increase ${label} count, current value ${value}`}
        >
          +
        </button>
      </div>
    </div>
  );
};

RoomType.displayName = "RoomType";
