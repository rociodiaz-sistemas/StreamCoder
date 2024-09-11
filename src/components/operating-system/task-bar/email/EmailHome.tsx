import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
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
import Loupe from '../../../../assets/icons/loupe.svg';
import EmailListItem from './EmailListItem';
import { RootState } from '../../../../store';
import { Email } from '../../../../store/types';
import { useDispatch } from 'react-redux';
import { fetchEmailsRequest } from '../../../../store/slices/emailSlice';

const EmailHome: React.FC = () => {
  const dispatch = useDispatch();
  const emails = useSelector((state: RootState) => state.emails.emails);

  useEffect(() => {
    dispatch(fetchEmailsRequest());
  }, [dispatch]);

  // Helper functions to categorize emails
  const getUnreadEmails = (): Email[] =>
    emails.filter((email: Email) => email.status === 'unread');
  const getReadEmails = (): Email[] =>
    emails.filter((email: Email) => email.status === 'read');
  const getFavoriteEmails = (): Email[] =>
    emails.filter((email: Email) => email.is_favorite);

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
        <Text>Letters from viewers 💜</Text>
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
        <Text>Unread ({getUnreadEmails().length})</Text>
      </Flex>

      {/* List of unread emails */}
      {getUnreadEmails().map((email) => (
        <EmailListItem
          key={email.id}
          name={email.sender}
          date={new Date(email.timestamp).toLocaleDateString()}
          time={new Date(email.timestamp).toLocaleTimeString()}
        />
      ))}

      <Flex direction="row" gap="2px">
        <IconButton
          aria-label="expand-read"
          fontSize="15px"
          icon={<ChevronDownIcon />}
        />
        <Text>Read ({getReadEmails().length})</Text>
      </Flex>

      {/* List of read emails */}
      {getReadEmails().map((email) => (
        <EmailListItem
          key={email.id}
          name={email.sender}
          date={new Date(email.timestamp).toLocaleDateString()}
          time={new Date(email.timestamp).toLocaleTimeString()}
        />
      ))}

      <Flex direction="row" gap="2px">
        <IconButton
          aria-label="expand-favourites"
          fontSize="15px"
          icon={<ChevronDownIcon />}
        />
        <Text>Favourites ({getFavoriteEmails().length})</Text>
      </Flex>

      {/* List of favourite emails */}
      {getFavoriteEmails().map((email) => (
        <EmailListItem
          key={email.id}
          name={email.sender}
          date={new Date(email.timestamp).toLocaleDateString()}
          time={new Date(email.timestamp).toLocaleTimeString()}
        />
      ))}
    </Flex>
  );
};

export default EmailHome;
