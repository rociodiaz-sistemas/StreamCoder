// components/ButtonExample.tsx

import React, { useState, useEffect } from 'react';
import { Button, useTheme } from '@chakra-ui/react';

interface ButtonExampleProps {
  dataTheme?: string;
}

const ButtonExample: React.FC<ButtonExampleProps> = ({ dataTheme = 'candy' }) => {
  const [clicked, setClicked] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    console.log('Current Theme:', dataTheme);
    // Do something with the theme name if needed
  }, [dataTheme]);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <h1>¡Hola, este es mi componente!</h1>
      <p>El botón ha sido {clicked ? 'clickeado' : 'sin clickear'}.</p>
      <p>Current Theme: {dataTheme}</p>
      <Button
        onClick={handleClick}
        backgroundColor={theme.colors[dataTheme]?.color || theme.colors.candy.color}
        color="white"
        _hover={{ backgroundColor: theme.colors.brand[600] }}
      >
        Clickea aquí
      </Button>
    </div>
  );
};

export default ButtonExample;
