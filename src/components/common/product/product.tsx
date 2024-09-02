'use client';

import { ProductType } from '@/data';
import { Box, Divider, Flex, Image, UnstyledButton, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import classes from './styles.module.css';
import { IconEyeFilled, IconHeart, IconBasketFilled } from '@tabler/icons-react';

function Product(props: ProductType) {
  const { id, image, discount, moreInfo, originalPrice, price, productName, savings } = props;
  const router = useRouter();

  const handleQuickLookClick = useCallback(() => {
    router.push('/product/${id}');
  }, [id, router]);

  return (
    <Box className={classes.productCard} h={{ base: 410 }}>
      <Flex direction="column" h="100%">
        <Box px={15} style={{ flexGrow: 1 }}>
          <Box pos={'relative'} mt={15}>
            <Image src={image} h={150} />
            <Box pos={'absolute'} bottom={0} left={0} w={'100%'}>
              <Flex justify={'space-between'} px={2}>
                <Box className={`${classes.iconWrapper} ${classes.iconHoverStyle}`}>
                  <IconEyeFilled size={20} />
                  <Box className={classes.tooltip}>Quick Look</Box>
                </Box>
                <Box className={`${classes.iconWrapper} ${classes.iconHeartHoverStyle}`}>
                  <IconHeart size={20} />
                </Box>
              </Flex>
            </Box>
          </Box>

          <Divider my={5} />

          <Text h={60} fz={{ base: 10, xs: 13 }}>
            {productName}
          </Text>

          <Divider my={5} />

          <Box>
            <Box h={60}>
              <Text fw={'bold'} c={'red.7'}>
                {price}
                <Text
                  style={{ textDecoration: 'line-through' }}
                  c={'gray.6'}
                  ml={5}
                  component="span"
                  fz={{ base: 11 }}
                  fw={'bold'}
                >
                  {originalPrice}
                </Text>
              </Text>
              <Text c={'gray.7'} fz={{ base: 11, xs: 13 }}>
                save : {savings}
                <Text fz={{ base: 11, xs: 13 }} component="span" mx={5}>
                  ({discount})
                </Text>
              </Text>
            </Box>
            <Text c={'red.6'} mt={{ base: 20, xs: 10 }} fz={{ base: 12, xs: 14 }}>
              {moreInfo}
            </Text>
          </Box>
        </Box>
        <Box w={'100%'} mt={20}>
          <UnstyledButton
            fz={{ base: 12, xs: 14, sm: 18 }}
            fw={'bold'}
            ta={'center'}
            w={'100%'}
            c="white"
            bg={'primary.1'}
            className={classes.btn}
          >
            <IconBasketFilled size={20} style={{ margin: 5 }} /> Add To Basket
          </UnstyledButton>
        </Box>
      </Flex>
    </Box>
  );
}
export { Product };
