'use client';

import dynamic from 'next/dynamic';
import { heroSlide } from '@/data';
import { HeroSlide } from './hero-slide';
import classes from './styles.module.css';
import { Carousel as MantineCarousel } from '@mantine/carousel';
import { Box } from '@mantine/core';
const Carousel = dynamic(() => import('@mantine/carousel').then((mod) => mod.Carousel), { ssr: false });

function Hero() {
  return (
    <Box mt={150}>
      <Carousel slideSize="100%" withIndicators height={'auto'} loop classNames={classes}>
        {heroSlide.map((slide, index) => (
          <MantineCarousel.Slide key={index}>
            <HeroSlide
              imageBackground={slide.imageBackground}
              leftImage={slide.leftImage}
              rightImage={slide.rightImage}
              title={slide.title}
              buttonText={slide.buttonText}
            />
          </MantineCarousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
}
export { Hero };
