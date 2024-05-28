import React from 'react';
import { Flex, Image,Text } from '@chakra-ui/react';

  /**
   * The websites header is created here
  */ 
function CustomNav() {
  return (
    <Flex justify="begining" align="center" height="80px" bg="black" px={4}  backgroundImage={process.env.PUBLIC_URL + '/assets/images/galaxia.png'}>
      <Image  marginLeft={"50px"} src={process.env.PUBLIC_URL + '/assets/images/Starwars-logo.png'} alt="Star Wars Logo" maxHeight="60px" /> 
      <Text marginLeft={"50px"} color={"gold"} fontSize={"30px"} fontWeight={"bold"} fontFamily={"roboto"}> Jedi Archives</Text>
    </Flex>
  );
}

export default CustomNav;
