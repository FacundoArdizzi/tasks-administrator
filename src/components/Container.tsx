import React from 'react';
import { Stack } from '@chakra-ui/react';
import { ITodo } from '../redux/constants';
import Card from './Card';

interface ContainerProps {
    todos: ITodo[], 
    status?: boolean,
}

const Container: React.FC <ContainerProps> = ({todos, status}) => {
    console.log(todos)
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
                {todos.reverse().map(todo => <Card key={todo.id} todo={todo} status={status} />)}
            </ul>
        </Stack>
    )
};

export default Container; 