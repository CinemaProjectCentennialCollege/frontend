import React from 'react';
import { useLoaderData, useNavigation } from "react-router-dom";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react'
import Header from '../../components/Header/Index';
import Footer from '../../components/Footer/Index';
import PageHeading from '../../components/PageHeading/Index';
import PageActivityIndicator from '../../components/loader/PageActivityIndicator';

import { MdLocalShipping } from 'react-icons/md';


export default function Index() {
    const navigation = useNavigation();
    const { movie } = useLoaderData();
    console.log("movie: ", movie)

    // if (navigation.state === "loading") {
    //     return (
    //         <PageActivityIndicator />
    //     )
    // }

    return (
        <Box>
            <Header />

                <Container maxWidth={["2xl","2xl","3xl", "4xl", "6xl"]}>
                    <SimpleGrid
                        columns={{ base: 1, lg: 2 }}
                        spacing={{ base: 8, md: 10 }}
                        py={{ base: 18, md: 24 }}
                    >
                        <Flex>
                            <Image
                            rounded={'md'}
                            src={`https://www.dvdplanetstore.pk/wp-content/uploads/2017/12${movie.poster_path}`} 
                            alt={`Picture of ${movie.title}`} 
                            onError={(ev)=>{
                                ev.target.src = "https://c1.staticflickr.com/4/3896/14550191836_cc0675d906.jpg"
                            }}
                            fit={'cover'}
                            align={'center'}
                            w={'100%'}
                            h={{ base: '100%', sm: '400px', lg: '500px' }}
                            />
                        </Flex>
                        <Stack spacing={{ base: 6, md: 10 }}>
                            <Box as={'header'}>
                                <Heading
                                    lineHeight={1.1}
                                    fontWeight={600}
                                    fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
                                >
                                    {movie.title}
                                </Heading>
                                <Text
                                    color={useColorModeValue('gray.900', 'gray.400')}
                                    fontWeight={300}
                                    fontSize={'md'}
                                    mb={2}
                                >
                                    {movie.tagline}
                                </Text>

                                <VStack spacing={{ base: 4, sm: 6 }}>
                                    <Text
                                    color={useColorModeValue('gray.500', 'gray.400')}
                                    fontSize={'2xl'}
                                    fontWeight={'300'}>
                                        {movie.overview}
                                    </Text>
                                </VStack>
                            </Box>

                            <Box>
                                <Text
                                    fontSize={{ base: '16px', lg: '18px' }}
                                    color={useColorModeValue('yellow.500', 'yellow.300')}
                                    fontWeight={'500'}
                                    textTransform={'uppercase'}
                                    mb={'4'}
                                >
                                    Features
                                </Text>

                                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                                    <List spacing={2}>
                                        <ListItem>Original Title</ListItem>
                                        <ListItem>Original Language</ListItem>{' '}
                                        <ListItem>Budget</ListItem>
                                        <ListItem>Revenue</ListItem>
                                        <ListItem>Runtime</ListItem>
                                    </List>
                                    <List spacing={2}>
                                        <ListItem>{movie.original_title}</ListItem>
                                        <ListItem>{movie.original_language}</ListItem>
                                        <ListItem>${movie.budget}</ListItem>
                                        <ListItem>${movie.revenue}</ListItem>
                                        <ListItem>{movie.runtime} hrs</ListItem>
                                    </List>
                                </SimpleGrid>
                            </Box>
                        </Stack>
                    </SimpleGrid>

                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={'column'}
                        justifyContent={"space-between"}
                        // alignItems={""}
                        divider={
                            <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
                        }
                    >
                        <Box>
                            <Text
                            fontSize={{ base: '16px', lg: '18px' }}
                            color={useColorModeValue('yellow.500', 'yellow.300')}
                            fontWeight={'500'}
                            textTransform={'uppercase'}
                            mb={'4'}>
                                Features
                            </Text>

                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                                <List spacing={2}>
                                    <ListItem>Chronograph</ListItem>
                                    <ListItem>Master Chronometer Certified</ListItem>{' '}
                                    <ListItem>Tachymeter</ListItem>
                                </List>
                                <List spacing={2}>
                                    <ListItem>Anti‑magnetic</ListItem>
                                    <ListItem>Chronometer</ListItem>
                                    <ListItem>Small seconds</ListItem>
                                </List>
                            </SimpleGrid>
                        </Box>
                        <Box>
                            <Text
                                fontSize={{ base: '16px', lg: '18px' }}
                                color={useColorModeValue('yellow.500', 'yellow.300')}
                                fontWeight={'500'}
                                textTransform={'uppercase'}
                                mb={'4'}
                            >
                                Product Details
                            </Text>

                            <List spacing={2}>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                    Between lugs:
                                    </Text>{' '}
                                    20 mm
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                    Bracelet:
                                    </Text>{' '}
                                    leather strap
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                    Case:
                                    </Text>{' '}
                                    Steel
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                    Case diameter:
                                    </Text>{' '}
                                    42 mm
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                    Dial color:
                                    </Text>{' '}
                                    Black
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                    Crystal:
                                    </Text>{' '}
                                    Domed, scratch‑resistant sapphire crystal with anti‑reflective treatment
                                    inside
                                </ListItem>
                                <ListItem>
                                    <Text as={'span'} fontWeight={'bold'}>
                                    Water resistance:
                                    </Text>{' '}
                                    5 bar (50 metres / 167 feet){' '}
                                </ListItem>
                            </List>
                        </Box>
                    </Stack>

                {/* <Button
                    rounded={'none'}
                    w={'full'}
                    mt={8}
                    size={'lg'}
                    py={'7'}
                    bg={useColorModeValue('gray.900', 'gray.50')}
                    color={useColorModeValue('white', 'gray.900')}
                    textTransform={'uppercase'}
                    _hover={{
                        transform: 'translateY(2px)',
                        boxShadow: 'lg',
                    }}>
                    Add to cart
                </Button>

                <Stack direction="row" alignItems="center" justifyContent={'center'}>
                    <MdLocalShipping />
                    <Text>2-3 business days delivery</Text>
                </Stack> */}
            </Container>

            <Footer />
        </Box>
    )
}