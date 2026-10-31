'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { Product, CartItem } from '../../../types';

const STORAGE_KEY = 'kith_cart';

/** Owns cart persistence and transitions so screens only consume a cart contract. */
export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const hydrated = useRef(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setItems(JSON.parse(saved) as CartItem[]);
    } catch {
      // Corrupt or unavailable browser storage falls back to an empty cart.
    }
    hydrated.current = true;
  }, []);

  useEffect(() => {
    if (!hydrated.current) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Storage is optional; the in-memory cart remains usable.
    }
  }, [items]);

  const add = useCallback((product: Product, size: string) => {
    setItems((previous) => {
      const existing = previous.find((item) => item.product.id === product.id && item.selectedSize === size);
      return existing
        ? previous.map((item) => item === existing ? { ...item, quantity: item.quantity + 1 } : item)
        : [...previous, { product, selectedSize: size, quantity: 1 }];
    });
  }, []);

  const updateQuantity = useCallback((productId: string, size: string, delta: number) => {
    setItems((previous) => previous.flatMap((item) => {
      if (item.product.id !== productId || item.selectedSize !== size) return [item];
      const quantity = item.quantity + delta;
      return quantity > 0 ? [{ ...item, quantity }] : [];
    }));
  }, []);

  const remove = useCallback((productId: string, size: string) => {
    setItems((previous) => previous.filter((item) => !(item.product.id === productId && item.selectedSize === size)));
  }, []);

  const clear = useCallback(() => setItems([]), []);
  const count = items.reduce((total, item) => total + item.quantity, 0);

  return { items, count, add, updateQuantity, remove, clear };
}
