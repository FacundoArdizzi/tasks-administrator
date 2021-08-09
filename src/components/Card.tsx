import { Stack, Text, CloseButton } from '@chakra-ui/react';
import React from 'react';
import { ITodo } from '../redux/constants';

interface props {
    key: number, 
    todo: ITodo,
}

const Card: React.FC <props> = ({todo}) => {
    return (
        <Stack>
            <CloseButton size='md' _hover={{color: 'red.500'}} />
            <Text>{todo.content}</Text>

        </Stack>
    )
}

export default Card;