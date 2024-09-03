import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import EmailHome from './EmailHome';

export interface EmailProps {
  email?: string;
}

export const Email: React.FC<EmailProps> = ({ email }) => {
  return (
    <Box
      id="email"
      bgColor="#F0DFEF"
      height="fit-content"
      width="500px"
      borderColor="#3D3D44"
      border="1px solid"
      borderRadius="10px"
      pt={5}
      pl={3}
      pr={3}
      pb={5}
      fontSize={12}
      position="relative"
    >
      <EmailHome />
    </Box>
  );
};
