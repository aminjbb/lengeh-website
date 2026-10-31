'use client';

import { useState } from 'react';

export function useContactPage() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const toggleFaq = (id: string) => setOpenFaqId((current) => current === id ? null : id);
  const copyContact = async (key: string, value: string) => {
    await navigator.clipboard?.writeText(value);
    setCopiedKey(key);
    window.setTimeout(() => setCopiedKey((current) => current === key ? null : current), 2000);
  };
  return { openFaqId, copiedKey, toggleFaq, copyContact };
}
