import { heroSlide } from '@/data';
import { Carousel } from '@mantine/carousel';
import { HeroSlide } from './hero-slide';
import { Box } from '@mantine/core';
import classes from './styles.module.css';

function Hero() {
  return (
    <Carousel slideSize="100%" withIndicators height={'auto'} loop classNames={classes}>
      {heroSlide.map((slide, index) => (
        <Carousel.Slide key={index}>
          <HeroSlide
            imageBackground={slide.imageBackground}
            leftImage={slide.leftImage}
            rightImage={slide.rightImage}
            title={slide.title}
            buttonText={slide.buttonText}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
export { Hero };
