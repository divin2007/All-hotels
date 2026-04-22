import Link from "next/link";

export default function SuiteCard({ suite }) {
  const { slug, title, price, size, view, image, description } = suite;

  return (
    <div className="group bg-white flex flex-col shadow-sm hover:shadow-xl transition-all duration-700 h-full">
      <div className="aspect-[4/5] overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
        />
        <div className="absolute top-6 left-6 bg-white/90 px-4 py-2 text-[10px] font-semibold tracking-widest uppercase">
          From ${price} / Night
        </div>
      </div>
      <div className="p-10 flex flex-col flex-grow">
        <h3 className="text-2xl mb-4 font-serif">{title}</h3>
        <p className="text-charcoal/60 text-sm leading-relaxed mb-8 line-clamp-3 flex-grow">
          {description}
        </p>
        <div className="flex gap-4 mb-8 text-[10px] font-semibold text-charcoal/40 uppercase tracking-widest pt-6 border-t border-navy/5">
          <span>{size}</span>
          <span>{view}</span>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <Link
            href={`/suites/${slug}`}
            className="inline-block text-[11px] font-semibold uppercase tracking-widest text-gold border-b border-gold pb-1 hover:text-bronze hover:border-bronze transition-colors"
          >
            View Details
          </Link>
          <Link
            href="/#reservations"
            className="text-[10px] font-semibold uppercase tracking-widest text-charcoal/40 hover:text-charcoal transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
