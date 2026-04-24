import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 mt-32">
      <div className="max-w-[1440px] mx-auto px-12 py-20 flex flex-col md:flex-row justify-between items-center gap-8 font-headline-lg text-[11px] tracking-[0.15em] uppercase">
        <Link href="/" className="font-headline-lg text-xl tracking-widest text-slate-900">
          AETHERIA
        </Link>
        <div className="flex gap-12 text-slate-400">
          <Link href="/privacy" className="hover:text-on-tertiary-container transition-colors duration-300">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-on-tertiary-container transition-colors duration-300">
            Terms
          </Link>
          <Link href="/press" className="hover:text-on-tertiary-container transition-colors duration-300">
            Press
          </Link>
          <Link href="/contact" className="hover:text-on-tertiary-container transition-colors duration-300">
            Contact
          </Link>
        </div>
        <div className="text-slate-500">
          © 2024 Aetheria Boutique Hotel. Designed for Serenity.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
