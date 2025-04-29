"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center p-4 bg-white text-black shadow-md sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold">
        <p>
          {/* <span className="text-2xl text-blue-500">Banco</span> de Ideias */}
          Gerador de ide<span className="text-2xl text-blue-500">IA</span>s
        </p>
      </Link>
      <Link
        href="/favoritos"
        className="text-lg hover:text-blue-500 transition-colors duration-300"
      >
        ❤️ Favoritos
      </Link>
    </header>
  );
}
