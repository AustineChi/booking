import React, { forwardRef } from "react";
import {
  Select as MaterialSelect,
  Option,
  SelectProps as MaterialSelectProps,
} from "@material-tailwind/react";

interface SelectProps
  extends Omit<MaterialSelectProps, "value" | "onChange" | "children"> {
  label?: string;
  error?: boolean | string; // Allow string for error message
  className?: string;
  wrapperClassName?: string;
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (value: string | undefined) => void;
  required?: boolean;
  id: string;
  placeholder?: string;
}

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      label,
      error,
      className = "",
      wrapperClassName = "",
      options,
      value,
      onChange,
      required,
      id,
      placeholder,
      ...props
    },
    ref
  ) => {
    const handleChange = (selectedValue: string | undefined) => {
      if (onChange) {
        onChange(selectedValue);
      }
    };

    return (
      <div
        className={`flex flex-col mb-4 ${wrapperClassName}`}
        role="group"
        aria-labelledby={label}
      >
        {/* @ts-expect-error MaterialInput's crossOrigin prop type is not properly defined in @material-tailwind/react */}
        <MaterialSelect
          placeholder={""}
          id={id}
          value={value || ""}
          onChange={handleChange}
          label={label || placeholder}
          error={!!error}
          className={`rounded-md ${className} h-14`}
          labelProps={{
            className: "text-[--color-text]",
          }}
          containerProps={{
            className: "w-full my-4",
          }}
          role="combobox"
          aria-expanded={false}
          aria-required={required || undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-labelledby={label ? `${id}-label` : undefined}
          ref={ref}
          {...props}
        >
          {options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </MaterialSelect>
        {error && typeof error === "string" && (
          <p
            id={`${id}-error`}
            className="mt-1 text-sm text-red-500"
            role="alert"
            aria-live="polite"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
