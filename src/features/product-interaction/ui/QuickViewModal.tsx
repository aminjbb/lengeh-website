import React, { useState } from 'react';
import { Product } from '../../../types';
import { X, Check, ShoppingBag, ShieldCheck, Truck, Refresh } from '@mynaui/icons-react';
import { formatTomanPrice, toPersianDigits } from '../../../utils/persianNumbers';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div
      id="quickview-modal-backdrop"
      dir="rtl"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200 font-tommy"
    >
      <div
        id="quickview-modal-content"
        className="relative w-full max-w-2xl bg-white border border-neutral-200 text-neutral-900 shadow-2xl rounded-none overflow-hidden flex flex-col md:flex-row my-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="بستن پنجره محصول"
          className="absolute top-3 left-3 z-10 p-2 bg-white/90 hover:bg-neutral-100 rounded-none text-neutral-700 hover:text-black transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image */}
        <div className="md:w-1/2 aspect-[3/4] bg-neutral-100 relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          {product.badge && (
            <div className="absolute top-3 right-3 bg-black text-white text-[9px] font-bold px-2.5 py-1">
              {product.badge}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 p-5 sm:p-6 flex flex-col justify-between overflow-y-auto max-h-[80vh] text-right">
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-semibold text-neutral-500">
                {product.subtitle}
              </span>
              <h2 className="font-tommy text-lg sm:text-xl text-neutral-900 font-medium leading-snug mt-0.5">
                {product.name}
              </h2>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-base font-bold text-neutral-900" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>
                  {formatTomanPrice(product.price)}
                </span>
                <span className="text-xs text-neutral-500">• رنگ: {product.colorway}</span>
              </div>
            </div>

            <p className="text-xs text-neutral-600 leading-relaxed border-t border-b border-neutral-100 py-3">
              {product.description}
            </p>

            {/* Fabric Highlight */}
            <div className="text-xs">
              <span className="font-bold text-neutral-800 text-[10px] block mb-1">
                مشخصات متریال و پارچه
              </span>
              <span className="text-neutral-600 bg-neutral-100 px-2.5 py-1 inline-block text-[11px]">
                {product.fabric}
              </span>
            </div>

            {/* Size Selector */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-neutral-800">
                  انتخاب سایز: <span className="font-normal text-neutral-600">{selectedSize}</span>
                </span>
                <span className="text-[10px] text-neutral-500 underline cursor-pointer">راهنمای سایز</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`min-w-[42px] px-3 py-1.5 text-xs font-bold uppercase border transition-all ${
                      selectedSize === sz
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-neutral-800 border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Key Features List */}
            {product.details && product.details.length > 0 && (
              <div className="text-xs pt-1">
                <span className="font-bold text-neutral-800 text-[10px] block mb-1.5">
                  جزئیات دوخت و طراحی
                </span>
                <ul className="list-disc pr-4 space-y-1 text-neutral-600 text-[11px]">
                  {product.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Add to Bag Button */}
          <div className="pt-5 mt-4 border-t border-neutral-100">
            <button
              onClick={handleAdd}
              className="w-full py-3 bg-black hover:bg-neutral-800 active:scale-[0.99] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow"
            >
              {added ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>سایز {selectedSize} به سبد خرید افزوده شد</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>افزودن به سبد خرید — {formatTomanPrice(product.price)}</span>
                </>
              )}
            </button>

            {/* Guarantees */}
            <div className="mt-3 flex items-center justify-center gap-4 text-[10px] text-neutral-500">
              <span className="flex items-center gap-1">
                <Truck className="w-3 h-3" /> ارسال اکسپرس
              </span>
              <span className="flex items-center gap-1">
                <Refresh className="w-3 h-3" /> ضمانت تعویض و بازگشت
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


