export const metadata = {
  title: "Suites",
  description: "Discover a collection of curated sanctuaries designed for absolute serenity.",
};

export default function SuitesPage() {
  const suites = [
    {
      title: "Signature Suite",
      price: "850",
      size: "85 SQM",
      view: "GARDEN VIEW",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7vgbFwUQ3wqpjdk2afx2AmxqRauG6BvNwGIR3yS620Uj3svuitstCvzJ4aH8Oo-bFDzLDeuvMNWUSzH75jJlfNF8BQk7j93cHyyS4u2kiVw06sgqIjc5dL6GQqdBmc_LEcjUK6uQOkvMPT-QoM8pOTAa59Qb5aTH8TVhBfDnywfSxmZyfA96fvJW26ym0CbIfdDflpGr1RAsFDh5jXc_1SNz4FTXcFAYNH_lrzgO6G7g0uK9MY8dgm8N851T8L-LtgU_dqg7QKWw",
    },
    {
      title: "Panoramic Suite",
      price: "1,200",
      size: "110 SQM",
      view: "OCEAN VIEW",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGM7J8f_WvUyvSGY8jTqmobDWRCkzBNXSmlsYRWe_T0vsA1HBnrlg8EdWThOy5UcvoKZ57DorxY9T1KOXQy2YjEgvhnpQyKTrL7JBYDw5WbhpWaJ8ewy2uSr3PoMfi_0ZuV_htJc6Sq-atgd89pEehPaI5fr2Rpk05S97e_ofsqADl0CdPS84uP-PPCF_HfNPLEEzCPwHrCVPaP4dds_KHnWpd65rGJSkzWBxKRfox1hDV4K65LN7GZRTpqVNVbKIYLCHep8RXmBI",
    },
    {
      title: "Aetheria Penthouse",
      price: "2,500",
      size: "240 SQM",
      view: "360° VIEW",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmGPhmAlapY1GHEtbrCYJwzHdeZBLUGP7jl6e7_HlDCVAfZKcpAR8qblOp7w-KbVoxu0zCtSEJHy4d0veJ7s6p1ZypdRxBGXSCR1C_VvhpnDC3QCqLsTg4Wx2SrzPzcp-wD0PVL1TQZc_ZGuSfyxzuNRey_oSPa2VyOjTrIx3bGzJZYo-v0JvlavRK5clWc8cJjFCudNY4atUPYG1GEKdh2t3uBOMOzBIdmML_c3pY4A0wVw-HyNaR9ZrMr1Yv1LrE8AeP-rB_YLo",
    },
    {
      title: "Deluxe Garden Room",
      price: "600",
      size: "55 SQM",
      view: "GARDEN VIEW",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd1IDcp1HAcHLnTaZgwOVdzba_4IjZPOfdUR1_Fo9MyzbLh47YwrR42GUGO7kxuH4VjYT2Zpc-a5f1R63uc2sse9Jx7MsXvBgfWG0BdKCFtvIBWq-b9EJlQwu29lp-2Fr_OwF_yxipfqftNHJv0jAThti3xCbZf-yge0Gmf7hpJ-dVurmbBGJGEi65cIgeoR68o8CB2vDxa_BlGNKKJx8Q4UFfA-RbhblgWypAZIwpUkgNUlhh-JQaFakuHgdrpXzs8AuHg5fHjAQ",
    }
  ];

  return (
    <div className="pt-24">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuChJ9BkWSeQnqySerTb9jZGS41LBmy2VvFexftXtq6fj6ha8lEOPTeKZbVvq_WsQxCcERzKUKkG4CX6r7Woah2olOGYNAh_u9XpCmtRl0giAsjMFRvA50kNis22J5NM6fLQYLn5VDh0RFZH5fyQSBJUcIx3yACjZb1dmKa7w3wJQQKS1vXdYF4FR6RRp3Es7xEyOR5m6unFrrbOPEXPslgoLs3ev-4uHwQW_CTpA0AaxRYu4v8udChqg_x-XIRJRW6klFfbv_LjkHI"
               alt="Aetheria Suites" className="w-full h-full object-cover brightness-75" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-light mb-6">Our Suite Collection</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Discover a collection of curated sanctuaries designed for absolute serenity.</p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-12 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {suites.map((suite) => (
            <div key={suite.title} className="group bg-white flex flex-col shadow-sm hover:shadow-xl transition-all duration-700">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img src={suite.image} alt={suite.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute top-6 left-6 bg-white/90 px-4 py-2 text-[10px] font-semibold tracking-widest uppercase">From ${suite.price} / Night</div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl mb-4">{suite.title}</h3>
                <p className="text-charcoal/60 text-sm mb-8 flex-grow">A masterclass in understated elegance, featuring a private terrace and marble rain shower.</p>
                <div className="flex gap-4 mb-8 text-[10px] font-semibold text-charcoal/40 uppercase tracking-widest">
                  <span>{suite.size}</span>
                  <span>{suite.view}</span>
                  <span>KING BED</span>
                </div>
                <a href="/#reservations" className="inline-block text-[11px] font-semibold uppercase tracking-widest text-gold border-b border-gold pb-1 self-start hover:text-bronze hover:border-bronze transition-colors">Book Now</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
