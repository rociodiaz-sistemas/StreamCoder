import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Loupe from '../../../../assets/icons/loupe.svg'; // Import the EmailListItem component
import EmailListItem from './EmailListItem';

export const EmailHome: React.FC = () => {
  return (
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

      {/* List of unread emails */}
      <EmailListItem name="Antonia Vaquita" date="12/12/24" time="12:23 PM" />
      <EmailListItem name="Antonia Vaquita" date="12/12/24" time="12:23 PM" />
      <EmailListItem name="Antonia Vaquita" date="12/12/24" time="12:23 PM" />

      <Flex direction="row" gap="2px">
        <IconButton
          aria-label="expand-read"
          fontSize="15px"
          icon={<ChevronDownIcon />}
        />
        <Text>Read</Text>
      </Flex>

      {/* List of read emails */}
      <EmailListItem name="Antonia Vaquita" date="12/12/24" time="12:23 PM" />
      <EmailListItem name="Antonia Vaquita" date="12/12/24" time="12:23 PM" />

      <Flex direction="row" gap="2px">
        <IconButton
          aria-label="expand-favourites"
          fontSize="15px"
          icon={<ChevronDownIcon />}
        />
        <Text>Favourites</Text>
      </Flex>

      {/* List of favourite emails */}
      <EmailListItem name="Antonia Vaquita" date="12/12/24" time="12:23 PM" />
    </Flex>
  );
};
export default EmailHome;
