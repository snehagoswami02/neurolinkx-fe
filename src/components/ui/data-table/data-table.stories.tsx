"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ColumnDef } from "@tanstack/react-table";

import { DataTable } from "./data-table";

type Shipment = {
  id: string;
  customer: string;
  status: string;
  amount: number;
};

const data: Shipment[] = [
  {
    id: "SHP-001",
    customer: "Aarav Logistics",
    status: "Delivered",
    amount: 12000,
  },
  {
    id: "SHP-002",
    customer: "Nova Traders",
    status: "In Transit",
    amount: 8500,
  },
  {
    id: "SHP-003",
    customer: "UrbanKart",
    status: "Delayed",
    amount: 5600,
  },
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
    cell: ({ row }) =>
      `₹${row.original.amount.toLocaleString()}`,
  },
];

const meta: Meta<typeof DataTable> = {
  title: "UI/DataTable",
  component: DataTable,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={data}
    />
  ),
};

export const Loading: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={[]}
      loading
    />
  ),
};

export const Empty: Story = {
  render: () => (
    <DataTable
      columns={columns}
      data={[]}
    />
  ),
};