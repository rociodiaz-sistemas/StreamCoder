// components/StarField.tsx
import React from 'react';
import { motion, Transition } from 'framer-motion';

// Define types for the props
interface StarProps {
    left: number;
    top: number;
    delay: number;
}

const Star: React.FC<StarProps> = ({ left, top, delay }) => {
    const transition: Transition = {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay
    };

    return (
        <motion.div
            style={{
                position: "absolute",
                width: "1px",
                height: "1px",
                backgroundColor: "white",
                borderRadius: "50%",
                left: `${left}%`,
                top: `${top}%`
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={transition}
        />
    );
};

// Define types for the StarField props
interface StarFieldProps {
    numStars?: number;
}

const StarField: React.FC<StarFieldProps> = ({ numStars = 100 }) => {
    const stars = Array.from({ length: numStars }, (_, index) => ({
        id: index,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 2
    }));

    return (
        <div id="starfield" style={{ position: "absolute", width: "100%", height: "100%", overflow: "hidden" }}>
            {stars.map(star => (
                <Star key={star.id} left={star.left} top={star.top} delay={star.delay} />
            ))}
        </div>
    );
};

export default StarField;