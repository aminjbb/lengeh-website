import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, Plus, MapPin, Truck, Check, Edit3, Trash2, Calendar, Clock, AlertCircle, ShoppingBag, ShieldCheck, X, CreditCard, Tag, CheckCircle2 } from 'lucide-react';
import { CartItem, UserOrder } from '../../types';
import type { AddressItem } from '../account/model/accountTypes';
import { toPersianDigits, formatTomanPrice } from '../../utils/persianNumbers';
import { OrderSummary } from './ui/OrderSummary';
import { AddressSelector } from './ui/AddressSelector';
import { AddressForm } from './ui/AddressForm';

interface CheckoutPageProps {
  items: CartItem[];
  userPhone?: string | null;
  userName?: string;
  onBackToCart: () => void;
  onOrderCompleted: (goToProfile?: boolean) => void;
}

const DEFAULT_INITIAL_ADDRESSES: AddressItem[] = [
  {
    id: 'addr-tehran-1',
    title: 'جلال آل احمد',
    province: 'تهران',
    city: 'تهران',
    fullAddress: 'بزرگراه جلال آل احمد، زیر پل آزمایش، ضلع جنوب شرقی جلال، کوچه کوی نویسندگان، مجتمع کوی نویسندگان، بلوک ۷، واحد',
    plaque: '',
    unit: '',
    postalCode: '۱۴۶۶۸۹۳۲۱۱',
    recipientName: 'نگین اسدی',
    recipientPhone: '۰۹۱۲۳۴۵۶۷۸۹',
    isDefault: false,
  },
  {
    id: 'addr-tehran-2',
    title: 'باکری',
    province: 'تهران',
    city: 'تهران',
    fullAddress: 'بزرگراه باکری، بهار جنوبی(خیابان یعقوبی)، نبش کوچه اصغرزاده، پلاک ۱۸ تحویل نگهبانی شود',
    plaque: '۱۸',
    unit: '',
    postalCode: '۱۴۸۹۸۷۶۵۴۳',
    recipientName: 'نگین اسدی',
    recipientPhone: '۰۹۱۲۳۴۵۶۷۸۹',
    isDefault: false,
  },
  {
    id: 'addr-tehran-3',
    title: 'ستارخان',
    province: 'تهران',
    city: 'تهران',
    fullAddress: 'ستارخان، خ. آزادی، خ. شادمهر، خ. اکبر نیک روش فرد',
    plaque: '۱۹',
    unit: '۴',
    postalCode: '۱۴۵۸۷۹۳۲۱۱',
    recipientName: 'نگین اسدی',
    recipientPhone: '۰۹۱۲۳۴۵۶۷۸۹',
    isDefault: true,
  },
];

type DeliveryMethod = 'courier' | 'post';
type CheckoutStep = 'shipping' | 'payment';
type PaymentGateway = 'zarinpal' | 'zibal';

interface AppliedDiscount {
  code: string;
  type: 'percent' | 'fixed';
  value: number;
  amount: number;
  description: string;
}

const PROVINCES_AND_CITIES: Record<string, string[]> = {
  'تهران': ['تهران', 'اسلامشهر', 'شهریار', 'قدس', 'ملارد', 'ری', 'پردیس', 'دماوند'],
  'اصفهان': ['اصفهان', 'کاشان', 'نجف‌آباد', 'شاهین‌شهر', 'شهرضا'],
  'فارس': ['شیراز', 'مرودشت', 'جهرم', 'فسا', 'کازرون'],
  'خراسان رضوی': ['مشهد', 'نیشابور', 'سبزوار', 'تربت حیدریه'],
  'آذربایجان شرقی': ['تبریز', 'مراغه', 'مرند', 'میانه'],
  'البرز': ['کرج', 'فردیس', 'کمال‌شهر', 'نظرآباد'],
  'گیلان': ['رشت', 'بندر انزلی', 'لاهیجان', 'لنگرود'],
  'مازندران': ['ساری', 'بابل', 'آمل', 'قائم‌شهر', 'تنکابن'],
};

const formatAddressItemText = (addr: AddressItem) => {
  if (addr.id === 'addr-tehran-1') {
    return 'تهران، تهران، بزرگراه جلال آل احمد، زیر پل آزمایش، ضلع جنوب شرقی جلال، کوچه کوی نویسندگان، مجتمع کوی نویسندگان، بلوک ۷، واحد';
  }
  if (addr.id === 'addr-tehran-2') {
    return 'تهران، تهران، بزرگراه باکری، بهار جنوبی(خیابان یعقوبی)، نبش کوچه اصغرزاده، پلاک ۱۸ تحویل نگهبانی شود';
  }
  if (addr.id === 'addr-tehran-3') {
    return 'تهران، ستارخان، خ. آزادی، خ. شادمهر، خ. اکبر نیک روش فرد، پلاک ۱۹، واحد ۴';
  }

  const parts: string[] = [];
  if (addr.province) parts.push(addr.province);
  if (addr.city && addr.city !== addr.province) parts.push(addr.city);
  if (addr.fullAddress) parts.push(addr.fullAddress);
  let text = parts.join('، ');
  if (addr.plaque) text += `، پلاک ${toPersianDigits(addr.plaque)}`;
  if (addr.unit) text += `، واحد ${toPersianDigits(addr.unit)}`;
  return text;
};

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  items,
  userPhone,
  userName,
  onBackToCart,
  onOrderCompleted,
}) => {
  // Load addresses from localStorage, seed if empty
  const [addresses, setAddresses] = useState<AddressItem[]>([]);

  // Selected address ID
  const [selectedAddressId, setSelectedAddressId] = useState<string>(() => {
    const defaultAddr = addresses.find((a) => a.isDefault);
    return defaultAddr ? defaultAddr.id : addresses[2]?.id || addresses[0]?.id || '';
  });

  const selectedAddress = addresses.find((a) => a.id === selectedAddressId) || addresses[0];
  const isTehranAddress = selectedAddress
    ? selectedAddress.city.includes('تهران') || selectedAddress.province.includes('تهران')
    : false;

  // Delivery Method: 'courier' (پیک ویژه تهران) or 'post' (پست پیشتاز)
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>(() => {
    return isTehranAddress ? 'courier' : 'post';
  });

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('lengeh_user_addresses') || 'null');
      const next = Array.isArray(saved) && saved.length > 0 ? saved as AddressItem[] : DEFAULT_INITIAL_ADDRESSES;
      setAddresses(next);
      setSelectedAddressId(next.find((address) => address.isDefault)?.id || next[0]?.id || '');
      const defaultAddress = next.find((address) => address.isDefault) || next[0];
      setDeliveryMethod(defaultAddress?.province.includes('ØªÙ‡Ø±Ø§Ù†') ? 'courier' : 'post');
      if (!saved) localStorage.setItem('lengeh_user_addresses', JSON.stringify(next));
    } catch {
      setAddresses(DEFAULT_INITIAL_ADDRESSES);
      setSelectedAddressId(DEFAULT_INITIAL_ADDRESSES.find((address) => address.isDefault)?.id || '');
    }
  }, []);

  // Ensure deliveryMethod reverts to 'post' if address is not in تهران
  useEffect(() => {
    if (!isTehranAddress && deliveryMethod === 'courier') {
      setDeliveryMethod('post');
    }
  }, [isTehranAddress, deliveryMethod]);



  // Address Selector Modal (Choose from saved addresses)
  const [isAddressSelectorOpen, setIsAddressSelectorOpen] = useState(false);

  // Address Modal (Add / Edit)
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState<string | null>(null);
  const [addressForm, setAddressForm] = useState({
    title: 'منزل',
    province: 'تهران',
    city: 'تهران',
    fullAddress: '',
    plaque: '',
    unit: '',
    postalCode: '',
    recipientName: userName || 'نگین اسدی',
    recipientPhone: userPhone || '۰۹۱۲۳۴۵۶۷۸۹',
    isDefault: false,
  });

  // Delete address confirmation
  const [addressToDeleteId, setAddressToDeleteId] = useState<string | null>(null);

  // Checkout Step: 'shipping' or 'payment'
  const [checkoutStep, setCheckoutStep] = useState<CheckoutStep>('shipping');

  // Selected Payment Gateway: 'zarinpal' or 'zibal'
  const [selectedGateway, setSelectedGateway] = useState<PaymentGateway>('zarinpal');

  // Discount / Coupon states
  const [discountInput, setDiscountInput] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<AppliedDiscount | null>(null);
  const [discountError, setDiscountError] = useState<string | null>(null);
  const [isApplyingDiscount, setIsApplyingDiscount] = useState(false);

  // Finalizing state and Order success modal
  const [isFinalizing, setIsFinalizing] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [orderTrackingCode, setOrderTrackingCode] = useState('۸۹۴۷۱۲');

  // Calculations
  const getTomanPrice = (price: number) => (price >= 10000 ? price : Math.round(price * 10000));
  const subtotal = items.reduce(
    (sum, item) => sum + getTomanPrice(item.product.price) * item.quantity,
    0
  );

  const deliveryCost = deliveryMethod === 'courier' ? 45000 : 35000;

  const discountAmount = appliedDiscount
    ? appliedDiscount.type === 'percent'
      ? Math.round((subtotal * appliedDiscount.value) / 100)
      : Math.min(appliedDiscount.value, subtotal)
    : 0;

  const finalTotal = Math.max(0, subtotal + deliveryCost - discountAmount);

  const handleApplyDiscount = (codeOverride?: string) => {
    const rawCode = codeOverride !== undefined ? codeOverride : discountInput;
    const code = rawCode.trim().toUpperCase();
    setDiscountError(null);
    if (!code) {
      setDiscountError('لطفاً کد تخفیف را وارد کنید.');
      return;
    }

    setIsApplyingDiscount(true);
    setTimeout(() => {
      setIsApplyingDiscount(false);
      if (code === 'LENGEH20') {
        const amt = Math.round((subtotal * 20) / 100);
        setAppliedDiscount({
          code: 'LENGEH20',
          type: 'percent',
          value: 20,
          amount: amt,
          description: '۲۰٪ تخفیف ویژه',
        });
        setDiscountInput('');
      } else if (code === 'SPRING' || code === 'BAHAR') {
        const amt = Math.round((subtotal * 15) / 100);
        setAppliedDiscount({
          code,
          type: 'percent',
          value: 15,
          amount: amt,
          description: '۱۵٪ تخفیف بهاره',
        });
        setDiscountInput('');
      } else if (code === 'WELCOME') {
        const amt = Math.min(50000, subtotal);
        setAppliedDiscount({
          code: 'WELCOME',
          type: 'fixed',
          value: 50000,
          amount: amt,
          description: '۵۰,۰۰۰ تومان هدیه عضویت',
        });
        setDiscountInput('');
      } else if (code === 'YEKAN' || code === 'OFF50') {
        const amt = Math.min(50000, subtotal);
        setAppliedDiscount({
          code,
          type: 'fixed',
          value: 50000,
          amount: amt,
          description: '۵۰,۰۰۰ تومان تخفیف',
        });
        setDiscountInput('');
      } else if (code.length >= 3) {
        // Any other valid test code entered by user
        const amt = Math.round((subtotal * 10) / 100);
        setAppliedDiscount({
          code,
          type: 'percent',
          value: 10,
          amount: amt,
          description: '۱۰٪ تخفیف عمومی',
        });
        setDiscountInput('');
      } else {
        setDiscountError('کد تخفیف وارد شده معتبر نیست یا منقضی شده است.');
      }
    }, 300);
  };

  const handleRemoveDiscount = () => {
    setAppliedDiscount(null);
    setDiscountError(null);
  };

  // Open modal for adding
  const handleOpenAddAddress = () => {
    setEditingAddressId(null);
    setAddressForm({
      title: 'منزل',
      province: 'تهران',
      city: 'تهران',
      fullAddress: '',
      plaque: '',
      unit: '',
      postalCode: '',
      recipientName: userName || 'سارا راد',
      recipientPhone: userPhone || '۰۹۱۲۳۴۵۶۷۸۹',
      isDefault: addresses.length === 0,
    });
    setIsAddressModalOpen(true);
  };

  // Open modal for editing
  const handleOpenEditAddress = (addr: AddressItem) => {
    setEditingAddressId(addr.id);
    setAddressForm({
      title: addr.title,
      province: addr.province,
      city: addr.city,
      fullAddress: addr.fullAddress,
      plaque: addr.plaque,
      unit: addr.unit,
      postalCode: addr.postalCode,
      recipientName: addr.recipientName,
      recipientPhone: addr.recipientPhone,
      isDefault: addr.isDefault,
    });
    setIsAddressModalOpen(true);
  };

  // Save address (Add or Edit)
  const handleSaveAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!addressForm.fullAddress.trim()) return;

    let updated: AddressItem[];
    if (editingAddressId) {
      updated = addresses.map((a) => {
        if (a.id === editingAddressId) {
          return {
            ...a,
            ...addressForm,
          };
        }
        return addressForm.isDefault ? { ...a, isDefault: false } : a;
      });
    } else {
      const newAddr: AddressItem = {
        id: `addr-${Date.now()}`,
        ...addressForm,
      };
      if (addressForm.isDefault) {
        updated = addresses.map((a) => ({ ...a, isDefault: false }));
        updated.push(newAddr);
      } else {
        updated = [...addresses, newAddr];
      }
      setSelectedAddressId(newAddr.id);
    }

    setAddresses(updated);
    try {
      localStorage.setItem('lengeh_user_addresses', JSON.stringify(updated));
    } catch {}
    setIsAddressModalOpen(false);
  };

  // Delete address
  const handleDeleteAddress = (id: string) => {
    const updated = addresses.filter((a) => a.id !== id);
    if (updated.length > 0 && selectedAddressId === id) {
      setSelectedAddressId(updated[0].id);
    }
    setAddresses(updated);
    try {
      localStorage.setItem('lengeh_user_addresses', JSON.stringify(updated));
    } catch {}
    setAddressToDeleteId(null);
  };

  // Finalize order and persist to user orders
  const handleFinalizeOrder = () => {
    setIsFinalizing(true);
    setTimeout(() => {
      setIsFinalizing(false);
      const randomCode = String(Math.floor(100000 + Math.random() * 900000));
      const persianCode = toPersianDigits(randomCode);
      setOrderTrackingCode(persianCode);

      const now = new Date();
      const dateStr = new Intl.DateTimeFormat('fa-IR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(now);

      const newOrder: UserOrder = {
        id: `ORD-${randomCode}`,
        trackingCode: persianCode,
        date: dateStr,
        createdAt: now.toISOString(),
        items: [...items],
        status: 'در حال پردازش',
        deliveryMethod,
        paymentGateway: selectedGateway,
        recipient: {
          name: selectedAddress?.recipientName || userName || 'کاربر گرامی',
          phone: selectedAddress?.recipientPhone || userPhone || '',
          address: selectedAddress ? formatAddressItemText(selectedAddress) : '',
        },
        subtotal,
        deliveryCost,
        discountAmount,
        discountCode: appliedDiscount?.code,
        finalTotal,
      };

      try {
        const saved = localStorage.getItem('lengeh_user_orders');
        const list = saved ? JSON.parse(saved) : [];
        const updatedList = [newOrder, ...(Array.isArray(list) ? list : [])];
        localStorage.setItem('lengeh_user_orders', JSON.stringify(updatedList));
      } catch {}

      setIsSuccessModalOpen(true);
    }, 1000);
  };



  return (
    <div
      dir="rtl"
      className="min-h-screen bg-neutral-50/60 pb-28 font-tommy text-neutral-900"
      style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
    >
      {/* 1. Top Bar: Title on the RIGHT, Back button on the LEFT */}
      <div className="bg-white border-b border-neutral-200 sticky top-0 z-30 shadow-2xs">
        <div className="max-w-4xl mx-auto px-4 py-2.5 sm:py-3 flex items-center justify-between">
          {/* Title on the RIGHT (First child in RTL) */}
          <h1 className="text-xs sm:text-sm font-bold text-neutral-900">
            {checkoutStep === 'shipping' ? 'شیوه ارسال' : 'پرداخت سفارش'}
          </h1>

          {/* Back button on the LEFT (Second child in RTL) */}
          <button
            onClick={() => {
              if (checkoutStep === 'payment') {
                setCheckoutStep('shipping');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                onBackToCart();
              }
            }}
            aria-label={checkoutStep === 'payment' ? 'بازگشت به شیوه ارسال' : 'بازگشت به سبد خرید'}
            className="flex items-center gap-1 text-[11px] font-medium text-neutral-600 hover:text-neutral-900 py-1 px-2 border border-neutral-200 bg-white hover:bg-neutral-50 transition-colors cursor-pointer"
          >
            <span>بازگشت</span>
            <ChevronLeft className="w-3.5 h-3.5 stroke-[2]" />
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-4 sm:pt-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-4">
            {checkoutStep === 'shipping' ? (
              <>
                {/* Address Card */}
                <div className="bg-white border border-neutral-200 rounded-xl p-3.5 sm:p-4 shadow-xs">
                  {/* Top Row: "آدرس شما" on right, "تغییر آدرس" on left */}
                  <div className="flex items-center justify-between mb-2.5">
                    {/* Right: Target circle icon + "آدرس شما" */}
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-neutral-800 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <circle cx="12" cy="12" r="8.5" />
                        <circle cx="12" cy="12" r="2.8" fill="currentColor" />
                      </svg>
                      <span className="text-xs sm:text-[13px] font-bold text-neutral-900">
                        آدرس شما
                      </span>
                    </div>

                    {/* Left: "تغییر آدرس" + icon matching profile edit icon */}
                    <button
                      type="button"
                      onClick={() => setIsAddressSelectorOpen(true)}
                      className="flex items-center gap-1 text-[11px] font-medium text-neutral-600 hover:text-black transition-colors cursor-pointer group"
                    >
                      <span>تغییر آدرس</span>
                      <svg
                        className="w-3.5 h-3.5 text-neutral-500 group-hover:text-black transition-colors"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17.5 3.5a2.1 2.1 0 0 1 3 3L8.5 18.5l-4.5 1 1-4.5L17.5 3.5z" />
                        <path d="M11 21h7" />
                      </svg>
                    </button>
                  </div>

                  {/* Middle: Full address text */}
                  <p className="text-[11px] sm:text-xs text-neutral-800 leading-relaxed font-normal mb-2">
                    {selectedAddress
                      ? formatAddressItemText(selectedAddress)
                      : 'تهران، ستارخان، خ. آزادی، خ. شادمهر، خ. اکبر نیک روش فرد، پلاک ۱۹، واحد ۴'}
                  </p>

                  {/* Bottom: Recipient line */}
                  <div className="text-[11px] text-neutral-500">
                    <span>گیرنده: </span>
                    <span>{selectedAddress?.recipientName || 'نگین اسدی'}</span>
                  </div>
                </div>

                {/* Section 2: Delivery Method (Courier vs Post) */}
                <div className="bg-white border border-neutral-200 rounded-xl p-3.5 sm:p-4 shadow-xs">
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <Truck className="w-3.5 h-3.5 text-neutral-800 stroke-[2]" />
                    <h2 className="text-[11px] sm:text-xs font-bold text-neutral-900">
                      روش ارسال سفارش
                    </h2>
                  </div>

                  <div className="space-y-2">
                    {/* Method 1: Express Courier (Tehran Only) */}
                    <div
                      onClick={() => {
                        if (isTehranAddress) {
                          setDeliveryMethod('courier');
                        }
                      }}
                      className={`p-2.5 sm:p-3 border rounded-lg transition-all ${
                        !isTehranAddress
                          ? 'opacity-60 bg-neutral-100/70 border-neutral-200 cursor-not-allowed'
                          : deliveryMethod === 'courier'
                          ? 'border-neutral-900 bg-neutral-50/80 cursor-pointer shadow-xs'
                          : 'border-neutral-200 hover:border-neutral-300 bg-white cursor-pointer'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2">
                          <div className="mt-0.5">
                            <div
                              className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${
                                deliveryMethod === 'courier' && isTehranAddress
                                  ? 'border-neutral-900 bg-neutral-900'
                                  : 'border-neutral-300 bg-white'
                              }`}
                            >
                              {deliveryMethod === 'courier' && isTehranAddress && (
                                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                              )}
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[11px] sm:text-xs font-semibold text-neutral-900">
                                ارسال با پیک
                              </span>
                              <span className="text-[9px] bg-black text-white px-1.5 py-0.2 font-medium rounded">
                                ویژه تهران
                              </span>
                            </div>
                            <p className="text-[10px] sm:text-[10.5px] text-neutral-500 mt-0.5">
                              ارسال با پیک با هماهنگی ساعت با شما عزیزان
                            </p>
                            {!isTehranAddress && (
                              <p className="text-[9.5px] text-amber-700 mt-1 flex items-center gap-1 font-medium">
                                <AlertCircle className="w-3 h-3" />
                                <span>پیک موتوری تنها برای آدرس‌های داخل شهر تهران در دسترس است.</span>
                              </p>
                            )}
                          </div>
                        </div>
                        <span className="text-[11px] sm:text-xs font-bold text-neutral-900 shrink-0">
                          {formatTomanPrice(45000)}
                        </span>
                      </div>
                    </div>

                    {/* Method 2: Post (All Iran) */}
                    <div
                      onClick={() => setDeliveryMethod('post')}
                      className={`p-2.5 sm:p-3 border rounded-lg transition-all cursor-pointer ${
                        deliveryMethod === 'post'
                          ? 'border-neutral-900 bg-neutral-50/80 shadow-xs'
                          : 'border-neutral-200 hover:border-neutral-300 bg-white'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2">
                          <div className="mt-0.5">
                            <div
                              className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${
                                deliveryMethod === 'post' ? 'border-neutral-900 bg-neutral-900' : 'border-neutral-300 bg-white'
                              }`}
                            >
                              {deliveryMethod === 'post' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[11px] sm:text-xs font-semibold text-neutral-900">
                                ارسال با پست
                              </span>
                              <span className="text-[9px] bg-neutral-200 text-neutral-800 px-1.5 py-0.2 font-medium rounded">
                                سراسر کشور
                              </span>
                            </div>
                            <p className="text-[10px] sm:text-[10.5px] text-neutral-500 mt-0.5">
                              تحویل به پست در روزهای یکشنبه و پنجشنبه
                            </p>
                          </div>
                        </div>
                        <span className="text-[11px] sm:text-xs font-bold text-neutral-900 shrink-0">
                          {formatTomanPrice(35000)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* 1. Discount Code Card */}
                <div className="bg-white border border-neutral-200 rounded-xl p-3.5 sm:p-4 shadow-xs">
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <Tag className="w-3.5 h-3.5 text-neutral-800 stroke-[2]" />
                    <h2 className="text-[11px] sm:text-xs font-bold text-neutral-900">
                      کد تخفیف
                    </h2>
                  </div>

                  {!appliedDiscount ? (
                    <div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={discountInput}
                          onChange={(e) => {
                            setDiscountInput(e.target.value);
                            if (discountError) setDiscountError(null);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleApplyDiscount();
                            }
                          }}
                          placeholder="کد تخفیف خود را وارد کنید..."
                          className="flex-1 px-3 py-2 text-xs border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-900 transition-colors text-right"
                          dir="auto"
                        />
                        <button
                          type="button"
                          onClick={() => handleApplyDiscount()}
                          disabled={isApplyingDiscount || !discountInput.trim()}
                          className="px-3.5 sm:px-4 py-2 bg-neutral-900 hover:bg-black text-white text-xs font-bold rounded-lg transition-colors cursor-pointer disabled:opacity-50 shrink-0"
                        >
                          {isApplyingDiscount ? (
                            <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          ) : (
                            <span>اعمال کد</span>
                          )}
                        </button>
                      </div>

                      {discountError && (
                        <p className="text-[10px] text-rose-600 mt-2 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{discountError}</span>
                        </p>
                      )}

                      {/* Clickable Quick Sample Codes for instant test */}
                      <div className="mt-3 pt-2.5 border-t border-neutral-100 flex items-center flex-wrap gap-1.5 text-[10px]">
                        <span className="text-neutral-400">کدهای فعال تست:</span>
                        <button
                          type="button"
                          onClick={() => handleApplyDiscount('LENGEH20')}
                          className="px-2 py-0.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded font-mono font-medium transition-colors cursor-pointer"
                        >
                          LENGEH20 (۲۰٪)
                        </button>
                        <button
                          type="button"
                          onClick={() => handleApplyDiscount('SPRING')}
                          className="px-2 py-0.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded font-mono font-medium transition-colors cursor-pointer"
                        >
                          SPRING (۱۵٪)
                        </button>
                        <button
                          type="button"
                          onClick={() => handleApplyDiscount('WELCOME')}
                          className="px-2 py-0.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded font-mono font-medium transition-colors cursor-pointer"
                        >
                          WELCOME (۵۰,۰۰۰ تومان)
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Applied Discount Summary Box */
                    <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-3 flex items-start justify-between gap-3 text-right animate-in fade-in duration-200">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-0.5 shrink-0" />
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-emerald-950 font-mono">
                              {appliedDiscount.code}
                            </span>
                            <span className="text-[9.5px] bg-emerald-200/80 text-emerald-900 px-1.5 py-0.2 rounded font-medium">
                              {appliedDiscount.description}
                            </span>
                          </div>
                          <p className="text-[11px] text-emerald-800 mt-1 font-semibold">
                            میزان کسر شده از مبلغ سفارش: <span className="font-bold text-emerald-950">{formatTomanPrice(discountAmount)}</span>
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={handleRemoveDiscount}
                        className="text-[10.5px] font-semibold text-neutral-500 hover:text-rose-600 transition-colors cursor-pointer shrink-0"
                      >
                        حذف کد
                      </button>
                    </div>
                  )}
                </div>

                {/* 2. Payment Gateways Card: Square cards for ZarinPal and Zibal */}
                <div className="bg-white border border-neutral-200 rounded-xl p-3.5 sm:p-4 shadow-xs">
                  <div className="flex items-center gap-1.5 mb-2">
                    <CreditCard className="w-3.5 h-3.5 text-neutral-800 stroke-[2]" />
                    <h2 className="text-[11px] sm:text-xs font-bold text-neutral-900">
                      انتخاب روش پرداخت
                    </h2>
                  </div>
                  <p className="text-[10px] sm:text-[10.5px] text-neutral-500 mb-3.5">
                    لطفاً یکی از درگاه‌های پرداخت امن زیر را انتخاب کنید:
                  </p>

                  {/* Two Square Cards in Grid - Compact and clean */}
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3 max-w-[220px] sm:max-w-[240px] mx-auto">
                    {/* ZarinPal Card */}
                    <div
                      onClick={() => setSelectedGateway('zarinpal')}
                      className={`aspect-square flex flex-col items-center justify-center p-2 sm:p-2.5 rounded-xl border-2 cursor-pointer transition-all relative group ${
                        selectedGateway === 'zarinpal'
                          ? 'border-neutral-900 bg-neutral-50/90 shadow-2xs ring-1 ring-neutral-900/10'
                          : 'border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50/50'
                      }`}
                    >
                      {/* Radio indicator in top-right */}
                      <div className="absolute top-2 right-2">
                        <div
                          className={`w-3 h-3 rounded-full border flex items-center justify-center transition-colors ${
                            selectedGateway === 'zarinpal'
                              ? 'border-neutral-900 bg-neutral-900'
                              : 'border-neutral-300 bg-white'
                          }`}
                        >
                          {selectedGateway === 'zarinpal' && (
                            <div className="w-1 h-1 rounded-full bg-white" />
                          )}
                        </div>
                      </div>

                      {/* ZarinPal Official Logo */}
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FFF9E6] border border-[#FDE69E] flex items-center justify-center mb-1.5 shadow-2xs group-hover:scale-105 transition-transform">
                        <svg className="w-6 h-6 sm:w-6.5 sm:h-6.5" viewBox="0 0 48 48" fill="none">
                          <rect width="48" height="48" rx="10" fill="#FDB913" />
                          <path
                            d="M13 17h22L21 33h14"
                            stroke="#1A1A1A"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle cx="33" cy="17" r="2.8" fill="#1A1A1A" />
                        </svg>
                      </div>

                      {/* Name Only */}
                      <span className="text-[11px] sm:text-xs font-bold text-neutral-900 text-center">
                        زرین‌پال
                      </span>
                    </div>

                    {/* Zibal Card */}
                    <div
                      onClick={() => setSelectedGateway('zibal')}
                      className={`aspect-square flex flex-col items-center justify-center p-2 sm:p-2.5 rounded-xl border-2 cursor-pointer transition-all relative group ${
                        selectedGateway === 'zibal'
                          ? 'border-neutral-900 bg-neutral-50/90 shadow-2xs ring-1 ring-neutral-900/10'
                          : 'border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50/50'
                      }`}
                    >
                      {/* Radio indicator in top-right */}
                      <div className="absolute top-2 right-2">
                        <div
                          className={`w-3 h-3 rounded-full border flex items-center justify-center transition-colors ${
                            selectedGateway === 'zibal'
                              ? 'border-neutral-900 bg-neutral-900'
                              : 'border-neutral-300 bg-white'
                          }`}
                        >
                          {selectedGateway === 'zibal' && (
                            <div className="w-1 h-1 rounded-full bg-white" />
                          )}
                        </div>
                      </div>

                      {/* Zibal Official Logo */}
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#EEF4FF] border border-[#CDE0FF] flex items-center justify-center mb-1.5 shadow-2xs group-hover:scale-105 transition-transform">
                        <svg className="w-6 h-6 sm:w-6.5 sm:h-6.5" viewBox="0 0 48 48" fill="none">
                          <rect width="48" height="48" rx="10" fill="#0052FF" />
                          <path
                            d="M13 17h22L21 33h14"
                            stroke="#FFFFFF"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle cx="33" cy="17" r="2.8" fill="#FFFFFF" />
                        </svg>
                      </div>

                      {/* Name Only */}
                      <span className="text-[11px] sm:text-xs font-bold text-neutral-900 text-center">
                        زیبال
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3. Shipping Summary Recap */}
                <div className="bg-white border border-neutral-200 rounded-xl p-3.5 sm:p-4 shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] sm:text-xs font-bold text-neutral-900">
                      مشخصات تحویل سفارش
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setCheckoutStep('shipping');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-[10.5px] text-neutral-600 hover:text-black font-semibold transition-colors cursor-pointer"
                    >
                      ویرایش
                    </button>
                  </div>
                  <p className="text-[11px] text-neutral-700 leading-relaxed">
                    {selectedAddress ? formatAddressItemText(selectedAddress) : ''}
                  </p>
                  <div className="flex items-center gap-3 text-[10.5px] text-neutral-500 mt-2 pt-2 border-t border-neutral-100">
                    <span>تحویل‌گیرنده: {selectedAddress?.recipientName}</span>
                    <span>•</span>
                    <span>شیوه ارسال: {deliveryMethod === 'courier' ? 'ارسال با پیک' : 'ارسال با پست'}</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Sidebar Summary Column */}
          <div className="space-y-4">
            <div className="bg-white border border-neutral-200 rounded-xl p-3.5 sm:p-4 shadow-xs sticky top-16">
              <h3 className="text-xs sm:text-[13px] font-bold text-neutral-900 pb-2.5 border-b border-neutral-200 mb-3">
                خلاصه سفارش ({toPersianDigits(items.reduce((s, i) => s + i.quantity, 0))} کالا)
              </h3>

              {/* Items preview */}
              <div className="space-y-2.5 max-h-44 overflow-y-auto pr-0.5 pb-2.5 border-b border-neutral-100">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.selectedSize}`} className="flex items-center gap-2 text-[11px]">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-9 h-11 object-cover border border-neutral-200 shrink-0 rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-neutral-900 truncate">{item.product.name}</p>
                      <p className="text-[10px] text-neutral-500">
                        سایز: {toPersianDigits(item.selectedSize)} • {toPersianDigits(item.quantity)} عدد
                      </p>
                    </div>
                    <span className="font-semibold text-neutral-900 shrink-0">
                      {formatTomanPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Details of Selected Delivery & Gateway */}
              <div className="py-2.5 border-b border-neutral-100 text-[11px] space-y-1 text-neutral-600">
                <div className="flex justify-between">
                  <span>تحویل‌گیرنده:</span>
                  <span className="font-semibold text-neutral-900">{selectedAddress?.recipientName}</span>
                </div>
                <div className="flex justify-between">
                  <span>شیوه ارسال:</span>
                  <span className="font-semibold text-neutral-900">
                    {deliveryMethod === 'courier' ? 'ارسال با پیک' : 'ارسال با پست'}
                  </span>
                </div>
                {checkoutStep === 'payment' && (
                  <div className="flex justify-between">
                    <span>درگاه پرداخت:</span>
                    <span className="font-semibold text-neutral-900">
                      {selectedGateway === 'zarinpal' ? 'زرین‌پال' : 'زیبال'}
                    </span>
                  </div>
                )}
              </div>

              <OrderSummary subtotal={subtotal} deliveryCost={deliveryCost} discountAmount={discountAmount} discountCode={appliedDiscount?.code} finalTotal={finalTotal} step={checkoutStep} canContinue={addresses.length > 0} isFinalizing={isFinalizing} gateway={selectedGateway === 'zarinpal' ? 'Zarinpal' : 'Zibal'} onContinue={() => { setCheckoutStep('payment'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} onFinalize={handleFinalizeOrder} />
              </div>
          </div>
        </div>
      </div>

      {isAddressSelectorOpen && (
        <AddressSelector
          addresses={addresses}
          selectedId={selectedAddressId}
          onSelect={setSelectedAddressId}
          onAdd={handleOpenAddAddress}
          onEdit={handleOpenEditAddress}
          onDelete={handleDeleteAddress}
          onClose={() => setIsAddressSelectorOpen(false)}
          formatAddress={formatAddressItemText}
        />
      )}

      {isAddressModalOpen && (
        <AddressForm
          form={addressForm}
          editing={Boolean(editingAddressId)}
          onChange={setAddressForm}
          onSave={handleSaveAddress}
          onClose={() => setIsAddressModalOpen(false)}
          provinces={PROVINCES_AND_CITIES}
        />
      )}
      {/* Modal: Order Completed Successfully */}
      {isSuccessModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          dir="rtl"
        >
          <div
            className="bg-white border border-neutral-200 rounded-2xl p-5 sm:p-6 max-w-sm w-full shadow-2xl animate-in zoom-in-95 duration-200 text-center"
            style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
          >
            <div className="w-12 h-12 bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-3 border border-emerald-200 rounded-full">
              <Check className="w-6 h-6 stroke-[2.5]" />
            </div>

            <h2 className="text-sm sm:text-base font-bold text-neutral-900 mb-1">
              سفارش شما با موفقیت ثبت شد
            </h2>
            <p className="text-[11px] text-neutral-500 mb-4">
              با سپاس از خرید شما از کالکشن لنگه. سفارش در صف بسته‌بندی و ارسال قرار گرفت.
            </p>

            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3 text-[11px] text-right space-y-1.5 mb-5">
              <div className="flex justify-between border-b border-neutral-200/60 pb-1.5">
                <span className="text-neutral-500">کد رهگیری سفارش:</span>
                <span className="font-bold text-neutral-900">#{orderTrackingCode}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-200/60 pb-1.5">
                <span className="text-neutral-500">گیرنده:</span>
                <span className="font-semibold text-neutral-800">{selectedAddress?.recipientName}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-200/60 pb-1.5">
                <span className="text-neutral-500">روش ارسال:</span>
                <span className="font-semibold text-neutral-800">
                  {deliveryMethod === 'courier' ? 'ارسال با پیک' : 'ارسال با پست'}
                </span>
              </div>
              <div className="flex justify-between border-b border-neutral-200/60 pb-1.5">
                <span className="text-neutral-500">درگاه پرداخت:</span>
                <span className="font-semibold text-neutral-800">
                  {selectedGateway === 'zarinpal' ? 'زرین‌پال' : 'زیبال'}
                </span>
              </div>
              {appliedDiscount && (
                <div className="flex justify-between border-b border-neutral-200/60 pb-1.5 text-emerald-700">
                  <span>تخفیف کسر شده ({appliedDiscount.code}):</span>
                  <span className="font-bold">- {formatTomanPrice(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between pt-0.5">
                <span className="text-neutral-500">مبلغ پرداخت شده:</span>
                <span className="font-bold text-neutral-900">{formatTomanPrice(finalTotal)}</span>
              </div>
            </div>

            <div className="space-y-2">
              <button
                type="button"
                onClick={() => onOrderCompleted(true)}
                className="w-full py-2.5 sm:py-3 bg-neutral-900 text-white text-xs font-bold rounded-lg hover:bg-black transition-colors cursor-pointer"
              >
                مشاهده در سفارشات پروفایل
              </button>
              <button
                type="button"
                onClick={() => onOrderCompleted(false)}
                className="w-full py-2 border border-neutral-200 text-neutral-700 text-xs font-semibold rounded-lg hover:bg-neutral-50 transition-colors cursor-pointer"
              >
                بازگشت به صفحه اصلی
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};





