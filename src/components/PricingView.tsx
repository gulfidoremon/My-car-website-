import React, { useState, useMemo } from 'react';
import { Check, Info, Sparkles, ArrowRight, Shield, ShieldCheck, ArrowUpNarrowWide, ArrowDownWideNarrow } from 'lucide-react';
import { VEHICLES } from '../data/mockData';
import { formatRupiah } from '../utils/formatters';
import { Vehicle } from '../types';

interface PricingViewProps {
  onBookVehicle: (vehicle: Vehicle) => void;
}

export const PricingView: React.FC<PricingViewProps> = ({ onBookVehicle }) => {
  const [packageType, setPackageType] = useState<'self_drive' | 'with_chauffeur'>('self_drive');
  const [priceSort, setPriceSort] = useState<'asc' | 'desc'>('desc');

  // Chauffeur fee in India: +₹800/day
  const chauffeurDailyFee = 800;

  const sortedVehicles = useMemo(() => {
    return [...VEHICLES].sort((a, b) => {
      return priceSort === 'asc'
        ? a.pricePerDay - b.pricePerDay
        : b.pricePerDay - a.pricePerDay;
    });
  }, [priceSort]);

  return (
    <div id="pricing-page-view" className="py-12 bg-[#080B10] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5B82E]/10 border border-[#F5B82E]/30 text-[#F5B82E] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT RATES • ZERO HIDDEN CHARGES</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-black text-white">
            CAR RENTAL PRICING PLANS
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Economical daily, weekly, and corporate monthly rental plans with flexible options for self-drive freedom or verified professional chauffeurs across India.
          </p>

          {/* PACKAGE & SORT CONTROLS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="inline-flex p-1.5 rounded-2xl bg-[#11161E] border border-[#252E3D]">
              <button
                onClick={() => setPackageType('self_drive')}
                className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-heading font-bold transition-all ${
                  packageType === 'self_drive'
                    ? 'bg-[#F5B82E] text-[#080B10] shadow-md shadow-[#F5B82E]/20'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Self-Drive (Freedom)
              </button>
              <button
                onClick={() => setPackageType('with_chauffeur')}
                className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-heading font-bold transition-all ${
                  packageType === 'with_chauffeur'
                    ? 'bg-[#F5B82E] text-[#080B10] shadow-md shadow-[#F5B82E]/20'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                With Chauffeur (+₹800/day)
              </button>
            </div>

            {/* Price sort toggle */}
            <div className="inline-flex p-1.5 rounded-2xl bg-[#11161E] border border-[#252E3D] gap-1">
              <button
                type="button"
                onClick={() => setPriceSort('asc')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-heading font-bold transition-all ${
                  priceSort === 'asc'
                    ? 'bg-[#F5B82E] text-[#080B10] shadow-sm shadow-[#F5B82E]/30 font-black'
                    : 'text-gray-400 hover:text-white'
                }`}
                title="Sort by lowest price first"
              >
                <ArrowUpNarrowWide className="w-3.5 h-3.5" />
                <span>Low to High</span>
              </button>
              <button
                type="button"
                onClick={() => setPriceSort('desc')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-heading font-bold transition-all ${
                  priceSort === 'desc'
                    ? 'bg-[#F5B82E] text-[#080B10] shadow-sm shadow-[#F5B82E]/30 font-black'
                    : 'text-gray-400 hover:text-white'
                }`}
                title="Sort by highest price first"
              >
                <ArrowDownWideNarrow className="w-3.5 h-3.5" />
                <span>High to Low</span>
              </button>
            </div>
          </div>
        </div>

        {/* COMPARISON TABLE */}
        <div className="bg-[#11161E] border border-[#252E3D] rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#252E3D] bg-[#0E131B] text-[11px] font-heading font-bold text-gray-400 uppercase tracking-wider">
                  <th className="py-4 px-6">Vehicle &amp; Category</th>
                  <th className="py-4 px-4 text-center">Car Value</th>
                  <th className="py-4 px-4 text-center">Specifications</th>
                  <th className="py-4 px-4">Daily (24 Hours)</th>
                  <th className="py-4 px-4">Weekly (Save ~10%)</th>
                  <th className="py-4 px-4">Monthly (Corporate)</th>
                  <th className="py-4 px-4 text-center">Status</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E2633] text-sm text-gray-300">
                {sortedVehicles.map((car) => {
                  const daily =
                    packageType === 'with_chauffeur'
                      ? car.pricePerDay + chauffeurDailyFee
                      : car.pricePerDay;
                  const weekly =
                    packageType === 'with_chauffeur'
                      ? car.weeklyPrice + chauffeurDailyFee * 7
                      : car.weeklyPrice;
                  const monthly =
                    packageType === 'with_chauffeur'
                      ? car.monthlyPrice + chauffeurDailyFee * 26
                      : car.monthlyPrice;

                  return (
                    <tr
                      key={car.id}
                      className="hover:bg-[#171D27]/60 transition-colors group"
                    >
                      {/* Name & Photo */}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <img
                            src={car.images[0]}
                            alt={car.name}
                            className="w-16 h-12 rounded-xl object-cover border border-[#252E3D] shrink-0"
                          />
                          <div>
                            <div className="font-heading font-bold text-white group-hover:text-[#F5B82E] transition-colors">
                              {car.name}
                            </div>
                            <div className="text-[11px] text-gray-400 uppercase">
                              {car.brand} • {car.category.toUpperCase()}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Car Asset Value (Crore/Lakh) */}
                      <td className="py-4 px-4 text-center text-xs">
                        {car.assetValue ? (
                          <span className="inline-block px-2.5 py-1 rounded-lg bg-amber-400/10 text-amber-300 font-bold border border-amber-400/20 whitespace-nowrap">
                            {car.assetValue}
                          </span>
                        ) : (
                          <span className="text-gray-500">—</span>
                        )}
                      </td>

                      {/* Specs */}
                      <td className="py-4 px-4 text-center text-xs">
                        <div className="font-semibold text-gray-200">
                          {car.transmission} • {car.seats} Seats
                        </div>
                        <div className="text-[11px] text-gray-400">{car.fuel} • High Cooling AC</div>
                      </td>

                      {/* Daily */}
                      <td className="py-4 px-4">
                        <div className="font-heading font-extrabold text-[#F5B82E] text-base">
                          {formatRupiah(daily)}
                        </div>
                        <div className="text-[10px] text-gray-400">per 24 hours</div>
                      </td>

                      {/* Weekly */}
                      <td className="py-4 px-4">
                        <div className="font-semibold text-white">
                          {formatRupiah(weekly)}
                        </div>
                        <div className="text-[10px] text-emerald-400 font-medium">
                          Discounted Package
                        </div>
                      </td>

                      {/* Monthly */}
                      <td className="py-4 px-4">
                        <div className="font-semibold text-white">
                          {formatRupiah(monthly)}
                        </div>
                        <div className="text-[10px] text-gray-400">Periodic service covered</div>
                      </td>

                      {/* Status */}
                      <td className="py-4 px-4 text-center">
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-900/50 px-2.5 py-1 rounded-full">
                          <Check className="w-3 h-3" />
                          Ready to Go
                        </span>
                      </td>

                      {/* Action */}
                      <td className="py-4 px-6 text-right">
                        <button
                          id={`table-book-btn-${car.id}`}
                          onClick={() => onBookVehicle(car)}
                          className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#F5B82E] to-[#E5A81E] text-[#080B10] font-heading font-extrabold text-xs tracking-wide hover:brightness-105 active:scale-95 transition-all shadow-md shadow-[#F5B82E]/20"
                        >
                          Book Now
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* RENTAL PERKS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#11161E] border border-[#252E3D] p-6 rounded-2xl space-y-2">
            <ShieldCheck className="w-8 h-8 text-[#F5B82E]" />
            <h3 className="font-heading font-bold text-white text-base">
              Comprehensive Insurance Protection
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Every rental includes primary third-party & bumper-to-bumper insurance. Zero depreciation packages available for total ease.
            </p>
          </div>

          <div className="bg-[#11161E] border border-[#252E3D] p-6 rounded-2xl space-y-2">
            <Sparkles className="w-8 h-8 text-[#F5B82E]" />
            <h3 className="font-heading font-bold text-white text-base">
              100% Sanitized &amp; Maintained Fleet
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              All vehicles are serviced exclusively at authorized dealerships, with pristine non-smoking cabins, fresh air conditioning, and top-grade tires.
            </p>
          </div>

          <div className="bg-[#11161E] border border-[#252E3D] p-6 rounded-2xl space-y-2">
            <Shield className="w-8 h-8 text-[#F5B82E]" />
            <h3 className="font-heading font-bold text-white text-base">
              Replacement Guarantee
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              In the unlikely event of any mechanical issue during your trip, our 24/7 on-road team will provide an equivalent replacement car immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
