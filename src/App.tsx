import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Route } from 'react-router-dom'
import theme from './theme';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme} >
      <Route path='/' component={NavBar} />
    </ChakraProvider>
  );
}

export default App;
