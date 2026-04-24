"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Suites", href: "/suites" },
    { name: "Wellness", href: "/wellness" },
    { name: "Dining", href: "/dining" },
    { name: "Experiences", href: "/experiences" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 h-24">
        <div className="flex justify-between items-center w-full max-w-[1440px] mx-auto px-12 h-full">
          <Link href="/" className="font-headline-lg italic text-2xl tracking-[0.3em] text-slate-900">
            AETHERIA
          </Link>

          <div className="hidden md:flex gap-12 items-center font-headline-lg text-[13px] tracking-[0.2em] uppercase">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-500 hover:text-on-tertiary-container transition-all duration-500 ease-in-out"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-primary text-white px-8 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-slate-800 transition-colors">
              Reserve
            </button>
            <button
              className="md:hidden text-slate-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col items-center justify-center gap-10">
          <button
            className="absolute top-8 right-12 text-slate-900"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={40} />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-headline-lg text-3xl text-slate-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-on-tertiary-container text-white px-12 py-4 font-label-caps text-label-caps uppercase tracking-widest mt-4">
            Reserve Now
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
