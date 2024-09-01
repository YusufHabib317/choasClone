'use client';

import dynamic from 'next/dynamic';
import { Layout, Hero } from '@/components';
import { productsInfo } from '@/data';

const HeroCards = dynamic(() => import('@/components').then((mod) => mod.HeroCards), { ssr: false });
const Products = dynamic(() => import('@/components').then((mod) => mod.Products), { ssr: false });
const MembershipTiers = dynamic(() => import('@/components').then((mod) => mod.MembershipTiers), { ssr: false });

export default function Home() {
  return (
    <>
      <Hero />
      <HeroCards />
      <Layout>
        <Products title="Recommended for you" products={productsInfo} />
        <Products title="Featured Board Games" products={productsInfo} />
      </Layout>
      <MembershipTiers />
    </>
  );
}
