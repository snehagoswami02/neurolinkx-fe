import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Settings
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Configure dashboard preferences and account settings.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">
            Preferences
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="font-medium text-gray-900">Email Notifications</p>
              <p className="mt-1 text-sm text-gray-500">
                Manage alert and notification preferences.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-4">
              <p className="font-medium text-gray-900">Security</p>
              <p className="mt-1 text-sm text-gray-500">
                Update password and access settings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}