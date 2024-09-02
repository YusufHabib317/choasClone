'use client';

import { products } from '@/data';
import { Box, Flex, Input, Menu, Center } from '@mantine/core';
import { IconSearch, IconChevronDown } from '@tabler/icons-react';
import { useState } from 'react';
import classes from './styles.module.css';

function SearchBar() {
  const [selectedProduct, setSelectedProduct] = useState<string>(products[0]);

  const handleProductChange = (product: string) => {
    setSelectedProduct(product);
  };

  return (
    <Flex c={'white'} align={'center'} h={40} style={{ flexGrow: 1 }}>
      <Box
        bg={'gray.4'}
        h={'100%'}
        w={150}
        px={10}
        c={'black'}
        fz={14}
        style={{ cursor: 'pointer', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}
      >
        <Menu trigger="hover">
          <Menu.Target>
            <Flex justify={'space-between'} align={'center'} h={'100%'}>
              <Box fz={{ base: 11, xs: 13, sm: 16 }}>{selectedProduct}</Box>
              <IconChevronDown size={18} style={{ marginTop: 2 }} />
            </Flex>
          </Menu.Target>
          <Menu.Dropdown>
            {products.map((item) => {
              return (
                <Menu.Item key={item} onClick={() => handleProductChange(item)} fz={'sm'}>
                  {item}
                </Menu.Item>
              );
            })}
          </Menu.Dropdown>
        </Menu>
      </Box>
      <Input
        placeholder="What are you looking for?"
        classNames={{ wrapper: classes.inputWrapper, input: classes.input }}
        rightSection={
          <Flex
            mr={5}
            bg={'primary.1'}
            justify={'center'}
            align={'center'}
            w={30}
            h={30}
            style={{ borderRadius: '4px' }}
            visibleFrom="xs"
          >
            <IconSearch color="white" style={{ fontWeight: 'bold' }} size={16} stroke={3} />
          </Flex>
        }
      />
    </Flex>
  );
}

export { SearchBar };
