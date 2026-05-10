import { DashboardShell } from "@/components/layout/dashboard-shell";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div>
        <h1 className="text-2xl font-semibold text-[var(--color-text)]">
          Welcome back
        </h1>

        <p className="mt-2 text-[var(--color-text-2)]">
          Shipment analytics and logistics overview.
        </p>
      </div>
    </DashboardShell>
  );
}