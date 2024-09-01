interface HeroSlideTypes {
  imageBackground: string;
  leftImage: string;
  rightImage: string;
  title: string;
  buttonText: string;
}

const heroSlide: HeroSlideTypes[] = [
  {
    imageBackground: 'https://cdn.chaoscards.co.uk/uploads/home_header/3_184_h.jpg?v=1724408342',
    leftImage: 'https://cdn.chaoscards.co.uk/uploads/home_header/9_180_s.png?v=1724408342',
    rightImage: 'https://cdn.chaoscards.co.uk/uploads/home_header/8_180_s.png?v=1724408342',
    title: 'Celebrate victory over Ursula in the latest Disney Lorcana release!',
    buttonText: 'A new mystery begins!',
  },
  {
    imageBackground: 'https://cdn.chaoscards.co.uk/uploads/home_header/3_180_s.jpg?v=1724408342',
    leftImage: 'https://cdn.chaoscards.co.uk/uploads/home_header/9_184_s.png?v=1724408342',
    rightImage: 'https://cdn.chaoscards.co.uk/uploads/home_header/8_184_s.png?v=1724408342',
    title: 'An Adventure to Awaken the Power Within!',
    buttonText: 'New Stellar Tera Pokémon ex await!',
  },
  {
    imageBackground: 'https://cdn.chaoscards.co.uk/uploads/home_header/3_183_h.jpg?v=1724408342',
    leftImage: 'https://cdn.chaoscards.co.uk/uploads/home_header/9_183_s.png?v=1724408342',
    rightImage: 'https://cdn.chaoscards.co.uk/uploads/home_header/8_183_s.png?v=1724408342',
    title: 'An Adventure to Awaken the Power Within!',
    buttonText: 'Dare to enter Duskmourn!',
  },
];

export { heroSlide };
export type { HeroSlideTypes };
