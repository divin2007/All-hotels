import Link from "next/link";
import { rooms } from "@/data/rooms";
import BookingEngine from "@/components/BookingEngine";
import SuiteCard from "@/components/SuiteCard";

export default function Home() {
  // Only show first 3 rooms on homepage
  const featuredRooms = rooms.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuChJ9BkWSeQnqySerTb9jZGS41LBmy2VvFexftXtq6fj6ha8lEOPTeKZbVvq_WsQxCcERzKUKkG4CX6r7Woah2olOGYNAh_u9XpCmtRl0giAsjMFRvA50kNis22J5NM6fLQYLn5VDh0RFZH5fyQSBJUcIx3yACjZb1dmKa7w3wJQQKS1vXdYF4FR6RRp3Es7xEyOR5m6unFrrbOPEXPslgoLs3ev-4uHwQW_CTpA0AaxRYu4v8udChqg_x-XIRJRW6klFfbv_LjkHI"
               alt="Aetheria Luxury Boutique Hotel"
               className="w-full h-full object-cover brightness-[0.85] scale-105" />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <span className="block text-[12px] tracking-[0.4em] uppercase mb-6">Experience Absolute Stillness</span>
          <h1 className="text-5xl md:text-8xl font-light mb-10 leading-tight">The Art of <br /><span className="italic">Stillness</span></h1>
          <p className="text-lg md:text-xl font-light opacity-90 max-w-2xl mx-auto mb-12">
            A sanctuary of understated elegance where modern luxury meets timeless Mediterranean heritage.
          </p>
          <div className="flex justify-center gap-8">
            <Link href="#reservations" className="bg-gold text-white px-10 py-5 text-[12px] font-semibold uppercase tracking-widest hover:bg-bronze transition-all">
              Discover More
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-[10px] uppercase tracking-widest text-white font-semibold">Scroll</span>
          <div className="w-px h-12 bg-white/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-section-gap container mx-auto px-12 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-navy/5 mb-8 group-hover:bg-gold/10 transition-colors duration-500">
              <span className="material-symbols-outlined text-gold !text-3xl">location_on</span>
            </div>
            <h3 className="text-2xl mb-4 font-serif">Prime Location</h3>
            <p className="text-charcoal/60 leading-relaxed max-w-xs">
              Nestled in the historic heart of the coast, where cultural heritage meets modern vibrancy at every corner.
            </p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-navy/5 mb-8 group-hover:bg-gold/10 transition-colors duration-500">
              <span className="material-symbols-outlined text-gold !text-3xl">concierge</span>
            </div>
            <h3 className="text-2xl mb-4 font-serif">Personalized Service</h3>
            <p className="text-charcoal/60 leading-relaxed max-w-xs">
              Our 24/7 dedicated concierge ensures every aspect of your stay is curated to your exact desires and preferences.
            </p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-navy/5 mb-8 group-hover:bg-gold/10 transition-colors duration-500">
              <span className="material-symbols-outlined text-gold !text-3xl">spa</span>
            </div>
            <h3 className="text-2xl mb-4 font-serif">Unrivaled Amenities</h3>
            <p className="text-charcoal/60 leading-relaxed max-w-xs">
              From our infinity pool to our world-class holistic spa, every detail is crafted for your ultimate rejuvenation.
            </p>
          </div>
        </div>
      </section>

      {/* Room Collection */}
      <section id="rooms" className="bg-navy/5 py-section-gap">
        <div className="container mx-auto px-12 max-w-[1440px]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-xl">
              <span className="text-gold text-[12px] font-semibold tracking-[0.3em] uppercase block mb-4">Exquisite Sanctuaries</span>
              <h2 className="text-4xl md:text-5xl">Our Suite Collection</h2>
            </div>
            <Link href="/suites" className="group flex items-center gap-3 text-[11px] font-semibold uppercase tracking-widest text-charcoal border-b border-transparent hover:border-charcoal pb-1 transition-all">
              View All Suites <span className="material-symbols-outlined !text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <SuiteCard key={room.slug} suite={room} />
            ))}
          </div>
        </div>
      </section>

      {/* Reservations Section */}
      <section id="reservations" className="py-section-gap bg-ivory">
        <div className="container mx-auto px-12 max-w-[1440px]">
          <div className="mb-20 text-center">
            <span className="text-gold text-[12px] font-semibold tracking-[0.3em] uppercase block mb-4">Reservations</span>
            <h2 className="text-4xl md:text-5xl mb-8 font-serif">Begin Your Journey</h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto italic">
              Secure your stay at Aetheria. Experience a seamless booking journey designed for your comfort.
            </p>
          </div>

          <BookingEngine />

          <div className="mt-12 flex justify-center gap-12 text-[10px] font-semibold text-charcoal/30 uppercase tracking-[0.2em]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined !text-sm">verified_user</span>
              PCI-DSS COMPLIANT
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined !text-sm">lock</span>
              SECURE PAYMENT
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined !text-sm">schedule</span>
              BEST RATE GUARANTEE
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
