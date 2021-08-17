import React from 'react';
import { Stack, Text, Link, Icon } from '@chakra-ui/react';
import { ITodo, IState } from '../redux/constants';
import { useSelector } from 'react-redux';
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import Card from './Card';

interface ContainerProps {
    todos: ITodo[], 
}

const Container: React.FC <ContainerProps> = ({todos}) => {
    const s = useSelector((state: IState) => state.show)

    return (
        <Stack position='absolute' top='40vh' width='100%' spacing={0}>
            <Stack 
                background='white' 
                borderRadiusTop='md' 
                minHeight='60vh'
                paddingBottom='2vh'
            >
                <ul>
                {
                    s === 'completed' ? todos.filter(t => t.completed === true).map(todo => <Card key={todo.id} todo={todo} />) :
                    todos.filter(t => t.completed === false).map(todo => <Card key={todo.id} todo={todo} />)
                }
                </ul>
            </Stack>
            <Stack width='100%' alignItems='center' color='white' backgroundColor='blackAlpha.800' p={3} m={0}>
                <Text>Site Created By Facundo Ardizzi</Text>
                <Stack direction='row' spacing={6} >
                    <Link href='https://www.linkedin.com/in/facundo-ardizzi/' _hover={{color:'primary' }}>
                        <Icon as={FaLinkedin} w={10} h={10} />
                    </Link>
                    <Link href='https://github.com/FacundoArdizzi' _hover={{color:'primary' }}>
                        <Icon as={FaGithub} w={10} h={10} />
                    </Link>
                </Stack>
            </Stack>
        </Stack>
    )
};

export default Container; 