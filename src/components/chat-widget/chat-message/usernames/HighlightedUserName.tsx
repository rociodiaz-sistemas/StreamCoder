import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Highlighter from '../../../../assets/highlighter.svg';

const HighlightedUsername = ({ displayName, color }: { displayName: string; color: string }) => {
    const [fadeOut, setFadeOut] = useState(false);

    const handleAnimationComplete = () => {
        setTimeout(() => {
            setFadeOut(true);
        }, 500);
    };

    return (
        <div style={{ position: 'relative', display: 'inline-block', overflow: 'visible' }}>
            <motion.span
                style={{
                    color: color,
                    display: 'inline-block',
                    overflow: 'hidden',
                    position: 'relative',
                    backgroundImage: 'linear-gradient(to right, transparent 50%, yellow 50%)',
                    backgroundSize: '200% 100%',
                    backgroundPosition: '0% 0%',
                }}
                animate={{ backgroundPosition: '-100% 0' }}
                transition={{ duration: 0.75, delay: 0.6, type: 'tween' }}
            >
                {displayName}
            </motion.span>
            <AnimatePresence>
                {!fadeOut && (
                    <motion.img
                        src={Highlighter}
                        alt="Highlighter"
                        style={{
                            height: '2.1em',
                            width: 'auto',
                            position: 'absolute',
                            left: -10,
                            top: -10,
                            zIndex: 1,
                        }}
                        initial={{ x: 0, opacity: 1 }}
                        animate={{ x: '400%' }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.75, delay: 0.6, type: 'tween' }}
                        onAnimationComplete={handleAnimationComplete}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default HighlightedUsername;