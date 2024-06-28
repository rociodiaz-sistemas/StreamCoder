import React from 'react';
import { Box } from '@chakra-ui/react';
import DollarBill from './Dollar';

export interface MoneyRainProps {
  numberOfBills?: number;
}

const MoneyRain: React.FC<MoneyRainProps> = ({ numberOfBills = 20 }) => {
  return (
    <Box
      pos="absolute"
      overflow="hidden"
      w="100%"
      h="100%"
    >
      {Array.from({ length: numberOfBills }).map((_, index) => (
        <DollarBill key={index} />
      ))}
    </Box>
  );
};

export default MoneyRain;

