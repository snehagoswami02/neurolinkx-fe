import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error = false, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex min-h-24 w-full rounded-md",
          "border",
          "bg-[var(--color-surface-2)]",
          "px-3 py-2",
          "text-sm text-[var(--color-text)]",
          "placeholder:text-[var(--color-text-3)]",
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
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };