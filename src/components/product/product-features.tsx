'use client';

import { Accordion, Box, Center, Container, Flex } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './styles.module.css';
import { useState } from 'react';
import { content } from './product-tabs-info';
import { IconPlus } from '@tabler/icons-react';

function ProductFeatures() {
  const isMedScreen = useMediaQuery('(max-width: 74em)');
  const [activeTab, setActiveTab] = useState(content[0].label);

  if (isMedScreen) {
    return (
      <Box my={50} p={{ base: 10, sm: 50 }} bg={'black'} c={'white'}>
        <Accordion
          defaultValue={content[0].label}
          chevron={<IconPlus stroke={3} />}
          styles={{
            control: {
              backgroundColor: '#000',
              color: '#fff',
            },
          }}
        >
          {content.map((item) => (
            <Accordion.Item key={item.label} value={item.label}>
              <Accordion.Control icon={item.icon} fw={'bold'} fz={{ base: 12, xs: 14, sm: 16 }}>
                {item.label}
              </Accordion.Control>
              <Accordion.Panel>{item.content}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Box>
    );
  }

  return (
    <Box py={50} bg={'#F7F7F7'}>
      <Container size={'xl'}>
        <Flex justify={'space-between'}>
          {content.map((item) => (
            <Center
              key={item.label}
              style={{ width: '30%' }}
              className={`${classes.tab} ${activeTab === item.label && classes.tabsButtonActive}`}
              onClick={() => setActiveTab(item.label)}
            >
              {item.label}
            </Center>
          ))}
        </Flex>
        <Box c={'white'} bg={'black'} p={40} mih={350}>
          {content.map((item) => activeTab === item.label && <Box key={item.label}>{item.content}</Box>)}
        </Box>
      </Container>
    </Box>
  );
}
export { ProductFeatures };
