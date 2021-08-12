import React from "react";
import { Stack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { show } from "../redux/actions";

const NavBar: React.FC = () => {
    const dispatch = useDispatch()

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
                <Link to='/tasks-administrator/'><Button
                    width='20vw' 
                    textAlign='center' 
                    fontWeight='600' 
                    paddingBottom='1.5'
                    background='transparent'
                    _hover={{cursor:'pointer', color:'primary' }}
                    _focus={{color:'primary'}} 
                    onClick={() => dispatch(show('pendient'))}
                    >
                    PENDIENT
                </Button></Link>
                <Link to='/tasks-administrator/completed'><Button
                    width='20vw' 
                    textAlign='center' 
                    fontWeight='600' 
                    paddingBottom='1.5'
                    background='transparent'
                    _hover={{cursor:'pointer', color:'primary' }}
                    _focus={{color:'primary'}}
                    onClick={() => dispatch(show('completed'))}
                    >COMPLETED
                </Button></Link>
            </Stack>
        </Stack>
    );
};

export default NavBar;
