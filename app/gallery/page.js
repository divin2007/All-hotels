export const metadata = {
  title: "Gallery",
  description: "A curation of moments and architectural nuances that define the Aetheria experience.",
};

export default function GalleryPage() {
  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCfBGTuQsn8UUAZakDyYDapDJ4U6N06jYnzxKNJiErE4jlC1InCULHxUhWvwd_DJ48qcf9WhlUFbRSGqViw9X-TXV13Sz_qASPb9FwaTFesu5cRB4wzT-hwHyQJvVY0CKX1BoRZUsicCJEzg8oGfwX9ftAqwyhAxEu3ILRKktRo_nt4DrJ6HkS8Q9Em6673p2fZwj5oEYSxEICpRqcWKm1bLSMxLnBZwmjH4qnKW4nniBdmwra_-tH82OS3eCX_s7sINHdK9q2UzBE",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBmGPhmAlapY1GHEtbrCYJwzHdeZBLUGP7jl6e7_HlDCVAfZKcpAR8qblOp7w-KbVoxu0zCtSEJHy4d0veJ7s6p1ZypdRxBGXSCR1C_VvhpnDC3QCqLsTg4Wx2SrzPzcp-wD0PVL1TQZc_ZGuSfyxzuNRey_oSPa2VyOjTrIx3bGzJZYo-v0JvlavRK5clWc8cJjFCudNY4atUPYG1GEKdh2t3uBOMOzBIdmML_c3pY4A0wVw-HyNaR9ZrMr1Yv1LrE8AeP-rB_YLo",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDmv7YJExZoKy_yE-hsOC9ItDiSVFTOjv3NZfLbBCOyJff1p1a-kHGhgI8szsdkjCDGVej7DWKm1CCdB1EhlMmS5grG1isjWLODG53CuAbyYdeTqq1PRWpX2kpZl9OB6pIfBRCrmm_tWWFlvzdC1o-cfdujLncOGBha-51Y3UulQ6ZXwJSQT9WPjlN9tfZuBEBaQkvfSPclfjYCEeNXndr0_ltGiWo9-fFxx2dhzwIBM_UyTlonyYd-VAb0QvsBH4X9uQUgbj9CnE8",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuApx-aJuy4Vfd_4_xVfi2BMxCBxOXR1aS4foibVp9o2VHEfZtZcICjpQnU0war-FF3UbsauF5K9qJSwR2LY1FltkuPVxywR0AAQDHPz25i_2uTWXTN8b9niOi_-gKdJ_YogsXI32MJXEGQI_3O2nEmG3YY56lIR9bBJGvPdeLSbw2ABlg-J4QzV05NuQII5mVtyRUzOAId4AOwbDUzl8UwPGgS6dg2nBZ-94w-BHWF_UnSvl9PgYvK-XuZ26SMrDg041CnibRX_PVc",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCmvyL1PXgEAZ72DDLFOX-7h74DMgmmkNmiE5NcDvf_8RuuO11qX-9ZuYflT9MZds3L_4l29Atk6ywouUTypE1DwVB45xkOspzOtJ9ET9cChN_m9QFwG80PF2FeUh663LIIJUMJh5V_HpCcjduFiwFFMH7OhgP_c32eW8tWBKibNQ9J8Ck9W1hxs6iEviYsRC12y5qUm8U9cT0xmW-X7HlN_Zc1XcUo1DLREeyJ_ciSSX8iEqRfcPbbTLBuGXmu89c6yeiN1AsIDGQ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCF7x47C-VCLKvo05H8NLlx-n-K-tOeLV12B4dIhWEOGiv081eCs_gezi2uFuDE1qK9cFzJlccEQI1gsY_2Lz0J_6qORkq0EX9LA-ZEGI32qVzCtetI9k_QbhCRy_XC9QLn8RMVBwNWzIbBRnRcHL14IrPDrSuvl73z3LJjZ44vgWH4LNFyrN0qKWxhEoa3bGvP5Mi1SGHeN54-YOuWd2U1kF7t8Co8H0krOCJOrJDBhYVrJzM4J46yjERH6iBKu0qdq2e1sljDKPk"
  ];

  return (
    <div className="pt-24">
      <section className="pt-24 pb-12 text-center container mx-auto px-12 max-w-[1440px]">
        <h1 className="text-5xl md:text-8xl font-light mb-8">Visual <br /><span className="italic">Storytelling</span></h1>
        <p className="text-charcoal/60 text-lg max-w-2xl mx-auto italic leading-relaxed">
          A curation of moments and architectural nuances that define the Aetheria experience.
          Where light meets form in perfect stillness.
        </p>
      </section>

      <div className="flex flex-wrap justify-center gap-12 mb-24 text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/40">
        <button className="text-gold border-b border-gold pb-1">All</button>
        <button className="hover:text-gold transition-colors pb-1">Suites</button>
        <button className="hover:text-gold transition-colors pb-1">Dining</button>
        <button className="hover:text-gold transition-colors pb-1">Wellness</button>
        <button className="hover:text-gold transition-colors pb-1">Architecture</button>
      </div>

      <main className="container mx-auto px-12 max-w-[1440px] pb-24">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {images.map((img, idx) => (
            <div key={idx} className="break-inside-avoid mb-8 group cursor-pointer overflow-hidden relative">
              <img src={img} alt={`Gallery ${idx}`} className="w-full h-auto grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-1000 shadow-lg" />
            </div>
          ))}
        </div>
        <div className="mt-24 text-center">
          <button className="text-[11px] font-semibold uppercase tracking-widest border border-charcoal/20 px-12 py-5 hover:bg-charcoal hover:text-white transition-all duration-500">Discover More</button>
        </div>
      </main>
    </div>
  );
}
