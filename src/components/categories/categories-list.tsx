'use client';

import { Box, List, Select, Title } from '@mantine/core';
import classes from './styles.module.css';
import { categories } from '@/data';

function CategoriesList() {
  const categoryOptions = categories.map((category, i) => ({
    value: i.toString(),
    label: category.name,
  }));
  return (
    <Box className={classes.categoriesListWrapper}>
      <Title fz={{ base: 14, xs: 16, sm: 28 }}>Categories</Title>
      <Box className={classes.selectBox}>
        <Select placeholder="Comming Soon" data={categoryOptions} />
      </Box>

      <Box className={classes.listBox}>
        <ul>
          {categories.map((category) => (
            <Box component="li" key={category.name} fz={{ base: 12, xs: 14 }}>
              {category.name}
            </Box>
          ))}
        </ul>
      </Box>
    </Box>
  );
}
export { CategoriesList };
