import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
};

const variants = {
  primary: 'bg-[#171717] text-white hover:bg-neutral-800',
  outline: 'border border-neutral-300 text-neutral-800 hover:border-black',
  ghost: 'text-neutral-700 hover:bg-neutral-100',
  danger: 'border border-red-200 text-red-700 hover:bg-red-50',
};

const sizes = { sm: 'h-8 px-3 text-xs', md: 'h-10 px-4 text-sm', lg: 'h-11 px-5 text-sm' };

export function Button({ variant = 'primary', size = 'md', className = '', ...props }: ButtonProps) {
  return <button className={`inline-flex items-center justify-center gap-2 rounded-none transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`} {...props} />;
}
