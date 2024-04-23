import { useState } from 'react';
import { Resizable } from 're-resizable';
import Chat from './Chat';

export const ChatResizable = () => {
  // State to store the font size of the chat component
  const [fontSize, setFontSize] = useState('1em');

  const defaultWidth = 400;
  const defaultHeight = 500;

  const [windowSize, setWindowSize] = useState({
    width: defaultWidth,
    height: defaultHeight,
  });

  // Callback function to update the font size based on the resizable component size
  const handleResize = (
    _event: unknown,
    _direction: unknown,
    refToElement: { style: { width: string } },
  ) => {
    // Assuming a base font size of 1em when width is 400 pixels
    const baseWidth = defaultWidth;
    const baseFontSize = 1; // 1em
    const currentWidth = parseInt(refToElement.style.width);
    const newFontSize = `${baseFontSize * (currentWidth / baseWidth)}em`;
    setFontSize(newFontSize);
  };

  const handleButtonClick = () => {
    setWindowSize({
      width: defaultWidth,
      height: defaultHeight,
    });
  };

  const onResizeStop = (
    _event: unknown,
    _direction: unknown,
    _ref: unknown,
    delta: { width: number; height: number },
  ) => {
    setWindowSize((prevSize) => ({
      width: prevSize.width + delta.width,
      height: prevSize.height + delta.height,
    }));
  };

  return (
    <Resizable
      minHeight={400}
      maxHeight={600}
      minWidth={300}
      maxWidth={600}
      onResizeStop={onResizeStop}
      defaultSize={{
        width: windowSize.width,
        height: windowSize.height,
      }}
      size={{ width: windowSize.width, height: windowSize.height }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
      }}
      onResize={handleResize} // Pass the resize callback
      enable={{
        top: true,
        right: true,
        bottom: true,
        left: true,
        topRight: true,
        bottomRight: true,
        bottomLeft: true,
        topLeft: true,
      }}
    >
      <Chat
        fontSize={fontSize}
        onClick={handleButtonClick}
        height={windowSize.height}
        width={windowSize.width}
        defaultHeight={defaultHeight}
        defaultWidth={defaultWidth}
      />
    </Resizable>
  );
};
