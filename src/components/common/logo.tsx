import { Image, Center } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

function Logo() {
  const matches = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <>
        <Center>
          <Image src="https://cdn.chaoscards.co.uk/public/images/logo.png" style={{ width: matches ? 150 : 250 }} />
        </Center>
      </>
    </>
  );
}
export { Logo };
