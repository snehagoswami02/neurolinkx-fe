"use client";
import { Input } from "@/components/ui/input";
import { FormField } from "@/components/ui/form-feild";
import { Textarea } from "@/components/ui/text area";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { showToast } from "@/components/ui/toast";
import { CommandPalette } from "@/components/ui/command-palette";
import * as React from "react";


export default function Home() {
    const [open, setOpen] = React.useState(false);

  return (
    <main className="min-h-screen p-10">
      <Button onClick={() => setOpen(true)}>
        Open Command Palette
      </Button>

      <CommandPalette
        open={open}
        onOpenChange={setOpen}
      />
    </main>
  );
}