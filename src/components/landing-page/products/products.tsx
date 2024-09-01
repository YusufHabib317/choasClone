'use client';

import { Product } from '@/components/common';
import { ProductType } from '@/data';
import { Carousel } from '@mantine/carousel';
import { Box, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

type ProductsPropsType = {
  title: string;
  products: ProductType[];
};

function Products(props: ProductsPropsType) {
  const { title, products } = props;

  const smallScreen = useMediaQuery('(max-width: 600px)');
  const mediumScreen = useMediaQuery('(max-width: 960px)');

  let slideSize = '20%';
  let slidesToScroll = 3;

  if (smallScreen) {
    slideSize = '60%';
    slidesToScroll = 1;
  } else if (mediumScreen) {
    slideSize = '40%';
    slidesToScroll = 2;
  }

  return (
    <Box my={30}>
      <Title order={3} fz={{ base: 12, xs: 14, sm: 16, md: 30 }}>
        {title}
      </Title>

      <Carousel
        height="auto"
        slideSize={slideSize}
        slideGap="md"
        loop
        align="start"
        slidesToScroll={slidesToScroll}
        dragFree
        withIndicators
        mt={30}
      >
        {products.map((item: ProductType, index) => {
          return (
            <Carousel.Slide key={index}>
              <Product {...item} />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </Box>
  );
}

export { Products };
