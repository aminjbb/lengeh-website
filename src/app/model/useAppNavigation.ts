'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ALL_PRODUCTS } from '../../entities/product';
import type { Product, ProductFilter as SharedProductFilter } from '../../types';

export type AppView = 'home' | 'products' | 'product-detail' | 'about' | 'contact' | 'profile' | 'checkout' | 'collection-story';
export type ProductFilter = SharedProductFilter;
export type ProfileSubView = 'menu' | 'orders' | 'wishlist' | 'addresses' | 'personal-info';

const isGender = (value: string | null): ProductFilter['gender'] =>
  value === 'men' || value === 'women' ? value : 'all';

export function useAppNavigation(options: { routeProductId?: string } = {}) {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(ALL_PRODUCTS[0] ?? null);
  const [productFilter, setProductFilter] = useState<ProductFilter>({ gender: 'all' });
  const [profileSubView, setProfileSubView] = useState<ProfileSubView>('menu');

  const currentView = useMemo<AppView>(() => {
    if (pathname === '/products' || pathname === '/products/') return 'products';
    if (pathname.startsWith('/products/')) return 'product-detail';
    if (pathname === '/about') return 'about';
    if (pathname === '/contact') return 'contact';
    if (pathname === '/profile') return 'profile';
    if (pathname === '/checkout') return 'checkout';
    if (pathname === '/collection-story') return 'collection-story';
    return 'home';
  }, [pathname]);

  useEffect(() => {
    if (currentView !== 'products') return;
    const params = new URLSearchParams(window.location.search);
    setProductFilter({
      gender: isGender(params.get('gender')),
      collection: params.get('collection') || 'all',
      category: params.get('category') || 'all',
      badge: params.get('badge') || undefined,
    });
  }, [currentView, pathname]);

  const routeProduct = useMemo(() => {
    const id = options.routeProductId ?? (pathname.startsWith('/products/') ? pathname.split('/')[2] : undefined);
    return id ? ALL_PRODUCTS.find((product) => product.id === decodeURIComponent(id)) : undefined;
  }, [options.routeProductId, pathname]);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const goHome = () => { router.push('/'); scrollTop(); };
  const goProducts = (filter?: ProductFilter) => {
    setProductFilter({ gender: filter?.gender || 'all', collection: filter?.collection || 'all', category: filter?.category || 'all', badge: filter?.badge });
    const params = new URLSearchParams();
    if (filter?.gender && filter.gender !== 'all') params.set('gender', filter.gender);
    if (filter?.collection && filter.collection !== 'all') params.set('collection', filter.collection);
    if (filter?.category && filter.category !== 'all') params.set('category', filter.category);
    if (filter?.badge) params.set('badge', filter.badge);
    router.push(`/products${params.toString() ? `?${params.toString()}` : ''}`);
    scrollTop();
  };
  const goTo = (view: AppView) => {
    const paths: Record<Exclude<AppView, 'home' | 'products' | 'product-detail'>, string> = {
      about: '/about', contact: '/contact', profile: '/profile', checkout: '/checkout', 'collection-story': '/collection-story',
    };
    if (view === 'home') return goHome();
    if (view === 'products') return goProducts();
    if (view === 'product-detail') return;
    router.push(paths[view]);
    scrollTop();
  };
  const openProduct = (product: Product) => { setSelectedProduct(product); router.push(`/products/${encodeURIComponent(product.id)}`); scrollTop(); };

  return { currentView, selectedProduct: routeProduct ?? selectedProduct, productFilter, profileSubView, setProfileSubView, goHome, goProducts, goTo, openProduct };
}

