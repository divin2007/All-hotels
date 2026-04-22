import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ivory border-t border-navy/5 py-20 px-12">
      <div className="container mx-auto max-w-[1440px] flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="max-w-xs">
          <Link href="/" className="font-serif italic text-xl tracking-[0.3em] text-charcoal block mb-6">
            AETHERIA
          </Link>
          <p className="text-charcoal/50 text-sm leading-relaxed mb-8">
            A sanctuary of quiet luxury, where every stay becomes a timeless memory of the Mediterranean.
          </p>
          <div className="flex gap-6 opacity-30">
            <span className="material-symbols-outlined cursor-pointer hover:text-gold transition-colors">public</span>
            <span class="material-symbols-outlined cursor-pointer hover:text-gold transition-colors">share</span>
            <span class="material-symbols-outlined cursor-pointer hover:text-gold transition-colors">mail</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-[10px] font-semibold uppercase tracking-widest text-charcoal/60">
          <div className="flex flex-col gap-4">
            <span className="text-charcoal mb-2">Explore</span>
            <Link href="/suites" className="hover:text-gold transition-colors">Suites</Link>
            <Link href="/dining" className="hover:text-gold transition-colors">Dining</Link>
            <Link href="/wellness" className="hover:text-gold transition-colors">Wellness</Link>
            <Link href="/gallery" className="hover:text-gold transition-colors">Gallery</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-charcoal mb-2">About</span>
            <Link href="#" className="hover:text-gold transition-colors">Our Story</Link>
            <Link href="#" className="hover:text-gold transition-colors">Sustainability</Link>
            <Link href="#" className="hover:text-gold transition-colors">Contact</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-charcoal mb-2">Legal</span>
            <Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-gold transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-[1440px] mt-20 pt-12 border-t border-navy/5 flex flex-col md:row justify-between items-center gap-8">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-charcoal/30">
          © 2024 Aetheria Boutique Hotel. Designed for Serenity.
        </span>
        <div className="flex gap-8 opacity-20">
          <img src="https://www.cloudbeds.com/wp-content/uploads/2025/08/footer-pcidss.svg" alt="PCI-DSS" className="h-4" />
          <img src="https://www.cloudbeds.com/wp-content/uploads/2025/08/footer-ssl.svg" alt="SSL" className="h-4" />
        </div>
      </div>
    </footer>
  );
}
