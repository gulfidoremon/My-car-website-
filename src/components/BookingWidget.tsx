import React, { useState } from 'react';
import { MapPin, Calendar, Search, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { LOCATIONS } from '../data/mockData';
import { calculateDaysBetween, getTodayDateString, getTomorrowDateString } from '../utils/formatters';

interface BookingWidgetProps {
  onSearch: (params: { location: string; pickupDate: string; returnDate: string; rentalType: 'self' | 'driver' }) => void;
}

export const BookingWidget: React.FC<BookingWidgetProps> = ({ onSearch }) => {
  const today = getTodayDateString();
  const defaultReturn = getTomorrowDateString(2);

  const [rentalType, setRentalType] = useState<'self' | 'driver'>('self');
  const [location, setLocation] = useState<string>(LOCATIONS[0].name);
  const [pickupDate, setPickupDate] = useState<string>(today);
  const [returnDate, setReturnDate] = useState<string>(defaultReturn);

  const durationDays = calculateDaysBetween(pickupDate, returnDate);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      location,
      pickupDate,
      returnDate,
      rentalType
    });
  };

  return (
    <div
      id="booking-widget-panel"
      className="w-full bg-[#11161E]/95 backdrop-blur-xl border-2 border-[#252E3D] rounded-3xl p-5 sm:p-7 shadow-2xl transition-all duration-300 hover:border-[#F5B82E]/40"
    >
      {/* SERVICE TYPE TABS */}
      <div className="flex items-center gap-2 mb-6 border-b border-[#252E3D] pb-4">
        <button
          type="button"
          onClick={() => setRentalType('self')}
          className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-all ${
            rentalType === 'self'
              ? 'bg-[#F5B82E] text-[#080B10] shadow-md shadow-[#F5B82E]/20'
              : 'bg-[#171D27] text-gray-400 hover:text-white'
          }`}
        >
          Self-Drive (Freedom)
        </button>

        <button
          type="button"
          onClick={() => setRentalType('driver')}
          className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-all ${
            rentalType === 'driver'
              ? 'bg-[#F5B82E] text-[#080B10] shadow-md shadow-[#F5B82E]/20'
              : 'bg-[#171D27] text-gray-400 hover:text-white'
          }`}
        >
          With Chauffeur (+₹800/day)
        </button>
      </div>

      {/* FORM INPUTS */}
      <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* LOCATION FIELD */}
          <div className="space-y-2">
            <label className="block text-xs font-heading font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#F5B82E]" />
              <span>Pickup Hub / Airport</span>
            </label>
            <div className="relative">
              <select
                id="pickup-location-input"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-[#080B10] border border-[#252E3D] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#F5B82E] focus:ring-1 focus:ring-[#F5B82E] transition-all appearance-none cursor-pointer"
              >
                {LOCATIONS.map((loc) => (
                  <option key={loc.id} value={loc.name} className="bg-[#11161E] text-white">
                    {loc.name} ({loc.city})
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">
                ▼
              </div>
            </div>
          </div>

          {/* PICKUP DATE FIELD */}
          <div className="space-y-2">
            <label className="block text-xs font-heading font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#F5B82E]" />
              <span>Pickup Date</span>
            </label>
            <input
              id="pickup-date-input"
              type="date"
              min={today}
              value={pickupDate}
              onChange={(e) => {
                setPickupDate(e.target.value);
                if (e.target.value > returnDate) {
                  setReturnDate(e.target.value);
                }
              }}
              className="w-full bg-[#080B10] border border-[#252E3D] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F5B82E] focus:ring-1 focus:ring-[#F5B82E] transition-all scheme-dark cursor-pointer"
              required
            />
          </div>

          {/* RETURN DATE FIELD */}
          <div className="space-y-2">
            <label className="block text-xs font-heading font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#F5B82E]" />
              <span>Return Date</span>
            </label>
            <input
              id="return-date-input"
              type="date"
              min={pickupDate || today}
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full bg-[#080B10] border border-[#252E3D] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F5B82E] focus:ring-1 focus:ring-[#F5B82E] transition-all scheme-dark cursor-pointer"
              required
            />
          </div>
        </div>

        {/* SUMMARY BADGE & SUBMIT BUTTON */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs text-gray-300">
            <div className="px-3 py-1.5 rounded-lg bg-[#171D27] border border-[#252E3D] font-mono">
              Duration: <strong className="text-[#F5B82E] font-bold">{durationDays} Day{durationDays > 1 ? 's' : ''}</strong>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Instant Confirmation</span>
            </div>
          </div>

          <button
            type="submit"
            id="search-fleet-submit-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#F5B82E] to-[#E5A81E] text-[#080B10] font-heading font-black text-sm uppercase tracking-wider shadow-xl shadow-[#F5B82E]/30 hover:shadow-2xl hover:shadow-[#F5B82E]/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4 stroke-[3]" />
            <span>FIND AVAILABLE CARS</span>
          </button>
        </div>

        {/* VALUE PROPOSITION BADGES */}
        <div className="pt-3 border-t border-[#1E2633] grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] text-gray-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F5B82E]" />
            Zero hidden charges
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#F5B82E]" />
            24/7 Roadside breakdown assist
          </span>
          <span className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Doorstep hotel & airport delivery
          </span>
        </div>
      </form>
    </div>
  );
};
