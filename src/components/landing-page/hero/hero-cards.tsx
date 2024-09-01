'use client';

import { Flex, Text, Image, Box, Container } from '@mantine/core';
import classes from './styles.module.css';
import { homeCard } from '@/data';
import { useMediaQuery } from '@mantine/hooks';
import { IconPlaneArrival, IconTractor, IconCurrencyEuro } from '@tabler/icons-react';
import { Card } from './single-hero-card';

type InfoSectionType = {
  icon: string;
  desc: string;
};

const infoSection: InfoSectionType[] = [
  {
    icon: 'airplane ',
    desc: 'Swift Delivery Available (before 3pm)',
  },
  {
    icon: 'currency  ',
    desc: 'Free UK delivery on orders over £20',
  },
  {
    icon: 'truck  ',
    desc: 'Worldwide Shipping',
  },
];

function getIconComponent(iconName: string, isLargeScreen: boolean) {
  const iconSize = isLargeScreen ? 40 : 30;
  switch (iconName.toLowerCase().trim()) {
    case 'airplane':
      return <IconPlaneArrival size={iconSize} color="white" />;
    case 'currency':
      return <IconCurrencyEuro size={iconSize} color="white" />;
    case 'truck':
      return <IconTractor size={iconSize} color="white" />;
    default:
      return null;
  }
}

function HeroCards() {
  const isLargeScreen = useMediaQuery('(min-width: 74em)');

  return (
    <Box
      style={{
        clipPath: isLargeScreen ? 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)' : 'none',
        backgroundImage: 'url(/grey_arrow.webp)',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
        padding: '80px',
      }}
      mb={20}
    >
      <Container size="xl">
        <Flex direction={isLargeScreen ? 'row' : 'column'} gap="lg" align={'center'}>
          <Flex direction={'column'} gap={5}>
            {infoSection.map((item, index) => (
              <Flex key={index} align="center" gap="md" p={10}>
                <Box bg={'primary.1'} className={classes.iconBox}>
                  {getIconComponent(item.icon, isLargeScreen!)}
                </Box>
                <Text c="white" fw={'bold'} fz={{ base: 14, sm: 16, md: 18, lg: 20 }}>
                  {item.desc}
                </Text>
              </Flex>
            ))}
          </Flex>
          <Flex>
            <Flex direction={isLargeScreen ? 'row' : 'column'} gap="lg" justify="center" align="center" wrap="wrap">
              {homeCard.map((card, index) => (
                <Card key={index} imageUrl={card.imageUrl} name={card.name} isLargeScreen={isLargeScreen} />
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export { HeroCards };
