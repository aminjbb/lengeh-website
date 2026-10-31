import React from 'react';
import { ArrowUpRight } from '@mynaui/icons-react';

interface CollaborationsSectionProps {
  onSelectCategory: (cat: string) => void;
}

export const CollaborationsSection: React.FC<CollaborationsSectionProps> = ({ onSelectCategory }) => {
  return (
    <section id="collaborations-spotlight" className="py-12 bg-[#171412] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-white/10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-amber-300 font-semibold block mb-1">
              Collaborative Capsules
            </span>
            <h2 className="font-serif-editorial text-2xl sm:text-3xl text-white font-normal">
              Needles & NFL Partnerships
            </h2>
          </div>
          <p className="text-xs text-neutral-400 mt-2 sm:mt-0 max-w-sm">
            Bridging Tokyo vintage Americana with iconic American sports heritage for Fall 2026.
          </p>
        </div>

        {/* 2-Column Editorial Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Needles Collaboration */}
          <div
            onClick={() => onSelectCategory('collaborations')}
            className="group relative h-[380px] sm:h-[420px] overflow-hidden bg-neutral-900 border border-white/10 cursor-pointer flex flex-col justify-end p-6 transition-all hover:border-white/30"
          >
            <img
              src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=80"
              alt="Kith x Needles Collaboration"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <span className="bg-white/10 backdrop-blur-xs text-[9px] uppercase tracking-widest px-2.5 py-1 border border-white/20 inline-block mb-2">
                Tokyo Heritage
              </span>
              <h3 className="font-serif-editorial text-xl sm:text-2xl text-white font-normal leading-tight">
                Kith x Needles
              </h3>
              <p className="text-xs text-neutral-300 mt-1 max-w-xs leading-relaxed">
                Kid mohair cardigans, custom papillon track silhouettes, and Vibram commando field boots.
              </p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs uppercase font-bold tracking-wider text-white group-hover:text-amber-300 transition-colors">
                <span>Explore Capsule</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>

          {/* NFL Capsule */}
          <div
            onClick={() => onSelectCategory('collaborations')}
            className="group relative h-[380px] sm:h-[420px] overflow-hidden bg-neutral-900 border border-white/10 cursor-pointer flex flex-col justify-end p-6 transition-all hover:border-white/30"
          >
            <img
              src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1000&q=80"
              alt="Kith for NFL Capsule"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <span className="bg-white/10 backdrop-blur-xs text-[9px] uppercase tracking-widest px-2.5 py-1 border border-white/20 inline-block mb-2">
                Official Partnership
              </span>
              <h3 className="font-serif-editorial text-xl sm:text-2xl text-white font-normal leading-tight">
                Kith for the NFL
              </h3>
              <p className="text-xs text-neutral-300 mt-1 max-w-xs leading-relaxed">
                Hand-tumbled pebbled leather sleeves, heavy melton wool varsity coats, and nostalgic stadium tailoring.
              </p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs uppercase font-bold tracking-wider text-white group-hover:text-amber-300 transition-colors">
                <span>Shop NFL Heritage</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

