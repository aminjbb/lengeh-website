import React, { useState } from 'react';
import { Product } from '../../../types';

import { toPersianDigits, formatTomanPrice } from '../../../utils/persianNumbers';

interface GarderobProductCardProps {
  product: Product;
  onClick?: (product: Product) => void;
}

export const GarderobProductCard: React.FC<GarderobProductCardProps> = ({
  product,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id={`product-card-${product.id}`}
      onClick={() => onClick && onClick(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer flex flex-col select-none transition-all duration-300"
    >
      {/* 1. Studio Product Image Area */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#ececec] flex items-center justify-center">
        <img
          src={isHovered && product.secondaryImage ? product.secondaryImage : product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />

        {/* Minimal accent line at bottom edge */}
        <div
          className="absolute bottom-0 left-0 h-[2px] w-8 sm:w-12 bg-black z-10 transition-all duration-300 group-hover:w-16"
          aria-hidden="true"
        />
      </div>

      {/* 2. Product Information Under Image (Persian name + Toman price only) */}
      <div className="pt-3 pb-1 text-center flex flex-col items-center">
        {/* Line 1: Only Persian Product Name */}
        <h3
          className="text-[13px] sm:text-[14px] font-normal text-[#171717] tracking-tight line-clamp-1 max-w-full px-1"
          style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
          title={product.name}
        >
          {product.name}
        </h3>

        {/* Line 2: Price in Tomans */}
        <div
          className="text-[11px] sm:text-[12px] font-normal text-[#737373] mt-0.5 tracking-tight"
          style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
        >
          {formatTomanPrice(product.price)}
        </div>
      </div>
    </div>
  );
};



