import React from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Collapse,
  IconButton,
//   Link,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';

export default function Header() {
	const { colorMode, toggleColorMode } = useColorMode();
	// const { isOpen, onOpen, onClose } = useDisclosure();
	const { isOpen, onToggle } = useDisclosure();

	const NAV_ITEMS = [
		{
            label: 'Home',
            href: '/',
        },
        {
            label: "What's on",
            href: null,
            children: [
                {
                    label: 'All Movies',
                    subLabel: 'New and fast rising fan base',
                    href: '/all-movies',
                },
                {
                    label: 'Popular Movies',
                    subLabel: 'Trending and poupular among viewers',
                    href: '/popular-movies',
                },
            ],
        },
        {
            label: 'About Us',
            href: '/about-us',
        },
    ];

    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex pos={"relative"} h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Flex display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} />}
                        variant={"ghost"}
                        aria-label={"Toggle Navigation Menu"}
                    />
                </Flex>

                <Link to='/'>
                    <Text fontSize={"2xl"} fontWeight={"bold"} fontStyle={"italic"}>
                        CINERAMA
                    </Text>
                </Link>                

				<Flex display={{ base: 'none', md: 'flex' }} ml={10}>
					<DesktopNav navItems={NAV_ITEMS} />
				</Flex>

                <Flex alignItems={'center'}>
                    <Stack direction={'row'} spacing={7}>
                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </Stack>
                </Flex>
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <MobileNav navItems={NAV_ITEMS} />
            </Collapse>
        </Box>
    )
}

