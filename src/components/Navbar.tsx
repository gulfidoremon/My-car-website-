import React, { useState } from 'react';
import { Car, Phone, CalendarCheck, Heart, Menu, X, Shield, Sparkles, MessageCircle, Download, FileCode } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/mockData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBookingModal: () => void;
  onOpenMyBookings: () => void;
  bookingsCount: number;
  savedCount: number;
  onOpenSavedModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenBookingModal,
  onOpenMyBookings,
  bookingsCount,
  savedCount,
  onOpenSavedModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'beranda', label: 'Home' },
    { id: 'armada', label: 'A to Z Collection' },
    { id: 'harga', label: 'Pricing' },
    { id: 'tentang', label: 'About Us' },
    { id: 'kontak', label: 'Contact' }
  ];

  return (
    <header
      id="main-navbar"
      className="sticky top-0 z-40 bg-[#080B10]/95 backdrop-blur-md border-b border-[#171D27] transition-all"
    >
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#11161E] border-b border-[#1E2633] px-4 py-1.5 text-xs text-gray-400 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[#F5B82E]">
              <Sparkles className="w-3.5 h-3.5" />
              <strong className="text-white">Special Festive Offer:</strong> Flat 30% OFF with code <strong>INDIA30</strong>
            </span>
            <span className="text-gray-500">•</span>
            <span className="flex items-center gap-1 text-gray-300">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              Sanitized Fleet & 24/7 Roadside Assistance
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20car%20rental%20in%20India.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp: {COMPANY_CONTACT.phoneDisplay}</span>
            </a>
            <span className="text-gray-500">•</span>
            <a
              href={`tel:${COMPANY_CONTACT.phoneDisplay.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1 text-gray-300 hover:text-white"
            >
              <Phone className="w-3.5 h-3.5 text-[#F5B82E]" />
              <span>Call: {COMPANY_CONTACT.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <div
            onClick={() => {
              setActiveTab('beranda');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#F5B82E] to-[#D97706] flex items-center justify-center text-[#080B10] shadow-lg shadow-[#F5B82E]/20 group-hover:scale-105 transition-transform">
              <Car className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <span className="font-heading font-black text-xl tracking-tight text-white block">
                INDIA <span className="text-[#F5B82E]">CAR RENTAL</span>
              </span>
              <span className="text-[10px] uppercase font-semibold text-gray-400 tracking-wider block">
                Self-Drive & Chauffeur Services
              </span>
            </div>
          </div>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden md:flex items-center gap-1 bg-[#11161E]/80 border border-[#252E3D] px-2 py-1.5 rounded-2xl">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-tab-${link.id}`}
                  onClick={() => {
                    setActiveTab(link.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-[#F5B82E] text-[#080B10] shadow-md shadow-[#F5B82E]/20'
                      : 'text-gray-300 hover:text-white hover:bg-[#171D27]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* RIGHT ACTION BUTTONS */}
          <div className="hidden lg:flex items-center gap-3">
            {/* SAVED CARS BUTTON */}
            <button
              id="saved-cars-nav-btn"
              onClick={onOpenSavedModal}
              className="relative p-2.5 rounded-xl bg-[#11161E] hover:bg-[#171D27] text-gray-300 hover:text-white border border-[#252E3D] transition-colors"
              title="Saved Vehicles"
            >
              <Heart className="w-5 h-5 text-rose-400" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#F5B82E] text-[#080B10] text-[10px] font-bold flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>

            {/* DOWNLOAD WEBSITE HTML */}
            <a
              id="download-website-html-btn"
              href="/site.html"
              download="index.html"
              className="relative flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#11161E] hover:bg-[#171D27] text-gray-200 hover:text-white border border-[#252E3D] hover:border-[#F5B82E]/50 transition-colors text-xs font-semibold"
              title="Download HTML File (index.html)"
            >
              <FileCode className="w-4 h-4 text-[#F5B82E]" />
              <span>Download HTML</span>
            </a>

            {/* DOWNLOAD WEBSITE ZIP */}
            <a
              id="download-website-zip-btn"
              href="/car-rental-website.zip"
              download="car-rental-website.zip"
              className="relative flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#11161E] hover:bg-[#171D27] text-gray-200 hover:text-white border border-[#252E3D] hover:border-[#F5B82E]/50 transition-colors text-xs font-semibold"
              title="Download Entire Website Source Code (.ZIP)"
            >
              <Download className="w-4 h-4 text-[#F5B82E]" />
              <span>Download ZIP</span>
            </a>

            {/* MY BOOKINGS BUTTON */}
            <button
              id="my-bookings-nav-btn"
              onClick={onOpenMyBookings}
              className="relative flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#11161E] hover:bg-[#171D27] text-gray-200 hover:text-white border border-[#252E3D] transition-colors text-xs font-semibold"
            >
              <CalendarCheck className="w-4 h-4 text-[#F5B82E]" />
              <span>My Bookings</span>
              {bookingsCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-emerald-500 text-[#080B10] text-[10px] font-bold flex items-center justify-center">
                  {bookingsCount}
                </span>
              )}
            </button>

            {/* BOOK NOW PRIMARY CTA */}
            <button
              id="primary-book-now-nav"
              onClick={onOpenBookingModal}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F5B82E] to-[#E5A81E] text-[#080B10] font-heading font-black text-xs uppercase tracking-wider shadow-lg shadow-[#F5B82E]/25 hover:shadow-xl hover:shadow-[#F5B82E]/40 hover:brightness-105 active:scale-95 transition-all"
            >
              Book Now
            </button>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenSavedModal}
              className="p-2 rounded-xl bg-[#11161E] text-rose-400 border border-[#252E3D]"
            >
              <Heart className="w-5 h-5 fill-current" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#11161E] text-gray-300 hover:text-white border border-[#252E3D]"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0E131B] border-b border-[#252E3D] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-heading font-bold uppercase tracking-wider ${
                  activeTab === link.id
                    ? 'bg-[#F5B82E] text-[#080B10]'
                    : 'text-gray-300 hover:bg-[#171D27]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#252E3D] space-y-2">
            <a
              href="/site.html"
              download="index.html"
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#171D27] text-white text-xs font-bold border border-[#252E3D]"
            >
              <span className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-[#F5B82E]" />
                <span>Download HTML File</span>
              </span>
              <span className="text-gray-400 text-[10px]">HTML</span>
            </a>

            <a
              href="/car-rental-website.zip"
              download="car-rental-website.zip"
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#171D27] text-white text-xs font-bold border border-[#252E3D]"
            >
              <span className="flex items-center gap-2">
                <Download className="w-4 h-4 text-[#F5B82E]" />
                <span>Download Website (.ZIP)</span>
              </span>
              <span className="text-gray-400 text-[10px]">2 MB</span>
            </a>

            <button
              onClick={() => {
                onOpenMyBookings();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#171D27] text-white text-xs font-bold"
            >
              <span className="flex items-center gap-2">
                <CalendarCheck className="w-4 h-4 text-[#F5B82E]" />
                <span>My Bookings</span>
              </span>
              <span className="bg-[#F5B82E] text-[#080B10] px-2 py-0.5 rounded-full text-[10px]">
                {bookingsCount}
              </span>
            </button>

            <button
              onClick={() => {
                onOpenBookingModal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#F5B82E] to-[#E5A81E] text-[#080B10] font-heading font-black text-xs uppercase tracking-wider text-center shadow-lg shadow-[#F5B82E]/20"
            >
              Book A Car Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
