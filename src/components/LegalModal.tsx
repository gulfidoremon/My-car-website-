import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      id="legal-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in"
    >
      <div
        id="legal-modal-box"
        className="relative bg-[#11161E] border border-[#252E3D] rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl my-6 flex flex-col max-h-[90vh]"
      >
        {/* HEADER */}
        <div className="bg-[#0E131B] border-b border-[#252E3D] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {type === 'terms' ? (
              <FileText className="w-5 h-5 text-[#F5B82E]" />
            ) : (
              <ShieldCheck className="w-5 h-5 text-[#F5B82E]" />
            )}
            <h2 className="font-heading font-black text-lg text-white">
              {type === 'terms' ? 'RENTAL TERMS & CONDITIONS' : 'PRIVACY & DATA PROTECTION POLICY'}
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
        <div className="overflow-y-auto p-6 space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed flex-1">
          {type === 'terms' ? (
            <div className="space-y-4">
              <div>
                <h4 className="font-heading font-bold text-white text-sm mb-1">
                  1. Eligibility & Driver Verification
                </h4>
                <p>
                  To rent a self-drive vehicle in India, the primary driver must be at least 21 years of age and hold a valid, original Driving Licence issued by the Government of India (or an International Driving Permit along with a national driving licence for foreign nationals) with a minimum of 1 year of driving experience. Valid Government photo ID (Aadhaar Card or Passport) must be presented upon vehicle handover.
                </p>
              </div>

              <div>
                <h4 className="font-heading font-bold text-white text-sm mb-1">
                  2. Fuel Policy & FASTag Electronic Tolls
                </h4>
                <p>
                  Vehicles operate on a same-level fuel policy (e.g. if delivered with 50% fuel, please return with 50% fuel). All vehicles are fitted with official electronic FASTag stickers for seamless highway toll plaza transit. All FASTag tolls incurred during your rental period will be settled at actual government rates without any additional markup.
                </p>
              </div>

              <div>
                <h4 className="font-heading font-bold text-white text-sm mb-1">
                  3. Security Deposit & Refund Schedule
                </h4>
                <p>
                  Self-drive bookings require a nominal security deposit (₹3,000 - ₹5,000 based on car category), authorized via UPI or credit card. Following standard vehicle check-in inspection, the security deposit is 100% credited back to the customer's account within 24 hours. Chauffeur-driven packages require zero security deposit.
                </p>
              </div>

              <div>
                <h4 className="font-heading font-bold text-white text-sm mb-1">
                  4. Free Cancellation & Rescheduling
                </h4>
                <p>
                  Bookings canceled 24 hours or more before scheduled vehicle pickup receive a 100% full refund with zero cancellation penalty. Travel dates may be rescheduled without administrative fees up to 12 hours prior to dispatch, subject to fleet availability.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <h4 className="font-heading font-bold text-white text-sm mb-1">
                  1. Information We Collect
                </h4>
                <p>
                  India Car Rental collects your contact name, phone number, email address, and travel itinerary solely for the purposes of generating reservation vouchers, confirming pickup logistics via WhatsApp, and fulfilling legal vehicle rental agreements.
                </p>
              </div>

              <div>
                <h4 className="font-heading font-bold text-white text-sm mb-1">
                  2. Aadhaar & Identity Verification Safeguards
                </h4>
                <p>
                  Government ID documents (such as Aadhaar or Passport) uploaded or verified during check-in are protected under strict 256-bit encryption standards. We never sell, lease, or monetize customer personal information to third-party marketing companies.
                </p>
              </div>

              <div>
                <h4 className="font-heading font-bold text-white text-sm mb-1">
                  3. Communications & WhatsApp Notifications
                </h4>
                <p>
                  By confirming a rental reservation, you authorize our automated reservation desk to send your booking confirmation voucher, vehicle registration plate details, and chauffeur contact information directly via WhatsApp and email.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="bg-[#0E131B] border-t border-[#252E3D] px-6 py-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-[#F5B82E] text-[#080B10] font-heading font-bold text-xs uppercase tracking-wider"
          >
            Understood &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
