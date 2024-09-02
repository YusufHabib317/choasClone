import { Anchor, Box, Flex, Text } from '@mantine/core';
import { IconTrophy } from '@tabler/icons-react';

interface IconProps {
  icon: React.ReactNode;
}
const Icon: React.FC<IconProps> = ({ icon }) => {
  return (
    <Box
      bg={'gray.2'}
      p={7}
      style={{ borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      {icon}
    </Box>
  );
};

function TrophyInfo() {
  return (
    <Flex align="center" gap={5}>
      <Icon icon={<IconTrophy color="black" size={20} />} />

      <Text fz={{ base: 12, xs: 15, sm: 18, lg: 16 }}>
        Purchase could earn you{' '}
        <Box component="span" c={'green.8'} fw={'bold'}>
          8995
        </Box>{' '}
        loyalty points. <Anchor c={'primary.1'}>Sign in</Anchor> or <Anchor c={'primary.1'}>Create an Account </Anchor>
        to earn points towards exclusive benefits!
      </Text>
    </Flex>
  );
}
export { TrophyInfo };
