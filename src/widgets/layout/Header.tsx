import React from 'react';
import { Menu, User, ShoppingBag, Search } from '@mynaui/icons-react';
import { Currency } from '../../types';
import { toPersianDigits } from '../../utils/persianNumbers';

interface HeaderProps {
  cartCount: number;
  onOpenMenu: () => void;
  onOpenCart: () => void;
  onOpenAccount: () => void;
  onOpenSearch: () => void;
  onNavigateHome?: () => void;
  isScrolled: boolean;
  isLightBackground?: boolean;
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenMenu,
  onOpenCart,
  onOpenAccount,
  onOpenSearch,
  onNavigateHome,
  isScrolled,
  isLightBackground = false,
}) => {
  const isDarkText = isLightBackground;

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isDarkText
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200/80 shadow-xs py-3 text-neutral-900'
          : isScrolled
          ? 'bg-black/85 backdrop-blur-md shadow-md py-3 text-white'
          : 'bg-gradient-to-b from-black/75 via-black/30 to-transparent py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Left/Right in RTL: Hamburger Menu & Search */}
        <div className="flex items-center gap-3">
          <button
            id="mobile-menu-toggle-btn"
            onClick={onOpenMenu}
            aria-label="باز کردن منوی ناوبری"
            className={`${isDarkText ? 'text-neutral-900 hover:text-black' : 'text-white hover:text-neutral-300'} transition-colors focus:outline-none flex items-center justify-center cursor-pointer`}
          >
            <Menu size={20} width={20} height={20} className="w-[20px] h-[20px] stroke-[1.75]" />
          </button>

          <button
            id="header-search-btn"
            onClick={onOpenSearch}
            aria-label="جستجو در کالکشن"
            className={`hidden sm:flex items-center ${isDarkText ? 'text-neutral-700 hover:text-black' : 'text-white/80 hover:text-white'} text-xs gap-1.5 transition-colors cursor-pointer`}
          >
            <Search size={20} width={20} height={20} className="w-[20px] h-[20px] stroke-[1.75]" />
            <span className="text-[12px] font-normal" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>جستجو</span>
          </button>
        </div>

        {/* Center: Lengeh Logo (One-third size: H=7.5px / ~60px wide matching Toteme luxury header) */}
        <div className="flex-1 flex justify-center items-center">
          <button
            type="button"
            id="lengeh-logo-link"
            onClick={onNavigateHome}
            aria-label="صفحه اصلی لنگه"
            className="inline-flex items-center justify-center transition-transform hover:scale-[1.05] active:scale-[0.96] cursor-pointer bg-transparent border-none p-0"
          >
            <img
              src={isDarkText ? '/Subtract-black.svg' : '/Subtract-white.svg'}
              alt="LENGEH"
              height={8}
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                if (isDarkText) {
                  target.src = '/Subtract-black.png';
                } else if (!target.src.includes('Subtract.png')) {
                  target.src = '/Subtract.png?v=original';
                }
              }}
              className="h-[7.5px] sm:h-[8px] w-auto object-contain block select-none"
              style={{
                height: '7.5px',
                maxHeight: '8px',
              }}
            />
          </button>
        </div>

        {/* Right/Left in RTL: Account and Shopping Bag (Exact 20x20 icons with 12px margin between them) */}
        <div className="flex items-center gap-[12px]">
          <button
            id="header-account-btn"
            onClick={onOpenAccount}
            aria-label="حساب کاربری"
            className={`${isDarkText ? 'text-neutral-900 hover:text-black' : 'text-white hover:text-neutral-300'} transition-colors focus:outline-none flex items-center justify-center cursor-pointer`}
          >
            <User size={20} width={20} height={20} className="w-[20px] h-[20px] stroke-[1.75]" />
          </button>

          <button
            id="header-cart-btn"
            onClick={onOpenCart}
            aria-label={`سبد خرید، ${cartCount} کالا`}
            className={`${isDarkText ? 'text-neutral-900 hover:text-black' : 'text-white hover:text-neutral-300'} transition-colors focus:outline-none relative group flex items-center justify-center cursor-pointer`}
          >
            <div className="relative flex items-center justify-center w-[20px] h-[20px]">
              <ShoppingBag size={20} width={20} height={20} className="w-[20px] h-[20px] stroke-[1.75]" />
              <span
                className={`absolute inset-0 flex items-center justify-center text-[8.5px] font-bold ${isDarkText ? 'text-neutral-900' : 'text-white'} pt-0.5 select-none pointer-events-none leading-none`}
                style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
              >
                {toPersianDigits(cartCount)}
              </span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

