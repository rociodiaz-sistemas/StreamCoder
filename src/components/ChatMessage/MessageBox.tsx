import React, { ReactNode } from 'react';
import useThemeMapping from '../../hooks/useThemeMapping';
import { Box } from '@chakra-ui/react';

type MessageBoxProps = {
    children: ReactNode;
    messageType: string;
};

export default function MessageBox({ children, messageType }: MessageBoxProps) {
    const themeInfo = useThemeMapping(); // Use the useThemeMapping hook
    const messageBoxStyle = themeInfo.getMessageBoxStyles(messageType) || {};
    return (
        <Box
            w="90%"
            p="1em"
            fontSize={fontSize}
            bgImage={backgroundGradient ? undefined : gifBackground}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgGradient={backgroundGradient}
            borderWidth="1px"
            borderColor={borderColor}
            borderRadius="12px"
            shadow={boxShadow ? '0px 4px 6px rgba(0, 0, 0, 0.25)' : 'none'}
            bgColor={background}
        >
            {children}
        </Box>)
}