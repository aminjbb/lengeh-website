import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Check,
  Maximize2,
  X,
  Ruler,
  Sparkles,
  Plus,
  Minus,
  Trash2,
} from 'lucide-react';
import { Product, Currency, CartItem } from '../../types';
import { ALL_PRODUCTS } from '../../data/mockData';
import { toPersianDigits, formatTomanPrice } from '../../utils/persianNumbers';
import { useProductDetailState } from './model/useProductDetailState';

interface ProductDetailPageProps {
  product?: Product | null;
  currency: Currency;
  onBack: () => void;
  onAddToCart: (product: Product, size: string) => void;
  onUpdateQuantity?: (productId: string, size: string, delta: number) => void;
  onRemoveItem?: (productId: string, size: string) => void;
  cartItems?: CartItem[];
  onSelectProduct: (product: Product) => void;
  garderobIds: string[];
  onToggleGarderob: (product: Product) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product: initialProduct,
  currency: _currency,
  onBack,
  onAddToCart,
  onUpdateQuantity,
  onRemoveItem,
  cartItems,
  onSelectProduct,
  garderobIds,
  onToggleGarderob,
}) => {
  // Fallback to the classic cashmere crew knit if no product provided
  const currentProduct = useMemo(() => {
    if (initialProduct) return initialProduct;
    return (
      ALL_PRODUCTS.find((p) => p.id === 'lengeh-cashmere-crew-knit') ||
      ALL_PRODUCTS[0]
    );
  }, [initialProduct]);

  const {
    selectedSize, setSelectedSize, openAccordion, setOpenAccordion,
    isSizeGuideOpen, setIsSizeGuideOpen, lightboxImage, setLightboxImage,
    isShowingToastFeedback, setIsShowingToastFeedback, activeImageIndex,
    setActiveImageIndex, currentQuantity,
  } = useProductDetailState(currentProduct, cartItems);

  // Ref and visibility state for main inline "Add to Bag" button
  const mainAddToCartRef = useRef<HTMLDivElement | null>(null);
  const [isMainButtonVisible, setIsMainButtonVisible] = useState(false);

  // Observe whether the inline "Add to Bag" button is currently in the viewport
  useEffect(() => {
    const target = mainAddToCartRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsMainButtonVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [currentProduct.id]);

  // Ref and drag-scroll state for Similar Products row
  const similarScrollRef = useRef<HTMLDivElement | null>(null);
  const isPointerDownRef = useRef(false);
  const pointerStartXRef = useRef(0);
  const pointerStartScrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Wheel listener: enables horizontal scroll with mouse wheel
  useEffect(() => {
    const el = similarScrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        // In RTL, scrolling wheel down (deltaY > 0) scrolls left towards subsequent cards
        el.scrollBy({
          left: -e.deltaY * 1.2,
          behavior: 'auto',
        });
      }
    };

    const updateProgress = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) {
        setScrollProgress(0);
        return;
      }
      const currentScroll = Math.abs(el.scrollLeft);
      const prog = Math.min(100, Math.max(0, (currentScroll / maxScroll) * 100));
      setScrollProgress(prog);
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    return () => {
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('scroll', updateProgress);
    };
  }, []);


  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!similarScrollRef.current) return;
    isPointerDownRef.current = true;
    hasDraggedRef.current = false;
    pointerStartXRef.current = e.clientX;
    pointerStartScrollLeftRef.current = similarScrollRef.current.scrollLeft;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPointerDownRef.current || !similarScrollRef.current) return;
    const deltaX = e.clientX - pointerStartXRef.current;
    if (Math.abs(deltaX) > 4) {
      hasDraggedRef.current = true;
      similarScrollRef.current.scrollLeft = pointerStartScrollLeftRef.current - deltaX;
    }
  };

  const handlePointerUp = () => {
    isPointerDownRef.current = false;
    setTimeout(() => {
      hasDraggedRef.current = false;
    }, 50);
  };

  // Reset states when currentProduct changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentProduct.id]);

  // Prepare full gallery images
  const galleryImages = useMemo(() => {
    if (currentProduct.galleryImages && currentProduct.galleryImages.length > 0) {
      return currentProduct.galleryImages;
    }
    const imgs: string[] = [currentProduct.image];
    if (currentProduct.secondaryImage) imgs.push(currentProduct.secondaryImage);
    // Add realistic lifestyle/detail shots if needed
    imgs.push('/women/look-1.jpg');
    imgs.push('/women/look-3.jpg');
    imgs.push('/looks/look-4.jpg');
    return imgs;
  }, [currentProduct]);

  const isSavedInGarderob = garderobIds.includes(currentProduct.id);

  const handleAddToCartClick = () => {
    if (!selectedSize) return;
    onAddToCart(currentProduct, selectedSize);
    setIsShowingToastFeedback(false);
  };

  const handleIncrement = () => {
    if (onUpdateQuantity) {
      onUpdateQuantity(currentProduct.id, selectedSize, 1);
    } else {
      onAddToCart(currentProduct, selectedSize);
    }
  };

  const handleDecrement = () => {
    if (currentQuantity > 1) {
      if (onUpdateQuantity) {
        onUpdateQuantity(currentProduct.id, selectedSize, -1);
      }
    } else if (currentQuantity === 1) {
      if (onRemoveItem) {
        onRemoveItem(currentProduct.id, selectedSize);
      } else if (onUpdateQuantity) {
        onUpdateQuantity(currentProduct.id, selectedSize, -1);
      }
    }
  };

  // Toggle accordion item
  const toggleAccordion = (key: string) => {
    setOpenAccordion((prev) => (prev === key ? null : key));
  };

  // 5 similar products for the horizontal scroll section
  const similarProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((p) => p.id !== currentProduct.id).slice(0, 5);
  }, [currentProduct.id]);

  // Category label in Persian
  const categoryLabel = useMemo(() => {
    switch (currentProduct.category) {
      case 'knitwear':
        return 'بافت';
      case 'outerwear':
        return 'کت و پالتو';
      case 'shirting':
        return 'پیراهن و شومیز';
      case 'bottoms':
        return 'شلوار';
      case 'footwear':
        return 'کفش و اکسسوری';
      case 'accessories':
        return 'اکسسوری';
      default:
        return 'پوشاک';
    }
  }, [currentProduct.category]);

  return (
    <div className="bg-white text-neutral-900 min-h-screen font-tommy selection:bg-black selection:text-white" dir="rtl">
      {/* 1. Breadcrumbs matching Toteme reference photo with balanced vertical spacing */}
      <div className="w-full text-center pt-5 sm:pt-8 pb-4 sm:pb-6 px-4">
        <div className="inline-flex items-center justify-center gap-2 text-[10.5px] sm:text-[11px] tracking-wide">
          <button
            type="button"
            onClick={onBack}
            className="text-neutral-400 hover:text-neutral-700 transition-colors cursor-pointer font-normal"
            style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
          >
            {currentProduct.collection ? `کالکشن ${currentProduct.collection}` : 'پوشاک آماده'}
          </button>
          <span className="text-neutral-300 text-[9px]">·</span>
          <span
            className="text-neutral-800 font-medium"
            style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
          >
            {categoryLabel}
          </span>
        </div>
      </div>

      {/* 2. Main 2-Column Product Showcase (Exact Toteme Layout) */}
      <div className="max-w-[1600px] mx-auto px-0 sm:px-6 lg:px-10 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 xl:gap-16 items-start">
          
          {/* ================= LEFT COLUMN: Visual Gallery (Toteme Vertical Stream) ================= */}
          <div className="lg:col-span-7 xl:col-span-7 relative">
            
            {/* Desktop: Vertical Scrollable Gallery Stack */}
            <div className="hidden sm:flex flex-col gap-3 lg:gap-4">
              {galleryImages.map((imgUrl, idx) => (
                <div
                  key={idx}
                  onClick={() => setLightboxImage(imgUrl)}
                  className="relative group bg-[#f7f7f7] cursor-zoom-in overflow-hidden aspect-[3/4] w-full"
                >
                  <img
                    src={imgUrl}
                    alt={`${currentProduct.name} - نما ${toPersianDigits(idx + 1)}`}
                    loading={idx === 0 ? 'eager' : 'lazy'}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-xs p-2 text-black shadow-sm">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile: Swipeable Carousel with Arrow Controls (Without Background) */}
            <div className="sm:hidden relative aspect-[3/4] w-full bg-[#f7f7f7] overflow-hidden">
              <img
                src={galleryImages[activeImageIndex]}
                alt={currentProduct.name}
                className="w-full h-full object-cover object-center transition-all duration-300"
              />

              {/* Prev/Next overlay controls - without background as requested */}
              <button
                type="button"
                onClick={() =>
                  setActiveImageIndex((prev) =>
                    prev === 0 ? galleryImages.length - 1 : prev - 1
                  )
                }
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-neutral-800 hover:text-black transition-colors cursor-pointer"
                aria-label="عکس قبلی"
              >
                <ChevronRight className="w-5 h-5 drop-shadow-sm" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveImageIndex((prev) =>
                    prev === galleryImages.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 text-neutral-800 hover:text-black transition-colors cursor-pointer"
                aria-label="عکس بعدی"
              >
                <ChevronLeft className="w-5 h-5 drop-shadow-sm" />
              </button>
            </div>

            {/* Mobile Thumbnails Row */}
            <div className="sm:hidden flex items-center gap-2 px-4 py-3 overflow-x-auto border-b border-neutral-100">
              {galleryImages.map((imgUrl, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-14 h-18 shrink-0 overflow-hidden border transition-all cursor-pointer ${
                    activeImageIndex === idx ? 'border-black' : 'border-transparent opacity-60'
                  }`}
                >
                  <img src={imgUrl} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* ================= RIGHT COLUMN: Sticky Info & Buy Box ================= */}
          <div className="lg:col-span-5 xl:col-span-5 px-5 sm:px-0 pt-6 sm:pt-2 pb-0 lg:sticky lg:top-20">
            <div className="flex flex-col text-right">
              
              {/* Collection Kicker with Save (Bookmark) Icon Button */}
              <div className="flex items-center justify-between mb-2">
                <span
                  className="text-[11.5px] text-neutral-500 font-normal tracking-wide"
                  style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                >
                  {currentProduct.collection ? `کالکشن ${currentProduct.collection}` : 'کالکشن دائمی لنگه'}
                </span>

                {/* Save (Wishlist) Icon Button */}
                <button
                  type="button"
                  onClick={() => onToggleGarderob(currentProduct)}
                  className="p-1.5 -mr-1 text-neutral-500 hover:text-black transition-colors cursor-pointer"
                  title={isSavedInGarderob ? 'ذخیره شده در علاقمندی‌ها' : 'افزودن به علاقمندی‌ها'}
                  aria-label={isSavedInGarderob ? 'حذف از علاقمندی‌ها' : 'افزودن به علاقمندی‌ها'}
                >
                  <Bookmark
                    className={`w-4 h-4 transition-transform hover:scale-110 ${
                      isSavedInGarderob
                        ? 'fill-black stroke-black text-black'
                        : 'stroke-[1.6] text-neutral-600 hover:text-black'
                    }`}
                  />
                </button>
              </div>

              {/* Product Title: Only Persian Title (English Title Removed) */}
              <h1
                className="text-[20px] sm:text-[22px] lg:text-[24px] font-normal text-neutral-900 leading-tight tracking-tight text-right"
                style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
              >
                {currentProduct.name}
              </h1>

              {/* Price Row (Persian digits, VAT text removed) */}
              <div className="mt-4 pb-4 border-b border-neutral-200">
                <div className="flex items-baseline gap-3">
                  <span
                    className="text-[18px] sm:text-[20px] font-medium text-neutral-900"
                    style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                  >
                    {formatTomanPrice(currentProduct.price)}
                  </span>
                </div>
              </div>

              {/* Size Selection Row + Size Guide Link */}
              <div className="py-4 border-b border-neutral-200">
                <div className="flex items-center justify-between mb-2.5">
                  <span
                    className="text-[12px] font-medium text-neutral-800"
                    style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                  >
                    انتخاب سایز:
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="flex items-center gap-1 text-[11.5px] text-neutral-500 hover:text-black underline underline-offset-4 transition-colors cursor-pointer"
                    style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                  >
                    <Ruler className="w-3.5 h-3.5 stroke-[1.5]" />
                    <span>راهنمای سایز</span>
                  </button>
                </div>

                {/* Size Grid */}
                <div className="grid grid-cols-5 gap-2">
                  {currentProduct.sizes.map((size) => {
                    const isSelected = selectedSize === size;
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`py-2.5 text-center text-[12px] font-sans tracking-wide transition-all cursor-pointer border ${
                          isSelected
                            ? 'bg-black text-white border-black font-medium'
                            : 'bg-white text-neutral-800 border-neutral-200 hover:border-black'
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>

                {/* Low Stock Indicator */}
                <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-amber-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
                  <span style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>
                    موجودی محدود برای سایز {selectedSize} — تحویل فوری با پیک
                  </span>
                </div>
              </div>

              {/* Action Buttons: Add to Bag (or Quantity Selector) and Wishlist Save Button */}
              <div ref={mainAddToCartRef} className="pt-5 flex items-center gap-2.5">
                {isShowingToastFeedback ? (
                  /* Immediate Toast feedback on button */
                  <div
                    className="flex-1 h-[52px] bg-neutral-900 text-white flex items-center justify-center gap-2 px-6 text-[13px] font-medium animate-in fade-in duration-200 select-none shadow-md"
                    style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                  >
                    <Check className="w-4 h-4 text-emerald-400 stroke-[2.5]" />
                    <span className="tracking-wide">به سبد خرید افزوده شد</span>
                  </div>
                ) : currentQuantity > 0 ? (
                  /* Counter: Right = +, Center = 1, Left = Trash icon */
                  <div
                    className="flex-1 h-[52px] bg-black text-white flex items-center justify-between px-2 sm:px-3 shadow-sm select-none border border-black animate-in fade-in duration-200"
                    style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                  >
                    {/* سمت راست: آیکون + */}
                    <button
                      type="button"
                      onClick={handleIncrement}
                      className="w-12 h-10 flex items-center justify-center hover:bg-white/15 active:scale-90 transition-all text-white cursor-pointer"
                      aria-label="افزایش تعداد"
                      title="افزایش تعداد"
                    >
                      <Plus className="w-5 h-5 stroke-[2.2]" />
                    </button>

                    {/* وسط دکمه: 1 */}
                    <div className="flex-1 flex items-center justify-center">
                      <span
                        className="text-[18px] font-bold text-white tracking-widest text-center"
                        style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                      >
                        {toPersianDigits(currentQuantity)}
                      </span>
                    </div>

                    {/* سمت چپ: سطل آشغال */}
                    <button
                      type="button"
                      onClick={handleDecrement}
                      className="w-12 h-10 flex items-center justify-center hover:bg-white/15 active:scale-90 transition-all text-white cursor-pointer"
                      aria-label={currentQuantity === 1 ? 'حذف از سبد خرید' : 'کاهش تعداد'}
                      title={currentQuantity === 1 ? 'حذف از سبد خرید' : 'کاهش تعداد'}
                    >
                      {currentQuantity === 1 ? (
                        <Trash2 className="w-4 h-4 text-neutral-300 hover:text-red-400 transition-colors" />
                      ) : (
                        <Minus className="w-4 h-4 stroke-[2.2]" />
                      )}
                    </button>
                  </div>
                ) : (
                  /* Standard Add to Cart Button */
                  <button
                    type="button"
                    onClick={handleAddToCartClick}
                    className="flex-1 h-[52px] px-6 text-[13px] tracking-[0.15em] uppercase font-medium transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 bg-black text-white hover:bg-neutral-800 active:scale-[0.99]"
                    style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                  >
                    <span>افزودن به سبد خرید</span>
                  </button>
                )}

                {/* Save to Wishlist Button */}
                <button
                  type="button"
                  onClick={() => onToggleGarderob(currentProduct)}
                  className={`h-[52px] w-[52px] shrink-0 border transition-all flex items-center justify-center cursor-pointer ${
                    isSavedInGarderob
                      ? 'border-black bg-black text-white shadow-xs'
                      : 'border-neutral-300 bg-white text-neutral-700 hover:border-black hover:text-black'
                  }`}
                  title={isSavedInGarderob ? 'ذخیره شده در علاقمندی‌ها' : 'ذخیره در علاقمندی‌ها'}
                  aria-label={isSavedInGarderob ? 'حذف از علاقمندی‌ها' : 'افزودن به علاقمندی‌ها'}
                >
                  <Bookmark
                    className={`w-5 h-5 transition-transform hover:scale-110 ${
                      isSavedInGarderob ? 'fill-white stroke-white' : 'stroke-[1.7]'
                    }`}
                  />
                </button>
              </div>

              {/* 1. Untitled Editorial Product Description / Designer's Note */}
              <div className="mt-6 mb-7 text-right">
                <p
                  className="text-[12.5px] sm:text-[13px] text-neutral-700 leading-relaxed font-normal"
                  style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                >
                  <span className="font-medium text-neutral-900">یادداشت طراح: </span>
                  «{currentProduct.description}»
                </p>
              </div>

              {/* 2. Expandable Sections with Small Arrow (Chevron) matching reference image */}
              <div className="border-t border-neutral-200 divide-y divide-neutral-200">
                
                {/* 1. Details (جزئیات و جنس) */}
                <div className="py-3.5">
                  <button
                    type="button"
                    onClick={() => toggleAccordion('details')}
                    className="w-full flex items-center justify-between text-right cursor-pointer group"
                  >
                    <span
                      className="text-[12.5px] font-medium text-neutral-900 tracking-wide group-hover:text-black transition-colors"
                      style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                    >
                      جزئیات و جنس (Details)
                    </span>
                    <ChevronLeft
                      className={`w-3.5 h-3.5 text-neutral-400 group-hover:text-black transition-transform duration-200 ${
                        openAccordion === 'details' ? '-rotate-90 text-black' : 'rotate-0'
                      }`}
                    />
                  </button>

                  {openAccordion === 'details' && (
                    <div className="pt-3 pb-1 text-[12px] text-neutral-600 leading-relaxed space-y-2 animate-in fade-in duration-200" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>
                      <ul className="list-disc list-inside space-y-1.5 text-neutral-600">
                        {currentProduct.details.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                      {currentProduct.fabric && (
                        <p className="pt-2 text-neutral-700 font-medium">
                          ترکیب الیاف: {currentProduct.fabric}
                        </p>
                      )}
                      {currentProduct.styleNumber && (
                        <p className="text-neutral-400 font-mono text-[11px]">
                          کد مدل (Style ID): {currentProduct.styleNumber}
                        </p>
                      )}
                      {currentProduct.care && currentProduct.care.length > 0 && (
                        <div className="pt-2 border-t border-neutral-100">
                          <span className="font-medium text-neutral-800 block mb-1">
                            دستورالعمل شستشو و مراقبت:
                          </span>
                          <ul className="list-disc list-inside space-y-1 text-neutral-500 text-[11.5px]">
                            {currentProduct.care.map((c, i) => (
                              <li key={i}>{c}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* 2. Garderob (کمد لباس) */}
                <div className="py-3.5">
                  <button
                    type="button"
                    onClick={() => toggleAccordion('garderob')}
                    className="w-full flex items-center justify-between text-right cursor-pointer group"
                  >
                    <span
                      className="text-[12.5px] font-medium text-neutral-900 tracking-wide group-hover:text-black transition-colors"
                      style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                    >
                      کمد لباس (Garderob)
                    </span>
                    <ChevronLeft
                      className={`w-3.5 h-3.5 text-neutral-400 group-hover:text-black transition-transform duration-200 ${
                        openAccordion === 'garderob' ? '-rotate-90 text-black' : 'rotate-0'
                      }`}
                    />
                  </button>

                  {openAccordion === 'garderob' && (
                    <div className="pt-3 pb-1 text-[12px] text-neutral-600 leading-relaxed space-y-2.5 animate-in fade-in duration-200" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>
                      <p>
                        این قطعه بخشی از فلسفه «کمد لباس ماندگار» برند لنگه است؛ لباسی با ماندگاری بالا، متریال طبیعی اعلا و تن‌خور همه‌کاره که به‌سادگی با دیگر تکه‌های استایل کپسولی ترکیب می‌شود.
                      </p>
                      <button
                        type="button"
                        onClick={() => onToggleGarderob(currentProduct)}
                        className="inline-flex items-center gap-1.5 text-[11.5px] text-neutral-800 hover:text-black font-medium underline underline-offset-4 pt-1 cursor-pointer"
                      >
                        <Bookmark className={`w-3.5 h-3.5 ${isSavedInGarderob ? 'fill-black stroke-black' : ''}`} />
                        <span>{isSavedInGarderob ? 'ذخیره شده در کمد لباس شخصی شما' : 'افزودن به کمد لباس شخصی شما'}</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* 3. Size & Fit (سایز و تن‌خور) */}
                <div className="py-3.5">
                  <button
                    type="button"
                    onClick={() => toggleAccordion('size-fit')}
                    className="w-full flex items-center justify-between text-right cursor-pointer group"
                  >
                    <span
                      className="text-[12.5px] font-medium text-neutral-900 tracking-wide group-hover:text-black transition-colors"
                      style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                    >
                      سایز و تن‌خور (Size & Fit)
                    </span>
                    <ChevronLeft
                      className={`w-3.5 h-3.5 text-neutral-400 group-hover:text-black transition-transform duration-200 ${
                        openAccordion === 'size-fit' ? '-rotate-90 text-black' : 'rotate-0'
                      }`}
                    />
                  </button>

                  {openAccordion === 'size-fit' && (
                    <div className="pt-3 pb-1 text-[12px] text-neutral-600 leading-relaxed space-y-2 animate-in fade-in duration-200" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>
                      {currentProduct.modelInfo ? (
                        <p>{currentProduct.modelInfo}</p>
                      ) : (
                        <p>قد مدل ۱۸۰ سانتی‌متر است و سایز S به تن دارد.</p>
                      )}
                      {currentProduct.fitNotes ? (
                        <p className="text-neutral-500">{currentProduct.fitNotes}</p>
                      ) : (
                        <p className="text-neutral-500">برش راحت و استاندارد؛ برای استایل معمول سایز همیشگی خود را انتخاب فرمایید.</p>
                      )}
                      <div className="pt-1">
                        <button
                          type="button"
                          onClick={() => setIsSizeGuideOpen(true)}
                          className="text-[11.5px] text-neutral-800 hover:text-black underline underline-offset-4 font-medium cursor-pointer"
                        >
                          مشاهده جدول دقیق راهنمای سایز
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* 4. Certificates & Traceability (گواهینامه‌ها و منشأ پشم) */}
                <div className="py-3.5">
                  <button
                    type="button"
                    onClick={() => toggleAccordion('certificates')}
                    className="w-full flex items-center justify-between text-right cursor-pointer group"
                  >
                    <span
                      className="text-[12.5px] font-medium text-neutral-900 tracking-wide group-hover:text-black transition-colors"
                      style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                    >
                      گواهینامه‌ها و اصالت (Certificates & Traceability)
                    </span>
                    <ChevronLeft
                      className={`w-3.5 h-3.5 text-neutral-400 group-hover:text-black transition-transform duration-200 ${
                        openAccordion === 'certificates' ? '-rotate-90 text-black' : 'rotate-0'
                      }`}
                    />
                  </button>

                  {openAccordion === 'certificates' && (
                    <div className="pt-3 pb-1 text-[12px] text-neutral-600 leading-relaxed space-y-2 animate-in fade-in duration-200" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>
                      <p>
                        پشم کشمیر این محصول تحت گواهینامه بین‌المللی The Good Cashmere Standard® از مزارع پایدار مغولستان تهیه شده است که رفاه بزهای کشمیری، رفتار اخلاقی با دام‌ها و حفاظت از خاک مراتع را به شکل سالانه راستی‌آزمایی می‌کند.
                      </p>
                      <p className="text-neutral-500">
                        کارگاه سازنده: Dongguan Competent Knitting Co. Ltd با استانداردهای سخت‌گیرانه ایمنی و دستمزد منصفانه برای تمامی صنعتگران.
                      </p>
                    </div>
                  )}
                </div>

                {/* 5. Returns & Exchanges (ارسال و تعویض) */}
                <div className="py-3.5">
                  <button
                    type="button"
                    onClick={() => toggleAccordion('returns')}
                    className="w-full flex items-center justify-between text-right cursor-pointer group"
                  >
                    <span
                      className="text-[12.5px] font-medium text-neutral-900 tracking-wide group-hover:text-black transition-colors"
                      style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                    >
                      ارسال و تعویض (Returns & Exchanges)
                    </span>
                    <ChevronLeft
                      className={`w-3.5 h-3.5 text-neutral-400 group-hover:text-black transition-transform duration-200 ${
                        openAccordion === 'returns' ? '-rotate-90 text-black' : 'rotate-0'
                      }`}
                    />
                  </button>

                  {openAccordion === 'returns' && (
                    <div className="pt-3 pb-1 text-[12px] text-neutral-600 leading-relaxed space-y-2 animate-in fade-in duration-200" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>
                      <p>
                        ارسال اکسپرس رایگان برای تمامی خریدهای بالای ۱٫۵۰۰٫۰۰۰ تومان. تحویل در شهر تهران ظرف مدت حداکثر ۴ ساعت و سایر استان‌ها ظرف ۲ الی ۳ روز کاری از طریق پست ویژه یا تیپاکس انجام می‌شود.
                      </p>
                      <p className="text-neutral-500">
                        شما می‌توانید تا ۱۴ روز پس از دریافت سفارش در صورت عدم تطابق سایز یا سلیقه، کالا را بدون هرگونه هزینه مازاد در وضعیت نو با بسته‌بندی اصلی تعویض یا مرجوع فرمایید.
                      </p>
                    </div>
                  )}
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* 48px Separation Border separating Returns & Exchanges from Similar Products */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="border-t border-neutral-200 mt-[48px]" />
      </div>

      {/* 3. Section: "محصولات مشابه" with horizontal scroll */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 pt-7 sm:pt-9 pb-16">
        <div className="mb-4 sm:mb-5 text-right">
          <h2
            className="text-[14.5px] sm:text-[16px] font-medium text-neutral-900 tracking-tight"
            style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
          >
            محصولات مشابه
          </h2>
        </div>

        {/* Horizontal Scroll Track: 
            Cards are sized smaller so that 2 full cards + a small peek (~30%) of the 3rd card are visible without scrolling */}
        <div className="relative">
          <div
            ref={similarScrollRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="flex gap-3 overflow-x-auto pb-3 pt-1 scroll-smooth select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden touch-pan-x cursor-grab active:cursor-grabbing"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {similarProducts.map((prod) => (
              <div
                key={prod.id}
                onClick={() => {
                  if (hasDraggedRef.current) return;
                  onSelectProduct(prod);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="shrink-0 flex-none group cursor-pointer flex flex-col text-right select-none transition-transform active:scale-[0.99]"
                style={{
                  width: 'calc((100% - 24px) / 2.32)',
                  minWidth: 'calc((100% - 24px) / 2.32)',
                  maxWidth: '185px',
                }}
              >
                <div className="relative aspect-square w-full overflow-hidden bg-neutral-100 mb-2 border border-neutral-100">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                </div>
                <h4
                  className="text-[12px] font-normal text-[#333333] group-hover:text-black transition-colors leading-snug line-clamp-1"
                  style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                  title={prod.name}
                >
                  {prod.name}
                </h4>
                <span
                  className="text-[11px] font-normal text-[#777777] mt-0.5"
                  style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                >
                  {formatTomanPrice(prod.price)}
                </span>
              </div>
            ))}
          </div>

          {/* Minimal scroll progress indicator (Toteme aesthetic) */}
          <div className="w-full max-w-[180px] h-[1.5px] bg-neutral-100 mt-2 relative overflow-hidden">
            <div
              className="absolute top-0 bottom-0 bg-[#171717] transition-all duration-150"
              style={{
                width: '40%',
                right: `${scrollProgress * 0.6}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* 5. Size Guide Modal */}
      {isSizeGuideOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200 mb-6">
              <div>
                <h3
                  className="text-[16px] sm:text-[18px] font-medium text-neutral-900"
                  style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                >
                  راهنمای سایز (Size Guide)
                </h3>
                <p className="text-[12px] text-neutral-500 mt-0.5">
                  تمام اندازه‌ها بر حسب سانتی‌متر (CM) و بر اساس تن‌خور آزاد طراحی شده‌اند.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsSizeGuideOpen(false)}
                className="p-1.5 text-neutral-400 hover:text-black cursor-pointer"
                aria-label="بستن"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-center text-[12px] font-sans border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 text-neutral-500">
                    <th className="py-2.5 px-3 font-medium text-right" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>سایز</th>
                    <th className="py-2.5 px-3 font-medium">EU</th>
                    <th className="py-2.5 px-3 font-medium">US</th>
                    <th className="py-2.5 px-3 font-medium">UK</th>
                    <th className="py-2.5 px-3 font-medium" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>دور سینه</th>
                    <th className="py-2.5 px-3 font-medium" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>قد لباس</th>
                    <th className="py-2.5 px-3 font-medium" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>طول آستین</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-neutral-800" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>
                  <tr className={selectedSize === 'XS' ? 'bg-neutral-100 font-semibold' : ''}>
                    <td className="py-2.5 px-3 text-right font-medium">XS</td>
                    <td className="py-2.5 px-3">۳۴</td>
                    <td className="py-2.5 px-3">۲</td>
                    <td className="py-2.5 px-3">۶</td>
                    <td className="py-2.5 px-3">۱۰۶ سانتی‌متر</td>
                    <td className="py-2.5 px-3">۶۰ سانتی‌متر</td>
                    <td className="py-2.5 px-3">۶۱ سانتی‌متر</td>
                  </tr>
                  <tr className={selectedSize === 'S' ? 'bg-neutral-100 font-semibold' : ''}>
                    <td className="py-2.5 px-3 text-right font-medium">S</td>
                    <td className="py-2.5 px-3">۳۶</td>
                    <td className="py-2.5 px-3">۴</td>
                    <td className="py-2.5 px-3">۸</td>
                    <td className="py-2.5 px-3">۱۱۲ سانتی‌متر</td>
                    <td className="py-2.5 px-3">۶۲ سانتی‌متر</td>
                    <td className="py-2.5 px-3">۶۲ سانتی‌متر</td>
                  </tr>
                  <tr className={selectedSize === 'M' ? 'bg-neutral-100 font-semibold' : ''}>
                    <td className="py-2.5 px-3 text-right font-medium">M</td>
                    <td className="py-2.5 px-3">۳۸</td>
                    <td className="py-2.5 px-3">۶</td>
                    <td className="py-2.5 px-3">۱۰</td>
                    <td className="py-2.5 px-3">۱۱۸ سانتی‌متر</td>
                    <td className="py-2.5 px-3">۶۴ سانتی‌متر</td>
                    <td className="py-2.5 px-3">۶۳ سانتی‌متر</td>
                  </tr>
                  <tr className={selectedSize === 'L' ? 'bg-neutral-100 font-semibold' : ''}>
                    <td className="py-2.5 px-3 text-right font-medium">L</td>
                    <td className="py-2.5 px-3">۴۰</td>
                    <td className="py-2.5 px-3">۸</td>
                    <td className="py-2.5 px-3">۱۲</td>
                    <td className="py-2.5 px-3">۱۲۴ سانتی‌متر</td>
                    <td className="py-2.5 px-3">۶۶ سانتی‌متر</td>
                    <td className="py-2.5 px-3">۶۴ سانتی‌متر</td>
                  </tr>
                  <tr className={selectedSize === 'XL' ? 'bg-neutral-100 font-semibold' : ''}>
                    <td className="py-2.5 px-3 text-right font-medium">XL</td>
                    <td className="py-2.5 px-3">۴۲</td>
                    <td className="py-2.5 px-3">۱۰</td>
                    <td className="py-2.5 px-3">۱۴</td>
                    <td className="py-2.5 px-3">۱۳۰ سانتی‌متر</td>
                    <td className="py-2.5 px-3">۶۸ سانتی‌متر</td>
                    <td className="py-2.5 px-3">۶۵ سانتی‌متر</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 text-[11.5px] text-neutral-500 leading-relaxed" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>
              <p className="flex items-center gap-1.5 font-medium text-neutral-800 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-neutral-600" />
                مشاوره سایز آنلاین:
              </p>
              اگر بین دو سایز تردید دارید یا به دنبال تن‌خور دقیق‌تر هستید، تیم پشتیبانی استایل لنگه آماده راهنمایی شماست.
            </div>
          </div>
        </div>
      )}

      {/* 6. Fullscreen Lightbox Zoom Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-[#171717]/95 backdrop-blur-sm flex items-center justify-center p-2 sm:p-6"
          onClick={() => setLightboxImage(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxImage(null)}
            className="absolute top-5 right-5 text-white/70 hover:text-white p-2 z-10 cursor-pointer"
            aria-label="بستن تصویر"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightboxImage}
            alt=""
            className="max-h-[92vh] max-w-[92vw] object-contain shadow-2xl animate-in zoom-in-90 duration-200"
          />
        </div>
      )}

      {/* 7. Mobile Sticky Bottom Action Bar (hidden when inline Add to Bag button is visible) */}
      <div
        className={`sm:hidden fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-neutral-200 px-4 py-3 z-40 flex items-center justify-between gap-3 shadow-lg transition-all duration-300 ease-in-out ${
          isMainButtonVisible
            ? 'translate-y-full opacity-0 pointer-events-none'
            : 'translate-y-0 opacity-100 pointer-events-auto'
        }`}
      >
        <div className="flex flex-col min-w-0">
          <span className="text-[12px] font-medium text-neutral-900 truncate" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>
            {currentProduct.name}
          </span>
          <span className="text-[11px] text-neutral-500" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>
            {formatTomanPrice(currentProduct.price)} · سایز {selectedSize}
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => onToggleGarderob(currentProduct)}
            className={`w-10 h-10 border transition-colors flex items-center justify-center cursor-pointer ${
              isSavedInGarderob ? 'border-black bg-black text-white' : 'border-neutral-300 bg-white text-neutral-700'
            }`}
            title={isSavedInGarderob ? 'ذخیره شده در علاقمندی‌ها' : 'ذخیره در علاقمندی‌ها'}
            aria-label="ذخیره در علاقمندی‌ها"
          >
            <Bookmark className={`w-4 h-4 ${isSavedInGarderob ? 'fill-white stroke-white' : 'stroke-[1.7]'}`} />
          </button>

          {isShowingToastFeedback ? (
            <div
              className="h-10 px-4 bg-neutral-900 text-white flex items-center justify-center gap-1.5 text-[11px] font-medium select-none shadow-xs"
              style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
            >
              <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[2.5]" />
              <span>افزوده شد</span>
            </div>
          ) : currentQuantity > 0 ? (
            <div
              className="h-10 bg-black text-white flex items-center justify-between px-1 shadow-xs min-w-[124px] select-none"
              style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
            >
              {/* سمت راست: آیکون + */}
              <button
                type="button"
                onClick={handleIncrement}
                className="w-9 h-8 flex items-center justify-center hover:bg-white/15 active:scale-90 text-white cursor-pointer"
                aria-label="افزایش تعداد"
              >
                <Plus className="w-4 h-4 stroke-[2.2]" />
              </button>

              {/* وسط دکمه: 1 */}
              <div className="flex-1 flex items-center justify-center px-1">
                <span
                  className="text-[15px] font-bold text-white text-center"
                  style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                >
                  {toPersianDigits(currentQuantity)}
                </span>
              </div>

              {/* سمت چپ: سطل آشغال */}
              <button
                type="button"
                onClick={handleDecrement}
                className="w-9 h-8 flex items-center justify-center hover:bg-white/15 active:scale-90 text-white cursor-pointer"
                aria-label={currentQuantity === 1 ? 'حذف از سبد خرید' : 'کاهش تعداد'}
              >
                {currentQuantity === 1 ? (
                  <Trash2 className="w-3.5 h-3.5 text-neutral-300" />
                ) : (
                  <Minus className="w-3.5 h-3.5 stroke-[2.2]" />
                )}
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleAddToCartClick}
              className="py-2.5 px-4 text-[12px] font-medium tracking-wider uppercase transition-colors cursor-pointer bg-black text-white hover:bg-neutral-800"
              style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
            >
              افزودن به سبد
            </button>
          )}
        </div>
      </div>

    </div>
  );
};

