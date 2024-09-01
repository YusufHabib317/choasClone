import { CategoriesGrid, CategoriesList, Layout } from '@/components';
import { Box, Flex } from '@mantine/core';

export default function page() {
  return (
    <Layout>
      <Flex mt={100} direction={{ base: 'column', lg: 'row' }} gap="md" w="100%">
        <CategoriesList />
        <CategoriesGrid />
      </Flex>
    </Layout>
  );
}
