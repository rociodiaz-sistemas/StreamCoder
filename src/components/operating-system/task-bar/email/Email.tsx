import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import RecycleBinIcon from '../../../../assets/icons/recycle-bin.svg';
import RecycleBinHoveredIcon from '../../../../assets/icons/recycle-bin-filled.svg';
import StarIcon from '../../../../assets/icons/favourite-star.svg';
import StarIconFilled from '../../../../assets/icons/favourite-star-filled.svg';
import Loupe from '../../../../assets/icons/loupe.svg';
import { ChevronDownIcon } from '@chakra-ui/icons';
import EmailListItem from './EmailListItem';
import EmailHome from './EmailHome';

export interface EmailProps {
  email?: string;
}

export const Email: React.FC<EmailProps> = ({ email }) => {
  const [deleteIconHovered, setDeleteIconHovered] = useState(false);
  const [starIconHovered, setStarIconHovered] = useState(false);

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
