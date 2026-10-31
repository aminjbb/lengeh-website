import type React from 'react';

/** Keeps JSX intrinsic image markup available to editors using the React JSX runtime. */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      img: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
    }
  }
}

export {};
