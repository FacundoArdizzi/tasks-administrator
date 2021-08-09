import React from 'react';
import { Stack, Text, Button, Icon, Switch, StackDivider } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { ITodo } from '../redux/constants';
import { FaTrash } from 'react-icons/fa'
import { finishTodo, deleteTodo, unfinishTodo } from '../redux/actions';

interface props {
    key: number, 
    todo: ITodo,
    status?: boolean,
}

const Card: React.FC <props> = ({todo, status}) => {
    const dispatch = useDispatch()

    const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
        status === true ? dispatch(unfinishTodo(todo.id)) : dispatch(finishTodo(todo.id))
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(deleteTodo(todo.id))
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
                    <Switch isChecked={status} color='primary' size='md' onChange={()=>setTimeout(handleSwitch, 100)}/>
                </Stack>
                <Button 
                    width='fit-content' 
                    background='transparent' 
                    _hover={{color: '#C53030',}} 
                    onClick={handleClick}
                ><Icon as={FaTrash} /></Button>
            </Stack>
        </Stack>
    )
}

export default Card;