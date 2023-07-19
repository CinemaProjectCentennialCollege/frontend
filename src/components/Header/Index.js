import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Collapse,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';


export default function Header() {
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const NAV_ITEMS = [
		{
            label: 'Home',
            href: '/',
        },
        {
            label: "What's on",
            children: [
                {
                    label: 'New In',
                    subLabel: 'New and fast rising fan base',
                    href: '/new-in',
                },
                {
                    label: 'Popular',
                    subLabel: 'Trending and poupular among viewers',
                    href: '/popular',
                },
            ],
        },
        {
            label: 'About',
            href: '/about',
        },
    ];

    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Box>Cinerama</Box>

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

				<Collapse in={isOpen} animateOpacity>
					<MobileNav navItems={NAV_ITEMS} />
				</Collapse>
            </Flex>
        </Box>
    )
}



// export default function Header() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   const { isOpen, onOpen, onClose } = useDisclosure();


//     return (
//         <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
//             <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
//                 <Box>Cinerama</Box>

//                 <Flex alignItems={'center'}>
//                     <Stack direction={'row'} spacing={7}>
//                         <Button onClick={toggleColorMode}>
//                             {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
//                         </Button>

                        
                        


//                     </Stack>
//                 </Flex>
//             </Flex>
//         </Box>
//     )
// }
