import ChatMessage from '../components/ChatMessage';

export default {
  title: 'Components/ChatMessage',
  component: ChatMessage,
  tags: ['autodocs'],
};

export const Common = {
  args: {
    message: {
      id: '1',
      author: {
        id: '123',
        rgbColor: '#000',
        username: 'Antonia Vaquita',
        type: 'common',
        badges: ['prime'],
      },
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    className: 'custom-class',
  },
};

export const Highlighted = {
  args: {
    ...Common.args, // Spread the args from the Common story
    message: {
      ...Common.args.message, // Spread the message from the Common story
      author: {
        ...Common.args.message.author, // Spread the author from the Common story
        type: 'highlighted', // Override the type for the highlighted message
      },
    },
  },
};

export const Bit = {
  args: {
    ...Common.args, // Spread the args from the Common story
    message: {
      ...Common.args.message, // Spread the message from the Common story
      author: {
        ...Common.args.message.author, // Spread the author from the Common story
        type: 'bit', // Override the type for the highlighted message
      },
    },
  },
};

export const Subscriber = {
  args: {
    ...Common.args, // Spread the args from the Common story
    message: {
      ...Common.args.message, // Spread the message from the Common story
      author: {
        ...Common.args.message.author, // Spread the author from the Common story
        type: 'subscriber', // Override the type for the highlighted message
      },
    },
  },
};
