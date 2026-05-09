import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error = false, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
  "flex w-full rounded-md",
  "border border-[var(--color-border-2)]",

  "bg-[var(--color-surface-2)]",

  "px-3 py-2",
  "text-sm text-[var(--color-text)]",

  "placeholder:text-[var(--color-text-3)]",

  "transition-all duration-200",

  "focus:outline-none",
  "focus:ring-2",
  "focus:ring-[var(--color-primary-dim-2)]",
  "focus:border-[var(--color-primary)]",

  "hover:border-[var(--color-primary)]",

  "disabled:cursor-not-allowed",
  "disabled:opacity-50",

  "h-10",

  error && "border-[var(--color-danger)]",

  className
)}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };