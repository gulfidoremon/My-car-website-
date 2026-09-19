import React from 'react';
import { Car, Phone, Mail, MapPin, MessageCircle, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/mockData';

interface FooterProps {
  onNavigate: (tabId: string) => void;
  onOpenLegalModal: (type: 'terms' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegalModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#05070A] border-t border-[#171D27] text-gray-400 text-xs">
      {/* MAIN FOOTER COLUMNS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: BRAND & CONTACT */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#F5B82E] to-[#D97706] flex items-center justify-center text-[#080B10] shadow-md shadow-[#F5B82E]/20">
                <Car className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-heading font-black text-xl text-white tracking-tight block">
                  INDIA <span className="text-[#F5B82E]">CAR RENTAL</span>
                </span>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">
                  Self-Drive &amp; Chauffeur Mobility
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              India’s premier automotive rental service. Providing high-standard, sanitized, fully insured vehicles for corporate executives, holiday makers, and weddings across major airports and metro hubs.
            </p>

            <div className="space-y-2 pt-1 text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F5B82E] shrink-0 mt-0.5" />
                <span>{COMPANY_CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F5B82E] shrink-0" />
                <a href={`tel:${COMPANY_CONTACT.phoneDisplay.replace(/[^0-9+]/g, '')}`} className="hover:text-white">
                  {COMPANY_CONTACT.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 text-emerald-400 font-semibold"
                >
                  WhatsApp: {COMPANY_CONTACT.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F5B82E] shrink-0" />
                <a href={`mailto:${COMPANY_CONTACT.email}`} className="hover:text-white">
                  {COMPANY_CONTACT.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: QUICK NAVIGATION */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('beranda')} className="hover:text-[#F5B82E] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('armada')} className="hover:text-[#F5B82E] transition-colors">
                  Our Fleet
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('harga')} className="hover:text-[#F5B82E] transition-colors">
                  Pricing Plans
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tentang')} className="hover:text-[#F5B82E] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('kontak')} className="hover:text-[#F5B82E] transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: FLEET CATEGORIES */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Fleet Types
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('armada')} className="hover:text-[#F5B82E] transition-colors">
                  Family MPVs (Innova, Ertiga)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('armada')} className="hover:text-[#F5B82E] transition-colors">
                  SUVs &amp; 4x4 (Fortuner, Scorpio-N)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('armada')} className="hover:text-[#F5B82E] transition-colors">
                  Compact Sedans (Dzire)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('armada')} className="hover:text-[#F5B82E] transition-colors">
                  Ultra Luxury (Toyota Vellfire)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('armada')} className="hover:text-[#F5B82E] transition-colors">
                  Compact SUVs (Creta Turbo)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: POLICIES & SUPPORT */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Legal &amp; Support
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onOpenLegalModal('terms')} className="hover:text-[#F5B82E] transition-colors">
                  Rental Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegalModal('privacy')} className="hover:text-[#F5B82E] transition-colors">
                  Privacy &amp; Data Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('beranda');
                    setTimeout(() => {
                      document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-[#F5B82E] transition-colors"
                >
                  FAQs
                </button>
              </li>
              <li>
                <a
                  href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=Help%20Desk%3A%20I%20have%20an%20inquiry`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  24/7 Roadside Assistance
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT BAR */}
      <div className="border-t border-[#171D27] py-6 bg-[#030508]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-[11px] text-center sm:text-left">
            &copy; {new Date().getFullYear()} India Car Rental (ICR Mobility Services Pvt. Ltd.). All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[11px] text-gray-500">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F5B82E]" />
              Secured 256-Bit SSL Encrypted
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#11161E] hover:bg-[#171D27] text-gray-400 hover:text-white border border-[#252E3D] transition-colors flex items-center gap-1 text-xs"
              title="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
