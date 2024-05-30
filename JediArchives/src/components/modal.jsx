import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  HStack,
  VStack,
  Image,
  Spacer,
} from "@chakra-ui/react";

/**
 * Modal displays more information about a specific item
 * items right now is only category s but future implementation could be planets, starships ..etc
 */
function CustomModal({ category , onClose }) {
  const { isOpen, onOpen, onClose: onModalClose } = useDisclosure({
    isOpen: !!category ,
    onClose,
  });

  /**
   * When modal is visible it directly displays the category  information
   */
  React.useEffect(() => {
    if (category ) {
      onOpen();
    }
  }, [category , onOpen]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onModalClose}
        isCentered={true}
        closeOnEsc={true}
        size={"3xl"}
      >
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader>{category.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>    
              <HStack>
                <VStack>
                  <Text mt={"5%"}>{category.description}</Text>
                </VStack>
                <Spacer />
                <Image
                  src={category.image}
                  borderRadius="lg"
                  style={{ height: "200px", width: "300px" }}
                />
              </HStack>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CustomModal;
