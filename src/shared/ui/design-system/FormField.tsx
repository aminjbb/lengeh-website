import type { InputHTMLAttributes, ReactNode } from 'react';

type FormFieldProps = InputHTMLAttributes<HTMLInputElement> & { label: ReactNode; error?: string };

export function FormField({ label, error, id, className = '', ...props }: FormFieldProps) {
  return <label htmlFor={id} className="block space-y-1.5 text-right"><span className="block text-xs text-neutral-600">{label}</span><input id={id} className={`h-10 w-full border border-neutral-300 px-3 text-sm outline-none focus:border-black ${className}`} {...props} />{error && <span role="alert" className="text-xs text-red-600">{error}</span>}</label>;
}
