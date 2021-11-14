import { Container, HStack, VStack } from '@chakra-ui/react';

//components import
import Header from './Header';

function Layout({ children }) {
  return (
    <Container
      display="flex"
      maxW="container.xl"
      minH={{ base: 'auto', md: '100vh' }}
      p={0}
      bg="bg"
    >
      <VStack
        flex={1}
        spacing={0}
        alignItems="stretch"
        // justifyContent="space-between"
      >
        <Header />
        {children}
      </VStack>
    </Container>
  );
}

export default Layout;
