import { useCart } from '../../entities/cart';
import { HERO_PRODUCTS } from '../../entities/product';
import { useAppShellUi } from '../../widgets/layout';
import { useAppNavigation } from '../../app';
import { useAppSession } from '../../features/account-auth';
import { useGarderob } from '../../features/garderob';
import type { Product } from '../../types';

export type AppShellControllerOptions = { routeProductId?: string };

export function useAppShellController({ routeProductId }: AppShellControllerOptions = {}) {
  const cart = useCart();
  const ui = useAppShellUi();
  const navigation = useAppNavigation({ routeProductId });
  const session = useAppSession();
  const garderob = useGarderob();
  const { isMenuOpen, setIsMenuOpen, isCartOpen, setIsCartOpen, isAccountOpen, setIsAccountOpen,
    isSearchOpen, setIsSearchOpen, isCloserLookOpen, setIsCloserLookOpen, quickViewProduct,
    setQuickViewProduct, currency, setCurrency, isScrolled, toastMessage, showToast } = ui;
  const { currentView, selectedProduct, productFilter, profileSubView, setProfileSubView } = navigation;
  const { userPhone, userName, updateName, login, logout } = session;
  const garderobIds = garderob.ids;

  const handleAddToCart = (product: Product, size: string) => {
    cart.add(product, size);
    showToast(`${product.name} (سایز ${size}) به سبد خرید اضافه شد`);
  };
  const handleToggleGarderob = (product: Product) => {
    const exists = garderob.ids.includes(product.id);
    garderob.toggle(product);
    showToast(exists ? `${product.name} removed from garderob` : `${product.name} added to garderob`);
  };
  const handleNavigateToProducts = (filter?: { gender?: 'all' | 'men' | 'women'; collection?: string; category?: string; badge?: string }) => {
    navigation.goProducts(filter); setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleNavigateToHome = () => { navigation.goHome(); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const handleNavigateToAbout = () => { navigation.goTo('about'); setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const handleNavigateToContact = () => { navigation.goTo('contact'); setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const handleOpenCollectionStory = () => { navigation.goTo('collection-story'); setIsMenuOpen(false); setIsSearchOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const handleOpenProductDetail = (product: Product) => { navigation.openProduct(product); setIsMenuOpen(false); setIsSearchOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const handleUpdateQuantity = (productId: string, size: string, delta: number) => cart.updateQuantity(productId, size, delta);
  const handleRemoveItem = (productId: string, size: string) => cart.remove(productId, size);
  const handleProceedToCheckout = () => { setIsCartOpen(false); navigation.goTo('checkout'); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const handleAddAllHeroPieces = () => { HERO_PRODUCTS.forEach((product) => handleAddToCart(product, product.sizes[0])); showToast('ست کامل استایل پاییز ۲۰۲۶ به سبد خرید اضافه شد'); };
  const handleLoginSuccess = (phone: string) => { login(phone); setIsAccountOpen(false); showToast('شما با موفقیت وارد شدید'); navigation.goTo('profile'); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const handleLogout = () => { logout(); setIsAccountOpen(false); navigation.goHome(); window.scrollTo({ top: 0, behavior: 'smooth' }); showToast('از حساب کاربری خارج شدید'); };
  const handleOpenAccount = () => { if (userPhone) { setProfileSubView('menu'); navigation.goTo('profile'); window.scrollTo({ top: 0, behavior: 'smooth' }); } else setIsAccountOpen(true); };
  const handleOrderCompleted = (goToProfile?: boolean) => { cart.clear(); if (goToProfile) { if (!userPhone) login('۰۹۱۲۳۴۵۶۷۸۹'); setProfileSubView('orders'); navigation.goTo('profile'); } else navigation.goHome(); window.scrollTo({ top: 0, behavior: 'smooth' }); showToast('سفارش شما با موفقیت ثبت شد'); };

  return { cart, ui, navigation, session, garderob, currentView, selectedProduct, productFilter, profileSubView,
    userPhone, userName, updateName, garderobIds, isMenuOpen, setIsMenuOpen, isCartOpen, setIsCartOpen,
    isAccountOpen, setIsAccountOpen, isSearchOpen, setIsSearchOpen, isCloserLookOpen, setIsCloserLookOpen,
    quickViewProduct, setQuickViewProduct, currency, setCurrency, isScrolled, toastMessage, showToast,
    handleAddToCart, handleToggleGarderob, handleNavigateToProducts, handleNavigateToHome, handleNavigateToAbout,
    handleNavigateToContact, handleOpenCollectionStory, handleOpenProductDetail, handleUpdateQuantity,
    handleRemoveItem, handleProceedToCheckout, handleAddAllHeroPieces, handleLoginSuccess, handleLogout,
    handleOpenAccount, handleOrderCompleted };
}
