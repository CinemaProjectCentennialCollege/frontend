import React from 'react';
import {
    Box,
    Text,
    Button,
    useColorModeValue,
    Stack,
    useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


export default function Index() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Stack h={"50"} direction={'row'} alignItems={"center"} justifyContent={"space-between"} spacing={7}>
                <Box></Box>
                
                <Text>All rights reserved, 2023 © Centenniel college COMP 246, Group 8</Text>

                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
            </Stack>            
        </Box>
    )
}
