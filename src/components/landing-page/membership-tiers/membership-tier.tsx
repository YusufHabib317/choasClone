import { MembershipType } from '@/data';
import { Box, Text, Flex, Center, Divider, Image, Stack } from '@mantine/core';
import classes from './style.module.css';
import { IconChevronRight } from '@tabler/icons-react';

function MembershipTier(props: MembershipType) {
  const { cashback, image, level, points, imageOnHover } = props;
  return (
    <Box className={classes.cardWrapper}>
      <Image src={imageOnHover} className={classes.imageOnHover} />
      <Box p={10}>
        <Flex justify={'space-between'} align={'center'}>
          <Text fz={{ base: 15, xs: 30 }} fw={'bold'}>
            {level}
          </Text>
          <Text fz={{ base: 15, xs: 20 }} c="green.8" fw={'bold'}>
            {points} Pts
          </Text>
        </Flex>
        <Center my={15}>
          <Image src={image} w={{ base: 120, xs: 150 }} />
        </Center>
        <Stack ta={'center'}>
          <Text fw={'bold'} fz={{ base: 13, xs: 16 }}>
            {cashback}% Monthly cashback
          </Text>
          <Text fw={'bold'} fz={{ base: 13, xs: 16 }}>
            Exclusive Discount code every{' '}
          </Text>
        </Stack>
      </Box>
      <Box mt={10}>
        <Divider />
        <Flex
          p={15}
          justify={'center'}
          align={'center'}
          component="a"
          className={classes.BecomeMemberBtn}
          fz={{ base: 13, xs: 18 }}
        >
          BECOME A MEMBER
          <IconChevronRight
            size={20}
            style={{
              color: 'var(--mantine-color-primary-1)',
            }}
          />
        </Flex>
      </Box>
    </Box>
  );
}
export { MembershipTier };
