type Currency = {
  name: string;
  symbol: string;
};
const availableCurrencies: Currency[] = [
  { name: 'USD', symbol: '$' },
  { name: 'Euro', symbol: '€' },
  { name: 'Pound Sterling', symbol: '£' },
];

export { availableCurrencies };
export type { Currency };
