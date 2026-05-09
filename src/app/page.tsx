import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] p-10">
      <div className="max-w-md space-y-4">
        <Input placeholder="Enter your email" />

        <Button>Primary Button</Button>
      </div>
    </main>
  );
}