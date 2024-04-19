import { Resizable } from 're-resizable';
import Chat from './Chat';

export const ChatResizable = () => {
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
    >
      <Chat />
    </Resizable>
  );
};
