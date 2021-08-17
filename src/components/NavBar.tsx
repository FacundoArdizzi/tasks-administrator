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
            alignItems='center'
            backgroundColor='white' 
            borderBottomRadius='xl' 
            shadow='md' 
            width='100%'
            height='10vh'
        >
            <Stack direction='row' width='100vw' justifyContent='center' margin='auto'>
                <Link to='/tasks-administrator/'><Button
                    width='25vw' 
                    textAlign='center' 
                    fontWeight='600' 
                    background='transparent'
                    _hover={{cursor:'pointer', color:'primary' }}
                    _focus={{color:'primary'}} 
                    onClick={() => dispatch(show('pendient'))}
                    >
                    PENDIENT
                </Button></Link>
                <Link to='/tasks-administrator/completed'><Button
                    width='25vw' 
                    textAlign='center' 
                    fontWeight='600' 
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