'use client';

import { useState } from 'react';

export function useProductCard(defaultSize: string) {
  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [isHovered, setIsHovered] = useState(false);
  const [showSizePicker, setShowSizePicker] = useState(false);
  const [added, setAdded] = useState(false);

  const markAdded = () => {
    setAdded(true);
    setShowSizePicker(false);
    window.setTimeout(() => setAdded(false), 2000);
  };

  return { selectedSize, setSelectedSize, isHovered, setIsHovered, showSizePicker, setShowSizePicker, added, markAdded };
}

