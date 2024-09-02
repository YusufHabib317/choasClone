'use client';

import { IconHeart } from '@tabler/icons-react';
import { Box, Flex, Text, UnstyledButton } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './styles.module.css';

function ActionBar() {
  const isMedScreen = useMediaQuery('(max-width: 74em)');

  if (isMedScreen) {
    return (
      <Flex direction="column" gap={15} mb={40}>
        <Flex mb={10} justify={'space-between'} align={'center'}>
          <Text>Quantity</Text>
          <input
            id="quantity"
            value={1}
            style={{
              border: '1px solid var(--mantine-color-gray-4)',
              width: '45px',
              height: '100%',
              padding: '10px',
              borderRadius: '6px',
              textAlign: 'center',
            }}
          />
        </Flex>
        <UnstyledButton
          style={{
            width: '100%',
            backgroundColor: 'var(--mantine-color-primary-1)',
            color: 'white',
            borderRadius: '30px',
          }}
        >
          <Box
            ta={'center'}
            fw={'bold'}
            p={10}
            fz={{ base: 12, xs: 14, md: 16 }}
            className={`${classes.btn} ${classes.btnHover}`}
          >
            ADD TO BASKET
          </Box>
        </UnstyledButton>
        <UnstyledButton
          bg={'white'}
          style={{
            width: '100%',
            border: '2px solid var(--mantine-color-primary-1)',
            borderRadius: '30px',
            color: 'var(--mantine-color-dark-9)',
            marginTop: '5px',
          }}
          ta={'center'}
        >
          <Flex
            fw={'bold'}
            p={10}
            fz={{ base: 12, xs: 14, md: 16 }}
            justify={'center'}
            align="center"
            className={classes.btnAddWishListHover}
          >
            <IconHeart size={18} style={{ marginRight: '5px' }} />
            ADD TO WISHLIST
          </Flex>
        </UnstyledButton>
      </Flex>
    );
  }

  return (
    <Flex h={45} align={'center'} justify={'space-between'} mb={40}>
      <input
        value={1}
        style={{
          border: '1px solid var(--mantine-color-gray-4)',
          width: '45px',
          height: '100%',
          paddingLeft: '16px',
          borderRadius: '6px',
        }}
      />
      <UnstyledButton w={{ base: '50%', xs: '60%', sm: '70%', md: '80%' }} h={'100%'}>
        <Box fw={'bold'} p={10} fz={{ base: 12, xs: 14, md: 16 }} className={`${classes.btn} ${classes.btnHover}`}>
          Add To Basket
        </Box>
      </UnstyledButton>
      <Box
        bg={'white'}
        p={7}
        className={classes.btnAddWishListHover}
        style={{
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid var(--mantine-color-primary-1)',
          cursor: 'pointer',
        }}
      >
        <IconHeart />
      </Box>
    </Flex>
  );
}

export { ActionBar };
