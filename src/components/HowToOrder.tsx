import React from 'react';
import { Car, Calendar, FileText, MessageCircle, CheckCircle } from 'lucide-react';
import { HOW_TO_ORDER_STEPS } from '../data/mockData';

export const HowToOrder: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'car':
        return <Car className="w-6 h-6 text-[#080B10]" />;
      case 'calendar':
        return <Calendar className="w-6 h-6 text-[#080B10]" />;
      case 'file-text':
        return <FileText className="w-6 h-6 text-[#080B10]" />;
      case 'message-circle':
        return <MessageCircle className="w-6 h-6 text-[#080B10]" />;
      case 'check-circle':
      default:
        return <CheckCircle className="w-6 h-6 text-[#080B10]" />;
    }
  };

  return (
    <section id="cara-order-section" className="py-16 bg-[#080B10] border-t border-[#171D27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5B82E]/10 border border-[#F5B82E]/30 text-[#F5B82E] text-xs font-bold uppercase tracking-widest">
            <span>SEAMLESS &amp; HASSLE-FREE BOOKING</span>
          </div>
          <h2
            id="how-to-order-title"
            className="text-3xl sm:text-4xl font-heading font-black text-white"
          >
            HOW IT WORKS
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Book your car in just 5 straightforward steps with instant confirmation and zero paperwork bureaucracy.
          </p>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#F5B82E]/20 via-[#F5B82E] to-[#F5B82E]/20 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10">
            {HOW_TO_ORDER_STEPS.map((stepItem) => (
              <div
                key={stepItem.step}
                id={`order-step-${stepItem.step}`}
                className="flex flex-col items-center text-center p-5 rounded-2xl bg-[#11161E] border border-[#252E3D] hover:border-[#F5B82E]/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Step Badge / Icon */}
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F5B82E] to-[#D97706] flex items-center justify-center shadow-lg shadow-[#F5B82E]/25 group-hover:scale-110 transition-transform">
                    {getStepIcon(stepItem.icon)}
                  </div>
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#080B10] border-2 border-[#F5B82E] text-[#F5B82E] text-xs font-heading font-extrabold flex items-center justify-center">
                    {stepItem.step}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base text-white group-hover:text-[#F5B82E] transition-colors mb-2">
                  {stepItem.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  "{stepItem.description}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
