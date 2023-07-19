import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';
// import Header from '../../components/Header/Index';

export default function Index() {
    return (
        <Box>
            {/* <Text>Auth</Text> */}
            {/* <Header /> */}

            <Outlet>
                
            </Outlet>
        </Box>
    )
}
