import { Box } from '@mantine/core';
import classes from './styles.module.css';
import { CategoryCard } from './category-card';
import { categories } from '@/data';

function CategoriesGrid() {
  return (
    <Box className={classes.categoriesGridWrapper}>
      {categories.map((category) => (
        <Box key={category.name} fz={{ base: 12, xs: 14 }}>
          <CategoryCard {...category} />
        </Box>
      ))}
    </Box>
  );
}
export { CategoriesGrid };
