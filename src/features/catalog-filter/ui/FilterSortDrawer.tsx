import React from 'react';
import { X, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { useFilterSortDrawer } from '../model/useFilterSortDrawer';

export type SortOption = 'featured' | 'popular' | 'price-asc' | 'price-desc';

interface FilterSortDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSort: SortOption;
  onSelectSort: (sort: SortOption) => void;
  selectedColors: string[];
  onToggleColor: (color: string) => void;
  selectedSizes: string[];
  onToggleSize: (size: string) => void;
  hideSoldOut: boolean;
  onToggleHideSoldOut: () => void;
  onClearAll: () => void;
  activeFiltersCount: number;
}

export const COLOR_OPTIONS = [
  { id: 'beige', label: 'کرم / بژ', enLabel: 'Beige' },
  { id: 'black', label: 'مشکی', enLabel: 'Black' },
  { id: 'blue', label: 'آبی / سرمه‌ای', enLabel: 'Blue' },
  { id: 'brown', label: 'قهوه‌ای', enLabel: 'Brown' },
  { id: 'grey', label: 'خاکستری / طوسی', enLabel: 'Grey' },
  { id: 'white', label: 'سفید', enLabel: 'White' },
  { id: 'camel', label: 'شتری / خاکی', enLabel: 'Camel / Khaki' },
];

export const SIZE_OPTIONS = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '34', '36', '38', '40', '42'];

export const FilterSortDrawer: React.FC<FilterSortDrawerProps> = ({
  isOpen,
  onClose,
  selectedSort,
  onSelectSort,
  selectedColors,
  onToggleColor,
  selectedSizes,
  onToggleSize,
  hideSoldOut,
  onToggleHideSoldOut,
  onClearAll,
  activeFiltersCount,
}) => {
  // Accordion open/close states (matching reference images)
  const { isSortOpen, setIsSortOpen, isColorOpen, setIsColorOpen, isSizeOpen, setIsSizeOpen } = useFilterSortDrawer();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-tommy select-none" dir="rtl">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Offcanvas Drawer Card */}
      <div className="fixed inset-y-0 right-0 sm:right-auto sm:left-0 md:left-auto md:right-0 max-w-full flex">
        <div className="w-screen max-w-[360px] sm:max-w-[400px] bg-white shadow-2xl flex flex-col h-full transform transition-transform duration-300 ease-in-out">
          
          {/* 1. Header (Matching Reference Image) */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-200">
            <h2
              className="text-[15px] sm:text-[16px] font-medium text-neutral-900 tracking-tight"
              style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
            >
              فیلتر و مرتب‌سازی
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-neutral-500 hover:text-black transition-colors cursor-pointer"
              aria-label="بستن"
            >
              <X className="w-5 h-5 stroke-[1.75]" />
            </button>
          </div>

          {/* 2. Scrollable Body */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            
            {/* Section A: SORT BY (مرتب‌سازی) */}
            <div className="border-b border-neutral-200 pb-5">
              <button
                type="button"
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="w-full flex items-center justify-between py-1 text-right cursor-pointer group"
              >
                <span
                  className="text-[12px] font-semibold text-neutral-800 tracking-wider uppercase"
                  style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                >
                  مرتب‌سازی
                </span>
                {isSortOpen ? (
                  <ChevronUp className="w-4 h-4 text-neutral-500 group-hover:text-black" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-neutral-500 group-hover:text-black" />
                )}
              </button>

              {isSortOpen && (
                <div className="mt-3.5 space-y-2">
                  {/* Row 1: پیشنهادی و محبوب‌ترین مقابل هم در یک ردیف */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectSort('featured')}
                      className={`py-2.5 px-2 text-center text-[11.5px] sm:text-[12px] border transition-colors cursor-pointer ${
                        selectedSort === 'featured'
                          ? 'bg-[#d9d9d9] text-black border-transparent font-medium'
                          : 'bg-white text-neutral-700 border-neutral-200 hover:border-black'
                      }`}
                      style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                    >
                      پیشنهادی
                    </button>
                    <button
                      type="button"
                      onClick={() => onSelectSort('popular')}
                      className={`py-2.5 px-2 text-center text-[11.5px] sm:text-[12px] border transition-colors cursor-pointer ${
                        selectedSort === 'popular'
                          ? 'bg-[#d9d9d9] text-black border-transparent font-medium'
                          : 'bg-white text-neutral-700 border-neutral-200 hover:border-black'
                      }`}
                      style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                    >
                      محبوب‌ترین
                    </button>
                  </div>

                  {/* Row 2: کمترین قیمت و بیشترین قیمت مقابل هم در یک ردیف */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectSort('price-asc')}
                      className={`py-2.5 px-2 text-center text-[11.5px] sm:text-[12px] border transition-colors cursor-pointer ${
                        selectedSort === 'price-asc'
                          ? 'bg-[#d9d9d9] text-black border-transparent font-medium'
                          : 'bg-white text-neutral-700 border-neutral-200 hover:border-black'
                      }`}
                      style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                    >
                      کمترین قیمت
                    </button>
                    <button
                      type="button"
                      onClick={() => onSelectSort('price-desc')}
                      className={`py-2.5 px-2 text-center text-[11.5px] sm:text-[12px] border transition-colors cursor-pointer ${
                        selectedSort === 'price-desc'
                          ? 'bg-[#d9d9d9] text-black border-transparent font-medium'
                          : 'bg-white text-neutral-700 border-neutral-200 hover:border-black'
                      }`}
                      style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                    >
                      بیشترین قیمت
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Section B: موجودی با تاگل - نمایش کالاهای موجود */}
            <div className="border-b border-neutral-200 py-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="stock-toggle"
                  className="text-[12px] font-semibold text-neutral-800 tracking-wider cursor-pointer select-none"
                  style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                >
                  نمایش کالاهای موجود
                </label>
                <div dir="ltr">
                  <button
                    id="stock-toggle"
                    type="button"
                    role="switch"
                    aria-checked={hideSoldOut}
                    onClick={onToggleHideSoldOut}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      hideSoldOut ? 'bg-black' : 'bg-neutral-300'
                    }`}
                    aria-label="نمایش کالاهای موجود"
                  >
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                        hideSoldOut ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Section C: رنگ (Color - matching Reference Image 2) */}
            <div className="border-b border-neutral-200 pb-5">
              <button
                type="button"
                onClick={() => setIsColorOpen(!isColorOpen)}
                className="w-full flex items-center justify-between py-1 text-right cursor-pointer group"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="text-[12px] font-semibold text-neutral-800 tracking-wider uppercase"
                    style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                  >
                    رنگ
                  </span>
                  {selectedColors.length > 0 && (
                    <span className="text-[10px] bg-neutral-100 text-neutral-700 px-1.5 py-0.5 rounded-full">
                      {selectedColors.length}
                    </span>
                  )}
                </div>
                {isColorOpen ? (
                  <ChevronUp className="w-4 h-4 text-neutral-500 group-hover:text-black" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-neutral-500 group-hover:text-black" />
                )}
              </button>

              {isColorOpen && (
                <div className="mt-3.5 space-y-2.5">
                  {COLOR_OPTIONS.map((col) => {
                    const isChecked = selectedColors.includes(col.id);
                    return (
                      <label
                        key={col.id}
                        onClick={() => onToggleColor(col.id)}
                        className="flex items-center gap-3 cursor-pointer py-1 group select-none"
                      >
                        {/* Square Checkbox matching Reference Image 2 */}
                        <div
                          className={`w-[17px] h-[17px] border rounded-none flex items-center justify-center transition-colors ${
                            isChecked
                              ? 'border-black bg-black text-white'
                              : 'border-neutral-800 bg-white group-hover:border-black'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span
                          className={`text-[12.5px] transition-colors ${
                            isChecked ? 'text-black font-medium' : 'text-neutral-700 group-hover:text-black'
                          }`}
                          style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                        >
                          {col.label}
                        </span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Section D: سایز (Size) */}
            <div className="pb-3">
              <button
                type="button"
                onClick={() => setIsSizeOpen(!isSizeOpen)}
                className="w-full flex items-center justify-between py-1 text-right cursor-pointer group"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="text-[12px] font-semibold text-neutral-800 tracking-wider uppercase"
                    style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                  >
                    سایز
                  </span>
                  {selectedSizes.length > 0 && (
                    <span className="text-[10px] bg-neutral-100 text-neutral-700 px-1.5 py-0.5 rounded-full">
                      {selectedSizes.length}
                    </span>
                  )}
                </div>
                {isSizeOpen ? (
                  <ChevronUp className="w-4 h-4 text-neutral-500 group-hover:text-black" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-neutral-500 group-hover:text-black" />
                )}
              </button>

              {isSizeOpen && (
                <div className="mt-3.5 grid grid-cols-4 gap-2">
                  {SIZE_OPTIONS.map((sz) => {
                    const isSelected = selectedSizes.includes(sz);
                    return (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => onToggleSize(sz)}
                        className={`py-2 text-center text-[11px] font-medium border transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-black text-white border-black'
                            : 'bg-white text-neutral-700 border-neutral-200 hover:border-black'
                        }`}
                      >
                        {sz}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* 3. Footer Fixed Action Bar (Matching Reference Image 1) */}
          <div className="p-4 border-t border-neutral-200 bg-white flex items-center gap-2">
            {activeFiltersCount > 0 && (
              <button
                type="button"
                onClick={onClearAll}
                className="py-3 px-3 border border-neutral-300 hover:border-black text-neutral-700 text-[11.5px] transition-colors cursor-pointer"
                style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
              >
                پاک کردن
              </button>
            )}
            
            {/* APPLY Button matching reference photo */}
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 bg-[#2d2d2d] hover:bg-black text-white text-[12px] tracking-wider uppercase font-medium transition-colors cursor-pointer text-center"
              style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
            >
              اعمال فیلترها
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



