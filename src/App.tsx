import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { useSelector } from 'react-redux'
import { IState } from './redux/constants'
import theme from './theme';
import Home from './components/Home'
import Container from './components/Container'
import { Route } from 'react-router';

const App: React.FC = () => {
  const todos = useSelector((state: IState) => state.todos)
  const finished = useSelector((state: IState) => state.finishedTodos)

  return (
    <ChakraProvider theme={theme} >
      <Route path='/' component={Home} />
      <Route path='/' exact><Container todos={todos} /></Route>
      <Route path='/done'><Container todos={finished} status={true} /></Route>
    </ChakraProvider>
  );
}

export default App;
