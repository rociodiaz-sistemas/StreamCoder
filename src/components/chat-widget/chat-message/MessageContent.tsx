import { MessageModel } from '../../../utils/models';
import { Box, Flex } from '@chakra-ui/react';
import Username from './usernames/UserName';
import './styles.css';

export const MessageContent = ({ message }: { message: MessageModel }) => {
  const areThereBits = message.type === 'bits' && message.bits !== 0;

  const Badges = message.author.badges.map((badge, i) => (
    <img
      key={badge.name + i}
      src={`${badge.imageUrl}`}
      alt={`${badge.name} ${badge.version} badge`}
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
      </Flex>
      {areThereBits &&
        <>
          <Box>{message.bits}</Box>
        </>
      }
      <Flex
        wrap="wrap"
        style={{
          overflow: 'hidden',
          wordWrap: 'break-word',
          whiteSpace: 'normal',
        }}
      >
        <div
          className="content-wrapper"
          dangerouslySetInnerHTML={{ __html: message.content }}
        ></div>
      </Flex>
    </>
  );
};
