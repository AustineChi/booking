"use client";

import React, { forwardRef } from "react";
import DatePicker from "react-datepicker";
import { FaCalendar } from "react-icons/fa";

import { useDateRange } from "@/hooks/useDateRange.hook";
import { dateRangeConfig } from "@/lib/constants";

import "react-datepicker/dist/react-datepicker.css";

interface DateRange {
  checkIn?: Date;
  checkOut?: Date;
}

interface DateRangeInputProps {
  value?: DateRange;
  onChange?: (dates: DateRange) => void;
  className?: string;
  wrapperClassName?: string;
  id: string;
  placeholder?: string;
  resetLabel?: string;
  doneLabel?: string;
  error?: string;
}

export const DateRangeInput = forwardRef<HTMLInputElement, DateRangeInputProps>(
  (
    {
      value,
      onChange,
      className = "",
      wrapperClassName = "",
      id,
      placeholder,
      resetLabel,
      doneLabel,
      error,
      ...restProps
    },
    ref
  ) => {
    const {
      checkIn,
      checkOut,
      isOpen,
      displayValue,
      handleDateRangeChange,
      handleReset,
      handleToggle,
      handleDone,
    } = useDateRange(value?.checkIn, value?.checkOut);

    const handleChange = (dates: [Date | null, Date | null]) => {
      handleDateRangeChange(dates);
      if (onChange) {
        onChange({ checkIn: dates[0] as Date, checkOut: dates[1] as Date });
      }
    };

    return (
      <div className={`relative ${wrapperClassName}`}>
        <div className="relative flex items-center">
          <input
            ref={ref}
            id={id}
            type="text"
            value={displayValue || ""}
            onClick={handleToggle}
            onFocus={handleToggle}
            placeholder={placeholder}
            className={`w-full h-14 p-2 pl-8 border rounded-md border-[--color-secondary] bg-[--color-background] text-[--color-text] ${className}`}
            readOnly
            aria-label="Date range input"
            aria-describedby={error ? `${id}-error` : undefined}
            {...restProps}
          />
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[--color-text]">
            <FaCalendar />
          </span>
        </div>
        {isOpen && (
          <div className="absolute z-10 mt-1 bg-[--color-background] border border-[--color-secondary] rounded-md shadow-lg p-4">
            <DatePicker
              selected={checkIn || undefined}
              onChange={handleChange}
              startDate={checkIn || undefined}
              endDate={checkOut || undefined}
              selectsRange
              inline
              minDate={dateRangeConfig.minDate}
              openToDate={new Date()}
              calendarClassName="react-datepicker-custom"
              dayClassName={(date) =>
                date < dateRangeConfig.minDate
                  ? "react-datepicker-day--disabled"
                  : ""
              }
              onClickOutside={handleDone}
            />
            <div className="flex justify-end mt-2 space-x-2">
              <button onClick={handleReset} className="text-[--color-text]">
                {resetLabel}
              </button>
              <button
                onClick={handleDone}
                className="px-4 py-1 bg-[--color-primary] text-[--color-background] rounded"
              >
                {doneLabel}
              </button>
            </div>
          </div>
        )}
        {error && (
          <span
            id={`${id}-error`}
            className="mt-1 text-sm text-[--color-error]"
          >
            {error}
          </span>
        )}
      </div>
    );
  }
);

DateRangeInput.displayName = "DateRangeInput";
