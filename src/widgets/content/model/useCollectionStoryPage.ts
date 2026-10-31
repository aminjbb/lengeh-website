'use client';

import { useState } from 'react';

export function useCollectionStoryPage() {
  const [activeTab, setActiveTab] = useState<'certificate' | 'metal-tag' | 'wax-seal' | 'box'>('certificate');
  return { activeTab, setActiveTab };
}
