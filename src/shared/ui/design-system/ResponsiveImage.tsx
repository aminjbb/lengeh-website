import type { ImgHTMLAttributes } from 'react';

const TRUSTED_IMAGE_HOSTS = new Set(['images.unsplash.com']);

function isTrustedImageSource(src: ImgHTMLAttributes<HTMLImageElement>['src']): boolean {
  if (!src || src instanceof Blob) return Boolean(src);
  if (src.startsWith('/')) return true;
  try {
    const url = new URL(src);
    return url.protocol === 'https:' && TRUSTED_IMAGE_HOSTS.has(url.hostname);
  } catch {
    return false;
  }
}

export function ResponsiveImage({ className = '', ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const safeSrc = isTrustedImageSource(props.src) ? props.src : undefined;
  return <img loading="lazy" className={`h-full w-full object-cover ${className}`} {...props} src={safeSrc} />;
}
