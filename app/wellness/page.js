export const metadata = {
  title: "Wellness",
  description: "A sanctuary of peace designed for quiet reflection and physical restoration.",
};

export default function WellnessPage() {
  return (
    <div className="pt-24">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKiN32VdMh9eADWUWHK9UHlXIRAUwOjRChyIZkhShBVb3lCktCrz4irh4HL0XzBi9Z60g1M6mvjCO1WJfns90XcEcSsXz_kV8G-fdePFyKXwYwhd794ASda6HCNuRgiIu_bqsDiV22rF1NOEvmNtbS4Qj550LjwH0dAbS-ff5ZUmvBU7DqpM3cRwOp-VqyZROAGn5TgQaUETTaoKGfUp2gngjc6zfoKmtDYau3awipQtMURRV6sZg_m6pfwThCzEL90Z5hm34ZuW0"
               alt="Wellness Sanctuary"
               className="w-full h-full object-cover brightness-[0.85]" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <span className="block text-[12px] tracking-[0.4em] uppercase mb-6">A Sanctuary of Peace</span>
          <h1 className="text-5xl md:text-8xl font-light mb-10 leading-tight">The Art of <br /><span className="italic">Serenity</span></h1>
          <p className="text-lg md:text-xl font-light opacity-90 max-w-2xl mx-auto">Elevate your spirit in a space designed for quiet reflection and physical restoration.</p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-12 max-w-[1440px]">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7 mb-24 md:mb-0">
            <div className="relative group">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa1IxyhaAGqOU0mSvz3nDloLHdqHzAKOIxZGi4BlFSl3eeqETxyhwg03qOw17XiE83By01DwaCKZ30vEK9hgh8uD4RpEr10dhW_vkIqhrA0npwcfqGzAJ2FxcmXHriO75tawp41SATSmzKvKgXInziauOqN9l24-ANCmg6RLbUglp7FXFZ1rb3I_jWeMHNyhMya9zS5kgdcZFkfSemj0HVNQShEsYPPGdMVX1tm6oPosFhWbF2rZ41CenU0NhU4KG8hHALmJ5KPm4"
                   alt="The Spa" className="w-full aspect-[4/5] object-cover" />
              <div className="absolute -bottom-12 -right-12 md:right-12 bg-white/95 backdrop-blur-md p-12 max-w-md shadow-2xl">
                <h3 className="text-3xl mb-4 italic">The Spa at Aetheria</h3>
                <p className="text-charcoal/60 text-sm mb-6 leading-relaxed">Traditional rituals meet modern science. Discover a curriculum of restorative bodywork and facial therapies.</p>
                <a href="#" className="text-[11px] font-semibold uppercase tracking-widest text-gold border-b border-gold pb-1 hover:text-bronze transition-colors">Explore Therapies</a>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col justify-center">
            <span className="text-gold text-[12px] font-semibold tracking-[0.3em] uppercase block mb-4">Mindfulness</span>
            <h2 className="text-4xl mb-8">Celestial Yoga Studio</h2>
            <p className="text-charcoal/60 text-sm mb-12 leading-relaxed">Bathed in the first light of dawn, our studio provides a panoramic view of the coastline, offering a grounding space for daily practice.</p>
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFvMFyb7aokkWDcyWuaCFPkp7oNbZIYxue6VmC3vHie2_2EnDkGzqO95VtFbmehtCAxuXMDmK8t9K6vdPUj56ILwuwqjeUv4iky5Xw_9lJiprjVbiRmnz84J9zxyZd927gOLzSjlGZZ31qDculqkotHajbBwOCGVlk1y4h3psTAIcp6IbkXl66CKam0_5im8eZZe5Ko6-m90LzB2YICvKeSZ7N4dl-ZHlsiZe-pkyWGk3MQ6Go44UlcxZH6qwrWRM0SyHsmZgEA9E"
                 alt="Yoga Studio" className="w-full aspect-square object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy/5">
        <div className="container mx-auto px-12 max-w-[1440px] grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl mb-6">The Azure Horizon</h2>
            <p className="text-charcoal/60 text-lg mb-8 italic">Where the water meets the sky.</p>
            <p className="text-charcoal/60 text-sm mb-10 leading-relaxed">Our salt-water infinity pool is heated to a perfect 28°C year-round, featuring underwater acoustic soundscapes and private cabanas.</p>
            <div className="flex gap-12">
              <div className="text-center">
                <span className="material-symbols-outlined text-4xl text-gold mb-2">thermostat</span>
                <span className="block text-[10px] font-semibold uppercase tracking-widest text-charcoal/40">28°C Water</span>
              </div>
              <div className="text-center">
                <span className="material-symbols-outlined text-4xl text-gold mb-2">waves</span>
                <span className="block text-[10px] font-semibold uppercase tracking-widest text-charcoal/40">Salt Water</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6zNLreiKOfANtJcNkMtyWC-ZCrCEt-KA0mgK7gIuM_PTbRV-dqgmmMOowi4IwhN5vfVyb6GTD6VshAFWSnmU2h5_-u0JaPIHUrTI3Xfn6aJu7-W0mQLF0N5Ej6CZhQpoTaUt2RrDEnkyG4dE_lOpAxfB5lh5iAjJc0L-dpyG0hbWTWr-rWmBJj65p-tDeNW37--4RzYF6OxwosL8St4iDRpi_rDHyY5v8_f_CXjSFbUqfZdpL45lvxiAyvgNE3ag4YZxaCfQxiBw"
                 alt="Infinity Pool" className="w-full aspect-video object-cover shadow-2xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
