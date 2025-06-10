import React from "react";

interface TextareaInputProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  id: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
}

export const TextareaInput = React.forwardRef<
  HTMLTextAreaElement,
  TextareaInputProps
>(
  (
    {
      value,
      onChange,
      className = "",
      id,
      placeholder,
      error,
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (onChange) {
        onChange(e.target.value);
      }
    };

    return (
      <div
        className="relative"
        aria-labelledby={placeholder ? `${id}-label` : undefined}
      >
        <textarea
          ref={ref}
          id={id}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={`w-full min-h-[300px] p-2 border rounded-md ${
            error ? "border-[--color-error]" : "border-[--color-secondary]"
          } bg-[--color-background] text-[--color-text] focus:outline-none focus:ring-2 focus:ring-[--color-primary] ${className}`}
          disabled={disabled}
          aria-required={required}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={error ? "true" : undefined}
          {...props}
        />
        {error && (
          <span
            id={`${id}-error`}
            className="mt-1 text-sm text-[--color-error]"
            role="alert"
          >
            {error}
          </span>
        )}
      </div>
    );
  }
);

TextareaInput.displayName = "TextareaInput";
