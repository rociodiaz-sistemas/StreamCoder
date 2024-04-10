import Chat from './components/Chat';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <main className="grid min-h-screen place-items-center">
        <Chat />
      </main>
    </ChakraProvider>
  );
}

export default App;
