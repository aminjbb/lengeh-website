import React, { useState, useEffect } from 'react';
import type { ProductFilter } from '../../types';
import { ShoppingBag, Heart, LogOut, ArrowRight, ArrowLeft, ChevronLeft, User as UserIcon, Plus, Trash2, Edit3, Check, Package } from 'lucide-react';
import { Product, UserOrder } from '../../types';
import { ALL_PRODUCTS } from '../../data/mockData';
import { formatTomanPrice, toPersianDigits } from '../../utils/persianNumbers';
import { SignpostIcon } from './ui/SignpostIcon';
import { OrdersView } from './ui/OrdersView';
import { WishlistView } from './ui/WishlistView';
import { AddressesView } from './ui/AddressesView';
import { PersonalInfoView } from './ui/PersonalInfoView';
import type { AddressFormValue, AddressItem } from './model/accountTypes';

interface ProfilePageProps {
  userPhone: string;
  userName?: string;
  onUpdateUserName: (name: string) => void;
  onLogout: () => void;
  onNavigateHome: () => void;
  onNavigateToProducts: (filter?: ProductFilter) => void;
  garderobIds: string[];
  onOpenProductDetail: (product: Product) => void;
  onToggleGarderob?: (product: Product) => void;
  initialSubView?: 'menu' | 'orders' | 'wishlist' | 'addresses' | 'personal-info';
}

export const ProfilePage: React.FC<ProfilePageProps> = ({
  userPhone,
  userName = '',
  onUpdateUserName,
  onLogout,
  onNavigateHome,
  onNavigateToProducts,
  garderobIds,
  onOpenProductDetail,
  onToggleGarderob,
  initialSubView = 'menu',
}) => {
  // Navigation: 'menu' (main list) or sub-views corresponding to the menu items
  const [currentSubView, setCurrentSubView] = useState<'menu' | 'orders' | 'wishlist' | 'addresses' | 'personal-info'>(initialSubView);

  // Sync initialSubView when changed from parent
  useEffect(() => {
    if (initialSubView) {
      setCurrentSubView(initialSubView);
    }
  }, [initialSubView]);

  // Orders State (Read from lengeh_user_orders)
  const [orders, setOrders] = useState<UserOrder[]>([]);

  // Re-read orders when subview changes to 'orders'
  useEffect(() => {
    if (currentSubView === 'orders') {
      try {
        const saved = localStorage.getItem('lengeh_user_orders');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) setOrders(parsed);
        }
      } catch {}
    }
  }, [currentSubView]);

  // Confirmation modal for logout
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  // Notice banner inside sub-views
  const [noticeMsg, setNoticeMsg] = useState<string | null>(null);

  // Convert English digits to Persian digits
  const showNotice = (msg: string) => {
    setNoticeMsg(msg);
    setTimeout(() => {
      setNoticeMsg((curr) => (curr === msg ? null : curr));
    }, 2800);
  };

  // Personal Info State
  const [firstName, setFirstName] = useState('');

  const [lastName, setLastName] = useState('');

  const [nationalCode, setNationalCode] = useState('');

  const [email, setEmail] = useState('');

  useEffect(() => {
    try {
      const profile = JSON.parse(localStorage.getItem('lengeh_user_profile') || '{}');
      setFirstName(profile.firstName || userName.split(' ')[0] || '');
      setLastName(profile.lastName || userName.split(' ').slice(1).join(' ') || '');
      setNationalCode(profile.nationalCode || '');
      setEmail(profile.email || '');
    } catch {
      const parts = userName.split(' ');
      setFirstName(parts[0] || '');
      setLastName(parts.slice(1).join(' '));
    }
  }, [userName]);

  const handleSavePersonalInfo = (e: React.FormEvent) => {
    e.preventDefault();
    const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();
    onUpdateUserName(fullName);
    try {
      const profileData = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        nationalCode: nationalCode.trim(),
        email: email.trim(),
        phone: userPhone,
      };
      localStorage.setItem('lengeh_user_profile', JSON.stringify(profileData));
    } catch {}
    showNotice('اطلاعات حساب کاربری با موفقیت بروزرسانی شد');
    setCurrentSubView('menu');
  };

  // Addresses State
  const [addresses, setAddresses] = useState<AddressItem[]>([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('lengeh_user_addresses') || '[]');
      if (Array.isArray(saved)) setAddresses(saved);
    } catch {
      setAddresses([]);
    }
  }, []);

  const [isAddressFormOpen, setIsAddressFormOpen] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState<string | null>(null);
  const [addressForm, setAddressForm] = useState({
    title: 'منزل',
    province: 'تهران',
    city: 'تهران',
    fullAddress: '',
    postalCode: '',
    plaque: '',
    unit: '',
    recipientName: userName || '',
    recipientPhone: userPhone || '',
    isDefault: true,
  });

  const handleOpenAddAddress = () => {
    setEditingAddressId(null);
    setAddressForm({
      title: 'منزل',
      province: 'تهران',
      city: 'تهران',
      fullAddress: '',
      postalCode: '',
      plaque: '',
      unit: '',
      recipientName: `${firstName} ${lastName}`.trim() || userName || '',
      recipientPhone: userPhone || '',
      isDefault: addresses.length === 0,
    });
    setIsAddressFormOpen(true);
  };

  const handleOpenEditAddress = (addr: AddressItem) => {
    setEditingAddressId(addr.id);
    setAddressForm({
      title: addr.title,
      province: addr.province,
      city: addr.city,
      fullAddress: addr.fullAddress,
      postalCode: addr.postalCode,
      plaque: addr.plaque,
      unit: addr.unit,
      recipientName: addr.recipientName,
      recipientPhone: addr.recipientPhone,
      isDefault: addr.isDefault,
    });
    setIsAddressFormOpen(true);
  };

  const handleDeleteAddress = (id: string) => {
    const updated = addresses.filter((a) => a.id !== id);
    if (updated.length > 0 && !updated.some((a) => a.isDefault)) {
      updated[0].isDefault = true;
    }
    setAddresses(updated);
    try {
      localStorage.setItem('lengeh_user_addresses', JSON.stringify(updated));
    } catch {}
    showNotice('آدرس حذف شد');
  };

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
        id: `addr_${Date.now()}`,
        ...addressForm,
      };
      if (addressForm.isDefault) {
        updated = [...addresses.map((a) => ({ ...a, isDefault: false })), newAddr];
      } else {
        updated = [...addresses, newAddr];
      }
    }

    setAddresses(updated);
    try {
      localStorage.setItem('lengeh_user_addresses', JSON.stringify(updated));
    } catch {}
    setIsAddressFormOpen(false);
    setEditingAddressId(null);
    showNotice('آدرس با موفقیت ذخیره شد');
  };

  // Saved Wishlist products
  const savedWishlistProducts = ALL_PRODUCTS.filter((p) => garderobIds.includes(p.id));

  // Custom Signpost Icon for "آدرس‌ها" matching uploaded reference image row 4
  if (currentSubView === 'orders') {
    return <OrdersView orders={orders} onBack={() => setCurrentSubView('menu')} onShop={() => onNavigateToProducts({ gender: 'all' })} onOpenProduct={onOpenProductDetail} />;
  }

  if (currentSubView === 'wishlist') {
    return <WishlistView products={savedWishlistProducts} onBack={() => setCurrentSubView('menu')} onShop={() => onNavigateToProducts({ gender: 'all' })} onOpenProduct={onOpenProductDetail} onRemove={onToggleGarderob} />;
  }

  if (currentSubView === 'addresses') {
    return <AddressesView addresses={addresses} form={addressForm} editingId={editingAddressId} notice={noticeMsg} formOpen={isAddressFormOpen} onBack={() => { setIsAddressFormOpen(false); setCurrentSubView('menu'); }} onAdd={handleOpenAddAddress} onEdit={handleOpenEditAddress} onDelete={handleDeleteAddress} onChange={setAddressForm} onSave={handleSaveAddress} onCancel={() => { setIsAddressFormOpen(false); setEditingAddressId(null); }} />;
  }

  if (currentSubView === 'personal-info') {
    return <PersonalInfoView userPhone={userPhone} firstName={firstName} lastName={lastName} nationalCode={nationalCode} email={email} onFirstNameChange={setFirstName} onLastNameChange={setLastName} onNationalCodeChange={setNationalCode} onEmailChange={setEmail} onSave={handleSavePersonalInfo} onBack={() => setCurrentSubView('menu')} />;
  }

  // MAIN VIEW: Menu List exactly matching user's uploaded reference image (image_9bbf1cd0.png)
  return (
    <div className="bg-white text-neutral-900 min-h-screen font-tommy selection:bg-[#171717] selection:text-white" dir="rtl">
      
      {/* Main Container */}
      <main className="max-w-[620px] mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-24">
        
        {/* COMPACT TOP PROFILE HEADER (Phone number, user name, and small grey edit pen icon) */}
        <section className="bg-white border border-neutral-200/90 rounded-none px-4 py-3 mb-6 flex items-center justify-between">
          <div className="text-right">
            {userName ? (
              <>
                <h1
                  className="text-[12.5px] sm:text-[13px] font-semibold text-neutral-900 leading-tight mb-0.5"
                  style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                >
                  {userName}
                </h1>
                <p
                  className="text-[10px] sm:text-[10.5px] text-neutral-500 font-normal tracking-wide"
                  style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
                >
                  {toPersianDigits(userPhone)}
                </p>
              </>
            ) : (
              <p
                className="text-[11.5px] sm:text-[12px] font-medium text-neutral-800 tracking-wide"
                style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
              >
                {toPersianDigits(userPhone)}
              </p>
            )}
          </div>

          <div>
            <button
              type="button"
              onClick={() => setCurrentSubView('personal-info')}
              className="p-1.5 text-neutral-400 hover:text-neutral-800 hover:bg-neutral-100 transition-colors rounded-none cursor-pointer flex items-center justify-center group"
              title="ویرایش اطلاعات حساب"
              aria-label="ویرایش اطلاعات حساب"
            >
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110"
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
        </section>

        {noticeMsg && (
          <div
            className="mb-4 p-2.5 bg-[#eaf7ee] border border-[#bfe7ca] text-[#1b5e20] text-[11px] flex items-center gap-2"
            style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
          >
            <Check className="w-3.5 h-3.5 text-[#2e7d32]" />
            <span>{noticeMsg}</span>
          </div>
        )}

        {/* PROFILE MENU LIST (Pixel-perfect matching uploaded reference image image_9bbf1cd0.png) */}
        <div className="bg-white border-t border-b border-neutral-100 divide-y divide-neutral-100" style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}>
          
          {/* 1. سفارش‌ها */}
          <button
            type="button"
            onClick={() => setCurrentSubView('orders')}
            className="w-full flex items-center justify-between py-3.5 sm:py-4 px-1 hover:bg-neutral-50/60 transition-colors group cursor-pointer text-right"
          >
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-4.5 h-4.5 text-neutral-800 shrink-0 group-hover:scale-105 transition-transform" strokeWidth={1.7} />
              <span className="text-[11.5px] sm:text-[12px] font-medium text-[#222222] group-hover:text-black transition-colors">
                سفارش‌ها
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              {orders.length > 0 && (
                <span className="text-[10px] bg-neutral-100 text-neutral-700 px-1.5 py-0.2 rounded font-medium">
                  {toPersianDigits(orders.length)}
                </span>
              )}
              <ChevronLeft className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 group-hover:-translate-x-0.5 transition-all" strokeWidth={1.6} />
            </div>
          </button>

          {/* 2. علاقمندی‌ها */}
          <button
            type="button"
            onClick={() => setCurrentSubView('wishlist')}
            className="w-full flex items-center justify-between py-3.5 sm:py-4 px-1 hover:bg-neutral-50/60 transition-colors group cursor-pointer text-right"
          >
            <div className="flex items-center gap-3">
              <Heart className="w-4.5 h-4.5 text-neutral-800 shrink-0 group-hover:scale-105 transition-transform" strokeWidth={1.7} />
              <span className="text-[11.5px] sm:text-[12px] font-medium text-[#222222] group-hover:text-black transition-colors">
                علاقمندی‌ها
              </span>
            </div>
            <ChevronLeft className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 group-hover:-translate-x-0.5 transition-all" strokeWidth={1.6} />
          </button>

          {/* 3. آدرس‌ها (بدون نمایش تعداد در منو) */}
          <button
            type="button"
            onClick={() => setCurrentSubView('addresses')}
            className="w-full flex items-center justify-between py-3.5 sm:py-4 px-1 hover:bg-neutral-50/60 transition-colors group cursor-pointer text-right"
          >
            <div className="flex items-center gap-3">
              <SignpostIcon />
              <span className="text-[11.5px] sm:text-[12px] font-medium text-[#222222] group-hover:text-black transition-colors">
                آدرس‌ها
              </span>
            </div>
            <ChevronLeft className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 group-hover:-translate-x-0.5 transition-all" strokeWidth={1.6} />
          </button>

          {/* 4. اطلاعات حساب کاربری */}
          <button
            type="button"
            onClick={() => setCurrentSubView('personal-info')}
            className="w-full flex items-center justify-between py-3.5 sm:py-4 px-1 hover:bg-neutral-50/60 transition-colors group cursor-pointer text-right"
          >
            <div className="flex items-center gap-3">
              <UserIcon className="w-4.5 h-4.5 text-neutral-800 shrink-0 group-hover:scale-105 transition-transform" strokeWidth={1.7} />
              <span className="text-[11.5px] sm:text-[12px] font-medium text-[#222222] group-hover:text-black transition-colors">
                اطلاعات حساب کاربری
              </span>
            </div>
            <ChevronLeft className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 group-hover:-translate-x-0.5 transition-all" strokeWidth={1.6} />
          </button>

          {/* 5. خروج از حساب */}
          <button
            type="button"
            onClick={() => setIsLogoutModalOpen(true)}
            className="w-full flex items-center justify-between py-3.5 sm:py-4 px-1 hover:bg-neutral-50/60 transition-colors group cursor-pointer text-right"
          >
            <div className="flex items-center gap-3">
              <LogOut className="w-4.5 h-4.5 text-neutral-800 shrink-0 group-hover:scale-105 transition-transform" strokeWidth={1.7} />
              <span className="text-[11.5px] sm:text-[12px] font-medium text-[#222222] group-hover:text-black transition-colors">
                خروج از حساب
              </span>
            </div>
            <ChevronLeft className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 group-hover:-translate-x-0.5 transition-all" strokeWidth={1.6} />
          </button>

        </div>

        {/* Back to Home CTA */}
        <div className="text-center mt-16 sm:mt-20">
          <button
            type="button"
            onClick={onNavigateHome}
            className="text-[11px] text-neutral-500 hover:text-black transition-colors cursor-pointer inline-flex items-center gap-1 group"
            style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
          >
            <span>بازگشت به صفحه اصلی</span>
            <ChevronLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" strokeWidth={1.8} />
          </button>
        </div>

      </main>

      {/* Logout Confirmation Modal */}
      {isLogoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="bg-white border border-neutral-200 p-6 max-w-sm w-full rounded-none shadow-2xl text-right animate-in zoom-in-95 duration-200"
            style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
          >
            <h3 className="text-[13.5px] font-bold text-neutral-900 mb-2">
              خروج از حساب کاربری
            </h3>
            <p className="text-[11.5px] text-neutral-600 mb-6 leading-relaxed">
              آیا از خروج از حساب کاربری لنگه اطمینان دارید؟
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setIsLogoutModalOpen(false);
                  onLogout();
                }}
                className="flex-1 h-9.5 bg-[#171717] hover:bg-neutral-800 text-white text-[11px] font-medium rounded-none transition-colors cursor-pointer"
              >
                بله، خروج
              </button>
              <button
                type="button"
                onClick={() => setIsLogoutModalOpen(false)}
                className="flex-1 h-9.5 border border-neutral-200 hover:border-black text-neutral-700 rounded-none text-[11px] transition-colors cursor-pointer"
              >
                انصراف
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};






