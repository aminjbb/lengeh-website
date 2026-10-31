import React from 'react';
import womenHeroImg from '../../assets/women/women-hero.jpg';

interface WomenHeroSectionProps {
  onShopNowClick: () => void;
  onCloserLookClick: () => void;
}

export const WomenHeroSection: React.FC<WomenHeroSectionProps> = ({
  onShopNowClick,
  onCloserLookClick,
}) => {
  return (
    <section
      id="women-hero-section"
      className="relative w-full h-[100dvh] min-h-[640px] flex flex-col justify-end overflow-hidden"
    >
      {/* Full-Width Woman Editorial Photograph with Studio Setting */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none bg-[#46392a] flex items-center justify-center">
        {/* Full-Width Image */}
        <img
          src={womenHeroImg.src}
          alt="LENGEH Women Fall Editorial"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[center_35%] select-none pointer-events-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            if (!target.src.includes('/women/women-hero.jpg')) {
              target.src = '/women/women-hero.jpg';
            }
          }}
        />

        {/* Vignette Gradients for Legibility at Top & Bottom */}
        <div className="absolute inset-x-0 bottom-0 h-84 bg-gradient-to-t from-black/95 via-black/55 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/85 via-black/40 to-transparent pointer-events-none z-10" />
      </div>

      {/* Hero Content Overlay (Exact Same Title, Subtitle, and Buttons) */}
      <div className="relative z-20 w-full max-w-lg mx-auto px-5 pb-8 sm:pb-12 text-center flex flex-col items-center">
        {/* Title: LENGEH Fall Collection in YekanBakh Medium 20px */}
        <h2
          id="women-hero-title"
          className="font-tommy text-[20px] text-white font-medium tracking-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] mb-2 sm:mb-2.5"
          style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif", fontWeight: 500, fontSize: '20px', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
        >
          کالکشن پاییزه زنانه لنگه
        </h2>

        {/* Subtitle paragraph: YekanBakh Light 11px */}
        <p
          id="women-hero-description"
          className="font-tommy text-[11px] text-white font-light text-center leading-relaxed max-w-xs sm:max-w-md mx-auto mb-5 sm:mb-6 tracking-normal"
          style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif", fontWeight: 300, fontSize: '11px', textShadow: '0 1px 6px rgba(0,0,0,0.95)' }}
        >
          متولد از اشتیاق برای پوشاک روزمره بااصالت، پلی میان سادگی مینیمال و وقار چشم‌نواز.
        </p>

        {/* CTA Buttons: خرید آنلاین and مشاهده جزئیات */}
        <div className="grid grid-cols-2 gap-3 w-full max-w-xs sm:max-w-sm">
          <button
            id="women-hero-shop-now-btn"
            onClick={onShopNowClick}
            className="w-full border border-white/40 hover:border-white/70 bg-white/15 hover:bg-white/25 backdrop-blur-md active:scale-[0.98] transition-all duration-200 text-white font-normal font-tommy text-[12px] py-2 px-3 shadow-[0_4px_16px_rgba(0,0,0,0.25)] flex items-center justify-center cursor-pointer rounded-none"
            style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif", fontWeight: 400, fontSize: '12px' }}
          >
            خرید آنلاین
          </button>

          <button
            id="women-hero-closer-look-btn"
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

