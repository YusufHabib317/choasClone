import { Box, Center, Divider, Image } from '@mantine/core';
import classes from './styles.module.css';

function CategoryCard(props: { name: string; image: string }) {
  const { name, image } = props;

  return (
    <Box className={classes.categoryCard}>
      <Center p={{ base: 0, xs: 8 }} bg={'white'}>
        <Image src={image} alt={name} w={200} />
      </Center>

      <Box
        p={8}
        fw={'bold'}
        fz={{ base: 11, xs: 14 }}
        ta={'center'}
        style={{ borderTop: '1px solid var(--mantine-color-gray-4)' }}
        bg={'white'}
      >
        {name}
      </Box>
    </Box>
  );
}

export { CategoryCard };
