"use client";

import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Modal } from "./modal";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof Modal> = {
  title: "UI/Modal",
  component: Modal,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Modal>;

function ModalDemo() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Update shipment status"
        description="Confirm before applying this change."
        footer={
          <>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </>
        }
      >
        This action will update the selected shipment status.
      </Modal>
    </>
  );
}

export const Default: Story = {
  render: () => <ModalDemo />,
};