import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      This is Home Page
      <Button asChild className="mt-4">
        <Link href="/demo">Go to demo page</Link>
      </Button>
    </main>
  );
}
