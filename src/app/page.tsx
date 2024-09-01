import { Layout, Products, MembershipTiers, Hero, HeroCards } from '@/components';
import { productsInfo } from '@/data';

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
