import React from 'react';
import { ShieldCheck, Award, HeartHandshake, CheckCircle2, Wrench, Clock, Users } from 'lucide-react';
import { TrustStats } from './TrustStats';

export const AboutView: React.FC = () => {
  return (
    <div id="about-page-view" className="py-12 bg-[#080B10] min-h-screen text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* STORY HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5B82E]/10 border border-[#F5B82E]/30 text-[#F5B82E] text-xs font-bold uppercase tracking-widest">
              <Award className="w-3.5 h-3.5" />
              <span>ABOUT INDIA CAR RENTAL</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-heading font-black text-white leading-tight">
              OVER A DECADE OF <span className="text-gold-gradient">PREMIER MOBILITY</span> ACROSS INDIA
            </h1>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              Established in Mumbai in 2014, India Car Rental has grown from a boutique fleet of executive sedans into one of the country's most trusted premium car rental providers, boasting over 150+ showroom-condition vehicles stationed across key airport hubs and metro business districts.
            </p>

            <p className="text-sm text-gray-400 leading-relaxed">
              We believe great journeys begin with reliable, immaculately clean vehicles and courteous, hassle-free customer care. Whether you are traveling for corporate summits in Mumbai, weekend road trips to the beaches of Goa, family pilgrimages, or Himalayan highway expeditions, we ensure your ride is smooth and dependable.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-[#11161E] border border-[#252E3D] p-4 rounded-xl">
                <h4 className="font-heading font-bold text-white text-base flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#F5B82E]" />
                  <span>Our Vision</span>
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  To become India’s most reliable, transparent, and technology-driven mobility and car rental brand.
                </p>
              </div>

              <div className="bg-[#11161E] border border-[#252E3D] p-4 rounded-xl">
                <h4 className="font-heading font-bold text-white text-base flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-[#F5B82E]" />
                  <span>Our Mission</span>
                </h4>
                <p className="text-xs text-gray-400 mt-1">
                  Delivering top-tier sanitized fleets, transparent fair pricing, rapid 24/7 support, and respectful verified chauffeurs.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#252E3D] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80"
                alt="Car Rental Fleet India"
                className="w-full h-[400px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-[#080B10]/85 backdrop-blur-md p-4 rounded-2xl border border-[#252E3D]">
                <div className="text-xs text-[#F5B82E] font-bold uppercase">Certified Quality Standards</div>
                <div className="text-sm font-heading font-bold text-white">
                  Every vehicle passes a strict 50-point mechanical and hygiene protocol before dispatch.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TRUST STATS EMBED */}
        <div className="border-y border-[#171D27] py-6">
          <TrustStats />
        </div>

        {/* 50-POINT CHECKLIST */}
        <div className="bg-[#11161E] border border-[#252E3D] rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1 text-xs font-bold text-[#F5B82E] uppercase tracking-wider">
              <Wrench className="w-4 h-4" />
              <span>VEHICLE SAFETY ASSURANCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-white">
              Why Our Fleet Is Always in Prime Condition
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Each car delivered to your doorstep undergoes rigorous technical testing and deep sanitization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#171D27] p-6 rounded-2xl border border-[#252E3D] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#080B10] text-[#F5B82E] flex items-center justify-center font-heading font-black">
                01
              </div>
              <h3 className="font-heading font-bold text-white text-base">
                50-Point Technical Diagnostic
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Comprehensive inspection of disc brakes, tire tread depth, engine fluids (synthetic oil and coolant), suspension dampers, and lighting electronics.
              </p>
            </div>

            <div className="bg-[#171D27] p-6 rounded-2xl border border-[#252E3D] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#080B10] text-[#F5B82E] flex items-center justify-center font-heading font-black">
                02
              </div>
              <h3 className="font-heading font-bold text-white text-base">
                Deep Clean &amp; Antibacterial Fogging
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Cabins are vacuumed thoroughly, leather upholstery is conditioned, and air ducts are disinfected with hospital-grade non-toxic atomization.
              </p>
            </div>

            <div className="bg-[#171D27] p-6 rounded-2xl border border-[#252E3D] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#080B10] text-[#F5B82E] flex items-center justify-center font-heading font-black">
                03
              </div>
              <h3 className="font-heading font-bold text-white text-base">
                Verified &amp; Courteous Chauffeurs
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                All drivers hold commercial licenses with 5+ years of highway experience, speak English and Hindi, and observe respectful etiquette.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
