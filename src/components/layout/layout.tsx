'use client';

import { AppShell as AppShellMantine, Container } from '@mantine/core';
import dynamic from 'next/dynamic';

const AppShell = dynamic(() => import('@mantine/core').then((mod) => mod.AppShell), { ssr: false });
const Header = dynamic(() => import('./header').then((mod) => mod.Header), { ssr: false });
const InfoBar = dynamic(() => import('./header').then((mod) => mod.InfoBar), { ssr: false });

function Layout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <AppShell header={{ height: 100 }}>
      <AppShellMantine.Header style={{ padding: 0 }}>
        <InfoBar />
        <Header />
      </AppShellMantine.Header>

      <AppShellMantine.Main bg={'#F7F7F7'} style={{ padding: 0 }}>
        <Container size="xl">{children}</Container>
      </AppShellMantine.Main>
    </AppShell>
  );
}

export { Layout };
