import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="card">
        <Link href="/create">Get Started</Link>
      </div>
    </main>
  );
}
