'use client';

import { Image, Center } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useRouter } from 'next/navigation';

function Logo() {
  const matches = useMediaQuery('(max-width: 768px)');
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <>
      <Center onClick={handleClick} style={{ cursor: 'pointer' }}>
        <Image src="/logo/logo.png" style={{ width: matches ? 150 : 250 }} />
      </Center>
    </>
  );
}

export { Logo };
