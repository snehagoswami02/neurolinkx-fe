import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./TopBar";

type DashboardLayoutProps = {
  children: ReactNode;
};

export function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}