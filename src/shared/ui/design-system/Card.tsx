import type { HTMLAttributes } from 'react';

export function Card({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`border border-neutral-200 bg-white ${className}`} {...props} />;
}
