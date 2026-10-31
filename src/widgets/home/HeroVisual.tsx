import React from 'react';
import type { Product } from '../../types';

interface HeroVisualProps {
  onQuickAdd?: (product: Product, size: string) => void;
  onOpenCloserLook?: () => void;
}

export const HeroVisual: React.FC<HeroVisualProps> = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none bg-[#524233] flex items-center justify-center">
      {/* Studio Backdrop Blend for Wider Desktops */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: `
            radial-gradient(ellipse at 50% 40%, rgba(109, 92, 76, 0.65) 0%, rgba(86, 70, 55, 0.95) 60%, rgba(46, 36, 28, 1) 100%)
          `,
        }}
      />

      {/* Main Campaign Editorial Image Container */}
      <div className="relative h-full w-full max-w-[620px] aspect-[9/16] flex items-center justify-center pointer-events-auto">
        {/* Campaign Model Photograph */}
        <img
          src="/Homepage_Mobile_137d3140-2bc8-427c-8786-a93a5532047a.jpg"
          alt="Kith Fall 2026 Editorial Model"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top select-none pointer-events-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)]"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            if (!target.src.includes('hero-campaign.jpg')) {
              target.src = '/hero-campaign.jpg';
            }
          }}
        />
      </div>

      {/* Vignette Gradients for Legibility at Top & Bottom */}
      <div className="absolute inset-x-0 bottom-0 h-84 bg-gradient-to-t from-black/95 via-black/55 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/85 via-black/40 to-transparent pointer-events-none z-10" />
    </div>
  );
};

