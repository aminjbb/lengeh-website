'use client';

import { useEffect, useState } from 'react';
import type { Product } from '../../../types';

export function useGarderob() {
  const [ids, setIds] = useState<string[]>([]);
  useEffect(() => {
    try { setIds(JSON.parse(window.localStorage.getItem('lengeh_garderob') || '[]') as string[]); } catch { setIds([]); }
  }, []);

  const toggle = (product: Product) => {
    setIds((current) => {
      const next = current.includes(product.id) ? current.filter((id) => id !== product.id) : [...current, product.id];
      window.localStorage.setItem('lengeh_garderob', JSON.stringify(next));
      return next;
    });
  };
  return { ids, toggle };
}


