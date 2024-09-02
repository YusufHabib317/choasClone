import dynamic from 'next/dynamic';
import { Layout, ProductFeatures } from '@/components';
import { ProductInfo } from '@/components';

const InfoBar = dynamic(() => import('@/components').then((mod) => mod.InfoBar), { ssr: false });

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
