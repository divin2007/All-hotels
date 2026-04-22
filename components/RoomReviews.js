"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { clsx } from "clsx";

export default function RoomReviews({ initialReviews }) {
  const [reviews, setReviews] = useState(initialReviews);
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment || !name) return;

    const newReview = {
      id: Date.now(),
      user: name,
      rating,
      comment,
      date: new Date().toISOString().split('T')[0]
    };

    setReviews([newReview, ...reviews]);
    setComment("");
    setName("");
    setRating(5);
  };

  return (
    <section className="py-24 bg-navy/5">
      <div className="container mx-auto px-12 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Review List */}
          <div>
            <span className="text-gold text-[12px] font-semibold tracking-[0.3em] uppercase block mb-8">Guest Experiences</span>
            <h2 className="text-4xl mb-12">Reviews</h2>

            <div className="space-y-12">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-charcoal/10 pb-8 last:border-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={14}
                          className={clsx(
                            star <= review.rating ? "text-gold fill-gold" : "text-charcoal/20"
                          )}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-charcoal/40">{review.date}</span>
                  </div>
                  <p className="text-charcoal/80 mb-4 italic">"{review.comment}"</p>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-charcoal/60">— {review.user}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Review Form */}
          <div className="bg-white p-12 shadow-xl">
            <h3 className="text-2xl mb-8 font-serif">Share Your Experience</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-widest text-charcoal/40 mb-2">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHover(star)}
                      onMouseLeave={() => setHover(0)}
                      className="focus:outline-none"
                    >
                      <Star
                        size={24}
                        className={clsx(
                          (hover || rating) >= star ? "text-gold fill-gold" : "text-charcoal/20",
                          "transition-colors"
                        )}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-widest text-charcoal/40 mb-2">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-b border-charcoal/10 py-3 focus:border-gold outline-none transition-colors text-sm"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-widest text-charcoal/40 mb-2">Comment</label>
                <textarea
                  rows="4"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full border border-charcoal/10 p-4 focus:border-gold outline-none transition-colors text-sm resize-none"
                  placeholder="Tell us about your stay..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-charcoal text-white py-4 text-[11px] font-semibold uppercase tracking-widest hover:bg-navy transition-all"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
