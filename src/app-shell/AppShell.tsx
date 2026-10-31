'use client';

import React from 'react';
import { Header, Footer, NavigationDrawer, CartDrawer, CloserLookModal } from '../widgets/layout';
import { QuickViewModal } from '../features/product-interaction/ui/QuickViewModal';
import { SearchModal } from '../features/product-search/ui/SearchModal';
import { HeroSection, ProductLookbookCards, WomenHeroSection, WomenLookbookCards } from '../widgets/home';
import { ProductListPage, ProductDetailPage } from '../widgets/catalog';
import { ProfilePage } from '../widgets/account';
import { AccountModal } from '../features/account-auth/ui/AccountModal';
import { CheckoutPage } from '../widgets/checkout';
import { AboutPage, ContactPage, CollectionStoryPage } from '../widgets/content';
import { HERO_PRODUCTS } from '../entities/product';
import { useCart } from '../entities/cart';
import { useAppShellUi } from '../widgets/layout/model/useAppShellUi';
import { useAppNavigation } from '../app/model/useAppNavigation';
import { useAppSession } from '../features/account-auth/model/useAppSession';
import { useGarderob } from '../features/garderob/model/useGarderob';
import { Product } from '../types';
import { Check } from '@mynaui/icons-react';

export default function App() {
  const cart = useCart();
  const ui = useAppShellUi();
  const navigation = useAppNavigation();
  const session = useAppSession();
  const garderob = useGarderob();
  const { isMenuOpen, setIsMenuOpen, isCartOpen, setIsCartOpen, isAccountOpen, setIsAccountOpen,
    isSearchOpen, setIsSearchOpen, isCloserLookOpen, setIsCloserLookOpen, quickViewProduct,
    setQuickViewProduct, currency, setCurrency, isScrolled, toastMessage, showToast } = ui;

  const { currentView, selectedProduct, productFilter, profileSubView, setProfileSubView } = navigation;
  const { userPhone, userName, updateName, login, logout } = session;
  const garderobIds = garderob.ids;
  const handleUpdateUserName = updateName;
  /* Navigation, session, and garderob state live in their owning hooks. */
  /* legacy declarations removed */
  const handleLoginSuccess = (phone: string) => {
    login(phone);
    setIsAccountOpen(false);
    showToast('شما با موفقیت وارد شدید');
    navigation.goTo('profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    logout();
    setIsAccountOpen(false);
    navigation.goHome();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast('از حساب کاربری خارج شدید');
  };

  const handleOpenAccount = () => {
    if (userPhone) {
      setProfileSubView('menu');
      navigation.goTo('profile');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setIsAccountOpen(true);
    }
  };

  const handleToggleGarderob = (product: Product) => {
    const exists = garderob.ids.includes(product.id);
    garderob.toggle(product);
    showToast(exists ? `${product.name} removed from garderob` : `${product.name} added to garderob`);
  };
  const handleAddToCart = (product: Product, size: string) => {
    cart.add(product, size);
    showToast(`${product.name} (سایز ${size}) به سبد خرید اضافه شد`);
  };

  const handleAddAllHeroPieces = () => {
    HERO_PRODUCTS.forEach((product) => {
      const defaultSize = product.sizes[0];
      handleAddToCart(product, defaultSize);
    });
    showToast('ست کامل استایل پاییز ۲۰۲۶ به سبد خرید اضافه شد');
  };

  const handleUpdateQuantity = (productId: string, size: string, delta: number) => {
    cart.updateQuantity(productId, size, delta);
  };

  const handleRemoveItem = (productId: string, size: string) => {
    cart.remove(productId, size);
  };

  const handleNavigateToProducts = (filter?: {
    gender?: 'all' | 'men' | 'women';
    collection?: string;
    category?: string;
    badge?: string;
  }) => {
    navigation.goProducts(filter);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToHome = () => {
    navigation.goHome();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToAbout = () => {
    navigation.goTo('about');
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToContact = () => {
    navigation.goTo('contact');
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProductDetail = (product: Product) => {
    navigation.openProduct(product);
    setIsMenuOpen(false);
    setIsSearchOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    navigation.goTo('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCollectionStory = () => {
    navigation.goTo('collection-story');
    setIsMenuOpen(false);
    setIsSearchOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOrderCompleted = (goToProfile?: boolean) => {
    cart.clear();

    if (goToProfile) {
      if (!userPhone) {
        const phone = '۰۹۱۲۳۴۵۶۷۸۹';
        login(phone);
      }
      setProfileSubView('orders');
      navigation.goTo('profile');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      showToast('سفارش شما با موفقیت ثبت شد');
    } else {
      navigation.goHome();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      showToast('سفارش شما با موفقیت ثبت شد');
    }
  };

  const totalCartCount = cart.count;

  return (
    <div dir="rtl" className="min-h-screen bg-white text-neutral-900 font-tommy relative selection:bg-black selection:text-white">
      {/* Toast Notification (Top center, single-line, light green for login success) */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center pointer-events-none px-3 max-w-[95vw]">
          <div
            className={`pointer-events-auto px-4 sm:px-5 py-2.5 text-xs sm:text-[13px] font-medium shadow-xl flex items-center gap-2 whitespace-nowrap animate-in fade-in slide-in-from-top-4 duration-250 select-none ${
              toastMessage.includes('موفقیت')
                ? 'bg-[#eaf7ee] text-[#1b5e20] border border-[#bfe7ca]'
                : 'bg-black/95 text-white border border-white/20'
            }`}
            style={{ fontFamily: "'YekanBakh', 'Yekan Bakh', sans-serif" }}
          >
            <Check className={`w-4 h-4 shrink-0 ${toastMessage.includes('موفقیت') ? 'text-[#2e7d32]' : 'text-emerald-400'}`} />
            <span className="whitespace-nowrap">{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Global Header */}
      <Header
        cartCount={totalCartCount}
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAccount={handleOpenAccount}
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigateHome={handleNavigateToHome}
        isScrolled={isScrolled}
        isLightBackground={currentView === 'products' || currentView === 'product-detail' || currentView === 'about' || currentView === 'contact' || currentView === 'profile' || currentView === 'checkout' || currentView === 'collection-story'}
        currency={currency}
        onCurrencyChange={setCurrency}
      />

      <main className={currentView === 'products' || currentView === 'product-detail' || currentView === 'about' || currentView === 'contact' || currentView === 'profile' || currentView === 'checkout' || currentView === 'collection-story' ? 'pt-12 sm:pt-14' : ''}>
        {currentView === 'checkout' ? (
          /* Dedicated Address & Delivery Time Checkout Page */
          <CheckoutPage
            items={cart.items}
            userPhone={userPhone}
            userName={userName}
            onBackToCart={() => {
              navigation.goHome();
              setIsCartOpen(true);
            }}
            onOrderCompleted={handleOrderCompleted}
          />
        ) : currentView === 'profile' ? (
          /* Dedicated Profile Page matching image_b4781195.png */
          <ProfilePage
            userPhone={userPhone || ''}
            userName={userName}
            onUpdateUserName={handleUpdateUserName}
            onLogout={handleLogout}
            onNavigateHome={handleNavigateToHome}
            onNavigateToProducts={handleNavigateToProducts}
            garderobIds={garderobIds}
            onOpenProductDetail={handleOpenProductDetail}
            onToggleGarderob={handleToggleGarderob}
            initialSubView={profileSubView}
          />
        ) : currentView === 'about' ? (
          /* Dedicated About Us Page (Kith About Layout) */
          <AboutPage
            onNavigateHome={handleNavigateToHome}
            onNavigateToProducts={handleNavigateToProducts}
          />
        ) : currentView === 'contact' ? (
          /* Dedicated Contact & FAQ Page */
          <ContactPage
            onNavigateHome={handleNavigateToHome}
            onNavigateToProducts={handleNavigateToProducts}
          />
        ) : currentView === 'product-detail' ? (
          /* Dedicated Luxury Product Detail Page (Toteme PDP Layout) */
          <ProductDetailPage
            product={selectedProduct}
            currency={currency}
            onBack={() => {
              navigation.goProducts();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onAddToCart={handleAddToCart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            cartItems={cart.items}
            onSelectProduct={handleOpenProductDetail}
            garderobIds={garderobIds}
            onToggleGarderob={handleToggleGarderob}
          />
        ) : currentView === 'products' ? (
          /* Dedicated Minimalist Product List Page matching reference picture */
          <ProductListPage
            initialGender={productFilter.gender}
            initialCollection={productFilter.collection}
            initialCategory={productFilter.category}
            initialBadge={productFilter.badge}
            currency={currency}
            onBackToHome={handleNavigateToHome}
            onSelectProduct={handleOpenProductDetail}
            garderobIds={garderobIds}
            onToggleGarderob={handleToggleGarderob}
          />
        ) : currentView === 'collection-story' ? (
          /* Dedicated Collection Story & Certificate of Authenticity Page */
          <CollectionStoryPage
            onNavigateHome={handleNavigateToHome}
            onNavigateToProducts={() => handleNavigateToProducts({ gender: 'all' })}
          />
        ) : (
          /* Homepage */
          <>
            {/* Hero Section */}
            <HeroSection
              onShopNowClick={() => handleNavigateToProducts({ gender: 'men' })}
              onCloserLookClick={handleOpenCollectionStory}
              onQuickAdd={handleAddToCart}
            />

            {/* 4 Product Cards Grid matching reference photo */}
            <ProductLookbookCards
              onQuickShop={(product) => handleOpenProductDetail(product)}
              onOpenQuickView={(product) => handleOpenProductDetail(product)}
            />

            {/* Women's Editorial Section: Full-Width Photo with Same Title, Subtitle, 2 Buttons */}
            <WomenHeroSection
              onShopNowClick={() => handleNavigateToProducts({ gender: 'women' })}
              onCloserLookClick={handleOpenCollectionStory}
            />

            {/* 4 Women's Editorial Cards with the Same Vibe */}
            <WomenLookbookCards
              onQuickShop={(product) => handleOpenProductDetail(product)}
              onOpenQuickView={(product) => handleOpenProductDetail(product)}
            />
          </>
        )}

        {/* Accordion Footer matching reference photo */}
        <Footer
          onOpenCloserLook={handleOpenCollectionStory}
          onNavigateToProducts={handleNavigateToProducts}
          onNavigateToAbout={handleNavigateToAbout}
          onNavigateToContact={handleNavigateToContact}
        />
      </main>

      {/* Full-width Navigation Menu */}
      <NavigationDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelectCategory={() => setIsMenuOpen(false)}
        onNavigateToProducts={handleNavigateToProducts}
        onOpenCloserLook={handleOpenCollectionStory}
        currency={currency}
        onCurrencyChange={setCurrency}
        onSelectProduct={(product) => {
          setIsMenuOpen(false);
          handleOpenProductDetail(product);
        }}
        onNavigateToAbout={handleNavigateToAbout}
        onNavigateToContact={handleNavigateToContact}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart.items}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onStartShopping={() => {
          setIsCartOpen(false);
          handleNavigateToProducts();
        }}
        onProceedToCheckout={handleProceedToCheckout}
      />

      <CloserLookModal
        isOpen={isCloserLookOpen}
        onClose={() => setIsCloserLookOpen(false)}
        onQuickAdd={handleAddToCart}
        onAddAllHeroPieces={handleAddAllHeroPieces}
      />

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
        userPhone={userPhone}
        onLoginSuccess={handleLoginSuccess}
        onLogout={handleLogout}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => {
          setIsSearchOpen(false);
          handleOpenProductDetail(p);
        }}
      />
    </div>
  );
}



