import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, Building, Sparkles } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/mockData';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div id="contact-page-view" className="py-12 bg-[#080B10] min-h-screen text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F5B82E]/10 border border-[#F5B82E]/30 text-[#F5B82E] text-xs font-bold uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>24/7 NATIONWIDE RESERVATIONS DESK</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-black text-white">
            CONTACT US
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Our customer service specialists are ready around the clock to assist you with airport transfers, outstation packages, and corporate bookings across India.
          </p>
        </div>

        {/* MAIN CONTACT CARDS & FORM GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT: CONTACT DETAILS & BRANCHES */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#11161E] border border-[#252E3D] rounded-3xl p-6 sm:p-8 space-y-6">
              <h2 className="font-heading font-bold text-xl text-white">
                Contact Details
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#171D27] border border-[#252E3D] flex items-center justify-center shrink-0 text-[#F5B82E]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400">Phone &amp; WhatsApp (+91)</span>
                    <a
                      href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-white hover:text-[#F5B82E] transition-colors"
                    >
                      {COMPANY_CONTACT.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#171D27] border border-[#252E3D] flex items-center justify-center shrink-0 text-[#F5B82E]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400">Official Email</span>
                    <a
                      href={`mailto:${COMPANY_CONTACT.email}`}
                      className="font-bold text-white hover:text-[#F5B82E] transition-colors"
                    >
                      {COMPANY_CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#171D27] border border-[#252E3D] flex items-center justify-center shrink-0 text-[#F5B82E]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400">Headquarters</span>
                    <p className="font-medium text-white">
                      {COMPANY_CONTACT.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#171D27] border border-[#252E3D] flex items-center justify-center shrink-0 text-[#F5B82E]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400">Operating Hours</span>
                    <p className="font-medium text-white">
                      {COMPANY_CONTACT.workingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* BRANCHES LIST */}
            <div className="bg-[#11161E] border border-[#252E3D] rounded-3xl p-6 space-y-4">
              <h3 className="font-heading font-bold text-base text-white flex items-center gap-2">
                <Building className="w-4 h-4 text-[#F5B82E]" />
                <span>Our Major Airport &amp; City Hubs</span>
              </h3>
              <div className="space-y-3">
                {COMPANY_CONTACT.branches.map((b, i) => (
                  <div key={i} className="p-3 bg-[#080B10] rounded-xl border border-[#252E3D] text-xs">
                    <span className="font-bold text-[#F5B82E] block">{b.city}</span>
                    <span className="text-gray-400">{b.address}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: INTERACTIVE CONTACT FORM */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#11161E] border border-[#252E3D] rounded-3xl p-6 sm:p-10 shadow-2xl">
              <div className="mb-6 space-y-1">
                <h2 className="font-heading font-bold text-2xl text-white">
                  Send Us a Direct Inquiry
                </h2>
                <p className="text-xs sm:text-sm text-gray-400">
                  Fill out this form and our reservations coordinator will reply on your WhatsApp or phone within minutes.
                </p>
              </div>

              {submitted ? (
                <div
                  id="contact-form-success"
                  className="bg-[#080B10] border border-emerald-500/50 rounded-2xl p-8 text-center space-y-4 animate-in fade-in"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white">
                    Inquiry Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto">
                    Thank you, {formData.name}. Our representative will contact you shortly at {formData.phone} or {formData.email}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#F5B82E] text-[#080B10] text-xs font-bold font-heading hover:brightness-105"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1.5 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#080B10] border border-[#252E3D] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#F5B82E]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1.5 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="rajesh@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#080B10] border border-[#252E3D] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#F5B82E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-300 mb-1.5 uppercase tracking-wider">
                        Phone / WhatsApp (+91) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#080B10] border border-[#252E3D] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#F5B82E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1.5 uppercase tracking-wider">
                      Rental Details or Questions
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Specify your preferred car, travel dates, pickup city/airport, or custom outstation requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#080B10] border border-[#252E3D] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#F5B82E]"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-form-submit-btn"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#F5B82E] to-[#E5A81E] text-[#080B10] font-heading font-extrabold text-sm tracking-wide shadow-xl shadow-[#F5B82E]/25 hover:shadow-2xl hover:shadow-[#F5B82E]/40 hover:brightness-105 active:scale-95 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending Request...' : 'Send Inquiry Now'}</span>
                  </button>
                </form>
              )}
            </div>

            {/* MAP REPRESENTATION */}
            <div className="bg-[#11161E] border border-[#252E3D] rounded-3xl p-5 space-y-3">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1.5 text-white font-semibold">
                  <MapPin className="w-4 h-4 text-[#F5B82E]" />
                  Headquarters &amp; Central Fleet Dispatch Hub
                </span>
                <span className="text-[#F5B82E]">Open 24/7</span>
              </div>
              <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden bg-[#080B10] border border-[#252E3D] flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
                  alt="Location Map India"
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-transparent to-black/30" />
                <div className="relative z-10 text-center space-y-2 p-4">
                  <div className="inline-flex p-3 rounded-full bg-[#F5B82E] text-[#080B10] shadow-lg animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="font-heading font-bold text-white text-sm">
                    {COMPANY_CONTACT.address}
                  </div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-1.5 rounded-lg bg-[#11161E] border border-[#252E3D] text-[11px] text-[#F5B82E] font-bold hover:bg-[#171D27]"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
