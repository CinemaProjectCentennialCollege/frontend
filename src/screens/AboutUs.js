import React from 'react';
import { useNavigation } from "react-router-dom";
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import Header from '../components/Header/Index';
import Footer from '../components/Footer/Index';
import PageHeading from '../components/PageHeading/Index';
import PageActivityIndicator from '../components/loader/PageActivityIndicator';


export default function AboutUs() {
    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return (
            <PageActivityIndicator />
        )
    }

    return (
        <Box>
            <Header />

            <PageHeading 
                title={"About Us"}
            />

            <Container minW={"6xl"} mt={"20"}>
                <Box minH={"800px"}>
                    <Heading as={"h2"} textAlign={"center"}>
                        What is Cinerama?
                    </Heading>

                    <Text as={"p"} fontSize="lg" align={"center"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam arcu, eu tempus tortor molestie at. Vestibulum pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat sapien. Suspendisse placerat vulputate posuere. Curabitur neque tortor, mattis nec lacus non, placerat congue elit.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam arcu, eu tempus tortor molestie at. Vestibulum pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat sapien. Suspendisse placerat vulputate posuere. Curabitur neque tortor, mattis nec lacus non, placerat congue elit.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam arcu, eu tempus tortor molestie at. Vestibulum pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat sapien. Suspendisse placerat vulputate posuere. Curabitur neque tortor, mattis nec lacus non, placerat congue elit.
                    </Text>
                </Box>
            </Container>

            <Footer />
        </Box>
    )
}
