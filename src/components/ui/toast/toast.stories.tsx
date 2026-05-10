"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Toaster } from "sonner";

import { Button } from "@/components/ui/button";
import { showToast } from "./toast";

const meta: Meta = {
  title: "UI/Toast",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster position="top-right" richColors theme="dark" />
      </>
    ),
  ],
};

export default meta;

type Story = StoryObj;

export const Variants: Story = {
  render: () => (
    <div className="flex gap-3">
      <Button onClick={() => showToast.success("Shipment updated successfully")}>
        Success
      </Button>

      <Button variant="danger" onClick={() => showToast.error("Failed to update shipment")}>
        Error
      </Button>

      <Button variant="secondary" onClick={() => showToast.warning("Shipment may be delayed")}>
        Warning
      </Button>

      <Button variant="ghost" onClick={() => showToast.info("Tracking data refreshed")}>
        Info
      </Button>
    </div>
  ),
};