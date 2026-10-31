import React from 'react';
import { HeroVisual } from './HeroVisual';
import { Product } from '../../types';

interface HeroSectionProps {
  onShopNowClick: () => void;
  onCloserLookClick: () => void;
  onQuickAdd: (product: Product, size: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onShopNowClick,
  onCloserLookClick,
  onQuickAdd,
}) => {
  return (
    <section
      id="hero-section"
      className="relative w-full h-[100dvh] min-h-[640px] flex flex-col justify-end overflow-hidden"
    >
      {/* Background with Exact Editorial Model & Studio Setting */}
      <HeroVisual onQuickAdd={onQuickAdd} onOpenCloserLook={onCloserLookClick} />

      {/* Hero Content Overlay (Text & Buttons matched to photo) */}
      <div className="relative z-20 w-full max-w-lg mx-auto px-5 pb-8 sm:pb-12 text-center flex flex-col items-center">
        {/* Title: LENGEH Fall Collection in YekanBakh Medium 20px */}
        <h1
          id="hero-title"
          className="font-tommy text-[20px] text-white font-medium tracking-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] mb-2 sm:mb-2.5"
          style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif", fontWeight: 500, fontSize: '20px', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
        >
          کالکشن پاییزه لنگه
        </h1>

        {/* Subtitle paragraph: YekanBakh Light 11px */}
        <p
          id="hero-description"
          className="font-tommy text-[11px] text-white font-light text-center leading-relaxed max-w-xs sm:max-w-md mx-auto mb-5 sm:mb-6 tracking-normal"
          style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif", fontWeight: 300, fontSize: '11px', textShadow: '0 1px 6px rgba(0,0,0,0.95)' }}
        >
          متولد از اشتیاق برای پوشاک روزمره بااصالت، پلی میان سادگی مینیمال و وقار چشم‌نواز.
        </p>

        {/* CTA Buttons: خرید آنلاین and مشاهده جزئیات (Glass Effect, Regular 12px, Sharp Corners) */}
        <div className="grid grid-cols-2 gap-3 w-full max-w-xs sm:max-w-sm">
          <button
            id="hero-shop-now-btn"
            onClick={onShopNowClick}
            className="w-full border border-white/40 hover:border-white/70 bg-white/15 hover:bg-white/25 backdrop-blur-md active:scale-[0.98] transition-all duration-200 text-white font-normal font-tommy text-[12px] py-2 px-3 shadow-[0_4px_16px_rgba(0,0,0,0.25)] flex items-center justify-center cursor-pointer rounded-none"
            style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif", fontWeight: 400, fontSize: '12px' }}
          >
            خرید آنلاین
          </button>

          <button
            id="hero-closer-look-btn"
            onClick={onCloserLookClick}
            className="w-full border border-white/40 hover:border-white/70 bg-white/15 hover:bg-white/25 backdrop-blur-md active:scale-[0.98] transition-all duration-200 text-white font-normal font-tommy text-[12px] py-2 px-3 shadow-[0_4px_16px_rgba(0,0,0,0.25)] flex items-center justify-center cursor-pointer rounded-none"
            style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif", fontWeight: 400, fontSize: '12px' }}
          >
            مشاهده جزئیات
          </button>
        </div>
      </div>
    </section>
  );
};

