import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';
import EmailActionButtons from './EmailActionButtons';
import {
  deleteEmail,
  toggleEmailFavorite,
} from '../../../../store/slices/emailSlice';
import { useDispatch } from 'react-redux';
import { Email } from '../../../../store/types';

interface EmailListItemProps {
  email: Email;
}

const EmailListItem: React.FC<EmailListItemProps> = ({ email }) => {
  const dispatch = useDispatch();

  const handleFavoriteToggle = () => {
    dispatch(toggleEmailFavorite(email.id));
  };

  const handleDeleteEmail = () => {
    dispatch(deleteEmail(email.id));
  };

  return (
    <Box
      bgColor="white"
      height="25px"
      width="100%"
      borderRadius="8px"
      padding={2}
      _hover={{ bgColor: 'gray.100', cursor: 'pointer' }}
    >
      <Flex
        direction="row"
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text flexBasis="50%">{email.sender}</Text>
        <Text flexBasis="30%">
          {' '}
          {new Date(email.timestamp).toLocaleDateString()}
        </Text>
        <Text flexBasis="30%">
          {new Date(email.timestamp).toLocaleTimeString()}
        </Text>
        <EmailActionButtons
          isFavorite={email.is_favorite}
          onFavoriteToggle={handleFavoriteToggle}
          onDelete={handleDeleteEmail}
        />
      </Flex>
    </Box>
  );
};

export default EmailListItem;
