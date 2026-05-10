import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { FormField } from "./form-feild";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/text area";

const meta: Meta<typeof FormField> = {
  title: "UI/FormField",
  component: FormField,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  render: () => (
    <div className="max-w-md">
      <FormField
        label="Email"
        helperText="We'll never share your email."
      >
        <Input placeholder="Enter your email" />
      </FormField>
    </div>
  ),
};

export const Error: Story = {
  render: () => (
    <div className="max-w-md">
      <FormField
        label="Email"
        error="Invalid email address"
      >
        <Input
          placeholder="Enter your email"
          error
        />
      </FormField>
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div className="max-w-md">
      <FormField
        label="Password"
        required
      >
        <Input
          type="password"
          placeholder="Enter your password"
        />
      </FormField>
    </div>
  ),
};

export const TextareaField: Story = {
  render: () => (
    <div className="max-w-md">
      <FormField
        label="Message"
        helperText="Write a short note."
      >
        <Textarea placeholder="Enter your message..." />
      </FormField>
    </div>
  ),
};