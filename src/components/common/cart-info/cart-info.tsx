import { Box, Flex } from '@mantine/core';
import { IconBasket } from '@tabler/icons-react';
import classes from './style.module.css';

function CartInfo() {
  return (
    <Flex gap={5} align={'center'} c={'white'}>
      <Box>
        <IconBasket />
      </Box>
      <Box>
        <Box fw={'bold'} className={classes.userCurrency}>
          $ 0.00
        </Box>
        <Box component="span" fz={11} c={'gray.5'}>
          0
        </Box>{' '}
        <Box component="span" fz={11} c={'gray.5'}>
          Items
        </Box>
      </Box>
    </Flex>
  );
}
export { CartInfo };
