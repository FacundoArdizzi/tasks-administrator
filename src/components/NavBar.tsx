import { Stack, Box, Text } from "@chakra-ui/layout";
import React from "react";

const NavBar: React.FC = () => {
    return (
        <Stack direction='row' backgroundColor='whiteAlpha.800' paddingTop={5} borderBottomRadius='xl' shadow='md'>
            <Stack direction='row' width='fit-content' margin='auto'>
                <Box
                    width='20vw' 
                    textAlign='center' 
                    fontWeight='600' 
                    paddingBottom='1.5'
                    _hover={{cursor:'pointer', color:'primary' }}
                    _focus={{color:'primary'}}
                    >
                    TODO
                </Box>
                <Box
                    width='20vw' 
                    textAlign='center' 
                    fontWeight='600' 
                    paddingBottom='1.5'
                    _hover={{cursor:'pointer', color:'primary' }}
                    _focus={{color:'primary'}}
                    >
                    DONE
                </Box>
            </Stack>
        </Stack>
    );
};

export default NavBar;
