import React from 'react';
import { useLoaderData, useNavigation } from "react-router-dom";
import { Box, Center, Text } from "@chakra-ui/react";

import Header from '../../components/Header/Index';
import Footer from '../../components/Footer/Index';

import SliderSection from './components/SliderSection/Index';
import PopularMoviesSection from './components/PopularMoviesSection/Index';
import PageActivityIndicator from '../../components/loader/PageActivityIndicator';


export default function Index() {
    const navigation = useNavigation();
    const { popularMovies } = useLoaderData();
    console.log("popularMovies: ", popularMovies)

    if (navigation.state === "loading") {
        return (
            <PageActivityIndicator />
        )
    }

    return (
        
        <Box>
            <Header />

            <Box>
                <SliderSection />

                <PopularMoviesSection popularMovies={popularMovies} />

                <Box h={"350"} bg={"red.300"}>
                    <Center>
                        <Text>
                            Section Three
                        </Text>
                    </Center>
                </Box>

                <Box h={"350"} bg={"red.400"}>
                    <Center>
                        <Text>
                            Movie Schedule Section?
                        </Text>
                    </Center>
                </Box>                
            </Box>

            <Footer />
        </Box>
    )
}
