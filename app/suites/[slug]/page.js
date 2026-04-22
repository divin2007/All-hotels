import { rooms } from "@/data/rooms";
import { notFound } from "next/navigation";
import Link from "next/link";
import BookingEngine from "@/components/BookingEngine";
import RoomReviews from "@/components/RoomReviews";

export async function generateMetadata({ params }) {
  const room = rooms.find((r) => r.slug === params.slug);
  if (!room) return {};

  return {
    title: room.title,
    description: room.description,
  };
}

export default function RoomPage({ params }) {
  const room = rooms.find((r) => r.slug === params.slug);

  if (!room) {
    notFound();
  }

  return (
    <div className="pt-24">
      {/* Room Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={room.image}
            alt={room.title}
            className="w-full h-full object-cover brightness-[0.85]"
          />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <span className="block text-[12px] tracking-[0.4em] uppercase mb-6">{room.view}</span>
          <h1 className="text-5xl md:text-8xl font-light mb-10 leading-tight italic">{room.title}</h1>
          <div className="flex justify-center gap-12 text-[10px] font-semibold uppercase tracking-widest border-t border-b border-white/30 py-6">
            <span>{room.size}</span>
            <span>King Bed</span>
            <span>From ${room.price} / Night</span>
          </div>
        </div>
      </section>

      {/* Overview & Whereabouts */}
      <section className="py-24 container mx-auto px-12 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-7">
            <span className="text-gold text-[12px] font-semibold tracking-[0.3em] uppercase block mb-8">The Sanctuary</span>
            <h2 className="text-4xl mb-8 font-serif">Overview</h2>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-8 italic">
              {room.description}
            </p>
            <p className="text-charcoal/60 leading-relaxed mb-12">
              {room.longDescription}
            </p>

            <div className="p-10 bg-navy/5 border-l-2 border-gold">
              <h4 className="text-[10px] font-semibold uppercase tracking-widest text-gold mb-4">Detailed Whereabouts</h4>
              <p className="text-charcoal/70 italic text-sm">{room.whereabouts}</p>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="sticky top-32">
               <h3 className="text-2xl mb-8 font-serif">Amenities</h3>
               <ul className="grid grid-cols-1 gap-4">
                 {room.amenities.map((amenity, index) => (
                   <li key={index} className="flex items-center gap-4 text-charcoal/60 text-sm border-b border-charcoal/5 pb-4">
                     <span className="material-symbols-outlined text-gold !text-sm">check_circle</span>
                     {amenity}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reservations Integration */}
      <section className="py-24 bg-ivory border-t border-navy/5">
        <div className="container mx-auto px-12 max-w-[1440px]">
          <div className="mb-16 text-center">
            <h2 className="text-4xl mb-4 font-serif">Reserve This Suite</h2>
            <p className="text-charcoal/60 italic">Experience the ultimate in Mediterranean luxury.</p>
          </div>
          <BookingEngine />
        </div>
      </section>

      {/* Reviews Section */}
      <RoomReviews initialReviews={room.reviews} />

      {/* Back Navigation */}
      <div className="py-12 text-center border-t border-charcoal/5">
        <Link href="/suites" className="group inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-widest text-charcoal hover:text-gold transition-all">
          <span className="material-symbols-outlined !text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to Collection
        </Link>
      </div>
    </div>
  );
}

// Generate static params for all rooms
export async function generateStaticParams() {
  return rooms.map((room) => ({
    slug: room.slug,
  }));
}
