import React from 'react';
import { motion } from 'framer-motion';
import ufosvg from '../../../assets/ufo.svg';

// Define the animation variants
const ufoVariants = {
    hidden: { x: '-100%', y: '-100%' }, // Start from the top-left corner
    visible: { x: '100%', y: '100%' }, // Move to the bottom-right corner
};

const UFOComponent = () => {
    return (
        <motion.div
            id='ufo'
            style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}
            variants={ufoVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 5, ease: "easeInOut" }} // Adjust duration and easing as necessary
        >
            <motion.img
                style={{ width: "15%", height: "15%" }}
                src={ufosvg}
                alt="UFO"
            />
        </motion.div>
    );
};

export default UFOComponent;
