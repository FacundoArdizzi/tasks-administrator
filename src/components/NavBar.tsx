import React from "react";
import { Stack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
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
                    >
                    <Link to='/'>TODO</Link>
                </Button>
                <Button
                    width='20vw' 
                    textAlign='center' 
                    fontWeight='600' 
                    paddingBottom='1.5'
                    background='transparent'
                    _hover={{cursor:'pointer', color:'primary' }}
                    _focus={{color:'primary'}}
                    >
                    <Link to='/done'>DONE</Link>
                </Button>
            </Stack>
        </Stack>
    );
};

export default NavBar;
