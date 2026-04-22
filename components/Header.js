"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Suites", href: "/suites" },
    { name: "Dining", href: "/dining" },
    { name: "Wellness", href: "/wellness" },
    { name: "Experiences", href: "/experiences" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-navy/5 h-24 flex items-center">
        <nav className="container mx-auto px-12 flex justify-between items-center max-w-[1440px] w-full">
          <Link href="/" className="font-serif italic text-2xl tracking-[0.3em] text-charcoal">
            AETHERIA
          </Link>

          <div className="hidden md:flex items-center gap-12 text-[11px] tracking-[0.2em] uppercase font-semibold text-charcoal/60">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "hover:text-gold transition-colors",
                  pathname === link.href && "text-gold"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/#reservations"
              className="hidden sm:block bg-charcoal text-ivory px-8 py-3 text-[11px] font-semibold uppercase tracking-widest hover:bg-navy transition-all"
            >
              Reserve
            </Link>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-charcoal p-2 focus:outline-none"
            >
              <span className="material-symbols-outlined !text-3xl">menu</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col items-center justify-center gap-10">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-12 text-charcoal p-2"
          >
            <span className="material-symbols-outlined !text-4xl">close</span>
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-serif text-3xl text-charcoal"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#reservations"
            className="bg-gold text-white px-12 py-4 text-[12px] font-semibold uppercase tracking-widest mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Reserve Now
          </Link>
        </div>
      )}
    </>
  );
}
