'use client';

import { useMemo, useState } from 'react';
import { ALL_PRODUCTS } from '../../../data/mockData';

export function useSearchModal() {
  const [query, setQuery] = useState('');
  const results = useMemo(() => {
    if (!query.trim()) return ALL_PRODUCTS.slice(0, 4);
    const normalized = query.toLowerCase();
    return ALL_PRODUCTS.filter((product) => [product.name, product.subtitle, product.category, product.colorway]
      .some((value) => value.toLowerCase().includes(normalized)));
  }, [query]);
  return { query, setQuery, results };
}

