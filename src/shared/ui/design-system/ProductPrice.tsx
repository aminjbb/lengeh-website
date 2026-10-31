import { formatTomanPrice } from '../../../utils/persianNumbers';

type ProductPriceProps = { value: number; className?: string };

export function ProductPrice({ value, className = '' }: ProductPriceProps) {
  return <span className={className}>{formatTomanPrice(value)}</span>;
}
