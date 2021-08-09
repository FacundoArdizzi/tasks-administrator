import React from 'react';
import { Stack, Text, Button, Icon, Switch, StackDivider } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { ITodo } from '../redux/constants';
import { FaTrash } from 'react-icons/fa'
import { finishTodo } from '../redux/actions';

interface props {
    key: number, 
    todo: ITodo,
}

const Card: React.FC <props> = ({todo}) => {
    const dispatch = useDispatch()

    const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('yo funciono')
        dispatch(finishTodo(todo.id))
    }

    return (
        <Stack 
            direction='row' 
            borderBottom='1px solid' 
            borderColor='primary'
            width='60vw' 
            margin='auto' 
            padding={2}
            justifyContent='space-between'
            alignItems='center'
        >
            <Text width='55vw'>{todo.content}</Text>
            <Stack direction='row' divider={<StackDivider/>} alignItems='center' width='10vw' justifyContent='space-around' >
                <Stack>
                    <Text>Done</Text>
                    <Switch color='primary' size='md' onFocus={handleSwitch}/>
                </Stack>
                <Button 
                    width='fit-content' 
                    background='transparent' 
                    _hover={{color: '#C53030',}} 
                ><Icon as={FaTrash} /></Button>
            </Stack>
        </Stack>
    )
}

export default Card;