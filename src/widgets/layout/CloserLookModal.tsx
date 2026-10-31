import React, { useState } from 'react';
import { X, Check, ShoppingBag, ArrowRight } from '@mynaui/icons-react';
import { HERO_PRODUCTS } from '../../data/mockData';
import { Product } from '../../types';
import { formatTomanPrice, toPersianDigits } from '../../utils/persianNumbers';

interface CloserLookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onQuickAdd: (product: Product, size: string) => void;
  onAddAllHeroPieces: () => void;
}

export const CloserLookModal: React.FC<CloserLookModalProps> = ({
  isOpen,
  onClose,
  onQuickAdd,
  onAddAllHeroPieces,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product>(HERO_PRODUCTS[0]);
  const [selectedSize, setSelectedSize] = useState<string>(HERO_PRODUCTS[0].sizes[0]);
  const [justAdded, setJustAdded] = useState(false);
  const [addedAll, setAddedAll] = useState(false);

  if (!isOpen) return null;

  const handleItemSelect = (p: Product) => {
    setSelectedProduct(p);
    setSelectedSize(p.sizes[0]);
  };

  const handleAddCurrent = () => {
    onQuickAdd(selectedProduct, selectedSize);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const handleAddEnsemble = () => {
    onAddAllHeroPieces();
    setAddedAll(true);
    setTimeout(() => setAddedAll(false), 2500);
  };

  const ensembleTotal = HERO_PRODUCTS.reduce((acc, item) => acc + item.price, 0);

  return (
    <div
      id="closer-look-modal"
      dir="rtl"
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200 font-tommy"
    >
      <div className="relative w-full max-w-2xl bg-neutral-900 border border-white/15 text-white shadow-2xl my-auto min-h-screen sm:min-h-0 sm:rounded-none overflow-hidden flex flex-col text-right">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-neutral-950/80">
          <div>
            <span className="text-[10px] uppercase text-amber-300 font-semibold">
              تحلیل و بررسی استایل
            </span>
            <h2 className="text-base sm:text-lg font-bold text-white">
              ست برگزیده پاییز ۲۰۲۶
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="بستن"
            className="p-2 text-white/70 hover:text-white rounded-none hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 flex-1 overflow-y-auto space-y-6">
          {/* Piece Switcher Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            {HERO_PRODUCTS.map((item) => {
              const isSelected = item.id === selectedProduct.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemSelect(item)}
                  className={`flex-shrink-0 px-3 py-2 text-xs font-medium border transition-all text-right ${
                    isSelected
                      ? 'bg-white text-black border-white'
                      : 'bg-neutral-800/80 text-white/70 border-white/10 hover:border-white/30'
                  }`}
                >
                  <p className="font-bold text-[11px] truncate max-w-[130px]" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>{item.name}</p>
                  <p className={`text-[10px] ${isSelected ? 'text-neutral-700' : 'text-neutral-400'}`} style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>{formatTomanPrice(item.price)}</p>
                </button>
              );
            })}
          </div>

          {/* Detailed View of Currently Selected Piece */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
            {/* Product Image */}
            <div className="relative aspect-[3/4] bg-neutral-950 border border-white/10 overflow-hidden rounded-none">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2.5 right-2.5 bg-black/70 backdrop-blur-xs text-white text-[9px] px-2 py-0.5 border border-white/20">
                {selectedProduct.badge || 'پاییز ۲۰۲۶'}
              </div>
            </div>

            {/* Info & Spec Details */}
            <div className="space-y-4">
              <div>
                <span className="text-[10px] text-neutral-400 font-medium">
                  {selectedProduct.subtitle}
                </span>
                <h3 className="text-base font-bold text-white mt-0.5 leading-snug" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>
                  {selectedProduct.name}
                </h3>
                <p className="text-sm font-semibold text-white/90 mt-1" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>{formatTomanPrice(selectedProduct.price)}</p>
                <p className="text-xs text-neutral-300 mt-2 leading-relaxed" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>{selectedProduct.description}</p>
              </div>

              {/* Fabric Specification */}
              <div className="p-3 bg-neutral-950/60 border border-white/10 text-xs">
                <span className="text-[10px] text-amber-300 block font-semibold mb-0.5" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>
                  پارچه و ساختار دوخت
                </span>
                <span className="text-white/90" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>{selectedProduct.fabric}</span>
              </div>

              {/* Size Selection */}
              <div>
                <label className="text-[11px] text-neutral-300 block mb-2 font-medium" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>
                  انتخاب سایز
                </label>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`min-w-[40px] px-2.5 py-1.5 text-xs font-semibold uppercase border transition-all ${
                        selectedSize === sz
                          ? 'bg-white text-black border-white'
                          : 'bg-neutral-800 text-white/80 border-white/15 hover:border-white/40'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add Single Item Button */}
              <button
                onClick={handleAddCurrent}
                className="w-full py-3 bg-white hover:bg-neutral-200 text-black font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer"
                style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
              >
                {justAdded ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                    <span>آیتم انتخاب‌شده ({selectedSize}) افزوده شد</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>افزودن به سبد خرید — {formatTomanPrice(selectedProduct.price)}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick Ensemble Purchase Bar */}
          <div className="border-t border-white/15 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 bg-neutral-950/40 p-3 rounded-none">
            <div className="text-right w-full sm:w-auto">
              <p className="text-xs font-bold text-white" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>خرید ست کامل این لوک</p>
              <p className="text-[11px] text-neutral-400" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>شامل تمامی {toPersianDigits(4)} تکه هماهنگ: {formatTomanPrice(ensembleTotal)}</p>
            </div>
            <button
              onClick={handleAddEnsemble}
              className="w-full sm:w-auto px-5 py-2.5 border border-white bg-[#4d3d32] hover:bg-[#3d3027] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
              style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
            >
              {addedAll ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>ست کامل به سبد خرید افزوده شد</span>
                </>
              ) : (
                <>
                  <span>افزودن هر {toPersianDigits(4)} تکه</span>
                  <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

