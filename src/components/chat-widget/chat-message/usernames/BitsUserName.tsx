import React from 'react';
import { motion } from 'framer-motion';

interface BitsUsernameProps {
    displayName: string;
    color: string;
}

const BitsUsername: React.FC<BitsUsernameProps> = ({ displayName, color }) => {
    return (
        <div style={{ display: 'inline-block' }}>
            {displayName.split('').map((letter, index) => (
                <motion.span
                    key={index}
                    className={`letter-${index}`}
                    style={{ display: 'inline-block', y: -32 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.2, delay: 0.05 * index }}
                >
                    {letter}
                </motion.span>
            ))}
        </div>
    );
};

export default BitsUsername;