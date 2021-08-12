import React from 'react';
import { Stack } from '@chakra-ui/react';
import { ITodo, IState } from '../redux/constants';
import { useSelector } from 'react-redux';
import Card from './Card';

interface ContainerProps {
    todos: ITodo[], 
}

const Container: React.FC <ContainerProps> = ({todos}) => {
    const s = useSelector((state: IState) => state.show)

    return (
        <Stack 
            spacing={2} 
            background='white' 
            borderRadius='md' 
            padding={2} 
            height='100vh'
            width='100%'
            position='absolute'
            top='40vh'
        >
            <ul>
            {
                s === 'completed' ? todos.filter(t => t.completed === true).map(todo => <Card key={todo.id} todo={todo} />) :
                todos.filter(t => t.completed === false).map(todo => <Card key={todo.id} todo={todo} />)
            }
            </ul>
        </Stack>
    )
};

export default Container; 