import React from 'react';
import { Center, Text } from "@chakra-ui/react";

export default function PageActivityIndicator() {
    return (
        <Center h={"100vh"} 
            // bg={"rgba(0,0,0,0.5)"}
            opacity={0.1}
            background={"rgba(255,255,255,0.1)"}
            _before={{
                content: '""',
                // bgSize: "cover",
                // pos: "absolute",
                // top: 0,
                // right: 0,
                // left: 0,
                // bottom: 0,
                color: "black",
                opacity: 1
              }} 
        >
            <Text>Loading...</Text>
        </Center>
    )
}
