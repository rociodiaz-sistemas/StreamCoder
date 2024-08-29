import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${event.pageX}px`;
        cursorRef.current.style.top = `${event.pageY}px`;
      }
    };

    // Add event listener for mouse move
    document.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        width: '20px', // Adjust size as needed
        height: '20px', // Adjust size as needed
        backgroundColor: 'rgba(255, 0, 0, 0.7)', // Example color
        borderRadius: '50%',
        pointerEvents: 'none', // Ensures it doesn't block clicks
        transform: 'translate(-50%, -50%)', // Centers the cursor
        zIndex: 9999, // Ensures it's on top of other elements
      }}
    />
  );
};

export default CustomCursor;
