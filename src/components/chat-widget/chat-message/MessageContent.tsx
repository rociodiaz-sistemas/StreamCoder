import React, { useState } from 'react';
import { MessageModel } from '../../../utils/models';
import { AnimatePresence, motion } from "framer-motion";
import Highlighter from '../../assets/highlighter.svg';
import { Flex } from '@chakra-ui/react';

export const MessageContent = ({ message }: { message: MessageModel }) => {
    const [fadeOut, setFadeOut] = useState(false);

    const handleAnimationComplete = () => {
        // Set fadeOut to true after a slight delay
        setTimeout(() => {
            setFadeOut(true);
        }, 500); // Adjust the delay as needed
    };

    const Username = (
        <div style={{ position: 'relative', display: 'inline-block', overflow: 'visible' }}>
            {/* Background Highlighting */}
            <motion.span
                style={{
                    color: message.author.color,
                    display: 'inline-block',
                    overflow: 'hidden',
                    position: 'relative',
                    backgroundImage: 'linear-gradient(to right, transparent 50%, yellow 50%)',
                    backgroundSize: '200% 100%',
                    backgroundPosition: '0% 0%', // Start with transparent background
                }}
                animate={{
                    backgroundPosition: '-100% 0', // Animate to fully colored background from left to right
                }}
                transition={{ duration: 0.75, delay: 0.6, type: 'tween' }} // Duration of the animation with a delay
            >
                {message.author.displayName}
            </motion.span>

            {/* SVG Highlighter */}
            <AnimatePresence>
                {!fadeOut && (
                    <motion.img
                        src={Highlighter} // Replace with the path to your SVG
                        alt="Highlighter"
                        style={{
                            height: '2.1em', // Adjust as needed
                            width: 'auto',
                            position: 'absolute',
                            left: -10,
                            top: -10, // Position the SVG correctly relative to the text
                            zIndex: 1,
                        }}
                        initial={{ x: 0, opacity: 1 }} // Initial position and opacity of the highlighter
                        animate={{ x: '400%' }} // Animate highlighter to the right edge of the span and fade out
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.75, delay: 0.6, type: 'tween' }} // Duration of the highlighter animation with a delay
                        onAnimationComplete={handleAnimationComplete} // Handle animation complete event
                    />
                )}
            </AnimatePresence>
        </div>
    );

    const Badges = message.author.badges.map((badge, i) => (
        <img
            key={badge.name + i}
            src={`${badge.imageUrl}`}
            alt={`${badge.name} ${badge.version} badge`}
        />
    ));

    return (
        <div>
            <Flex align="center" direction="row">
                {Username}
            </Flex>
            <span dangerouslySetInnerHTML={{ __html: message.content }}></span>
        </div>
    )
};