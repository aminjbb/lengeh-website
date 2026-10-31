/**
 * Utility functions for formatting Persian numbers and currency.
 */

export const toPersianDigits = (value: number | string | null | undefined): string => {
  if (value === null || value === undefined) return '';
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return String(value).replace(/[0-9]/g, (digit) => farsiDigits[Number(digit)]);
};

export const formatTomanPrice = (price: number): string => {
  const toman = price >= 10000 ? price : Math.round(price * 10000);
  return `${toPersianDigits(toman.toLocaleString('en-US'))} تومان`;
};
