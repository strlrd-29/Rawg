import {
  Avatar,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Kbd
} from '@chakra-ui/react';
import NexxtLink from 'next/link';
import { useRef } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { IoSearchOutline } from 'react-icons/io5';

function Header() {
  const inputRef = useRef();
  useHotkeys('alt+enter, command+enter', () => {
    inputRef.current.focus();
  });

  return (
    <HStack
      as="header"
      py={6}
      px={10}
      spacing="16px"
      justifyContent="space-between"
      alignItems="center"
    >
      <NexxtLink href="/" passHref>
        <a>
          <Heading
            size={6}
            fontWeight="900"
            letterSpacing="5px"
            textDecoration="none"
            variant="ghost"
          >
            RAWG
          </Heading>
        </a>
      </NexxtLink>
      <InputGroup
        role="group"
        display="block"
        rounded="full"
        _hover={{ bg: 'white' }}
        bg="cardbg"
        transition="all 0.3s ease-in-out"
        maxW="700px"
      >
        <InputLeftElement
          _groupHover={{
            color: '#151515'
          }}
        >
          <IoSearchOutline />
        </InputLeftElement>
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search 641,499 games"
          variant="ghost"
          rounded="full"
          bg="transparent"
          _placeholder={{
            color: 'gray.400'
          }}
          _groupHover={{
            color: '#151515',
            _placeholder: {
              color: '#202020'
            }
          }}
          width="100%"
        />
        <InputRightElement
          mr={10}
          color="white"
          _groupHover={{
            color: '#151515'
          }}
          display={{ base: 'none', md: 'flex' }}
        >
          <Kbd bg="transparent">alt</Kbd> + <Kbd bg="transparent">enter</Kbd>
        </InputRightElement>
      </InputGroup>
      <NexxtLink href="/profile" passHref>
        <a>
          <Avatar
            size="sm"
            name="Ouassim Ghribi"
            src="https://avatars.dicebear.com/api/male/john.svg?mood[]=happy"
          />
        </a>
      </NexxtLink>
    </HStack>
  );
}

export default Header;
