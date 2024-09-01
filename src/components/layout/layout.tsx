'use client';

import { AppShell, Container } from '@mantine/core';
import { Header, InfoBar } from './header';
import { Hero, HeroCards, MembershipTiers } from '@/components';

function Layout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <AppShell header={{ height: 100 }}>
      <AppShell.Header style={{ padding: 0 }}>
        <InfoBar />
        <Header />
      </AppShell.Header>

      <AppShell.Main mih="100vh">
        <Hero />
        <HeroCards />
        <Container size="xl">{children}</Container>
        <MembershipTiers />
      </AppShell.Main>
    </AppShell>
  );
}

export { Layout };
