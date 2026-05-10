import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Welcome back. Here&apos;s an overview of your platform.
          </p>
        </div>

        <DashboardStats />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                User Analytics
              </h2>

              <button className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium transition hover:bg-gray-100">
                Export
              </button>
            </div>

            <div className="flex h-72 items-center justify-center rounded-xl bg-gray-50 text-sm text-gray-400">
              Chart will be added after dependency fix
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              Activity
            </h2>

            <div className="mt-5 space-y-4">
              {[
                "New signup from California",
                "Payment processed successfully",
                "New report generated",
                "Admin updated settings",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-sm text-gray-600"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              Recent Transactions
            </h2>

            <button className="text-sm font-medium text-blue-600">
              View all
            </button>
          </div>

          <RecentTransactions />
        </div>
      </div>
    </DashboardLayout>
  );
}