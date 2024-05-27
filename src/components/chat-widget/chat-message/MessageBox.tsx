import React from 'react';
import useThemeMapping from '../../../hooks/useThemeMapping';
import { Box } from '@chakra-ui/react';
import { useChatContext } from '../../../store/contexts/ChatContext';
import { MessageBoxStyle } from '../../../utils/models';
import { motion } from "framer-motion";
import { itemSpringAnimation } from '../../../animations';

type MessageBoxProps = {
    children: React.ReactNode;
    messageType: string;
};

export default function MessageBox({ children, messageType }: MessageBoxProps) {
    const themeInfo = useThemeMapping();
    const { fontSize } = useChatContext();
    const messageBoxStyle = themeInfo.getMessageBoxStyles(messageType) || {};

    const {
        borderColor,
        background,
        backgroundGradient,
        gifBackground,
        boxShadow,
    } = messageBoxStyle as MessageBoxStyle;

    return (
        <Box paddingTop="0.5em">
            <motion.div {...itemSpringAnimation} layout className="mx-auto w-full">
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
                </Box>
            </motion.div>
        </Box>
    )
}