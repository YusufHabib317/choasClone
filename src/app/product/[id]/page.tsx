import dynamic from 'next/dynamic';
import { Layout } from '@/components';

const InfoBar = dynamic(() => import('@/components').then((mod) => mod.InfoBar), { ssr: false });
const ProductInfo = dynamic(() => import('@/components').then((mod) => mod.ProductInfo), { ssr: false });
const ProductFeatures = dynamic(() => import('@/components').then((mod) => mod.ProductFeatures), { ssr: false });

export default function ProductPage() {
  return (
    <>
      <InfoBar />
      <Layout>
        <ProductInfo />
      </Layout>
      <ProductFeatures />
    </>
  );
}
