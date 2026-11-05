import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-green-700">Fresh Fork</h1>
        <nav className="flex gap-4">
          <Link href="/" className="hover:text-green-700">
            Home
          </Link>
          <Link href="/sing-up" className="hover:text-green-700">
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}
