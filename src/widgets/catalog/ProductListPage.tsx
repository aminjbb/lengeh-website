import React, { useState, useMemo } from 'react';
import { Product } from '../../types';
import { ALL_PRODUCTS } from '../../data/mockData';
import { GarderobProductCard } from '../../features/garderob/ui/GarderobProductCard';
import { FilterSortDrawer, SortOption } from '../../features/catalog-filter/ui/FilterSortDrawer';
import { SlidersHorizontal } from 'lucide-react';
import { toPersianDigits } from '../../utils/persianNumbers';

interface ProductListPageProps {
  initialGender?: 'all' | 'men' | 'women';
  initialCollection?: string;
  initialCategory?: string;
  initialBadge?: string;
  onSelectProduct: (product: Product) => void;
  // Optional legacy props kept for type compatibility
  currency?: any;
  onBackToHome?: () => void;
  garderobIds?: string[];
  onToggleGarderob?: (product: Product) => void;
}

export const ProductListPage: React.FC<ProductListPageProps> = ({
  initialGender = 'all',
  initialCollection,
  initialCategory = 'all',
  initialBadge,
  onSelectProduct,
}) => {
  // Offcanvas Drawer state
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState<SortOption>('featured');
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [hideSoldOut, setHideSoldOut] = useState(false);

  // Toggle helpers
  const handleToggleColor = (colorId: string) => {
    setSelectedColors((prev) =>
      prev.includes(colorId) ? prev.filter((c) => c !== colorId) : [...prev, colorId]
    );
  };

  const handleToggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handleClearAll = () => {
    setSelectedSort('featured');
    setSelectedColors([]);
    setSelectedSizes([]);
    setHideSoldOut(false);
  };

  const activeFiltersCount =
    (selectedSort !== 'featured' ? 1 : 0) +
    selectedColors.length +
    selectedSizes.length +
    (hideSoldOut ? 1 : 0);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let list = [...ALL_PRODUCTS];

    // Filter by Gender if specified
    if (initialGender && initialGender !== 'all') {
      list = list.filter(
        (p) => p.gender === initialGender || p.gender === 'unisex'
      );
    }

    // Filter by Collection if specified
    if (initialCollection && initialCollection !== 'all') {
      list = list.filter((p) => {
        if (!p.collection) return false;
        return (
          p.collection.toLowerCase().includes(initialCollection.toLowerCase()) ||
          p.subtitle.toLowerCase().includes(initialCollection.toLowerCase())
        );
      });
    }

    // Filter by Sub-category if specified
    if (initialCategory && initialCategory !== 'all') {
      list = list.filter((p) => p.category === initialCategory);
    }

    // Filter by Special badge if specified
    if (initialBadge === 'special') {
      list = list.filter((p) => p.badge && p.badge.includes('ویژه'));
    }

    // Filter by Color
    if (selectedColors.length > 0) {
      list = list.filter((p) => {
        const colorway = (p.colorway || '').toLowerCase();
        return selectedColors.some((colorId) => {
          switch (colorId) {
            case 'beige':
              return (
                colorway.includes('کرم') ||
                colorway.includes('بژ') ||
                colorway.includes('اکرو') ||
                colorway.includes('استخوانی')
              );
            case 'black':
              return (
                colorway.includes('مشکی') ||
                colorway.includes('دودی') ||
                colorway.includes('کربنی')
              );
            case 'blue':
              return colorway.includes('آبی') || colorway.includes('سرمه‌ای');
            case 'brown':
              return (
                colorway.includes('قهوه‌ای') ||
                colorway.includes('تافی') ||
                colorway.includes('اسپرسو')
              );
            case 'grey':
              return (
                colorway.includes('خاکستری') ||
                colorway.includes('طوسی') ||
                colorway.includes('ملانژ') ||
                colorway.includes('سنگی') ||
                colorway.includes('زغالی')
              );
            case 'white':
              return colorway.includes('سفید') || colorway.includes('گچی');
            case 'camel':
              return (
                colorway.includes('شتری') ||
                colorway.includes('خاکی') ||
                colorway.includes('ماسه‌ای')
              );
            default:
              return false;
          }
        });
      });
    }

    // Filter by Size
    if (selectedSizes.length > 0) {
      list = list.filter((p) => {
        return p.sizes && selectedSizes.some((sz) => p.sizes.includes(sz));
      });
    }

    // Filter by Stock / Availability (نمایش کالاهای موجود)
    if (hideSoldOut) {
      list = list.filter((p) => p.inStock !== false);
    }

    // Sort products
    if (selectedSort === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (selectedSort === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (selectedSort === 'popular') {
      list.sort((a, b) => {
        const aScore = a.badge ? 2 : a.isHeroPiece ? 1 : 0;
        const bScore = b.badge ? 2 : b.isHeroPiece ? 1 : 0;
        return bScore - aScore;
      });
    }

    return list;
  }, [
    initialGender,
    initialCollection,
    initialCategory,
    initialBadge,
    selectedSort,
    selectedColors,
    selectedSizes,
    hideSoldOut,
  ]);

  // Page title generator matching user requirements (e.g. "کالکشن SHIBUI")
  const pageTitle = useMemo(() => {
    if (initialCollection && initialCollection !== 'all') {
      return initialCollection.startsWith('کالکشن')
        ? initialCollection
        : `کالکشن ${initialCollection}`;
    }
    if (initialGender === 'women') {
      return 'محصولات زنانه';
    }
    if (initialGender === 'men') {
      return 'محصولات مردانه';
    }
    if (initialBadge === 'special') {
      return 'پیشنهادهای ویژه امروز';
    }
    return 'کالکشن SHIBUI';
  }, [initialCollection, initialGender, initialBadge]);

  return (
    <div dir="rtl" className="w-full min-h-screen bg-white text-neutral-900 pb-28 font-tommy">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-4 sm:pt-6">
        {/* Header Bar: Page Title + Filter & Sort Icon Button */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-200/80">
          {/* Title */}
          <h1
            className="text-[17px] sm:text-[20px] font-medium text-neutral-900 tracking-tight"
            style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
          >
            {pageTitle}
          </h1>

          {/* Filter & Sort Icon Button */}
          <button
            type="button"
            onClick={() => setIsFilterDrawerOpen(true)}
            className="flex items-center gap-1.5 p-2 sm:px-3 sm:py-1.5 border border-neutral-300 hover:border-black text-neutral-800 transition-colors cursor-pointer group rounded-none"
            title="فیلتر و مرتب‌سازی"
            aria-label="فیلتر و مرتب‌سازی"
          >
            <SlidersHorizontal className="w-4 h-4 text-neutral-800 group-hover:scale-110 transition-transform stroke-[1.8]" />
            {activeFiltersCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-black text-white text-[10px] flex items-center justify-center font-sans font-medium">
                {toPersianDigits(activeFiltersCount)}
              </span>
            )}
          </button>
        </div>

        {/* Product Cards Grid: 4 columns on desktop / tablet, 2 on mobile */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center text-neutral-500 text-[13px] font-normal">
            هیچ محصولی با فیلترهای انتخابی یافت نشد.
            <div className="mt-3">
              <button
                type="button"
                onClick={handleClearAll}
                className="text-xs text-black underline underline-offset-4 cursor-pointer"
                style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
              >
                پاک کردن فیلترها
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-3 sm:gap-x-5 lg:gap-x-6 gap-y-8 sm:gap-y-12">
            {filteredProducts.map((product) => (
              <GarderobProductCard
                key={product.id}
                product={product}
                onClick={onSelectProduct}
              />
            ))}
          </div>
        )}
      </div>

      {/* Offcanvas Drawer for Filter & Sort */}
      <FilterSortDrawer
        isOpen={isFilterDrawerOpen}
        onClose={() => setIsFilterDrawerOpen(false)}
        selectedSort={selectedSort}
        onSelectSort={(sort) => setSelectedSort(sort)}
        selectedColors={selectedColors}
        onToggleColor={handleToggleColor}
        selectedSizes={selectedSizes}
        onToggleSize={handleToggleSize}
        hideSoldOut={hideSoldOut}
        onToggleHideSoldOut={() => setHideSoldOut((prev) => !prev)}
        onClearAll={handleClearAll}
        activeFiltersCount={activeFiltersCount}
      />
    </div>
  );
};


