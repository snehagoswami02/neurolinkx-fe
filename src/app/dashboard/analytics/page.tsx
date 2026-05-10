import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Analytics
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Track platform performance and user growth.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">
            Analytics Overview
          </h2>

          <div className="mt-6 flex h-80 items-center justify-center rounded-xl bg-gray-50 text-sm text-gray-400">
            Analytics chart section
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}