interface HeroSlideTypes {
  imageBackground: string;
  leftImage: string;
  rightImage: string;
  title: string;
  buttonText: string;
}

const heroSlide: HeroSlideTypes[] = [
  {
    imageBackground: '/slides/slide1/bg.webp',
    leftImage: '/slides/slide1/left.png',
    rightImage: '/slides/slide1/right.webp',
    title: 'Celebrate victory over Ursula in the latest Disney Lorcana release!',
    buttonText: 'A new mystery begins!',
  },
  {
    imageBackground: '/slides/slide2/bg.webp',
    leftImage: '/slides/slide2/left.webp',
    rightImage: '/slides/slide2/right.webp',
    title: 'An Adventure to Awaken the Power Within!',
    buttonText: 'New Stellar Tera Pokémon ex await!',
  },
  {
    imageBackground: '/slides/slide3/bg.webp',
    leftImage: '/slides/slide3/left.png',
    rightImage: 'slides/slide3/right.png',
    title: 'An Adventure to Awaken the Power Within!',
    buttonText: 'Dare to enter Duskmourn!',
  },
];

export { heroSlide };
export type { HeroSlideTypes };
