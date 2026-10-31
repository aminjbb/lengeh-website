import { App } from '@/app';
import { ALL_PRODUCTS } from '@/entities/product';
import { notFound } from 'next/navigation';

type ProductRouteProps = {
  params: Promise<{ id: string }>;
};

export default async function RoutePage({ params }: ProductRouteProps) {
  const { id } = await params;
  let decodedId: string;
  try {
    decodedId = decodeURIComponent(id);
  } catch {
    notFound();
  }

  if (!ALL_PRODUCTS.some((product) => product.id === decodedId)) {
    notFound();
  }

  return <App routeProductId={decodedId} />;
}

