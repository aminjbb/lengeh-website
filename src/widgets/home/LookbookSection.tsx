import React from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from '@mynaui/icons-react';
import { useLookbookSection } from './model/useLookbookSection';

interface LookbookSectionProps {
  onOpenCloserLook: () => void;
}

export const LookbookSection: React.FC<LookbookSectionProps> = ({ onOpenCloserLook }) => {
  const { activeIdx, currentLook, total, previous, next } = useLookbookSection();

  const handlePrev = () => {
    previous();
  };

  const handleNext = () => {
    next();
  };

  return (
    <section id="campaign-lookbook" className="py-14 bg-[#f8f6f4] border-t border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-semibold block mb-1">
            Editorial Lookbook
          </span>
          <h2 className="font-serif-editorial text-2xl sm:text-3xl text-neutral-900 font-normal">
            Fall 2026 Campaign
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-2">
            Shot by Austin Hargrave & Takashi Shibuya. Styled across New York and Tokyo.
          </p>
        </div>

        {/* Carousel / Feature Display */}
        <div className="relative max-w-4xl mx-auto bg-white border border-neutral-200 shadow-sm overflow-hidden flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative md:w-1/2 aspect-[3/4] bg-neutral-100 overflow-hidden">
            <img
              src={currentLook.image}
              alt={currentLook.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 bg-black/75 text-white text-[9px] uppercase tracking-widest px-2.5 py-1">
              {currentLook.season}
            </div>
          </div>

          {/* Look Details & Story */}
          <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-neutral-500 font-semibold mb-2">
                <span>{currentLook.title}</span>
                <span>•</span>
                <span>Model: {currentLook.model}</span>
              </div>

              <h3 className="font-serif-editorial text-xl sm:text-2xl text-neutral-900 font-normal leading-snug">
                Architectural Proportions & Elevated Flannels
              </h3>

              {currentLook.quote && (
                <blockquote className="mt-4 border-l-2 border-neutral-800 pl-3 italic text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  "{currentLook.quote}"
                </blockquote>
              )}

              <div className="mt-6 pt-4 border-t border-neutral-100 text-xs text-neutral-500">
                <span className="font-semibold text-neutral-800 block mb-1">Featured Items:</span>
                <p>Sheridan Blouson, Double-Pleated Trouser, Needles Field Boot, Woven Weekender</p>
              </div>
            </div>

            {/* Actions & Carousel Navigation */}
            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
              <button
                onClick={onOpenCloserLook}
                className="px-4 py-2 border border-black bg-black text-white hover:bg-neutral-800 text-xs uppercase font-bold tracking-wider transition-colors"
              >
                Inspect Ensemble
              </button>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Look"
                  className="p-2 border border-neutral-200 hover:border-black rounded-none transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs text-neutral-500 font-mono px-1">
                  0{activeIdx + 1} / 0{total}
                </span>
                <button
                  onClick={handleNext}
                  aria-label="Next Look"
                  className="p-2 border border-neutral-200 hover:border-black rounded-none transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

