import React, { useState, useEffect, useMemo } from 'react';
import { X, Search, ChevronLeft, Sparkles } from 'lucide-react';
import { Currency, Product } from '../../types';
import { ALL_PRODUCTS } from '../../data/mockData';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (cat: string) => void;
  onNavigateToProducts?: (filter: { gender?: 'all' | 'men' | 'women'; collection?: string; badge?: string }) => void;
  onOpenCloserLook: () => void;
  currency?: Currency;
  onCurrencyChange?: (c: Currency) => void;
  onSelectProduct?: (product: Product) => void;
  onNavigateToAbout?: () => void;
  onNavigateToContact?: () => void;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  onSelectCategory,
  onNavigateToProducts,
  onOpenCloserLook,
  onSelectProduct,
  onNavigateToAbout,
  onNavigateToContact,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [genderTab, setGenderTab] = useState<'womens' | 'men'>('womens');

  // Lock body scroll when full-width menu is open and support ESC
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery('');
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return ALL_PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.colorway.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  if (!isOpen) return null;

  const handleNav = (catId: string) => {
    if (onNavigateToProducts) {
      if (catId === 'women') {
        onNavigateToProducts({ gender: 'women', collection: 'all' });
      } else if (catId === 'all') {
        onNavigateToProducts({ gender: 'men', collection: 'all' });
      } else if (catId === 'collection-shibui') {
        onNavigateToProducts({
          gender: genderTab === 'womens' ? 'women' : 'men',
          collection: 'SHIBUI',
        });
      } else if (catId === 'collection-outspoken') {
        onNavigateToProducts({
          gender: genderTab === 'womens' ? 'women' : 'men',
          collection: 'OUTSPOKEN',
        });
      } else {
        onNavigateToProducts({ gender: genderTab === 'womens' ? 'women' : 'men' });
      }
    } else {
      onSelectCategory(catId);
    }
    onClose();
  };

  const handleProductClick = (product: Product) => {
    if (onSelectProduct) {
      onSelectProduct(product);
    }
    onClose();
  };

  // Women's Menu Items exactly as requested:
  // 1. مشاهده تمام محصولات زنانه
  // 2. کالکشن SHIBUI
  // 3. کالکشن OUTSPOKEN
  const womensMenuItems = [
    { label: 'مشاهده تمام محصولات زنانه', id: 'women' },
    { label: 'کالکشن SHIBUI', id: 'collection-shibui' },
    { label: 'کالکشن OUTSPOKEN', id: 'collection-outspoken' },
  ];

  // Men's Menu Items exactly as requested:
  // 1. مشاهده تمام محصولات مردانه
  // 2. کالکشن SHIBUI
  // 3. کالکشن OUTSPOKEN
  const mensMenuItems = [
    { label: 'مشاهده تمام محصولات مردانه', id: 'all' },
    { label: 'کالکشن SHIBUI', id: 'collection-shibui' },
    { label: 'کالکشن OUTSPOKEN', id: 'collection-outspoken' },
  ];

  const currentMenuItems = genderTab === 'womens' ? womensMenuItems : mensMenuItems;

  // The product showcase row:
  // 1. تیشرت یونیسکس FUJI
  // 2. دورس زنانه DEFLATED
  // 3. هودی اورسایز KURA (1/3 visible for preview peek)
  // 4. پالتو پشمی ARCH
  const featuredRowProducts: Product[] = [
    {
      id: 'lengeh-fuji-unisex-tee',
      name: 'تیشرت یونیسکس FUJI',
      subtitle: 'کالکشن SHIBUI',
      category: 'shirting',
      price: 185,
      colorway: 'سفید گچی / مشکی کربنی',
      image: '/looks/look-4.jpg',
      secondaryImage: '/looks/look-alt-3.jpg',
      badge: 'جدید',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      description: 'تیشرت یونیسکس با سیلوئت آزاد و افتاده (Oversized) دوخته‌شده از پنبه خالص گرماژ سنگین ۳۲۰ گرم با بافت سنتی ژاپنی. الهام‌گرفته از مینیمالیسم کوه فوجی و زیبایی‌شناسی Shibui.',
      details: [
        'پنبه سنگین ارگانیک ۳۲۰ گرم با بافت فشرده',
        'یقه گرد کشبافت دوتایی مقاوم در برابر دفرمه شدن',
        'برش سرشانه افتاده یونیسکس مناسب خانم‌ها و آقایان',
        'چاپ دست‌ساز مینیمال نشان لنگه در پشت یقه',
        'تولید محدود در توکیو، ژاپن'
      ],
      fabric: '۱۰۰٪ پنبه ارگانیک ژاپنی',
    },
    {
      id: 'lengeh-deflated-sweatshirt',
      name: 'دورس زنانه DEFLATED',
      subtitle: 'کالکشن OUTSPOKEN',
      category: 'knitwear',
      price: 260,
      colorway: 'سرمه‌ای اقیانوسی عمیق',
      image: '/women/look-4.jpg',
      secondaryImage: '/women/look-3.jpg',
      badge: 'جدید',
      sizes: ['XS', 'S', 'M', 'L'],
      description: 'دورس ساختاریافته زنانه با فرم منحصر‌به‌فرد دوانفلاته‌شده در لبه‌ها و مچ دست. دوخته‌شده از ترکیب پنبه براش فرانسوی و الیاف طبیعی نرم با لطافت و ماندگاری مثال‌زدنی.',
      details: [
        'پارچه دورس سه نخ پنبه فرانسوی براش‌خورده',
        'برش پف‌دار آرنج و آستین با کشسانی کنترل‌شده',
        'دوخت دوبل در درزهای اصلی برای حفظ فرم در درازمدت',
        'مچ و پایین لباس دارای کشبافت ظریف فلت',
        'طراحی اختصاصی استودیوی لنگه'
      ],
      fabric: '۹۲٪ پنبه پریمیوم، ۸٪ الاستین طبیعی',
    },
    {
      id: 'lengeh-kura-oversized-hoodie',
      name: 'هودی اورسایز KURA',
      subtitle: 'کالکشن SHIBUI',
      category: 'knitwear',
      price: 240,
      colorway: 'مشکی کربنی مات',
      image: '/looks/look-alt-1.jpg',
      secondaryImage: '/looks/look-alt-4.jpg',
      badge: 'جدید',
      sizes: ['S', 'M', 'L', 'XL'],
      description: 'هودی اورسایز با کلاه دوبل ساختاریافته و جیب‌های پنهان کانگورویی. الهام‌گرفته از معماری مینیمال ژاپن.',
      details: [
        'پنبه دو رو سنگین ۴۲۰ گرم',
        'کلاه دولایه با ایستایی بدون بند کشی',
        'سرآستین‌های فلت با بافت فشرده',
        'تولید محدود در توکیو'
      ],
      fabric: '۱۰۰٪ پنبه سنگین ژاپنی',
    },
    {
      id: 'lengeh-arch-wool-coat',
      name: 'پالتو پشمی ARCH',
      subtitle: 'کالکشن OUTSPOKEN',
      category: 'outerwear',
      price: 480,
      colorway: 'خاکستری سنگی ملانژ',
      image: '/looks/look-1.jpg',
      secondaryImage: '/looks/look-2.jpg',
      badge: 'جدید',
      sizes: ['XS', 'S', 'M', 'L'],
      description: 'پالتوی کانسپچوال بلند با برش‌های زاویه‌دار و آستر ابریشمی تنفس‌پذیر.',
      details: [
        'پشم ویرجین دوطرفه ۵۰۰ گرم',
        'برش شانه ساختاریافته بدون اپل مصنوعی',
        'دوخت دستی لبه‌ها و یقه مینیمال'
      ],
      fabric: '۹۰٪ پشم خالص، ۱۰٪ کشمیر',
    },
  ];

  return (
    <div
      id="full-width-navigation-menu"
      dir="rtl"
      className="fixed inset-0 z-50 bg-white text-[#333333] flex flex-col overflow-y-auto animate-in fade-in duration-200 select-none font-tommy"
    >
      {/* 1. Header Bar: Brand Logo Centered in the middle (really small: 11px), 'X' close icon */}
      <div
        id="nav-menu-header-bar"
        className="w-full bg-white border-b border-neutral-200/80 px-4 sm:px-6 h-12 flex items-center justify-between shrink-0"
      >
        {/* Balance spacer */}
        <div className="w-8 h-8" aria-hidden="true" />

        {/* Center: Brand Name Logo - Really small and delicate (11px) */}
        <div className="flex items-center justify-center">
          <img
            src="/Subtract-black.svg"
            alt="LENGEH"
            height={11}
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              if (!target.src.includes('Subtract-black.png')) {
                target.src = '/Subtract-black.png';
              }
            }}
            className="h-[11px] sm:h-[12px] w-auto object-contain block select-none"
            style={{ height: '11px' }}
          />
        </div>

        {/* Close 'X' Button */}
        <button
          type="button"
          id="nav-menu-close-btn"
          onClick={onClose}
          aria-label="بستن منو"
          className="w-8 h-8 flex items-center justify-center text-[#444444] hover:text-black transition-colors cursor-pointer rounded-none"
        >
          <X className="w-4 h-4 stroke-[1.6]" />
        </button>
      </div>

      {/* 2. Search Bar: Search icon on start, 12px regular dark grey */}
      <div
        id="nav-menu-search-bar"
        className="w-full bg-white border-b border-neutral-200/80 px-4 sm:px-6 py-2.5 flex items-center gap-3 shrink-0"
      >
        <Search className="w-3.5 h-3.5 text-[#555555] stroke-[1.8] shrink-0" />
        <input
          type="text"
          id="nav-menu-search-input"
          autoFocus={false}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="جستجو در محصولات..."
          className="w-full bg-transparent text-[12px] font-normal text-[#333333] placeholder:text-[#888888] focus:outline-none text-right"
          style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif", fontSize: '12px', fontWeight: 400, color: '#333333' }}
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="text-neutral-400 hover:text-black p-1 text-xs cursor-pointer"
            aria-label="پاک کردن جستجو"
          >
            <X className="w-3.5 h-3.5 stroke-[2]" />
          </button>
        )}
      </div>

      {/* 3. Gender Tabs: 'زنانه' and 'مردانه' with underline on active tab */}
      <div
        id="nav-menu-gender-tabs"
        className="w-full bg-white border-b border-neutral-200 grid grid-cols-2 text-center select-none shrink-0"
      >
        <button
          type="button"
          id="nav-tab-womens"
          onClick={() => setGenderTab('womens')}
          className={`py-3 text-[12px] font-normal transition-colors cursor-pointer relative ${
            genderTab === 'womens'
              ? 'text-black font-medium'
              : 'text-[#666666] hover:text-black'
          }`}
          style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif", fontSize: '12px', fontWeight: genderTab === 'womens' ? 500 : 400 }}
        >
          <span>زنانه</span>
          {genderTab === 'womens' && (
            <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-black" />
          )}
        </button>

        <button
          type="button"
          id="nav-tab-men"
          onClick={() => setGenderTab('men')}
          className={`py-3 text-[12px] font-normal transition-colors cursor-pointer relative ${
            genderTab === 'men'
              ? 'text-black font-medium'
              : 'text-[#666666] hover:text-black'
          }`}
          style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif", fontSize: '12px', fontWeight: genderTab === 'men' ? 500 : 400 }}
        >
          <span>مردانه</span>
          {genderTab === 'men' && (
            <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-black" />
          )}
        </button>
      </div>

      {/* 4. Menu Body */}
      <div className="flex-1 w-full max-w-2xl mx-auto px-5 sm:px-8 py-5 flex flex-col justify-start">
        {searchQuery.trim().length > 0 ? (
          /* Live Search Results */
          <div className="space-y-3">
            <p
              className="text-[12px] font-normal text-[#666666] text-right"
              style={{ fontSize: '12px', fontWeight: 400, color: '#666666' }}
            >
              نتایج جستجو ({searchResults.length})
            </p>

            {searchResults.length === 0 ? (
              <div
                className="py-12 text-center text-[#888888] text-[12px] font-normal"
                style={{ fontSize: '12px', fontWeight: 400 }}
              >
                هیچ محصولی مطابق با «{searchQuery}» یافت نشد
              </div>
            ) : (
              <div className="divide-y divide-neutral-100">
                {searchResults.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleProductClick(product)}
                    className="py-3 flex items-center gap-4 cursor-pointer group hover:bg-neutral-50 px-2 -mx-2 transition-colors text-right"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-14 object-cover bg-neutral-100 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4
                        className="text-[12px] font-normal text-[#333333] group-hover:text-black truncate"
                        style={{ fontSize: '12px', fontWeight: 400, color: '#333333' }}
                      >
                        {product.name}
                      </h4>
                      <p
                        className="text-[11px] font-normal text-[#777777] truncate mt-0.5"
                        style={{ fontSize: '11px', fontWeight: 400, color: '#777777' }}
                      >
                        {product.subtitle} • {product.colorway}
                      </p>
                    </div>
                    <span
                      className="text-[12px] font-normal text-[#333333] shrink-0 font-sans"
                      style={{ fontSize: '12px', fontWeight: 400, color: '#333333' }}
                    >
                      ${product.price}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Main Menu Content */
          <div className="space-y-5">
            {/* 1. Highlight Banner: Changed to "پیشنهادهای ویژه امروز" */}
            <div>
              <button
                type="button"
                id="nav-menu-special-offers-btn"
                onClick={() => {
                  if (onNavigateToProducts) {
                    onNavigateToProducts({ badge: 'special' });
                  } else {
                    onOpenCloserLook();
                  }
                  onClose();
                }}
                className="w-full flex items-center justify-between py-2.5 px-3.5 bg-neutral-50 hover:bg-neutral-100 text-[#333333] hover:text-black text-[12px] font-normal transition-colors border border-neutral-200 cursor-pointer"
                style={{ fontSize: '12px', fontWeight: 400, color: '#333333' }}
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#555555]" />
                  <span>پیشنهادهای ویژه امروز</span>
                </span>
                <ChevronLeft className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black" />
              </button>
            </div>

            {/* 2. Menu Items: Exactly the 3 requested items per gender in 12px regular dark grey */}
            <nav className="divide-y divide-neutral-100 text-right">
              {currentMenuItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  id={`nav-menu-item-${item.id}`}
                  onClick={() => handleNav(item.id)}
                  className="w-full flex items-center justify-between py-3.5 text-[#333333] hover:text-black transition-colors text-[12px] font-normal group cursor-pointer"
                  style={{ fontSize: '12px', fontWeight: 400, color: '#333333' }}
                >
                  <span className="group-hover:translate-x-[-2px] transition-transform">{item.label}</span>
                  <ChevronLeft className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#333333] group-hover:-translate-x-0.5 transition-all" />
                </button>
              ))}
            </nav>

            {/* 3. Product Row Showcase: Square images, 2 fully visible + 1/3 of 3rd visible, only design name under photo, no price, no collection */}
            <div className="pt-4 border-t border-neutral-200/80">
              <div
                className="flex gap-3 overflow-x-auto pb-2 pt-1 scroll-smooth select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                style={{
                  WebkitOverflowScrolling: 'touch',
                }}
              >
                {featuredRowProducts.map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => handleProductClick(prod)}
                    className="shrink-0 flex-none group cursor-pointer flex flex-col text-right select-none"
                    style={{
                      width: 'calc((100% - 24px) * 3 / 7)',
                      minWidth: 'calc((100% - 24px) * 3 / 7)',
                    }}
                  >
                    <div className="relative aspect-square w-full overflow-hidden bg-neutral-100 mb-2 border border-neutral-100">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                    </div>
                    <h4
                      className="text-[12px] font-normal text-[#333333] group-hover:text-black transition-colors leading-snug line-clamp-1"
                      style={{ fontSize: '12px', fontWeight: 400, color: '#333333' }}
                    >
                      {prod.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. About Us & Contact links */}
            <div className="pt-3 border-t border-neutral-100 text-right space-y-1">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onNavigateToAbout) onNavigateToAbout();
                }}
                className="w-full flex items-center justify-between py-2 text-[#555555] hover:text-black transition-colors text-[12px] font-normal cursor-pointer"
                style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
              >
                <span>درباره برند لنگه (About Us)</span>
                <ChevronLeft className="w-3.5 h-3.5 text-neutral-400" />
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onNavigateToContact) onNavigateToContact();
                }}
                className="w-full flex items-center justify-between py-2 text-[#555555] hover:text-black transition-colors text-[12px] font-normal cursor-pointer"
                style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
              >
                <span>تماس با ما و پرسش‌های متداول (FAQ)</span>
                <ChevronLeft className="w-3.5 h-3.5 text-neutral-400" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

