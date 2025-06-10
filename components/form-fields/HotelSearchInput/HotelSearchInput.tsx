import React from "react";
import { FaSearch, FaCircle } from "react-icons/fa";
import { useHotelSearch } from "@/hooks/useHotelSearch.hook";

interface HotelSearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value?: string;
  title?: string; 
  onChange?: (value: string) => void;
  className?: string;
  wrapperClassName?: string;
  id: string;
  placeholder: string;
  instruction?: string;
  error?: string;
}

export const HotelSearchInput = React.forwardRef<
  HTMLInputElement,
  HotelSearchInputProps
>(
  (
    {
      value: controlledValue,
      onChange,
      className = "",
      wrapperClassName = "",
      id,
      placeholder,
      instruction,
      title,
      error,
      ...props
    },
    ref
  ) => {
    const {
      value,
      suggestions,
      handleChange,
      handleClear,
      handleSuggestionSelect,
    } = useHotelSearch(controlledValue || "");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      handleChange(e);
      if (onChange) onChange(e.target.value);
    };

    const handleClearInput = () => {
      handleClear();
      if (onChange) onChange("");
    };

    const handleSelectSuggestion = (suggestion: string) => {
      handleSuggestionSelect(suggestion);
      if (onChange) onChange(suggestion);
    };

    return (
      <div className={`relative ${wrapperClassName}`}>
        {title && (
          <p className="text-lg font-bold mb-2 text-[--color-text]">
            {title}
          </p>
        )}

        {instruction && (
          <p className="text-sm mb-2 text-[--color-text]">{instruction}</p>
        )}
        <div
          className={`flex items-center border rounded-md border-[--color-primary] bg-[--color-background] ${className}`}
        >
          <span className="ml-2 text-[--color-text]" data-testid="search-icon">
            <FaSearch size={16} /> 
          </span>
          <input
            ref={ref}
            id={id}
            value={value}
            onChange={handleInputChange}
            placeholder={placeholder}
            className="flex-1 p-2 h-14 bg-transparent border-0 focus:outline-none text-[--color-text]"
            aria-required="true"
            aria-describedby={error ? `${id}-error` : undefined}
            aria-invalid={error ? "true" : undefined}
            {...props}
          />
          {value && (
            <button
              type="button"
              onClick={handleClearInput}
              className="mr-2 text-[--color-text] hover:text-[--color-primary]"
              aria-label="Clear input"
            >
              ×
            </button>
          )}
        </div>
        {error && (
          <span
            id={`${id}-error`}
            className="mt-1 text-sm text-[--color-error]"
          >
            {error}
          </span>
        )}
        {suggestions.length > 0 && (
          <ul className="absolute z-10 w-full mt-1 bg-[--color-background] border border-[--color-secondary] rounded-md shadow-lg">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="flex items-center p-2 hover:bg-[--color-primary-light] cursor-pointer"
                onClick={() => handleSelectSuggestion(suggestion)}
              >
                <span className="mr-2">
                  <FaCircle size={16} color="#6B46C1" />{" "}
                </span>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

HotelSearchInput.displayName = "HotelSearchInput";
