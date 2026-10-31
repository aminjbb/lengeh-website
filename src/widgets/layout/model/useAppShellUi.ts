'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { Product, Currency } from '../../../types';

export function useAppShellUi() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCloserLookOpen, setIsCloserLookOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [currency, setCurrency] = useState<Currency>('EUR');
  const [isScrolled, setIsScrolled] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => () => {
    if (toastTimerRef.current !== null) window.clearTimeout(toastTimerRef.current);
  }, []);

  const showToast = useCallback((message: string) => {
    if (toastTimerRef.current !== null) window.clearTimeout(toastTimerRef.current);
    setToastMessage(message);
    toastTimerRef.current = window.setTimeout(() => {
      setToastMessage((current) => current === message ? null : current);
      toastTimerRef.current = null;
    }, 3000);
  }, []);

  return {
    isMenuOpen, setIsMenuOpen, isCartOpen, setIsCartOpen,
    isAccountOpen, setIsAccountOpen, isSearchOpen, setIsSearchOpen,
    isCloserLookOpen, setIsCloserLookOpen, quickViewProduct, setQuickViewProduct,
    currency, setCurrency, isScrolled, toastMessage, showToast,
  };
}

