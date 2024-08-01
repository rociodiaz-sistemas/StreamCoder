import { useState } from 'react';
import { Resizable } from 're-resizable';
import Chat from './Chat';
import { handleResize } from '../../utils/handleResize'; // Import the context and hooks
import { useChatContext } from '../../store/contexts/ChatContext';
import './Resizable.css';
import { useDispatch } from 'react-redux';
import { resizeSource } from '../../store/slices/obsSlice';

export const ResizableChat = () => {
  const { setFontSize } = useChatContext();
  const [windowSize, setWindowSize] = useState({ width: 400, height: 450 });
  const dispatch = useDispatch();

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
    setWindowSize((prevSize) => {
      const newWidth = prevSize.width + delta.width;
      const newHeight = prevSize.height + delta.height;

      console.log(newHeight, newWidth, 'widthsheights');

      // Dispatch the resize action
      dispatch(
        resizeSource({
          sourceName: 'Chat',
          width: newWidth,
          height: newHeight,
        }),
      );

      return {
        width: newWidth,
        height: newHeight,
      };
    });
  };

  const handleClasses = {
    top: 'handle handle-top',
    right: 'handle handle-right',
    bottom: 'handle handle-bottom',
    left: 'handle handle-left',
    topRight: 'handle handle-topRight',
    bottomRight: 'handle handle-bottomRight',
    bottomLeft: 'handle handle-bottomLeft',
    topLeft: 'handle handle-topLeft',
  };

  const handleStyles = {
    top: { height: '20px' },
    right: { width: '20px' },
    bottom: { height: '20px' },
    left: { width: '20px' },
    topRight: {
      width: '40px',
      height: '40px',
      marginTop: '-5px',
      marginRight: '-5px',
    },
    bottomRight: {
      width: '40px',
      height: '40px',
      marginBottom: '-5px',
      marginRight: '-5px',
    },
    bottomLeft: {
      width: '40px',
      height: '40px',
      marginBottom: '-5px',
      marginLeft: '-5px',
    },
    topLeft: {
      width: '40px',
      height: '40px',
      marginTop: '-5px',
      marginLeft: '-5px',
    },
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
      handleClasses={handleClasses}
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
