import React, { lazy, Suspense } from 'react'; // Import default directly
import { MessageType } from '../../../../utils/models';

// Lazy load components
const CommonUserName = lazy(() => import('./CommonUserName'));
const HighlightedUserName = lazy(() => import('./HighlightedUserName'));
const BitsUserName = lazy(() => import('./BitsUserName'));

const animationComponents: { [key: string]: React.LazyExoticComponent<React.FC<{ displayName: string; color: string, }>> } = {
    common: CommonUserName,
    highlighted: HighlightedUserName,
    bits: BitsUserName
};

interface UsernameProps {
    displayName: string;
    color: string;
    type: MessageType;
}

const Username: React.FC<UsernameProps> = ({ displayName, color, type }) => {
    const UserNameAnimation = animationComponents[type] || CommonUserName;

    return (
        <Suspense fallback={<span>{displayName}</span>}>
            <UserNameAnimation displayName={displayName} color={color} />
        </Suspense>
    );
};

export default Username;