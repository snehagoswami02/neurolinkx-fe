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
import * as React from "react";


export default function Home() {
    return (
    <main className="min-h-screen p-10 flex gap-4">
      <Button
        onClick={() =>
          showToast.success("Shipment updated successfully")
        }
      >
        Success Toast
      </Button>

      <Button
        variant="danger"
        onClick={() =>
          showToast.error("Failed to update shipment")
        }
      >
        Error Toast
      </Button>
    </main>
  );
}