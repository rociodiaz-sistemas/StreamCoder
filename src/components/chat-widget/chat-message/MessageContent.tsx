import { MessageModel } from '../../../utils/models';
import { Box, Flex } from '@chakra-ui/react';
import Username from './usernames/UserName';
import './styles.css';

export const MessageContent = ({ message }: { message: MessageModel }) => {
  const Badges = message.author.badges.map((badge, i) => (
    <img
      key={badge.name + i}
      src={`${badge.imageUrl}`}
      alt={`${badge.name} ${badge.version} badge`}
      style={{ width: '1em', marginInlineStart: '5px' }}
    />
  ));

  return (
    <>
      <Flex align="center" direction="row">
        <Username
          displayName={message.author.displayName}
          color={message.author.color}
          type={message.type}
        />
        {Badges}
      </Flex>
      <Flex
        wrap="wrap"
        style={{
          overflow: 'hidden',
          wordWrap: 'break-word',
          whiteSpace: 'normal',
        }}
      >
        <Box
          className="content-wrapper"
          dangerouslySetInnerHTML={{ __html: message.content }}
        />
      </Flex>
    </>
  );
};
