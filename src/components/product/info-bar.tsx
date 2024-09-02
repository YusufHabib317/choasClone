'use client';

import { IconCreditCard, IconTruck, IconUserScreen } from '@tabler/icons-react';
import { Box, Container, Flex, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useState, useEffect } from 'react';
import classes from './styles.module.css';
import clsx from 'clsx';
import React from 'react';

interface InfoItemProps {
  icon: React.ReactElement;
  text: string;
  className?: string;
  iconSize?: number;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, text, className, iconSize }) => {
  const IconWithSize = React.cloneElement(icon, { size: iconSize });

  return (
    <Flex justify={'center'} align={'center'} gap={5} className={clsx(classes.staticClass, className)}>
      {IconWithSize}
      <Text fz={{ base: 12, xs: 14 }}>{text}</Text>
    </Flex>
  );
};

const InfoBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState(classes.fadeEnter);
  const isMedScreen = useMediaQuery('(max-width: 70em)');
  const iconSize = isMedScreen ? 22 : 26;

  const infoItems = [
    { icon: <IconCreditCard />, text: 'Up to 3% Store Credit on purchases' },
    { icon: <IconTruck />, text: 'Free Economy Shipping on UK orders over £20' },
    { icon: <IconUserScreen />, text: '5 Star Customer Service on Feefo' },
  ];

  useEffect(() => {
    if (isMedScreen) {
      const interval = setInterval(() => {
        setFadeClass(classes.fadeExit);

        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % infoItems.length);
          setFadeClass(classes.fadeEnter);
        }, 500);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isMedScreen, infoItems.length]);

  return (
    <Box className={classes.infoParent} bg={'black'} c={'white'} py={10}>
      <Container size={'xl'}>
        <Flex justify={isMedScreen ? 'center' : 'space-between'} align={'center'} px={isMedScreen ? 15 : 150}>
          {isMedScreen ? (
            <InfoItem
              icon={infoItems[currentIndex].icon}
              text={infoItems[currentIndex].text}
              className={fadeClass}
              iconSize={iconSize}
            />
          ) : (
            infoItems.map((item, index) => (
              <InfoItem key={index} icon={item.icon} text={item.text} iconSize={iconSize} />
            ))
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export { InfoBar };
