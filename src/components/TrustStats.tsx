import React from 'react';
import { ShieldCheck, Users, Car, Headphones } from 'lucide-react';
import { TRUST_STATS } from '../data/mockData';

export const TrustStats: React.FC = () => {
  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'shield':
        return <ShieldCheck className="w-5 h-5 text-[#F5B82E]" />;
      case 'users':
        return <Users className="w-5 h-5 text-[#F5B82E]" />;
      case 'car':
        return <Car className="w-5 h-5 text-[#F5B82E]" />;
      case 'support':
      default:
        return <Headphones className="w-5 h-5 text-[#F5B82E]" />;
    }
  };

  return (
    <section id="trust-stats-section" className="py-8 bg-[#080B10] border-y border-[#171D27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#1E2633]">
          {TRUST_STATS.map((stat, idx) => (
            <div
              key={stat.id}
              id={`stat-card-${stat.id}`}
              className={`flex items-center gap-4 ${idx > 0 ? 'pt-4 lg:pt-0 lg:pl-8' : ''}`}
            >
              <div className="p-3 rounded-2xl bg-[#11161E] border border-[#252E3D] shrink-0">
                {getStatIcon(stat.icon)}
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-heading font-black text-white">
                    {stat.number}
                  </span>
                  <span className="text-xs font-bold text-[#F5B82E]">
                    {stat.unit}
                  </span>
                </div>
                <h4 className="text-xs font-heading font-bold text-gray-200 uppercase tracking-wider">
                  {stat.title}
                </h4>
                <p className="text-[11px] text-gray-400 truncate max-w-[180px]">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
