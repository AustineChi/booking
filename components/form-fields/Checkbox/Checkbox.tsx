import React from "react";

interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  error?: string;
  className?: string;
  wrapperClassName?: string;
  required?: boolean;
  id: string;
  name?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      checked,
      onChange,
      error,
      className = "",
      wrapperClassName = "",
      required,
      id,
      name,
      ...props
    },
    ref
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e.target.checked);
      }
    };

    return (
      <div className={`flex items-start mb-3 ${wrapperClassName}`}>
        <div
          className={`flex items-center py-1  bg-[--color-background] ${className}`}
        >
          <input
            ref={ref}
            type="checkbox"
            id={id}
            name={name}
            checked={checked}
            onChange={handleChange}
            className="mr-2 text-[--color-primary] focus:ring-[--color-primary]"
            aria-required={required}
            aria-describedby={error ? `${id}-error` : undefined}
            {...props}
          />
          <label htmlFor={id} className="text-sm text-[--color-text]">
            {label}
          </label>
        </div>
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

Checkbox.displayName = "Checkbox";
