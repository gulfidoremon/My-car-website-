import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/mockData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-16 bg-[#080B10]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5B82E]/10 border border-[#F5B82E]/30 text-[#F5B82E] text-xs font-bold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>HELP &amp; INFORMATION DESK</span>
          </div>
          <h2
            id="faq-section-title"
            className="text-3xl sm:text-4xl font-heading font-black text-white"
          >
            FREQUENTLY ASKED QUESTIONS (FAQ)
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Everything you need to know regarding self-drive documentation, security deposits, doorstep delivery, and rental terms across India.
          </p>
        </div>

        {/* ACCORDION LIST */}
        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="bg-[#11161E] border border-[#252E3D] hover:border-[#F5B82E]/40 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-sm sm:text-base text-white hover:text-[#F5B82E] transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-[#171D27] flex items-center justify-center shrink-0 text-gray-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#F5B82E]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-[#1E2633] bg-[#0E131B]/50 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
