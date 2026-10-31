'use client';

import { useState } from 'react';
import { LOOKBOOK_STORIES } from '../../../data/mockData';

export function useLookbookSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const previous = () => setActiveIdx((value) => value === 0 ? LOOKBOOK_STORIES.length - 1 : value - 1);
  const next = () => setActiveIdx((value) => value === LOOKBOOK_STORIES.length - 1 ? 0 : value + 1);
  return { activeIdx, currentLook: LOOKBOOK_STORIES[activeIdx], total: LOOKBOOK_STORIES.length, previous, next };
}
