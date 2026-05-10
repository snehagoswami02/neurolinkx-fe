"use client";

import * as React from "react";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  className,
}: ModalProps) {
  React.useEffect(() => {
    function handleEsc(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    if (open) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4"
    >
      <button
        aria-label="Close modal overlay"
        className="absolute inset-0 bg-[var(--color-overlay)]"
        onClick={onClose}
      />

      <div
        className={cn(
          "relative z-10 w-full max-w-lg rounded-xl border",
          "border-[var(--color-border-2)]",
          "bg-[var(--color-surface)]",
          "p-6 shadow-[var(--shadow-lg)]",
          "animate-in fade-in zoom-in-95 duration-200",
          className
        )}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h2
              id="modal-title"
              className="text-lg font-semibold text-[var(--color-text)]"
            >
              {title}
            </h2>

            {description && (
              <p className="mt-1 text-sm text-[var(--color-text-2)]">
                {description}
              </p>
            )}
          </div>

          <Button
            variant="ghost"
            size="sm"
            aria-label="Close modal"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {children && (
          <div className="text-sm text-[var(--color-text-2)]">
            {children}
          </div>
        )}

        {footer && (
          <div className="mt-6 flex justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}