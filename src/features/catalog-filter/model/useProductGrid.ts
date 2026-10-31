'use client';
import { useMemo, useState } from 'react';
import type { Product } from '../../../types';
export function useProductGrid(products: Product[], activeCategory: string) {
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const filteredProducts = useMemo(() => {
    const list = activeCategory === 'all' ? [...products] : products.filter((product) => product.category === activeCategory);
    return sortBy === 'price-asc' ? list.sort((a, b) => a.price - b.price) : sortBy === 'price-desc' ? list.sort((a, b) => b.price - a.price) : list;
  }, [products, activeCategory, sortBy]);
  return { sortBy, setSortBy, filteredProducts };
}

