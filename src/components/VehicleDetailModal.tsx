import React, { useState } from 'react';
import {
  X,
  Star,
  Users,
  Fuel,
  Gauge,
  ShieldCheck,
  Calendar,
  Check,
  ArrowRight,
  Sparkles,
  Award,
  ChevronRight
} from 'lucide-react';
import { Vehicle } from '../types';
import { formatRupiah } from '../utils/formatters';

interface VehicleDetailModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
  onBookNow: (vehicle: Vehicle, durationDays?: number) => void;
  promoDiscountPercent?: number;
}

export const VehicleDetailModal: React.FC<VehicleDetailModalProps> = ({
  vehicle,
  onClose,
  onBookNow,
  promoDiscountPercent = 0
}) => {
  if (!vehicle) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [calculatorDays, setCalculatorDays] = useState(3);
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'calculator' | 'terms'>('overview');

  const effectiveDailyRate =
    promoDiscountPercent > 0
      ? vehicle.pricePerDay * (1 - promoDiscountPercent / 100)
      : vehicle.pricePerDay;

  const totalCalculated = effectiveDailyRate * calculatorDays;

  return (
    <div
      id="vehicle-detail-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200"
    >
      <div
        id="vehicle-detail-modal-container"
        className="relative bg-[#11161E] border border-[#252E3D] rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl my-6 flex flex-col max-h-[92vh]"
      >
        {/* MODAL HEADER */}
        <div className="bg-[#0E131B] border-b border-[#252E3D] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#F5B82E] text-[#080B10] text-[10px] font-heading font-black tracking-wider uppercase">
              {vehicle.badge || 'VERIFIED CAR'}
            </span>
            <span className="text-xs text-gray-400 font-medium">
              Model Year {vehicle.year}
            </span>
          </div>

          <button
            id="close-vehicle-detail-modal"
            onClick={onClose}
            className="p-2 rounded-xl bg-[#171D27] hover:bg-[#1E2633] text-gray-400 hover:text-white border border-[#252E3D] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* MODAL CONTENT */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1">
          {/* TOP SECTION: PHOTO GALLERY & OVERVIEW HERO */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Gallery (Left Col) */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#0E131B] border border-[#252E3D]">
                <img
                  src={vehicle.images[activeImageIndex] || vehicle.images[0]}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-[#080B10]/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-[11px] text-gray-300">
                  {vehicle.condition}
                </div>
              </div>

              {/* Thumbnails */}
              {vehicle.images.length > 1 && (
                <div className="flex gap-2">
                  {vehicle.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx
                          ? 'border-[#F5B82E] scale-105'
                          : 'border-[#252E3D] opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Specs & Rate (Right Col) */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F5B82E]">
                  {vehicle.brand} • {vehicle.category.toUpperCase()}
                </span>
                <h1 className="font-heading font-black text-2xl sm:text-3xl text-white mt-1">
                  {vehicle.name}
                </h1>
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                  <div className="flex items-center gap-1 text-white">
                    <Star className="w-4 h-4 fill-[#F5B82E] text-[#F5B82E]" />
                    <span className="font-bold">{vehicle.rating}</span>
                  </div>
                  <span>•</span>
                  <span>{vehicle.reviewsCount} Verified Customer Ratings</span>
                </div>
              </div>

              {/* Core Specs Grid */}
              <div className="grid grid-cols-2 gap-2.5 p-3 rounded-2xl bg-[#0E131B] border border-[#252E3D] text-xs">
                <div className="flex items-center gap-2 text-gray-300">
                  <Gauge className="w-4 h-4 text-[#F5B82E]" />
                  <span>Trans: <strong>{vehicle.transmission}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Users className="w-4 h-4 text-[#F5B82E]" />
                  <span>Capacity: <strong>{vehicle.seats} Seats</strong></span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Fuel className="w-4 h-4 text-[#F5B82E]" />
                  <span>Fuel: <strong>{vehicle.fuel}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <ShieldCheck className="w-4 h-4 text-[#F5B82E]" />
                  <span>Luggage: <strong>{vehicle.luggage} Bags</strong></span>
                </div>
              </div>

              {/* Price Display */}
              <div className="bg-[#171D27] p-4 rounded-2xl border border-[#252E3D] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                    Standard Daily Rate (24 Hours)
                  </span>
                  {vehicle.assetValue && (
                    <span className="text-xs font-bold text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                      Vehicle Value: {vehicle.assetValue}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-heading font-black text-3xl text-[#F5B82E]">
                    {formatRupiah(effectiveDailyRate)}
                  </span>
                  <span className="text-xs text-gray-400">/ day</span>
                </div>
                {promoDiscountPercent > 0 && (
                  <div className="text-[11px] text-emerald-400 font-semibold">
                    Festive 30% discount applied sitewide!
                  </div>
                )}
              </div>

              <button
                type="button"
                id="modal-instant-book-btn"
                onClick={() => onBookNow(vehicle)}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#F5B82E] to-[#E5A81E] text-[#080B10] font-heading font-black text-sm uppercase tracking-wider shadow-xl shadow-[#F5B82E]/30 hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <span>PROCEED TO BOOKING</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          </div>

          {/* TABS NAVIGATION */}
          <div className="border-b border-[#252E3D] flex gap-2">
            {[
              { id: 'overview', label: 'Overview & Description' },
              { id: 'features', label: 'Key Features & Safety' },
              { id: 'calculator', label: 'Cost Estimator' },
              { id: 'terms', label: 'Rental Terms' }
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id as typeof activeTab)}
                className={`pb-3 px-3 text-xs sm:text-sm font-heading font-bold transition-all relative ${
                  activeTab === t.id
                    ? 'text-[#F5B82E]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {t.label}
                {activeTab === t.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F5B82E]" />
                )}
              </button>
            ))}
          </div>

          {/* TAB CONTENTS */}
          <div className="pt-2">
            {activeTab === 'overview' && (
              <div className="space-y-4">
                <p className="text-sm text-gray-300 leading-relaxed font-normal">
                  {vehicle.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#0E131B] border border-[#252E3D] text-xs space-y-1">
                    <span className="text-gray-400 block">Weekly Package Rate (7 Days):</span>
                    <strong className="text-white text-sm">{formatRupiah(vehicle.weeklyPrice)}</strong>
                    <span className="text-[10px] text-emerald-400 block">Save ~10% vs daily rate</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0E131B] border border-[#252E3D] text-xs space-y-1">
                    <span className="text-gray-400 block">Monthly Corporate Rate (30 Days):</span>
                    <strong className="text-white text-sm">{formatRupiah(vehicle.monthlyPrice)}</strong>
                    <span className="text-[10px] text-emerald-400 block">Includes free periodic service</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {vehicle.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#0E131B] border border-[#252E3D] text-xs text-gray-200"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'calculator' && (
              <div className="bg-[#0E131B] border border-[#252E3D] p-5 rounded-2xl space-y-4">
                <h4 className="font-heading font-bold text-sm text-white">
                  Trip Cost Estimator
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-300">
                    <span>Selected Duration:</span>
                    <strong className="text-[#F5B82E]">{calculatorDays} Days</strong>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={30}
                    value={calculatorDays}
                    onChange={(e) => setCalculatorDays(Number(e.target.value))}
                    className="w-full accent-[#F5B82E] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500">
                    <span>1 Day</span>
                    <span>7 Days</span>
                    <span>14 Days</span>
                    <span>30 Days</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#252E3D] flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-400 block">Estimated Rental Total:</span>
                    <div className="font-heading font-black text-2xl text-white">
                      {formatRupiah(totalCalculated)}
                    </div>
                  </div>
                  <button
                    onClick={() => onBookNow(vehicle, calculatorDays)}
                    className="px-5 py-2.5 rounded-xl bg-[#F5B82E] text-[#080B10] font-heading font-bold text-xs uppercase"
                  >
                    Book for {calculatorDays} Days
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'terms' && (
              <div className="space-y-3 text-xs text-gray-300 leading-relaxed">
                <div className="p-3 rounded-xl bg-[#0E131B] border border-[#252E3D]">
                  <strong className="text-white block mb-1">1. Self-Drive Requirements:</strong>
                  Valid original Indian Driving Licence, Aadhaar Card / Passport, and travel confirmation. Minimum driver age is 21 years.
                </div>
                <div className="p-3 rounded-xl bg-[#0E131B] border border-[#252E3D]">
                  <strong className="text-white block mb-1">2. Fuel & FASTag Tolls:</strong>
                  Cars operate on same-to-same fuel policy. Electronic FASTag toll pass-throughs are billed transparently at actual NHAI rates without surcharges.
                </div>
                <div className="p-3 rounded-xl bg-[#0E131B] border border-[#252E3D]">
                  <strong className="text-white block mb-1">3. Zero Deposit Option:</strong>
                  Opt for our full comprehensive coverage to reduce or eliminate security deposits completely.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
