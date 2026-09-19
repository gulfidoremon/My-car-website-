import React from 'react';
import { MessageCircle, PhoneCall, Clock, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/mockData';

export const WhatsAppCTA: React.FC = () => {
  const whatsappUrl = `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=Hello%2C%20I%20would%20like%20to%20rent%20a%20car%20in%20India.%20Please%20share%20availability%20and%20rates.`;

  return (
    <section id="whatsapp-cta-section" className="py-12 bg-[#080B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#171D27] via-[#11161E] to-[#1F180A] border-2 border-[#F5B82E]/50 shadow-2xl p-6 sm:p-10 lg:p-12">
          {/* Subtle gold glow */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#F5B82E]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left copy */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
                <span>CUSTOMER SUPPORT ACTIVE 24/7 (INDIA)</span>
              </div>

              <h2
                id="whatsapp-cta-title"
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white leading-tight"
              >
                NEED A CAR RIGHT NOW?
              </h2>

              <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                Connect with our reservation desk on WhatsApp for rapid 2-minute booking vouchers, custom interstate route quotes, corporate packages, and urgent doorstep vehicle delivery across India.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 pt-1">
                <span className="flex items-center gap-1.5 text-gray-300">
                  <Clock className="w-4 h-4 text-[#F5B82E]" />
                  Average response under 2 minutes
                </span>
                <span className="flex items-center gap-1.5 text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-[#F5B82E]" />
                  Simple KYC &amp; Zero hidden paperwork
                </span>
              </div>
            </div>

            {/* Right button */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch lg:items-end justify-center gap-3">
              <a
                id="whatsapp-cta-button"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-heading font-black text-base tracking-wide shadow-xl shadow-[#25D366]/25 hover:shadow-2xl hover:shadow-[#25D366]/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 text-center"
              >
                <MessageCircle className="w-6 h-6 fill-white stroke-none" />
                <span>Chat on WhatsApp (+91)</span>
              </a>

              <a
                href={`tel:${COMPANY_CONTACT.phoneDisplay.replace(/[^0-9+]/g, '')}`}
                className="px-6 py-3 rounded-xl bg-[#11161E] hover:bg-[#171D27] text-gray-300 hover:text-white border border-[#252E3D] text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#F5B82E]" />
                <span>Direct Call: {COMPANY_CONTACT.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
