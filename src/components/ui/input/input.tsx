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
          [
            "flex h-10 w-full rounded-md border",
            "bg-[var(--color-surface)]",
            "px-3 py-2 text-sm",
            "text-[var(--color-text)]",
            "placeholder:text-[var(--color-text-3)]",
            "transition-all duration-200",
            "focus:outline-none focus:ring-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
          ].join(" "),

          error
            ? "border-[var(--color-danger)]"
            : "border-[var(--color-border)]",

          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };