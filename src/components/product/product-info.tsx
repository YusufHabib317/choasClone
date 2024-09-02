import { Box, Flex, Image } from '@mantine/core';
import classes from './styles.module.css';
import { FormInfo } from './form-info';

function ProductInfo() {
  return (
    <Box mt={0} mih={'100%'} p={{ base: 5, xs: 10, sm: 40 }}>
      <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: 'md', md: 'xl' }} align="stretch">
        <Box
          style={{ width: '100%' }}
          h={{ base: 250, sm: 500 }}
          maw={{ md: '50%' }}
          className={classes.productImageWrapper}
        >
          <Image src={'/products/4.png'} w={{ base: '80%', sm: '70%' }} h="100%" fit="cover" />
        </Box>
        <Box style={{ width: '100%' }} maw={{ md: '50%' }}>
          <FormInfo />
        </Box>
      </Flex>
    </Box>
  );
}

export { ProductInfo };
