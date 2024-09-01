import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core';
import '@mantine/carousel/styles.css';

export const metadata = {
  title: 'Choas Clone | ',
  description: '',
};

const theme = createTheme({
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
  colors: {
    primary: [
      '#e7862a',
      '#d07926',
      '#b96b22',
      '#a25e1d',
      '#8b5019',
      '#744315',
      '#5c3611',
      '#45280d',
      '#2e1b08',
      '#170d04',
    ],
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="chaoscards clone" />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
