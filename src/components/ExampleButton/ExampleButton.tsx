import React from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'

const ExampleButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
    return (
        <Button backgroundColor="primary" {...rest}>
            Hellosss
        </Button>
    )
}

export default ExampleButton
