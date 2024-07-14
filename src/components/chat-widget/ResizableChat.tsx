import { useState } from 'react';
import { Resizable } from 're-resizable';
import Chat from './Chat';
import { handleResize } from '../../utils/handleResize'; // Import the context and hooks
import { useChatContext } from '../../store/contexts/ChatContext';

export const ResizableChat = () => {
  const { setFontSize } = useChatContext();
  const [windowSize, setWindowSize] = useState({ width: 400, height: 450 });

  const handleResizeCallback = (
    event: unknown,
    direction: unknown,
    refToElement: { style: { width: string; height: string } },
  ) => {
    handleResize(event, direction, refToElement, setFontSize);
  };

  const handleButtonClick = () => {
    const defaultWidth = 400;
    const defaultHeight = 450;
    setWindowSize({ width: defaultWidth, height: defaultHeight });
    handleResizeCallback(null, null, {
      style: { width: `${defaultWidth}px`, height: `${defaultHeight}px` },
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

  const handleStyles = {
    top: { height: '20px', cursor: 'ns-resize' },
    right: { width: '20px', cursor: 'ew-resize' },
    bottom: { height: '20px', cursor: 'ns-resize' },
    left: { width: '20px', cursor: 'ew-resize' },
    topRight: { width: '20px', height: '20px', cursor: 'nesw-resize' },
    bottomRight: { width: '20px', height: '20px', cursor: 'nwse-resize' },
    bottomLeft: { width: '20px', height: '20px', cursor: 'nesw-resize' },
    topLeft: { width: '20px', height: '20px', cursor: 'nwse-resize' },
  };

  const handleWrapperStyle = {
    zIndex: 99,
  };

  return (
    <Resizable
      minHeight={400}
      maxHeight={900}
      minWidth={300}
      maxWidth={900}
      onResizeStop={onResizeStop}
      defaultSize={{ width: windowSize.width, height: windowSize.height }}
      size={{ width: windowSize.width, height: windowSize.height }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
      }}
      onResize={handleResizeCallback}
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
      handleStyles={handleStyles}
      handleWrapperStyle={handleWrapperStyle}
    >
      <Chat
        onClick={handleButtonClick}
        height={windowSize.height}
        width={windowSize.width}
        defaultHeight={windowSize.height}
        defaultWidth={windowSize.width}
      />
    </Resizable>
  );
};
export default ResizableChat;
