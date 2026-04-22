import { rooms } from "@/data/rooms";
import SuiteCard from "@/components/SuiteCard";

export const metadata = {
  title: "Suites",
  description: "Discover a collection of curated sanctuaries designed for absolute serenity.",
};

export default function SuitesPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
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

      {/* Suite Collection Grid */}
      <section className="py-24 container mx-auto px-12 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {rooms.map((room) => (
            <SuiteCard key={room.slug} suite={room} />
          ))}
        </div>
      </section>
    </div>
  );
}
