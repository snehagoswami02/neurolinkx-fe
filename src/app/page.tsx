"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";

type Shipment = {
  id: string;
  customer: string;
  status: string;
  amount: number;
};

const data: Shipment[] = [
  { id: "SHP-001", customer: "Aarav Logistics", status: "Delivered", amount: 12000 },
  { id: "SHP-002", customer: "Nova Traders", status: "In Transit", amount: 8500 },
  { id: "SHP-003", customer: "UrbanKart", status: "Delayed", amount: 5600 },
];

const columns: ColumnDef<Shipment>[] = [
  {
    accessorKey: "id",
    header: "Shipment ID",
  },
  {
    accessorKey: "customer",
    header: "Customer",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => `₹${row.original.amount.toLocaleString()}`,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <DataTable columns={columns} data={data} />
    </main>
  );
}