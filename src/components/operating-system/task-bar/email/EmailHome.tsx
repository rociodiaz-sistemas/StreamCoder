import React, { useEffect, useState } from 'react';
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
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import Loupe from '../../../../assets/icons/loupe.svg';
import EmailListItem from './EmailListItem';
import { RootState } from '../../../../store';
import { Email } from '../../../../store/types';
import { useDispatch } from 'react-redux';
import { fetchEmailsRequest } from '../../../../store/slices/emailSlice';

const EmailHome: React.FC = () => {
  const dispatch = useDispatch();
  const emails = useSelector((state: RootState) => state.emails.emails);

  // State to manage expansion of each section
  const [isUnreadExpanded, setUnreadExpanded] = useState(false);
  const [isReadExpanded, setReadExpanded] = useState(false);
  const [isFavoriteExpanded, setFavoriteExpanded] = useState(false);

  // Toggle functions
  const toggleUnread = () => setUnreadExpanded(!isUnreadExpanded);
  const toggleRead = () => setReadExpanded(!isReadExpanded);
  const toggleFavorite = () => setFavoriteExpanded(!isFavoriteExpanded);

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
      {/* Header Section */}
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

      {/* Unread Emails Section */}
      <Flex direction="row" gap="2px" alignItems="center">
        <IconButton
          aria-label="expand-unread"
          fontSize="15px"
          icon={isUnreadExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
          onClick={toggleUnread}
        />
        <Text>Unread ({getUnreadEmails().length})</Text>
      </Flex>

      {/* Conditionally Render Unread Emails */}
      {isUnreadExpanded && (
        <Flex maxHeight="300px" overflowY="auto" direction="column" gap="5px">
          {getUnreadEmails().map((email) => (
            <EmailListItem key={email.id} email={email} />
          ))}
        </Flex>
      )}

      {/* Read Emails Section */}
      <Flex direction="row" gap="2px" alignItems="center">
        <IconButton
          aria-label="expand-read"
          fontSize="15px"
          icon={isReadExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
          onClick={toggleRead}
        />
        <Text>Read ({getReadEmails().length})</Text>
      </Flex>

      {/* Conditionally Render Read Emails */}
      {isReadExpanded && (
        <Flex maxHeight="300px" overflowY="auto" direction="column" gap="5px">
          {getReadEmails().map((email) => (
            <EmailListItem key={email.id} email={email} />
          ))}
        </Flex>
      )}

      {/* Favorite Emails Section */}
      <Flex direction="row" gap="2px" alignItems="center">
        <IconButton
          aria-label="expand-favorite"
          fontSize="15px"
          icon={isFavoriteExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
          onClick={toggleFavorite}
        />
        <Text>Favorites ({getFavoriteEmails().length})</Text>
      </Flex>

      {/* Conditionally Render Favorite Emails */}
      {isFavoriteExpanded && (
        <Flex maxHeight="300px" overflowY="auto" direction="column" gap="5px">
          {getFavoriteEmails().map((email) => (
            <EmailListItem key={email.id} email={email} />
          ))}
        </Flex>
      )}
    </Flex>
  );
};

export default EmailHome;
