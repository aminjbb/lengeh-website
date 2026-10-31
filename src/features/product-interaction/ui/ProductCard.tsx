import React from 'react';
import { Product } from '../../../types';
import { Plus, Check, Eye } from '@mynaui/icons-react';
import { toPersianDigits } from '../../../utils/persianNumbers';
import { useProductCard } from '../model/useProductCard';
import { ProductPrice } from '../../../shared/ui';
import { ResponsiveImage } from '../../../shared/ui';

interface ProductCardProps {
  product: Product;
  onQuickAdd: (product: Product, size: string) => void;
  onOpenQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickAdd,
  onOpenQuickView,
}) => {
  const { isHovered, setIsHovered, showSizePicker, setShowSizePicker, added, markAdded } = useProductCard(product.sizes[0]);

  const handleAdd = (sizeToUse: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onQuickAdd(product, sizeToUse);
    markAdded();
  };

  return (
    <div
      id={`product-card-${product.id}`}
      className="group relative flex flex-col bg-white border border-neutral-200/80 transition-shadow hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowSizePicker(false);
      }}
    >
      {/* Product Image Container */}
      <div
        className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 cursor-pointer"
        onClick={() => onOpenQuickView(product)}
      >
        <ResponsiveImage
          src={isHovered && product.secondaryImage ? product.secondaryImage : product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-xs text-white text-[9px] font-semibold tracking-widest uppercase px-2 py-0.5 border border-white/20">
            {product.badge}
          </div>
        )}

        {/* Quick View Floating Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenQuickView(product);
          }}
          aria-label={`Quick View ${product.name}`}
          className="absolute top-2.5 right-2.5 p-2 bg-white/90 text-neutral-900 rounded-none opacity-0 group-hover:opacity-100 transition-opacity shadow hover:bg-white"
        >
          <Eye className="w-3.5 h-3.5" />
        </button>

        {/* Quick Add Overlay on Mobile/Hover */}
        <div className="absolute bottom-0 inset-x-0 p-2 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end">
          {showSizePicker ? (
            <div
              className="bg-white p-2 border border-neutral-200 shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-150"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-[10px] uppercase font-bold text-neutral-600 mb-1 tracking-wider text-center">
                Select Size
              </div>
              <div className="flex flex-wrap gap-1 justify-center">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={(e) => handleAdd(sz, e)}
                    className="px-2 py-1 text-[10px] font-bold uppercase border border-neutral-300 hover:border-black hover:bg-black hover:text-white transition-colors"
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (product.sizes.length === 1) {
                  handleAdd(product.sizes[0], e);
                } else {
                  setShowSizePicker(true);
                }
              }}
              className="w-full py-2 bg-white/95 hover:bg-white text-neutral-950 text-[11px] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-98"
            >
              {added ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5" />
                  <span>Quick Add</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Product Details */}
      <div className="p-3.5 flex flex-col flex-1 justify-between text-left">
        <div>
          <span className="text-[10px] tracking-wider uppercase text-neutral-500 font-medium block">
            {product.colorway}
          </span>
          <h3
            onClick={() => onOpenQuickView(product)}
            className="font-medium text-xs sm:text-sm text-neutral-900 line-clamp-1 mt-0.5 hover:underline cursor-pointer"
          >
            {product.name}
          </h3>
        </div>

        <div className="mt-2.5 flex items-baseline justify-between pt-1 border-t border-neutral-100">
          <span
            className="text-xs sm:text-sm font-semibold text-neutral-900"
            style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
          >
            <ProductPrice value={product.price} />
          </span>
          <span className="text-[10px] text-neutral-400 uppercase tracking-wider">{product.category}</span>
        </div>
      </div>
    </div>
  );
};



