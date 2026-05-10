export function Topbar() {
  return (
    <header
      className="
        flex h-16 items-center justify-between
        border-b border-[var(--color-border)]
        bg-[var(--color-surface)]
        px-6
      "
    >
      <div>
        <h2 className="text-lg font-semibold text-[var(--color-text)]">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-3">
        <div
          className="
            flex h-9 w-9 items-center justify-center
            rounded-full
            bg-[var(--color-primary-dim)]
            text-sm font-medium
            text-[var(--color-primary)]
          "
        >
          SG
        </div>
      </div>
    </header>
  );
}