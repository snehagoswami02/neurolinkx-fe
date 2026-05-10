"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Bell,
  LayoutDashboard,
  Package,
  Settings,
} from "lucide-react";

import { cn } from "@/lib/utils";

const navigation = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Shipments",
    href: "/shipments",
    icon: Package,
  },
  {
    label: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
        hidden md:flex
        h-screen w-64 flex-col
        border-r border-[var(--color-border)]
        bg-[var(--color-surface)]
        p-4
      "
    >
      <div className="mb-8">
        <h1 className="text-xl font-semibold text-[var(--color-text)]">
          NeuroLinkX
        </h1>

        <p className="text-sm text-[var(--color-text-3)]">
          Logistics Dashboard
        </p>
      </div>

      <nav className="flex flex-col gap-2">
        {navigation.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all",
                active
                  ? "bg-[var(--color-primary-dim)] text-[var(--color-primary)]"
                  : "text-[var(--color-text-2)] hover:bg-[var(--color-surface-2)]"
              )}
            >
              <Icon className="h-4 w-4" />

              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}