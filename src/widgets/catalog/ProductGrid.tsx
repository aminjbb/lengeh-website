import React from 'react';
import { Product } from '../../types';
import { ProductCard } from '../../features/product-interaction/ui/ProductCard';
import { CATEGORIES } from '../../data/mockData';
import { ArrowUpDown } from '@mynaui/icons-react';
import { useProductGrid } from '../../features/catalog-filter/model/useProductGrid';
import { SectionHeading } from '../../shared/ui';

interface ProductGridProps {
  products: Product[];
  onQuickAdd: (product: Product, size: string) => void;
  onOpenQuickView: (product: Product) => void;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onQuickAdd,
  onOpenQuickView,
  activeCategory,
  onCategoryChange,
}) => {
  const { sortBy, setSortBy, filteredProducts } = useProductGrid(products, activeCategory);

  return (
    <section id="collection-grid" className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <SectionHeading
        eyebrow="Fall 2026 Collection"
        title="Seasonal Staples & Collaborations"
        description="Elevated textures, Japanese craftsmanship, and transitional silhouettes engineered for the season ahead."
      />

      {/* Category Filter Pills (Horizontal swipeable on mobile) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 no-scrollbar border-b border-neutral-200">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`flex-shrink-0 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all rounded-none ${
                isActive
                  ? 'bg-black text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid Utility Bar: Item count and Sort */}
      <div className="flex items-center justify-between text-xs text-neutral-500 mb-6 pb-2">
        <span>Showing {filteredProducts.length} items</span>

        <div className="flex items-center gap-2">
          <ArrowUpDown className="w-3.5 h-3.5" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-transparent text-neutral-800 font-medium text-xs border-none focus:outline-none cursor-pointer uppercase tracking-wider"
          >
            <option value="featured">Sort: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Cards Grid: 2 columns on mobile, 3-4 on tablet/desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickAdd={onQuickAdd}
            onOpenQuickView={onOpenQuickView}
          />
        ))}
      </div>
    </section>
  );
};



