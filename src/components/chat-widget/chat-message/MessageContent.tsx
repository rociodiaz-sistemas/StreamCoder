import { MessageModel } from '../../../utils/models';
import { Box, Flex, Text } from '@chakra-ui/react';
import Username from './usernames/UserName';
import { Icon } from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons';
import './styles.css';

export const MessageContent = ({ message }: { message: MessageModel }) => {
  const areThereBits = message.type === 'bits' && message.bits !== 0;

  const Badges = message.author.badges.map((badge, i) => (
    <img
      key={badge.name + i}
      src={`${badge.imageUrl}`}
      alt={`${badge.name} ${badge.version} badge`}
      style={{ width: '1em', marginInlineStart: '5px' }}
    />
  ));


  const BitsTextStyle = {
    background: 'linear-gradient(to right, #54009E, #D3A6FF)',
    WebkitBackgroundClip: 'text', // This makes the gradient affect the text itself
    WebkitTextFillColor: 'transparent', // Makes the text transparent so background shows
  };

  const PulsateTextStyle = `
  @keyframes pulsateText {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

  const insertTextPulsateAnimation = () => {
    const style = document.createElement('style');
    style.innerHTML = PulsateTextStyle;
    document.head.appendChild(style);
  };

  insertTextPulsateAnimation();

  return (
    <>
      <Flex align="center" direction="row">
        <Username
          displayName={message.author.displayName}
          color={message.author.color}
          type={message.type}
        />
        {Badges}
        {areThereBits &&
          <Flex align='center' animation='pulsateText 3s infinite'>
            <Icon ml='10px' as={MoonIcon} color='#54009E' />
            <Text pl='5px' fontWeight='bold' style={BitsTextStyle}>x{message.bits}</Text>
          </Flex>
        }
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
