import React, { useState } from 'react';
import { Button, Stack, Textarea, } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/index'

const Input: React.FC = () => {
    const dispatch = useDispatch()
    let [value, setValue] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    const handleSubmit = () => {
        let id = Date.now()
        dispatch(addTodo({content: value, id}))
        setValue('')
    }

    return (
        <Stack width='100%' marginY={4} alignItems='center'>
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
            >Add</Button>
        </Stack>
    )
}

export default Input;