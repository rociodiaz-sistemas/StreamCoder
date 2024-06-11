import { Box, useTheme } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import useDynamicGradientColor from "../../../hooks/useDynamicGradient";
import UFOComponent from "./UFO";

// lazy load starfield component
const StarField = React.lazy(() => import('./StarField'));

interface AnimationBoxProps {
    children: ReactNode;
}

const AnimatedBackground: React.FC = () => {
    const theme = useTheme();

    const renderThemeAnimations = () => {
        switch (theme.themeName) {
            case 'morningTheme':
                return <MorningThemeAnimations />;
            case 'dayTheme':
                return <DayThemeAnimations />;
            case 'afternoonTheme':
                return <AfternoonThemeAnimations />;
            case 'nightTheme':
                return <NightThemeAnimations />;
            default:
                return null;
        }
    };

    return (
        <AnimationBox>
            {renderThemeAnimations()}
        </AnimationBox>
    );
};

const AnimationBox: React.FC<AnimationBoxProps> = ({ children }) => {
    const currentGradient = useDynamicGradientColor();
    return (
        <Box
            position="absolute"
            width="100%"
            height="100%"
            zIndex="0"
            overflow="hidden"
            bgGradient={currentGradient}
        >
            {children}
        </Box>
    );
}

export default AnimatedBackground;

const MorningThemeAnimations = () => {
    return <div>Morning Theme Animations</div>;
};

const DayThemeAnimations = () => {
    return <div>Day Theme Animations</div>;
};

const AfternoonThemeAnimations = () => {
    return <div>Afternoon Theme Animations</div>;
};

const NightThemeAnimations = () => {
    const MemoizedStarfield = React.memo(StarField);
    const MemoizedUFOComponent = React.memo(UFOComponent);
    return (
        <>
            <MemoizedStarfield />
            <MemoizedUFOComponent />
        </>
    );
};