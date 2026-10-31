import type { ImgHTMLAttributes } from 'react';

export function ResponsiveImage({ className = '', ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  return <img loading="lazy" className={`h-full w-full object-cover ${className}`} {...props} />;
}
