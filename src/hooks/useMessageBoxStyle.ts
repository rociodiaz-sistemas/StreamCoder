import { useTheme } from '@chakra-ui/react';
import { Author } from '../utils/models';

const useMessageBoxStyle = (author: Author) => {
  const theme = useTheme();
  const baseStyle = theme;

  const getMessageBoxStyle = () => {
    return baseStyle.messageStyles[author.type];
  };

  return {
    borderColor: getMessageBoxStyle().borderColor,
    background: getMessageBoxStyle().background,
    gifBackground: getMessageBoxStyle().gifBackground,
    messageBoxStyle: getMessageBoxStyle().messageBoxStyle,
  };
};

export default useMessageBoxStyle;
