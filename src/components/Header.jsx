import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme={'purple'}
        p={0}
        w={10}
        h={10}
        zIndex={'overlay'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>VIDEO HUB</DrawerHeader>

          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Link to={'/'}>
                <Button
                  onClick={onClose}
                  colorScheme={'purple'}
                  variant={'ghost'}
                >
                  Home
                </Button>
              </Link>
              <Link to={'/videos'}>
                <Button
                  onClick={onClose}
                  colorScheme={'purple'}
                  variant={'ghost'}
                >
                  Videos
                </Button>
              </Link>
              <Link to={'/videos?category=free'}>
                <Button
                  onClick={onClose}
                  colorScheme={'purple'}
                  variant={'ghost'}
                >
                  Free Videos
                </Button>
              </Link>
              <Link to={'/upload'}>
                <Button
                  onClick={onClose}
                  colorScheme={'purple'}
                  variant={'ghost'}
                >
                  Upload
                </Button>
              </Link>
            </VStack>

            <HStack
              pos={'absolute'}
              bottom={0}
              left={0}
              w={'full'}
              justifyContent={'space-evenly'}
              mb={4}
            >
              <Link to={'/login'}>
                <Button onClick={onClose} colorScheme={'purple'}>
                  Log In
                </Button>
              </Link>
              <Link to={'/signup'}>
                <Button
                  onClick={onClose}
                  colorScheme={'purple'}
                  variant={'ghost'}
                >
                  Sign Up
                </Button>
              </Link>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
