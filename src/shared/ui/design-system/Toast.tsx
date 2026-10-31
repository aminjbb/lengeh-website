import type { ReactNode } from 'react';

export function Toast({ children, tone = 'default' }: { children: ReactNode; tone?: 'default' | 'success' | 'error' }) {
  const styles = { default: 'bg-black text-white', success: 'border border-green-200 bg-green-50 text-green-800', error: 'border border-red-200 bg-red-50 text-red-800' };
  return <div role="status" className={`px-4 py-2 text-sm shadow-lg ${styles[tone]}`}>{children}</div>;
}
