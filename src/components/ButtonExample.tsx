import React, { useState, useEffect } from 'react';
import { Button, useTheme } from '@chakra-ui/react';

interface ButtonExampleProps {
    dataTheme?: string;
}

const ButtonExample: React.FC<ButtonExampleProps> = ({ dataTheme = 'candy' }) => {
    const [clicked, setClicked] = useState(false);
    const theme = useTheme();

    const getBackgroundColor = () => {
        // You can adapt this logic based on your theme structure
        switch (dataTheme) {
            case 'rainforest':
                return theme.colors.rainforest.color;
            case 'candy':
                return theme.colors.candy.color;
            case 'rose':
                return theme.colors.rose.color;
            default:
                return theme.colors.candy.color; // Default to candy theme
        }
    };

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
                backgroundColor={getBackgroundColor()}
                color="white"
                _hover={{ backgroundColor: theme.colors.brand[600] }}
            >
                Clickea aquí
            </Button>
        </div>
    );
};

export default ButtonExample;
