import * as React from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: boolean;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error = false, id, disabled, ...props }, ref) => {
    const checkboxId = React.useId();
    const resolvedId = id ?? checkboxId;

    return (
      <label
        htmlFor={resolvedId}
        id ={resolvedId}
        className={cn(
          "inline-flex items-center gap-2 text-sm text-[var(--color-text)]",
          disabled && "cursor-not-allowed opacity-50",
          !disabled && "cursor-pointer",
          className
        )}
      >
        <span className="relative inline-flex h-4 w-4 items-center justify-center">
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            disabled={disabled}
            className="peer sr-only"
            {...props}
          />

          <span
            className={cn(
              "flex h-4 w-4 items-center justify-center rounded-sm border",
              "bg-[var(--color-surface-2)]",
              "transition-all duration-200",
              "peer-focus-visible:shadow-[0_0_0_3px_rgba(0,229,182,0.15)]",
              "peer-checked:bg-[var(--color-primary)]",
              "peer-checked:border-[var(--color-primary)]",
              error
                ? "border-[var(--color-danger)]"
                : "border-[var(--color-border-2)]"
            )}
          >
            <Check className="h-3 w-3 text-black opacity-0 peer-checked:opacity-100" />
          </span>
        </span>

        {label && <span>{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };