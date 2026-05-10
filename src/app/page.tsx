import { Input } from "@/components/ui/input";
import { FormField } from "@/components/ui/form-feild";
import { Textarea } from "@/components/ui/text area";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";




export default function Home() {
   return (
    <main className="min-h-screen p-10">
      <Switch label="Enable notifications" />
    </main>
  );
}