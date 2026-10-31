import React from 'react';
import { X, Search, ArrowRight } from '@mynaui/icons-react';
import { Product } from '../../../types';
import { toPersianDigits } from '../../../utils/persianNumbers';
import { useSearchModal } from '../model/useSearchModal';
import { ProductPrice } from '../../../shared/ui';
import { ResponsiveImage } from '../../../shared/ui';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const { query, setQuery, results } = useSearchModal();

  if (!isOpen) return null;

  return (
    <div
      id="search-modal-backdrop"
      dir="rtl"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 font-tommy"
    >
      <div className="w-full max-w-xl bg-neutral-900 border border-white/15 text-white shadow-2xl overflow-hidden rounded-none text-right">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
          <Search className="w-5 h-5 text-neutral-400" />
          <input
            type="text"
            autoFocus
            placeholder="جستجو در کالکشن پاییز ۲۰۲۶ (پالتو، بلوزون، شلوار، بوت...)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm text-white placeholder:text-neutral-500 focus:outline-none text-right"
          />
          <button
            onClick={onClose}
            aria-label="بستن جستجو"
            className="p-1 text-neutral-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 max-h-[60vh] overflow-y-auto text-right">
          <span
            className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold block mb-3"
            style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
          >
            {query.trim() ? `نتایج جستجو (${toPersianDigits(results.length)})` : 'جستجوهای پرطرفدار'}
          </span>

          <div className="space-y-2">
            {results.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="flex items-center gap-3 p-2 hover:bg-white/5 cursor-pointer rounded-none transition-colors group text-right"
              >
                <ResponsiveImage
                  src={product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-14 object-cover bg-neutral-800 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4
                    className="text-xs font-semibold text-white group-hover:text-amber-300 transition-colors truncate"
                    style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                  >
                    {product.name}
                  </h4>
                  <p
                    className="text-[11px] text-neutral-400"
                    style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                  >
                    {product.colorway} • <ProductPrice value={product.price} className="text-white/90 font-medium" />
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors rotate-180" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


