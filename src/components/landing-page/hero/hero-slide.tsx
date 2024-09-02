import { Box, Image, Flex, UnstyledButton, Center, Text } from '@mantine/core';
import { HeroSlideTypes } from '@/data';
import { useMediaQuery } from '@mantine/hooks';
import classes from './styles.module.css';

function HeroSlide({ imageBackground, leftImage, rightImage, title, buttonText }: HeroSlideTypes) {
  const matches = useMediaQuery('(max-width: 64em)');

  return (
    <Box className={classes.slideParent}>
      <Image src={imageBackground} className={classes.imageBack} />

      <Flex
        justify={matches ? 'center' : 'space-between'}
        align={'center'}
        px={{ base: 0, xs: 70 }}
        py={50}
        direction={matches ? 'column' : 'row'}
      >
        <Flex direction="column" align="center" justify="center" style={{ flex: '0 0 40%' }}>
          <Image src={leftImage} w={{ base: 200, xs: 240, sm: 350 }} />
          <Text my={15} c={'white'} ta={'center'} maw={'70%'} fw={'bold'} className={classes.title}>
            {title}
          </Text>
          <UnstyledButton w={{ base: '90%', sm: '80%' }}>
            <Box
              fw={'bold'}
              my={10}
              p={5}
              fz={{ base: 12, xs: 12, sm: 16 }}
              className={`${classes.btn} ${classes.btnHover}`}
              w={{ base: '60%', xs: '50%', md: '70%', lg: '60%' }}
              mx={'auto'}
            >
              {buttonText}
            </Box>
          </UnstyledButton>
        </Flex>

        <Center style={{ flex: '1 0 60%' }}>
          <Image src={rightImage} w={{ base: 250, xs: 400, sm: 600 }} />
        </Center>
      </Flex>
    </Box>
  );
}

export { HeroSlide };
