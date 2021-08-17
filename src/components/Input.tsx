import React, { useState } from 'react';
import { Button, Stack, Textarea, Alert, AlertIcon } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions'

const Input: React.FC = () => {
    const dispatch = useDispatch()
    let [value, setValue] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    const handleSubmit = () => {
        let id = Date.now()
        value.length > 0 ? dispatch(addTodo({content: value, completed: false, id})) 
        : alert(`Opps! Looks like you haven't typed anything :(`)
        setValue('')
    }

    return (
        <Stack width='100%' top='10vh' alignItems='center'>
            <Textarea 
                width='50vw'
                value={value}
                onChange={handleChange}
                placeholder='Add a task... ' 
                border='1px solid' 
                borderColor='blackAlpha.900'
                _hover={{border: '2px', borderColor: 'primary'}}
                _focus={{border: '2px', orderColor:'blue.500'}}
            />
            <Button 
                onClick={handleSubmit}
                colorScheme='green'
                variant='outline'
                width='20vw'
                _hover={{background:'green.400', color: 'white'}}
                _focus={{outline: 'none'}}
            >Add</Button>
        </Stack>
    )
}

export default Input;