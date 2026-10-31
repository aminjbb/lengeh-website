'use client';

import { useEffect, useState } from 'react';
import type { Product } from '../../../types';

export function useGarderob() {
  const [ids, setIds] = useState<string[]>([]);
  useEffect(() => {
    try {
      const parsed: unknown = JSON.parse(window.localStorage.getItem('lengeh_garderob') || '[]');
      setIds(Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === 'string') : []);
    } catch { setIds([]); }
  }, []);

  const toggle = (product: Product) => {
    setIds((current) => {
      const next = current.includes(product.id) ? current.filter((id) => id !== product.id) : [...current, product.id];
      try { window.localStorage.setItem('lengeh_garderob', JSON.stringify(next)); } catch { /* optional storage */ }
      return next;
    });
  };
  return { ids, toggle };
}


