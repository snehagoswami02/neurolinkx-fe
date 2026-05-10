import { KPICard } from "./KPICards";

const stats = [
  {
    title: "Total Users",
    value: "12,450",
    change: "+12.5%",
    description: "Compared to last month",
  },
  {
    title: "Revenue",
    value: "$48,200",
    change: "+8.2%",
    description: "Monthly revenue growth",
  },
  {
    title: "Active Sessions",
    value: "3,240",
    change: "+5.4%",
    description: "Currently active users",
  },
  {
    title: "Conversion Rate",
    value: "7.8%",
    change: "+2.1%",
    description: "Visitors converted",
  },
];

export function DashboardStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => (
        <KPICard key={item.title} {...item} />
      ))}
    </div>
  );
}