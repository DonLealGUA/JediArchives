import React from 'react';
import { Flex, Image,Text } from '@chakra-ui/react';
import logo from '../assets/images/Starwars-logo.png';

function CustomNav() {
  return (
    <Flex justify="begining" align="center" height="80px" bg="black" px={4}>
      <Image  marginLeft={"50px"} src={logo} alt="Star Wars Logo" maxHeight="60px" />
      <Text marginLeft={"50px"} color={"gold"} fontSize={"30px"} fontWeight={"bold"} fontFamily={"roboto"}> Jedi Archives</Text>
    </Flex>
  );
}

export default CustomNav;
