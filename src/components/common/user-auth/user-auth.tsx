import { Avatar, Box, Flex } from '@mantine/core';
import classes from './style.module.css';

function UserAuth() {
  return (
    <Flex gap={5} align={'center'} c={'white'}>
      <Box>
        <Avatar radius="xl" />
      </Box>
      <Box>
        <Box fw={'bold'} className={classes.auth}>
          Register
        </Box>
        <Box component="span" fz={12}>
          or
        </Box>{' '}
        <Box component="span" fw={'bold'} className={classes.auth}>
          Login
        </Box>
      </Box>
    </Flex>
  );
}
export { UserAuth };
