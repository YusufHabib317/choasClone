import { Burger, Container, Drawer, Flex, ScrollArea, Box, Avatar } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { IconBasket } from '@tabler/icons-react';
import { CartInfo, Logo, SearchBar, UserAuth } from '@/components';

function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const matches = useMediaQuery('(min-width: 64em)');
  const upToSmallScreen = useMediaQuery('(max-width: 48em)');

  return (
    <Box>
      <Container
        size={1400}
        py={15}
        style={{
          backgroundColor: '#253140',
          borderBottom: '5px solid var(--mantine-color-primary-1)',
        }}
      >
        <header>
          {matches && renderLargeScreenLayout()}
          {!matches && !upToSmallScreen && renderMediumScreenLayout(drawerOpened, toggleDrawer)}
          {!matches && upToSmallScreen && renderSmallScreenLayout(drawerOpened, toggleDrawer)}
        </header>

        <DrawerComponent drawerOpened={drawerOpened} closeDrawer={closeDrawer} />
      </Container>
    </Box>
  );
}

function renderLargeScreenLayout() {
  return (
    <Flex justify="space-between" align="center" px={15} h={70}>
      <Logo />
      <Box w={'50%'}>
        <SearchBar />
      </Box>
      <UserAuth />
      <CartInfo />
    </Flex>
  );
}

function renderMediumScreenLayout(drawerOpened: boolean, toggleDrawer: () => void) {
  return (
    <Flex justify="space-between" align="center" px={15} h={80}>
      <Logo />
      <Box w={'50%'}>
        <SearchBar />
      </Box>
      <Box>
        <IconBasket color="white" stroke={3} style={{ marginTop: 5 }} />
      </Box>
      <Avatar bg="primary.1" color="cyan" radius="xl">
        <Burger opened={drawerOpened} onClick={toggleDrawer} color="white" />
      </Avatar>
    </Flex>
  );
}

function renderSmallScreenLayout(drawerOpened: boolean, toggleDrawer: () => void) {
  return (
    <Flex direction="column" justify="space-between" align="center" gap={15}>
      <Flex justify="space-between" w="100%" align="center">
        <Logo />
        <Flex gap={10} align="center">
          <Box>
            <IconBasket color="white" stroke={3} style={{ marginTop: 5 }} />
          </Box>
          <Avatar bg="primary.1" color="cyan" radius="xl">
            <Burger opened={drawerOpened} onClick={toggleDrawer} color="white" />
          </Avatar>
        </Flex>
      </Flex>
      <Box w="100%">
        <SearchBar />
      </Box>
    </Flex>
  );
}

function DrawerComponent({ drawerOpened, closeDrawer }: { drawerOpened: boolean; closeDrawer: () => void }) {
  return (
    <Drawer opened={drawerOpened} onClose={closeDrawer} padding="md" hiddenFrom="md" zIndex={1000}>
      <ScrollArea h="70vh">{/* Content goes here */}</ScrollArea>
    </Drawer>
  );
}

export { Header };
