import { useState } from 'react';
import { Resizable } from 're-resizable';
import Chat from './Chat';
import { handleResize } from '../utils/handleResize';

export const ChatResizable = () => {
  // State to store the font size of the chat component
  const [fontSize, setFontSize] = useState('1em');

  const defaultWidth = 400;
  const defaultHeight = 450;

  const [windowSize, setWindowSize] = useState({
    width: defaultWidth,
    height: defaultHeight,
  });

  // Callback function to update the font size based on the resizable component size
  const handleResizeCallback = (
    event: unknown,
    direction: unknown,
    refToElement: { style: { width: string; height: string } },
  ) => {
    handleResize(event, direction, refToElement, setFontSize);
  };

  const handleButtonClick = () => {
    const newWidth = defaultWidth;
    const newHeight = defaultHeight;
    setWindowSize({
      width: defaultWidth,
      height: defaultHeight,
    });
    handleResizeCallback(null, null, {
      style: {
        width: `${newWidth}px`,
        height: `${newHeight}px`,
      },
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
      onResize={handleResizeCallback} // Pass the resize callback
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
