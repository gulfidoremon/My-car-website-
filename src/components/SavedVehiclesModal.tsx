import React from 'react';
import { X, Heart, Trash2, ArrowRight } from 'lucide-react';
import { VEHICLES } from '../data/mockData';
import { formatRupiah } from '../utils/formatters';
import { Vehicle } from '../types';

interface SavedVehiclesModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedIds: string[];
  onRemove: (vehicleId: string) => void;
  onBookNow: (vehicle: Vehicle) => void;
}

export const SavedVehiclesModal: React.FC<SavedVehiclesModalProps> = ({
  isOpen,
  onClose,
  savedIds,
  onRemove,
  onBookNow
}) => {
  if (!isOpen) return null;

  const savedList = VEHICLES.filter((v) => savedIds.includes(v.id));

  return (
    <div
      id="saved-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in"
    >
      <div
        id="saved-modal-box"
        className="relative bg-[#11161E] border border-[#252E3D] rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl my-6 flex flex-col max-h-[90vh]"
      >
        {/* HEADER */}
        <div className="bg-[#0E131B] border-b border-[#252E3D] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <h2 className="font-heading font-black text-lg text-white">
              SAVED VEHICLES ({savedList.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#171D27] hover:bg-[#1E2633] text-gray-400 hover:text-white border border-[#252E3D] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* CONTENT */}
        <div className="overflow-y-auto p-6 space-y-4 flex-1">
          {savedList.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#171D27] text-gray-500 flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white">
                No Saved Vehicles Yet
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 max-w-sm mx-auto">
                Click the heart icon on any car in our fleet to bookmark your favorites for quick comparison.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-[#F5B82E] text-[#080B10] font-heading font-bold text-xs uppercase tracking-wider"
              >
                Explore Fleet
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {savedList.map((car) => (
                <div
                  key={car.id}
                  className="bg-[#0E131B] border border-[#252E3D] rounded-2xl p-4 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={car.images[0]}
                      alt={car.name}
                      className="w-16 h-12 object-cover rounded-xl border border-[#252E3D] shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="font-heading font-bold text-sm text-white truncate">
                        {car.name}
                      </h4>
                      <div className="text-xs text-[#F5B82E] font-bold">
                        {formatRupiah(car.pricePerDay)} / day
                      </div>
                      <div className="text-[10px] text-gray-400">
                        {car.transmission} • {car.seats} Seats
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => onRemove(car.id)}
                      className="p-2 rounded-xl bg-[#171D27] text-gray-400 hover:text-rose-400 hover:bg-[#1E2633] transition-colors"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => {
                        onClose();
                        onBookNow(car);
                      }}
                      className="px-4 py-2 rounded-xl bg-[#F5B82E] text-[#080B10] font-heading font-extrabold text-xs uppercase flex items-center gap-1 hover:brightness-105"
                    >
                      <span>Book</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
