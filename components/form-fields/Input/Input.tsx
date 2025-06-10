import React, { forwardRef } from "react";
import {
  Input as MaterialInput,
  InputProps as MaterialInputProps,
} from "@material-tailwind/react";

interface CustomInputProps extends Omit<MaterialInputProps, "label" | "error"> {
  label?: string;
  error?: string;
  required?: boolean;
  className?: string;
  wrapperClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, CustomInputProps>(
  (
    {
      label,
      error,
      required,
      className = "",
      wrapperClassName = "",
      id,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={` ${wrapperClassName}`}
        aria-labelledby={label ? `${id}-label` : undefined}
      >
        {label && (
          <label
            className="mb-1 font-medium sr-only"
            htmlFor="text-input"
            id={`${id}-label`}
          >
            {label}
          </label>
        )}
        {/* @ts-expect-error MaterialInput's crossOrigin prop type is not properly defined in @material-tailwind/react */}
        <MaterialInput
          ref={ref}
          id={id}
          type={props.type || "text"}
          label={label}
          error={!!error}
          crossOrigin={undefined}
          aria-required={required}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={error ? "true" : undefined}
          className={`rounded-md ${className}`}
          containerProps={{ className: "w-full h-14 my-6" }}
          {...props}
        />
        {error && (
          <p
            id={`${id}-error`}
            className="mt-[-1rem] text-sm text-red-500"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
