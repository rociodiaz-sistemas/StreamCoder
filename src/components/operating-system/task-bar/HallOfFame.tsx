//create component with this code
import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

export const HallOfFame = () => (
  <Box flex="1" p={4}>
    {/* Content for the second half */}
    <Flex direction="column" gap="15px">
      Hall of Fame
      <Flex direction="row" width="100%" gap="20px" height="100px">
        <Box width="100%" bgColor="white">
          Last Sub
        </Box>
        <Box width="100%" bgColor="pink">
          Last Bits
        </Box>
      </Flex>
      <Flex direction="row" width="100%" gap="20px" height="100px">
        <Box width="100%" bgColor="white">
          Last Sub
        </Box>
        <Box width="100%" bgColor="pink">
          Last Bits
        </Box>
      </Flex>
    </Flex>
  </Box>
);
export default HallOfFame;
