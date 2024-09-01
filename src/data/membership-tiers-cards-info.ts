type MembershipType = {
  level: string;
  points: string;
  cashback: string;
  image: string;
  imageOnHover?: string;
};

const membershipData: MembershipType[] = [
  {
    level: 'Bronze',
    points: '5,000',
    cashback: '1% Monthly cashback',
    image: '/member-ship/bronze.png',
  },
  {
    level: 'Silver',
    points: '50,000',
    cashback: '2% Monthly cashback',
    image: '/member-ship/silver.png',
  },
  {
    level: 'Gold',
    points: '100,000',
    cashback: '3% Monthly cashback',
    image: '/member-ship/gold.png',
    imageOnHover: '/member-ship/pikachu.png',
  },
];

export { membershipData };
export type { MembershipType };
