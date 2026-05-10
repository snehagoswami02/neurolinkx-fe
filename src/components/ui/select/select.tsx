import * as React from "react";

import { cn } from "@/lib/utils";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  options: SelectOption[];
  placeholder?: string;
  error?: boolean;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, placeholder, error = false, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          "flex h-10 w-full rounded-md border",
          "bg-[var(--color-surface-2)]",
          "px-3 py-2 text-sm",
          "text-[var(--color-text)]",
          "transition-all duration-200",
          "focus:outline-none",
          "focus:border-[var(--color-primary)]",
          "focus:shadow-[0_0_0_3px_rgba(0,229,182,0.15)]",
          "hover:border-[var(--color-primary)]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error
            ? "border-[var(--color-danger)]"
            : "border-[var(--color-border-2)]",
          className
        )}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

Select.displayName = "Select";

export { Select };