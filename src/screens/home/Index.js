import React from 'react';
import { Box, Center, Text } from "@chakra-ui/react";

import Header from '../../components/Header/Index';
import Footer from '../../components/Footer/Index';


export default function Index() {
    return (
        <Box>
            <Header />

            <Box>
                <Box h={"350"} bg={"red.100"}>
                    <Center>
                        <Text>
                            Slider Section
                        </Text>
                    </Center>
                </Box>

                <Box h={"350"} bg={"red.200"}>
                    <Center>
                        <Text>
                            New In Section
                        </Text>
                    </Center>
                </Box>

                <Box h={"350"} bg={"red.300"}>
                    <Center>
                        <Text>
                            Popular Section
                        </Text>
                    </Center>
                </Box>

                <Box h={"350"} bg={"red.400"}>
                    <Center>
                        <Text>
                            Viewing Schedule Section
                        </Text>
                    </Center>
                </Box>
            </Box>

            <Footer />
        </Box>
    )
}
