"use client";

import * as React from "react";
import { Command } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({
  open,
  onOpenChange,
}: CommandPaletteProps) {
  React.useEffect(() => {
    function down(event: KeyboardEvent) {
      if (
        (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        onOpenChange(!open);
      }
    }

    document.addEventListener("keydown", down);

    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[var(--z-cmd)] flex items-start justify-center bg-[var(--color-overlay)] p-4 pt-[12vh]">
      <div
        className={cn(
          "w-full max-w-2xl overflow-hidden rounded-xl border",
          "border-[var(--color-border-2)]",
          "bg-[var(--color-surface)]",
          "shadow-[var(--shadow-lg)]"
        )}
      >
        <Command className="bg-transparent">
          <div className="flex items-center border-b border-[var(--color-border)] px-3">
            <Search className="h-4 w-4 text-[var(--color-text-3)]" />

            <Command.Input
              placeholder="Search commands..."
              className={cn(
                "flex h-12 w-full bg-transparent px-3",
                "text-sm text-[var(--color-text)]",
                "placeholder:text-[var(--color-text-3)]",
                "outline-none"
              )}
            />
          </div>

          <Command.List className="max-h-[320px] overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-sm text-[var(--color-text-3)]">
              No results found.
            </Command.Empty>

            <Command.Group heading="Quick Actions">
              <Command.Item className="rounded-md px-3 py-2 text-sm text-[var(--color-text)] hover:bg-[var(--color-primary-dim)]">
                Dashboard
              </Command.Item>

              <Command.Item className="rounded-md px-3 py-2 text-sm text-[var(--color-text)] hover:bg-[var(--color-primary-dim)]">
                Shipments
              </Command.Item>

              <Command.Item className="rounded-md px-3 py-2 text-sm text-[var(--color-text)] hover:bg-[var(--color-primary-dim)]">
                Analytics
              </Command.Item>

              <Command.Item className="rounded-md px-3 py-2 text-sm text-[var(--color-text)] hover:bg-[var(--color-primary-dim)]">
                Settings
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}