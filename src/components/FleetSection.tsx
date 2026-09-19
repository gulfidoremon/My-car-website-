import React, { useState, useMemo } from 'react';
import {
  Users,
  Fuel,
  Gauge,
  Star,
  Heart,
  ArrowRight,
  Sparkles,
  Search,
  Flame,
  Zap,
  LayoutGrid,
  ListFilter,
  CheckCircle2,
  ArrowDownUp,
  ArrowUpNarrowWide,
  ArrowDownWideNarrow
} from 'lucide-react';
import { Vehicle } from '../types';
import { VEHICLES } from '../data/mockData';
import { formatRupiah } from '../utils/formatters';

interface FleetSectionProps {
  onSelectVehicle: (vehicle: Vehicle) => void;
  onBookNow: (vehicle: Vehicle) => void;
  savedVehicles: string[];
  onToggleSave: (vehicleId: string) => void;
  promoAppliedCode?: string | null;
  promoDiscountPercent?: number;
}

export const FleetSection: React.FC<FleetSectionProps> = ({
  onSelectVehicle,
  onBookNow,
  savedVehicles,
  onToggleSave,
  promoAppliedCode,
  promoDiscountPercent = 0
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLetter, setSelectedLetter] = useState<string>('ALL');
  const [sortBy, setSortBy] = useState<'letter_asc' | 'price_asc' | 'price_desc' | 'popular'>('price_desc');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'alphabetical'>('grid');

  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  // Count vehicles per letter
  const letterCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    VEHICLES.forEach((v) => {
      const char = (v.letter || v.brand.charAt(0)).toUpperCase();
      counts[char] = (counts[char] || 0) + 1;
    });
    return counts;
  }, []);

  const categories = [
    { id: 'all', label: `All Fleet (${VEHICLES.length})` },
    { id: 'supercar', label: 'Supercars & Exotics', icon: Flame },
    { id: 'premium', label: 'Luxury VIP' },
    { id: 'suv', label: 'SUVs & 4x4' },
    { id: 'mpv', label: 'Family MPV' },
    { id: 'ekonomi', label: 'Economy' }
  ];

  // Filtered vehicles
  const filteredVehicles = useMemo(() => {
    return VEHICLES.filter((vehicle) => {
      const char = (vehicle.letter || vehicle.brand.charAt(0)).toUpperCase();
      const matchesLetter = selectedLetter === 'ALL' || char === selectedLetter;
      const matchesCategory =
        selectedCategory === 'all' ||
        vehicle.category === selectedCategory ||
        (selectedCategory === 'supercar' && vehicle.category === 'supercar');

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        vehicle.name.toLowerCase().includes(q) ||
        vehicle.brand.toLowerCase().includes(q) ||
        char.toLowerCase() === q ||
        (vehicle.features && vehicle.features.some((f) => f.toLowerCase().includes(q)));

      return matchesLetter && matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'letter_asc') {
        const charA = (a.letter || a.brand.charAt(0)).toUpperCase();
        const charB = (b.letter || b.brand.charAt(0)).toUpperCase();
        if (charA !== charB) return charA.localeCompare(charB);
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'price_asc') return a.pricePerDay - b.pricePerDay;
      if (sortBy === 'price_desc') return b.pricePerDay - a.pricePerDay;
      if (sortBy === 'popular') return b.reviewsCount - a.reviewsCount;
      return 0;
    });
  }, [selectedCategory, selectedLetter, sortBy, searchQuery]);

  // Group vehicles by letter for alphabetical view
  const groupedByLetter = useMemo(() => {
    const map = new Map<string, Vehicle[]>();
    filteredVehicles.forEach((car) => {
      const letter = (car.letter || car.brand.charAt(0)).toUpperCase();
      if (!map.has(letter)) {
        map.set(letter, []);
      }
      map.get(letter)!.push(car);
    });
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [filteredVehicles]);

  const renderVehicleCard = (car: Vehicle) => {
    const isSaved = savedVehicles.includes(car.id);
    const effectivePrice =
      promoDiscountPercent > 0
        ? car.pricePerDay * (1 - promoDiscountPercent / 100)
        : car.pricePerDay;
    const isSupercar = car.category === 'supercar';
    const letter = (car.letter || car.brand.charAt(0)).toUpperCase();

    return (
      <div
        key={car.id}
        id={`vehicle-card-${car.id}`}
        className="bg-[#11161E] border border-[#252E3D] hover:border-[#F5B82E]/70 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xl group flex flex-col justify-between"
      >
        {/* CARD TOP: IMAGE & BADGES */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0D14]">
          <img
            src={car.images[0]}
            alt={car.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#11161E] via-transparent to-transparent opacity-70" />

          {/* ALPHABET LETTER BADGE (Top Left) */}
          <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-black/80 backdrop-blur-md border border-[#F5B82E]/50 text-[#F5B82E] flex items-center justify-center font-heading font-black text-sm shadow-md">
              {letter}
            </div>
            {car.badge && (
              <span className="px-2.5 py-1 rounded-lg bg-[#F5B82E] text-[#080B10] text-[10px] font-heading font-black tracking-wider uppercase shadow-md">
                {car.badge}
              </span>
            )}
            {promoDiscountPercent > 0 && (
              <span className="px-2 py-1 rounded-lg bg-emerald-500 text-white text-[10px] font-heading font-black uppercase tracking-wider shadow">
                -{promoDiscountPercent}%
              </span>
            )}
          </div>

          {/* SAVE / FAVORITE (Top Right) */}
          <button
            type="button"
            id={`save-btn-${car.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(car.id);
            }}
            className="absolute top-3.5 right-3.5 p-2 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-white hover:text-rose-400 hover:border-rose-400/40 transition-colors shadow-lg"
            aria-label="Save vehicle"
          >
            <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
          </button>

          {/* Performance tag for Supercars */}
          {isSupercar && car.horsePower && (
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-amber-500/30 text-amber-300 text-[10px] font-mono">
              <Zap className="w-3 h-3 text-[#F5B82E]" />
              <span>{car.horsePower} • {car.acceleration || '0-100'}</span>
            </div>
          )}
        </div>

        {/* CARD BODY */}
        <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
          <div>
            {/* Category & Rating */}
            <div className="flex items-center justify-between text-xs text-gray-400 mb-1.5">
              <span className="uppercase font-bold tracking-wider text-[#F5B82E] text-[11px]">
                {car.category === 'supercar' ? 'EXOTIC SUPERCAR' : car.category}
              </span>
              <div className="flex items-center gap-1 text-white">
                <Star className="w-3.5 h-3.5 fill-[#F5B82E] text-[#F5B82E]" />
                <span className="font-bold">{car.rating}</span>
                <span className="text-gray-400">({car.reviewsCount})</span>
              </div>
            </div>

            {/* Vehicle Name */}
            <h3 className="font-heading font-black text-xl text-white group-hover:text-[#F5B82E] transition-colors line-clamp-1">
              {car.name}
            </h3>

            {/* Condition & Spec Subtitle */}
            <p className="text-xs text-gray-400 line-clamp-1 mt-1">
              {car.condition}
            </p>

            {/* SPECIFICATION PILLS */}
            <div className="grid grid-cols-3 gap-2 py-3 my-2 border-y border-[#1E2633] text-xs text-gray-300">
              <div className="flex items-center gap-1.5">
                <Gauge className="w-3.5 h-3.5 text-[#F5B82E] shrink-0" />
                <span className="truncate">{car.transmission}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#F5B82E] shrink-0" />
                <span>{car.seats} Seats</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Fuel className="w-3.5 h-3.5 text-[#F5B82E] shrink-0" />
                <span className="truncate">{car.fuel}</span>
              </div>
            </div>
          </div>

          {/* PRICING & ACTION BUTTONS */}
          <div className="pt-2 space-y-3">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block">
                  Daily Rental
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-heading font-black text-2xl text-[#F5B82E]">
                    {formatRupiah(effectivePrice)}
                  </span>
                  <span className="text-xs text-gray-400">/ day</span>
                </div>
              </div>

              {car.assetValue ? (
                <div className="text-right">
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider block">
                    Car Value
                  </span>
                  <span className="text-xs font-bold text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                    {car.assetValue}
                  </span>
                </div>
              ) : car.originalPrice && car.originalPrice > car.pricePerDay ? (
                <div className="text-right">
                  <span className="text-xs text-gray-500 line-through block">
                    {formatRupiah(car.originalPrice)}
                  </span>
                  <span className="text-[10px] text-emerald-400 font-bold">
                    FASTag Included
                  </span>
                </div>
              ) : null}
            </div>

            {/* ACTION BUTTONS */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                id={`detail-btn-${car.id}`}
                onClick={() => onSelectVehicle(car)}
                className="w-full py-2.5 px-3 rounded-xl bg-[#171D27] hover:bg-[#1E2633] text-gray-200 hover:text-white border border-[#252E3D] text-xs font-heading font-bold uppercase tracking-wider transition-colors text-center"
              >
                Inspect
              </button>

              <button
                type="button"
                id={`book-card-btn-${car.id}`}
                onClick={() => onBookNow(car)}
                className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#F5B82E] to-[#E5A81E] text-[#080B10] font-heading font-black text-xs uppercase tracking-wider shadow-md shadow-[#F5B82E]/20 hover:brightness-105 active:scale-95 transition-all text-center flex items-center justify-center gap-1"
              >
                <span>Book Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="armada-section" className="py-16 sm:py-20 bg-[#080B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* SECTION TITLE & SEARCH HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#1E2633] pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11161E] border border-[#252E3D] text-[#F5B82E] text-xs font-heading font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AUTHENTIC AUTOMOTIVE DIRECTORY</span>
            </div>
            <h2
              id="fleet-section-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight"
            >
              A TO Z CAR COLLECTION
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl font-normal">
              Select your ideal ride across our complete A–Z fleet catalogue. From iconic supercars like the Lamborghini Huracán EVO to executive business sedans and rugged 4x4 SUVs.
            </p>
          </div>

          {/* SEARCH & SORT CONTROLS */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Realtime Search */}
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search car model, brand, or letter..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-[#11161E] border border-[#252E3D] text-xs text-white rounded-xl pl-9 pr-4 py-2.5 focus:outline-none focus:border-[#F5B82E] placeholder-gray-500 w-60 sm:w-64"
              />
            </div>

            {/* Quick Sort Toggle Buttons */}
            <div className="flex items-center bg-[#11161E] border border-[#252E3D] rounded-xl p-1 gap-1">
              <button
                type="button"
                id="sort-price-low-high-btn"
                onClick={() => setSortBy('price_asc')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-heading font-bold transition-all ${
                  sortBy === 'price_asc'
                    ? 'bg-[#F5B82E] text-[#080B10] shadow-sm shadow-[#F5B82E]/30 font-black'
                    : 'text-gray-300 hover:text-white hover:bg-[#1A222F]'
                }`}
                title="Sort by lowest price first"
              >
                <ArrowUpNarrowWide className="w-3.5 h-3.5" />
                <span>Low to High</span>
              </button>

              <button
                type="button"
                id="sort-price-high-low-btn"
                onClick={() => setSortBy('price_desc')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-heading font-bold transition-all ${
                  sortBy === 'price_desc'
                    ? 'bg-[#F5B82E] text-[#080B10] shadow-sm shadow-[#F5B82E]/30 font-black'
                    : 'text-gray-300 hover:text-white hover:bg-[#1A222F]'
                }`}
                title="Sort by highest price first"
              >
                <ArrowDownWideNarrow className="w-3.5 h-3.5" />
                <span>High to Low</span>
              </button>
            </div>

            {/* Sort Dropdown for all options */}
            <select
              id="fleet-sort-dropdown"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="bg-[#11161E] border border-[#252E3D] text-xs text-white rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#F5B82E] cursor-pointer"
            >
              <option value="price_asc">Price: Low to High (Cheapest)</option>
              <option value="price_desc">Price: High to Low (Ultra Luxury)</option>
              <option value="letter_asc">Sort: A to Z Alphabetical</option>
              <option value="popular">Most Popular</option>
            </select>

            {/* View Mode Switcher */}
            <div className="flex items-center bg-[#11161E] border border-[#252E3D] rounded-xl p-1">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-[#F5B82E] text-[#080B10]' : 'text-gray-400 hover:text-white'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('alphabetical')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'alphabetical' ? 'bg-[#F5B82E] text-[#080B10]' : 'text-gray-400 hover:text-white'
                }`}
                title="A–Z Alphabet Grouped View"
              >
                <ListFilter className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ALPHABET QUICK-SELECT SCROLLER (A TO Z) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span className="font-heading font-bold uppercase tracking-wider text-gray-300">
              Filter by Alphabet Letter (A–Z)
            </span>
            {selectedLetter !== 'ALL' && (
              <button
                onClick={() => setSelectedLetter('ALL')}
                className="text-[#F5B82E] hover:underline font-bold"
              >
                Show All Letters ({VEHICLES.length})
              </button>
            )}
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            <button
              type="button"
              onClick={() => setSelectedLetter('ALL')}
              className={`px-3 py-2 rounded-xl text-xs font-heading font-black tracking-wider transition-all shrink-0 ${
                selectedLetter === 'ALL'
                  ? 'bg-[#F5B82E] text-[#080B10] shadow-md shadow-[#F5B82E]/20'
                  : 'bg-[#11161E] text-gray-300 hover:text-white border border-[#252E3D]'
              }`}
            >
              ALL ({VEHICLES.length})
            </button>

            {ALPHABET.map((char) => {
              const count = letterCounts[char] || 0;
              const hasCars = count > 0;
              const isSelected = selectedLetter === char;

              return (
                <button
                  key={char}
                  type="button"
                  disabled={!hasCars}
                  onClick={() => setSelectedLetter(char)}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-xs font-heading font-black transition-all shrink-0 flex flex-col items-center justify-center relative ${
                    isSelected
                      ? 'bg-[#F5B82E] text-[#080B10] shadow-md shadow-[#F5B82E]/20 scale-105'
                      : hasCars
                      ? 'bg-[#11161E] text-white hover:border-[#F5B82E]/60 border border-[#252E3D]'
                      : 'bg-[#0A0D14] text-gray-600 border border-[#171D27] cursor-not-allowed opacity-40'
                  }`}
                  title={hasCars ? `${count} vehicle(s) under letter ${char}` : `No vehicles under letter ${char}`}
                >
                  <span>{char}</span>
                  {hasCars && (
                    <span
                      className={`text-[8px] leading-none font-mono ${
                        isSelected ? 'text-[#080B10]' : 'text-[#F5B82E]'
                      }`}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`fleet-cat-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#F5B82E] text-[#080B10] shadow-md shadow-[#F5B82E]/20'
                    : 'bg-[#11161E] text-gray-300 hover:text-white hover:bg-[#171D27] border border-[#252E3D]'
                }`}
              >
                {cat.icon && <cat.icon className="w-3.5 h-3.5" />}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* VEHICLE CONTENT: EITHER ALPHABET-GROUPED OR GRID */}
        {filteredVehicles.length > 0 ? (
          viewMode === 'alphabetical' ? (
            <div className="space-y-12">
              {groupedByLetter.map(([letter, cars]) => (
                <div key={letter} className="space-y-6">
                  {/* Letter Section Header */}
                  <div className="flex items-center gap-3 pb-3 border-b border-[#1E2633]">
                    <div className="w-10 h-10 rounded-2xl bg-[#F5B82E] text-[#080B10] font-heading font-black text-lg flex items-center justify-center shadow-lg shadow-[#F5B82E]/20">
                      {letter}
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-black text-white">
                        {cars.map((c) => c.brand).filter((v, i, a) => a.indexOf(v) === i).join(' & ')}
                      </h3>
                      <p className="text-xs text-gray-400">
                        {cars.length} vehicle{cars.length > 1 ? 's' : ''} in collection
                      </p>
                    </div>
                  </div>

                  {/* Grid for this letter */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {cars.map(renderVehicleCard)}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredVehicles.map(renderVehicleCard)}
            </div>
          )
        ) : (
          <div className="text-center py-16 bg-[#11161E] rounded-3xl border border-[#252E3D] space-y-4">
            <p className="text-gray-300 text-sm">
              No vehicles matched your filter {selectedLetter !== 'ALL' ? `for letter "${selectedLetter}"` : ''} {searchQuery ? `or query "${searchQuery}"` : ''}.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedLetter('ALL');
              }}
              className="px-5 py-2.5 rounded-xl bg-[#F5B82E] text-[#080B10] text-xs font-bold font-heading uppercase tracking-wider"
            >
              Show Entire A–Z Fleet
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
