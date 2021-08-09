import React from 'react';
import { Stack } from '@chakra-ui/react';
import { ITodo } from '../redux/constants';
import Card from './Card';

const Container: React.FC <ITodo[]> = (props: ITodo[]) => {
    return (
        <Stack spacing={2}>
            <ul>
                {props.map(todo => <Card key={todo.id} todo={todo} />)}
            </ul>
        </Stack>
    )
};

export default Container; 