import * as React from "react";

import { cn } from "@/lib/utils";

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: boolean;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, error = false, id, disabled, ...props }, ref) => {
    const switchId = id ?? React.useId();

    return (
      <label
        htmlFor={switchId}
        className={cn(
          "inline-flex items-center gap-3 text-sm text-[var(--color-text)]",
          disabled && "cursor-not-allowed opacity-50",
          !disabled && "cursor-pointer",
          className
        )}
      >
        <span className="relative inline-flex h-6 w-11 items-center">
          <input
            ref={ref}
            id={switchId}
            type="checkbox"
            disabled={disabled}
            className="peer sr-only"
            {...props}
          />

          <span
            className={cn(
              "absolute inset-0 rounded-full border transition-all duration-200",
              "bg-[var(--color-surface-2)]",
              "peer-checked:bg-[var(--color-primary)]",
              "peer-checked:border-[var(--color-primary)]",
              "peer-focus-visible:shadow-[0_0_0_3px_rgba(0,229,182,0.15)]",
              error
                ? "border-[var(--color-danger)]"
                : "border-[var(--color-border-2)]"
            )}
          />

          <span
            className={cn(
              "relative ml-1 h-4 w-4 rounded-full bg-[var(--color-text)] transition-transform duration-200",
              "peer-checked:translate-x-5 peer-checked:bg-black"
            )}
          />
        </span>

        {label && <span>{label}</span>}
      </label>
    );
  }
);

Switch.displayName = "Switch";

export { Switch };