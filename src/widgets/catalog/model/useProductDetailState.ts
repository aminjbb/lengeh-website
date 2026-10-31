'use client';

import { useEffect, useMemo, useState } from 'react';
import type { CartItem, Product } from '../../../types';

export function useProductDetailState(product: Product, cartItems?: CartItem[]) {
  const [selectedSize, setSelectedSize] = useState(product.sizes?.includes('S') ? 'S' : product.sizes?.[0] || 'S');
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isShowingToastFeedback, setIsShowingToastFeedback] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const cartItemForCurrentSize = useMemo(() => cartItems?.find((item) => item.product.id === product.id && item.selectedSize === selectedSize), [cartItems, product.id, selectedSize]);

  useEffect(() => {
    setSelectedSize(product.sizes?.includes('S') ? 'S' : product.sizes?.[0] || 'S');
    setActiveImageIndex(0);
    setIsShowingToastFeedback(false);
  }, [product.id, product.sizes]);

  return {
    selectedSize, setSelectedSize, openAccordion, setOpenAccordion,
    isSizeGuideOpen, setIsSizeGuideOpen, lightboxImage, setLightboxImage,
    isShowingToastFeedback, setIsShowingToastFeedback, activeImageIndex, setActiveImageIndex,
    currentQuantity: cartItemForCurrentSize?.quantity || 0,
  };
}
