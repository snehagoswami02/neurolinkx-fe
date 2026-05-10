"use client";

import * as React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "@/components/ui/button";
import { CommandPalette } from "./command-palette";

const meta: Meta<typeof CommandPalette> = {
  title: "UI/CommandPalette",
  component: CommandPalette,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CommandPalette>;

function CommandPaletteDemo() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Open Command Palette
      </Button>

      <CommandPalette
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}

export const Default: Story = {
  render: () => <CommandPaletteDemo />,
};