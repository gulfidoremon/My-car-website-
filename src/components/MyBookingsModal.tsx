import React from 'react';
import { X, CalendarCheck, MapPin, Calendar, Car, MessageCircle, AlertCircle, Trash2 } from 'lucide-react';
import { Booking } from '../types';
import { formatRupiah } from '../utils/formatters';
import { COMPANY_CONTACT } from '../data/mockData';

interface MyBookingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: Booking[];
  onCancelBooking: (bookingId: string) => void;
}

export const MyBookingsModal: React.FC<MyBookingsModalProps> = ({
  isOpen,
  onClose,
  bookings,
  onCancelBooking
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="my-bookings-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in"
    >
      <div
        id="my-bookings-modal-box"
        className="relative bg-[#11161E] border border-[#252E3D] rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl my-6 flex flex-col max-h-[90vh]"
      >
        {/* HEADER */}
        <div className="bg-[#0E131B] border-b border-[#252E3D] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CalendarCheck className="w-5 h-5 text-[#F5B82E]" />
            <h2 className="font-heading font-black text-lg text-white">
              MY RESERVATIONS ({bookings.length})
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
          {bookings.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#171D27] text-gray-400 flex items-center justify-center mx-auto">
                <Car className="w-8 h-8 text-gray-500" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white">
                No Active Reservations
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 max-w-sm mx-auto">
                You haven't booked any vehicles yet. Choose from our fleet and experience seamless travel across India.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-[#F5B82E] text-[#080B10] font-heading font-bold text-xs uppercase tracking-wider"
              >
                Browse Fleet
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {bookings.map((b) => (
                <div
                  key={b.id}
                  id={`booking-item-${b.id}`}
                  className="bg-[#0E131B] border border-[#252E3D] rounded-2xl p-5 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1E2633] pb-3">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#F5B82E] tracking-widest block">
                        BOOKING ID: {b.id}
                      </span>
                      <h4 className="font-heading font-black text-base text-white">
                        {b.vehicle.name}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-950/50 text-emerald-400 border border-emerald-900/50 text-[10px] font-bold uppercase tracking-wider">
                        {b.status.toUpperCase()}
                      </span>
                      <button
                        onClick={() => {
                          if (confirm(`Cancel booking ${b.id}? Cancellation is free up to 24 hours.`)) {
                            onCancelBooking(b.id);
                          }
                        }}
                        className="p-1.5 rounded-lg bg-rose-950/40 text-rose-400 hover:bg-rose-900/50 border border-rose-900/40"
                        title="Cancel Booking"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300">
                    <div className="flex items-start gap-2">
                      <Calendar className="w-4 h-4 text-[#F5B82E] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-400 block text-[10px]">Travel Dates ({b.durationDays} Days):</span>
                        <span>{b.pickupDate} to {b.returnDate}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#F5B82E] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-gray-400 block text-[10px]">Pickup Hub:</span>
                        <span>{b.pickupLocation}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-[#1E2633]">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs text-gray-400">Total Billed:</span>
                      <span className="font-heading font-black text-base text-[#F5B82E]">
                        {formatRupiah(b.totalAmount)}
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=Inquiry%20regarding%20Booking%20ID%20${b.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-[#25D366] text-white text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-[#20bd5a]"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>WhatsApp Support</span>
                    </a>
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
