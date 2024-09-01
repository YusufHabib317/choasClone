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
        px={70}
        py={50}
        direction={matches ? 'column' : 'row'}
      >
        <Flex direction="column" align="center" justify="center" style={{ flex: '0 0 40%' }}>
          <Image src={leftImage} w={350} />
          <Text my={15} c={'white'} ta={'center'} maw={'70%'} fw={'bold'} className={classes.title}>
            {title}
          </Text>
          <UnstyledButton w={'70%'}>
            <Box fw={'bold'} p={10} className={`${classes.btn} ${classes.btnHover}`}>
              {buttonText}
            </Box>
          </UnstyledButton>
        </Flex>

        <Center style={{ flex: '1 0 60%' }}>
          <Image src={rightImage} w={600} />
        </Center>
      </Flex>
    </Box>
  );
}

export { HeroSlide };
