import React from 'react';
import { Flex, Image, Text, Button } from '@chakra-ui/react';

function CustomNav({ setCategory }) {
  return (
    <Flex justify="space-between" align="center" height="80px" bg="black" px={4} backgroundImage={process.env.PUBLIC_URL + '/assets/images/galaxia.png'}>
      <Flex align="center">
        <Image marginLeft={"50px"} src={process.env.PUBLIC_URL + '/assets/images/Starwars-logo.png'} alt="Star Wars Logo" maxHeight="60px" />
        <Text marginLeft={"50px"} color={"gold"} fontSize={"30px"} fontWeight={"bold"} fontFamily={"roboto"}> Jedi Archives</Text>
      </Flex>
      <Flex>
        <Button marginRight="10px" onClick={() => setCategory('characters')}>Characters</Button>
        <Button marginRight="10px" onClick={() => setCategory('planets')}>Planets</Button>
        <Button marginRight="10px" onClick={() => setCategory('starships')}>StarShips</Button>
        <Button marginRight="10px" onClick={() => setCategory('vehicles')}>Vehicles</Button>
        <Button marginRight="10px" onClick={() => setCategory('movies')}>Movies</Button>
      </Flex>
    </Flex>
  );
}

export default CustomNav;
