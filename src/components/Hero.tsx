import React, { useState } from 'react';
import { Sparkles, ArrowRight, Flame, Eye } from 'lucide-react';
import { BookingWidget } from './BookingWidget';
import { VEHICLES } from '../data/mockData';
import { formatRupiah } from '../utils/formatters';
import { Vehicle } from '../types';

interface HeroProps {
  onSearch: (params: { location: string; pickupDate: string; returnDate: string; rentalType: 'self' | 'driver' }) => void;
  onExploreFleet: () => void;
  onBookVehicle?: (vehicle: Vehicle) => void;
  onSelectVehicle?: (vehicle: Vehicle) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSearch,
  onExploreFleet,
  onBookVehicle,
  onSelectVehicle
}) => {
  // Spotlight showcase vehicles: A, J, and L collections
  const [activeCarId, setActiveCarId] = useState<string>('lamborghini-huracan');

  const spotlightCars = [
    { id: 'aston-martin-db11', letter: 'A', label: 'Aston Martin DB11' },
    { id: 'jaguar-f-type', letter: 'J', label: 'Jaguar F-Type' },
    { id: 'lamborghini-huracan', letter: 'L', label: 'Lamborghini V10' },
  ];

  const currentVehicle =
    VEHICLES.find((v) => v.id === activeCarId) ||
    VEHICLES.find((v) => v.id === 'lamborghini-huracan') ||
    VEHICLES[0];

  return (
    <section id="hero-section" className="relative pt-6 sm:pt-10 pb-16 overflow-hidden bg-[#080B10]">
      {/* SUBTLE CLEAN BACKGROUND ACCENTS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-[#F5B82E]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
        {/* TWO-COLUMN MINIMAL & CLEAN SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT: MINIMAL EDITORIAL TYPOGRAPHY & ACTIONS */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Minimal Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#11161E] border border-[#252E3D] text-[#F5B82E] text-[11px] font-heading font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>A TO Z LUXURY FLEET DIRECTORY</span>
            </div>

            {/* Clean Headline */}
            <h1
              id="hero-main-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-white leading-[1.08]"
            >
              DRIVE THE <br />
              <span className="text-[#F5B82E]">EXTRAORDINARY.</span>
            </h1>

            {/* Minimal Subtitle */}
            <p
              id="hero-subtitle"
              className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl font-normal"
            >
              Explore an authentic A-to-Z collection spanning iconic supercars, executive limousines, and rugged 4x4 SUVs.
              White-glove delivery to airports, five-star hotels, and residences across India.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                id="hero-explore-collection-btn"
                onClick={onExploreFleet}
                className="px-6 py-3.5 rounded-xl bg-[#F5B82E] text-[#080B10] font-heading font-black text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-[#F5B82E]/15"
              >
                <span>Explore A–Z Collection</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {currentVehicle && onBookVehicle && (
                <button
                  type="button"
                  id="hero-reserve-vehicle-btn"
                  onClick={() => onBookVehicle(currentVehicle)}
                  className="px-6 py-3.5 rounded-xl bg-[#11161E] hover:bg-[#171D27] text-white border border-[#252E3D] hover:border-[#F5B82E]/50 font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <Flame className="w-4 h-4 text-[#F5B82E]" />
                  <span>Reserve {currentVehicle.name.split(' ')[0]}</span>
                </button>
              )}
            </div>

            {/* Clean Minimal Guarantees */}
            <div className="pt-4 border-t border-[#171D27] grid grid-cols-3 gap-4 text-xs text-gray-400">
              <div className="space-y-1">
                <span className="text-white font-bold block text-sm">100%</span>
                <span className="text-[11px] leading-tight block">Insured &amp; FASTag</span>
              </div>
              <div className="space-y-1">
                <span className="text-white font-bold block text-sm">Zero</span>
                <span className="text-[11px] leading-tight block">Hidden Charges</span>
              </div>
              <div className="space-y-1">
                <span className="text-white font-bold block text-sm">24/7</span>
                <span className="text-[11px] leading-tight block">On-Road Support</span>
              </div>
            </div>
          </div>

          {/* RIGHT: FEATURED SPOTLIGHT CARD (WITH A, J, L QUICK SWITCHER) */}
          <div className="lg:col-span-6 space-y-3">
            {/* Quick Switcher for A, J, L Collections */}
            <div className="flex items-center justify-between px-1">
              <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-gray-400">
                Featured Flagships:
              </span>
              <div className="flex items-center gap-1.5">
                {spotlightCars.map((item) => {
                  const isActive = activeCarId === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveCarId(item.id)}
                      className={`px-3 py-1 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-[#F5B82E] text-[#080B10] shadow-md shadow-[#F5B82E]/20'
                          : 'bg-[#11161E] text-gray-300 hover:text-white border border-[#252E3D]'
                      }`}
                    >
                      <span className="w-4 h-4 rounded-full bg-black/40 flex items-center justify-center text-[10px]">
                        {item.letter}
                      </span>
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              id="hero-spotlight-card"
              className="relative rounded-3xl overflow-hidden bg-[#11161E] border border-[#252E3D] hover:border-[#F5B82E]/60 transition-all duration-500 shadow-2xl group"
            >
              {/* Image Container with high quality photorealistic image */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-black">
                <img
                  key={currentVehicle.id}
                  src={currentVehicle.images[0]}
                  alt={currentVehicle.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11161E] via-transparent to-transparent opacity-80" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#F5B82E] text-[#080B10] text-[10px] font-heading font-black tracking-widest uppercase shadow-md flex items-center gap-1">
                    <Flame className="w-3 h-3 fill-current" />
                    <span>{currentVehicle.badge || 'FLAGSHIP'}</span>
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-gray-300 text-[10px] font-mono">
                    LETTER "{currentVehicle.letter || currentVehicle.brand.charAt(0)}"
                  </span>
                </div>

                {/* Quick Inspect Button on Hover */}
                {onSelectVehicle && (
                  <button
                    type="button"
                    onClick={() => onSelectVehicle(currentVehicle)}
                    className="absolute top-4 right-4 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-xs text-white hover:text-[#F5B82E] hover:border-[#F5B82E]/50 transition-colors flex items-center gap-1.5"
                    title="View Full Specifications"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-bold">Specs</span>
                  </button>
                )}
              </div>

              {/* Bottom Spotlight Info */}
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#F5B82E] tracking-widest block">
                      COLLECTION {currentVehicle.letter} SPOTLIGHT
                    </span>
                    <h3 className="font-heading font-black text-xl sm:text-2xl text-white">
                      {currentVehicle.name}
                    </h3>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="text-[10px] text-gray-400 uppercase font-semibold">Self-Drive / Chauffeur</div>
                    <div className="font-heading font-black text-xl text-[#F5B82E]">
                      {formatRupiah(currentVehicle.pricePerDay)} <span className="text-xs text-gray-400 font-normal">/ day</span>
                    </div>
                  </div>
                </div>

                {/* Key Supercar Specs Pill Row */}
                <div className="grid grid-cols-3 gap-2 text-center py-2 px-3 rounded-2xl bg-[#080B10] border border-[#1E2633]">
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase block font-semibold">Engine / Power</span>
                    <span className="text-xs font-bold text-white truncate block">{currentVehicle.horsePower || currentVehicle.fuel}</span>
                  </div>
                  <div className="border-x border-[#1E2633]">
                    <span className="text-[10px] text-gray-500 uppercase block font-semibold">Acceleration</span>
                    <span className="text-xs font-bold text-[#F5B82E]">{currentVehicle.acceleration || 'Fast'}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase block font-semibold">Top Speed</span>
                    <span className="text-xs font-bold text-emerald-400">{currentVehicle.topSpeed || '250+ km/h'}</span>
                  </div>
                </div>

                {/* Direct Action */}
                <div className="flex items-center gap-3 pt-1">
                  {onBookVehicle && (
                    <button
                      type="button"
                      onClick={() => onBookVehicle(currentVehicle)}
                      className="flex-1 py-2.5 rounded-xl bg-[#F5B82E] text-[#080B10] font-heading font-black text-xs uppercase tracking-wider hover:brightness-105 transition-all text-center"
                    >
                      Instant Book {currentVehicle.brand}
                    </button>
                  )}
                  {onSelectVehicle && (
                    <button
                      type="button"
                      onClick={() => onSelectVehicle(currentVehicle)}
                      className="px-4 py-2.5 rounded-xl bg-[#171D27] hover:bg-[#1E2633] text-gray-300 hover:text-white border border-[#252E3D] text-xs font-bold transition-colors"
                    >
                      Inspect
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MINIMAL SEARCH & BOOKING FINDER */}
        <div className="w-full pt-4">
          <BookingWidget onSearch={onSearch} />
        </div>
      </div>
    </section>
  );
};
