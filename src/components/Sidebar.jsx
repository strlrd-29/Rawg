import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerOverlay,
  useDisclosure,
  DrawerContent,
  Button
} from '@chakra-ui/react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';

const SideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        Open
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideBar;
