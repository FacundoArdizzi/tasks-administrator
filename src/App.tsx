import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { useSelector } from 'react-redux'
import { IState } from './redux/constants'
import theme from './theme';
import Home from './components/Home'
import Container from './components/Container'

const App: React.FC = () => {
  const show = useSelector((state: IState) => state.show)
  const todos = useSelector((state: IState) => state.todos)
  const finished = useSelector((state: IState) => state.finishedTodo)

  return (
    <ChakraProvider theme={theme} >
      <Home />
      {show === 'finishedTodos' ? <Container todos={finished} /> : <Container todos={todos} />}
    </ChakraProvider>
  );
}

export default App;
