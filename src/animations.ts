import { AnimationProps } from "framer-motion";

export const itemSpringAnimationProps: AnimationProps = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
};


export const itemCelebrateAnimationProps: AnimationProps = {
    initial: { scale: 0.8 },
    animate: {
        scale: [0.8, 1.5, 1],
        transition: {
            duration: 0.5,
            times: [0, 0.5, 1],
            ease: "easeOut",
        },
    },
};