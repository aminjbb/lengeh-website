import React, { useState } from 'react';
import { CartItem } from '../../types';
import { X, Trash, Plus, Minus, ArrowRight, ShieldCheck, ShoppingBag, Check } from '@mynaui/icons-react';
import { toPersianDigits, formatTomanPrice } from '../../utils/persianNumbers';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, size: string, delta: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
  onStartShopping: () => void;
  onProceedToCheckout?: () => void;
}

const FREE_SHIPPING_THRESHOLD = 3000000;

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onStartShopping,
  onProceedToCheckout,
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{
    productId: string;
    size: string;
    name: string;
    image: string;
  } | null>(null);

  if (!isOpen) return null;

  const getTomanPrice = (price: number) => (price >= 10000 ? price : Math.round(price * 10000));

  const subtotal = items.reduce(
    (sum, item) => sum + getTomanPrice(item.product.price) * item.quantity,
    0
  );
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const shippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const handleSimulateCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
    }, 1200);
  };

  const totalItemsCount = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <div
      id="cart-drawer-backdrop"
      dir="rtl"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex justify-start sm:justify-end animate-in fade-in duration-200 font-tommy"
    >
      <div
        id="cart-drawer-panel"
        className="w-full max-w-md bg-white h-full flex flex-col shadow-2xl text-neutral-900 animate-in slide-in-from-right duration-300"
      >
        {/* Header: Title on the RIGHT, Close X on the LEFT */}
        <div className="px-4 py-3 border-b border-neutral-200 flex items-center justify-between bg-neutral-50/80">
          <div className="flex items-baseline gap-1.5">
            <h2
              className="text-xs sm:text-sm font-bold text-neutral-900"
              style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
            >
              سبد خرید
            </h2>
            <span
              className="text-[11px] text-neutral-400 font-normal"
              style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
            >
              ({toPersianDigits(totalItemsCount)} کالا)
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="بستن سبد خرید"
            className="p-1 -ml-1 text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="px-5 py-3 bg-neutral-100 border-b border-neutral-200 text-xs">
          {amountToFreeShipping > 0 ? (
            <p className="text-neutral-700" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>
              تنها <span className="font-bold text-black">{formatTomanPrice(amountToFreeShipping)}</span> تا دریافت ارسال اکسپرس رایگان فاصله دارید.
            </p>
          ) : (
            <p className="text-emerald-700 font-semibold flex items-center gap-1" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>
              <Check className="w-3.5 h-3.5" />
              ارسال اکسپرس و رایگان برای این سفارش فعال شد!
            </p>
          )}
          <div className="w-full bg-neutral-300 h-1.5 rounded-none mt-2 overflow-hidden">
            <div
              className="bg-black h-full transition-all duration-500"
              style={{ width: `${shippingProgress}%` }}
            />
          </div>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {orderComplete ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-none flex items-center justify-center mx-auto">
                <Check className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>سفارش با موفقیت ثبت شد</h3>
              <p className="text-xs text-neutral-600 max-w-xs mx-auto leading-relaxed" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>
                با سپاس از انتخاب برند لنگه. سفارش شماره #{toPersianDigits(894271)} ثبت گردیده و در صف آماده‌سازی و ارسال اولویت‌دار قرار گرفت.
              </p>
              <button
                onClick={() => {
                  setOrderComplete(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
                style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
              >
                بازگشت به فروشگاه
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-14 h-14 bg-neutral-100 rounded-none flex items-center justify-center mx-auto text-neutral-400">
                <ShoppingBag className="w-7 h-7 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>سبد خرید شما خالی است</h3>
                <p className="text-xs text-neutral-500 mt-1 max-w-xs mx-auto leading-relaxed" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>
                  کالکشن جدید پاییزه لنگه را مشاهده کنید تا گزینه‌های منتخب خود را به سبد خرید بیفزایید.
                </p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onStartShopping();
                }}
                className="px-6 py-3 bg-black text-white text-xs font-bold hover:bg-neutral-800 transition-colors cursor-pointer"
                style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
              >
                مشاهده محصولات کالکشن
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedSize}`}
                className="flex gap-3 pb-4 border-b border-neutral-100 text-right items-stretch"
              >
                {/* تصویر محصول در سمت راست */}
                <div className="w-20 h-28 bg-neutral-100 overflow-hidden flex-shrink-0 border border-neutral-200">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* اطلاعات کارت: الاین دقیق با ابتدا (عنوان) و انتهای (دکمه تعداد) تصویر محصول */}
                <div className="flex-1 min-w-0 flex flex-col justify-between h-28 py-0.5 text-right">
                  <div>
                    <div className="flex justify-between items-start gap-1">
                      <h4
                        className="text-xs font-semibold text-neutral-900 leading-snug truncate"
                        style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                      >
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() =>
                          setItemToDelete({
                            productId: item.product.id,
                            size: item.selectedSize,
                            name: item.product.name,
                            image: item.product.image,
                          })
                        }
                        className="text-neutral-400 hover:text-red-600 transition-colors p-0.5 cursor-pointer flex-shrink-0"
                        aria-label="حذف کالا"
                      >
                        <Trash className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* بخش مشخصات کالا در ۲ خط مجزا (رنگ و سایز) */}
                    <div
                      className="text-[11px] text-neutral-500 mt-1 space-y-0.5 leading-tight"
                      style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                    >
                      <div>رنگ: <span className="text-neutral-700 font-medium">{item.product.colorway}</span></div>
                      <div>سایز: <span className="text-neutral-700 font-semibold">{toPersianDigits(item.selectedSize)}</span></div>
                    </div>
                  </div>

                  {/* بخش کنترل تعداد و قیمت - تراز شده دقیقاً با انتهای تصویر */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-neutral-200 bg-neutral-50 h-7">
                      {/* سمت راست: آیکون + */}
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, 1)}
                        className="h-full px-2 text-neutral-700 hover:text-black hover:bg-neutral-200 transition-colors cursor-pointer flex items-center justify-center"
                        aria-label="افزایش تعداد"
                      >
                        <Plus className="w-3.5 h-3.5 stroke-[2.2]" />
                      </button>

                      {/* وسط: تعداد به فارسی */}
                      <span
                        className="px-2 text-xs font-bold text-neutral-900 min-w-[20px] text-center select-none"
                        style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                      >
                        {toPersianDigits(item.quantity)}
                      </span>

                      {/* سمت چپ: آیکون - */}
                      <button
                        onClick={() => {
                          if (item.quantity <= 1) {
                            setItemToDelete({
                              productId: item.product.id,
                              size: item.selectedSize,
                              name: item.product.name,
                              image: item.product.image,
                            });
                          } else {
                            onUpdateQuantity(item.product.id, item.selectedSize, -1);
                          }
                        }}
                        className="h-full px-2 text-neutral-700 hover:text-black hover:bg-neutral-200 transition-colors cursor-pointer flex items-center justify-center"
                        aria-label="کاهش تعداد"
                      >
                        <Minus className="w-3.5 h-3.5 stroke-[2.2]" />
                      </button>
                    </div>

                    <span
                      className="text-xs font-semibold text-neutral-900"
                      style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                    >
                      {formatTomanPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with Subtotal & Sticky Checkout */}
        {items.length > 0 && !orderComplete && (
          <div className="sticky bottom-0 z-20 flex-shrink-0 p-5 border-t border-neutral-200 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.06)] space-y-3">
            {/* Calculations: Only items total is the final amount */}
            <div
              className="flex justify-between items-center text-sm font-bold text-neutral-900"
              style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
            >
              <span>مجموع اقلام</span>
              <span className="text-base font-bold text-black">{formatTomanPrice(subtotal)}</span>
            </div>

            {/* Sticky Submit Order Button */}
            <button
              onClick={() => {
                if (onProceedToCheckout) {
                  onProceedToCheckout();
                } else {
                  handleSimulateCheckout();
                }
              }}
              disabled={isCheckingOut}
              className="w-full py-3.5 bg-black hover:bg-neutral-800 active:scale-[0.99] text-white text-xs font-bold transition-all flex items-center justify-center shadow cursor-pointer"
              style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
            >
              {isCheckingOut ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <span>ثبت سفارش</span>
              )}
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-neutral-400 pt-0.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>
                پرداخت ایمن با رمزنگاری پیشرفته و ضمانت اصالت
              </span>
            </div>
          </div>
        )}
      </div>

      {/* مدال تایید حذف کالا از سبد خرید */}
      {itemToDelete && (
        <div
          className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          dir="rtl"
          onClick={() => setItemToDelete(null)}
        >
          <div
            className="bg-white border border-neutral-200 p-5 sm:p-6 max-w-sm w-full shadow-2xl animate-in zoom-in-95 duration-200 text-right"
            onClick={(e) => e.stopPropagation()}
            style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 border border-red-100">
                <Trash className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-neutral-900">
                  حذف کالا از سبد خرید
                </h3>
                <p className="text-[11px] text-neutral-500 mt-0.5">
                  آیا از حذف این کالا از سبد خود مطمئن هستید؟
                </p>
              </div>
            </div>

            {/* پیش‌نمایش کالا */}
            <div className="bg-neutral-50 border border-neutral-200 p-3 flex items-center gap-3 mb-5">
              <img
                src={itemToDelete.image}
                alt={itemToDelete.name}
                referrerPolicy="no-referrer"
                className="w-12 h-16 object-cover border border-neutral-200 bg-white flex-shrink-0"
              />
              <div className="text-xs min-w-0">
                <p className="font-semibold text-neutral-900 truncate">
                  {itemToDelete.name}
                </p>
                <p className="text-[11px] text-neutral-500 mt-1">
                  سایز: {toPersianDigits(itemToDelete.size)}
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setItemToDelete(null)}
                className="flex-1 py-2.5 border border-neutral-300 hover:bg-neutral-100 text-neutral-700 text-xs font-bold transition-colors cursor-pointer"
              >
                انصراف
              </button>
              <button
                type="button"
                onClick={() => {
                  onRemoveItem(itemToDelete.productId, itemToDelete.size);
                  setItemToDelete(null);
                }}
                className="flex-1 py-2.5 bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white text-xs font-bold transition-colors cursor-pointer shadow-sm"
              >
                حذف کالا
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

