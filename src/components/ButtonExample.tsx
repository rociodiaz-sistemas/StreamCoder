import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';

interface ButtonExampleProps {
    // Puedes definir las propiedades del componente aquí
}

const ButtonExample: React.FC<ButtonExampleProps> = (props) => {
    // Utilizamos el estado para manejar el clic del botón
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        // Actualizamos el estado cuando se hace clic en el botón
        setClicked(!clicked);
    };

    return (
        <div>
            <h1>¡Hola, este es mi componente!</h1>
            <p>El botón ha sido {clicked ? 'clickeado' : 'sin clickear'}.</p>
            {/* El botón que cambia el estado al ser clickeado */}
            <Button colorScheme='brand.100' onClick={handleClick}>Clickea aquí</Button>
        </div>
    );
};

export default ButtonExample;
