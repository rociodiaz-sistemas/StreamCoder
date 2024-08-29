//create component with this code
import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export const AppList = () => (
  <Box flex="1" p={4}>
    {/* Content for the second half */}
    <Flex direction="column" gap="15px">
      <Text>App List</Text>
      <Text>vaquigotchi.exe</Text>
      <Text>ban-hammer.exe</Text>
      <Text>e-mail.exe</Text>
    </Flex>
  </Box>
);
export default AppList;
