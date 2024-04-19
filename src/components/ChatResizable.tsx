import { useState } from 'react';
import { Resizable } from 're-resizable';
import Chat from './Chat';

export const ChatResizable = () => {
  // State to store the font size of the chat component
  const [fontSize, setFontSize] = useState('1em');

  // Callback function to update the font size based on the resizable component size
  const handleResize = (_event: unknown, _direction: unknown, refToElement: { style: { width: string; }; }) => {
    // Calculate the font size based on the resizable component's width
    const newFontSize = `${parseInt(refToElement.style.width) / 400}em`;
    setFontSize(newFontSize);
  };

  return (
    <Resizable
      minHeight={400}
      minWidth={300}
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
