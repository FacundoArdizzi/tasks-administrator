import React from "react";
import { Container, Stack } from '@chakra-ui/react'
import { IState } from '../redux/constants/index'
import NavBar from './NavBar'
import Input from './Input'
import { useSelector } from "react-redux";

const Home: React.FC = () => {
    const show = useSelector((state: IState) => state.show)
    const todos = useSelector((state: IState) => state.todos)
    const finished = useSelector((state: IState) => state.finishedTodo)
    
    return (
        <Stack>
            <NavBar />
            <Input />
            <Container props={todos} />
        </Stack>
    )
}

export default Home;