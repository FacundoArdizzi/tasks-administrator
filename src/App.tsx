import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { useSelector } from 'react-redux'
import { Route } from 'react-router';
import { IState } from './redux/constants';
import theme from './theme';
import Home from './components/Home'
import Container from './components/Container'


const App: React.FC = () => {
  const t = useSelector((state: IState) => state.todos)

  return (
    <ChakraProvider theme={theme} >
      <Route path='/' component={Home} />
      <Route path='/tasks-administrator/' exact><Container todos={t} /></Route>
      <Route path='/tasks-administrator/completed'><Container todos={t} /></Route>
    </ChakraProvider>
  );
}

export default App;
