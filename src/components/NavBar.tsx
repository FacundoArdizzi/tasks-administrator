import React, { useState } from "react";
import { Stack, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { show } from "../redux/actions";

const NavBar: React.FC = () => {
    const dispatch = useDispatch()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(show(e.currentTarget.value))
    }

    return (
        <Stack 
            direction='row' 
            backgroundColor='white' 
            paddingTop={5} 
            borderBottomRadius='xl' 
            shadow='md' 
            width='100%'
            opacity='100%'
        >
            <Stack direction='row' width='fit-content' margin='auto'>
                <Button
                    width='20vw' 
                    textAlign='center' 
                    fontWeight='600' 
                    paddingBottom='1.5'
                    background='transparent'
                    _hover={{cursor:'pointer', color:'primary' }}
                    _focus={{color:'primary'}}
                    value='todos'
                    onClick={handleClick}
                    >
                    TODO
                </Button>
                <Button
                    width='20vw' 
                    textAlign='center' 
                    fontWeight='600' 
                    paddingBottom='1.5'
                    background='transparent'
                    _hover={{cursor:'pointer', color:'primary' }}
                    _focus={{color:'primary'}}
                    value='finishedTodos'
                    onClick={handleClick}
                    >
                    DONE
                </Button>
            </Stack>
        </Stack>
    );
};

export default NavBar;
