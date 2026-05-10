import * as React from "react";

import { cn } from "@/lib/utils";

interface FormFieldProps {
  label?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function FormField({
  label,
  helperText,
  error,
  required,
  children,
  className,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <label
          className="
            text-sm
            font-medium
            text-[var(--color-text)]
          "
        >
          {label}

          {required && (
            <span className="ml-1 text-[var(--color-danger)]">
              *
            </span>
          )}
        </label>
      )}

      {children}

      {error ? (
        <p
          className="
            text-xs
            text-[var(--color-danger)]
          "
        >
          {error}
        </p>
      ) : helperText ? (
        <p
          className="
            text-xs
            text-[var(--color-text-3)]
          "
        >
          {helperText}
        </p>
      ) : null}
    </div>
  );
}