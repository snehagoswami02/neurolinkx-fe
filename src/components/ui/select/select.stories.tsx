import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Select } from "./select";

const meta: Meta<typeof Select> = {
  title: "UI/Select",
  component: Select,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Select>;

const options = [
  { label: "Pending", value: "pending" },
  { label: "In Transit", value: "in-transit" },
  { label: "Delivered", value: "delivered" },
  { label: "Delayed", value: "delayed" },
];

export const Default: Story = {
  args: {
    placeholder: "Select status",
    options,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled select",
    options,
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    placeholder: "Invalid selection",
    options,
    error: true,
  },
};