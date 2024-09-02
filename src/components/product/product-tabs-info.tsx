import { Box, Flex, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconInfoCircleFilled, IconBrandDeliveroo, IconQuestionMark } from '@tabler/icons-react';
import React from 'react';

interface IconProps {
  icon: React.ReactNode;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  const isSmallScreen = useMediaQuery('(max-width: 48em)');
  const iconSize = isSmallScreen ? 16 : 24;

  return (
    <Box
      bg={'primary.1'}
      p={7}
      style={{ borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      {React.cloneElement(icon as React.ReactElement, { size: iconSize })}
    </Box>
  );
};

const content = [
  {
    label: 'Product Details',
    icon: <Icon icon={<IconInfoCircleFilled color="white" />} />,
    content: (
      <Flex gap={5} justify={'space-between'} align={'flex-start'} direction={{ base: 'column', sm: 'row' }}>
        <Box style={{ flex: 1, paddingRight: '20px' }}>
          <Text fz={{ base: 10, xs: 12, sm: 14, md: 14 }}>
            <strong>Slay the Spire</strong> is a cooperative deckbuilding adventure. Craft a unique deck, encounter
            bizarre creatures, discover relics of immense power, and finally become strong enough to Slay the Spire!
          </Text>
          <Text fz={{ base: 10, xs: 12, sm: 14, md: 14 }}>
            Based on the hit video game, the board game takes the key deck building mechanics of the video game and
            applies them to a new multiplayer co-operative format!
          </Text>
        </Box>
        <Box h={{ base: 1, sm: 250 }} w={{ base: '100%', sm: 1 }} bg={'gray.4'} visibleFrom="sm" />
        <Box style={{ flex: 1, paddingLeft: '20px' }}>
          <Text fz={{ base: 10, xs: 12, sm: 14, md: 14 }}>Slay the Spire: The Board Game, includes:</Text>
          <ul>
            <Text fz={{ base: 10, xs: 12, sm: 14, md: 14 }} component="li">
              4 Minis
            </Text>
            <Text fz={{ base: 10, xs: 12, sm: 14, md: 14 }} component="li">
              Over 730 cards
            </Text>
            <Text fz={{ base: 10, xs: 12, sm: 14, md: 14 }} component="li">
              Over 450 Art Sleeves
            </Text>
            <Text fz={{ base: 10, xs: 12, sm: 14, md: 14 }} component="li">
              2 Map Boards
            </Text>
            <Text fz={{ base: 10, xs: 12, sm: 14, md: 14 }} component="li">
              1 Merchant Board
            </Text>
            <Text fz={{ base: 10, xs: 12, sm: 14, md: 14 }} component="li">
              4 Player Boards
            </Text>
            <Text fz={{ base: 10, xs: 12, sm: 14, md: 14 }} component="li">
              1 Die
            </Text>
            <Text fz={{ base: 10, xs: 12, sm: 14, md: 14 }} component="li">
              50 plastic cubes
            </Text>
            <Text fz={{ base: 10, xs: 12, sm: 14, md: 14 }} component="li">
              Over 113 tokens
            </Text>
          </ul>
        </Box>
      </Flex>
    ),
  },
  {
    label: 'Delivery & Returns',
    icon: <Icon icon={<IconBrandDeliveroo color="white" />} />,
    content: (
      <Flex gap={5} justify={'space-between'} align={'flex-start'} direction={{ base: 'column', sm: 'row' }}>
        <Box style={{ flex: 1, paddingRight: '20px' }}>
          <Text fz={{ base: 10, xs: 12, sm: 14, md: 14 }}>Please see the checkout for the delivery options.</Text>
          <Text fz={{ base: 10, xs: 12, sm: 14, md: 14 }}>
            <strong>Select Swift</strong> before 3pm for next day delivery* or <strong>Standard</strong> for our economy
            options.
          </Text>
          <Text fz={{ base: 10, xs: 12, sm: 14, md: 14 }}>
            <em>* UK only, excluding Saturdays, Sundays & Bank Holidays.</em>
          </Text>
          <Text fz={{ base: 10, xs: 12, sm: 14, md: 14 }}>
            We ship locally in the <strong>United Kingdom</strong>, as well as to{' '}
            <strong>Europe, USA, Canada, Australia, New Zealand and most of the world</strong>. If you have any
            questions on whether we ship to your country, please let us know using the contact us form.
          </Text>
          <Text fz={{ base: 10, xs: 12, sm: 14, md: 14 }}>
            <strong>Please note the following shipping restrictions</strong>:
          </Text>
        </Box>
        <Box h={{ base: 1, sm: 250 }} w={{ base: '100%', sm: 1 }} bg={'gray.4'} visibleFrom="sm" />
        <Box style={{ flex: 1, paddingLeft: '20px' }}>
          <Text fz={{ base: 10, xs: 12, sm: 14, md: 14 }}>
            <strong>Games Workshop</strong> products can only be shipped to the following countries:
          </Text>
          <Box>
            <Text fz={{ base: 10, xs: 12, sm: 14, md: 14 }}>
              Austria, Belgium, Bulgaria, Croatia, Cyprus, Czech Republic, Denmark, Hungary, Iceland, Ireland, Italy
              ...and many more.
            </Text>
          </Box>
          <Text fz={{ base: 10, xs: 12, sm: 14, md: 14 }}>
            <strong>Magic: the Gathering</strong> products can only be shipped to the following countries:{' '}
            <em>
              EU/EEA Countries, Switzerland, Turkey, Serbia, Bosnia Herzegovina, Israel, Macedonia, United Arab
              Emirates, Angola, Mozambique, Egypt, Morocco, Tunisia
            </em>
            .
          </Text>
          <Text fz={{ base: 10, xs: 12, sm: 14, md: 14 }}>
            <strong>Spray Paints</strong> can only be shipped to mainland UK due to security measures.
          </Text>
        </Box>
      </Flex>
    ),
  },
  {
    label: 'Why use Chaos Cards?',
    icon: <Icon icon={<IconQuestionMark color="white" />} />,
    content: (
      <Flex direction={'column'} gap={20} justify={{ base: 'flex-start' }} align={{ base: 'flex-start' }} mt={40}>
        <Text fz={{ base: 10, xs: 12, sm: 14, md: 14 }}>Up to 3% Store Credit on purchases for members</Text>
        <Text fz={{ base: 10, xs: 12, sm: 14, md: 14 }}>Free Shipping on UK orders over £20</Text>
        <Text fz={{ base: 10, xs: 12, sm: 14, md: 14 }}>Feefo Platinum trusted member award</Text>
        <Text fz={{ base: 10, xs: 12, sm: 14, md: 14 }}>100% Climate Neutral company</Text>
      </Flex>
    ),
  },
];

export { content };
