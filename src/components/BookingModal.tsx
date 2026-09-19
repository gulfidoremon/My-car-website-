import React, { useState, useEffect } from 'react';
import {
  X,
  Check,
  ChevronRight,
  ChevronLeft,
  Calendar,
  MapPin,
  Car,
  User,
  Phone,
  Mail,
  CreditCard,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { Vehicle, Booking, ExtraService } from '../types';
import { VEHICLES, EXTRA_SERVICES, LOCATIONS, COMPANY_CONTACT } from '../data/mockData';
import {
  formatRupiah,
  calculateDaysBetween,
  getTodayDateString,
  getTomorrowDateString,
  generateBookingId
} from '../utils/formatters';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedVehicle?: Vehicle | null;
  onBookingConfirmed: (booking: Booking) => void;
  promoAppliedCode?: string | null;
  promoDiscountPercent?: number;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedVehicle,
  onBookingConfirmed,
  promoAppliedCode,
  promoDiscountPercent = 0
}) => {
  if (!isOpen) return null;

  const today = getTodayDateString();
  const defaultReturn = getTomorrowDateString(2);

  const [step, setStep] = useState<number>(1);

  // STEP 1 STATE
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>(
    preSelectedVehicle || VEHICLES[0]
  );
  const [pickupLocation, setPickupLocation] = useState<string>(LOCATIONS[0].name);
  const [returnLocation, setReturnLocation] = useState<string>(LOCATIONS[0].name);
  const [pickupDate, setPickupDate] = useState<string>(today);
  const [returnDate, setReturnDate] = useState<string>(defaultReturn);
  const [rentalType, setRentalType] = useState<'self' | 'driver'>('self');

  // STEP 2 STATE: Extras
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  // STEP 3 STATE: Personal Details
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('+91 ');
  const [customerEmail, setCustomerEmail] = useState<string>('');
  const [customerIdentity, setCustomerIdentity] = useState<string>('');
  const [customerNotes, setCustomerNotes] = useState<string>('');

  // STEP 4 STATE: Payment
  const [paymentMethod, setPaymentMethod] = useState<'transfer' | 'credit_card' | 'cod'>('transfer');
  const [enteredPromo, setEnteredPromo] = useState<string>(promoAppliedCode || '');
  const [activeDiscount, setActiveDiscount] = useState<number>(promoDiscountPercent);
  const [promoMessage, setPromoMessage] = useState<string>('');

  // SUCCESS STATE
  const [confirmedBooking, setConfirmedBooking] = useState<Booking | null>(null);

  useEffect(() => {
    if (preSelectedVehicle) {
      setSelectedVehicle(preSelectedVehicle);
    }
  }, [preSelectedVehicle]);

  useEffect(() => {
    if (promoDiscountPercent > 0) {
      setActiveDiscount(promoDiscountPercent);
      setEnteredPromo(promoAppliedCode || 'INDIA30');
    }
  }, [promoDiscountPercent, promoAppliedCode]);

  // Calculations
  const days = calculateDaysBetween(pickupDate, returnDate);
  const driverFee = rentalType === 'driver' ? 800 * days : 0;
  const baseVehicleTotal = selectedVehicle.pricePerDay * days;

  const extrasTotal = selectedExtras.reduce((sum, extraId) => {
    const extra = EXTRA_SERVICES.find((e) => e.id === extraId);
    if (!extra) return sum;
    return sum + (extra.priceType === 'per_day' ? extra.price * days : extra.price);
  }, 0);

  const subtotal = baseVehicleTotal + driverFee + extrasTotal;
  const discountAmount = activeDiscount > 0 ? (subtotal * activeDiscount) / 100 : 0;
  const grandTotal = Math.max(0, subtotal - discountAmount);

  const toggleExtra = (id: string) => {
    if (selectedExtras.includes(id)) {
      setSelectedExtras(selectedExtras.filter((e) => e !== id));
    } else {
      setSelectedExtras([...selectedExtras, id]);
    }
  };

  const handleApplyPromo = () => {
    if (enteredPromo.trim().toUpperCase() === 'INDIA30') {
      setActiveDiscount(30);
      setPromoMessage('Promo code INDIA30 applied! 30% discount deducted.');
    } else {
      setPromoMessage('Invalid coupon code. Try code: INDIA30');
    }
  };

  const handleConfirmOrder = () => {
    const newBooking: Booking = {
      id: generateBookingId(),
      vehicle: selectedVehicle,
      pickupLocation,
      returnLocation,
      pickupDate,
      returnDate,
      durationDays: days,
      rentalType,
      selectedExtras,
      totalAmount: grandTotal,
      customerName,
      customerPhone,
      customerEmail,
      paymentMethod,
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };

    setConfirmedBooking(newBooking);
    onBookingConfirmed(newBooking);
  };

  const getWhatsAppBookingUrl = (booking: Booking) => {
    const text = `*NEW BOOKING CONFIRMATION - INDIA CAR RENTAL*
Booking ID: *${booking.id}*
Client Name: *${booking.customerName}*
Phone: *${booking.customerPhone}*
Email: *${booking.customerEmail}*
Vehicle: *${booking.vehicle.name}*
Service: *${booking.rentalType === 'self' ? 'Self-Drive (Freedom)' : 'With Chauffeur (+₹800/day)'}*
Pickup Hub: *${booking.pickupLocation}*
Return Hub: *${booking.returnLocation}*
Dates: *${booking.pickupDate}* to *${booking.returnDate}* (${booking.durationDays} Days)
Payment Method: *${booking.paymentMethod.toUpperCase()}*
Grand Total: *${formatRupiah(booking.totalAmount)}*

Please share dispatch details and WhatsApp voucher. Thank you!`;

    return `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      id="booking-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in"
    >
      <div
        id="booking-modal-box"
        className="relative bg-[#11161E] border border-[#252E3D] rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl my-4 flex flex-col max-h-[94vh]"
      >
        {/* MODAL HEADER */}
        <div className="bg-[#0E131B] border-b border-[#252E3D] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#F5B82E] text-[#080B10] flex items-center justify-center font-bold">
              <Car className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-heading font-black text-lg text-white">
                RESERVATION CHECKOUT
              </h2>
              <span className="text-[10px] text-gray-400">
                Official Reservation Voucher Desk (India)
              </span>
            </div>
          </div>

          <button
            id="close-booking-modal-btn"
            onClick={onClose}
            className="p-2 rounded-xl bg-[#171D27] hover:bg-[#1E2633] text-gray-400 hover:text-white border border-[#252E3D] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* STEPPER PROGRESS BAR (If not finished) */}
        {!confirmedBooking && (
          <div className="bg-[#080B10] px-6 py-3 border-b border-[#252E3D]">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              {[
                { num: 1, label: 'Vehicle & Dates' },
                { num: 2, label: 'Add-on Extras' },
                { num: 3, label: 'Customer Info' },
                { num: 4, label: 'Payment' }
              ].map((s) => (
                <div key={s.num} className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-heading font-bold transition-all ${
                      step === s.num
                        ? 'bg-[#F5B82E] text-[#080B10] shadow-md shadow-[#F5B82E]/30'
                        : step > s.num
                        ? 'bg-emerald-500 text-white'
                        : 'bg-[#171D27] text-gray-500 border border-[#252E3D]'
                    }`}
                  >
                    {step > s.num ? <Check className="w-3.5 h-3.5" /> : s.num}
                  </div>
                  <span
                    className={`text-xs font-semibold hidden sm:inline ${
                      step === s.num ? 'text-white' : 'text-gray-500'
                    }`}
                  >
                    {s.label}
                  </span>
                  {s.num < 4 && <span className="text-[#252E3D] hidden sm:inline">→</span>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BODY */}
        <div className="overflow-y-auto p-6 flex-1 space-y-6">
          {confirmedBooking ? (
            /* ================= STEP 5: SUCCESS CONFIRMATION ================= */
            <div className="text-center py-6 max-w-xl mx-auto space-y-6 animate-in zoom-in-95">
              <div className="w-20 h-20 rounded-full bg-emerald-950/70 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/20">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F5B82E]">
                  BOOKING CONFIRMED &amp; REGISTERED
                </span>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                  Ready for Your India Journey!
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Booking Reference Number:{' '}
                  <strong className="text-white font-mono bg-[#080B10] px-2.5 py-1 rounded border border-[#252E3D]">
                    {confirmedBooking.id}
                  </strong>
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-[#080B10] border border-[#252E3D] rounded-2xl p-5 text-left space-y-3 text-xs">
                <div className="flex justify-between border-b border-[#1E2633] pb-2">
                  <span className="text-gray-400">Reserved Vehicle:</span>
                  <strong className="text-white">{confirmedBooking.vehicle.name}</strong>
                </div>
                <div className="flex justify-between border-b border-[#1E2633] pb-2">
                  <span className="text-gray-400">Rental Type:</span>
                  <strong className="text-white">
                    {confirmedBooking.rentalType === 'self' ? 'Self-Drive (Freedom)' : 'With Chauffeur'}
                  </strong>
                </div>
                <div className="flex justify-between border-b border-[#1E2633] pb-2">
                  <span className="text-gray-400">Duration:</span>
                  <span className="text-gray-300">
                    {confirmedBooking.pickupDate} to {confirmedBooking.returnDate} ({confirmedBooking.durationDays} Days)
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#1E2633] pb-2">
                  <span className="text-gray-400">Pickup Hub:</span>
                  <span className="text-gray-300">{confirmedBooking.pickupLocation}</span>
                </div>
                <div className="flex justify-between pt-1 text-sm font-bold">
                  <span className="text-white">Total Amount:</span>
                  <span className="text-[#F5B82E] font-heading font-black text-lg">
                    {formatRupiah(confirmedBooking.totalAmount)}
                  </span>
                </div>
              </div>

              {/* WHATSAPP CONFIRMATION CTA */}
              <div className="space-y-3 pt-2">
                <a
                  id="send-booking-whatsapp-btn"
                  href={getWhatsAppBookingUrl(confirmedBooking)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading font-black text-sm uppercase tracking-wide shadow-xl shadow-[#25D366]/25 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-white stroke-none" />
                  <span>Send Voucher to WhatsApp Desk (+91)</span>
                </a>
                <p className="text-[11px] text-gray-400">
                  Click to forward your verified booking voucher directly to our reservation manager on WhatsApp for instant car release.
                </p>
              </div>
            </div>
          ) : (
            <>
              {/* ================= STEP 1: VEHICLE & DATES ================= */}
              {step === 1 && (
                <div className="space-y-6">
                  {/* Select Car */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Select Vehicle Model
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {VEHICLES.map((car) => {
                        const isSelected = selectedVehicle.id === car.id;
                        return (
                          <div
                            key={car.id}
                            onClick={() => setSelectedVehicle(car)}
                            className={`p-3 rounded-xl border cursor-pointer transition-all flex gap-3 items-center ${
                              isSelected
                                ? 'bg-[#171D27] border-[#F5B82E] ring-1 ring-[#F5B82E]'
                                : 'bg-[#0E131B] border-[#252E3D] hover:border-gray-500'
                            }`}
                          >
                            <img
                              src={car.images[0]}
                              alt={car.name}
                              className="w-16 h-12 object-cover rounded-lg shrink-0"
                            />
                            <div className="min-w-0 flex-1">
                              <h4 className="font-heading font-bold text-xs text-white truncate">
                                {car.name}
                              </h4>
                              <div className="flex items-center justify-between gap-1">
                                <span className="text-[11px] text-[#F5B82E] font-bold">
                                  {formatRupiah(car.pricePerDay)}/day
                                </span>
                                {car.assetValue && (
                                  <span className="text-[9px] text-amber-300 font-bold bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/20">
                                    {car.assetValueFormatted || car.assetValue}
                                  </span>
                                )}
                              </div>
                              <div className="text-[10px] text-gray-400">
                                {car.seats} Seats • {car.transmission}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Service Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setRentalType('self')}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        rentalType === 'self'
                          ? 'bg-[#171D27] border-[#F5B82E] text-white'
                          : 'bg-[#0E131B] border-[#252E3D] text-gray-400'
                      }`}
                    >
                      <div className="font-heading font-bold text-sm text-white">
                        Self-Drive (Freedom)
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        Drive yourself with complete autonomy and privacy.
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setRentalType('driver')}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        rentalType === 'driver'
                          ? 'bg-[#171D27] border-[#F5B82E] text-white'
                          : 'bg-[#0E131B] border-[#252E3D] text-gray-400'
                      }`}
                    >
                      <div className="font-heading font-bold text-sm text-white">
                        With Chauffeur (+₹800/day)
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        Professional, verified, polite English & Hindi speaking driver.
                      </div>
                    </button>
                  </div>

                  {/* Dates & Locations */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#F5B82E]" />
                        <span>Pickup Location / Airport</span>
                      </label>
                      <select
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
                        className="w-full bg-[#080B10] border border-[#252E3D] rounded-xl px-3.5 py-3 text-xs text-white"
                      >
                        {LOCATIONS.map((loc) => (
                          <option key={loc.id} value={loc.name}>
                            {loc.name} ({loc.city})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#F5B82E]" />
                        <span>Return Location</span>
                      </label>
                      <select
                        value={returnLocation}
                        onChange={(e) => setReturnLocation(e.target.value)}
                        className="w-full bg-[#080B10] border border-[#252E3D] rounded-xl px-3.5 py-3 text-xs text-white"
                      >
                        {LOCATIONS.map((loc) => (
                          <option key={loc.id} value={loc.name}>
                            {loc.name} ({loc.city})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#F5B82E]" />
                        <span>Pickup Date</span>
                      </label>
                      <input
                        type="date"
                        min={today}
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        className="w-full bg-[#080B10] border border-[#252E3D] rounded-xl px-3.5 py-2.5 text-xs text-white scheme-dark"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#F5B82E]" />
                        <span>Return Date</span>
                      </label>
                      <input
                        type="date"
                        min={pickupDate || today}
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="w-full bg-[#080B10] border border-[#252E3D] rounded-xl px-3.5 py-2.5 text-xs text-white scheme-dark"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* ================= STEP 2: EXTRAS ================= */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-heading font-bold text-lg text-white">
                      Recommended Travel Add-ons
                    </h3>
                    <p className="text-xs text-gray-400">
                      Enhance your journey with zero-depreciation coverage, airport terminal valet delivery, and child booster seats.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {EXTRA_SERVICES.map((extra) => {
                      const isSelected = selectedExtras.includes(extra.id);
                      return (
                        <div
                          key={extra.id}
                          onClick={() => toggleExtra(extra.id)}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                            isSelected
                              ? 'bg-[#171D27] border-[#F5B82E]'
                              : 'bg-[#0E131B] border-[#252E3D] hover:border-gray-500'
                          }`}
                        >
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <h4 className="font-heading font-bold text-sm text-white">
                                {extra.name}
                              </h4>
                              <div
                                className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                                  isSelected
                                    ? 'bg-[#F5B82E] border-[#F5B82E] text-[#080B10]'
                                    : 'border-[#252E3D]'
                                }`}
                              >
                                {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                              </div>
                            </div>
                            <p className="text-xs text-gray-400 leading-relaxed">
                              {extra.description}
                            </p>
                          </div>

                          <div className="pt-3 mt-3 border-t border-[#1E2633] text-xs font-bold text-[#F5B82E]">
                            +{formatRupiah(extra.price)} {extra.priceType === 'per_day' ? '/ day' : 'one-time'}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ================= STEP 3: CUSTOMER INFO ================= */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-heading font-bold text-lg text-white">
                      Guest &amp; Driver Details
                    </h3>
                    <p className="text-xs text-gray-400">
                      Enter basic identity verification for rapid delivery release. Zero spam guaranteed.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1 flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-[#F5B82E]" />
                        <span>Full Legal Name *</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Sharma"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full bg-[#080B10] border border-[#252E3D] rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#F5B82E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1 flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5 text-[#F5B82E]" />
                        <span>Phone / WhatsApp (+91) *</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full bg-[#080B10] border border-[#252E3D] rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#F5B82E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1 flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-[#F5B82E]" />
                        <span>Email Address *</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="rajesh@example.com"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        className="w-full bg-[#080B10] border border-[#252E3D] rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#F5B82E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1 flex items-center gap-1">
                        <FileText className="w-3.5 h-3.5 text-[#F5B82E]" />
                        <span>Aadhaar / Passport / Driving Licence No.</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Indian DL or ID Number"
                        value={customerIdentity}
                        onChange={(e) => setCustomerIdentity(e.target.value)}
                        className="w-full bg-[#080B10] border border-[#252E3D] rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#F5B82E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1">
                      Flight Arrival Number or Special Instructions
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Flight 6E-204 arriving Mumbai T2 at 3:30 PM. Please bring baby seat."
                      value={customerNotes}
                      onChange={(e) => setCustomerNotes(e.target.value)}
                      className="w-full bg-[#080B10] border border-[#252E3D] rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#F5B82E]"
                    />
                  </div>
                </div>
              )}

              {/* ================= STEP 4: PAYMENT & SUMMARY ================= */}
              {step === 4 && (
                <div className="space-y-6">
                  {/* Promo Code Input */}
                  <div className="p-4 rounded-2xl bg-[#080B10] border border-[#252E3D] space-y-2">
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Festive Coupon Code
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="e.g. INDIA30"
                        value={enteredPromo}
                        onChange={(e) => setEnteredPromo(e.target.value)}
                        className="bg-[#11161E] border border-[#252E3D] text-xs text-white px-3 py-2 rounded-xl uppercase font-mono flex-1 focus:outline-none focus:border-[#F5B82E]"
                      />
                      <button
                        type="button"
                        onClick={handleApplyPromo}
                        className="px-4 py-2 bg-[#F5B82E] text-[#080B10] text-xs font-bold font-heading rounded-xl"
                      >
                        Apply
                      </button>
                    </div>
                    {promoMessage && (
                      <p className="text-[11px] text-[#F5B82E]">{promoMessage}</p>
                    )}
                  </div>

                  {/* Payment Methods */}
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Select Payment Method (India)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div
                        onClick={() => setPaymentMethod('transfer')}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                          paymentMethod === 'transfer'
                            ? 'bg-[#171D27] border-[#F5B82E]'
                            : 'bg-[#0E131B] border-[#252E3D]'
                        }`}
                      >
                        <strong className="text-white text-xs block">UPI / Net Banking</strong>
                        <span className="text-[10px] text-gray-400">Google Pay, PhonePe, Paytm, IMPS</span>
                      </div>

                      <div
                        onClick={() => setPaymentMethod('credit_card')}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                          paymentMethod === 'credit_card'
                            ? 'bg-[#171D27] border-[#F5B82E]'
                            : 'bg-[#0E131B] border-[#252E3D]'
                        }`}
                      >
                        <strong className="text-white text-xs block">Credit / Debit Card</strong>
                        <span className="text-[10px] text-gray-400">Visa, Mastercard, RuPay, Amex</span>
                      </div>

                      <div
                        onClick={() => setPaymentMethod('cod')}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                          paymentMethod === 'cod'
                            ? 'bg-[#171D27] border-[#F5B82E]'
                            : 'bg-[#0E131B] border-[#252E3D]'
                        }`}
                      >
                        <strong className="text-white text-xs block">Pay on Delivery</strong>
                        <span className="text-[10px] text-gray-400">Settle at vehicle inspection</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary Box */}
                  <div className="bg-[#080B10] border border-[#252E3D] rounded-2xl p-5 space-y-2.5 text-xs text-gray-300">
                    <div className="flex justify-between">
                      <span>Vehicle Base ({selectedVehicle.name} x {days} days):</span>
                      <strong className="text-white">{formatRupiah(baseVehicleTotal)}</strong>
                    </div>

                    {driverFee > 0 && (
                      <div className="flex justify-between">
                        <span>Chauffeur Service (₹800 x {days} days):</span>
                        <strong className="text-white">{formatRupiah(driverFee)}</strong>
                      </div>
                    )}

                    {extrasTotal > 0 && (
                      <div className="flex justify-between">
                        <span>Add-on Extras Total:</span>
                        <strong className="text-white">{formatRupiah(extrasTotal)}</strong>
                      </div>
                    )}

                    {discountAmount > 0 && (
                      <div className="flex justify-between text-emerald-400 font-semibold">
                        <span>Festive Discount ({activeDiscount}%):</span>
                        <span>-{formatRupiah(discountAmount)}</span>
                      </div>
                    )}

                    <div className="pt-2 border-t border-[#252E3D] flex justify-between items-baseline text-sm">
                      <span className="text-white font-bold">Estimated Grand Total:</span>
                      <span className="font-heading font-black text-2xl text-[#F5B82E]">
                        {formatRupiah(grandTotal)}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* MODAL FOOTER BUTTONS */}
        {!confirmedBooking && (
          <div className="bg-[#0E131B] border-t border-[#252E3D] px-6 py-4 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2.5 rounded-xl bg-[#171D27] text-gray-300 hover:text-white border border-[#252E3D] text-xs font-bold uppercase flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <button
                type="button"
                id="booking-modal-next-step-btn"
                onClick={() => {
                  if (step === 3 && (!customerName || !customerPhone || !customerEmail)) {
                    alert('Please enter your Name, Phone/WhatsApp, and Email before proceeding.');
                    return;
                  }
                  setStep(step + 1);
                }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#F5B82E] to-[#E5A81E] text-[#080B10] font-heading font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-[#F5B82E]/25"
              >
                <span>Continue</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                id="booking-modal-confirm-order-btn"
                onClick={handleConfirmOrder}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#F5B82E] to-[#E5A81E] text-[#080B10] font-heading font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-[#F5B82E]/30 hover:scale-105 active:scale-95 transition-all"
              >
                <Check className="w-4 h-4 stroke-[3]" />
                <span>CONFIRM &amp; GET VOUCHER</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
