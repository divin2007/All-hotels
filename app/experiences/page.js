export const metadata = {
  title: "Experiences",
  description: "Experience the soul of the coast through our private lens.",
};

export default function ExperiencesPage() {
  return (
    <div className="pt-24">
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHdku-Y5MiFT2NFcfBGQRXFUBab3AHKTdrS9dsmMnLX8NMGj4mZi-0Ojt4oM8zMbxuu3s5U_LvzRqleQqyRkVN0C4gCAgvSfFDGWPcHpQtS6n5rLA863Pa937UuJe2Ph3DIIBYDBd9ag65mM1Cgh0OT2Nxf8CR_mDQBocvMItRYY4AfVO-FWaCjyplYl7G6JxJa8OKUVO6DWkCUd1QZYDM8RIMBUAEND-0fDufQABogYMqCfa6EIcfpjpmKGiQSwc-pF1OrUhBaMQ"
               alt="Maritime Experience" className="w-full h-full object-cover brightness-[0.75]" />
        </div>
        <div className="relative z-10 container mx-auto px-12 max-w-[1440px] text-white">
          <div className="max-w-2xl">
            <span className="text-gold text-[12px] font-semibold tracking-[0.4em] uppercase block mb-6">Curated Journeys</span>
            <h1 className="text-5xl md:text-8xl font-light mb-8 leading-tight">Bespoke <br />Adventures</h1>
            <p className="text-lg md:text-xl font-light opacity-90 leading-relaxed">
              Beyond the threshold of the ordinary lies a collection of moments designed to linger in memory. Experience the soul of the coast through our private lens.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-12 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 group relative overflow-hidden h-[600px] shadow-xl">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCENaye7Q_35Y018ECaAGa5CMOjDrDXyy1RxE4jYj-uw7vtNYXtYdBGvRB-km-wqRzf-khFvrbwk3hg6g9RGyaNs6hrdJuZ3vkfRY6xgYj135c8UvIOsNkLm-_A--hFcXWT_9BR4pIGZVhm10oi5Zx_8bdf1VOcpUHgu7whnU69xVTnNXjAJbtF6W0V5e7GvUzYEQsplWT1c-2e2aAMqisSSuSp05AJToytoxruw-lsPPqAaIqCdJP_9tk7NySzV9MyhhoJil9VXY4"
                 alt="Yacht Sail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-12 left-12 text-white max-w-md">
              <span className="text-gold text-[10px] font-semibold tracking-[0.3em] uppercase block mb-4">Maritime</span>
              <h3 className="text-3xl mb-6">Midnight Azure Sail</h3>
              <p className="text-white/70 text-sm mb-8">A private sunset charter through the hidden inlets of the archipelago, accompanied by a curated tasting of local vintages.</p>
              <a href="#" className="inline-block bg-white text-charcoal px-10 py-4 text-[11px] font-semibold uppercase tracking-widest hover:bg-gold hover:text-white transition-all">Inquire</a>
            </div>
          </div>

          <div className="md:col-span-4 bg-navy/5 p-12 flex flex-col justify-between group shadow-sm">
            <div>
              <span className="text-gold text-[10px] font-semibold tracking-[0.3em] uppercase block mb-6">Cultural Workshop</span>
              <h3 className="text-3xl mb-6 italic">The Sculptor's Hands</h3>
              <p className="text-charcoal/60 text-sm mb-8 leading-relaxed">Spend an afternoon in the private atelier of Master Lorenzo, learning the ancient techniques of marble carving.</p>
            </div>
            <div className="relative overflow-hidden aspect-square mb-8">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAy1BMr5ptsI-tJRQbDzfM0HYNpEK4ygcn-Vkiu_cybZ4M5OrF9UhaXzx2Eh9mDtOFjgVgliT05Yi_X0Tg3-4bNu6z9yw1jD7M-FRSrTdveAyB3DehKw1_Uc0L7J41vHt4GURsh6ZGdsHxUhwbI1LPM9-I4PmyXxjQ7YFKXdeoX_lpjhPtejTufi79NMVaChQCCc4E1Aff60FCFwhNO96x78r6UzLuS7az4l4HFCo4db57-BtmL4Z01kkk564oMN48s2Vbn64d5sY"
                   alt="Sculpting" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
            </div>
            <a href="#" className="inline-block border border-charcoal/20 text-charcoal px-8 py-4 text-[11px] font-semibold uppercase tracking-widest hover:bg-charcoal hover:text-white transition-all text-center">Inquire</a>
          </div>
        </div>
      </section>
    </div>
  );
}
