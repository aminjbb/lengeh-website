import type { ReactNode } from 'react';

export function Badge({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <span className={`inline-flex items-center border border-neutral-200 bg-neutral-100 px-2 py-1 text-[10px] font-medium ${className}`}>{children}</span>;
}
