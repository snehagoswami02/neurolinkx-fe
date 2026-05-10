import { Input } from "@/components/ui/input";
import { FormField } from "@/components/ui/form-feild";
import { Textarea } from "@/components/ui/text area";
import { Select } from "@/components/ui/select";
export default function Home() {
    return (
    <main className="min-h-screen p-10">
      <div className="max-w-md">
        <FormField label="Shipment Status" helperText="Choose current status.">
          <Select
            defaultValue=""
            placeholder="Select status"
            options={[
              { label: "Pending", value: "pending" },
              { label: "In Transit", value: "in-transit" },
              { label: "Delivered", value: "delivered" },
              { label: "Delayed", value: "delayed" },
            ]}
          />
        </FormField>
      </div>
    </main>
  );
}