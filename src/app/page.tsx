import { Input } from "@/components/ui/input";
import { FormField } from "@/components/ui/form-feild";

export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <div className="max-w-md">
        <FormField
          label="Email"
          helperText="We'll never share your email."
        >
          <Input placeholder="Enter your email" />
        </FormField>
      </div>
    </main>
  );
}