import React from "react";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string;
  title?: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  className?: string;
  wrapperClassName?: string;
  required?: boolean;
  id: string;
  name: string;
}

export const RadioGroup = React.forwardRef<HTMLInputElement, RadioGroupProps>(
  (
    {
      label,
      title,
      options,
      value,
      onChange,
      error,
      className = "",
      wrapperClassName = "",
      id,
      name,
      ...props
    },
    ref
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e.target.value);
      }
    };

    return (
      <div className={`flex flex-col mb-4 ${wrapperClassName}`}>
        <p className="text-lg font-semibold my-4">{title}</p>
        <label
          htmlFor={id}
          className="mb-2 text-sm font-medium text-[--color-text]"
        >
          {label}
        </label>

        <div>
          {options.map((option) => (
            <div
              key={option.value}
              className={`flex items-center p-2 border h-14 rounded-md border-[--color-secondary] bg-[--color-background] ${className}`}
            >
              <input
                ref={ref}
                type="radio"
                id={`${id}-${option.value}`}
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={handleChange}
                className="mr-2 text-[--color-primary] focus:ring-[--color-primary]"
                aria-describedby={error ? `${id}-error` : undefined}
                {...props}
              />
              <label
                htmlFor={`${id}-${option.value}`}
                className="text-[--color-text]"
              >
                {option.label}{" "}
              </label>
            </div>
          ))}
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

RadioGroup.displayName = "RadioGroup";
