import { useState } from 'react';
import { Resizable } from 're-resizable';
import Chat from './Chat';

export const ChatResizable = () => {
  // State to store the font size of the chat component
  const [fontSize, setFontSize] = useState('1em');

  // Callback function to update the font size based on the resizable component size
  const handleResize = (_event: unknown, _direction: unknown, refToElement: { style: { width: string; }; }) => {
    // Assuming a base font size of 1em when width is 400 pixels
    const baseWidth = 400;
    const baseFontSize = 1; // 1em
    const currentWidth = parseInt(refToElement.style.width);
    const newFontSize = `${baseFontSize * (currentWidth / baseWidth)}em`;
    setFontSize(newFontSize);
  };

  return (
    <Resizable
      minHeight={400}
      maxHeight={600}
      minWidth={300}
      maxWidth={600}
      defaultSize={{
        width: '400',
        height: '450',
      }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
      }}
      onResize={handleResize} // Pass the resize callback
    >
      <Chat fontSize={fontSize} />
    </Resizable>
  );
};
