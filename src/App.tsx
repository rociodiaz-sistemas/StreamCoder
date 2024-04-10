import Chat from './components/Chat';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <main>
        <Chat />
      </main>
    </ChakraProvider>
  );
}

export default App;
