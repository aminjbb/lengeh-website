import type { HTMLAttributes } from 'react';

export function Overlay({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div aria-hidden="true" className={`fixed inset-0 bg-black/60 backdrop-blur-xs ${className}`} {...props} />;
}
