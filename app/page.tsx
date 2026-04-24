import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-6xl font-display-xl mb-8">AETHERIA</h1>
      <Link href="/dining" className="text-xl hover:text-amber-700 transition-colors">
        Enter Dining Experience
      </Link>
    </main>
  );
}
