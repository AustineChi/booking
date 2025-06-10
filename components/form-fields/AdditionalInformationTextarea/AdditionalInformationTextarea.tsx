import React from "react";
import { TextareaInput } from "../TextareaInput/TextareaInput";

interface AdditionalInformationTextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> {
    title: string;
  instructions?: string;
  subInstructions?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  className?: string;
  wrapperClassName?: string;
  required?: boolean;
  id: string;
  placeholder?: string;
}

export const AdditionalInformationTextarea = React.forwardRef<
  HTMLTextAreaElement,
  AdditionalInformationTextareaProps
>(
  (
    {
      title,
      instructions,
      subInstructions,
      value,
      onChange,
      error,
      className = "",
      wrapperClassName = "",
      required,
      id,
      placeholder,
      ...props
    },
    ref
  ) => {
    return (
      <div className={`flex flex-col mb-4 ${wrapperClassName}`}>
        <p
          className="mb-1 text-xl font-semibold text-[--color-text]"
        >
          {title}
        </p>
        {instructions && (
          <p className="text-sm my-2 text-[--color-text]">{instructions}</p>
        )}
        {subInstructions && (
          <p className="text-sm mb-3 text-[--color-text]">{subInstructions}</p>
        )}
        <div className="relative">
          <TextareaInput
            ref={ref}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            error={error}
            className={className}
            required={required}
            {...props}
          />
        </div>
      </div>
    );
  }
);

AdditionalInformationTextarea.displayName = "AdditionalInformationTextarea";
