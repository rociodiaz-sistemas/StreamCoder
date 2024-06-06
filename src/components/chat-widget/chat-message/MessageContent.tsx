import React, { useState } from 'react';
import { MessageModel } from '../../../utils/models';

import { Flex } from '@chakra-ui/react';
import Username from './usernames/UserName';

export const MessageContent = ({ message }: { message: MessageModel }) => {
  const Badges = message.author.badges.map((badge, i) => (
    <img
      key={badge.name + i}
      src={`${badge.imageUrl}`}
      alt={`${badge.name} ${badge.version} badge`}
    />
  ));

  return (
    <div>
      <Flex align="center" direction="row">
        <Username displayName={message.author.displayName} color={message.author.color} type={message.type} />
      </Flex>
      <span dangerouslySetInnerHTML={{ __html: message.content }}></span>
    </div>
  );
};
