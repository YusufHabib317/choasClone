import { Layout, Products, MembershipTiers } from '@/components';
import { productsInfo } from '@/data';

export default function Home() {
  return (
    <>
      <Layout>
        <Products title="Recommended for you" products={productsInfo} />
        <Products title="Featured Board Games" products={productsInfo} />
      </Layout>
    </>
  );
}
