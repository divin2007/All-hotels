export const metadata = {
  title: "Dining",
  description: "At Aetheria, dining is a multisensory journey through the seasons.",
};

export default function DiningPage() {
  return (
    <div className="pt-24">
      <header className="container mx-auto px-12 max-w-[1440px] py-24">
        <div className="flex flex-col md:flex-row gap-8 items-end">
          <div className="w-full md:w-2/3">
            <h1 className="text-5xl md:text-8xl font-light mb-8">Epicurean <br /> <span className="italic">Excellence</span></h1>
            <p className="text-lg md:text-xl font-light text-charcoal/60 max-w-xl">
              At Aetheria, dining is a multisensory journey through the seasons. Our Michelin-star kitchen celebrates the purity of ingredients with technical mastery.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex justify-end">
            <a href="#reservations" className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-widest text-charcoal hover:text-gold transition-colors group">
              Book a Table
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
        </div>
        <div className="mt-16 relative h-[70vh] w-full overflow-hidden shadow-2xl">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIJbc4YYXSkPaSDDmiau2R4OXIVuDynzZuuQajkVBpUekFDFD4SP0NR9kV2e4PtRhojr-fN18DiAkUT-DQkIXO0LCfErcTUsJHtsMJkIMbd0HsTlaWtt4BIJOEKw9KAcodioqGMDPSh_x8tn_CzZr-3JNZdElWzB1RCknuB2-d9N0pNQNdb6t-ROktMTSrEibn4WPWmMvJ50x10NK9YTCwdH_mjTPO3f_MshOq40lt9tYzk96mixJtDEo4gHtTSi1je6LgoT5UASM"
               alt="Fine Dining" className="w-full h-full object-cover" />
          <div className="absolute bottom-12 right-12 bg-ivory/95 backdrop-blur-md p-8 max-w-sm">
            <span className="text-gold text-[10px] font-semibold tracking-[0.3em] uppercase block mb-4">Featured Venue</span>
            <h3 className="text-2xl mb-2 italic">The Gastronomy Room</h3>
            <p className="text-charcoal/60 text-sm">A dialogue between nature and plate.</p>
          </div>
        </div>
      </header>

      <section className="py-24 container mx-auto px-12 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5">
            <span className="text-gold text-[12px] font-semibold tracking-[0.3em] uppercase block mb-6">The Atmosphere</span>
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">The Main <br />Restaurant</h2>
            <p className="text-charcoal/60 text-lg mb-12 leading-relaxed">
              Designed with high ceilings and floor-to-ceiling windows, our flagship venue offers panoramic views that shift with the evening light. A sanctuary of understated luxury.
            </p>
            <div className="flex gap-12 pt-8 border-t border-navy/5">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-charcoal/40">Dinner</span>
                <span className="text-sm italic">19:00 — 23:00</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-charcoal/40">Dress Code</span>
                <span className="text-sm italic">Elegant Casual</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXCu4GfCwIP-ydrFDaTNXGiPQfK9eK9IqpCDxHR5FGF3f233BLKTl6WliAOvQuGG4cR5GM-YtRbKGI0Tsj7licnDpeVSV2uNZMr56J2_uQ7gFRAeSJ55uGtg46gsL3XRZG7WnfboswySXeAklspe6uRqZrlf-Y7VZx3FgWQytHKTkGv16w8hjxQ4VIjwpKo7OpTFevYal1Pej7Z8WCHWenCvEty6YcHacIEXUlUnNShpXg3cwrgUNNXlQNi-UMe5IguTD6kiekaEE"
                 alt="Restaurant Interior" className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-1000 shadow-xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
