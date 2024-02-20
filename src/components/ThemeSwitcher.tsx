// ThemeSwitcher.js
import { useColorMode, Button } from '@chakra-ui/react';

const ThemeSwitcher = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      Toggle Theme
    </Button>
  );
};

export default ThemeSwitcher;
