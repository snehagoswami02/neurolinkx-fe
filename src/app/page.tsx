import { Input } from "@/components/ui/input";
import { FormField } from "@/components/ui/form-feild";
import { Textarea } from "@/components/ui/text area";
export default function Home() {
   return (
    <main className="min-h-screen p-10">
      <div className="max-w-md">
        <FormField
          label="Message"
          helperText="Write a short note."
        >
          <Textarea placeholder="Enter your message..." />
        </FormField>
      </div>
    </main>
   );
}