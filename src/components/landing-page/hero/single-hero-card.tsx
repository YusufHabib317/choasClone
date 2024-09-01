'use client';

import React, { useState } from 'react';
import { Flex, Text, Image, Box } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import classes from './styles.module.css';

interface CardProps {
  imageUrl: string;
  name: string;
  isLargeScreen: boolean | undefined;
}
function Card({ imageUrl, name, isLargeScreen }: CardProps) {
  const [tiltStyle, setTiltStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = (y - centerY) / 10;
    const tiltY = (centerX - x) / 10;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: 'all 0.1s ease',
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'all 0.5s ease',
    });
  };

  return (
    <Flex
      className={classes.cardWrapper}
      justify={'space-between'}
      align={'center'}
      direction={'column'}
      h={'270px'}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        width: isLargeScreen ? '23%' : '100%',
        border: '8px solid var(--mantine-color-primary-1)',
        overflow: 'hidden',
        borderRadius: '8px',
        ...tiltStyle,
      }}
    >
      <Image src={imageUrl} alt={name} h={'280px'} style={{ width: '100%' }} />
      <Flex p={8} c={'white'} gap={5} align={'center'}>
        <Text fz={{ base: 10, sm: 14, md: 16 }} fw="bold">
          {name}
        </Text>
        <IconArrowRight stroke={2} style={{ color: 'var(--mantine-color-primary-1)' }} />
      </Flex>
    </Flex>
  );
}

export { Card };
