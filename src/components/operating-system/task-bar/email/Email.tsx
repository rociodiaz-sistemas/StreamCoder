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
      <Flex direction="column" gap="5px">
        <Flex
          id="header-email-home"
          direction="row"
          borderBottom="1px solid #ED1E81"
          lineHeight="20px"
          width="100%"
          justifyContent="space-between"
        >
          <Text>Letters</Text>
          <Box width="300px">
            <InputGroup size="lg" paddingBottom="5px">
              <Input
                _focusVisible={{ outline: 'none' }}
                placeholder="search by name"
                width="100%"
                paddingLeft="12px"
                sx={{
                  backgroundColor: 'gray.200',
                  _hover: { backgroundColor: 'gray.200' },
                  _focus: {
                    backgroundColor: 'gray.200',
                    borderColor: 'gray.500',
                    boxShadow: 'none',
                  },
                  'input:focus-visible': {
                    boxShadow: 'none',
                  },
                }}
              />
              <InputRightElement paddingTop="3px" paddingRight={1} width="20px">
                <IconButton aria-label="search-button">
                  <img src={Loupe} style={{ width: '13px', height: '13px' }} />
                </IconButton>
              </InputRightElement>
            </InputGroup>
          </Box>
        </Flex>
        <Flex direction="row" gap="2px">
          <IconButton
            aria-label="expand-unread"
            fontSize="15px"
            icon={<ChevronDownIcon />}
          />
          <Text>Unread</Text>
        </Flex>
        <EmailListItem name="Antonia Vaquita" date="12/12/24" time="12:23 PM" />
        <EmailListItem name="Antonia Vaquita" date="12/12/24" time="12:23 PM" />
        <EmailListItem name="Antonia Vaquita" date="12/12/24" time="12:23 PM" />
        <Flex direction="row" gap="2px">
          <IconButton
            aria-label="expand-unread"
            fontSize="15px"
            icon={<ChevronDownIcon />}
          />
          <Text>Read</Text>
        </Flex>
        <EmailListItem name="Antonia Vaquita" date="12/12/24" time="12:23 PM" />
        <EmailListItem name="Antonia Vaquita" date="12/12/24" time="12:23 PM" />
        <Flex direction="row" gap="2px">
          <IconButton
            aria-label="expand-unread"
            fontSize="15px"
            icon={<ChevronDownIcon />}
          />
          <Text>Favourites</Text>
        </Flex>
        <EmailListItem name="Antonia Vaquita" date="12/12/24" time="12:23 PM" />
      </Flex>
    </Box>
  );
};
