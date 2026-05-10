type KPICardProps = {
  title: string;
  value: string;
  change: string;
  description: string;
};

export function KPICard({ title, value, change, description }: KPICardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <p className="text-sm text-gray-500">{title}</p>

      <div className="mt-3 flex items-end justify-between">
        <h2 className="text-3xl font-bold text-gray-900">{value}</h2>
        <span className="text-sm font-medium text-green-600">{change}</span>
      </div>

      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
  );
}