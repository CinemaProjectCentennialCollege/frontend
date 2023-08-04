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
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';


export default function RegisterModal({ isOpen, onClose }) {  
  const [email, setEmail] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    alert('Registered and logged in');
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
          <form id="register-form" onSubmit={handleSubmit}>
            <FormControl>
              <Stack align={'center'}>
                <Heading fontSize={'3xl'}>Create Account</Heading>
              </Stack>
              <Box p={4}>
                <FormLabel for="firstname">First Name</FormLabel>
                <Input value={firstname} onChange={(e) => setFirstName(e.target.value)} type="text" />
              </Box>
              <Box p={4}>
                <FormLabel for="lastname">Last Name</FormLabel>
                <Input value={lastname} onChange={(e) => setLastName(e.target.value)} type="text" />
              </Box>
              <Box p={4}>
                <FormLabel for="email">Email address</FormLabel>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
              </Box>
              <Box p={4}>
                <FormLabel for="password">Password</FormLabel>
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
              <Flex justifyContent="center">
                <Box p={4} flex={1}>
                  <Button type="submit" form="register-form" colorScheme="blue" width="100%">
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