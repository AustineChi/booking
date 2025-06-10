import React, { forwardRef } from "react";
import { Input as MaterialInput } from "@material-tailwind/react";
import { usePhoneInput } from "@/hooks/usePhoneInput.hook";
import { Country, countries } from "@/lib/constants";

interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  placeholder?: string;
  className?: string;
  wrapperClassName?: string;
  initialValue?: string;
  initialCountryCode?: string;
  onCountryChange?: (country: Country) => void;
}

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  (
    {
      label,
      error,
      placeholder,
      className = "",
      wrapperClassName = "",
      initialValue = "",
      initialCountryCode,
      onChange,
      onCountryChange,
      required,
      id,
      ...props
    },
    ref
  ) => {
    const initialCountry =
      countries.find((c) => c.code === initialCountryCode) || countries[0];
    const {
      phoneValue,
      selectedCountry,
      handlePhoneChange,
      handleCountryChange,
    } = usePhoneInput({
      initialValue,
      initialCountry,
      onChange,
      onCountryChange,
    });

    return (
      <div
        className={`w-full ${wrapperClassName}`}
        role="group"
        aria-labelledby={`${id}-label`}
      >
        {label && (
          <label
            className="mb-1 font-medium sr-only"
            htmlFor={id}
            id={`${id}-label`}
          >
            {label}
          </label>
        )}

        <div className="relative flex w-full">
          <select
            value={selectedCountry.code}
            onChange={handleCountryChange}
            className="border-2 bg-transparent text-[--color-text] appearance-none focus:outline-none"
            aria-label="Country code"
            aria-required={required}
          >
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.dialCode}
              </option>
            ))}
          </select>

          {/* @ts-expect-error MaterialInput's crossOrigin prop type is not properly defined in @material-tailwind/react */}
          <MaterialInput
            crossOrigin={undefined}
            ref={ref}
            id={id}
            type="tel"
            placeholder={placeholder}
            value={phoneValue}
            onChange={handlePhoneChange}
            className={`rounded-l-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 ${className}`}
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            containerProps={{
              className: "min-w-0",
            }}
            error={!!error}
            aria-required={required}
            aria-invalid={!!error}
            aria-errormessage={error ? `${id}-error` : undefined}
            {...props}
          />
        </div>

        {error && (
          <p
            id={`${id}-error`}
            className="mt-2 text-sm text-red-500"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

PhoneInput.displayName = "PhoneInput";
