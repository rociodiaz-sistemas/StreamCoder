import { useState } from 'react';
import EmojiPickerButton from './EmojiPickerButton';
import { Flex, Box } from '@chakra-ui/react';
import baseTheme from '../themes/baseTheme';

type SendMessageFormProps = {
  onSend: (message: string) => void;
};

const MAX_MESSAGE_LENGTH = 300;

const SendMessageForm = ({ onSend }: SendMessageFormProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const filteredMessage = message.trim().slice(0, MAX_MESSAGE_LENGTH);

    if (filteredMessage) {
      onSend(filteredMessage);
    }

    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex justify={'space-between'} direction={'row'}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Send a chat message"
          style={{ width: '100%', padding: '7px', borderRadius: '5px' }}
        />
        <Flex
          pos={'absolute'}
          justify={'flex-end'}
          alignSelf={'flex-end'}
          w={'-webkit-fill-available'}
          h={'fit-content'}
          mr={6}
          p={1}
        >
          <EmojiPickerButton
            onEmojiPick={(emoji) => setMessage((msg) => msg.concat(emoji))}
          />
        </Flex>
      </Flex>

      <Flex justify={'flex-end'} py={1}>
        <button
          type="submit"
          style={{
            backgroundColor: `${baseTheme.colors.rosa}`,
            paddingBlock: '7px',
            paddingInline: '8px',
            borderRadius: '5px',
          }}
        >
          Chat
        </button>
      </Flex>
    </form>
  );
};

export default SendMessageForm;
