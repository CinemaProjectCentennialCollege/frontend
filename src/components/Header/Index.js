import {React, useState} from 'react';
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
    Modal,
    Heading,
    Checkbox,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    ModalFooter,
    HStack,
    InputGroup,
    InputRightElement,
    setShowPassword,
    

    //   Link,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';

function App() {
    const { isOpen: isLoginOpen, onOpen: openLogin, onClose: closeLogin } = useDisclosure();
    const [showPassword, setShowPassword] = useState(false);
    const [rememberPassword, setRememberPassword] = useState(false);

    const openRegister = () => {
      closeLogin();
      RegistrationPopup.open();
    };
  
    return (
      <>
        <Button onClick={openLogin}>Login</Button>
        <Modal isOpen={isLoginOpen} onClose={closeLogin}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <ModalCloseButton />
            </ModalHeader>
            <ModalBody>
              <form
                id="login-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  alert('Logged in');
                }}
              >
                <FormControl>
                  <Box p={4}>
                  <Stack align={'center'}>
                        <Heading fontSize={'3xl'}>Log In</Heading>                       
                    </Stack>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" />
                  </Box>
                    <Box p={4}>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                    <Input
                        type={showPassword ? 'text' : 'password'}
                        onChange={(e) => setShowPassword(e.target.value)}
                    />
                    <InputRightElement>
                        <IconButton
                        icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                        onClick={() => setShowPassword(!showPassword)}
                        variant="ghost"
                        />
                    </InputRightElement>
                    </InputGroup>
                </Box>
                <Box p={4}>
                    <Checkbox
                    isChecked={rememberPassword}
                    onChange={(e) => setRememberPassword(e.target.checked)}
                    >
                    Remember Password
                    </Checkbox>
                </Box>
                <Flex justifyContent="center">
                <Box p={4} flex={1}>
                <Button type="submit" form="login-form" colorScheme="blue" width="100%">
                    Log In
                </Button>
                </Box>
                </Flex>
                  <Box p={4} textAlign="center">
                    New Member?{' '}
                    <Button as="a" color="blue.400" onClick={openRegister}>
                      Click Here
                    </Button>
                  </Box>
                </FormControl>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
  
        {}
        <RegistrationPopup />
      </>
    );
  }
  
  function RegistrationPopup() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (password !== confirmPassword) {
        setPasswordError('Passwords do not match');
        return;
      }
  
      alert('Registered');
      onClose();
    };
  
    RegistrationPopup.open = () => {
      onOpen();
    };
  
    RegistrationPopup.close = () => {
      onClose();
    };

    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>
  
          <ModalBody>
            <form
              id="register-form"
              onSubmit={(event) => {
                event.preventDefault();
                alert('Registered');
              }}
            >
              <FormControl>
              <Stack align={'center'}>
                        <Heading fontSize={'3xl'}>Create Account</Heading>                       
                </Stack>
                <Box p={4}>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </Box>
                <Box p={4}>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </Box>
                <Box p={4}>
                  <FormLabel>Phone Number</FormLabel>
                  <Input type="phone" />
                </Box>
                <Box p={4}>
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" />
                </Box>
                <Box p={4}>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                    <Input
                        type={showPassword ? 'text' : 'password'}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement>
                        <IconButton
                        icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                        onClick={() => setShowPassword(!showPassword)}
                        variant="ghost"
                        />
                    </InputRightElement>
                    </InputGroup>
                </Box>
                <Box p={4}>
                    <FormLabel>Confirm Password</FormLabel>
                    <InputGroup>
                    <Input
                        type={showPassword ? 'text' : 'password'}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {passwordError && <Text color="red">{passwordError}</Text>}
                    <InputRightElement>
                        <IconButton
                        icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                        onClick={() => setShowPassword(!showPassword)}
                        variant="ghost"
                        />
                    </InputRightElement>
                    </InputGroup>
                    {passwordError && <Text color="red">{passwordError}</Text>}
                </Box>
                <Flex justifyContent="center">
                <Box p={4} flex={1}>
                <Button type="submit" form="login-form" colorScheme="blue" width="100%">
                    Sign In
                </Button>
                </Box>
                </Flex>
              </FormControl>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }


export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
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

                        <App />

                    </Stack>
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