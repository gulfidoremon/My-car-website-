import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="ulasan-section" className="py-16 bg-[#080B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#F5B82E] mb-2">
              <Star className="w-4 h-4 fill-[#F5B82E]" />
              <span>REAL EXPERIENCES</span>
            </div>
            <h2
              id="testimonial-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white"
            >
              WHAT OUR CLIENTS SAY
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Thousands of happy corporate executives and holiday travelers trust India Car Rental every day.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              id="testi-prev-btn"
              onClick={prevSlide}
              className="p-3 rounded-xl bg-[#11161E] hover:bg-[#171D27] text-gray-300 hover:text-white border border-[#252E3D] hover:border-[#F5B82E]/50 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              id="testi-next-btn"
              onClick={nextSlide}
              className="p-3 rounded-xl bg-[#11161E] hover:bg-[#171D27] text-gray-300 hover:text-white border border-[#252E3D] hover:border-[#F5B82E]/50 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((review, idx) => {
            return (
              <div
                key={review.id}
                id={`testi-card-${review.id}`}
                className={`bg-[#11161E] border border-[#252E3D] hover:border-[#F5B82E]/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between space-y-4 hover:-translate-y-1 shadow-lg ${
                  idx === currentIndex ? 'ring-1 ring-[#F5B82E]/40' : ''
                }`}
              >
                <div className="space-y-3">
                  {/* Star Rating & Quote Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-[#F5B82E]">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-[#F5B82E]" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-[#252E3D]" />
                  </div>

                  {/* Comment */}
                  <p className="text-gray-300 text-sm leading-relaxed italic">
                    "{review.comment}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-[#1E2633] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-11 h-11 rounded-full object-cover border border-[#F5B82E]/40"
                    />
                    <div>
                      <h4 className="font-heading font-bold text-sm text-white">
                        {review.name}
                      </h4>
                      <p className="text-xs text-gray-400">{review.city}, India</p>
                    </div>
                  </div>

                  {review.verified && (
                    <div className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-900/50 px-2 py-0.5 rounded-full">
                      <CheckCircle className="w-3 h-3" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
