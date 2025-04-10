import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/dashboard">
        <Button>Click me</Button>
      </Link>
    </div>
  );
}
