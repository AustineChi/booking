"use client";

import { forwardRef, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "icon";
  className?: string;
}

const getButtonStyles = ({
  variant = "primary",
  size = "default",
  className = "",
}: {
  variant: "primary" | "secondary" | "ghost";
  size: "default" | "icon";
  className: string;
}): string => {
  const baseStyles =
    "rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary: "bg-[#00798e] text-white hover:bg-[#006d7f] focus:ring-[#00798e]",
    secondary: "bg-gray-200 hover:bg-gray-300 focus:ring-gray-400",
    ghost: "bg-transparent !border-none focus:ring-0 focus:ring-offset-0",
  } as const;

  const sizeStyles = {
    default: "h-[56px] px-4 text-sm",
    icon: "h-7 w-7 text-xs flex items-center justify-center",
  };

  return `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim();
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "default",
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const styles = getButtonStyles({ variant, size, className });

    return (
      <button ref={ref} className={styles} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
