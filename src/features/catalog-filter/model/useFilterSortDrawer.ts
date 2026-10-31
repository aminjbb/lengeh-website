'use client';
import { useState } from 'react';
export function useFilterSortDrawer() {
  const [isSortOpen, setIsSortOpen] = useState(true);
  const [isColorOpen, setIsColorOpen] = useState(true);
  const [isSizeOpen, setIsSizeOpen] = useState(false);
  return { isSortOpen, setIsSortOpen, isColorOpen, setIsColorOpen, isSizeOpen, setIsSizeOpen };
}

