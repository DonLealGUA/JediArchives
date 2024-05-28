import React, { useState } from "react";
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
  Spinner,
  HStack,
  VStack,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { swapiApi } from "../api/SwapiAPI";

function CustomModal({ url, onClose }) {
  const {
    isOpen,
    onOpen,
    onClose: onModalClose,
  } = useDisclosure({ isOpen: !!url, onClose });
  const [characterInfo, setCharacterInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getInfoAboutCharacter = async (url) => {
    onOpen();
    setIsLoading(true);
    try {
      console.log(url);
      const characterData = await swapiApi.getCharacterById(url);
      setCharacterInfo({
        name: characterData.name,
        gender: characterData.gender,
        height: characterData.height,
        mass: characterData.mass,
        hair_color: characterData.hair_color,
        skin_color: characterData.skin_color,
        eye_color: characterData.eye_color,
      });
    } catch (error) {
      console.error("Error fetching character info:", error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (url) {
      getInfoAboutCharacter(url);
    }
  }, [url]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onModalClose}
        isCentered={true}
        closeOnEsc={true}
        size={"2xl"}
      >
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader>{characterInfo?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isLoading ? (
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            ) : (
              <HStack>
                <VStack>
                  <Text mt={"5%"}>Gender: {characterInfo?.gender}</Text>
                  <Text mt={"5%"}>Height: {characterInfo?.height}</Text>
                  <Text mt={"5%"}>Mass: {characterInfo?.mass}</Text>
                  <Text mt={"5%"}>Hair color: {characterInfo?.hair_color}</Text>
                  <Text mt={"5%"}>Skin color: {characterInfo?.skin_color}</Text>
                  <Text mt={"5%"}>Eye color: {characterInfo?.eye_color}</Text>
                </VStack>
                <Spacer />
                <Image
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/characters/" +
                    characterInfo?.name +
                    ".jpg"
                  }
                  borderRadius="lg"
                  style={{ height: "200px", width: "300px" }}
                />
              </HStack>
            )}
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CustomModal;
