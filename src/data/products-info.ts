import { Accordion, Box, Center, Flex, Tabs, Text } from '@mantine/core';

type ProductType = {
  id: number;
  productName: string;
  price: string;
  originalPrice: string;
  discount: string;
  savings: string;
  availability: string;
  moreInfo: string;
  image: string;
  rating?: string;
  reviews?: number;
};
const productsInfo: ProductType[] = [
  {
    id: 1,
    productName: 'Pokemon Trick or Trade BOOster Bundle 2024',
    price: '£14.25',
    originalPrice: 'RRP £15.99',
    discount: '11%',
    savings: '£1.74',
    availability: 'In Stock',
    moreInfo: 'Released 13/09/2024',
    image: '/products/1.png',
  },
  {
    id: 2,
    productName: 'Digimon Card Game - Digimon Liberator Booster Pack EX07 (12 Cards)',
    price: '£3.50',
    originalPrice: 'RRP £4.49',
    discount: '22%',
    savings: '£0.99',
    availability: 'Pre-order',
    moreInfo: 'Released 13/09/2024',
    image: '/products/2.png',
  },
  {
    id: 3,
    productName: 'Pokemon Paradox Destinies Tin - Gouging Fire EX',
    price: '£16.95',
    originalPrice: 'RRP £21.99',
    discount: '23%',
    savings: '£5.04',
    availability: 'Pre-order',
    moreInfo: 'Released 13/09/2024',
    image: '/products/3.png',
  },
  {
    id: 4,
    productName: 'Pokemon Booster Pack (10 Cards) - Sun and Moon Crimson Invasion',
    price: '£4.95',
    originalPrice: 'RRP £7.95',
    discount: '38%',
    savings: '£3.00',
    rating: '4.5',
    reviews: 17,
    availability: 'In Stock',
    moreInfo: 'Only 1 left',
    image: '/products/4.webp',
  },
  {
    id: 5,
    productName: 'Pokemon Scarlet & Violet Twilight Masquerade: Booster Pack (10 Cards)',
    price: '£3.45',
    originalPrice: 'RRP £4.29',
    discount: '20%',
    savings: '£0.84',
    rating: '4.0',
    reviews: 2,
    availability: 'In Stock',
    moreInfo: 'Only 1 left',
    image: '/products/1.png',
  },
  {
    id: 6,
    productName: 'Fenrir Games Standard Size (3" by 4") Toploaders (25 count) - Grey Border',
    price: '£2.98',
    originalPrice: 'RRP £4.50',
    discount: '34%',
    savings: '£1.52',
    availability: 'In Stock',
    moreInfo: 'Only 1 left',
    image: '/products/2.png',
  },
];

export { productsInfo };
export type { ProductType };
