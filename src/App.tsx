import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { FleetSection } from './components/FleetSection';
import { VehicleDetailModal } from './components/VehicleDetailModal';
import { BookingModal } from './components/BookingModal';
import { HowToOrder } from './components/HowToOrder';
import { Testimonials } from './components/Testimonials';
import { WhatsAppCTA } from './components/WhatsAppCTA';
import { FAQSection } from './components/FAQSection';
import { PricingView } from './components/PricingView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { MyBookingsModal } from './components/MyBookingsModal';
import { SavedVehiclesModal } from './components/SavedVehiclesModal';
import { LegalModal } from './components/LegalModal';
import { Footer } from './components/Footer';
import { Vehicle, Booking } from './types';
import { VEHICLES } from './data/mockData';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('beranda');

  // Selected vehicle for detail modal
  const [detailVehicle, setDetailVehicle] = useState<Vehicle | null>(null);

  // Booking modal state
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingVehicle, setBookingVehicle] = useState<Vehicle | null>(null);

  // Promo Code state
  const [promoCode, setPromoCode] = useState<string | null>(null);
  const [promoDiscount, setPromoDiscount] = useState<number>(0);

  // My Bookings & Saved Modals
  const [isMyBookingsOpen, setIsMyBookingsOpen] = useState(false);
  const [isSavedModalOpen, setIsSavedModalOpen] = useState(false);

  // Legal Modal
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Saved vehicles state (stored in localStorage)
  const [savedVehicles, setSavedVehicles] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('icr_saved_vehicles');
      return saved ? JSON.parse(saved) : ['innova-crysta', 'fortuner-gr'];
    } catch {
      return ['innova-crysta', 'fortuner-gr'];
    }
  });

  // User Bookings state (stored in localStorage)
  const [bookings, setBookings] = useState<Booking[]>(() => {
    try {
      const stored = localStorage.getItem('icr_user_bookings');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Persist saved vehicles
  useEffect(() => {
    try {
      localStorage.setItem('icr_saved_vehicles', JSON.stringify(savedVehicles));
    } catch (e) {
      console.error(e);
    }
  }, [savedVehicles]);

  // Persist bookings
  useEffect(() => {
    try {
      localStorage.setItem('icr_user_bookings', JSON.stringify(bookings));
    } catch (e) {
      console.error(e);
    }
  }, [bookings]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // Toggle favorite
  const handleToggleSave = (vehicleId: string) => {
    setSavedVehicles((prev) => {
      const exists = prev.includes(vehicleId);
      const updated = exists ? prev.filter((id) => id !== vehicleId) : [...prev, vehicleId];
      showToast(exists ? 'Removed from saved vehicles' : 'Vehicle saved to your favorites!');
      return updated;
    });
  };

  // Claim Promo
  const handleClaimPromo = (code: string, discount: number) => {
    setPromoCode(code);
    setPromoDiscount(discount);
    showToast(`Festive code ${code} activated! Flat ${discount}% discount applied across all vehicles.`);
  };

  // Hero Search trigger
  const handleHeroSearch = (params: { location: string; pickupDate: string; returnDate: string; rentalType: 'self' | 'driver' }) => {
    const armadaEl = document.getElementById('armada-section');
    if (armadaEl) {
      armadaEl.scrollIntoView({ behavior: 'smooth' });
    }
    showToast(`Showing available vehicles for ${params.location}`);
  };

  // Direct Book Now
  const handleBookNow = (vehicle: Vehicle, durationDays?: number) => {
    setBookingVehicle(vehicle);
    setDetailVehicle(null);
    setIsBookingModalOpen(true);
  };

  // New Booking completion handler
  const handleBookingConfirmed = (newBooking: Booking) => {
    setBookings((prev) => [newBooking, ...prev]);
    showToast(`Booking ${newBooking.id} registered! Sending details to WhatsApp.`);
  };

  // Cancel booking
  const handleCancelBooking = (bookingId: string) => {
    setBookings((prev) => prev.filter((b) => b.id !== bookingId));
    showToast('Reservation canceled successfully.');
  };

  return (
    <div className="min-h-screen bg-[#080B10] text-[#F3F4F6] flex flex-col font-sans selection:bg-[#F5B82E] selection:text-[#080B10]">
      {/* GLOBAL TOAST ALERT */}
      {toastMessage && (
        <div
          id="global-toast-notification"
          className="fixed bottom-6 right-6 z-50 bg-[#171D27] border border-[#F5B82E] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300"
        >
          <CheckCircle2 className="w-5 h-5 text-[#F5B82E] shrink-0" />
          <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* NAVBAR */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBookingModal={() => {
          setBookingVehicle(null);
          setIsBookingModalOpen(true);
        }}
        onOpenMyBookings={() => setIsMyBookingsOpen(true)}
        bookingsCount={bookings.length}
        savedCount={savedVehicles.length}
        onOpenSavedModal={() => setIsSavedModalOpen(true)}
      />

      {/* MAIN VIEW ROUTING / CONTENT */}
      <main className="flex-1">
        {activeTab === 'beranda' && (
          <>
            {/* MINIMAL & CLEAN HERO WITH SPOTLIGHT ON A, J, AND L COLLECTIONS */}
            <Hero
              onSearch={handleHeroSearch}
              onExploreFleet={() => {
                const armadaEl = document.getElementById('armada-section');
                if (armadaEl) armadaEl.scrollIntoView({ behavior: 'smooth' });
              }}
              onBookVehicle={handleBookNow}
              onSelectVehicle={(vehicle) => setDetailVehicle(vehicle)}
            />

            {/* MINIMAL TRUST & VERIFICATION STRIP */}
            <TrustStats />

            {/* A TO Z CAR COLLECTION (Alphabetical filters & specifications) */}
            <FleetSection
              onSelectVehicle={(vehicle) => setDetailVehicle(vehicle)}
              onBookNow={handleBookNow}
              savedVehicles={savedVehicles}
              onToggleSave={handleToggleSave}
              promoAppliedCode={promoCode}
              promoDiscountPercent={promoDiscount}
            />
          </>
        )}

        {/* DEDICATED FLEET TAB */}
        {activeTab === 'armada' && (
          <div className="pt-8 pb-12">
            <FleetSection
              onSelectVehicle={(vehicle) => setDetailVehicle(vehicle)}
              onBookNow={handleBookNow}
              savedVehicles={savedVehicles}
              onToggleSave={handleToggleSave}
              promoAppliedCode={promoCode}
              promoDiscountPercent={promoDiscount}
            />
            <HowToOrder />
            <WhatsAppCTA />
          </div>
        )}

        {/* DEDICATED PRICING TAB */}
        {activeTab === 'harga' && (
          <div className="pt-8 pb-12">
            <PricingView onBookVehicle={handleBookNow} />
            <FAQSection />
            <WhatsAppCTA />
          </div>
        )}

        {/* DEDICATED ABOUT US TAB */}
        {activeTab === 'tentang' && (
          <div className="pt-8 pb-12">
            <AboutView />
            <Testimonials />
            <WhatsAppCTA />
          </div>
        )}

        {/* DEDICATED CONTACT TAB */}
        {activeTab === 'kontak' && (
          <div className="pt-8 pb-12">
            <ContactView />
            <FAQSection />
          </div>
        )}
      </main>

      {/* VEHICLE DETAIL MODAL */}
      <VehicleDetailModal
        vehicle={detailVehicle}
        onClose={() => setDetailVehicle(null)}
        onBookNow={handleBookNow}
        promoDiscountPercent={promoDiscount}
      />

      {/* 4-STEP BOOKING & CHECKOUT MODAL */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preSelectedVehicle={bookingVehicle}
        onBookingConfirmed={handleBookingConfirmed}
        promoAppliedCode={promoCode}
        promoDiscountPercent={promoDiscount}
      />

      {/* MY BOOKINGS MODAL */}
      <MyBookingsModal
        isOpen={isMyBookingsOpen}
        onClose={() => setIsMyBookingsOpen(false)}
        bookings={bookings}
        onCancelBooking={handleCancelBooking}
      />

      {/* SAVED VEHICLES MODAL */}
      <SavedVehiclesModal
        isOpen={isSavedModalOpen}
        onClose={() => setIsSavedModalOpen(false)}
        savedIds={savedVehicles}
        onRemove={handleToggleSave}
        onBookNow={handleBookNow}
      />

      {/* LEGAL (TERMS & PRIVACY) MODAL */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* FOOTER */}
      <Footer
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenLegalModal={(type) => setLegalModalType(type)}
      />
    </div>
  );
}
