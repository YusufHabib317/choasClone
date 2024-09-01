import { Box, Container, Flex, Menu, Rating } from '@mantine/core';
import { IconPhone, IconHome, IconChevronDown } from '@tabler/icons-react';
import classes from './styles.module.css';
import { useState } from 'react';
import { availableCurrencies } from '@/data';
import type { Currency } from '@/data';

const workHours = [
  { day: 'Mon', time: '9:00am - 5:00pm' },
  { day: 'Tue', time: '9:00am - 5:00pm' },
  { day: 'Wed', time: '9:00am - 5:00pm' },
  { day: 'Thu', time: '9:00am - 5:00pm' },
  { day: 'Fri', time: '9:00am - 5:00pm' },
];

function InfoBar() {
  const [selectedCurrency, setSelectedCurrency] = useState(availableCurrencies[0]);
  const handleCurrencyChange = (currency: Currency) => {
    setSelectedCurrency(currency);
  };
  return (
    <Box bg={'black'} c="white" fz={{ xs: 12, sm: 12 }} visibleFrom="sm">
      <Container>
        <Flex justify={'space-between'} align={'center'} p={2}>
          <Flex align={'center'} gap={2}>
            <IconPhone size={20} /> 013002202020
          </Flex>

          <Menu trigger="hover" classNames={{ dropdown: classes.menuDropdown, item: classes.item }}>
            <Menu.Target>
              <Flex align={'center'} gap={2} style={{ cursor: 'pointer' }}>
                <IconHome size={20} /> Customer Service
                <IconChevronDown color="white" size={20} style={{ paddingTop: 5 }} />
              </Flex>
            </Menu.Target>
            <Menu.Dropdown>
              {workHours.map((item) => {
                return (
                  <Menu.Item key={item.day}>
                    <Flex justify={'space-between'} gap={10}>
                      <Box fw={'bold'}>{item.day}</Box>
                      <Box>{item.time}</Box>
                    </Flex>
                  </Menu.Item>
                );
              })}
            </Menu.Dropdown>
          </Menu>

          <Flex align={'center'} gap={2}>
            Feefo
            <Rating readOnly value={5} size={15} />
            reviews
          </Flex>
          <Menu trigger="hover" classNames={{ dropdown: classes.menuDropdown, item: classes.item }}>
            <Menu.Target>
              <Flex align={'center'} gap={2} style={{ cursor: 'pointer' }}>
                {selectedCurrency.name} {selectedCurrency.symbol}
                <IconChevronDown color="white" size={20} style={{ paddingTop: 5 }} />
              </Flex>
            </Menu.Target>
            <Menu.Dropdown>
              {availableCurrencies.map((item) => {
                return (
                  <Menu.Item key={item.symbol} onClick={() => handleCurrencyChange(item)}>
                    <Flex gap={5} align={'center'}>
                      <Box>{item.symbol}</Box>
                      <Box fw={'bold'}>{item.name}</Box>
                    </Flex>
                  </Menu.Item>
                );
              })}
            </Menu.Dropdown>
          </Menu>
        </Flex>
      </Container>
    </Box>
  );
}
export { InfoBar };
