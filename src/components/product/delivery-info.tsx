import { Anchor, Badge, Box, Flex, Text } from '@mantine/core';
import { IconTruck, IconPlane, IconPackage } from '@tabler/icons-react';

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

function DeliveryInfo() {
  return (
    <Flex direction={'column'} gap={10} maw={'80%'} mb={40}>
      <Flex align="center" gap={5}>
        <Icon icon={<IconTruck color="black" size={20} />} />
        <Text fz={{ base: 12, xs: 15, sm: 18, lg: 16 }}>International standard delivery from $21.98</Text>
      </Flex>

      <Flex align="center" gap={5}>
        <Icon icon={<IconPlane color="black" size={20} />} />

        <Text fz={{ base: 12, xs: 15, sm: 18, lg: 16 }}>
          Choose International
          <Badge h={25} bg={'gray.2'} mx={5} fz={14} fw={'bold'}>
            <Box c="primary.1">SWIFT</Box>
          </Badge>
          delivery from $72.01. Get it without extra custom charges, <Anchor c={'primary.1'}>more info</Anchor>
        </Text>
      </Flex>

      <Flex align="center" gap={5}>
        <Icon icon={<IconPackage color="black" size={20} />} />
        <Text fz={{ base: 12, xs: 15, sm: 18, lg: 16 }}>In stock</Text>
      </Flex>
    </Flex>
  );
}
export { DeliveryInfo };
