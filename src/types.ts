export interface Product {
  id: string;
  name: string;
  englishName?: string;
  subtitle: string;
  category: 'outerwear' | 'shirting' | 'knitwear' | 'bottoms' | 'footwear' | 'accessories' | 'collaborations';
  gender?: 'men' | 'women' | 'unisex';
  collection?: string;
  price: number;
  colorway: string;
  colorsCount?: number;
  colorsLabel?: string;
  image: string;
  secondaryImage?: string;
  badge?: string;
  sizes: string[];
  description: string;
  details: string[];
  fabric: string;
  isHeroPiece?: boolean;
  inStock?: boolean;
  galleryImages?: string[];
  styleNumber?: string;
  modelInfo?: string;
  fitNotes?: string;
  care?: string[];
  colorOptions?: { name: string; nameFa: string; hex: string; inStock?: boolean; image?: string }[];
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  quantity: number;
}

export interface LookbookLook {
  id: string;
  title: string;
  season: string;
  model: string;
  photographer: string;
  image: string;
  productIds: string[];
  quote?: string;
}

export type Currency = 'USD' | 'EUR' | 'GBP' | 'JPY';

export interface UserOrder {
  id: string;
  trackingCode: string;
  date: string;
  createdAt: string;
  items: CartItem[];
  status: 'در حال پردازش' | 'ارسال شده' | 'تحویل داده شده';
  deliveryMethod: 'courier' | 'post';
  paymentGateway: 'zarinpal' | 'zibal';
  recipient: {
    name: string;
    phone: string;
    address: string;
  };
  subtotal: number;
  deliveryCost: number;
  discountAmount: number;
  discountCode?: string;
  finalTotal: number;
}
