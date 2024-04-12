import { useState } from 'react';
import EmojiPickerButton from './EmojiPickerButton';

type SendMessageFormProps = {
  onSend: (message: string) => void
}

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
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Send a chat message"
        />
        <div>
          <EmojiPickerButton
            onEmojiPick={(emoji) =>
              setMessage((msg) => msg.concat(emoji))
            }
          />
        </div>
      </div>

      <button
        type="submit"
      >
        Chat
      </button>
    </form>
  );
};

export default SendMessageForm;
