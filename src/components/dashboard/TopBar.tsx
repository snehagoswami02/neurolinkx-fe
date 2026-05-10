"use client";

import { Bell, Search } from "lucide-react";

export function Topbar() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
      <div className="relative w-full max-w-md">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
        />
      </div>

      <div className="ml-6 flex items-center gap-4">
        <button className="relative rounded-xl p-2 transition hover:bg-gray-100">
          <Bell size={20} className="text-gray-600" />

          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
            SG
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-900">
              Sneha Goswami
            </p>

            <p className="text-xs text-gray-500">
              Frontend Developer
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}