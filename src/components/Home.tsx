import React from "react";
import { Box, Container, Stack } from '@chakra-ui/react'
import { IState } from '../redux/constants'
import NavBar from './NavBar'
import Input from './Input'
import { useSelector } from "react-redux";

const Home: React.FC = () => {
    return (
        <Stack width='100%'>
            <Box position='fixed' zIndex='9999' width='100%' opacity='100%' >
                <NavBar />
            </Box>
            <Box position='absolute' top='15vh' width='100%' >
                <Input />
            </Box>
        </Stack>
    )
}

export default Home;