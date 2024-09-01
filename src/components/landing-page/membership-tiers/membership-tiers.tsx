import { Box, Flex, Text, Title, UnstyledButton } from '@mantine/core';
import { MembershipTier } from './membership-tier';
import { membershipData } from '@/data';
import classes from './style.module.css';

function MembershipTiers() {
  return (
    <Box mb={40} pos={'relative'} c={'white'} p={20}>
      <Box className={classes.bg} />

      <Box className={classes.bgLayer} />

      <Box pos={'relative'} style={{ zIndex: 10 }} mx={'auto'}>
        <Flex justify={'space-between'} align={'center'} direction={'column'} w={'100%'} mx={'auto'}>
          <Text fw={'bold'} component={'h3'} ta={'center'} fz={{ base: 16, xs: 20, md: 35 }}>
            Become a Member
          </Text>
          <Text w={'80%'} ta={'center'} my={20} style={{ maxWidth: '700px' }} fz={{ base: 14, xs: 18 }}>
            As a Loyalty Scheme member, you get exclusive discount codes. These benefits stack with your loyalty credit
            to give you an even better deal! Buy enough with us, you'll move up to the next level of our Loyalty Scheme
            and access each tier’s benefits!
          </Text>
          <Flex gap={20} my={25}>
            <Box component="button" fw={'bold'} fz={{ base: 12, xs: 14, sm: 16 }} className={`${classes.btnPrimary}`}>
              {' '}
              BECOME A MEMBER
            </Box>
            <Box component="button" fw={'bold'} fz={{ base: 12, xs: 14, sm: 16 }} className={`${classes.btnSecondary}`}>
              {' '}
              HOW TO EARN POINTS
            </Box>
          </Flex>
        </Flex>
        <Flex justify={'space-between'} mx={'auto'} align={'center'} w={'80%'} className={classes.cardsWrapper} mt={50}>
          {membershipData.map((item) => {
            return <MembershipTier {...item} />;
          })}
        </Flex>
      </Box>
    </Box>
  );
}
export { MembershipTiers };
